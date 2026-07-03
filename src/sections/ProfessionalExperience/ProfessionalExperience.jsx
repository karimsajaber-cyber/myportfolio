import { useCallback, useEffect, useRef, useState } from "react";

import experienceCards from "../../content/experienceCards";
import ExperienceCard from "./ExperienceCard";
import ExperienceDetails, { PANEL_ANIMATION_MS } from "./ExperienceDetails";
import FeaturedCard from "./FeaturedCard";
import styles from "./ProfessionalExperience.module.css";

function getCardOrigin(event) {
  const cardElement = event.currentTarget.closest("article");

  if (!cardElement) {
    return null;
  }

  const rect = cardElement.getBoundingClientRect();

  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

export default function ProfessionalExperience() {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isPanelClosing, setIsPanelClosing] = useState(false);
  const [panelOrigin, setPanelOrigin] = useState(null);
  const closeTimeoutRef = useRef(null);
  const scrollPositionRef = useRef(0);

  const activeCard =
    experienceCards.find((card) => card.id === expandedCardId) ?? null;

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => () => clearCloseTimeout(), [clearCloseTimeout]);

  useEffect(() => {
    if (!expandedCardId || !isPanelOpen || isPanelClosing) {
      return undefined;
    }

    scrollPositionRef.current = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      window.scrollTo(0, scrollPositionRef.current);
    };
  }, [expandedCardId, isPanelClosing, isPanelOpen]);

  const openPanel = useCallback(
    (cardId, origin) => {
      clearCloseTimeout();
      setPanelOrigin(origin);
      setExpandedCardId(cardId);
      setIsPanelClosing(false);
      setIsPanelOpen(true);
    },
    [clearCloseTimeout],
  );

  const closePanel = useCallback(() => {
    if (!expandedCardId || isPanelClosing) {
      return;
    }

    clearCloseTimeout();
    setIsPanelClosing(true);
    setIsPanelOpen(false);

    closeTimeoutRef.current = window.setTimeout(() => {
      setExpandedCardId(null);
      setIsPanelClosing(false);
      setPanelOrigin(null);
      window.scrollTo(0, scrollPositionRef.current);
      closeTimeoutRef.current = null;
    }, PANEL_ANIMATION_MS);
  }, [clearCloseTimeout, expandedCardId, isPanelClosing]);

  const handleToggle = useCallback(
    (cardId, event) => {
      if (expandedCardId === cardId) {
        closePanel();
        return;
      }

      openPanel(cardId, getCardOrigin(event));
    },
    [closePanel, expandedCardId, openPanel],
  );

  return (
    <section
      id="experience"
      className={styles.section}
      aria-label="Professional Experience"
    >
      <div className={styles.shell}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Experience</span>

          <h2 className={styles.title}>Professional Experience</h2>

          <p className={styles.description}>
            From software development and product engineering to customer support
            and operations, combining technical expertise with real-world problem
            solving.
          </p>
        </div>

        <div className={styles.featuredWrap}>
          <FeaturedCard />
        </div>

        <div className={styles.cardsGrid}>
          {experienceCards.map((card) => (
            <ExperienceCard
              key={card.id}
              card={card}
              expanded={expandedCardId === card.id && isPanelOpen}
              onToggle={(event) => handleToggle(card.id, event)}
            />
          ))}
        </div>

        {activeCard && (
          <ExperienceDetails
            card={activeCard}
            isOpen={isPanelOpen}
            isClosing={isPanelClosing}
            origin={panelOrigin}
            onClose={closePanel}
          />
        )}

      </div>
    </section>
  );
}
