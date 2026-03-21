'use client'
// src/components/QuoteGenerator.tsx
import { useState, useCallback } from 'react'
import styles from './QuoteGenerator.module.css'

const SERVICES_LIST = [
  { label: 'Website Design',        price: 15000 },
  { label: 'E-Commerce Site',       price: 50000 },
  { label: 'Mobile App (Android+iOS)', price: 90000 },
  { label: 'Admin Dashboard',       price: 8000 },
  { label: 'REST API / Backend',    price: 12000 },
  { label: 'SEO Optimisation',      price: 5000 },
  { label: 'Monthly Maintenance',   price: 3000 },
  { label: 'Logo Design',           price: 2500 },
]

interface FormState {
  name: string; company: string; email: string; phone: string
  selected: Set<string>; complexity: string; timeline: string
  notes: string; payment: string; validity: string
}

export default function QuoteGenerator() {
  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', phone: '',
    selected: new Set(), complexity: '1.3', timeline: 'Standard delivery',
    notes: '', payment: '50% advance, 50% on delivery', validity: '30 days',
  })
  const [quoteNum, setQuoteNum] = useState('QT-2025-001')
  const [generated, setGenerated] = useState(false)

  const toggleService = useCallback((label: string) => {
    setForm(f => {
      const s = new Set(f.selected)
      s.has(label) ? s.delete(label) : s.add(label)
      return { ...f, selected: s }
    })
  }, [])

  const cx = parseFloat(form.complexity)

  const items = SERVICES_LIST
    .filter(s => form.selected.has(s.label))
    .map(s => ({ label: s.label, amount: Math.round(s.price * cx) }))

  const total = items.reduce((sum, i) => sum + i.amount, 0)

  const generateQuote = () => {
    const now = new Date()
    const n = `QT-${now.getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`
    setQuoteNum(n)
    setGenerated(true)
  }

  return (
    <section id="quote" className={styles.section}>
      <div className="section-inner">
        <div className="section-label reveal">Instant Quotation</div>
        <h2 className="section-title reveal delay-1">Generate Your Quote</h2>
        <p className="section-sub reveal delay-2">
          Fill in the details — your personalised quotation builds live on the right.
        </p>

        <div className={styles.layout}>
          {/* PREVIEW */}
          <div className={`${styles.preview} reveal-left`}>
            <div className={styles.previewHead}>
              <div className={styles.devName}>Mayilerumperumal</div>
              <div className={styles.devRole}>Fullstack Developer · Chennai</div>
              <div className={styles.qNum}>
                <div className={styles.qNumLabel}>Quotation No.</div>
                <div className={styles.qNumVal}>{quoteNum}</div>
              </div>
            </div>
            <div className={styles.previewBody}>
              <div className={styles.pbSection}>
                <div className={styles.pbLabel}>Bill To</div>
                <div className={styles.pbClient}>{form.name || 'Client Name'}</div>
                <div className={styles.pbMeta}>{form.company || 'Company · Organisation'}</div>
                <div className={styles.pbMeta}>{form.email || 'client@email.com'}</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.pbLabel} style={{ marginBottom: '10px' }}>Services</div>
              <table className={styles.itemsTable}>
                <thead><tr><th>Item</th><th>Amount</th></tr></thead>
                <tbody>
                  {items.length === 0
                    ? <tr><td colSpan={2} className={styles.emptyRow}>Select services →</td></tr>
                    : items.map(it => (
                        <tr key={it.label}>
                          <td className={styles.itName}>{it.label}</td>
                          <td>₹{it.amount.toLocaleString('en-IN')}</td>
                        </tr>
                      ))
                  }
                </tbody>
              </table>
              {total > 0 && (
                <div className={styles.advLine}>
                  <strong>Advance (50%):</strong> ₹{Math.round(total * 0.5).toLocaleString('en-IN')}
                </div>
              )}
              <div className={styles.totalLine}>
                <span className={styles.totalTxt}>Total Amount</span>
                <span className={styles.totalVal}>
                  {total > 0 ? `₹${total.toLocaleString('en-IN')}` : '₹0'}
                </span>
              </div>
              <div className={styles.divider} />
              <div className={styles.pbLabel} style={{ marginBottom: '4px' }}>Notes</div>
              <div className={styles.pbMeta}>{form.notes || '—'}</div>
            </div>
            <div className={styles.previewFoot}>
              <span className={styles.footNote}>Valid {form.validity} · {form.payment}</span>
              <span className={`${styles.status} ${generated ? styles.statusReady : ''}`}>
                {generated ? 'Ready' : 'Draft'}
              </span>
            </div>
          </div>

          {/* FORM */}
          <div className={`${styles.form} reveal-right`}>
            {/* CLIENT INFO */}
            <div className={styles.formSection}>
              <div className={styles.formTitle}><div className={styles.fsIcon}>👤</div>Client Information</div>
              <div className={styles.frow}>
                <div className={styles.fgroup}>
                  <label>Client Name *</label>
                  <input type="text" placeholder="Ramesh Kumar" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className={styles.fgroup}>
                  <label>Company</label>
                  <input type="text" placeholder="ABC Pvt Ltd" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
                </div>
                <div className={styles.fgroup}>
                  <label>Email</label>
                  <input type="email" placeholder="client@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className={styles.fgroup}>
                  <label>Phone</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
              </div>
            </div>

            {/* PROJECT DETAILS */}
            <div className={styles.formSection}>
              <div className={styles.formTitle}><div className={styles.fsIcon}>💼</div>Project Details</div>
              <div className={styles.frow}>
                <div className={`${styles.fgroup} ${styles.full}`}>
                  <label>Select Services</label>
                  <div className={styles.checks}>
                    {SERVICES_LIST.map(s => (
                      <label key={s.label} className={styles.checkItem}>
                        <input
                          type="checkbox"
                          checked={form.selected.has(s.label)}
                          onChange={() => toggleService(s.label)}
                        />
                        <span>{s.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className={styles.fgroup}>
                  <label>Complexity</label>
                  <select value={form.complexity} onChange={e => setForm(f => ({ ...f, complexity: e.target.value }))}>
                    <option value="1">Basic</option>
                    <option value="1.3">Standard</option>
                    <option value="1.7">Advanced / Custom</option>
                  </select>
                </div>
                <div className={styles.fgroup}>
                  <label>Timeline</label>
                  <select value={form.timeline} onChange={e => setForm(f => ({ ...f, timeline: e.target.value }))}>
                    <option>Standard delivery</option>
                    <option>Urgent (+20% rush fee)</option>
                    <option>Flexible schedule</option>
                  </select>
                </div>
                <div className={`${styles.fgroup} ${styles.full}`}>
                  <label>Special Requirements</label>
                  <textarea
                    placeholder="Describe any specific features, integrations, or requirements…"
                    value={form.notes}
                    onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* TERMS */}
            <div className={styles.formSection}>
              <div className={styles.formTitle}><div className={styles.fsIcon}>📋</div>Terms</div>
              <div className={styles.frow}>
                <div className={styles.fgroup}>
                  <label>Payment Structure</label>
                  <select value={form.payment} onChange={e => setForm(f => ({ ...f, payment: e.target.value }))}>
                    <option>50% advance, 50% on delivery</option>
                    <option>30% advance, 70% on delivery</option>
                    <option>100% upfront (5% discount)</option>
                    <option>Monthly milestone payments</option>
                  </select>
                </div>
                <div className={styles.fgroup}>
                  <label>Quote Valid For</label>
                  <select value={form.validity} onChange={e => setForm(f => ({ ...f, validity: e.target.value }))}>
                    <option>15 days</option>
                    <option>30 days</option>
                    <option>45 days</option>
                    <option>60 days</option>
                  </select>
                </div>
              </div>
            </div>

            <button className={styles.btnGen} onClick={generateQuote}>✦ Generate Quotation</button>
            <button className={styles.btnPdf} onClick={() => window.print()}>⬇ Download / Print as PDF</button>
          </div>
        </div>
      </div>
    </section>
  )
}
