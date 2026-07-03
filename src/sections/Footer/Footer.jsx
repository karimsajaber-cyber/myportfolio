import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.panel}>
        <p className={styles.text}>
          © 2026 Karim Jaber — Designed &amp; Built with React
        </p>
      </div>
    </footer>
  );
}
