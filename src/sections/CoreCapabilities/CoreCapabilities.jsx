import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import {
  capabilities,
  capabilitiesSection,
} from "../../content/capabilities";
import styles from "./CoreCapabilities.module.css";

export default function CoreCapabilities() {
  return (
    <Section
      id="capabilities"
      className={styles.section}
      ariaLabelledby="capabilities-heading"
    >
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{capabilitiesSection.eyebrow}</p>
          <h2 id="capabilities-heading" className={styles.title}>
            {capabilitiesSection.title}
          </h2>
          <p className={styles.intro}>{capabilitiesSection.intro}</p>
        </header>

        <ul className={styles.grid}>
          {capabilities.map((capability) => (
            <li key={capability.title} className={styles.gridItem}>
              <article className={styles.card}>
                <div className={styles.cardAccent} aria-hidden="true" />

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{capability.title}</h3>
                  <p className={styles.cardDescription}>
                    {capability.description}
                  </p>
                </div>

                <ul className={styles.itemList} aria-label={`${capability.title} skills`}>
                  {capability.items.map((item) => (
                    <li key={item}>
                      <span className={styles.item}>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
