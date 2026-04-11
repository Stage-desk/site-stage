'use client';

import { useState } from 'react';

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
    <circle cx="9" cy="9" r="9" fill="#2563EB" fillOpacity="0.12" />
    <path d="M6 9l2 2 4-4" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  'IA ilimitada',
  'Eventos ilimitados',
  'Assinatura digital',
  'CRM de vendas',
  'Gestão financeira',
  'Orçamentos',
  'Relatórios',
  'Gestão de equipe',
];

const advantages = [
  { label: 'Suporte 24/7', annualOnly: false },
  { label: 'Treinamento exclusivo', annualOnly: true },
  { label: 'Assistente de implantação', annualOnly: true },
  { label: 'Acesso antecipado a novos recursos', annualOnly: true },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const monthlyPrice = isAnnual ? 54.90 : 69.90;
  const annualTotal = (monthlyPrice * 12).toFixed(2).replace('.', ',');
  const priceFormatted = monthlyPrice.toFixed(2).replace('.', ',');

  return (
    <section id="planos" style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            fontWeight: 800,
            color: '#0f1117',
            letterSpacing: '-0.03em',
            marginBottom: '12px',
          }}>
            Planos simples e transparentes
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.6 }}>
            Escolha o plano ideal para o momento da sua empresa.
          </p>
        </div>

        {/* Toggle Mensal / Anual */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          <span style={{ fontSize: '15px', fontWeight: 500, color: isAnnual ? '#9ca3af' : '#0f1117' }}>
            Mensal
          </span>

          {/* Switch */}
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            style={{
              position: 'relative',
              width: '44px',
              height: '24px',
              borderRadius: '9999px',
              background: '#2563EB',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'background 0.2s',
              flexShrink: 0,
            }}
            aria-label="Alternar entre mensal e anual"
          >
            <span style={{
              position: 'absolute',
              top: '3px',
              left: isAnnual ? 'calc(100% - 21px)' : '3px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: '#ffffff',
              transition: 'left 0.2s',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            }} />
          </button>

          <span style={{ fontSize: '15px', fontWeight: 500, color: isAnnual ? '#0f1117' : '#9ca3af' }}>
            Anual
          </span>

          {/* Badge Economize */}
          {isAnnual && (
            <span style={{
              background: '#DCFCE7',
              color: '#16A34A',
              borderRadius: '9999px',
              padding: '3px 10px',
              fontSize: '13px',
              fontWeight: 600,
            }}>
              Economize 20%
            </span>
          )}
        </div>

        {/* Card principal */}
        <div style={{
          border: '2px solid #2563EB',
          borderRadius: '20px',
          padding: '28px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '28px',
          alignItems: 'start',
        }}
          className="pricing-card-grid"
        >
          {/* Coluna esquerda — info do plano */}
          <div style={{
            background: '#ffffff',
            borderRadius: '14px',
            padding: '28px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f1117', marginBottom: '6px' }}>
                Plano ilimitado
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.5 }}>
                Acesso ilimitado a todas as funcionalidades do Stage
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontSize: '44px', fontWeight: 800, color: '#0f1117', letterSpacing: '-1px' }}>
                  R$ {priceFormatted}
                </span>
                <span style={{ fontSize: '15px', color: '#6b7280', fontWeight: 500 }}>/mês</span>
              </div>
              {isAnnual && (
                <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>
                  Cobrado anualmente (R$ {annualTotal})
                </p>
              )}
            </div>

            <a
              href="https://v1.stagesystem.com.br/criar-conta"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#2563EB',
                color: '#ffffff',
                textAlign: 'center',
                borderRadius: '9999px',
                padding: '14px 24px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1d4ed8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#2563EB'; }}
            >
              Começar agora
            </a>

            <p style={{ textAlign: 'center', fontSize: '13px', color: '#9ca3af', marginTop: '-8px' }}>
              Teste grátis por 15 dias
            </p>
          </div>

          {/* Coluna direita — funcionalidades e vantagens */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '4px' }}>

            {/* Funcionalidades */}
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#0f1117', marginBottom: '14px' }}>
                Funcionalidades:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
                {features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckIcon />
                    <span style={{ fontSize: '14px', color: '#374151' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divisor */}
            <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6' }} />

            {/* Vantagens */}
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#0f1117', marginBottom: '14px' }}>
                Vantagens:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
                {advantages.map((a) => {
                  const isUnavailable = !isAnnual && a.annualOnly;
                  return (
                    <div key={a.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', opacity: isUnavailable ? 0.45 : 1, transition: 'opacity 0.2s' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5" style={{ flexShrink: 0 }}>
                        <circle cx="9" cy="9" r="9" fill={isUnavailable ? '#9ca3af' : '#2563EB'} fillOpacity="0.12" />
                        <path d="M6 9l2 2 4-4" stroke={isUnavailable ? '#9ca3af' : '#2563EB'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{
                        fontSize: '14px',
                        color: isUnavailable ? '#9ca3af' : '#374151',
                        lineHeight: 1.45,
                        textDecoration: isUnavailable ? 'line-through' : 'none',
                        transition: 'color 0.2s, text-decoration 0.2s',
                      }}>{a.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Responsividade */}
      <style>{`
        @media (max-width: 680px) {
          .pricing-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
