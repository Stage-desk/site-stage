"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const proHighlights = [
  "Acesso completo a todas as funcionalidades",
  "Melhor custo-benefício",
  "Ideal para quem quer crescer com consistência",
];

const premiumHighlights = [
  "Tudo o que tem no Pro",
  "Cancele quando quiser",
  "Perfeito para começar sem compromisso",
];

export default function PricingSection2() {
  return (
    <section className="relative w-full bg-white px-6 py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000014_1px,transparent_1px),linear-gradient(to_bottom,#00000014_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_45%_55%_at_50%_35%,#000_65%,transparent_110%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-[clamp(2.1rem,5vw,3.4rem)] font-black tracking-tighter text-slate-950">
            Planos e preços
          </h2>
          <p className="mt-4 text-base font-medium text-slate-600 sm:text-lg">
            Escolha o plano ideal para o seu momento e comece a lucrar mais hoje mesmo.
          </p>
        </header>

        <div className="grid items-end gap-4 md:grid-cols-3 md:gap-7">
          {/* Premium (Mensal) */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="h-fit border-slate-200/80 bg-white shadow-sm">
              <CardHeader className="rounded-2xl rounded-b-none border-b border-slate-200/70 bg-slate-50/80">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-2xl border border-slate-300/60 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
                    Premium
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Mensal</span>
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-[clamp(2.2rem,4vw,2.8rem)] font-black tracking-tighter text-slate-950 leading-none">
                    R$ 69,90
                  </span>
                  <span className="pb-1 text-sm font-semibold text-slate-500">/ mês</span>
                </div>
                <p className="text-sm font-medium text-slate-600">
                  Acesso flexível para começar agora
                </p>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="mt-5 space-y-3">
                  {premiumHighlights.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <CheckIcon className="mt-0.5 text-slate-500" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://v1.stagesystem.com.br/criar-conta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-indigo-600/25 transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
                >
                  Começar agora
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pro (Anual) - featured */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <Card className="relative h-fit overflow-hidden border-indigo-200/40 bg-gradient-to-br from-[#6d5cf6] via-[#4f46e5] to-[#4338ca] text-white shadow-2xl shadow-indigo-200/70">
              <CardHeader className="bg-white/10 rounded-2xl rounded-b-none border-b border-white/15">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-2xl border border-white/35 bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                    Pro
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                    Recomendado
                  </span>
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-[clamp(2.4rem,4.6vw,3.4rem)] font-black tracking-tighter leading-none">
                    R$ 658,80
                  </span>
                  <span className="pb-1 text-sm font-semibold text-white/70">/ ano</span>
                </div>
                <p className="text-sm font-medium text-white/85">
                  ou <span className="font-extrabold text-white">R$ 54,90</span> / mês
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-300/15 px-3 py-2 text-xs font-semibold text-emerald-50">
                  <span aria-hidden>💡</span>
                  <span>Economize R$ 180 por ano</span>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="mt-5 text-sm font-semibold text-white/95">
                  Mais economia e crescimento com previsibilidade
                </p>
                <ul className="mt-4 space-y-3">
                  {proHighlights.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-white/90">
                      <CheckIcon className="mt-0.5 text-emerald-200" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://v1.stagesystem.com.br/criar-conta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-[#4f46e5] shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  Começar com desconto anual
                </a>
                <p className="mt-3 text-center text-xs font-medium text-white/70">
                  7 dias de teste grátis — sem cartão
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recursos */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}>
            <Card className="h-fit border-slate-200/80 bg-white shadow-sm">
              <CardHeader className="rounded-2xl rounded-b-none border-b border-slate-200/70 bg-slate-50/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Tudo incluso
                </span>
                <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
                  Recursos que fazem o Stage valer a pena
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  Agenda, CRM, contratos e financeiro integrados.
                </p>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="mt-5 space-y-3">
                  {[
                    "Gestão completa de eventos",
                    "CRM com funil de vendas",
                    "Contratos com assinatura",
                    "Controle financeiro e dashboards",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <CheckIcon className="mt-0.5 text-indigo-600" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contato"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
                >
                  Falar com o time
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

