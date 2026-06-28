import Image from 'next/image';
import { caracteristicas, hero } from '@/lib/site';
import { iconMap, ArrowIcon } from './icons';
import Reveal from './Reveal';

export default function Proyecto() {
  return (
    <section id="proyecto" className="relative bg-crema py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        {/* Encabezado */}
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-bosque-500">
            El proyecto
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tightest text-bosque-950 sm:text-5xl">
            Cuatro parcelas, todo lo esencial{' '}
            <span className="accent-rule text-bosque-600">resuelto</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bosque-800/80">
            Un proyecto cerrado de solo cuatro lotes de 5.000 m², pensado para que llegues a
            construir sin trámites pendientes. Electricidad, acceso asfaltado y portón automático
            ya están listos.
          </p>
        </Reveal>

        {/* Masterplan + características */}
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="lg:sticky lg:top-28">
            <figure className="overflow-hidden rounded-3xl border border-bosque-100 bg-white shadow-xl shadow-bosque-950/5">
              <Image
                src="/images/masterplan.jpg"
                alt="Masterplan del proyecto de 4 parcelas en Panguipulli"
                width={900}
                height={600}
                className="h-auto w-full object-cover"
              />
              <figcaption className="flex items-center justify-between gap-3 px-6 py-4 text-sm text-bosque-700">
                <span className="font-medium">Masterplan · 4 lotes de 5.000 m²</span>
                <a
                  href={hero.ubicacionMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-bosque-600 hover:text-bosque-800"
                >
                  Ver en mapa
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {caracteristicas.map((c, i) => {
              const Icon = iconMap[c.icon as keyof typeof iconMap];
              return (
                <Reveal key={c.titulo} delay={i * 80}>
                  <article className="group h-full rounded-2xl border border-bosque-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-bosque-200 hover:shadow-lg hover:shadow-bosque-950/5">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bosque-50 text-bosque-600 transition-colors group-hover:bg-bosque-600 group-hover:text-crema">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-bosque-950">
                      {c.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bosque-800/75">
                      {c.descripcion}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
