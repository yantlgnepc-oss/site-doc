'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const contactItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telefone / WhatsApp',
    value: '(11) 94540-3050',
    href: 'https://wa.me/5511945403050',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'E-mail',
    value: 'drdadoromao@gmail.com',
    href: 'mailto:drdadoromao@gmail.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Endereço',
    value: 'Rua Urussuí, 71, conj. 51\nItaim Bibi — São Paulo, SP\nCEP 04533-001',
    href: 'https://maps.google.com/maps?q=Rua+Urussuí+71+Itaim+Bibi+São+Paulo+SP',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Horário de Atendimento',
    value: 'Seg – Sex: 8h às 18h\nSábado: 8h às 13h',
    href: null,
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

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
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%', once: true },
        }
      )
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%', once: true },
        }
      )
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contato" ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-light font-semibold text-sm tracking-widest uppercase">
            Contato
          </span>
          <h2 className="section-title center font-heading text-4xl lg:text-5xl font-bold text-navy-800 mt-3 leading-tight">
            Fale com a gente
          </h2>
          <p className="text-gray-500 mt-4">
            Estamos prontos para atender você. Entre em contato pelo WhatsApp ou
            agende sua consulta diretamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div ref={leftRef} className="flex flex-col gap-6">
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-navy-800/5 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-navy-800/10 text-navy-800 flex items-center justify-center group-hover:bg-navy-800 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-navy-800 font-medium hover:text-brand-light transition-colors duration-200 whitespace-pre-line"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-navy-800 font-medium whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Map */}
          <div ref={rightRef} className="rounded-3xl overflow-hidden shadow-xl shadow-navy-800/10 min-h-[400px] bg-gray-100 relative">
            <iframe
              title="Localização da clínica"
              src="https://maps.google.com/maps?q=Rua+Urussu%C3%AD+71+Itaim+Bibi+S%C3%A3o+Paulo+SP&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
