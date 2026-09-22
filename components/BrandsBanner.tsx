"use client";

import { useEffect, useState } from "react";
import {
  AudiIcon,
  VolvoLogo,
  ToyotaIcon,
  MiniIcon,
  FiatLogoHorizontal,
  KiaLogo,
  FordLogo,
  VolkswagenIcon,
} from "@cardog-icons/react";

import styles from "./BrandsBanner.module.css";

const brands = [
  { Icon: AudiIcon },
  { Icon: VolvoLogo },
  { Icon: MiniIcon },
  { Icon: ToyotaIcon },
  { Icon: KiaLogo },
  { Icon: FordLogo },
  { Icon: FiatLogoHorizontal },
  { Icon: VolkswagenIcon },
];

const leftBrands = brands.slice(0, 4);
const rightBrands = brands.slice(4, 8);

function BrandList({
  brands,
  side,
}: {
  brands: typeof leftBrands;
  side: "left" | "right";
}) {
  return (
    <div className={`${styles.brandSide} ${styles[side]}`}>
      {brands.map(({ Icon }, index) => (
        <div
          className={styles.brand}
          key={index}
          style={
            {
              "--delay": `${0.15 + index * 0.08}s`,
            } as React.CSSProperties
          }
        >
          <Icon
            width={42}
            height={42}
            className={styles.brandIcon}
          />
        </div>
      ))}
    </div>
  );
}

export default function BrandsBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector(
      `.${styles.banner}`
    );

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.banner} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <BrandList
            brands={leftBrands}
            side="left"
          />

          <div className={styles.center}>
            <span className={styles.label}>
              JB FORDONSBOLAGET
            </span>

            <p>
              Vi köper bilar av{" "}
              <strong>alla märken.</strong>
            </p>
          </div>

          <BrandList
            brands={rightBrands}
            side="right"
          />
        </div>
      </div>
    </section>
  );
}