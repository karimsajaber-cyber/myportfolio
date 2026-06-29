import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  titleId,
  align = "center",
  spacing = "section",
  className = "",
}) {
  const classes = [
    styles.header,
    align === "center" ? styles.alignCenter : styles.alignStart,
    spacing === "none" ? styles.spacingNone : styles.spacingSection,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {intro ? <p className={styles.intro}>{intro}</p> : null}
    </header>
  );
}
