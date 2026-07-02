import { useEffect, useRef, useState } from "react";
import Button from "../../components/ui/Button";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import { ctaSection } from "../../content/cta";
import styles from "./CTA.module.css";

const CTA_PHONE_NUMBER = "+970-598396658";

function CtaPhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 4.5h3l1.2 3.2a1 1 0 0 1-.24.98l-1.58 1.58a12.5 12.5 0 0 0 5.54 5.54l1.58-1.58a1 1 0 0 1 .98-.24l3.2 1.2v3a1 1 0 0 1-.92 1A15.5 15.5 0 0 1 5.42 5.42a1 1 0 0 1 1-.92Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CTA() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const contactPopupRef = useRef(null);

  useEffect(() => {
    if (!isContactPopupOpen) {
      return undefined;
    }

    function handlePointerDown(event) {
      if (
        contactPopupRef.current &&
        !contactPopupRef.current.contains(event.target)
      ) {
        setIsContactPopupOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsContactPopupOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isContactPopupOpen]);

  return (
    <Section id="cta" className={styles.section} ariaLabelledby="cta-heading">
      <Container>
        <div className={styles.wrapper}>
          <article className={styles.card}>
            <div className={styles.cardAccent} aria-hidden="true" />

            <SectionHeader
              eyebrow={ctaSection.eyebrow}
              title={ctaSection.title}
              intro={ctaSection.intro}
              titleId="cta-heading"
              spacing="none"
            />

            <div className={styles.actions}>
              <div className={styles.contactPopupWrap} ref={contactPopupRef}>
                <Button
                  variant="primary"
                  aria-expanded={isContactPopupOpen}
                  aria-controls="cta-contact-popup"
                  onClick={() => setIsContactPopupOpen((open) => !open)}
                >
                  {ctaSection.primaryCta.label}
                </Button>

                {isContactPopupOpen ? (
                  <div
                    id="cta-contact-popup"
                    className={styles.contactPopup}
                    role="dialog"
                    aria-label="Phone contact"
                  >
                    <span className={styles.contactPopupIcon} aria-hidden="true">
                      <CtaPhoneIcon />
                    </span>
                    <span className={styles.contactPopupText}>
                      <span className={styles.contactPopupLabel}>Phone</span>
                      <span className={styles.contactPopupNumber}>
                        {CTA_PHONE_NUMBER}
                      </span>
                    </span>
                  </div>
                ) : null}
              </div>

              <a
                href={ctaSection.secondaryCta.href}
                className={styles.textLink}
                download=""
              >
                {ctaSection.secondaryCta.label}
              </a>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
