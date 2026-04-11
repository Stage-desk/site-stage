'use client';

export function CategoryCard({
  name,
  image,
  href = '#',
}: {
  name: string;
  image: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group relative block w-full overflow-hidden rounded-2xl aspect-[3/4] transition-all duration-300 hover:-translate-y-1"
    >
      {/* Imagem de Fundo (Uso de preenchimento total e estabilidade de bordas) */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay Gradiente na Base (Mais escuro para legibilidade do Saiba Mais) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 transition-opacity duration-300" />
      
      {/* Texto e Saiba Mais Centralizados */}
      <div className="absolute inset-x-0 bottom-4 px-3 flex flex-col items-center justify-center text-center">
        <span className="text-white font-bold text-[14px] leading-tight block drop-shadow-md mb-1.5 w-full text-center">
          {name}
        </span>
        
        <div className="flex items-center justify-center w-full text-white/90 font-medium text-[11px] transition-all group-hover:text-white text-center">
          Saiba mais 
          <svg className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export function BenefitCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        background: '#f8faff',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid #e8eaf0',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(59,91,219,0.1)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{icon}</div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f1117', marginBottom: '8px' }}>{title}</h3>
      <p style={{ color: '#5a6278', fontSize: '0.9rem', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

export function HoverLink({
  href,
  children,
  style,
  hoverColor = '#0f1117',
  baseColor = '#5a6278',
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  hoverColor?: string;
  baseColor?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: baseColor, fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s', ...style }}
      onMouseOver={e => ((e.currentTarget as HTMLElement).style.color = hoverColor)}
      onMouseOut={e => ((e.currentTarget as HTMLElement).style.color = baseColor)}
    >
      {children}
    </a>
  );
}
