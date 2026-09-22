'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import { ReactNode } from 'react'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
    root 
    options={{ 
      lerp: 0.12,       // Höjt från 0.05/0.08. Detta gör att sidan följer musen snabbare.
      duration: 0.8,    // Sänkt från 1.5. Kortare animation gör att det känns mer "snappy".
      smoothWheel: true,
      wheelMultiplier: 1.0, 
      touchMultiplier: 1.5, // Gör det mer responsivt på mobiler/trackpads
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    }}
  >
      {/* Vi omsluter children i ett fragment eller div om biblioteket klagar */}
      <>{children}</>
    </ReactLenis>
  )
}