'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroMockups({ mockup01, mockup02 }: { mockup01?: any, mockup02?: any }) {
  const { scrollY } = useScroll();
  
  // Inclina para trás (rotateX) e aumenta o scale ao scrollar para dar efeito de profundidade
  const rotateX = useTransform(scrollY, [0, 400], [0, 25]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto 0', position: 'relative', display: 'flex', justifyContent: 'center', perspective: '1200px' }}>
      <motion.div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '850px',
          rotateX,
          scale,
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.img 
          src={mockup01?.src || "/stage-mockup01.png"} 
          alt="Stage Dashboard Desktop" 
          width={mockup01?.width || 1730}
          height={mockup01?.height || 974}
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 30px 80px rgba(59,91,219,0.15)', display: 'block', objectFit: 'cover', cursor: 'pointer' }} 
        />
        <motion.img 
          src={mockup02?.src || "/stage-mockup-02.png"} 
          alt="Stage Dashboard Mobile" 
          width={mockup02?.width || 440}
          height={mockup02?.height || 900}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', right: '-8%', top: '5%', width: '25%', maxWidth: '220px', height: 'auto', objectFit: 'cover', zIndex: 10 }} 
        />
      </motion.div>
    </div>
  );
}
