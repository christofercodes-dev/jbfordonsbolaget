"use client";

import {
  CarFront,
  ShieldCheck,
  Check,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./TrustBar.module.css";

const benefits = [
  {
    number: "01",
    title: "Alla märken",
    text: "Oavsett märke eller modell.",
    icon: CarFront,
  },
  {
    number: "02",
    title: "Trygg affär",
    text: "Tryggt från start till mål.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Enkel process",
    text: "Vi sköter det praktiska.",
    icon: Check,
  },
  {
    number: "04",
    title: "Snabb återkoppling",
    text: "Vi återkommer så snart vi kan.",
    icon: MessageCircle,
  },
];

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.trust} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              className={styles.item}
              key={benefit.number}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className={styles.top}>
                <span className={styles.number}>{benefit.number}</span>

                <Icon
                  className={styles.icon}
                  size={20}
                  strokeWidth={1.5}
                />
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}