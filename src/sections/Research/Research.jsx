import Button from "../../components/ui/Button";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import {
  featuredPublication,
  researchSection,
} from "../../content/research";
import PublicationDocument from "./PublicationDocument";
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
          className={styles.sectionHeader}
        />

        <article
          className={styles.publicationCard}
          aria-labelledby={`publication-${publication.id}`}
        >
          <div className={styles.content}>
            <h3
              id={`publication-${publication.id}`}
              className={styles.publicationTitle}
            >
              <span className={styles.titleLine1}>{publication.titleLine1}</span>
              <span className={styles.titleLine2}>{publication.titleLine2}</span>
            </h3>

            <p className={styles.description}>{publication.description}</p>

            <dl className={styles.meta}>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Published</dt>
                <dd className={styles.metaValue}>{publication.publishedYear}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Journal</dt>
                <dd className={styles.metaValue}>{publication.journal}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Role</dt>
                <dd className={styles.metaValue}>{publication.role}</dd>
              </div>
            </dl>

            <div className={styles.actions}>
              <Button variant="primary" href={publication.readUrl}>
                Read Publication
              </Button>
              <Button variant="secondary" href={publication.pdfUrl}>
                Download PDF
              </Button>
            </div>
          </div>

          <div className={styles.preview}>
            <PublicationDocument
              title={`${publication.titleLine1} ${publication.titleLine2}`}
              journal={publication.journal}
              year={publication.publishedYear}
            />
          </div>
        </article>
      </Container>
    </Section>
  );
}
