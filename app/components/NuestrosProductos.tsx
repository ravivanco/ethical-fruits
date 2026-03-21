'use client';

import { useState } from 'react';

export default function NuestrosProductos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productos = [
    {
      nombre: 'Banano',
      descripcion: 'El banano ecuatoriano es reconocido mundialmente por su calidad, sabor y consistencia. Cultivado en regiones agrícolas altamente productivas, es uno de los productos más importantes en el comercio internacional de frutas tropicales.',
      detalles: 'Nuestra fruta es seleccionada cuidadosamente para garantizar frescura, uniformidad y excelente presentación para exportación.',
      variedad: ['Plátano Cavendish', 'Plátano Baby', 'Plátano Orgánico'],
      presentacion: ['Cajas de 20 Kg – 14 Kg (Cavendish y Orgánico)', 'Cajas de 5 Kg (Baby Banana)'],
      origen: 'Ecuador',
      imagenCaja: '/img/banana.png',
      imagenFruta: '/img/banano-02.png'
    },
    {
      nombre: 'Arándanos',
      descripcion: 'Los arándanos peruanos se han consolidado como uno de los productos más demandados en el comercio internacional de berries. Destacan por su firmeza, sabor y excelente vida post-cosecha, características que permiten su transporte a mercados internacionales manteniendo su calidad.',
      detalles: 'La fruta es cuidadosamente seleccionada y empacada para garantizar frescura, consistencia y excelente presentación para exportación.',
      variedad: ['Emerald', 'Sekoya Pop', 'Biloxi'],
      presentacion: ['Clamshell de 125 g', 'Clamshell de 170 g', 'Clamshell de 250 g', 'Clamshell de 340 g (12 oz)', 'Cajas master aproximadas de 1.5 Kg – 4 Kg'],
      origen: 'Perú',
      imagenCaja: '/img/arandano.png',
      imagenFruta: '/img/arandano-02.png'
    },
    {
      nombre: 'Granada',
      descripcion: 'La granada es una fruta apreciada en mercados internacionales por su sabor intenso y sus propiedades nutricionales. La fruta proveniente de Perú destaca por su excelente color, tamaño uniforme y calidad para exportación.',
      detalles: 'Cada lote es seleccionado cuidadosamente para garantizar apariencia, frescura y consistencia del producto.',
      variedad: null,
      presentacion: ['Cajas de 4 Kg', 'Cajas de 8 Kg', 'Cajas de 10 Kg'],
      origen: 'Perú',
      imagenCaja: '/img/granada.png',
      imagenFruta: '/img/granada-02.png'
    },
    {
      nombre: 'Piña',
      descripcion: 'La piña tropical destaca por su dulzura natural, aroma y textura jugosa. Proveniente de Ecuador y Brasil, es seleccionada cuidadosamente para ofrecer fruta fresca con excelente presentación para mercados internacionales.',
      detalles: null,
      variedad: null,
      presentacion: ['Cajas de 6 Kg', 'Cajas de 12 Kg'],
      origen: 'Ecuador / Brasil',
      imagenCaja: '/img/pina.png',
      imagenFruta: '/img/piña-02.png'
    },
    {
      nombre: 'Mango',
      descripcion: 'El mango brasileño es reconocido internacionalmente por su sabor, color y textura. Brasil es uno de los principales exportadores de mango premium, ofreciendo fruta con excelente vida de transporte y calidad constante para mercados internacionales.',
      detalles: null,
      variedad: ['Tommy Atkins', 'Kent', 'Palmer'],
      presentacion: ['Cajas de 4 Kg', 'Cajas de 6 Kg'],
      origen: 'Brasil',
      imagenCaja: '/img/mango.png',
      imagenFruta: '/img/mango-02.png'
    },
    {
      nombre: 'Aguacate',
      descripcion: 'El aguacate es uno de los productos con mayor crecimiento en el comercio internacional de frutas. Proveniente de Perú y Ecuador, se caracteriza por su excelente calidad, textura cremosa y alto valor nutricional.',
      detalles: 'La fruta es seleccionada cuidadosamente considerando estándares internacionales de tamaño, firmeza y condición de maduración para garantizar un producto adecuado para exportación.',
      variedad: ['Aguacate Hass'],
      presentacion: ['Cajas pequeñas / Retail: 2 Kg a 2.5 Kg', 'Cajas medianas: 4 Kg, 5 Kg, 7.5 Kg o 10 Kg', 'Cajas de exportación estándar (25 lb): 11 Kg – 12 Kg'],
      origen: 'Perú / Ecuador',
      imagenCaja: '/img/aguacate.png',
      imagenFruta: '/img/agucate-02.png'
    },
    {
      nombre: 'Plátano',
      descripcion: 'El plátano ecuatoriano es reconocido por su calidad y versatilidad en diferentes mercados. Su producción constante y su resistencia durante el transporte lo convierten en un producto ideal para exportación.',
      detalles: null,
      variedad: ['Plátano verde de exportación'],
      presentacion: ['Cajas de 20 Kg', 'Cajas de 25 Kg'],
      origen: 'Ecuador',
      imagenCaja: '/img/platano.png',
      imagenFruta: '/img/platano-02.png'
    }
  ];

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % productos.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + productos.length) % productos.length);
  };

  const producto = productos[currentIndex];

  return (
    <section id="nuestros-productos" className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-16">
      {/* Contenedor principal */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header - Título y descripción general */}
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            NUESTROS PRODUCTOS
          </h2>
          
          <div className="mx-auto max-w-4xl space-y-3">
            <p className="text-base font-semibold text-gray-800 md:text-lg">
              Frutas tropicales seleccionadas para mercados internacionales
            </p>
            
            <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
              Trabajamos con frutas frescas provenientes de regiones agrícolas reconocidas por su calidad y productividad. Cada producto es seleccionado considerando estándares de exportación, frescura y presentación adecuada para mercados internacionales.
            </p>
            
            <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
              Nuestra operación se enfoca en ofrecer frutas con excelente condición comercial, preparadas para cumplir con los requerimientos de importadores y distribuidores internacionales.
            </p>
          </div>
        </div>

        {/* Carrusel de productos */}
        <div className="relative">
          {/* Botón anterior */}
          <button
            onClick={prevProduct}
            className="absolute left-0 top-1/2 z-20 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition-all hover:scale-110 hover:bg-[#68a317] hover:text-white md:-translate-x-12 md:p-4"
            aria-label="Producto anterior"
          >
            <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Botón siguiente */}
          <button
            onClick={nextProduct}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-xl transition-all hover:scale-110 hover:bg-[#68a317] hover:text-white md:translate-x-12 md:p-4"
            aria-label="Producto siguiente"
          >
            <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contenido del producto actual */}
          <div className="rounded-2xl bg-white p-6 shadow-2xl md:p-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Columna izquierda - Información */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-2xl font-extrabold text-[#fd7502] md:text-3xl lg:text-4xl">
                  {producto.nombre}
                </h3>
                
                <p className="mb-3 text-justify text-sm leading-relaxed text-gray-700 md:text-base">
                  {producto.descripcion}
                </p>
                
                {producto.detalles && (
                  <p className="mb-4 text-justify text-sm leading-relaxed text-gray-600 md:text-base">
                    {producto.detalles}
                  </p>
                )}

                {/* Variedad */}
                {producto.variedad && (
                  <div className="mb-3">
                    <h4 className="mb-1.5 text-sm font-bold text-gray-800 md:text-base">Variedad</h4>
                    <ul className="space-y-0.5">
                      {producto.variedad.map((v, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-700 md:text-sm">
                          <span className="mr-2 text-[#68a317]">✓</span>
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Presentación */}
                <div className="mb-3">
                  <h4 className="mb-1.5 text-sm font-bold text-gray-800 md:text-base">Presentación</h4>
                  <ul className="space-y-0.5">
                    {producto.presentacion.map((p, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-700 md:text-sm">
                        <span className="mr-2 mt-0.5 text-[#68a317]">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Origen */}
                <div>
                  <h4 className="mb-1.5 text-sm font-bold text-gray-800 md:text-base">Origen</h4>
                  <p className="text-xs text-gray-700 md:text-sm">{producto.origen}</p>
                </div>
              </div>

              {/* Columna derecha - Imágenes */}
              <div className="flex flex-col items-center justify-center gap-4">
                {/* Imagen de la caja */}
                <div className="w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 p-4 shadow-lg md:p-6">
                  <img
                    src={producto.imagenCaja}
                    alt={`Caja de ${producto.nombre}`}
                    className="h-48 w-full object-contain md:h-56 lg:h-64"
                  />
                </div>

                {/* Imagen de la fruta */}
                <div className="w-full rounded-xl bg-gradient-to-br from-white to-gray-100 p-4 shadow-lg md:p-6">
                  <img
                    src={producto.imagenFruta}
                    alt={producto.nombre}
                    className="h-40 w-full object-contain md:h-48 lg:h-52"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Indicadores de navegación */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {productos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-7 bg-[#68a317]'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a producto ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
