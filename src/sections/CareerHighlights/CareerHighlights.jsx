import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import { careerHighlights, careerSection } from "../../content/career";
import HighlightCard from "./HighlightCard";
import styles from "./CareerHighlights.module.css";

export default function CareerHighlights() {
  return (
    <Section
      id="career"
      className={styles.section}
      ariaLabelledby="career-heading"
    >
      <Container>
        <SectionHeader
          eyebrow={careerSection.eyebrow}
          title={careerSection.title}
          intro={careerSection.intro}
          titleId="career-heading"
        />

        <ul className={styles.grid}>          {careerHighlights.map((highlight) => (
            <li key={highlight.id} className={styles.gridItem}>
              <HighlightCard highlight={highlight} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
