import { site, nav, contacto } from '@/lib/site';
import { WhatsappIcon } from './icons';

export default function Footer() {
  return (
    <footer className="bg-bosque-950 py-12 text-crema/70">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-crema/10 pb-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl font-semibold text-crema">
              Parcelas El Descanso
            </p>
            <p className="mt-1 text-sm text-crema/55">{site.ubicacion}</p>
          </div>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm font-medium transition-colors hover:text-crema">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contacto.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-bosque-500 px-5 py-2.5 text-sm font-semibold text-crema transition-colors hover:bg-bosque-400"
          >
            <WhatsappIcon className="h-4 w-4" />
            {contacto.telDisplay}
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-sm text-crema/45 sm:flex-row">
          <p>
            © {site.anio} Parcelas Panguipulli. Todos los derechos reservados.
          </p>
          <p>
            Desarrollado por{' '}
            <a
              href={site.desarrolladorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-crema/70 transition-colors hover:text-crema"
            >
              {site.desarrollador}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
