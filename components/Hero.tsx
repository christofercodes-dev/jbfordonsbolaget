import Link from "next/link";
import styles from "./Hero.module.css";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Subtila bakgrundselement */}
      <div className={styles.glow} />
      <div className={styles.grid} />

      <div className={styles.container}>
        <div className={styles.content}>
       

          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              Rätt bil till rätt pris.
            </span>

            <span className={styles.titleLine}>
              <span className={styles.highlight}>
                Helt utan krångel.
              </span>
            </span>
          </h1>

          <p className={styles.description}>
            Vi hjälper dig att köpa, sälja eller förmedla din bil
            med maximal trygghet. Låt oss ta hand om hela processen
            medan du fokuserar på vägen framåt.
          </p>

          <div className={styles.actions}>
            <Link
              href="#om-oss"
              className={styles.btnPrimary}
            >
              <span>Läs mer</span>
            </Link>

            <Link
              href="#salj-bil"
              className={styles.btnSecondary}
            >
              <span>Sälj din bil</span>
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Tryggt</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statItem}>
              <span className={styles.statNumber}>Snabbt</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statItem}>
              <span className={styles.statNumber}>Enkelt</span>
            </div>
          </div>
        </div>

        <div className={styles.googleRating}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
