// src/components/Features.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Features.module.css';

const features = [
  {
    title: "Global Räckvidd",
    text: "Vårt nätverk sträcker sig utanför landets gränser. Vi identifierar internationella samlare som ser bilens fulla potential.",
    image: "/images/interior2.jpg" // Ersätt med dina bilder
  },
  {
    title: "Full Transparens",
    text: "Varje steg i försäljningen dokumenteras och redovisas. Förtroende är grunden i varje affär vi genomför.",
    image: "/images/finance.avif"
  },
  {
    title: "Juridisk Trygghet",
    text: "Från avtal till säker betalning – vi garanterar en juridiskt felfri process som skyddar din investering.",
    image: "/images/xc40.webp"
  }
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <motion.span 
            className={styles.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Fordonskompaniets Standard
          </motion.span>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Expertis som <span>optimerar ditt värde.</span>
          </motion.h2>
        </header>
        
        <div className={styles.featureList}>
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className={styles.featureItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Bakgrundsbild */}
              <div className={styles.imageWrapper}>
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className={styles.bgImage}
                />
              </div>

              <div className={styles.content}>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
              
              <div className={styles.cardNumber}>
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}