'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707.707M5.636 18.364l-.707.707M18.364 18.364l.707-.707M5.636 5.636l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Odontologia Estética',
    description:
      'Sorrisos harmoniosos e confiantes através de clareamento dental, facetas de porcelana, lentes de contato dental e outros procedimentos estéticos de última geração.',
    highlight: 'Mais Procurado',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Odontologia Restauradora',
    description:
      'Recuperação de dentes comprometidos por cáries, fraturas ou desgaste, com materiais modernos que devolvem a função e a estética natural do sorriso.',
    highlight: null,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Odontologia Preventiva',
    description:
      'A prevenção é o melhor tratamento. Limpeza profissional, orientações de higiene bucal e acompanhamento periódico para manter sua saúde em dia.',
    highlight: null,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Odontologia Digital',
    description:
      'Tecnologia de ponta com scanner intraoral, planejamento digital de sorrisos e impressão 3D para tratamentos mais rápidos, precisos e com resultado previsível.',
    highlight: null,
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardRefs.current[0],
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="especialidades" ref={sectionRef} className="py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-light font-semibold text-sm tracking-widest uppercase">
            Especialidades
          </span>
          <h2 className="section-title center font-heading text-4xl lg:text-5xl font-bold text-navy-800 mt-3 leading-tight">
            Cuidado completo para<br />seu sorriso
          </h2>
          <p className="text-gray-500 mt-5 leading-relaxed">
            Oferecemos uma gama completa de tratamentos odontológicos com foco em
            resultados duradouros e experiência confortável para cada paciente.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el }}
              className="card-lift group relative bg-white rounded-3xl p-7 border border-gray-100 flex flex-col gap-5"
            >
              {/* Highlight badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-6 bg-brand-light text-white text-xs font-bold px-3 py-1 rounded-full">
                  {service.highlight}
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-navy-800/8 text-navy-800 flex items-center justify-center group-hover:bg-navy-800 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-navy-800 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Arrow link */}
              <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-light group-hover:gap-3 transition-all duration-300">
                Saiba mais
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
