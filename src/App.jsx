import CareerHighlights from "./sections/CareerHighlights";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";
import CoreCapabilities from "./sections/CoreCapabilities";
import Education from "./sections/Education";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Research from "./sections/Research";
import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.app}>
      <Hero />
      <CoreCapabilities />
      <Projects />
      <CareerHighlights />
      <Education />
      <Research />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
