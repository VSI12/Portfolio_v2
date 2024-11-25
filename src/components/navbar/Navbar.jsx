'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import styles from './navbar.module.css'

const links = [
  { id: 1, name: 'About', sectionId: 'about' },
  { id: 2, name: 'Projects', sectionId: 'projects' },
  { id: 3, name: 'Experiences', sectionId: 'experiences' },
  { id: 4, name: 'Contact', sectionId: 'contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80)

      const scrollPosition = window.scrollY + 200
      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].sectionId)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveNav(links[i].sectionId)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateToSection = (sectionId) => {
    setActiveNav(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      router.push(`/#${sectionId}`, { scroll: false })
    }
  }

  const reloadPage = () => {
    router.push('/', { scroll: false }) // Navigate to home path
    router.refresh() // Reload the page
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Smooth scroll to top
    router.push('/', { scroll: false }) // Update URL to home path without reloading
  }

  useEffect(() => {
    
  })  

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button
          onClick={scrollToTop}
          className={styles.logoButton}
          aria-label='Go to home section'
        >
          <Image src='/logo.png' alt='Logo' width={60} height={60} />
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => navigateToSection(link.sectionId)}
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
          {isMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
        </button>
      </div>
    </header>
  )
}
