import Image from 'next/image';
import { caracteristicasDestacadas, caracteristicasExtra, hero } from '@/lib/site';
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

        {/* Masterplan destacado */}
        <Reveal className="mt-14">
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

        {/* Características destacadas — con foto real, como el sitio original */}
        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tightest text-bosque-950 sm:text-3xl">
              Características
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {caracteristicasDestacadas.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 90}>
                <article className="group">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-bosque-100 shadow-md shadow-bosque-950/5">
                    <Image
                      src={c.imagen}
                      alt={c.titulo}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="mt-5 font-display text-xl font-semibold text-bosque-950">
                    {c.titulo}
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-bosque-800/75">
                    {c.descripcion}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Atributos rápidos extra — con icono */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {caracteristicasExtra.map((c, i) => {
              const Icon = iconMap[c.icon as keyof typeof iconMap];
              return (
                <Reveal key={c.titulo} delay={i * 90}>
                  <article className="flex items-start gap-4 rounded-2xl border border-bosque-100 bg-white p-6">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bosque-50 text-bosque-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-bosque-950">
                        {c.titulo}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-bosque-800/75">
                        {c.descripcion}
                      </p>
                    </div>
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
