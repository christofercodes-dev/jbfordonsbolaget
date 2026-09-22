// src/app/vardering/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ValuationPage.module.css';

export default function ValuationPage() {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        
        {/* VÄNSTER SIDA */}
        <div className={styles.content}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Professionell <span>marknadsvärdering.</span>
          </motion.h1>
          
          <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', maxWidth: '400px' }}>
            Vår värdering baseras på dagsaktuell marknadsdata, bilens unika historik 
            och vår mångåriga expertis inom premiumsegmentet.
          </p>

          <ul className={styles.benefits}>
            {['Svar inom 24 timmar', 'Helt kostnadsfritt', 'Inga förpliktelser'].map((text, i) => (
              <motion.li 
                key={i} 
                className={styles.benefitItem}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
              >
                <div className={styles.benefitCircle} />
                {text}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* HÖGER SIDA - FORMULÄR */}
        <motion.div 
          className={styles.formWrapper}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form>
            <div className={styles.inputGroup}>
              <label>Registreringsnummer</label>
              <input type="text" placeholder="ABC 123" />
            </div>

            <div className={styles.inputGroup}>
              <label>Miltal</label>
              <input type="text" placeholder="t.ex. 4500" />
            </div>

            <div className={styles.inputGroup}>
              <label>Ditt namn</label>
              <input type="text" placeholder="För- och efternamn" />
            </div>

            <div className={styles.inputGroup}>
              <label>E-postadress</label>
              <input type="email" placeholder="namn@mail.se" />
            </div>

            <div className={styles.inputGroup}>
              <label>Övrig information (Valfritt)</label>
              <textarea rows={3} placeholder="Utrustning, skick etc." />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Skicka förfrågan
            </button>
          </form>
        </motion.div>

      </div>
    </main>
  );
}