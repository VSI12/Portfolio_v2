import Image from "next/image";
import styles from "./page.module.css";
import ViewCounter from "@/components/counter/Counter";
import Hero from "./home/page";
import Experiences from "./experiences/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Experiences/>
    </div>
  );
}
