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
          <div className={ toggleState === 1 ?
           `${styles.qualification__button} ${styles.qualification__active}`
            : styles.qualification__button
            } onClick={() => toggleTab(1)}>
                <div>
                    <span className={styles.qualification__rounder}></span>
                    <span className={styles. qualification__line}></span>
                </div>
                Transcorp Hilton, Abuja
          </div>

          <div className={ toggleState === 2 ? 
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
    </div>
  )
}

export default Work