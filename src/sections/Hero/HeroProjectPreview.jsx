import styles from "./HeroProjectPreview.module.css";

export default function HeroProjectPreview() {
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.topBar}>
        <div className={styles.brand}>
          <span className={styles.brandMark} />
          <span className={styles.brandName}>PulseDesk</span>
        </div>
        <div className={styles.search} />
        <div className={styles.topActions}>
          <span className={styles.pill} />
          <span className={styles.avatar} />
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.sidebar}>
          <span className={styles.sideItemActive} />
          <span className={styles.sideItem} />
          <span className={styles.sideItem} />
          <span className={styles.sideItem} />
        </div>

        <div className={styles.main}>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statLabel} />
              <span className={styles.statValue} />
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel} />
              <span className={styles.statValue} />
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel} />
              <span className={styles.statValue} />
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle} />
              <span className={styles.panelAction} />
            </div>
            <div className={styles.rows}>
              <div className={styles.row}>
                <span className={styles.rowStatus} data-tone="open" />
                <span className={styles.rowText} />
                <span className={styles.rowMeta} />
              </div>
              <div className={styles.row}>
                <span className={styles.rowStatus} data-tone="progress" />
                <span className={styles.rowText} />
                <span className={styles.rowMeta} />
              </div>
              <div className={styles.row}>
                <span className={styles.rowStatus} data-tone="resolved" />
                <span className={styles.rowText} />
                <span className={styles.rowMeta} />
              </div>
              <div className={styles.row}>
                <span className={styles.rowStatus} data-tone="open" />
                <span className={styles.rowText} />
                <span className={styles.rowMeta} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
