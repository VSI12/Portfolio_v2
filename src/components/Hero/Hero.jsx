import React from 'react'
import styles from './Hero.module.css'
import Data from './Data'

const Hero = () => {
  return (
    <section className="home section" id="home">
    <div className="home__container container grid">
      <div className="home__content grid">
        <Data />
      </div>
    </div>
  </section>
  )
}

export default Hero