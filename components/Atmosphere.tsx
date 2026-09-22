// src/components/Atmosphere.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Atmosphere.module.css';

export default function Atmosphere() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/images/interior2.jpg" // Använd en bild på t.ex. en ratt eller strålkastare
          alt="Luxury details"
          fill
          className={styles.bgImage}
        />
      </div>

      <div className={styles.content}>
        <motion.span 
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Filosofi
        </motion.span>

        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Kvalitet handlar om <span>detaljerna.</span>
        </motion.h2>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Vi tror inte på volym. Vi tror på urval. Varje bil vi förmedlar 
          genomgår en rigorös kontroll för att möta de högsta kraven på marknaden.
        </motion.p>
      </div>
    </section>
  );
}