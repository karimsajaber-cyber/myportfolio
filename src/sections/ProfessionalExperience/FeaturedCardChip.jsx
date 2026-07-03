import { SkillChipIcon } from "./FeaturedCardIcons";
import styles from "./FeaturedCardChip.module.css";

export default function FeaturedCardChip({ label, className = "" }) {
  return (
    <span className={`${styles.chip} ${className}`.trim()}>
      <span className={styles.icon} aria-hidden="true">
        <SkillChipIcon label={label} />
      </span>
      <span className={styles.label}>{label}</span>
    </span>
  );
}
