import Button from "../../components/ui/Button";
import { hero, site } from "../../content/site";
import HeroProjectPreview from "./HeroProjectPreview";
import styles from "./Hero.module.css";

export default function Hero() {
  const project = hero.featuredProject;

  return (
    <section
      id="hero"
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.heroWrap}>
        <div className={styles.composition}>
          <header className={styles.navStrip}>
            <a href="#hero" className={styles.logo}>
              {site.name}
            </a>

            <nav className={styles.nav} aria-label="Primary">
              <ul className={styles.navList}>
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={styles.navLink}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.navActions}>
              <div className={styles.availability}>
                <span className={styles.availabilityDot} aria-hidden="true" />
                <span className={styles.availabilityText}>
                  {site.availability}
                </span>
              </div>
              <Button
                variant="secondary"
                href={site.resume.href}
                className={styles.resumeBtn}
              >
                {site.resume.label}
              </Button>
            </div>
          </header>

          <div className={styles.splitBody}>
            <div className={styles.storyZone}>
              <div className={styles.storyContent}>
                <p className={styles.eyebrow}>{site.role}</p>

                <h1 id="hero-heading" className={styles.name}>
                  {site.name}
                </h1>

                <p className={styles.headline}>{hero.headline}</p>

                <p className={styles.tagline}>{site.tagline}</p>

                <p className={styles.differentiator}>{site.differentiator}</p>
              </div>

              <div className={styles.actions}>
                <Button variant="primary" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </Button>
                <a href={hero.secondaryCta.href} className={styles.textLink}>
                  {hero.secondaryCta.label}
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </div>

            <div className={styles.previewZone}>
              <a
                href={project.href}
                className={styles.previewFrame}
                aria-label={`View ${project.name} case study`}
              >
                <div className={styles.previewAccent} aria-hidden="true" />

                <div className={styles.previewVisual}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} product interface`}
                      className={styles.previewImage}
                    />
                  ) : (
                    <HeroProjectPreview />
                  )}

                  <div className={styles.previewOverlay}>
                    <p className={styles.previewName}>{project.name}</p>
                    <p className={styles.previewProblem}>{project.problem}</p>
                  </div>
                </div>
              </a>

              <div className={styles.previewMeta}>
                <p className={styles.previewOutcome}>{project.outcome}</p>
                <ul className={styles.stackList} aria-label="Professional capabilities">
                  {project.capabilities.map((capability) => (
                    <li key={capability}>
                      <span className={styles.stackTag}>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
