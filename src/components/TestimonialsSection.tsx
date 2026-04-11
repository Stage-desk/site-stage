"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "O Stage mudou completamente a forma como eu gerencio minha empresa. Antes eu perdia muito tempo com planilhas e agora tenho tudo organizado. Meu faturamento cresceu depois que comecei a usar a precificação inteligente.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Fabiana Rocha",
    role: "Fotógrafa de Eventos",
  },
  {
    text: "Finalmente um sistema feito para quem trabalha com eventos de verdade! A parte de contratos me salvou muita dor de cabeça. Recomendo para qualquer profissional da área.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Ludiane Reis",
    role: "Assessora de Eventos",
  },
  {
    text: "Impressionante como tudo se conecta no Stage. Agora consigo ter controle do financeiro, agenda e dos contratos sem complicação. É um divisor de águas!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Roberto Andrade",
    role: "Produtor de Eventos",
  },
  {
    text: "A agenda inteligente do Stage eliminou completamente os conflitos de datas que me causavam pesadelos. Minha equipe ficou muito mais organizada.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Camila Torres",
    role: "Cerimonialista",
  },
  {
    text: "O módulo financeiro é incrível. Consigo ver exatamente quanto lucro em cada evento, algo que nunca consegui fazer com planilhas. Vale muito a pena!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Marcelo Souza",
    role: "DJ e Produtor Musical",
  },
  {
    text: "Enviar orçamentos e contratos pelo Stage é muito mais profissional. Meus clientes ficaram impressionados com a qualidade e eu fechei mais eventos.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Priscila Mendes",
    role: "Decoradora de Eventos",
  },
  {
    text: "O Stage me deu uma visão clara do meu negócio. Antes eu achava que estava lucrando bem, mas os relatórios mostraram onde eu podia melhorar muito.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Carlos Henrique",
    role: "Buffet de Eventos",
  },
  {
    text: "A assinatura eletrônica facilitou demais minha vida. Antes ficava correndo atrás de clientes para assinar papel. Agora é tudo digital e muito mais rápido.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Juliana Lima",
    role: "Coordenadora de Casamentos",
  },
  {
    text: "Uso o Stage há 6 meses e já não consigo imaginar trabalhar sem ele. A gestão de clientes e o funil de vendas me ajudaram a fechar 30% mais contratos.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Felipe Nascimento",
    role: "Fotógrafo e Filmmaker",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section
      id="cases"
      style={{ background: "#ffffff", padding: "96px 24px", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "600px",
            margin: "0 auto 48px",
            textAlign: "center",
          }}
        >
          {/* Badge com mesmo estilo da Hero */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 16px",
            borderRadius: 9999,
            background: "#EAEFFD",
            border: "1px solid #C1D0F9",
            color: "#2463EB",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            marginBottom: "20px",
          }}>
            Depoimentos
          </div>

          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800,
            color: "#0f1117",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}>
            Junte-se aos profissionais de eventos que mais crescem no Brasil
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1rem", lineHeight: 1.6 }}>
            Veja o que eles têm a dizer sobre nós.
          </p>
        </motion.div>

        {/* Colunas de depoimentos com scroll infinito */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          maxHeight: "720px",
          overflow: "hidden",
          maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}>
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={22}
            className="hidden-mobile"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={20}
            className="hidden-tablet"
          />
        </div>
      </div>

      <style>{`
        .hidden-mobile { display: none; }
        .hidden-tablet { display: none; }
        @media (min-width: 768px) { .hidden-mobile { display: block; } }
        @media (min-width: 1024px) { .hidden-tablet { display: block; } }
      `}</style>
    </section>
  );
}
