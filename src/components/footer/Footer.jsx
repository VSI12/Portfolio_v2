import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faDev} />
      </div>
    </div>
  );
};

export default Footer;