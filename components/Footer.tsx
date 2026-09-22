import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="kontakt" className={styles.footer}>
      <div className={styles.container}>
        {/* CTA */}
        <div className={styles.cta}>
          <div>
            <span className={styles.label}>JB FORDONSBOLAGET</span>

            <h2>
              Dags att sälja
              <br />
              <em>din bil?</em>
            </h2>
          </div>

          <Link href="#salj-bil" className={styles.ctaButton}>
            <span>Sälj din bil</span>
          </Link>
        </div>

        {/* LINKS */}
        <div className={styles.middle}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>JB</span>

              <span className={styles.logoText}>
                FORDONS<span>BOLAGET</span>
              </span>
            </Link>

            <p>
              En enklare väg till
              <br />
              en bra bilaffär.
            </p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <span className={styles.columnTitle}>NAVIGERA</span>

              <Link href="#salj-bil">Sälj din bil</Link>
              <Link href="#om-oss">Hur det fungerar</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>KONTAKT</span>

              <a href="tel:+46101234567">010-123 45 67</a>
              <a href="mailto:hej@jbfordonsbolaget.se">
                hej@jbfordonsbolaget.se
              </a>
            </div>

            
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} JB FORDONSBOLAGET</span>



          <span>Din bil. Vår expertis.</span>
        </div>
      </div>
    </footer>
  );
}