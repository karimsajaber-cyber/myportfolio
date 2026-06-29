import Button from "../../components/ui/Button";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import { ctaSection } from "../../content/cta";
import styles from "./CTA.module.css";

export default function CTA() {
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

            <div className={styles.actions}>              <Button variant="primary" href={ctaSection.primaryCta.href}>
                {ctaSection.primaryCta.label}
              </Button>
              <a href={ctaSection.secondaryCta.href} className={styles.textLink}>
                {ctaSection.secondaryCta.label}
              </a>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
