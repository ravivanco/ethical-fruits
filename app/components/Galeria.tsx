'use client';

import { useState } from 'react';

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const galleryItems = [
    // Frutas principales
    { id: 1, src: '/img/aguacate.png', category: 'productos', title: 'Aguacate Hass' },
    { id: 2, src: '/img/arandano.png', category: 'productos', title: 'Arándanos Premium' },
    { id: 3, src: '/img/banana.png', category: 'productos', title: 'Banano Cavendish' },
    { id: 4, src: '/img/granada.png', category: 'productos', title: 'Granada Fresca' },
    { id: 5, src: '/img/mango.png', category: 'productos', title: 'Mango Tropical' },
    { id: 6, src: '/img/pina.png', category: 'productos', title: 'Piña Dulce' },
    { id: 7, src: '/img/pitahaya.png', category: 'productos', title: 'Pitahaya Exótica' },
    { id: 8, src: '/img/platano.png', category: 'productos', title: 'Plátano Verde' },
    
    // Versiones alternativas
    { id: 9, src: '/img/arandano-02.png', category: 'proceso', title: 'Arándanos Empacados' },
    { id: 10, src: '/img/platano-02.png', category: 'proceso', title: 'Plátano Procesado' },
    { id: 11, src: '/img/pitahaya-02.png', category: 'proceso', title: 'Pitahaya Seleccionada' },
    
    // Imágenes de calidad
    { id: 12, src: '/img/arandano-01.jpeg', category: 'calidad', title: 'Control de Calidad Arándanos' },
    { id: 13, src: '/img/banano-01.jpeg', category: 'calidad', title: 'Banano de Exportación' },
    { id: 14, src: '/img/pitahaya-01.jpeg', category: 'calidad', title: 'Pitahaya Seleccionada' },
    
    // Fondo tropical
    { id: 15, src: '/img/fondoTropical.png', category: 'origen', title: 'Origen Tropical' },
  ];

  const categories = [
    { value: 'all', label: 'Todo' },
    { value: 'productos', label: 'Productos' },
    { value: 'proceso', label: 'Proceso' },
    { value: 'calidad', label: 'Calidad' },
    { value: 'origen', label: 'Origen' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="galeria" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-20">
      {/* Contenedor principal */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            GALERÍA
          </h2>
          
          <p className="mx-auto mb-4 max-w-3xl text-lg font-semibold text-gray-800 md:text-xl">
            La calidad se refleja en cada etapa de la producción.
          </p>

          <div className="mx-auto max-w-4xl space-y-2">
            <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
              Nuestra galería muestra imágenes del proceso productivo, las frutas frescas que forman parte de nuestra oferta comercial y diferentes etapas de la cadena agrícola.
            </p>
            
            <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
              Estas imágenes reflejan el origen de nuestros productos y el trabajo que respalda cada operación comercial.
            </p>
          </div>
        </div>

        {/* Filtros con diseño más limpio */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`rounded-lg px-5 py-2 text-xs font-bold uppercase tracking-wide transition-all md:px-6 md:py-2.5 md:text-sm ${
                filter === cat.value
                  ? 'bg-gradient-to-r from-[#fd7502] to-[#68a317] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:scale-105'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid uniforme y limpio */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animation: `slideUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              {/* Imagen */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay suave en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Badge flotante */}
                <div className="absolute right-2 top-2 md:right-3 md:top-3">
                  <span className="rounded-md bg-white/95 px-2 py-1 text-[10px] font-bold uppercase text-gray-800 shadow-md backdrop-blur-sm md:px-3 md:text-xs">
                    {categories.find(c => c.value === item.category)?.label}
                  </span>
                </div>

                {/* Botón de expandir */}
                <button
                  onClick={() => setSelectedImage(item.src)}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-gray-900 shadow-lg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:px-6 md:py-2.5 md:text-sm"
                >
                  Ver imagen
                </button>
              </div>

              {/* Título debajo */}
              <div className="p-3 md:p-4">
                <h3 className="text-center text-xs font-bold text-gray-800 md:text-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-500 md:text-xl">No se encontraron imágenes en esta categoría</p>
          </div>
        )}

        {/* Contador de imágenes */}
        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-gray-600">
            Mostrando {filteredItems.length} {filteredItems.length === 1 ? 'imagen' : 'imágenes'}
          </p>
        </div>
      </div>

      {/* Modal Lightbox mejorado */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botón cerrar */}
          <button
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110 md:right-8 md:top-8"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Imagen ampliada */}
          <div 
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="h-auto max-h-[85vh] w-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Animación CSS */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
