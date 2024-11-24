"use client";  // For smooth client-side scroll behavior

import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from 'next/image';

const links = [
  { id: 1, name: "Home", sectionId: "hero" },
  { id: 2, name: "About", sectionId: "about" },
  { id: 3, name: "Projects", sectionId: "projects" },
  { id: 4, name: "Experiences", sectionId: "experiences" },
  { id: 5, name: "Contact", sectionId: "contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");  // Default active section

  // Scroll effect to add 'scroll-header' class
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.container}`);
      if (window.scrollY >= 80) {
        header.classList.add(styles.scrollHeader);
      } else {
        header.classList.remove(styles.scrollHeader);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Smooth scroll and set active link
  const handleScroll = (sectionId) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.container}>
      <button onClick={() => handleScroll('hero')} className={styles.logo}>
        <Image src="/logo.png" alt="logo" width={75} height={75} />
      </button>
      <div className={`${styles.links} ${toggle ? styles.showMenu : ""}`}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.sectionId)}
            className={`${styles.link} ${activeNav === link.sectionId ? styles.activeLink : ""}`}
          >
            {link.name}
          </button>
        ))}
        <div className={styles.close} onClick={() => setToggle(!toggle)}>✖</div>
      </div>
      <div className={styles.toggle} onClick={() => setToggle(!toggle)}>☰</div>
    </header>
  );
};

export default Navbar;
