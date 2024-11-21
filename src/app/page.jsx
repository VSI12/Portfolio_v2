import Image from "next/image";
import styles from "./page.module.css";
import ViewCounter from "@/components/counter/Counter";
import Hero from "./home/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
