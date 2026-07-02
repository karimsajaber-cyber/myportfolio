import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const classes = [
    styles.button,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isResume = href.endsWith(".pdf");

    return (
      <a
        href={href}
        className={classes}
        download={isResume ? "" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
