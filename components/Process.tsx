// src/components/Process.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  {
    id: "01",
    title: "Värdering & Strategi",
    text: "Varje bil är unik. Vi gör en marknadsanalys och sätter en strategi för att nå rätt köpare och maximera ditt försäljningspris."
  },
  {
    id: "02",
    title: "Proffshantering",
    text: "Genom vårt nätverk ser vi till att din bil rekondas och fotograferas i studiomiljö. Första intrycket är allt i premiumsegmentet."
  },
  {
    id: "03",
    title: "Trygg Försäljning",
    text: "Vi hanterar alla spekulanter, visningar och pappersarbete. Du får pengarna på kontot när affären är slutförd – säkert och smidigt."
  }
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Processen</span>
          <h2 className={styles.title}>Vägen till en lyckad bilaffär börjar här.</h2>
        </header>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <span className={styles.number}>{step.id}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}