/**
 * Fuente única de datos del sitio Parcelas El Descanso, Panguipulli.
 * Todo el contenido editable (contacto, textos, links) vive aquí.
 */

export const contacto = {
  whatsapp: '+56998852996',
  whatsappLink: 'https://wa.me/56998852996',
  telDisplay: '+56 9 9885 2996',
  telLink: 'tel:+56998852996',
  email: 'hola@raddo.cl',
  emailLink: 'mailto:hola@raddo.cl',
} as const;

export const nav = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyecto', href: '#proyecto' },
  { label: 'Panguipulli', href: '#panguipulli' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Atractivos', href: '#atractivos' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const hero = {
  eyebrow: 'Panguipulli · Región de Los Ríos',
  title: 'Parcelas de 5.000 m²',
  titleAccent: 'a 7 minutos de Panguipulli',
  subtitle:
    'Cuatro parcelas individuales con rol propio, electricidad, acceso asfaltado y portón automático. Bosque nativo y pradera, a pasos de los lagos del sur de Chile.',
  precio: 'Desde 1.190 UF',
  disponibilidad: '3 de 4 parcelas disponibles',
  ubicacionMapsLink: 'https://maps.app.goo.gl/hH7wdYzd7cZ6HStu6',
} as const;

// Características destacadas (con foto real), tal como en el sitio original.
export const caracteristicasDestacadas = [
  {
    titulo: 'Portón de acceso automatizado',
    descripcion:
      'Acceso directo a la ruta principal asfaltada Panguipulli–Los Lagos, con portón automático en la entrada del proyecto.',
    imagen: '/images/porton.jpg',
  },
  {
    titulo: 'Punto de electricidad en cada lote',
    descripcion:
      'Nada de factibilidad ni ponerse de acuerdo con los vecinos para postear. Te entregamos la parcela con la luz lista.',
    imagen: '/images/proyecto-2.jpg',
  },
  {
    titulo: 'A 7 minutos de Panguipulli',
    descripcion:
      'A solo 7 km del centro: bancos, servicios, restaurantes y aeródromo a pocos minutos. Privacidad sin aislarte.',
    imagen: '/images/proyecto-3.jpg',
  },
  {
    titulo: 'Bosque nativo y pradera',
    descripcion:
      'Una combinación de bosque nativo y pradera abierta. Naturaleza viva en tu propio terreno de 5.000 m².',
    imagen: '/images/bosque.jpg',
  },
] as const;

// Atributos rápidos (con icono), complementan a las destacadas.
export const caracteristicasExtra = [
  {
    titulo: '5.000 m² con rol propio',
    descripcion: 'Cada parcela es individual, con su rol independiente.',
    icon: 'land',
  },
  {
    titulo: 'Privacidad garantizada',
    descripcion: 'Las parcelas no son visibles desde el camino. Solo cuatro lotes en total.',
    icon: 'shield',
  },
  {
    titulo: 'Agua de pozo incluida',
    descripcion: 'Cada parcela cuenta con su propio pozo y arranque de agua individual.',
    icon: 'drop',
  },
] as const;

// Videos self-hosted servidos desde el VPS (nginx) detrás de Cloudflare (cacheados).
// Subdominio de 2do nivel para que lo cubra el Universal SSL de Cloudflare (*.raddo.cl).
export const VIDEOS_BASE = 'https://videos-parcelas.raddo.cl';

export const panguipulli = {
  titulo: 'Panguipulli, corazón de Los Ríos',
  parrafos: [
    'Tercera comuna más poblada de la Región de Los Ríos, con cerca de 40.000 habitantes. Un destino turístico con historia maderera, bellezas naturales y termas a la vuelta de la esquina.',
    'A 1 hora 30 de Temuco (125 km) y a 105 km de Valdivia. Cuenta con bancos, oficinas estatales, restaurantes y aeródromo: todos los servicios que necesitas, en plena naturaleza.',
  ],
  imagenCiudad: '/images/calle-panguipulli.jpg',
  videoTour: `${VIDEOS_BASE}/panguipulli.mp4`,
  videoTourPoster: '/images/poster-tour.jpg',
  videoEntrada: `${VIDEOS_BASE}/entrada-camino.mp4`,
  videoEntradaPoster: '/images/poster-entrada.jpg',
  videoYoutube: 'https://www.youtube.com/watch?v=KOOb6IP5s5Q',
} as const;

// Galería de fotos de Panguipulli y su entorno (sección 7 del original).
export const galeria = [
  { src: '/images/panguipulli.jpg', alt: 'Vista de Panguipulli' },
  { src: '/images/volcan.jpg', alt: 'Volcán visible desde Panguipulli' },
  { src: '/images/calle-panguipulli.jpg', alt: 'Calle Martínez de Rozas, Panguipulli' },
  { src: '/images/rinihue.jpg', alt: 'Lago Riñihue' },
] as const;

export const atractivos = [
  {
    nombre: 'Río San Pedro',
    distancia: '14 km',
    descripcion: 'Pozones naturales de aguas cristalinas, ideales para un día de río.',
    imagen: '/images/rio-san-pedro.jpg',
    mapsLink: 'https://maps.app.goo.gl/AkAqq1Kv8UqZx7E38',
  },
  {
    nombre: 'Playa Riñihue',
    distancia: '12 km',
    descripcion: 'Playa de lago con muelle, a orillas del imponente Lago Riñihue.',
    imagen: '/images/playa-rinihue.jpg',
    mapsLink: 'https://maps.app.goo.gl/M8y7xWVZQoKNcLoh9',
  },
  {
    nombre: 'Playa El Monje',
    distancia: '5 km',
    descripcion: 'La playa más cercana al proyecto, a solo minutos de las parcelas.',
    imagen: '/images/playa-monje.jpg',
    mapsLink: 'https://maps.app.goo.gl/toixa6GwUSQ8iia66',
  },
  {
    nombre: 'Reserva Huilo Huilo',
    distancia: '68 km',
    descripcion: 'Portal Ciervos, saltos de agua y teleférico en una reserva biológica única.',
    imagen: '/images/huilo-huilo.jpg',
    mapsLink: 'https://huilohuilo.com/',
  },
] as const;

export const site = {
  nombre: 'Parcelas El Descanso',
  ubicacion: 'Panguipulli, Chile',
  dominio: 'parcelas2.raddo.cl',
  desarrollador: 'Spoiler Labs',
  desarrolladorLink: 'https://spoiler.cl',
  anio: 2026,
} as const;
