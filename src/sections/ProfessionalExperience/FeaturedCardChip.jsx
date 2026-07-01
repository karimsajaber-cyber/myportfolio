import { SkillChipIcon } from "./FeaturedCardIcons";
import styles from "./FeaturedCardChip.module.css";

export default function FeaturedCardChip({ label }) {
  return (
    <span className={styles.chip}>
      <span className={styles.icon} aria-hidden="true">
        <SkillChipIcon label={label} />
      </span>
      <span className={styles.label}>{label}</span>
    </span>
  );
}
