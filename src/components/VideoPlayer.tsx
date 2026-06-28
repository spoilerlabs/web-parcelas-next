'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

/**
 * Reproductor de video a demanda, igual que el sitio original (Elementor "open inline"):
 * muestra una imagen de portada con un botón de play; al hacer clic, carga el video
 * con sus controles y lo reproduce. No autoplay, no fondo.
 */
export default function VideoPlayer({
  src,
  poster,
  className = '',
  aspect = 'aspect-[9/16]',
}: {
  src: string;
  poster: string;
  className?: string;
  aspect?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    // Esperar al render del <video> y reproducir
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  return (
    <div
      className={`relative ${aspect} overflow-hidden rounded-3xl border border-crema/15 bg-bosque-950 shadow-2xl shadow-black/40 ${className}`}
    >
      {playing ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          controls
          preload="metadata"
          playsInline
          controlsList="nodownload"
        />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Reproducir video"
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={poster}
            alt="Reproducir video"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-bosque-950/25 transition-colors group-hover:bg-bosque-950/10" />
          {/* Botón play centrado */}
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-crema/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-bosque-700">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
