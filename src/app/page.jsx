import styles from "./page.module.css";
<<<<<<< HEAD
import ViewCounter from "@/components/counter/Counter";
import Hero from "./home/page";
import Experiences from "./experiences/page";
=======
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Experiences from "@/components/Experiences/Experiences";
>>>>>>> origin/main

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <Hero />
=======
      <Hero/>
      <About/>
      <Contact/>
      <Projects/>
>>>>>>> origin/main
      <Experiences/>
    </div>
  );
}
