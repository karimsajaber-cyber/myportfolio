import illustrationImage from "../../assets/experience-illustration.png";
import { featuredExperience } from "../../content/featuredExperience";
import FeaturedCardChip from "./FeaturedCardChip";
import {
  CalendarIcon,
  CheckIcon,
  CodeIcon,
  StarIcon,
} from "./FeaturedCardIcons";
import styles from "./FeaturedCard.module.css";

export default function FeaturedCard() {
  const data = featuredExperience;

  return (
    <article className={styles.card} aria-labelledby="featured-experience-title">
      <img
        className={styles.illustration}
        src={illustrationImage}
        alt=""
        aria-hidden="true"
        decoding="async"
      />

      <div className={styles.content}>
        <div className={styles.badge}>
          <StarIcon />
          <span>{data.badge}</span>
        </div>

        <div className={styles.headerRow}>
          <div className={styles.roleIcon} aria-hidden="true">
            <CodeIcon />
          </div>
          <div className={styles.headerText}>
            <h3 id="featured-experience-title" className={styles.title}>
              {data.title}
            </h3>
            <p className={styles.company}>
              <span>{data.company}</span>
              <span className={styles.divider} aria-hidden="true">
                |
              </span>
              <span className={styles.duration}>
                <CalendarIcon />
                <span>{data.duration}</span>
              </span>
            </p>
          </div>
        </div>

        <p className={styles.summary}>{data.summary}</p>

        <ul className={styles.bullets}>
          {data.highlights.map((item) => (
            <li key={item} className={styles.bullet}>
              <span className={styles.bulletCheck} aria-hidden="true">
                <CheckIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {data.skillRows.map((row) => (
          <ul key={row.join("-")} className={styles.techRow}>
            {row.map((skill) => (
              <li key={skill}>
                <FeaturedCardChip label={skill} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </article>
  );
}
