import { CategoryCard, BenefitCard } from '@/components/HomeInteractive';
import { HeroMockups } from '@/components/HeroMockups';
import { VideoBanner } from '@/components/VideoBanner';
import { AgendaSection } from '@/components/AgendaSection';
import { FinanceiroSection } from '@/components/FinanceiroSection';
import { ContratoSection } from '@/components/ContratoSection';
import { CRMSection } from '@/components/CRMSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

// ─── Icones SVG inline ────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#22c55e" opacity="0.15" />
    <path d="M5 8l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#facc15">
    <path d="M10 1l2.39 4.84L18 6.85l-4 3.9.94 5.5L10 13.77l-4.94 2.48.94-5.5-4-3.9 5.61-.81L10 1z" />
  </svg>
);

// ─── Dados ───────────────────────────────────────────────────────────────────

const categories = [
  { name: 'Assessoria Cerimonial', image: '/assessoria-cerimonial.png', href: '/blog/assessoria-cerimonial' },
  { name: 'Decoração', image: '/decoracao.png', href: '/blog/decoracao' },
  { name: 'Coquetelarias', image: '/coquetelaria.png', href: '/blog/coquetelaria' },
  { name: 'Buffet', image: '/buffet.png', href: '/blog/buffet' },
  { name: 'Fotografo Filmmaker', image: '/filmmaker.png', href: '/blog/fotografo-filmmaker' },
  { name: 'Bandas e Artistas', image: '/bandas-artistas.png', href: '/blog/bandas-e-artistas' },
  { name: 'Photobooth', image: '/photobooth.png', href: '/blog/photobooth' },
  { name: 'Recreação', image: '/recreacao.png', href: '/blog/recreacao' },
];

const agendaItems = [
  'Centralize todos seus eventos em um único lugar',
  'Bloqueio automático de conflitos de datas',
  'Sincronização com Google Calendar',
  'Visão semanal, mensal e por status',
  'Alertas de eventos próximos',
];


const contratosItems = [
  'Geração automática a partir do orçamento',
  'Assinatura eletrônica integrada',
  'Templates personalizáveis por tipo de serviço',
  'Histórico completo de versões',
  'Envio direto por WhatsApp ou e-mail',
];

const benefits = [
  { icon: '📋', title: 'Tudo centralizado', desc: 'Chega de planilhas e anotações espalhadas. Agenda, clientes, finanças e contratos em um só lugar.' },
  { icon: '💰', title: 'Lucro real por evento', desc: 'Saiba exatamente quanto você lucra em cada evento, descontando todos os custos envolvidos.' },
  { icon: '🎯', title: 'Precificação inteligente', desc: 'Pare de cheirar o preço. Precifique com base em dados reais do seu negócio.' },
  { icon: '⚡', title: 'Orçamentos em minutos', desc: 'Monte e envie orçamentos profissionais para seus clientes em poucos minutos.' },
  { icon: '🔄', title: 'Orçamento vira contrato', desc: 'Com um clique, transforme o orçamento aprovado em contrato pronto para assinar.' },
  { icon: '📊', title: 'Visão estratégica', desc: 'Dashboards que mostram a saúde do seu negócio e onde você pode crescer mais.' },
];

const testimonials = [
  {
    quote: 'O Stage mudou completamente a forma como eu gerencio minha empresa. Antes eu perdia muito tempo com planilhas e agora tenho tudo organizado. Meu faturamento cresceu depois que comecei a usar a precificação inteligente.',
    name: 'Fabiana Rocha',
    designation: 'Fotogram eventos',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1368',
  },
  {
    quote: 'Finalmente um sistema feito para quem trabalha com eventos de verdade! A parte de contratos me salvou muita dor de cabeça. Recomendo para qualquer profissional da área.',
    name: 'Ludiane Reis',
    designation: 'Estação Chocolate',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1368',
  },
  {
    quote: 'Impressionante como tudo se conecta no Stage. Agora consigo ter controle do financeiro, agenda e dos contratos sem complicação. É um divisor de águas!',
    name: 'Roberto Andrade',
    designation: 'Assessor de Eventos',
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1368',
  }
];

// ─── Componentes Server ───────────────────────────────────────────────────────

