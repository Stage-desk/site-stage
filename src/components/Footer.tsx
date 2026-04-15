'use client';


const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96C1 8.12 1 12 1 12s0 3.88.46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96C23 15.88 23 12 23 12s0-3.88-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

const columns = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Planos e Preços', href: '#planos' },
      { label: 'Cases de Sucesso', href: '#cases' },
      { label: 'Integrações', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nós', href: '/sobre' },
      { label: 'Blog', href: '/blog' },
      { label: 'Carreiras', href: '#' },
      { label: 'Contato', href: '/contato' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de Ajuda', href: '#' },
      { label: 'Roadmap', href: '#' },
      { label: 'Termos de Uso', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
    ],
  },
];

export function Footer({ logo }: { logo?: any }) {
  return (
    <footer style={{ background: '#0F172A', fontFamily: 'var(--font-inter), sans-serif' }}>
      {/* Área Principal */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 24px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '40px',
      }}
        className="footer-grid"
      >
        {/* Coluna 1 — Marca */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src={logo?.src || "/logo.png"} 
              alt="Stage" 
              width={logo?.width || 100}
              height={logo?.height || 28}
              loading="lazy"
              style={{ height: '28px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
            />
          </a>
          <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.65, maxWidth: '210px', margin: 0 }}>
            A plataforma definitiva de gestão para o mercado de eventos no Brasil.
          </p>
          {/* Ícones sociais */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
            {[
              { href: 'https://instagram.com', icon: <InstagramIcon />, label: 'Instagram' },
              { href: 'https://linkedin.com', icon: <LinkedInIcon />, label: 'LinkedIn' },
              { href: 'https://youtube.com', icon: <YouTubeIcon />, label: 'YouTube' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: '#94A3B8',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Colunas 2, 3, 4 — Links */}
        {columns.map((col) => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700, margin: 0 }}>
              {col.title}
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94A3B8',
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Linha divisória */}
      <div style={{ borderTop: '1px solid #1E293B' }} />

      {/* Barra inferior */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
      }}>
        <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>
          © 2026 Stage Tecnologia. Todos os direitos reservados.
        </p>
        <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0, textAlign: 'right' }}>
          Feito com dedicação para quem cria momentos inesquecíveis.
        </p>
      </div>

      {/* Responsividade */}
      <style>{`
        .footer-grid {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
