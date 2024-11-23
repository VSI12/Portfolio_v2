"use client"; // Add this if using Next.js 13+ with App Router

import { useState } from "react";
import styles from "./experiences.module.css"; // Use CSS Modules

const Experiences = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className={styles.qualification}>
      <h2 className={styles.section__title}>Experiences</h2>
      <span className={styles.section__subtitle}>My Personal Journey</span>

      <div className={styles.qualification__container}>
        <div className={styles.qualification__tabs}>
          <div className={ toggleState === 1 ?
           `${styles.qualification__button} ${styles.qualification__active}`
            : styles.qualification__button
            } onClick={() => toggleTab(1)}>

            <i className={`${styles.uil} ${styles["uil-graduation-cap"]} ${styles.qualification__icon}`}></i>

            Education

          </div>

          <div className={ toggleState === 2 ? 
          `${styles.qualification__button} ${styles.qualification__active}`
          : styles.qualification__button
            } onClick={() => toggleTab(2)}>

            <i className={`${styles.uil} ${styles["uil-briefcase-alt"]} ${styles.qualification__icon}`}></i>

            Experiences

          </div>

          <div className={ toggleState === 3 ? 
          `${styles.qualification__button} ${styles.qualification__active}`
          : styles.qualification__button
            } onClick={() => toggleTab(3)}>

            <i className={`${styles.uil} ${styles["uil-briefcase-alt"]} ${styles.qualification__icon}`}></i>

            Certifications

          </div>

        </div>

        <div className={styles.qualification__sections}>
          {/* Education Section */}
          <div className={ toggleState === 1
                ? `${styles.qualification__content} ${styles.qualification__content_active}`
                : styles.qualification__content
            }>
            {/* Repeat Education Entries */}
            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Afe Babalola University, Ado-Ekiti</h3>
                <span className={styles.qualification__subtitle}>B.Eng. Computer Engineering</span>
                <div className={styles.qualification__calendar}>
                  <i className={`${styles.uil} ${styles["uil-calendar-alt"]}`}></i>
                  2019 - 2024
                </div>
              </div>

            </div>

            {/* Add more education entries similarly */}
          </div>

          {/* Experience Section */}
          <div className={ toggleState === 2
                ? `${styles.qualification__content} ${styles.qualification__content_active}`
                : styles.qualification__content
            }>
            {/* Repeat Experience Entries */}
            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Information Systems Intern</h3>
                <span className={styles.qualification__subtitle}>Transcorp Hilton, Abuja</span>
                <div className={styles.qualification__calendar}>
                  <i className={`${styles.uil} ${styles["uil-calendar-alt"]}`}></i>
                  May 2023 - October 2023
                </div>
              </div>
            </div>
          </div>

                {/* Certifications Section */}
          <div className={ toggleState === 3
                ? `${styles.qualification__content} ${styles.qualification__content_active}`
                : styles.qualification__content
            }>
            {/* Repeat Experience Entries */}
            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>AWS</h3>
                <span className={styles.qualification__subtitle}>Transcorp Hilton, Abuja</span>
                <div className={styles.qualification__calendar}>
                  <i className={`${styles.uil} ${styles["uil-calendar-alt"]}`}></i>
                  May 2023 - October 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