function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} className="check-item">
          <span className="check-icon"><CheckIcon /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MockupUI({ color = '#3b5bdb' }: { color?: string }) {
  return (
    <div style={{
      background: '#f8faff',
      borderRadius: '20px',
      padding: '24px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
      minHeight: '260px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff6057' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
      </div>
      {[0,1,2,3].map(i => (
        <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ width: 36, height: 36, borderRadius: '10px', background: i === 0 ? color : '#e8eaf0', opacity: i === 0 ? 1 : 0.5 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ height: 10, borderRadius: 4, background: i === 0 ? '#e0e6ff' : '#f0f0f0', width: `${70 - i * 10}%` }} />
            <div style={{ height: 8, borderRadius: 4, background: '#f0f0f0', width: `${50 - i * 5}%` }} />
          </div>
          <div style={{ padding: '4px 10px', borderRadius: 9999, background: i === 0 ? color : '#e8eaf0', color: i === 0 ? '#fff' : '#aaa', fontSize: '0.7rem', fontWeight: 600 }}>
            {i === 0 ? 'Ativo' : '—'}
          </div>
        </div>
      ))}
      <div style={{ marginTop: 'auto', padding: '12px 16px', background: '#fff', borderRadius: '12px', display: 'flex', gap: '12px' }}>
        {[0,1,2].map(i => (
          <div key={i} style={{ flex: 1, height: 32, borderRadius: 8, background: i === 1 ? color : '#f0f4ff', opacity: i === 1 ? 1 : 0.5 }} />
        ))}
      </div>
    </div>
  );
}

type LayoutDir = 'ltr' | 'rtl';

