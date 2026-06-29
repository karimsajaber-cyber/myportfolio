import CoreCapabilities from "./sections/CoreCapabilities";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.app}>
      <Hero />
      <CoreCapabilities />
      <Projects />
    </main>
  );
}
