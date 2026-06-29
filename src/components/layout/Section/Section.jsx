import styles from "./Section.module.css";

export default function Section({
  id,
  children,
  className = "",
  ariaLabelledby,
}) {
  const classes = [styles.section, className].filter(Boolean).join(" ");

  return (
    <section
      id={id}
      className={classes}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  );
}
