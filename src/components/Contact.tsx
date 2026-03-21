// src/components/Contact.tsx
import Link from 'next/link'
import styles from './Contact.module.css'

const CONTACT_ITEMS = [
  { icon: '📧', label: 'Email',    val: 'mayilerumperumal@email.com' },
  { icon: '💬', label: 'WhatsApp', val: '+91 XXXXX XXXXX' },
  { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/mayilerumperumal' },
  { icon: '📍', label: 'Location', val: 'Chennai, Tamil Nadu, India' },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="section-inner">
        <div className="section-label reveal">Get In Touch</div>
        <h2 className="section-title reveal delay-1">Let&apos;s Build Together</h2>
        <div className={styles.grid}>

          <div className={styles.infoStack}>
            {CONTACT_ITEMS.map((c, i) => (
              <div key={c.label} className={`${styles.card} reveal delay-${i + 1}`}>
                <div className={styles.icon}>{c.icon}</div>
                <div>
                  <div className={styles.label}>{c.label}</div>
                  <div className={styles.val}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.ctaBox} reveal-right`}>
            <div className={styles.openBadge}>
              <span className="eyebrow-dot" />
              Open for new projects
            </div>
            <div className={styles.ctaTitle}>Ready to start your project?</div>
            <p className={styles.ctaDesc}>
              Whether you have a detailed brief or just a rough idea — reach out.
              I&apos;ll help shape it into something great. Usual response time: within a few hours.
            </p>
            <Link href="#quote" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Generate a Free Quote →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
