
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
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
            Victor.
        </Link>
        <div className={styles.links}> 
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