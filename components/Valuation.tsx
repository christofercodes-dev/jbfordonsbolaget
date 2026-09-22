// src/components/Valuation.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Valuation.module.css';

export default function Valuation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <motion.span 
          className={styles.label}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Konsultation
        </motion.span>

        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Låt oss definiera din bils <span>rätta marknadsvärde.</span>
        </motion.h2>

        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link href="/vardering" className={styles.primaryBtn}>
            Starta värdering
          </Link>
          
          <div className={styles.secondaryText}>
            Personlig rådgivning. <br />
            Svar inom 24 timmar på vardagar.
          </div>
        </motion.div>

      </div>
    </section>
  );
}