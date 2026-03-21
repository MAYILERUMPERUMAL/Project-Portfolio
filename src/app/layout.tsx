// src/app/layout.tsx
import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Mayilerumperumal — Fullstack Developer',
  description: 'Freelance Fullstack Developer based in Chennai. Websites, E-Commerce, Mobile Apps.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
