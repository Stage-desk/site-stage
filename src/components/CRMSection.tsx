'use client';

import { motion } from 'framer-motion';

// Ícone de check azul fiel ao estilo das outras sessões
const BlueCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1">
    <circle cx="8" cy="8" r="8" fill="#3b82f6" fillOpacity="0.15" />
    <path d="M5 8l2 2 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function CRMSection() {
  return (
    // Fundo branco no CRM conforme solicitado
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
        {/* Lado Esquerdo (Imagens) — INVERTIDO: ordem 1 no desktop */}
        <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center order-2 lg:order-1">
          
          {/* Foto Principal (img-01): Homem no computador */}
          <motion.img 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            src="/img-stage-sessao-crm-01.png" 
            alt="Dashboard CRM no laptop" 
            width={999}
            height={799}
            className="relative z-0 w-[85%] h-auto rounded-none shadow-none object-contain"
          />

          {/* Card Lead (img-02) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute left-[-15%] bottom-[10%] w-[65%] z-30"
          >
            <motion.img 
              src="/img-stage-sessao-crm-02.png" 
              alt="Card de Lead" 
              width={673}
              height={423}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

          {/* Modal Programar (img-03) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="absolute right-[-8%] bottom-[25%] w-[36%] z-20"
          >
            <motion.img 
              src="/img-stage-sessao-crm-03.png" 
              alt="Programar Mensagem" 
              width={391}
              height={131}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

          {/* Elemento Extra (img-04) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="absolute left-[-10%] top-[8%] w-[45%] z-10"
          >
            <motion.img 
              src="/img-stage-sessao-crm-04.png" 
              alt="Detalhe CRM" 
              width={448}
              height={269}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

        </div>

        {/* Lado Direito (Textos) — INVERTIDO: ordem 2 no desktop */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="font-sans flex flex-col items-start order-1 lg:order-2 px-6 lg:px-0"
           style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          {/* TAG: Estilo Roxo/Indigo para Vendas/CRM conforme referência */}
          <span className="feature-badge !bg-[#EEF2FF] !text-[#4F46E5] !mb-[20px] !px-4 !py-1">
            Vendas
          </span>
          
          {/* TÍTULO */}
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f1117', lineHeight: 1.2, marginBottom: '14px', letterSpacing: '-0.02em' }}>
            CRM conectado com o que realmente importa
          </h2>
          
          {/* DESCRIÇÃO PRINCIPAL */}
          <p style={{ color: '#0f1117', marginBottom: '18px', lineHeight: 1.6, fontSize: '1.1rem', fontWeight: 500 }}>
            Organize seus leads, acompanhe cada negociação e transforme mais orçamentos em eventos fechados, sem depender de memória ou WhatsApp.
          </p>

          {/* TEXTO SECUNDÁRIO */}
          <p style={{ color: '#374151', marginBottom: '28px', lineHeight: 1.7, fontSize: '1rem' }}>
            Ao cadastrar um evento, o contrato é gerado automaticamente, pronto para revisão e assinatura digital — sem retrabalho.
          </p>
          
          {/* LISTA DE TÓPICOS */}
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px' }}>
            {[
              'Visualize todos os seus leads em um funil organizado',
              'Registre interações e histórico completo',
              'Nunca mais esqueça de fazer follow-up',
              'Tenha controle real sobre suas oportunidades de venda'
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1"><BlueCheckIcon /></span>
                <span style={{ color: '#3f475e', fontSize: '1rem', lineHeight: 1.5 }}>{text}</span>
              </li>
            ))}
          </ul>

          {/* TEXTO FINAL */}
          <p style={{ fontSize: '1.125rem', color: '#0f1117', lineHeight: 1.7 }}>
            Mais controle = <strong>mais fechamento</strong>
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
