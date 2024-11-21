import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <a href="https://github.com/VSI12" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
      <a href="https://dev.to/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDev} className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/victor-iliya/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
      </div>
    </div>
  );
};

export default Footer;
