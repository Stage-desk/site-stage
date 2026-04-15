'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function VideoBanner({ thumbnail }: { thumbnail?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center w-full px-6 mb-12">
      {/* Grupo clicável com tamanho reduzido em 50% conforme solicitado */}
      <motion.div
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ 
          scale: 1.05, 
          rotate: 1,
          transition: { duration: 0.3 }
        }}
        className="cursor-pointer flex flex-row items-center bg-white max-w-[530px] w-full shadow-lg transition-all duration-300"
        style={{ padding: '18px', borderRadius: '24px', border: '1px solid #5E7185', gap: '18px' }}
      >
        {/* Lado Esquerdo: Imagem (Thumbnail) - Proporção ajustada */}
        <div className="relative w-[38%] shrink-0">
          <img 
            src={thumbnail?.src || "/Hero video Copy.png"} 
            alt="Thumbnail Vídeo" 
            width={thumbnail?.width || 530}
            height={thumbnail?.height || 300}
            loading="lazy"
            className="w-full h-auto rounded-[16px] object-cover"
          />
          {/* Botão Play proporcional */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" fill="#3b5bdb" stroke="#3b5bdb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Lado Direito: Textos - Ajustados para maior legibilidade */}
        <div className="flex flex-col items-start text-left">
          <h3 className="text-[17px] font-bold text-[#0f1117] leading-tight mb-2">
            Descubra como o Stage pode<br /> revolucionar sua gestão! ⚡️
          </h3>
          <p className="text-[14px] font-medium text-[#5a6278]">
            Assista a demonstração
          </p>
        </div>
      </motion.div>

      {/* Modal do Vídeo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[1000px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Botão Fechar */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Iframe do Youtube */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/l9npTbsXkHk?autoplay=1"
                title="Stage Demonstração"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
