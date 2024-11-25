import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
      <section className={styles.section} id="about">
        <h2 className={styles.section__title}>About</h2>
        <span className={styles.section__subtitle}>My Introduction</span>

        <div className={`${styles.about__container} ${styles.container} ${styles.grid}`}>
          <div className={styles.about__img}>
            <Image
              src="/user.png"
              alt="About Image"
              className={styles.about__user}
              width={200}
              height={200}
            />
          </div>

          <div className={styles.about__data}>
            <p className={styles.about__description}>
            Hello! My name is Victor Hello! My name is Victor Iliya,<br />
            and I enjoy creating cloud-based solutions that power digital experiences. <br />
            My journey into cloud engineering began when I earned my first AWS certification, <br />
            sparking a passion for scalable, resilient infrastructures. <br />
            Since then, I have explored the possibilities of cloud technology, <br />
            mastering tools and techniques that build secure and efficient systems.
            <br />
            My main focus now is expanding my expertise into <br />
             DevOps, integrating automation and CI/CD pipelines <br />
            to support agile, reliable software delivery.
            </p>
          </div>
        </div>
      </section>
  )
}

export default About