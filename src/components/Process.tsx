// src/components/Process.tsx
import styles from './Process.module.css'

const STEPS = [
  { num: '01', title: 'Discovery Call',            desc: 'We discuss your requirements, goals, target audience, and timeline. I ask the right questions to understand exactly what you need.' },
  { num: '02', title: 'Quotation Within 24 Hours', desc: 'You receive a detailed, itemised quote with clear pricing, timeline, and deliverables. No surprises, no hidden costs.' },
  { num: '03', title: 'Development & Updates',     desc: 'Work begins after 50% advance. You receive regular progress updates via WhatsApp or Email at every milestone.' },
  { num: '04', title: 'Delivery & Handover',       desc: 'Final code, documentation, and deployment — plus 30 days of free bug-fix support after delivery.' },
]

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className="section-inner">
        <div className="section-label reveal">How It Works</div>
        <h2 className="section-title reveal delay-1">My Work Process</h2>
        <p className="section-sub reveal delay-2">Simple, transparent, collaborative — here's what to expect.</p>
        <div className={styles.list}>
          <div className={styles.line} />
          {STEPS.map((s, i) => (
            <div key={s.num} className={`${styles.item} reveal delay-${i + 1}`}>
              <div className={styles.num}>{s.num}</div>
              <div className={styles.content}>
                <div className={styles.title}>{s.title}</div>
                <div className={styles.desc}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
