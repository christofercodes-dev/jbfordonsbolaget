// src/app/om-oss/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* INTRO */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vi förenar passion <span>med juridisk precision.</span>
        </motion.h1>
      </section>

      {/* FILOSOFI */}
      <section className={styles.philosophy}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Vår vision</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>
            Fordonskompaniet grundades ur idén att en bilaffär i premiumsegmentet kräver mer än bara en säljare. 
            Det kräver en rådgivare som förstår både marknadens mekanismer och objektets unika historik.
          </p>
          <p style={{ marginTop: '40px' }}>
            Vi ser oss inte som en traditionell bilhandlare, utan som din personliga partner genom 
            hela ägarcykeln – från värdering och analys till avslutad affär.
          </p>
        </motion.div>
      </section>

      {/* TEAM (Exempel) */}
      <section className={styles.teamSection}>
        <span style={{ letterSpacing: '0.5em', textTransform: 'uppercase', fontSize: '0.7rem', opacity: 0.4 }}>
          Människorna bakom
        </span>
        <div className={styles.teamGrid}>
          {[
            { name: "Johan Andersson", role: "Grundare & Senior Advisor" },
            { name: "Erik Bergström", role: "Förmedlingschef" },
            { name: "Linda Holmgren", role: "Kundrelationer" }
          ].map((member, i) => (
            <motion.div 
              key={i} 
              className={styles.memberCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.imagePlaceholder}>
                {/* Här lägger du Image-komponenten när du har foton */}
              </div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}