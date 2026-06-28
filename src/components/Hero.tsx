import Image from 'next/image';
import { hero, contacto } from '@/lib/site';
import { WhatsappIcon, ArrowIcon, PinIcon } from './icons';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Fondo: pradera con zoom lento */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/pradera.jpg"
          alt="Pradera y bosque nativo en Panguipulli"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bosque-950/80 via-bosque-900/55 to-bosque-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bosque-950/70 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-content px-5 pt-28 pb-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-crema/25 bg-crema/10 px-4 py-1.5 text-sm font-medium text-crema backdrop-blur-sm animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-lago-300" />
            {hero.eyebrow}
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tightest text-crema sm:text-6xl lg:text-7xl">
            <span className="block animate-fade-up [animation-delay:120ms] opacity-0">
              {hero.title}
            </span>
            <span className="mt-1 block animate-fade-up [animation-delay:260ms] opacity-0 text-lago-200">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-crema/85 animate-fade-up [animation-delay:400ms] opacity-0">
            {hero.subtitle}
          </p>

          {/* Píldoras de precio y disponibilidad */}
          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:520ms] opacity-0">
            <div className="rounded-2xl border border-crema/20 bg-bosque-950/30 px-5 py-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-crema/60">Valor</p>
              <p className="font-display text-2xl font-semibold text-crema">{hero.precio}</p>
            </div>
            <div className="rounded-2xl border border-crema/20 bg-bosque-950/30 px-5 py-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-crema/60">Disponibilidad</p>
              <p className="font-display text-2xl font-semibold text-crema">{hero.disponibilidad}</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:640ms] opacity-0">
            <a
              href={contacto.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-bosque-500 px-7 py-3.5 text-base font-semibold text-crema shadow-lg shadow-bosque-950/30 transition-all hover:bg-bosque-400 hover:shadow-xl"
            >
              <WhatsappIcon className="h-5 w-5" />
              Háblanos por WhatsApp
            </a>
            <a
              href={hero.ubicacionMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-base font-semibold text-crema transition-colors hover:text-lago-200"
            >
              <PinIcon className="h-5 w-5" />
              Ver ubicación
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-crema/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-crema/70" />
        </div>
      </div>
    </section>
  );
}
