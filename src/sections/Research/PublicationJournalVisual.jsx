import styles from "./PublicationJournalVisual.module.css";

function MicroscopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 3.5h6M12 3.5v3M8.5 9.5h7a2 2 0 0 1 2 2v1.5H6.5V11.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 13h11M10.5 13v3.5a3 3 0 0 0 3 0V13"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19.5h14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PublicationJournalVisual({ title }) {
  return (
    <div className={styles.shell} aria-hidden="true">
      <div className={styles.composition}>
        <div className={styles.journal}>
          <div className={styles.journalSpine} />
          <div className={styles.journalCover}>
            <span className={styles.coverBadge}>Peer Reviewed</span>
            <div className={styles.coverIcon}>
              <MicroscopeIcon />
            </div>
            <p className={styles.coverLabel}>Scientific Journal</p>
            <p className={styles.coverTitle}>Biotechnology Research</p>
          </div>
        </div>

        <div className={styles.paper}>
          <div className={styles.paperHeader}>
            <span className={styles.paperEyebrow}>Publication</span>
            <span className={styles.paperYear}>2017</span>
          </div>

          <p className={styles.paperTitle}>{title}</p>

          <div className={styles.paperSection}>
            <span className={styles.sectionLabel}>Abstract</span>
            <div className={styles.abstractLines}>
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={`${styles.line} ${styles.lineShort}`} />
            </div>
          </div>

          <div className={styles.paperFooter}>
            <div className={styles.chart}>
              <span className={styles.bar} style={{ height: "42%" }} />
              <span className={styles.bar} style={{ height: "68%" }} />
              <span className={styles.bar} style={{ height: "55%" }} />
              <span className={styles.bar} style={{ height: "82%" }} />
              <span className={styles.bar} style={{ height: "48%" }} />
            </div>
            <span className={styles.footerNote}>Antibacterial activity analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
}
