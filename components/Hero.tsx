import Link from "next/link";
import styles from "./Hero.module.css";
import { Check, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.grid} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              Sälj din bil. <br />
            </span>

            <span className={styles.titleLine}>
              <span className={styles.highlight}>
                Till oss.
              </span>
            </span>
          </h1>

          <p className={styles.description}>
            Sälj din bil enkelt och tryggt till oss.
            Få en snabb värdering, ett tydligt bud och
            säker betalning.
          </p>

          <div className={styles.actions}>
            <Link
              href="#salj-bil"
              className={styles.btnPrimary}
            >
              <span>Sälj din bil</span>
            </Link>

            <Link
              href="#om-oss"
              className={styles.btnSecondary}
            >
              <span>Så fungerar det</span>
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <Check
                className={styles.statIcon}
                size={17}
                strokeWidth={1.8}
              />
              <span className={styles.statNumber}>
                Snabb värdering
              </span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statItem}>
              <Check
                className={styles.statIcon}
                size={17}
                strokeWidth={1.8}
              />
              <span className={styles.statNumber}>
                Tydligt bud
              </span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statItem}>
              <Check
                className={styles.statIcon}
                size={17}
                strokeWidth={1.8}
              />
              <span className={styles.statNumber}>
                Säker betalning
              </span>
            </div>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/place/JB+Fordonsbolaget/@61.6301541,6.8764232,5z/data=!3m1!4b1!4m6!3m5!1s0x4cd4774d465ba925:0xad521847e4011440!8m2!3d62.0329767!4d17.3787426!16s%2Fg%2F11zxtd7lw4?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.googleRating}
        >
          <div className={styles.googleMark}>
            <img
              src="/logos/google.svg"
              alt="Google"
            />
          </div>

          <div className={styles.googleContent}>
            <div className={styles.googleTop}>
              <span className={styles.googleRatingNumber}>
                4.8
              </span>

              <div className={styles.googleStars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
            </div>

            <span className={styles.googleLabel}>
              Google Reviews
            </span>

            <span className={styles.googleLink}>
              Läs våra recensioner →
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
