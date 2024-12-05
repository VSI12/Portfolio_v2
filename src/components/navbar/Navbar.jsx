'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import styles from './navbar.module.css'

const links = [
  { id: 1, name: 'About', href: '/about' },
  { id: 2, name: 'Projects', href: '/projects' },
  { id: 3, name: 'Experiences', href: '/experiences' },
  { id: 4, name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('home')  // Home page as the initial active page

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <Link href="/" passHref>
          <button
            className={styles.logoButton}
            aria-label="Go to home page"
          >
            <Image src="/logo.png" alt="Logo" width={61} height={60} />
          </button>
        </Link>

        <nav className={styles.nav}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              passHref
            >
              <button
                onClick={() => setActiveNav(link.href)}
                className={`${styles.navLink} ${activeNav === link.href ? styles.activeLink : ''}`}
              >
                {link.name}
              </button>
            </Link>
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
