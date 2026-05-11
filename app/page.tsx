import createDynamic from 'next/dynamic'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

const Navbar = createDynamic(() => import('@/components/Navbar'), { ssr: false })
const Hero = createDynamic(() => import('@/components/Hero'), { ssr: false })
const Stats = createDynamic(() => import('@/components/Stats'), { ssr: false })
const About = createDynamic(() => import('@/components/About'), { ssr: false })
const Services = createDynamic(() => import('@/components/Services'), { ssr: false })
const CTA = createDynamic(() => import('@/components/CTA'), { ssr: false })
const Contact = createDynamic(() => import('@/components/Contact'), { ssr: false })
const WhatsAppButton = createDynamic(() => import('@/components/WhatsAppButton'), { ssr: false })

export default function Home() {
  return (
    <main className="page-wrapper">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
