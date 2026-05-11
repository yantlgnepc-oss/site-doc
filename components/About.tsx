'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const credentials = [
  'Graduado pela USP — Faculdade de Odontologia',
  'Membro da Academia Brasileira de Odontologia Estética (ABOE)',
  'Especialista em Prótese Dentária, Reabilitação Oral, Estética e Implante',
  'Mais de 30 anos de experiência clínica',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const credentialRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Credentials stagger
      gsap.fromTo(
        credentialRefs.current.filter(Boolean),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: credentialRefs.current[0],
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="sobre" ref={sectionRef} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-800/15 aspect-[4/5]">
              <Image
                src="/images/avental-branco.jpg"
                alt="Dr. Eduardo Romão"
                fill
                className="object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-navy-800 text-white rounded-2xl p-5 shadow-2xl">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-sm text-white/70 mt-1">Anos transformando<br/>sorrisos</div>
            </div>

            {/* Decorative dot grid */}
            <div
              className="absolute -top-8 -left-8 w-24 h-24 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #1B2D5B 1.5px, transparent 1.5px)',
                backgroundSize: '10px 10px',
              }}
            />
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="flex flex-col gap-6">
            <span className="text-brand-light font-semibold text-sm tracking-widest uppercase">
              Sobre o Doutor
            </span>

            <h2 className="section-title font-heading text-4xl lg:text-5xl font-bold text-navy-800 leading-tight">
              Dr. Eduardo Romão
            </h2>

            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Com mais de 30 anos dedicados à odontologia, o Dr. Eduardo Romão
                construiu uma carreira marcada pela excelência clínica e pelo cuidado
                genuíno com cada paciente.
              </p>
              <p>
                Combinando técnicas modernas com uma abordagem humanizada, o Dr. Romão
                oferece tratamentos personalizados que vão além da saúde bucal — ele
                transforma a autoestima e a confiança de quem passa por sua clínica.
              </p>
              <p>
                Sempre atualizado com as mais recentes inovações em odontologia digital,
                garante diagnósticos mais precisos e resultados previsíveis para seus pacientes.
              </p>
            </div>

            {/* Credentials */}
            <ul className="mt-2 space-y-3">
              {credentials.map((text, i) => (
                <li
                  key={i}
                  ref={(el) => { credentialRefs.current[i] = el }}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-800/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-4">
              <a
                href="https://wa.me/5511945403050?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy-800 hover:bg-brand-light text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-navy-800/25 hover:-translate-y-0.5"
              >
                Agende sua consulta
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
