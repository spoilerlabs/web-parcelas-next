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

export const caracteristicas = [
  {
    titulo: '5.000 m² con rol propio',
    descripcion:
      'Cada parcela es individual, con su rol independiente. Terreno amplio para construir con total privacidad.',
    icon: 'land',
  },
  {
    titulo: 'Electricidad incluida',
    descripcion:
      'Punto de electricidad en cada lote, sin necesidad de tramitar factibilidad. Listo para conectar.',
    icon: 'bolt',
  },
  {
    titulo: 'Acceso asfaltado',
    descripcion:
      'Conexión directa a la ruta Panguipulli–Los Lagos por camino asfaltado, con portón de acceso automatizado.',
    icon: 'road',
  },
  {
    titulo: 'A 7 minutos del centro',
    descripcion:
      'A solo 7 km del centro de Panguipulli: bancos, servicios, restaurantes y aeródromo a pocos minutos.',
    icon: 'pin',
  },
  {
    titulo: 'Bosque nativo y pradera',
    descripcion:
      'Una combinación de bosque nativo y pradera abierta. Naturaleza viva en tu propio terreno.',
    icon: 'tree',
  },
  {
    titulo: 'Privacidad garantizada',
    descripcion:
      'Las parcelas no son visibles desde el camino. Un proyecto cerrado de solo cuatro lotes.',
    icon: 'shield',
  },
] as const;

export const panguipulli = {
  titulo: 'Panguipulli, corazón de Los Ríos',
  parrafos: [
    'Tercera comuna más poblada de la Región de Los Ríos, con cerca de 40.000 habitantes. Un destino turístico con historia maderera, bellezas naturales y termas a la vuelta de la esquina.',
    'A 1 hora 30 de Temuco (125 km) y a 105 km de Valdivia. Cuenta con bancos, oficinas estatales, restaurantes y aeródromo: todos los servicios que necesitas, en plena naturaleza.',
  ],
  imagenCiudad: '/images/calle-panguipulli.jpg',
  videoYoutube: 'https://www.youtube.com/watch?v=KOOb6IP5s5Q',
} as const;

export const atractivos = [
  {
    nombre: 'Río San Pedro',
    distancia: '14 km',
    descripcion: 'Pozones naturales de aguas cristalinas, ideales para un día de río.',
    imagen: '/images/rinihue.jpg',
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
    imagen: '/images/monje-4.jpg',
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
