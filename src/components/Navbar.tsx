'use client'
// src/components/Navbar.tsx
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar" className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoDot} />
        M. Perumal
      </Link>
      <div className={styles.links}>
        <Link href="#services">Services</Link>
        <Link href="#packages">Packages</Link>
        <Link href="#process">Process</Link>
        <Link href="#quote">Quote</Link>
      </div>
      <Link href="#quote" className={styles.cta}>Get a Quote ↗</Link>
    </nav>
  )
}
