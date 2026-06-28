import Image from 'next/image';
import { contacto, hero } from '@/lib/site';
import { WhatsappIcon, PhoneIcon, MailIcon } from './icons';
import Reveal from './Reveal';

export default function Contacto() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 text-crema sm:py-32">
      {/* Imagen de fondo (estática, sin autoplay) */}
      <div className="absolute inset-0 -z-10">
        <Image src="/images/monje-4.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-bosque-950/90 via-bosque-950/80 to-bosque-900/75" />
      </div>

      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-lago-300">
              Contáctanos
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl">
              Quedan 3 parcelas.{' '}
              <span className="text-lago-200">Conversemos.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-crema/80">
              Te respondemos por WhatsApp con disponibilidad, planos y todos los detalles del
              proyecto. Sin compromiso.
            </p>
            <a
              href={hero.ubicacionMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-crema/70 underline-offset-4 hover:text-crema hover:underline"
            >
              Ver ubicación exacta en Google Maps
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              <a
                href={contacto.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-bosque-500 px-6 py-5 transition-all hover:bg-bosque-400 hover:shadow-xl hover:shadow-black/20"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-crema/15">
                  <WhatsappIcon className="h-6 w-6 text-crema" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-crema/70">
                    Lo más rápido
                  </span>
                  <span className="font-display text-xl font-semibold text-crema">
                    Háblanos por WhatsApp
                  </span>
                </span>
              </a>

              <a
                href={contacto.telLink}
                className="group flex items-center gap-4 rounded-2xl border border-crema/20 bg-crema/5 px-6 py-5 backdrop-blur-sm transition-all hover:bg-crema/10"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-crema/10">
                  <PhoneIcon className="h-6 w-6 text-crema" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-crema/60">
                    Llámanos
                  </span>
                  <span className="font-display text-xl font-semibold text-crema">
                    {contacto.telDisplay}
                  </span>
                </span>
              </a>

              <a
                href={contacto.emailLink}
                className="group flex items-center gap-4 rounded-2xl border border-crema/20 bg-crema/5 px-6 py-5 backdrop-blur-sm transition-all hover:bg-crema/10"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-crema/10">
                  <MailIcon className="h-6 w-6 text-crema" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-crema/60">
                    Escríbenos
                  </span>
                  <span className="font-display text-xl font-semibold text-crema">
                    {contacto.email}
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
