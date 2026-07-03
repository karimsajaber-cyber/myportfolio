import Button from "../../components/ui/Button";
import { hero, site } from "../../content/site";
import {
  AvailabilityIcon,
  HeroNavIcon,
} from "./HeroNavIcons";
import styles from "./Hero.module.css";

function scrollToSection(event, href) {
  if (!href?.startsWith("#")) {
    return;
  }

  const target = document.getElementById(href.slice(1));

  if (!target) {
    return;
  }

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
            <a
              href="#hero"
              className={styles.logo}
              onClick={(event) => scrollToSection(event, "#hero")}
            >
              {site.navBrand}
            </a>

            <nav className={styles.nav} aria-label="Primary">
              <ul className={styles.navList}>
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={styles.navLink}
                      onClick={(event) => scrollToSection(event, item.href)}
                    >
                      <span className={styles.navLinkIcon} aria-hidden="true">
                        <HeroNavIcon name={item.icon} />
                      </span>
                      <span className={styles.navLinkLabel}>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.navActions}>
              <p className={styles.availability}>
                <span className={styles.availabilityIcon} aria-hidden="true">
                  <AvailabilityIcon />
                </span>
                <span>{site.availability}</span>
              </p>
              <Button
                variant="secondary"
                href={site.resume.href}
                className={styles.resumeBtn}
              >
                <svg
                  className={styles.resumeIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                {site.resume.label}
              </Button>
            </div>
          </header>

          <div className={styles.splitBody}>
            <div className={styles.storyZone}>
              <div className={styles.storyContent}>
                <p className={`${styles.eyebrow} ${styles.storyRole}`}>{site.role}</p>

                <h1 id="hero-heading" className={`${styles.name} ${styles.storyName}`}>
                  {site.name}
                </h1>

                <div className={styles.storyBody}>
                  <p className={styles.headline}>{hero.headline}</p>

                  <p className={styles.tagline}>{site.tagline}</p>

                  <p className={styles.differentiator}>{site.differentiator}</p>
                </div>
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

            <aside className={styles.previewZone} aria-label="Portfolio showcase">
              <a
                href={project.href}
                className={styles.previewFrame}
                aria-label="View portfolio projects"
              >
                <div className={styles.previewVisual}>
                  <img
                    src={project.image}
                    alt="Portfolio project showcase artwork"
                    className={styles.previewImage}
                  />
                </div>
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
