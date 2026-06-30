import Image from 'next/image';
import { panguipulli } from '@/lib/site';
import { ArrowIcon } from './icons';
import Reveal from './Reveal';
import VideoPlayer from './VideoPlayer';

const datos = [
  { valor: '~40.000', label: 'habitantes' },
  { valor: '125 km', label: 'de Temuco' },
  { valor: '105 km', label: 'de Valdivia' },
  { valor: '7 min', label: 'al proyecto' },
];

export default function Panguipulli() {
  return (
    <section id="panguipulli" className="relative overflow-hidden bg-bosque-950 py-24 text-crema sm:py-32">
      {/* Imagen de fondo tenue */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image src="/images/panguipulli.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-bosque-950/60" />
      </div>

      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-lago-300">
              La ciudad
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl">
              {panguipulli.titulo}
            </h2>
            {panguipulli.parrafos.map((p) => (
              <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-crema/80">
                {p}
              </p>
            ))}

            {/* Datos rápidos */}
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {datos.map((d) => (
                <div key={d.label} className="rounded-2xl border border-crema/15 bg-crema/5 px-4 py-4 text-center backdrop-blur-sm">
                  <p className="font-display text-2xl font-semibold text-crema">{d.valor}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-crema/55">{d.label}</p>
                </div>
              ))}
            </div>

            <a
              href={panguipulli.videoYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-lago-200 hover:text-lago-100"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-lago-300/40">
                <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-0.5 fill-current">
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
              </span>
              Ver video sobre Panguipulli
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          {/* Video tour del proyecto: poster + botón play (igual que el original) */}
          <Reveal delay={120}>
            <VideoPlayer
              src={panguipulli.videoTour}
              poster={panguipulli.videoTourPoster}
              aspect="aspect-[4/5] sm:aspect-[3/4]"
            />
          </Reveal>
        </div>

        {/* Segundo video: la entrada del camino (a demanda, como en el original) */}
        <Reveal className="mt-12">
          <VideoPlayer
            src={panguipulli.videoEntrada}
            poster={panguipulli.videoEntradaPoster}
            aspect="aspect-video"
          />
        </Reveal>
      </div>
    </section>
  );
}
