import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Experiences from "@/components/Experiences/Experiences";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero/>
      <About/>
      <Contact/>
      <Projects/>
      <Experiences/>
    </div>
  );
}