function FeatureSection({
  badge, title, description, items, color = '#3b5bdb', reversed = false, bg = '#ffffff',
}: {
  badge: string; title: string; description: string;
  items: string[]; color?: string; reversed?: boolean; bg?: string;
}) {
  const gridDir: LayoutDir = reversed ? 'rtl' : 'ltr';
  return (
    <section style={{ background: bg, padding: '70px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', direction: gridDir }}>
        <div style={{ direction: 'ltr' }}>
          <span className="feature-badge" style={{ marginBottom: '20px', display: 'inline-flex' }}>{badge}</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f1117', lineHeight: 1.2, marginBottom: '14px', letterSpacing: '-0.02em' }}>{title}</h2>
          <p style={{ color: '#374151', marginBottom: '28px', lineHeight: 1.7, fontSize: '1rem' }}>{description}</p>
          <CheckList items={items} />
        </div>
        <div style={{ direction: 'ltr' }}>
          <MockupUI color={color} />
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ── HERO ── */}
      <section className="home-hero-section">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 16px',
              borderRadius: 9999,
              background: '#EAEFFD',
              border: '1px solid #C1D0F9',
              color: '#2463EB',
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              marginBottom: '24px',
            }}
          >
            Gestão profissional para quem vive de eventos
          </div>

          <h1 className="home-hero-title">
            <span className="hidden sm:block">
              Eventos mais <span style={{ color: '#3b5bdb' }}>lucrativos</span>,<br />
              organizados e previsíveis
            </span>
            <span className="block sm:hidden text-[2.2rem] leading-[1.1] tracking-[-1.2px] font-extrabold">
              Eventos mais <br />
              <span style={{ color: '#3b5bdb' }}>lucrativos, organizados</span> <br />
              e previsíveis
            </span>
          </h1>
          <p style={{ fontSize: '18px', color: '#374151', marginBottom: '36px', lineHeight: 1.65 }}>
            Gerencie agenda, contratos, financeiro e clientes em um só lugar
          </p>
          <div className="btn-hero-container">
            <a href="https://v1.stagesystem.com.br/criar-conta" target="_blank" rel="noopener noreferrer" className="btn-hero">
              <svg className="sparkle-icon" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2ZM6 4L6.8 6.2L9 7L6.8 7.8L6 10L5.2 7.8L3 7L5.2 6.2L6 4ZM18 16L18.8 18.2L21 19L18.8 19.8L18 22L17.2 19.8L15 19L17.2 18.2L18 16Z" fill="#fff"/>
              </svg>
              Comece Grátis
            </a>
          </div>
        </div>

        {/* Componente Interativo com Efeitos do Framer Motion */}
        <HeroMockups />

        {/* Banner de Vídeo com Modal - Mais margem para não sobrepor */}
        <div style={{ marginTop: '120px' }}>
          <VideoBanner key="force-refresh-18px" />
        </div>
      </section>

      {/* ── PARA QUEM ── */}
      <section id="funcionalidades" className="home-para-quem-section">
        <div className="home-para-quem-grid">
          {/* Grid de Cards (Agora fica em segundo no mobile) */}
          <div className="home-category-grid order-2 lg:order-1">
            {categories.map((cat, i) => (
              <CategoryCard key={i} {...cat} />
            ))}
          </div>

          {/* Textos à Direita (E à esquerda/topo no Mobile) */}
          <div className="order-1 lg:order-2">
            <span style={{ color: '#3b5bdb', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px', display: 'block' }}>
              Tudo simples na palma da mão
            </span>
            <h2 className="home-para-quem-title">
              O Stage é para quem vive de eventos
            </h2>
            <p style={{ color: '#374151', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '36px' }}>
              Tudo o que você precisa para gerenciar o seu negócio simplificando a gestão da sua agenda de eventos e financeiro de forma simples e eficiente.
            </p>
            <a href="https://v1.stagesystem.com.br/criar-conta" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Comece grátis
            </a>
          </div>
        </div>
      </section>

      {/* ── AGENDA ── */}
      <AgendaSection />

      {/* ── FINANCEIRO ── */}
      <FinanceiroSection />

      {/* ── CONTRATOS ── */}
      <ContratoSection />

      {/* ── CRM ── */}
      <CRMSection />

      {/* ── ESTATÍSTICA ── */}
      <section className="home-stats-section">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, color: '#0f1117', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '20px' }}>
            Mais clareza, menos esforço e mais faturamento
          </h2>
          <p style={{ color: '#374151', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '40px' }}>
            Quem usa o Stage tem{' '}
            <strong style={{ color: '#3b5bdb', fontSize: '1.5rem', fontWeight: 900 }}>27% de aumento</strong>
            {' '}no faturamento no primeiro ano. Porque quando você enxerga seus números, você toma decisões melhores.
          </p>
          <a href="https://v1.stagesystem.com.br/criar-conta" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.85rem 2.4rem' }}>
            Começar agora — é grátis
          </a>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="home-benefits-section">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f1117', letterSpacing: '-0.02em' }}>
              Principais benefícios de usar o Stage no seu negócio de eventos
            </h2>
          </div>
          <div className="home-benefits-grid">
            {benefits.map((b, i) => (
              <BenefitCard key={i} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <TestimonialsSection />

      {/* ── PREÇOS ── */}
      <PricingSection />

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: '#ffffff', padding: '96px 24px' }}>
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0f1117', letterSpacing: '-0.03em', marginBottom: '12px' }}>
              FAQ
            </h2>
            <p style={{ color: '#374151', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Algumas dúvidas comuns antes de começar.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '14px' }}>
            {[
              {
                q: 'Preciso de cartão para testar?',
                a: 'Não. Você pode testar por 7 dias grátis sem cartão.',
              },
              {
                q: 'Posso cancelar quando quiser?',
                a: 'Sim. Você tem flexibilidade para cancelar quando quiser.',
              },
              {
                q: 'O Stage serve para qual tipo de profissional?',
                a: 'Para quem vive de eventos: assessorias, buffets, fotógrafos, decoradores e outros fornecedores.',
              },
              {
                q: 'O que está incluso nos planos?',
                a: 'Agenda, CRM, orçamentos, contratos com assinatura e controle financeiro integrados.',
              },
            ].map((item) => (
              <details
                key={item.q}
                style={{
                  border: '1px solid #e8eaf0',
                  borderRadius: 16,
                  padding: '16px 18px',
                  background: '#ffffff',
                  boxShadow: '0 10px 30px rgba(15,17,23,0.04)',
                }}
              >
                <summary style={{ cursor: 'pointer', fontWeight: 800, color: '#0f1117' }}>
                  {item.q}
                </summary>
                <p style={{ marginTop: 10, color: '#374151', lineHeight: 1.7 }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
