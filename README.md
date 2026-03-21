# Mayilerumperumal — Portfolio (Next.js 14)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout, metadata, global CSS import
│   └── page.tsx          ← Main page, assembles all sections
├── components/
│   ├── Cursor.tsx        ← Custom animated cursor (client)
│   ├── Navbar.tsx        ← Sticky nav with scroll effect (client)
│   ├── Hero.tsx          ← Hero section (server)
│   ├── Services.tsx      ← 3 service cards (server)
│   ├── Packages.tsx      ← Package tabs + add-ons (client)
│   ├── Process.tsx       ← 4-step process (server)
│   ├── QuoteGenerator.tsx← Live quote builder (client)
│   ├── Contact.tsx       ← Contact info + CTA (server)
│   ├── Footer.tsx        ← Footer (server)
│   └── ScrollReveal.tsx  ← IntersectionObserver (client)
└── styles/
    └── globals.css       ← CSS variables, shared styles, animations
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel
```

Or just drag the folder to https://vercel.com/new — it auto-detects Next.js.

## Customise

| What to change         | File                          |
|------------------------|-------------------------------|
| Your name / title      | `Hero.tsx`, `Footer.tsx`      |
| Tech stack tags        | `Hero.tsx` → TECH_TAGS array  |
| Service prices         | `Services.tsx` → SERVICES     |
| Package table data     | `Packages.tsx` → PACKAGES     |
| Add-on prices          | `Packages.tsx` → ADDONS       |
| Quote service prices   | `QuoteGenerator.tsx` → SERVICES_LIST |
| Contact info           | `Contact.tsx` → CONTACT_ITEMS |
| Colors / fonts         | `styles/globals.css` → :root  |
