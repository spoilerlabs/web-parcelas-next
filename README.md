# Parcelas El Descanso — Landing Next.js

Landing del proyecto **Parcelas El Descanso, Panguipulli** (4 parcelas de 5.000 m²).
Copia en **Next.js** del sitio WordPress `parcelas.raddo.cl`, servida en `parcelas2.raddo.cl`.

## Stack

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS**
- `output: 'export'` → sitio 100% estático (HTML/CSS/JS), sin servidor Node en producción
- Imágenes empaquetadas en `/public` (sin dependencia del WordPress original)
- Servido con **nginx** en Coolify (VPS IONOS), detrás de Traefik + Cloudflare

## Contenido

Toda la data editable (contacto, textos, links, atractivos) está centralizada en
[`src/lib/site.ts`](src/lib/site.ts). Para cambiar un texto, precio o teléfono, editar ahí.

- **WhatsApp / teléfono:** +56 9 9885 2996
- **Email:** hola@raddo.cl

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera /out (export estático)
npx serve out      # previsualizar el build estático
```

## Despliegue

Push a `main` → auto-deploy en Coolify (build con el `Dockerfile`: Next build + nginx).
DNS: registro `parcelas2` → `74.208.50.142` en Cloudflare.

Desarrollado por [Spoiler Labs](https://spoiler.cl).
