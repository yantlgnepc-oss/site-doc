export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: '#f8fafc',
          color: '#1B2D5B',
        }}
      >
        <h1 style={{ fontSize: '6rem', margin: 0, fontWeight: 800 }}>404</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b' }}>Página não encontrada</p>
        <a
          href="/"
          style={{
            marginTop: '1.5rem',
            background: '#1B2D5B',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Voltar ao início
        </a>
      </body>
    </html>
  )
}
