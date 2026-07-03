import { Fragment, useState } from "react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import { contactLinks, contactSection } from "../../content/contact";
import styles from "./Contact.module.css";

export default function Contact() {
  const [activeId, setActiveId] = useState(null);

  function handleLabelClick(id) {
    setActiveId((current) => (current === id ? null : id));
  }

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

        <article className={styles.card}>
          <nav
            className={[
              styles.band,
              activeId ? styles.bandRevealed : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label="Contact links"
          >
            {contactLinks.map((item, index) => (
              <Fragment key={item.id}>
                <div className={styles.linkGroup}>
                  <button
                    type="button"
                    className={[
                      styles.link,
                      activeId === item.id ? styles.linkActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-expanded={activeId === item.id}
                    aria-controls={`contact-reveal-${item.id}`}
                    onClick={() => handleLabelClick(item.id)}
                  >
                    {item.label}
                  </button>

                  {activeId === item.id ? (
                    <a
                      id={`contact-reveal-${item.id}`}
                      href={item.href}
                      className={styles.linkReveal}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.value}
                    </a>
                  ) : null}
                </div>

                {index < contactLinks.length - 1 ? (
                  <span className={styles.connector} aria-hidden="true">
                    <span className={styles.node} />
                    <span className={styles.line} />
                  </span>
                ) : null}
              </Fragment>
            ))}
          </nav>
        </article>
      </Container>
    </Section>
  );
}
