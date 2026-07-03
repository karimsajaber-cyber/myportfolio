import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import FeaturedCardChip from "./FeaturedCardChip";
import { CheckIcon } from "./FeaturedCardIcons";
import styles from "./ExperienceDetails.module.css";

const PANEL_ANIMATION_MS = 300;

export { PANEL_ANIMATION_MS };

export default function ExperienceDetails({
  card,
  isOpen,
  isClosing,
  origin,
  onClose,
}) {
  const panelRef = useRef(null);
  const hasDetails = Array.isArray(card.details) && card.details.length > 0;
  const hasTools = Array.isArray(card.tools) && card.tools.length > 0;

  const panelState = isClosing
    ? styles.panelClosing
    : isOpen
      ? styles.panelOpen
      : styles.panelIdle;

  const backdropState = isClosing
    ? styles.backdropClosing
    : isOpen
      ? styles.backdropOpen
      : styles.backdropIdle;

  const originStyle = origin
    ? {
      "--origin-x": `${origin.x}px`,
      "--origin-y": `${origin.y}px`,
    }
    : undefined;

  useEffect(() => {
    if (!isOpen || isClosing) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    panelRef.current?.focus();

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isClosing, isOpen, onClose]);

  return createPortal(
    <div
      className={`${styles.backdrop} ${backdropState}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        ref={panelRef}
        className={`${styles.panel} ${panelState}`}
        style={originStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`experience-details-${card.id}`}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <div key={card.id} className={styles.inner}>
          <header className={styles.header}>
            <h3 id={`experience-details-${card.id}`} className={styles.title}>
              {card.title}
            </h3>
            <p className={styles.company}>{card.company}</p>
          </header>

          {hasDetails && (
            <div className={styles.section}>
              <h4 className={styles.sectionHeading}>Core Responsibilities</h4>
              <ul className={styles.list}>
                {card.details.map((item) => {
                  const [company, ...description] = item.split("—");

                  return (
                    <li key={item} className={styles.listItem}>
                      <span className={styles.check} aria-hidden="true">
                        <CheckIcon />
                      </span>

                      <span>
                        <strong>{company.trim()}</strong>
                        {description.length > 0 && ` — ${description.join("—").trim()}`}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {hasTools && (
            <div className={`${styles.section} ${styles.toolsSection}`}>
              <h4 className={styles.sectionHeading}>Technologies</h4>
              <div className={styles.tools}>
                {card.tools.map((tool) => (
                  <FeaturedCardChip key={tool} label={tool} />
                ))}
              </div>
            </div>
          )}

          <button type="button" className={styles.closeButton} onClick={onClose}>
            Hide Details
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
