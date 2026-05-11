import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Eduardo Romão | Odontologia',
  description:
    'Clínica odontológica do Dr. Eduardo Romão. Especialista em odontologia estética, restauradora, preventiva e digital. Agende sua consulta.',
  keywords: 'dentista, odontologia, clareamento dental, implantes, ortodontia, Eduardo Romão',
  openGraph: {
    title: 'Dr. Eduardo Romão | Odontologia',
    description: 'Cuide do seu sorriso com quem é especialista.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  )
}
