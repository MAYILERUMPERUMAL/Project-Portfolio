// src/components/Services.tsx
import Link from 'next/link'
import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '🌐',
    iconClass: 'web',
    name: 'Website Design & Dev',
    desc: 'Business sites, portfolios, landing pages — responsive and fast.',
    price: '8,000',
    timeline: '1–4 weeks',
    revisions: '2 revisions',
    features: [
      'Mobile-first responsive design',
      'Up to 5 pages + contact form',
      'Basic SEO & speed optimisation',
      'Deployment support included',
    ],
    featured: false,
  },
  {
    icon: '🛒',
    iconClass: 'shop',
    name: 'E-Commerce Platform',
    desc: 'Full online store with product catalog, cart, and payment gateway.',
    price: '35,000',
    timeline: '4–10 weeks',
    revisions: '3 revisions',
    features: [
      'Product catalog & admin panel',
      'Razorpay / UPI payment gateway',
      'Cart, checkout & order tracking',
      'Customer login & dashboard',
    ],
    featured: true,
  },
  {
    icon: '📱',
    iconClass: 'app',
    name: 'Mobile App Development',
    desc: 'Android & iOS apps with React Native or Flutter.',
    price: '45,000',
    timeline: '6–16 weeks',
    revisions: '3 revisions',
    features: [
      'Cross-platform Android + iOS',
      'Auth, push notifications & APIs',
      'Play Store / App Store upload',
      'Backend + database included',
    ],
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="section-inner">
        <div className={`section-label reveal`}>What I Build</div>
        <h2 className={`section-title reveal delay-1`}>Services & Pricing</h2>
        <p className={`section-sub reveal delay-2`}>
          Transparent rates, no hidden fees. Every project includes source code ownership,
          documentation & 30-day support.
        </p>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              className={`${styles.card} ${s.featured ? styles.featured : ''} reveal delay-${i + 1}`}
            >
              {s.featured && <div className={styles.badge}>Most Popular</div>}
              <div className={`${styles.icon} ${styles[`icon-${s.iconClass}`]}`}>{s.icon}</div>
              <div className={styles.cardName}>{s.name}</div>
              <div className={styles.cardDesc}>{s.desc}</div>
              <div className={styles.priceLabel}>Starting from</div>
              <div className={styles.price}><span className={styles.from}>₹</span>{s.price}</div>
              <div className={styles.meta}>
                <span className={styles.pill}>{s.timeline}</span>
                <span className={styles.pill}>{s.revisions}</span>
              </div>
              <ul className={styles.features}>
                {s.features.map(f => (
                  <li key={f}><span className={styles.check}>✦</span>{f}</li>
                ))}
              </ul>
              <Link href="#quote" className={`${styles.cardBtn} ${s.featured ? styles.cardBtnFeatured : ''}`}>
                Request Quote →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
