import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import { educationItems, educationSection } from "../../content/education";
import EducationCard from "./EducationCard";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <Section
      id="education"
      className={styles.section}
      ariaLabelledby="education-heading"
    >
      <Container>
        <SectionHeader
          eyebrow={educationSection.eyebrow}
          title={educationSection.title}
          intro={educationSection.intro}
          titleId="education-heading"
        />

        <ul className={styles.grid}>          {educationItems.map((item) => (
            <li key={item.id} className={styles.gridItem}>
              <EducationCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
