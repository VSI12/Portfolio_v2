import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <span className="footer__copy">&#169; Victor Iliya. All right reserved.</span>
    </div>
  );
};

export default Footer;
