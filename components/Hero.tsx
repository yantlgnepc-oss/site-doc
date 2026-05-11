'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const taglineRef = useRef<HTMLSpanElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const bgShapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      // Background shape
      tl.fromTo(
        bgShapeRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
        0
      )

      // Tagline
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        0.3
      )

      // Headline words stagger
      const words = headlineRef.current?.querySelectorAll('.word')
      if (words) {
        tl.fromTo(
          words,
          { opacity: 0, y: 60, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1,
          },
          0.5
        )
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        0.9
      )

      // CTAs
      tl.fromTo(
        ctasRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        1.1
      )

      // Doctor image
      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
        0.4
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const words = ['Odontologia', 'que', 'transforma', 'sorrisos.']

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"
    >
      {/* Decorative background shape */}
      <div
        ref={bgShapeRef}
        className="absolute right-0 top-0 w-[55%] h-full bg-gradient-to-bl from-navy-800/8 via-brand-accent/5 to-transparent rounded-bl-[120px] pointer-events-none"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1B2D5B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text content */}
        <div className="flex flex-col gap-6 z-10">
          {/* Tagline badge */}
          <span
            ref={taglineRef}
            className="inline-flex items-center gap-2 w-fit bg-navy-800/10 text-navy-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
            Clínica Odontológica em São Paulo
          </span>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-800 leading-tight perspective-1000"
            style={{ perspective: '1000px' }}
          >
            {words.map((word, i) => (
              <span key={i} className="word inline-block mr-3">
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="text-gray-500 text-lg leading-relaxed max-w-lg">
            Cuidado personalizado, tecnologia de ponta e um atendimento que coloca
            você em primeiro lugar. Seu sorriso merece o melhor.
          </p>

          {/* CTAs */}
          <div ref={ctasRef} className="flex flex-wrap gap-4 mt-2">
            <a
              href="https://wa.me/5511945403050?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-navy-800 hover:bg-brand-light text-white px-7 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-navy-800/25 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Consulta
            </a>
            <button
              onClick={() => {
                const el = document.querySelector('#sobre')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center gap-2 border-2 border-navy-800/20 hover:border-navy-800 text-navy-800 px-7 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-1"
            >
              Conheça o Dr. Romão
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-6 mt-4 pt-6 border-t border-gray-100">
            {[
              { number: '30+', label: 'Anos de experiência' },
              { number: 'Milhares', label: 'Pacientes atendidos' },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <div className="text-2xl font-bold text-navy-800">{badge.number}</div>
                <div className="text-xs text-gray-400 mt-0.5 whitespace-nowrap">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Doctor image */}
        <div ref={imageRef} className="relative flex items-end justify-center lg:justify-end">
          {/* Decorative circle behind doctor */}
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-gradient-to-tl from-navy-800/10 to-brand-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-8 right-8 w-[340px] h-[340px] border-2 border-navy-800/10 rounded-full" />

          <div className="relative z-10 h-[520px] lg:h-[620px] w-auto">
            <Image
              src="/images/hero-doctor.png"
              alt="Dr. Eduardo Romão"
              width={480}
              height={620}
              className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>

          {/* Floating badge */}
          <div className="absolute top-8 left-4 lg:-left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20">
            <div className="w-10 h-10 bg-navy-800/10 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400">Registro Profissional</div>
              <div className="text-sm font-bold text-navy-800">CRO-SP 63861</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-800/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-navy-800/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
