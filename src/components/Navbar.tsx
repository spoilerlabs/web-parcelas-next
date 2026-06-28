'use client';

import { useEffect, useState } from 'react';
import { nav, contacto } from '@/lib/site';
import { WhatsappIcon } from './icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-crema/90 backdrop-blur-md shadow-[0_1px_0_rgba(26,52,41,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className={`font-display text-lg font-semibold tracking-tightest transition-colors ${
            scrolled ? 'text-bosque-900' : 'text-crema'
          }`}
        >
          Parcelas El Descanso
          <span className={`ml-1 align-middle text-xs font-sans font-normal ${scrolled ? 'text-bosque-500' : 'text-crema/70'}`}>
            · Panguipulli
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  scrolled ? 'text-bosque-800' : 'text-crema'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contacto.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-bosque-600 px-5 py-2.5 text-sm font-semibold text-crema shadow-sm transition-all hover:bg-bosque-700 hover:shadow-md md:inline-flex"
        >
          <WhatsappIcon className="h-4 w-4" />
          Escríbenos
        </a>

        {/* Botón móvil */}
        <button
          aria-label="Menú"
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? 'text-bosque-900' : 'text-crema'}`}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth={1.6} strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="mx-4 mt-3 rounded-2xl bg-crema p-5 shadow-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-bosque-800 hover:bg-bosque-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contacto.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-bosque-600 px-5 py-3 text-sm font-semibold text-crema"
          >
            <WhatsappIcon className="h-4 w-4" />
            Escríbenos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
