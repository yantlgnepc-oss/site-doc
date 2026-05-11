'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const facts = [
  {
    highlight: '30+',
    label: 'Anos de Experiência',
    desc: 'Décadas transformando sorrisos com excelência clínica',
  },
  {
    highlight: 'ABOE',
    label: 'Academia Brasileira de Odontologia Estética',
    desc: 'Membro com formação em odontologia estética de alto nível',
  },
  {
    highlight: 'USP',
    label: 'Universidade de São Paulo',
    desc: 'Graduado pela Faculdade de Odontologia da USP',
  },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        itemRefs.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/10">
          {facts.map((fact, i) => (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el }}
              className="text-center flex flex-col items-center gap-2 px-8 py-4"
            >
              <div className="text-4xl font-bold text-white font-heading">{fact.highlight}</div>
              <div className="text-white/80 text-sm font-semibold">{fact.label}</div>
              <div className="text-white/40 text-xs leading-relaxed max-w-xs">{fact.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
