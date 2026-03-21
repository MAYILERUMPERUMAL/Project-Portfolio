'use client'
// src/components/ScrollReveal.tsx
// Handles scroll-based reveal animations and service card spotlight effect.
// Runs only on the client after hydration.
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    // SCROLL REVEAL — IntersectionObserver
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => observer.observe(el))

    // SERVICE CARD SPOTLIGHT — mouse-position CSS vars
    const cards = document.querySelectorAll<HTMLElement>('.service-card')
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = []
    cards.forEach(card => {
      const fn = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
      }
      card.addEventListener('mousemove', fn)
      handlers.push({ el: card, fn })
    })

    return () => {
      observer.disconnect()
      handlers.forEach(({ el, fn }) => el.removeEventListener('mousemove', fn))
    }
  }, [])

  return null
}
