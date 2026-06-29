import Button from "../../components/ui/Button";
import ProductBrowserFrame from "./ProductBrowserFrame";
import StreamlitChatIllustration from "./StreamlitChatIllustration";
import styles from "./Projects.module.css";

export default function ProjectCard({ project, reversed = false }) {
  const panelClass = [styles.panel, reversed ? styles.reversed : ""]
    .filter(Boolean)
    .join(" ");

  const demoLabel = project.liveDemo ? "Live Demo" : "View Details";
  const demoHref = project.liveDemo ?? "#";

  return (
    <article className={panelClass} aria-labelledby={`project-${project.id}`}>
      <div className={styles.panelAccent} aria-hidden="true" />

      <div className={styles.badgeRow}>
        <span className={styles.categoryBadge}>{project.category}</span>
        <span className={styles.statusBadge}>{project.status}</span>
      </div>

      <div className={styles.panelInner}>
        <div className={styles.mediaCol}>
          <div
            className={styles.mediaFrame}
            style={
              project.previewAspectRatio
                ? { aspectRatio: project.previewAspectRatio }
                : undefined
            }
          >
            <ProductBrowserFrame url={project.previewUrl}>
              {project.useIllustration ? (
                <StreamlitChatIllustration />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.title} product screenshot`}
                  className={styles.screenshot}
                />
              )}
            </ProductBrowserFrame>
          </div>
        </div>

        <div className={styles.storyCol}>
          <h3 id={`project-${project.id}`} className={styles.projectTitle}>
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
      </div>
    </article>
  );
}
