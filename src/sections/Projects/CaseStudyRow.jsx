import Button from "../../components/ui/Button";
import ProductBrowserFrame from "./ProductBrowserFrame";
import StreamlitChatIllustration from "./StreamlitChatIllustration";
import {
  CheckIcon,
  GitHubIcon,
  ProjectBrandIcon,
  SectionDocumentIcon,
  SectionLayersIcon,
  SectionPersonIcon,
  SectionStarIcon,
} from "./CaseStudyIcons";
import { SkillChipIcon } from "../ProfessionalExperience/FeaturedCardIcons";
import styles from "./CaseStudyRow.module.css";

function SectionHeading({ icon, label }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.sectionIcon}>{icon}</span>
      <h4 className={styles.sectionLabel}>{label}</h4>
    </div>
  );
}

function isActionHref(href) {
  if (href == null) {
    return false;
  }

  const trimmed = String(href).trim();
  return trimmed.length > 0 && trimmed !== "#";
}

export default function CaseStudyRow({ project, isLast = false }) {
  const rowClass = [styles.row, isLast ? styles.last : ""].filter(Boolean).join(" ");

  return (
    <article
      id={project.id}
      className={rowClass}
      aria-labelledby={`project-${project.id}`}
    >
      <div className={styles.card}>
        <header className={styles.brand}>
          <div className={styles.brandIcon} aria-hidden="true">
            <ProjectBrandIcon type={project.icon} />
          </div>
          <div className={styles.brandText}>
            <h3 id={`project-${project.id}`} className={styles.title}>
              {project.title}
            </h3>
            <p className={styles.tagline}>{project.tagline}</p>
          </div>
        </header>

        <div className={styles.preview}>
          <div className={styles.previewShell}>
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

        <section className={styles.overview}>
          <SectionHeading icon={<SectionDocumentIcon />} label="Overview" />
          <p className={styles.bodyText}>{project.overview}</p>
          <hr className={styles.divider} />
        </section>

        <section className={styles.contribution}>
          <SectionHeading icon={<SectionPersonIcon />} label="My Contribution" />
          <p className={styles.bodyText}>{project.contribution}</p>
          <hr className={styles.divider} />
        </section>

        <section className={styles.features}>
          <SectionHeading icon={<SectionStarIcon />} label="Key Features" />
          <ul
            className={[
              styles.featureList,
              project.featuresLayout === "two-by-two" ? styles.featureListTwoByTwo : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {project.features.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <span className={styles.featureCheck} aria-hidden="true">
                  <CheckIcon />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.tech}>
          <SectionHeading icon={<SectionLayersIcon />} label="Technical Highlights" />
          <ul
            className={styles.techList}
            aria-label={`${project.title} technical highlights`}
          >
            {project.technicalHighlights.map((item) => (
              <li key={item}>
                <span className={styles.techChip}>
                  <span className={styles.techChipIcon} aria-hidden="true">
                    <SkillChipIcon label={item} />
                  </span>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {isActionHref(project.github) ? (
          <div className={styles.actions}>
            <Button
              variant="secondary"
              href={project.github}
              className={styles.actionBtn}
            >
              <span>GitHub Repository</span>
              <GitHubIcon />
            </Button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
