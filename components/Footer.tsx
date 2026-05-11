'use client'

import Image from 'next/image'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt="Dr. Eduardo Romão Odontologia"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Cuidado odontológico de excelência, com tecnologia de ponta e
              atendimento humanizado em São Paulo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-widest">
              Contato
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>(11) 94540-3050</li>
              <li>drdadoromao@gmail.com</li>
              <li>Rua Urussuí, 71, conj. 51<br />Itaim Bibi — São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Dr. Eduardo Romão Odontologia. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            CRO-SP: 63861
          </p>
        </div>
      </div>
    </footer>
  )
}
