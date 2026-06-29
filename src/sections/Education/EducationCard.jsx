import styles from "./EducationCard.module.css";

export default function EducationCard({ item }) {
  return (
    <article className={styles.card} aria-labelledby={`education-${item.id}`}>
      <div className={styles.cardAccent} aria-hidden="true" />

      {item.category ? (
        <p className={styles.category}>{item.category}</p>
      ) : null}

      <header className={styles.cardHeader}>
        <h3 id={`education-${item.id}`} className={styles.institution}>
          {item.institution}
        </h3>
        <p className={styles.program}>{item.program}</p>
        <p className={styles.date}>{item.date}</p>
      </header>

      <p className={styles.description}>{item.description}</p>
    </article>
  );
}
