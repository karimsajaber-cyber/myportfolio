import SectionHeader from "../SectionHeader";
import styles from "./ContentColumn.module.css";

function Column({ children, className = "" }) {
  const classes = [styles.column, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}

function Header({ eyebrow, title, intro, titleId, className = "" }) {
  return (
    <SectionHeader
      eyebrow={eyebrow}
      title={title}
      intro={intro}
      titleId={titleId}
      align="start"
      className={className}
    />
  );
}

function Body({ children, className = "" }) {
  const classes = [styles.body, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}

const ContentColumn = Column;
ContentColumn.Header = Header;
ContentColumn.Body = Body;

export default ContentColumn;
