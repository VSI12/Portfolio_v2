import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <span className={styles.footer}>Designed and built by Victor Iliya</span>
      <div className={styles.floatingWidget}>
        <div className={styles.social}>
          <a href="https://github.com/VSI12" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://dev.to/non-existent" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDev} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/victor-iliya/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
        </div>
    </div>
      
      <span className={styles.footer__copy}>&#169; Victor Iliya. All right reserved. 2024</span>
    </div>
  );
};

export default Footer;
