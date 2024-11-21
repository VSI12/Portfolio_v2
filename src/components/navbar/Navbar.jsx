import Link from 'next/link'
import React from 'react'

const links = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Experiences",
        link: "/experiences"
    },
    {
        name: "Contact",
        link: "/contact"
    },
]
const Navbar = () => {
  return (
    <div>
        <Link href="/">Victor.</Link>
    </div>
  )
}

export default Navbar