// src/app/page.tsx
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import Process from '@/components/Process'
import QuoteGenerator from '@/components/QuoteGenerator'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
        <Process />
        <QuoteGenerator />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
