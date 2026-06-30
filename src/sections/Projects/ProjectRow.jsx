import ProjectPreview from "./ProjectPreview";
import ProjectStory from "./ProjectStory";
import styles from "./ProjectRow.module.css";

export default function ProjectRow({ project, reversed = false, isLast = false }) {
  const rowClass = [
    styles.row,
    reversed ? styles.reversed : "",
    isLast ? styles.last : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={rowClass} aria-labelledby={`project-${project.id}`}>
      <div className={styles.story}>
        <ProjectStory project={project} />
      </div>
      <div className={styles.preview}>
        <ProjectPreview project={project} />
      </div>
    </article>
  );
}
