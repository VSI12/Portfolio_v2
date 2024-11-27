'use client'
import { useState } from "react";
import React from 'react'

import styles from './experiences.module.css'

const Work = () => {
  const [toggleState, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div className={styles.work__container}>
        <div className={styles.work__tabs}>
          <div className={ toggleState === 1 ?
           `${styles.work__button} ${styles.work__active}`
            : styles.work__button
            } onClick={() => toggleTab(1)}>
                <div>
                    <span className={styles.work__rounder}></span>
                    <span className={styles. work__line}></span>
                </div>
                Transcorp Hilton, Abuja
          </div>

          <div className={ toggleState === 2 ? 
          `${styles.work__button} ${styles.work__active}`
          : styles.work__button
            } onClick={() => toggleTab(2)}>
                <div>
                    <span className={styles.work__rounder}></span>
                    <span className={styles. work__line}></span>
                </div>
                IHVN
          </div>
        </div>

        <div className={styles.work__sections}>
          {/* Transcorp Hilton*/}
          <div className={ toggleState === 1
                ? `${styles.work__content} ${styles.work__content_active}`
                : styles.work__content
            }>
            <div className={styles.work__data}>
              <div>
                <h3 className={styles.work__title}>Transcorp Hilton, Abuja</h3>
                <span className={styles.work__subtitle}>May 2023 - September 2023</span>
            
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className={ toggleState === 2
                ? `${styles.work__content} ${styles.work__content_active}`
                : styles.work__content
            }>
            <div className={styles.work__data}>
              <div>
                <h3 className={styles.work__title}>Institute of Human Virology, Nigeria</h3>
                <span className={styles.work__subtitle}>June 2022 - September 2022</span>
            
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work