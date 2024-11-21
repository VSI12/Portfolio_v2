"use client"

import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"

const links = [
    {
        id: 1,
        name: "Home",
        url: "/"
    },
    {
        id: 2,
        name: "About",
        url: "/about"
    },
    {
        id: 3,
        name: "Projects",
        url: "/projects"
    },
    {
        id: 4,
        name: "Experiences",
        url: "/experiences"
    },
    {
        id: 5,
        name: "Contact",
        url: "/contact"
    },
]
const Navbar = () => {
  return (
    <div>
        <Link href="/" className={styles.logo}>
            lamamia
        </Link>
        <div>
            {/* <DarkModeToggle /> */}
            {links.map((link) => (
                <Link key={link.id} href={link.url} className={styles.link}>
                    {link.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar