import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { projects, projectsSection } from "../../content/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section
      id="projects"
      className={styles.section}
      ariaLabelledby="projects-heading"
    >
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{projectsSection.eyebrow}</p>
          <h2 id="projects-heading" className={styles.title}>
            {projectsSection.title}
          </h2>
          <p className={styles.intro}>{projectsSection.intro}</p>
        </header>

        <ul className={styles.list}>
          {projects.map((project, index) => (
            <li key={project.id} className={styles.listItem}>
              <ProjectCard project={project} reversed={index % 2 === 1} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
