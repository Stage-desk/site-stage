'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { href: '#funcionalidades', label: 'Funcionalidades' },
    { href: '#planos', label: 'Planos' },
    { href: '#cases', label: 'Cases' },
    { href: '#faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      <header className="fixed flex justify-center inset-x-0 top-0 z-50 h-20 border-b border-[#e8eaf0] bg-white/90 backdrop-blur-xl">
        <div className="grid h-full w-full max-w-[1280px] grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center px-6" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
          {/* Logo (Esquerda) */}
          <div className="flex justify-start">
            <a href="/" className="flex items-center outline-none" onClick={() => setIsSidebarOpen(false)}>
              <img
                src="/logo.png"
                alt="Stage"
                className="w-[110px] sm:w-[140px] h-auto object-contain"
              />
            </a>
          </div>

          {/* Menu (Centro - Apenas no Desktop a partir de LG) */}
          <nav className="hidden justify-center items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-[#5a6278] transition-colors hover:text-[#0f1117]">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botões (Direita) */}
          <div className="flex items-center justify-end gap-3 lg:gap-5">
            <a
              href="https://app.stagesystem.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-medium text-[#5a6278] transition-colors hover:text-[#0f1117] sm:block"
            >
              Entrar
            </a>
            <a
              href="https://v1.stagesystem.com.br/criar-conta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}
            >
              Começar grátis
            </a>

            {/* Mobile Menu Button */}
            <button
              className="flex items-center justify-center p-2 text-[#5a6278] hover:text-[#0f1117] lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar - Fora do header para evitar herança de blur/transparência */}
      <div
        className={`fixed inset-0 z-[100] bg-white transition-transform duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden overflow-y-auto`}
        style={{ backgroundColor: '#ffffff', padding: '36px' }}
      >
        <div className="flex flex-col h-full bg-white relative gap-10">
          {/* Top Bar with Logo and Close Button - Ambos respeitando o padding de 36px */}
          <div className="flex items-center justify-between w-full">
             <img
                src="/logo.png"
                alt="Stage"
                className="w-[110px] h-auto object-contain"
              />
              
              <button
                className="p-2 -mr-2 text-[#5a6278] hover:text-[#0f1117] transition-colors"
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={26} />
              </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[16px] font-medium text-[#0f1117] hover:text-blue-600 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <hr className="border-[#e8eaf0]" />
          
          <div className="flex flex-col gap-6">
            <a
              href="https://app.stagesystem.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] font-medium text-[#0f1117]"
            >
              Entrar
            </a>
            <a
              href="https://v1.stagesystem.com.br/criar-conta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center text-[16px] font-medium"
              style={{ padding: '1.2rem', height: 'auto' }}
            >
              Começar grátis
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
