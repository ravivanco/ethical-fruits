'use client';

export default function Certificaciones() {
  const certificaciones = [
    { id: 1, src: '/img/2.png', alt: 'GLOBALGAP' },
    { id: 2, src: '/img/3.png', alt: 'BASC' },
    { id: 3, src: '/img/4.png', alt: 'GLOBALGAP GRASP' },
    { id: 4, src: '/img/5.png', alt: 'Rainforest Alliance' },
  ];

  return (
    <section id="certificaciones" className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      {/* Contenedor principal */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        {/* Header - Título y descripción */}
        <div className="mb-20 text-center">
          <h2 className="mb-8 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            NUESTRAS CERTIFICACIONES
          </h2>
          
          <div className="mx-auto max-w-4xl space-y-5">
            <p className="text-lg font-semibold text-gray-800 md:text-xl">
              Calidad respaldada por procesos responsables y estándares internacionales.
            </p>
            
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Nuestros procesos comerciales y productivos se alinean con prácticas reconocidas en la industria agrícola y el comercio internacional.
            </p>
            
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Trabajamos con productores y socios logísticos que cumplen con estándares de calidad y protocolos que garantizan seguridad, trazabilidad y confiabilidad en cada operación.
            </p>
          </div>
        </div>

        {/* Logos estáticos de certificaciones */}
        <div className="relative w-full py-12">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {certificaciones.map((cert) => (
              <div
                key={`first-${cert.id}`}
                className="flex h-40 w-56 items-center justify-center rounded-xl bg-white p-8 shadow-xl transition-transform hover:scale-105 md:h-44 md:w-64"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/*
          Carrusel original comentado para conservar la lógica que ya tenías:

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent md:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent md:w-32" />

          <div
            className="flex will-change-transform"
            style={{
              animation: 'scroll-infinite 40s linear infinite',
              animationPlayState: 'running'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {certificaciones.map((cert) => (...))}
            {certificaciones.map((cert) => (...))}
            {certificaciones.map((cert) => (...))}
          </div>
          */}
        </div>

        {/* Texto adicional de confianza */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500 md:text-base">
            Comprometidos con la excelencia y la responsabilidad
          </p>
        </div>
      </div>
    </section>
  );
}
