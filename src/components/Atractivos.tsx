import Image from 'next/image';
import { atractivos } from '@/lib/site';
import { ArrowIcon, PinIcon } from './icons';
import Reveal from './Reveal';

export default function Atractivos() {
  return (
    <section id="atractivos" className="bg-crema py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-bosque-500">
            El entorno
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tightest text-bosque-950 sm:text-5xl">
            Lagos, ríos y reservas{' '}
            <span className="accent-rule text-bosque-600">a minutos</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bosque-800/80">
            El proyecto está rodeado de los grandes atractivos del sur: pozones de río, playas de
            lago y una de las reservas biológicas más reconocidas de Chile.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {atractivos.map((a, i) => (
            <Reveal key={a.nombre} delay={i * 90}>
              <a
                href={a.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full overflow-hidden rounded-3xl border border-bosque-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-bosque-950/10"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={a.imagen}
                    alt={a.nombre}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bosque-950/80 via-bosque-950/10 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-crema/95 px-3 py-1 text-xs font-semibold text-bosque-800">
                    <PinIcon className="h-3.5 w-3.5" />
                    {a.distancia}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-xl font-semibold text-crema">{a.nombre}</h3>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3 p-5">
                  <p className="text-sm leading-relaxed text-bosque-800/75">{a.descripcion}</p>
                  <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-bosque-400 transition-all group-hover:translate-x-1 group-hover:text-bosque-600" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
