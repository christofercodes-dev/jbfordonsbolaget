// src/app/fonts.ts
import { Playfair_Display, Inter } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'], // Vi kan behöva fler vikter senare
  variable: '--font-playfair', // För Tailwind-integration
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter', // För Tailwind-integration
});