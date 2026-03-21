'use client'
// src/components/Packages.tsx
import { useState } from 'react'
import styles from './Packages.module.css'

const TABS = ['Website', 'E-Commerce', 'Mobile App'] as const
type Tab = typeof TABS[number]

const PACKAGES: Record<Tab, { name: string; sub: string; price: string; timeline: string; col4: string; revisions: string }[]> = {
  'Website': [
    { name: 'Landing Page',   sub: 'Single page, high-converting',    price: '₹8K–₹14K',   timeline: '1–2 wks', col4: '1',        revisions: '2' },
    { name: 'Business Site',  sub: 'Multi-page, SEO, contact form',   price: '₹15K–₹30K',  timeline: '2–4 wks', col4: 'Up to 5',  revisions: '2' },
    { name: 'Custom Web App', sub: 'Login, dashboard, database',       price: '₹35K–₹80K',  timeline: '5–10 wks',col4: 'Unlimited',revisions: '3' },
  ],
  'E-Commerce': [
    { name: 'Starter Store',   sub: 'Small shop, basic features',       price: '₹35K–₹55K',  timeline: '4–6 wks',  col4: 'Up to 50', revisions: '3' },
    { name: 'Business Store',  sub: 'Full catalog, coupons, analytics', price: '₹60K–₹1L',   timeline: '6–10 wks', col4: 'Unlimited',revisions: '3' },
    { name: 'Multi-Vendor',    sub: 'Multiple sellers, commissions',    price: '₹1.2L–₹2.5L',timeline: '10–16 wks',col4: 'Unlimited',revisions: '4' },
  ],
  'Mobile App': [
    { name: 'Simple App',      sub: '3–5 screens, basic features',      price: '₹45K–₹75K',  timeline: '6–8 wks',  col4: 'Android/iOS', revisions: '2' },
    { name: 'Standard App',    sub: 'Login, API, notifications',         price: '₹80K–₹1.4L', timeline: '8–12 wks', col4: 'Both',        revisions: '3' },
    { name: 'E-Commerce App',  sub: 'Full shop with payments',           price: '₹1.5L–₹2.5L',timeline: '12–16 wks',col4: 'Both',        revisions: '4' },
  ],
}

const COL4_LABEL: Record<Tab, string> = {
  'Website': 'Pages',
  'E-Commerce': 'Products',
  'Mobile App': 'Platform',
}

const ADDONS = [
  { name: 'Logo Design',          sub: 'Brand identity',    price: '₹2,500+' },
  { name: 'Extra Revision',       sub: 'Per round',         price: '₹1,500' },
  { name: 'Monthly Maintenance',  sub: 'Updates & support', price: '₹3,000/mo' },
  { name: 'SEO Optimisation',     sub: 'On-page + technical',price: '₹5,000+' },
  { name: 'Admin Dashboard',      sub: 'Custom backend UI', price: '₹8,000+' },
  { name: 'WhatsApp Integration', sub: 'Notifications',     price: '₹4,000+' },
]

export default function Packages() {
  const [activeTab, setActiveTab] = useState<Tab>('Website')

  return (
    <section id="packages" className={styles.section}>
      <div className="section-inner">
        <div className="section-label reveal">Detailed Breakdown</div>
        <h2 className="section-title reveal delay-1">Package Comparison</h2>
        <p className="section-sub reveal delay-2" style={{ marginBottom: '36px' }}>
          Compare all tiers side by side — find the exact fit for your project scope.
        </p>

        <div className="reveal delay-2">
          <div className={styles.tabsBar}>
            {TABS.map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.tableWrap} reveal delay-3`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '45%' }}>Package</th>
                <th>Price</th>
                <th>Timeline</th>
                <th>{COL4_LABEL[activeTab]}</th>
                <th>Revisions</th>
              </tr>
            </thead>
            <tbody>
              {PACKAGES[activeTab].map(row => (
                <tr key={row.name}>
                  <td>
                    <span className={styles.rowName}>{row.name}</span>
                    <span className={styles.rowSub}>{row.sub}</span>
                  </td>
                  <td className={styles.priceCell}>{row.price}</td>
                  <td className={styles.timelineCell}>{row.timeline}</td>
                  <td>{row.col4}</td>
                  <td>{row.revisions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ADDONS */}
        <div className="section-label reveal" style={{ marginTop: '64px' }}>Optional</div>
        <h3 className={`${styles.addonsTitle} reveal delay-1`}>Add-On Services</h3>
        <p className="reveal delay-2" style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '0' }}>
          Bolt on extras to any package.
        </p>
        <div className={styles.addonsGrid}>
          {ADDONS.map((a, i) => (
            <div key={a.name} className={`${styles.addon} reveal delay-${(i % 3) + 1}`}>
              <div>
                <div className={styles.addonName}>{a.name}</div>
                <div className={styles.addonSub}>{a.sub}</div>
              </div>
              <div className={styles.addonPrice}>{a.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
