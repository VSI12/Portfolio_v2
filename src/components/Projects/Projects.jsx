import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';


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
              <div className={styles.projects__subtitle}>
                Featured Project
              </div>
              <div className={styles.projects__title}>
              Intrusion Detection System <br />
              Deployed to AWS
              </div>
              <div className={styles.projects__description}>
              <p className={styles.projects__text}>
                A proof of concept flask web-app based on the NSL-Kdd dataset for network data calssification
                Users upload network traffic data files, and the app processes and classifies this data to detect potential security threats or anomalies
              </p>
              </div>
              <div className={styles.projects__techstacks}>
                <ul className={styles.techstacks__list}>
                  <li className={styles.AWS}>AWS</li>
                  <li>Python</li>
                  <li>Docker</li>
                  <li>ECS (Fargate)</li>
                  <li>Flask</li>
                </ul>
              </div>
              <div className={styles.projects__links}>
                <a href="https://github.com/VSI12/IDS-Project" target="_blank" rel="noopener noreferrer" className={styles.projects__link}>
                  <FontAwesomeIcon icon={faGithub} className={styles.projects__link__icon} />
                </a>
                <a href="https://dev.to/non-existent/deploying-a-flask-based-intrusion-detection-system-to-aws-ecs-project-summary-1m1m" target="_blank" rel="noopener noreferrer" className={styles.projects__link}>
                  <FontAwesomeIcon icon={faDev} className={styles.projects__link__icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects