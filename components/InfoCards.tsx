"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Landmark,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import styles from "./InfoCards.module.css";

const steps = [
  {
    number: "01",
    title: "Skicka in bilen",
    text: "Fyll i bilens uppgifter digitalt. Det tar bara några minuter.",
  },
  {
    number: "02",
    title: "Vi återkommer",
    text: "Vi går igenom informationen och återkommer med ett tydligt erbjudande.",
  },
  {
    number: "03",
    title: "Gör klart affären",
    text: "När du accepterat erbjudandet guidar vi dig genom resten av processen.",
  },
  {
    number: "04",
    title: "Du får betalt",
    text: "När affären är klar får du betalt via Swish eller direkt till ditt bankkonto.",
  },
];

export default function InfoCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector(`.${styles.section}`);

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="om-oss"
      className={`${styles.section} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.label}>SÅ FUNGERAR DET</div>

          <div className={styles.introContent}>
            <h2>
              Från bil till
              <br />
              <em>pengar på kontot.</em>
            </h2>

            <div className={styles.introText}>
              <p>
                Vi har gjort processen så enkel som möjligt.
                Du skickar in bilen digitalt, vi tar hand om
                resten.
              </p>

              <Link
                href="/salj-bil"
                className={styles.link}
              >
                <span>Sälj din bil</span>
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div
              className={styles.step}
              key={step.number}
              style={
                {
                  "--step-delay": `${0.25 + index * 0.12}s`,
                } as React.CSSProperties
              }
            >
              <div className={styles.stepTop}>
                <span className={styles.number}>
                  {step.number}
                </span>

                <span className={styles.check}>
                  <Check
                    size={13}
                    strokeWidth={2}
                  />
                </span>
              </div>

              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              {index < steps.length - 1 && (
                <span className={styles.connector} />
              )}
            </div>
          ))}
        </div>

        <div className={styles.payment}>
          <div className={styles.paymentContent}>
            <span className={styles.paymentLabel}>
              BETALNING
            </span>

            <h3>Pengarna direkt till dig.</h3>

            <p>
              När affären är klar betalar vi via Swish
              eller direkt till ditt bankkonto. Enkelt,
              snabbt och utan onödiga mellanhänder.
            </p>
          </div>

          <div className={styles.paymentMethods}>
            <div className={styles.paymentMethod}>
              <span className={styles.paymentIcon}>
                <Smartphone
                  size={18}
                  strokeWidth={1.5}
                />
              </span>

              <span>SWISH</span>
            </div>

            <div className={styles.paymentMethod}>
              <span className={styles.paymentIcon}>
                <Landmark
                  size={18}
                  strokeWidth={1.5}
                />
              </span>

              <span>BANKÖVERFÖRING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}