'use client';

import { motion } from 'framer-motion';

// Ícone de check azul fiel ao estilo da sessão Financeiro (SVG 16x16)
const BlueCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1">
    <circle cx="8" cy="8" r="8" fill="#3b82f6" fillOpacity="0.15" />
    <path d="M5 8l2 2 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function FinanceiroSection() {
  return (
    // Fundo branco no Financeiro para alternar com o fundo azul claro da Agenda
    <section 
      style={{ paddingTop: '70px', paddingBottom: '70px' }}
      className="w-full bg-[#FFFFFF] px-6 overflow-hidden flex justify-center items-start"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // INVERTIDO: imagem à esquerda, texto à direita
        className="max-w-[1100px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[60px] items-center"
      >
        {/* Lado Esquerdo (Imagens) - INVERTIDO: ordem 1 no desktop */}
        <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center order-2 lg:order-1">
          
          {/* Foto Principal (img-01) */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            src="/img-stage-sessao-financeiro-01.png" 
            alt="Usuário consultando financeiro" 
            className="relative z-0 w-[85%] h-auto rounded-none shadow-none object-contain"
          />

          {/* Gráfico/Chart (img-02) */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute left-[-2%] bottom-[10%] w-[45%] z-20"
          >
            <motion.img 
              src="/img-stage-sessao-financeiro-02.png" 
              alt="Gráfico financeiro" 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

          {/* Receita Card (img-03) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="absolute right-[-5%] top-[22%] w-[30%] z-30"
          >
            <motion.img 
              src="/img-stage-sessao-financeiro-03.png" 
              alt="Card de Receita" 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

          {/* Despesas Card (img-04) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="absolute right-[-8%] top-[35%] w-[30%] z-10"
          >
            <motion.img 
              src="/img-stage-sessao-financeiro-04.png" 
              alt="Card de Despesas" 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

        </div>

        {/* Lado Direito (Textos) - INVERTIDO: ordem 2 no desktop */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="font-sans flex flex-col items-start order-1 lg:order-2 px-6 lg:px-0"
           style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          {/* TAG */}
          <span className="feature-badge !bg-[#D1FADF] !text-[#027A48] !mb-[20px] !px-4 !py-1">
            Financeiro
          </span>
          
          {/* TÍTULO */}
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f1117', lineHeight: 1.2, marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Muito além de contas a pagar e receber
          </h2>
          
          {/* DESCRIÇÃO */}
          <p style={{ color: '#5a6278', marginBottom: '18px', lineHeight: 1.7, fontSize: '1rem' }}>
            Descubra o lucro real de cada evento. O Stage calcula automaticamente todos os custos envolvidos e mostra se você está no caminho certo.
          </p>

          {/* SUBHEADLINE */}
          <p style={{ color: '#0f1117', fontWeight: 600, marginBottom: '18px', fontSize: '1rem' }}>
            Saiba exatamente quanto cada evento lucra.
          </p>
          
          {/* LISTA */}
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px' }}>
            {[
              'Lucro real por evento calculado automaticamente',
              'Controle de custos fixos e variáveis',
              'Precificação inteligente baseada em dados',
              'Contas a receber com status de pagamento',
              'Relatórios financeiros por período'
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1"><BlueCheckIcon /></span>
                <span style={{ color: '#3f475e', fontSize: '1rem', lineHeight: 1.5 }}>{text}</span>
              </li>
            ))}
          </ul>

          {/* FOOTER */}
          <p style={{ fontSize: '1rem', color: '#0f1117', lineHeight: 1.7 }}>
            Custos e faturamento conectados ao evento para <strong>decisões mais rentáveis.</strong>
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
