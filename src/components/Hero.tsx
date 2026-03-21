// src/components/Hero.tsx
import Link from 'next/link'
import styles from './Hero.module.css'

const TECH_TAGS = ['React', 'Next.js', 'Node.js', 'Flutter', 'React Native', 'MongoDB', 'MySQL', 'REST APIs']

const STATS = [
  { num: '30', suffix: '+', label: 'Projects Delivered' },
  { num: '3',  suffix: '+', label: 'Years Experience' },
  { num: '100', suffix: '%', label: 'Client Satisfaction' },
  { num: '30', suffix: 'd', label: 'Free Support' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />
      <div className={styles.heroInner}>
        <div className={`${styles.eyebrow} reveal`}>
          <span className="eyebrow-dot" />
          Available for Projects · Chennai, India
        </div>

        <h1 className={`${styles.title} reveal delay-1`}>
          <span className={styles.name}>Mayilerumperumal</span>
          <span className={styles.role}>Fullstack Developer</span>
        </h1>

        <div className={`${styles.tags} reveal delay-2`}>
          {TECH_TAGS.map(tag => (
            <span key={tag} className={styles.techTag}>{tag}</span>
          ))}
        </div>

        <p className={`${styles.desc} reveal delay-3`}>
          I build fast, beautiful websites, e-commerce platforms, and mobile apps — end to end.
          Clean code, on-time delivery, honest pricing.
        </p>

        <div className={`${styles.actions} reveal delay-4`}>
          <Link href="#quote" className="btn-primary">Get Custom Quote ↗</Link>
          <Link href="#services" className="btn-secondary">View Services →</Link>
        </div>

        {/* <div className={`${styles.stats} reveal delay-5`}>
          {STATS.map(s => (
            <div key={s.label}>
              <div className={styles.statNum}>{s.num}<span>{s.suffix}</span></div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
