import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <span className={styles.footer}>Designed and built by Victor Iliya</span>
      <span className={styles.footer__copy}>&#169; Victor Iliya. All right reserved. 2024</span>
    </div>
  );
};

export default Footer;
