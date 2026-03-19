import Navbar from './components/Navbar';
import SobreNosotros from './components/SobreNosotros';
import Propuesta from './components/Propuesta';
import NuestrosProductos from './components/NuestrosProductos';
import Certificaciones from './components/Certificaciones';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';

export default function Home() {
  return (
    // Contenedor principal de toda la página
    <main className="min-h-screen bg-white">
      {/* Navbar sticky global */}
      <Navbar />
      {/* 
        HERO PRINCIPAL
        - relative: permite posicionar elementos hijos de forma absoluta
        - min-h-screen: ocupa al menos toda la altura de la pantalla
        - overflow-hidden: evita que se salgan elementos visuales
      */}
      <section id="inicio" className="relative min-h-screen overflow-hidden">
        {/* 
          IMAGEN DE FONDO
          - absolute inset-0: cubre todo el hero
          - bg-cover: la imagen cubre todo el espacio
          - bg-center: centra la imagen
        */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/fondoTropical.png')" }}
        />

        {/* 
          SISTEMA DE CAPAS PROFESIONAL PARA UX ÓPTIMO
        */}
        
        {/* Capa base oscura sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40" />
        
        {/* Iluminación focal radial desde el centro-izquierda */}
        <div className="absolute left-1/4 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-[120px]" />
        
        {/* Spotlight suave para el área del carousel */}
        <div className="absolute left-0 top-1/2 h-[700px] w-[650px] -translate-y-1/2 bg-gradient-to-r from-white/30 via-white/10 to-transparent blur-3xl" />
        
        {/* Degradado superior elegante */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 via-white/5 to-transparent" />
        
        {/* Degradado oscuro desde el centro hacia la derecha */}
        <div className="absolute inset-y-0 left-1/2 right-0 bg-gradient-to-r from-transparent via-black/30 to-black/55" />
        
        {/* Vignette sutil en bordes superior e inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

        {/* FORMAS BLANCAS DECORATIVAS */}
        {/* Círculo superior izquierda */}
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-white/10 blur-xl" />
        
        {/* Forma orgánica derecha superior */}
        <div className="absolute right-20 top-40 h-48 w-48 rounded-[40%_60%_70%_30%] bg-white/15 blur-2xl" />
        
        {/* Círculo pequeño centro-izquierda */}
        <div className="absolute left-1/3 top-1/3 h-24 w-24 rounded-full bg-white/8 blur-lg" />
        
        {/* Forma orgánica inferior derecha */}
        <div className="absolute bottom-1/4 right-32 h-40 w-40 rounded-[60%_40%_30%_70%] bg-white/12 blur-xl" />
        
        {/* Círculo medio inferior izquierda */}
        <div className="absolute bottom-1/3 left-1/4 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

        {/* CARRUSEL DE FRUTAS - Lado izquierdo */}
        <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 md:left-10">
          <div className="relative h-[600px] w-[600px]">
            {/* Círculo blanco de fondo con degradado */}
            <div 
              className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xl"
              style={{ background: 'radial-gradient(circle, white 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.5) 70%, transparent 100%)' }}
            ></div>
            
            {/* Aguacate */}
            <div className="absolute inset-0 flex items-center justify-center animate-[slideCarousel_32s_linear_0s_infinite]">
              <img
                src="/img/aguacate.png"
                alt="Aguacate"
                className="h-[550px] w-[550px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Arándano */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[slideCarousel_32s_linear_4s_infinite]">
              <img
                src="/img/arandano.png"
                alt="Arándano"
                className="h-[550px] w-[550px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Banana */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[slideCarousel_32s_linear_8s_infinite]">
              <img
                src="/img/banana.png"
                alt="Banana"
                className="h-[550px] w-[550px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Granada */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[slideCarousel_32s_linear_12s_infinite]">
              <img
                src="/img/granada.png"
                alt="Granada"
                className="h-[550px] w-[550px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Mango */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[slideCarousel_32s_linear_16s_infinite]">
              <img
                src="/img/mango.png"
                alt="Mango"
                className="h-[550px] w-[550px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Piña */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[slideCarousel_32s_linear_20s_infinite]">
              <img
                src="/img/pina.png"
                alt="Piña"
                className="h-[550px] w-[550px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Pitahaya */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[slideCarousel_32s_linear_24s_infinite]">
              <img
                src="/img/pitahaya.png"
                alt="Pitahaya"
                className="h-[550px] w-[550px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Plátano */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[slideCarousel_32s_linear_28s_infinite]">
              <img
                src="/img/platano.png"
                alt="Plátano"
                className="h-[550px] w-[550px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Logo en la esquina superior izquierda */}
        <div className="absolute left-4 top-4 z-30 animate-[fadeIn_0.8s_ease-out] md:left-6 md:top-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-2 shadow-lg md:h-16 md:w-16">
            <img
              src="/img/logo_2.png"
              alt="Logo Global Harvest"
              className="h-full w-full object-contain"
            />
          </div>
        </div>



        {/* Selector de idioma en la esquina superior derecha */}
        <div className="absolute right-4 top-4 z-30 animate-[fadeIn_0.8s_ease-out] md:right-6 md:top-6">
          <button className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 backdrop-blur-md transition hover:bg-white/20">
            <img
              src="/img/ecuador.png"
              alt="Bandera de Ecuador"
              className="h-5 w-8 rounded-sm object-cover shadow-md"
            />
            <span className="text-sm font-semibold text-white">ES</span>
            <svg 
              className="h-4 w-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* 
          CONTENIDO PRINCIPAL DEL HERO
          - z-20 para que quede sobre el fondo
          - flex items-center para centrar verticalmente
        */}
        <div className="relative z-20 flex min-h-screen items-start justify-end px-6 pb-28 pt-32 md:px-16 md:pt-40 lg:px-20">
          {/* Bloque de texto alineado a la derecha */}
          <div className="max-w-4xl text-right">
            {/* Título principal */}
            <h1 
              className="animate-[slideInLeft_1s_ease-out] text-[6rem] font-extrabold uppercase leading-none md:text-[9rem] lg:text-[11rem]" 
              style={{ 
                color: '#fd7502',
                textShadow: '0 0 10px rgba(255,255,255,0.4), 2px 2px 3px rgba(255,255,255,0.2)'
              }}
            >
              ETHICAL
            </h1>

            {/* Segunda línea del título */}
            <h2 
              className="mt-2 animate-[slideInLeft_1s_ease-out_0.3s_both] text-[3rem] font-extrabold uppercase leading-none md:text-[4.5rem] lg:text-[5.5rem]" 
              style={{ 
                color: '#68a317',
                textShadow: '0 0 10px rgba(255,255,255,0.4), 2px 2px 3px rgba(255,255,255,0.2)'
              }}
            >
              FRUITS
            </h2>

            {/* Subtítulo */}
            <p 
              className="mt-4 animate-[fadeIn_1s_ease-out_0.6s_both] text-sm font-semibold uppercase tracking-[0.35em] text-white md:text-base lg:text-lg"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              REAL TRADE. REAL FRUIT. REAL COMMITMENTS
            </p>
          </div>
        </div>

        {/* Botón Descubre más - Centrado abajo */}
        <div className="absolute bottom-40 left-1/2 z-30 -translate-x-1/2 md:bottom-52 lg:bottom-56">
          <button 
            className="group animate-[fadeIn_1s_ease-out_0.8s_both] flex items-center gap-3 rounded-full bg-gradient-to-r from-white to-gray-100 px-8 py-4 font-extrabold uppercase tracking-wide text-gray-800 shadow-2xl transition-all duration-300 hover:scale-110 hover:from-gray-100 hover:to-white hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)] md:px-10 md:py-5"
          >
            <span>Descubre más</span>
            <svg 
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* 
          CURVA / FORMA BLANCA INFERIOR
          Esto crea un efecto visual parecido al de tu referencia.
          Está posicionada abajo y encima del fondo.
        */}
        <div className="absolute bottom-0 left-0 z-10 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="h-[200px] w-full md:h-[280px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,160 Q360,240 720,160 T1440,160 L1440,320 L0,320 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* 
          BOTÓN FLOTANTE DE WHATSAPP
          - fixed: permanece fijo aunque hagas scroll
          - bottom/right: posición abajo a la derecha
          - shadow: sombra para que resalte
        */}
        <a
          href="#"
          className="fixed bottom-24 right-6 z-30 flex h-16 w-16 animate-[fadeIn_1s_ease-out_0.8s_both,pulse_2s_ease-in-out_2s_infinite] items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
          aria-label="WhatsApp"
        >
          <img
            src="/img/whatsapp.png"
            alt="WhatsApp"
            className="h-10 w-10 object-contain"
          />
        </a>
      </section>

      {/* Secciones adicionales */}
      <SobreNosotros />
      <Propuesta />
      <NuestrosProductos />
      <Certificaciones />
      <Galeria />
      <Contacto />
    </main>
  );
}