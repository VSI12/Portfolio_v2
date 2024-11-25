'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { id: 1, name: 'Home', sectionId: 'hero' },
  { id: 2, name: 'About', sectionId: 'about' },
  { id: 3, name: 'Projects', sectionId: 'projects' },
  { id: 4, name: 'Experiences', sectionId: 'experiences' },
  { id: 5, name: 'Contact', sectionId: 'contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80)
      // Highlight the active section based on scroll position
      const scrollPosition = window.scrollY + 200

      links.forEach((link) => {
        const section = document.getElementById(link.sectionId)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveNav(link.sectionId)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (sectionId) => {
    setActiveNav(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Update the URL path without reloading
      const newPath = sectionId === 'hero' ? '/' : `/${sectionId}`
      window.history.pushState(null, '', newPath)
    }
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button
          onClick={() => handleScroll('hero')}
          className={styles.logoButton}
          aria-label='Go to home section'
        >
          <Image src='/logo.png' alt='Logo' width={75} height={75} />
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.sectionId)}
              className={`${styles.navLink} ${
                activeNav === link.sectionId ? styles.activeLink : ''
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className={styles.menuIcon} />
          ) : (
            <Menu className={styles.menuIcon} />
          )}
        </button>
      </div>
    </header>
  )
}
