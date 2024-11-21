import React from 'react'
import styles from './page.module.css'
const Hero = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Hi, My name is
      </p>
      <h1 className={styles.name}>Victor Iliya.</h1>
      <h1 className={styles.work}>I build solutions for the cloud</h1>
      <p className={styles.description}>
        I’m a cloud engineer passionate about creating highly available and <br /> 
        secure cloud solutions. Currently, I’m expanding my skill set to transition into DevOps, <br />
        focusing on workflow automation, optimized deployments, <br />
        and enhanced team collaboration for reliable software delivery.
        </p>
    </div>
  )
}

export default Hero