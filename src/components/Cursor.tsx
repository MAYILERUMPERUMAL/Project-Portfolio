'use client'
// src/components/Cursor.tsx
import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = (mx - 5) + 'px'
      cursor.style.top = (my - 5) + 'px'
    }

    const animRing = () => {
      rx += (mx - rx - 18) * 0.12
      ry += (my - ry - 18) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(animRing)
    }

    document.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(animRing)

    const hoverEls = document.querySelectorAll('a, button, .service-card, .addon, .cinfo-card')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)'
        ring.style.transform = 'scale(1.5)'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)'
        ring.style.transform = 'scale(1)'
      })
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} className={styles.cursor} />
      <div id="cursor-ring" ref={ringRef} className={styles.ring} />
    </>
  )
}
