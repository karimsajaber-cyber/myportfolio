import styles from "./ProductBrowserFrame.module.css";

export default function ProductBrowserFrame({ url, children }) {
  return (
    <div className={styles.frame}>
      <div className={styles.chrome} aria-hidden="true">
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.urlBar}>{url}</div>
      </div>
      <div className={styles.viewport}>{children}</div>
    </div>
  );
}
