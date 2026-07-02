import Button from "../../components/ui/Button";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import {
  featuredPublication,
  researchSection,
} from "../../content/research";
import PublicationJournalVisual from "./PublicationJournalVisual";
import {
  DownloadIcon,
  ExternalLinkIcon,
  ResearchBrandIcon,
} from "./ResearchIcons";
import styles from "./Research.module.css";

export default function Research() {
  const publication = featuredPublication;

  return (
    <Section
      id="research"
      className={styles.section}
      ariaLabelledby="research-heading"
    >
      <Container>
        <SectionHeader
          title={researchSection.title}
          intro={researchSection.intro}
          titleId="research-heading"
          spacing="none"
          className={`${styles.header} ${styles.reveal}`}
        />

        <div className={`${styles.cardWrap} ${styles.revealDelayed}`}>
          <article
            className={styles.card}
            aria-labelledby={`publication-${publication.id}`}
          >
          <div className={styles.cardAccent} aria-hidden="true" />
          <div className={styles.content}>
            <header className={styles.brand}>
              <div className={styles.brandIcon} aria-hidden="true">
                <ResearchBrandIcon />
              </div>
              <div className={styles.brandText}>
                <p className={styles.eyebrow}>Featured Publication</p>
                <h3
                  id={`publication-${publication.id}`}
                  className={styles.title}
                >
                  {publication.title}
                </h3>
              </div>
            </header>

            <div className={styles.authorBlock}>
              <span className={styles.authorLabel}>Author</span>
              <span className={styles.authorValue}>{publication.author}</span>
            </div>

            <p className={styles.description}>{publication.description}</p>

            <ul
              className={styles.chipList}
              aria-label="Publication details"
            >
              {publication.tags.map((tag) => (
                <li key={tag}>
                  <span className={styles.chip}>{tag}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Button
                variant="primary"
                href={publication.readUrl}
                className={styles.actionBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Read Publication</span>
                <ExternalLinkIcon />
              </Button>
              <Button
                variant="secondary"
                href={publication.pdfUrl}
                className={styles.actionBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download PDF</span>
                <DownloadIcon />
              </Button>
            </div>
          </div>

          <div className={styles.visual}>
            <PublicationJournalVisual title={publication.title} />
          </div>
        </article>
        </div>
      </Container>
    </Section>
  );
}
