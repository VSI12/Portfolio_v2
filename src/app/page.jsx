import Image from "next/image";
import styles from "./page.module.css";
import ViewCounter from "@/components/counter/Counter";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero/>
      <About/>
    </div>
  );
}
