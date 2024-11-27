'use client'
import { useState } from "react";
import React from 'react'

import styles from './experiences.module.css'

const Work = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
        <div className={styles.qualification__tabs}>
          <div className={ toggleState === 4 ?
           `${styles.qualification__button} ${styles.qualification__active}`
            : styles.qualification__button
            } onClick={() => toggleTab(1)}>
                <div>
                    <span className={styles.qualification__rounder}></span>
                    <span className={styles. qualification__line}></span>
                </div>
                Transcorp Hilton, Abuja
          </div>

          <div className={ toggleState === 5 ? 
          `${styles.qualification__button} ${styles.qualification__active}`
          : styles.qualification__button
            } onClick={() => toggleTab(2)}>
                <div>
                    <span className={styles.qualification__rounder}></span>
                    <span className={styles. qualification__line}></span>
                </div>
                IHVN
          </div>
        </div>

        <div className={styles.qualification__sections}>
          {/* Transcorp Hilton*/}
          <div className={ toggleState === 4
                ? `${styles.qualification__content} ${styles.qualification__content_active}`
                : styles.qualification__content
            }>
            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Afe Babalola University, Ado-Ekiti</h3>
                <span className={styles.qualification__subtitle}>B.Eng. Computer Engineering</span>
                <div className={styles.qualification__calendar}>
                
                  2019 - 2024
                </div>
              </div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles. qualification__line}></span>
              </div>
            </div>

            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Premiere Academy, Lugbe, Abuja</h3>
                <span className={styles.qualification__subtitle}>Senior School Certificate</span>
                <div className={styles.qualification__calendar}>
                
                  2013 - 2019
                </div>
              </div>
              <div>
              <span className={styles.qualification__rounder}></span>
              <span className={styles. qualification__line}></span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className={ toggleState === 5
                ? `${styles.qualification__content} ${styles.qualification__content_active}`
                : styles.qualification__content
            }>
            {/* Repeat Experience Entries */}
            <div className={styles.qualification__data}>
              <Work/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work