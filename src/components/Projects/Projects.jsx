import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image'
const Projects = () => {
  return (
    <section className={styles.section} id="projects">
        <h2 className={styles.section__title}>Projects</h2>
        <span className={styles.section__subtitle}>Featured builds</span>

        <div className={`${styles.projects__container} ${styles.container} ${styles.grid}`}>
          <div className={styles.projects__card}>
            <div className={styles.projects__image}>
              <Image src="/IDS-Architecture.png" alt="AWS Architecture" width={500} height={354} />
            </div>

            <div className={styles.projects__data}>
            A proof of concept flask web-app based on the NSL-Kdd dataset for network data calssification
            Users upload network traffic data files, and the app processes and classifies this data to detect potential security threats or anomalies
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects