// src/components/Stats.tsx
'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './Stats.module.css';

interface StatItemProps {
  number: number;
  suffix?: string;
  label: string;
  description: string;
}

function RollingNumber({ value, suffix }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 sekunder för animationen
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className={styles.number}>
      {count}{suffix && <span>{suffix}</span>}
    </div>
  );
}

export default function Stats() {
  const stats = [
    {
      number: 450,
      suffix: "+",
      label: "Förmedlade objekt",
      description: "Handplockade premiumbilar som hittat nya ägare genom vårt nätverk."
    },
    {
      number: 98,
      suffix: "%",
      label: "Kundnöjdhet",
      description: "Vårt rykte bygger på transparens och en friktionsfri affärsupplevelse."
    },
    {
      number: 1.2,
      suffix: "Brd",
      label: "Transaktionsvärde",
      description: "Sammanlagt värde av de fordon vi haft förtroendet att förvalta."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {stats.map((item, index) => (
            <div key={index} className={styles.statBox}>
              <span className={styles.label}>{item.label}</span>
              <RollingNumber value={item.number} suffix={item.suffix} />
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}