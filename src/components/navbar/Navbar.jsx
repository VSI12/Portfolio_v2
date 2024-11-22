"use client";  // For smooth client-side scroll behavior

import React from 'react';
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
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });  // Smooth scroll effect
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleScroll('hero')} className={styles.logo}>
        <Image
          src="/logo.png"
          alt="logo"
          width={75}
          height={75}
        />
      </button>
      <div className={styles.links}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.sectionId)}  // Scroll to section
            className={styles.link}
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
