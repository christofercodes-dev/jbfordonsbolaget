"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>JB</span>

          <span className={styles.logoText}>
            FORDONS
            <span>BOLAGET</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          <Link href="#salj-bil">Sälj din bil</Link>
          <Link href="#om-oss">Hur det fungerar</Link>
        </nav>

        <div className={styles.actions}>
          <Link
            href="#kontakt"
            className={styles.contact}
          >
            Kontakta oss
          </Link>

          <button
            className={`${styles.menuButton} ${
              menuOpen ? styles.menuActive : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Öppna meny"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav>


          <Link
            href="#salj-bil"
            onClick={() => setMenuOpen(false)}
          >
            <span>01</span>
            Sälj din bil
          </Link>

          <Link
            href="#om-oss"
            onClick={() => setMenuOpen(false)}
          >
            <span>02</span>
            Hur det fungerar
          </Link>

          <Link
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
          >
            <span>03</span>
            Kontakt
          </Link>
        </nav>

        <p>Din bil. Vår expertis.</p>
      </div>
    </header>
  );
}
