import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Socials from "@/components/Socials/Socials";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Experiences from "@/components/Experiences/Experiences";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Contact/>
      <Socials/>
    </div>
  );
}
