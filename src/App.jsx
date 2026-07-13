import { useEffect } from "react";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";
import CoreCapabilities from "./sections/CoreCapabilities";
import Education from "./sections/Education";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ProfessionalExperience from "./sections/ProfessionalExperience";
import Projects from "./sections/Projects";
import Research from "./sections/Research";
import AskBot from "./components/AskBot/AskBot";
import { initGA } from "./utils/analytics";
import styles from "./App.module.css";

export default function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <main className={styles.app}>
      <Hero />
      <CoreCapabilities />
      <Projects />
      <ProfessionalExperience />
      <Education />
      <Research />
      <CTA />
      <Contact />
      <Footer />
      <AskBot />
    </main>
  );
}
