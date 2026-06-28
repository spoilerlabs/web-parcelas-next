import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Parcelas El Descanso · 5.000 m² a 7 minutos de Panguipulli',
  description:
    'Cuatro parcelas individuales de 5.000 m² con rol propio, electricidad, acceso asfaltado y portón automático, a 7 minutos de Panguipulli. Desde 1.190 UF.',
  keywords: [
    'parcelas Panguipulli',
    'parcelas Los Ríos',
    'terrenos Panguipulli',
    'parcelas 5000 m2',
    'parcelas con rol',
  ],
  icons: {
    icon: '/favicon-512.png',
  },
  openGraph: {
    title: 'Parcelas El Descanso · Panguipulli',
    description:
      'Cuatro parcelas de 5.000 m² con rol propio, electricidad y acceso asfaltado, a 7 minutos de Panguipulli. Desde 1.190 UF.',
    type: 'website',
    locale: 'es_CL',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" className={`${fraunces.variable} ${jakarta.variable}`}>
      <head>
        {/* Añade has-js antes del paint para que el reveal no parpadee (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('has-js')`,
          }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
