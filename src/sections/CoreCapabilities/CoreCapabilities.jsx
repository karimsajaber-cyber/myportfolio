import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import {
  capabilities,
  capabilitiesSection,
} from "../../content/capabilities";
import CapabilityIcon from "./CapabilityIcon";
import { SkillChipIcon } from "../ProfessionalExperience/FeaturedCardIcons";
import styles from "./CoreCapabilities.module.css";

export default function CoreCapabilities() {
  return (
    <Section
      id="capabilities"
      className={styles.section}
      ariaLabelledby="capabilities-heading"
    >
      <Container>
        <SectionHeader
          eyebrow={capabilitiesSection.eyebrow}
          title={capabilitiesSection.title}
          intro={capabilitiesSection.intro}
          titleId="capabilities-heading"
        />

        <ul className={styles.grid}>
          {capabilities.map((capability) => (
            <li key={capability.title} className={styles.gridItem}>
              <article className={styles.card}>
                <div className={styles.cardAccent} aria-hidden="true" />

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>
                    <span className={styles.cardTitleInner}>
                      <CapabilityIcon
                        name={capability.icon}
                        className={styles.cardTitleIcon}
                      />
                      <span>{capability.title}</span>
                    </span>
                  </h3>
                  <p className={styles.cardDescription}>
                    {capability.description}
                  </p>
                </div>

                <ul
                  className={[
                    styles.itemList,
                    capability.skillsColumns === 3
                      ? styles.itemListCols3
                      : styles.itemListCols2,
                    capability.skillsTextCenter ? styles.itemListTextCenter : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-label={`${capability.title} skills`}
                >
                  {capability.items.map((item) => (
                    <li key={item} className={styles.itemListEntry}>
                      <span className={styles.item}>
                        <span className={styles.itemIcon} aria-hidden="true">
                          <SkillChipIcon label={item} />
                        </span>
                        <span className={styles.itemLabel}>{item}</span>
                      </span>
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
