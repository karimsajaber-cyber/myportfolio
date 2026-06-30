import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import { projects, projectsSection } from "../../content/projects";
import CaseStudyRow from "./CaseStudyRow";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section
      id="projects"
      className={styles.section}
      ariaLabelledby="projects-heading"
    >
      <Container>
        <SectionHeader
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
          intro={projectsSection.intro}
          titleId="projects-heading"
          spacing="none"
          className={styles.header}
        />

        <div className={styles.list}>
          {projects.map((project, index) => (
            <CaseStudyRow
              key={project.id}
              project={project}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
