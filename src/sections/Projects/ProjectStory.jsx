import Button from "../../components/ui/Button";
import styles from "./ProjectStory.module.css";

export default function ProjectStory({ project }) {
  const demoLabel = project.liveDemo ? "Live Demo" : "View Details";
  const demoHref = project.liveDemo ?? "#";

  return (
    <div className={styles.story}>
      <div className={styles.badgeRow}>
        <span className={styles.categoryBadge}>{project.category}</span>
        <span className={styles.statusBadge}>{project.status}</span>
      </div>

      <h3 id={`project-${project.id}`} className={styles.title}>
        {project.title}
      </h3>

      <div className={styles.storyBlock}>
        <span className={styles.storyLabel}>Challenge</span>
        <p className={styles.storyText}>{project.problem}</p>
      </div>

      <div className={styles.storyBlock}>
        <span className={styles.storyLabel}>Approach</span>
        <p className={styles.storyText}>{project.solution}</p>
      </div>

      <div className={styles.storyBlock}>
        <span className={styles.storyLabel}>Impact</span>
        <p className={styles.storyText}>{project.outcome}</p>
      </div>

      <ul
        className={styles.techList}
        aria-label={`${project.title} technologies`}
      >
        {project.technologies.map((tech) => (
          <li key={tech}>
            <span className={styles.techChip}>{tech}</span>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <Button variant="primary" href={demoHref}>
          {demoLabel}
        </Button>
        <Button variant="secondary" href={project.github}>
          GitHub
        </Button>
      </div>
    </div>
  );
}
