import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span>OM JB FORDONSBOLAGET</span>
        </div>

        <div className={styles.content}>
          <h2>
            Vi gör det enkelt
            <br />
            att <em>sälja bilen.</em>
          </h2>

          <div className={styles.text}>
            <p>
              Nordic Auto köper bilar från privatpersoner och tar hand om
              hela affären. Oavsett märke eller modell får du en trygg,
              enkel och smidig process från första kontakt till avslutad
              affär.
            </p>

            <Link href="#om-oss" className={styles.link}>
              <span>Läs mer om oss</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}