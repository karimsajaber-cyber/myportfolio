import styles from "./PublicationDocument.module.css";

function DocumentIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3.5h5.2L18 8.3V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M13 3.5V8.5H18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12h7M8.5 14.5h7M8.5 17h4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PublicationDocument({ title, journal, year }) {
  return (
    <div className={styles.sheet} aria-hidden="true">
      <div className={styles.sheetHeader}>
        <DocumentIcon />
        <span className={styles.sheetLabel}>Publication</span>
      </div>

      <p className={styles.sheetTitle}>{title}</p>

      <div className={styles.lines}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={`${styles.line} ${styles.lineShort}`} />
      </div>

      <p className={styles.sheetFooter}>
        {journal} · {year}
      </p>
    </div>
  );
}
