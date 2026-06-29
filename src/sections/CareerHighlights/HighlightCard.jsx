import CareerHighlightIcon from "./CareerHighlightIcon";
import styles from "./HighlightCard.module.css";

export default function HighlightCard({ highlight }) {
  return (
    <article className={styles.card} aria-labelledby={`career-${highlight.id}`}>
      <div className={styles.cardAccent} aria-hidden="true" />

      <header className={styles.cardHeader}>
        <h3 id={`career-${highlight.id}`} className={styles.company}>
          <span className={styles.companyTitle}>
            <CareerHighlightIcon
              name={highlight.icon}
              className={styles.companyIcon}
            />
            <span>{highlight.company}</span>
          </span>
        </h3>
        <p className={styles.position}>{highlight.position}</p>
        <p className={styles.date}>{highlight.date}</p>
      </header>

      <p className={styles.description}>{highlight.description}</p>

      <ul className={styles.highlightList} aria-label={`${highlight.company} highlights`}>
        {highlight.highlights.map((item) => (
          <li key={item} className={styles.highlightItem}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
