'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si ha hecho scroll
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = ['inicio', 'sobre-nosotros', 'propuesta', 'nuestros-productos', 'certificaciones', 'galeria', 'contacto'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la sección está en viewport (considerando el nav)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'INICIO', id: 'inicio' },
    { href: '#sobre-nosotros', label: 'QUINES SOMOS', id: 'sobre-nosotros' },
    { href: '#propuesta', label: 'PROPUESTA', id: 'propuesta' },
    { href: '#nuestros-productos', label: 'NUESTROS PRODUCTOS', id: 'nuestros-productos' },
    { href: '#certificaciones', label: 'CERTIFICACIONES', id: 'certificaciones' },
    { href: '#galeria', label: 'GALERÍA', id: 'galeria' },
    { href: '#contacto', label: 'CONTACTO', id: 'contacto' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Mostrar nav normal solo en inicio
  const isInicio = activeSection === 'inicio';

  return (
    <>
      {/* Nav normal - solo visible en inicio */}
      {isInicio && (
        <header 
          className={`fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-300 md:px-10 md:py-5 ${
            isScrolled ? 'bg-[#68a317]/95 backdrop-blur-md shadow-lg' : ''
          }`}
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-center">
            <nav className="hidden items-center gap-6 rounded-full bg-white/10 px-6 py-4 backdrop-blur-md lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide transition ${
                    activeSection === link.id
                      ? 'bg-white text-[#68a317]'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#68a317] text-white shadow-lg transition-all hover:scale-110 md:right-6 md:top-6 lg:hidden"
              aria-label="Menú"
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </header>
      )}

      {/* Icono hamburguesa - visible cuando NO estás en inicio */}
      {!isInicio && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#68a317] text-white shadow-lg transition-all hover:scale-110 md:right-10"
          aria-label="Menú"
        >
          {menuOpen ? (
            // Icono X para cerrar
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icono hamburguesa
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      )}

      {/* Sidebar menú - se abre desde la derecha */}
      <div
        className={`fixed right-0 top-0 z-40 h-full w-80 bg-[#68a317] shadow-2xl transition-transform duration-300 ${
          menuOpen && !isInicio ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex h-full flex-col items-start justify-center gap-4 px-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleLinkClick}
              className={`w-full rounded-lg px-6 py-3 text-left text-sm font-bold uppercase tracking-wide transition ${
                activeSection === link.id
                  ? 'bg-white text-[#68a317]'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay para cerrar el menú */}
      {menuOpen && !isInicio && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
