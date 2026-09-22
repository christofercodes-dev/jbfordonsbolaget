"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./Info.module.css";

export default function Info() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <section
        ref={sectionRef}
        className={`${styles.info} ${isVisible ? styles.visible : ""
          }`}
      >
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* BILD VÄNSTER */}
            <div className={styles.imageWrapper}>
              <img
                src="/images/clio.png"
                alt="Bil i nordisk miljö"
                className={styles.image}
              />

              <div className={styles.imageOverlay} />

              <div className={styles.imageMeta}>
                <span>JB FORDONSBOLAGET</span>
              </div>
            </div>

            {/* TEXT HÖGER */}
            <div className={styles.content}>
              <span className={styles.label}>
                OM JB FORDONSBOLAGET
              </span>

              <h1>
                En enklare väg
                <br />
                till en <em>bra affär.</em>
              </h1>

              <div className={styles.text}>
                <p>
                  JB Fordonsbolaget köper bilar från privatpersoner över hela Sverige.
                  Vi erbjuder en enkel och trygg process med snabb värdering, tydligt
                  bud och säker betalning – från första kontakt till avslutad affär.
                </p>

                <p>
                  Oavsett märke eller modell är vårt mål detsamma –
                  en tydlig process, personlig kontakt och en affär
                  som känns rätt för båda parter.
                </p>
              </div>

              <Link
                href="#kontakt"
                className={styles.button}
              >
                <span>Kontakta oss</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}