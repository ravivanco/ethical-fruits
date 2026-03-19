import Navbar from './components/Navbar';
import SobreNosotros from './components/SobreNosotros';
import Propuesta from './components/Propuesta';
import NuestrosProductos from './components/NuestrosProductos';
import Certificaciones from './components/Certificaciones';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';

const certificacionesHero = [
  { id: 1, src: '/img/2.png', alt: 'Certificado 2' },
  { id: 2, src: '/img/3.png', alt: 'Certificado 3' },
  { id: 3, src: '/img/4.png', alt: 'Certificado 4' },
  { id: 4, src: '/img/5.png', alt: 'Certificado 5' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section id="inicio" className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/fondoE.png')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/42 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute left-[18%] top-[26%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 blur-[90px]" />

        <div className="relative z-20 flex min-h-screen w-full items-center px-3 pb-32 pt-24 md:px-4 md:pb-44 md:pt-28 lg:px-6">
          <div className="mr-auto flex w-full max-w-[1450px] -translate-y-8 flex-col gap-4 lg:-translate-y-10 lg:flex-row lg:items-start lg:gap-2">
            <div className="mt-1 flex w-fit shrink-0 flex-col items-center md:mt-3 lg:ml-1">
              <div className="rounded-2xl bg-white/14 p-4 shadow-xl backdrop-blur-[2px] md:p-5">
                <img
                  src="/img/logo.png"
                  alt="Logo Ethical Fruits"
                  className="h-auto w-[150px] scale-[1.2] object-contain sm:w-[180px] sm:scale-[1.25] md:w-[220px] md:scale-[1.35] lg:w-[270px] lg:scale-[1.4]"
                />
              </div>

              <div className="mt-2 w-full max-w-[240px] text-center uppercase leading-none sm:max-w-[300px] md:mt-4 md:max-w-[380px]">
                <p className="whitespace-nowrap text-[1.7rem] font-black tracking-tight sm:text-[2rem] md:text-[2.65rem]">
                  <span style={{ color: '#ff6a00', textShadow: '0 4px 12px rgba(0,0,0,0.35)' }}>Ethical</span>{' '}
                  <span style={{ color: '#68a317', textShadow: '0 4px 12px rgba(0,0,0,0.35)' }}>Fruits</span>
                </p>
              </div>
            </div>

            <div className="self-start pt-0 md:pt-1 lg:-ml-2 lg:pt-3">
              <h1
                className="max-w-4xl text-[2.05rem] font-extrabold leading-[1.1] text-white sm:text-[2.8rem] md:text-[3.95rem] lg:text-[4.55rem]"
                style={{ textShadow: '0 8px 24px rgba(0,0,0,0.55)' }}
              >
                <span className="mb-2 block whitespace-normal sm:mb-3 sm:whitespace-nowrap md:mb-5">Real Trade.</span>
                <span className="mb-2 block whitespace-normal sm:mb-3 sm:whitespace-nowrap md:mb-5">Real Fruit.</span>
                <span className="block whitespace-normal sm:whitespace-nowrap">Real Commitments.</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="relative h-[100px] md:h-[130px]">
            <svg
              viewBox="0 0 1440 240"
              className="absolute bottom-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,132 C220,186 530,58 790,118 C1030,173 1250,178 1440,118 L1440,240 L0,240 Z"
                fill="#ffffff"
              />
            </svg>
          </div>

          <div className="absolute bottom-2 left-3 md:bottom-4 md:left-8 lg:left-10">
            <div className="flex w-fit max-w-[calc(100vw-2rem)] flex-wrap items-center justify-start gap-x-5 gap-y-2 rounded-full bg-white/92 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:gap-x-6 sm:px-5 sm:py-3 md:max-w-[calc(100vw-6rem)] md:gap-x-9 md:px-8 md:py-4">
              {certificacionesHero.map((cert) => (
                <img
                  key={cert.id}
                  src={cert.src}
                  alt={cert.alt}
                  className="h-10 w-auto object-contain drop-shadow-sm sm:h-12 md:h-20"
                />
              ))}
            </div>
          </div>
        </div>

        <a
          href="#contacto"
          className="absolute bottom-28 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl md:bottom-30 md:right-10"
          aria-label="WhatsApp"
        >
          <img
            src="/img/whatsApp.png"
            alt="WhatsApp"
            className="h-9 w-9 object-contain"
          />
        </a>

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
      </section>

      <SobreNosotros />
      <Propuesta />
      <NuestrosProductos />
      <Certificaciones />
      <Galeria />
      <Contacto />
    </main>
  );
}