'use client';

import { motion } from 'framer-motion';

// Ícone de check azul fiel ao estilo das outras sessões
const BlueCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1">
    <circle cx="8" cy="8" r="8" fill="#3b82f6" fillOpacity="0.15" />
    <path d="M5 8l2 2 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ContratoSection({ image }: { image?: any }) {
  return (
    // Fundo azul claro para alternar com o branco do Financeiro
    <section 
      style={{ paddingTop: '70px', paddingBottom: '70px' }}
      className="w-full bg-[#F3F7FF] px-6 overflow-hidden flex justify-center items-start"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
          {/* TAG: Azul conforme solicitado */}
          <span className="feature-badge !bg-[#D1E0FF] !text-[#0033E2] !mb-[20px] !px-4 !py-1">
            Contratos
          </span>
          
          {/* TÍTULO */}
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f1117', lineHeight: 1.2, marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Contratos sem dor de cabeça
          </h2>
          
          {/* DESCRIÇÃO PRINCIPAL */}
          <p style={{ color: '#0f1117', marginBottom: '18px', lineHeight: 1.6, fontSize: '1.1rem', fontWeight: 500 }}>
            Gere contratos profissionais em segundos a partir do orçamento aprovado e colete assinaturas eletrônicas com validade jurídica.
          </p>

          {/* TEXTO SECUNDÁRIO */}
          <p style={{ color: '#374151', marginBottom: '28px', lineHeight: 1.7, fontSize: '1rem' }}>
            Ao cadastrar um evento, o contrato é gerado automaticamente, pronto para revisão e assinatura digital — sem retrabalho.
          </p>
          
          {/* LISTA DE TÓPICOS */}
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px' }}>
            {[
              'Contrato gerado automaticamente ao criar o evento',
              'Assinatura eletrônica integrada',
              'Envio direto por WhatsApp ou e-mail',
              'Templates personalizáveis'
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1"><BlueCheckIcon /></span>
                <span style={{ color: '#3f475e', fontSize: '1rem', lineHeight: 1.5 }}>{text}</span>
              </li>
            ))}
          </ul>

          {/* TEXTO FINAL */}
          <p style={{ fontSize: '1rem', color: '#0f1117', lineHeight: 1.7 }}>
            Menos burocracia.<br />
            Mais <strong>agilidade</strong> para fechar eventos
          </p>
        </motion.div>

        {/* Lado Direito (Imagens/Colagem) */}
        <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
          
          {/* Foto Principal (img-01): Casal olhando o celular com o contrato */}
          <motion.img 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            src={image?.src || "/img-stage-sessao-contrato-01.png"} 
            alt="Contrato no celular" 
            width={image?.width || 752}
            height={image?.height || 816}
            loading="lazy"
            className="relative z-0 w-[85%] h-auto rounded-none shadow-none object-contain"
          />

          {/* Status da Assinatura (img-04): Canto Superior Direito */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute right-[-5%] top-[5%] w-[40%] z-30"
          >
            <motion.img 
              src="/img-stage-sessao-contrato-04.png" 
              alt="Status da Assinatura" 
              width={320}
              height={223}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

          {/* Notificação Visualizado (img-02): Aproximada para baixo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="absolute left-[-8%] bottom-[22%] w-[45%] z-20"
          >
            <motion.img 
              src="/img-stage-sessao-contrato-02.png" 
              alt="Contrato Visualizado" 
              width={435}
              height={129}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

          {/* Notificação Assinado (img-03): Aproximada para baixo */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="absolute left-[-5%] bottom-[8%] w-[45%] z-10"
          >
            <motion.img 
              src="/img-stage-sessao-contrato-03.png" 
              alt="Contrato Assinado" 
              width={435}
              height={129}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-auto rounded-none shadow-none"
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
