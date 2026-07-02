import {
    BriefcaseBusiness,
    ChevronRight,
    Headset,
    Layers3,
} from "lucide-react";

import FeaturedCardChip from "./FeaturedCardChip";
import styles from "./ExperienceCard.module.css";

const icons = {
    operations: BriefcaseBusiness,
    support: Headset,
    background: Layers3,
};

export default function ExperienceCard({ card, expanded, onToggle }) {
    const Icon = icons[card.id];

    return (
        <article
            className={`${styles.card} ${expanded ? styles.cardExpanded : ""}`}
        >
            <div className={styles.icon}>
                <Icon size={26} strokeWidth={1.9} />
            </div>

            <div className={styles.header}>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.company}>{card.company}</p>
            </div>

            <p className={styles.description}>{card.shortDescription}</p>

            <div className={styles.skills}>
                {card.skills.map((skill) => (
                    <FeaturedCardChip key={skill} label={skill} className={styles.skillChip} />
                ))}
            </div>

            <button type="button" className={styles.footer} onClick={(event) => onToggle(event)}>
                <span>{expanded ? "Hide Details" : "View Details"}</span>
                <ChevronRight
                    size={18}
                    className={`${styles.arrow} ${expanded ? styles.arrowOpen : ""}`}
                />
            </button>
        </article>
    );
}
