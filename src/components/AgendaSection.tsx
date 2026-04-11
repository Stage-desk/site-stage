'use client';

import { motion } from 'framer-motion';

// Ícone de check azul fiel ao estilo da sessão Financeiro (SVG 16x16)
const BlueCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1">
    <circle cx="8" cy="8" r="8" fill="#3b82f6" fillOpacity="0.15" />
    <path d="M5 8l2 2 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function AgendaSection() {
  return (
    // Fundo preenchendo toda a tela como no protótipo (azul super claro)
    <section 
      style={{ paddingTop: '70px', paddingBottom: '70px' }}
      className="w-full bg-[#F3F7FF] px-6 overflow-hidden flex justify-center items-start"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Container com grid items-start para paridade visual no topo
        className="max-w-[1100px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[60px] items-start"
      >
        {/* Lado Esquerdo (Textos) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="font-sans flex flex-col items-start px-6 lg:px-0"
           style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          {/* TAG: Mesmo estilo do Financeiro (className="feature-badge") */}
          <span className="feature-badge !bg-[#D1E0FF] !text-[#0033E2] !mb-[20px] !px-4 !py-1">
            Agenda
          </span>
          
          {/* TÍTULO: Paridade com Financeiro (2rem, 800 weight, 14px mb) */}
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f1117', lineHeight: 1.2, marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Conflitos na agenda?<br />
            Nunca mais!
          </h2>
          
          {/* DESCRIÇÃO: Paridade com Financeiro (mb 28px, line-height 1.7) */}
          <p style={{ color: '#5a6278', marginBottom: '28px', lineHeight: 1.7, fontSize: '1rem' }}>
            Pare de perder dinheiro e descobrir conflitos de última hora. Com o Stage você enxerga tudo de uma vez e o sistema te avisa antes de qualquer problema.
          </p>
          
          {/* LISTA: Mesmos espaçamentos (gap 14px conforme CheckList no page.tsx) */}
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px' }}>
            {[
              'Centralize todos seus eventos em um único lugar',
              'Bloqueio automático de conflitos de datas',
              'Eventos, contratos e financeiro sincronizados',
              'Alertas de eventos próximos'
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1"><BlueCheckIcon /></span>
                <span style={{ color: '#3f475e', fontSize: '1rem', lineHeight: 1.5 }}>{text}</span>
              </li>
            ))}
          </ul>

          {/* FOOTER */}
          <p style={{ fontSize: '1rem', color: '#0f1117', lineHeight: 1.7 }}>
            Um evento cadastrado = <strong>tudo organizado.</strong>
          </p>
        </motion.div>

        {/* Lado Direito (Imagens/Colagem) */}
        <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
          
          {/* Foto Principal (img-01): SEM arredondamento e SEM sombra distorcida (shadow-none) */}
          <motion.img 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            src="/img-stage-sessao-agenda-01.png" 
            alt="Usuária usando o Stage" 
            className="relative z-0 w-[80%] h-auto rounded-none shadow-none object-contain"
          />

          {/* Calendário (img-02): SEM arredondamento e SEM sombra */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute left-[-5%] top-[5%] w-[45%] z-10"
          >
            <motion.img 
              src="/img-stage-sessao-agenda-02.png" 
              alt="Calendário Pop-up" 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

          {/* Pop-up Menor (img-04): SEM arredondamento e SEM sombra */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="absolute left-[0%] bottom-[15%] w-[35%] z-20"
          >
            <motion.img 
              src="/img-stage-sessao-agenda-04.png" 
              alt="Próximos eventos" 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

          {/* Pop-up Grande (img-03): TAMANHO REDUZIDO, SEM arredondamento e SEM sombra */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="absolute right-[-5%] bottom-[10%] w-[42%] z-30"
          >
            <motion.img 
              src="/img-stage-sessao-agenda-03.png" 
              alt="Eventos do dia" 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
