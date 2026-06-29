import { Fragment } from "react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import { contactLinks, contactSection } from "../../content/contact";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Section
      id="contact"
      className={styles.section}
      ariaLabelledby="contact-heading"
    >
      <Container>
        <SectionHeader
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          intro={contactSection.intro}
          titleId="contact-heading"
        />

        <nav className={styles.band} aria-label="Contact links">
          {contactLinks.map((item, index) => (
            <Fragment key={item.id}>
              <a
                href={item.href}
                className={styles.link}
                title={item.value}
              >
                {item.label}
              </a>
              {index < contactLinks.length - 1 ? (
                <span className={styles.connector} aria-hidden="true">
                  <span className={styles.node} />
                  <span className={styles.line} />
                </span>
              ) : null}
            </Fragment>
          ))}
        </nav>
      </Container>
    </Section>
  );
}
