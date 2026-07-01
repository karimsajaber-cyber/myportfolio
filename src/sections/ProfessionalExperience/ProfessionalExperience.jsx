import FeaturedCard from "./FeaturedCard";
import styles from "./ProfessionalExperience.module.css";

export default function ProfessionalExperience() {
  return (
    <section id="experience" className={styles.section} aria-label="Professional Experience">
      <div className={styles.shell}>
        <FeaturedCard />
      </div>
    </section>
  );
}
