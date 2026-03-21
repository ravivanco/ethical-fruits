'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  poster?: string;
};

const GALLERY_ITEMS: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/img/agucates-fabrica.jpg',
    title: 'Aguacates seleccionados para exportacion',
    description: 'Lotes en planta con control de calidad y trazabilidad.',
  },
  {
    id: 2,
    type: 'image',
    src: '/img/arandanos-cultivos.jpg',
    title: 'Cultivo de arandanos',
    description: 'Supervision tecnica en campo durante etapa productiva.',
  },
  {
    id: 3,
    type: 'image',
    src: '/img/platanos-proceso.jpg',
    title: 'Proceso de platano',
    description: 'Manejo postcosecha para mantener calidad comercial.',
  },
  {
    id: 4,
    type: 'image',
    src: '/img/platanos-proceso-02.jpg',
    title: 'Proceso de platano en linea',
    description: 'Preparacion de fruta para empaque y despacho.',
  },
  {
    id: 5,
    type: 'image',
    src: '/img/pitahaya-empaquetado.jpg',
    title: 'Empaquetado de pitahaya',
    description: 'Empaque con criterios de sanidad para exportacion.',
  },
  {
    id: 6,
    type: 'image',
    src: '/img/arandanos-produccion.jpg',
    title: 'Produccion de arandanos',
    description: 'Clasificacion y acondicionamiento en centro de proceso.',
  },
  {
    id: 7,
    type: 'image',
    src: '/img/pitahaya-planta.jpg',
    title: 'Pitahaya en plantacion',
    description: 'Seguimiento agronomico en origen.',
  },
  // Ejemplo para videos:
  // {
  //   id: 8,
  //   type: 'video',
  //   src: '/videos/proceso-cosecha.mp4',
  //   poster: '/img/platanos-proceso.jpg',
  //   title: 'Cosecha en campo',
  //   description: 'Video real del proceso de cosecha.',
  // },
];

const CARD_HEIGHTS = [
  'h-[240px] md:h-[280px]',
  'h-[320px] md:h-[380px]',
  'h-[260px] md:h-[310px]',
  'h-[300px] md:h-[360px]',
  'h-[230px] md:h-[280px]',
  'h-[340px] md:h-[400px]',
  'h-[260px] md:h-[310px]',
] as const;

export default function Galeria() {
  const [activeView, setActiveView] = useState<'all' | 'photos' | 'videos'>('all');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeView === 'photos') {
      return GALLERY_ITEMS.filter((item) => item.type === 'image');
    }

    if (activeView === 'videos') {
      return GALLERY_ITEMS.filter((item) => item.type === 'video');
    }

    return GALLERY_ITEMS;
  }, [activeView]);

  const selectedIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const canNavigate = selectedIndex >= 0 && filteredItems.length > 1;

  const goToPrevious = () => {
    if (!canNavigate) return;

    const previousIndex = selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1;
    setSelectedItem(filteredItems[previousIndex]);
  };

  const goToNext = () => {
    if (!canNavigate) return;

    const nextIndex = selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1;
    setSelectedItem(filteredItems[nextIndex]);
  };

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_10%_20%,#f8f4ea_0%,transparent_35%),radial-gradient(circle_at_90%_15%,#eef7e9_0%,transparent_38%),linear-gradient(180deg,#f9faf9_0%,#edf2ef_100%)] py-20 md:py-24"
    >
      <div className="pointer-events-none absolute -left-20 top-28 h-72 w-72 rounded-full bg-[#fd7502]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#68a317]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#fd7502]/20 bg-white/80 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#bd5c00] backdrop-blur-sm">
              Visita Visual De Origen
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1d2939] md:text-5xl lg:text-6xl">
              Galeria De Campo
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#475467] md:text-lg">
              Una vista real de nuestras plantaciones, procesos y manejo sanitario para que tus compradores
              conozcan el nivel de control y calidad detras de cada fruta que exportamos.
            </p>
          </div>

          <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-[0_14px_40px_rgba(20,30,50,0.12)] backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#475467]">Vista Rapida</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#68a317]/12 px-3 py-1 text-xs font-semibold text-[#4a7a14]">Plantaciones</span>
              <span className="rounded-full bg-[#fd7502]/12 px-3 py-1 text-xs font-semibold text-[#b95a00]">Proceso</span>
              <span className="rounded-full bg-[#344054]/10 px-3 py-1 text-xs font-semibold text-[#344054]">Sanidad</span>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveView('all')}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition-all md:px-6 md:text-sm ${
              activeView === 'all'
                ? 'bg-gradient-to-r from-[#fd7502] to-[#68a317] text-white shadow-lg'
                : 'bg-white/80 text-gray-700 shadow hover:-translate-y-0.5 hover:shadow-md'
            }`}
          >
            Todo
          </button>
          <button
            onClick={() => setActiveView('photos')}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition-all md:px-6 md:text-sm ${
              activeView === 'photos'
                ? 'bg-gradient-to-r from-[#fd7502] to-[#68a317] text-white shadow-lg'
                : 'bg-white/80 text-gray-700 shadow hover:-translate-y-0.5 hover:shadow-md'
            }`}
          >
            Fotos
          </button>
          <button
            onClick={() => setActiveView('videos')}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition-all md:px-6 md:text-sm ${
              activeView === 'videos'
                ? 'bg-gradient-to-r from-[#fd7502] to-[#68a317] text-white shadow-lg'
                : 'bg-white/80 text-gray-700 shadow hover:-translate-y-0.5 hover:shadow-md'
            }`}
          >
            Videos
          </button>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 md:gap-6 [column-fill:_balance]">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/70 shadow-[0_12px_30px_rgba(20,30,50,0.15)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(20,30,50,0.22)] md:mb-6 ${CARD_HEIGHTS[index % CARD_HEIGHTS.length]}`}
              style={{ animation: `galleryRise 0.55s ease-out ${index * 0.08}s both` }}
              aria-label={`Abrir ${item.title}`}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  playsInline
                  preload="metadata"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70" />

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/92 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#1d2939] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.type === 'video' ? 'Ver Video' : 'Ver Imagen'}
              </div>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-dashed border-gray-300 bg-white/80 p-8 text-center shadow-sm">
            <p className="text-base font-bold text-gray-700 md:text-lg">Aun no hay videos cargados.</p>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Sube videos a /public/videos y agregalos en el arreglo GALLERY_ITEMS.
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-gray-600">
            Mostrando {filteredItems.length} {filteredItems.length === 1 ? 'elemento' : 'elementos'}
          </p>
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110 md:right-8 md:top-8"
            onClick={() => setSelectedItem(null)}
            aria-label="Cerrar"
          >
            <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {canNavigate && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 md:left-6"
                aria-label="Anterior"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 md:right-6"
                aria-label="Siguiente"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="relative max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'image' ? (
              <div className="relative h-[78vh] w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <video
                src={selectedItem.src}
                poster={selectedItem.poster}
                className="max-h-[78vh] w-full rounded-xl shadow-2xl"
                controls
                autoPlay
              />
            )}

            <div className="mt-3 rounded-xl bg-white/10 px-4 py-3 text-white backdrop-blur-sm">
              <p className="text-sm font-bold md:text-base">{selectedItem.title}</p>
              <p className="text-xs text-white/80 md:text-sm">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes galleryRise {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
