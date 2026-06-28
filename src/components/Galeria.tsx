import Image from 'next/image';
import { galeria } from '@/lib/site';
import Reveal from './Reveal';

export default function Galeria() {
  return (
    <section id="galeria" className="bg-crema pb-24 sm:pb-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-bosque-500">
            Galería
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tightest text-bosque-950 sm:text-4xl">
            Postales de Panguipulli
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {galeria.map((g, i) => (
            <Reveal key={g.src} delay={i * 80}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-bosque-100 shadow-sm">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bosque-950/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
