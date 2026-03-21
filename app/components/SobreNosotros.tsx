export default function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-20">
      {/* Contenedor principal */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header - Título y subtítulo */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            SOBRE NOSOTROS
          </h2>
          
          <p className="mx-auto max-w-3xl text-lg font-semibold text-gray-700 md:text-xl">
            Conectando la producción de frutas tropicales de alta calidad con mercados internacionales.
          </p>
        </div>

        {/* Sección 1: Quiénes Somos */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-xl md:p-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#fd7502] to-[#68a317]">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-[#fd7502] md:text-3xl">
              Quiénes Somos
            </h3>
          </div>

          <div className="space-y-4">
            <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
              <strong>Somos una empresa dedicada al comercio internacional de frutas frescas</strong>, enfocada en ofrecer productos de calidad mediante operaciones responsables y transparentes.
            </p>

            <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
              Contamos con experiencia y conocimiento en la industria agrícola y en los procesos de exportación de productos frescos hacia mercados internacionales. Nuestra operación trabaja principalmente con fruta proveniente de <strong>Ecuador, Perú y Brasil</strong>, países reconocidos por la calidad y diversidad de su producción agrícola.
            </p>

            <div className="mt-6 rounded-lg bg-gradient-to-r from-[#fd7502]/10 to-[#68a317]/10 p-6">
              <p className="text-justify text-base font-semibold leading-relaxed text-gray-800 md:text-lg">
                Nuestro objetivo es llevar lo mejor de las frutas tropicales a diferentes mercados del mundo mediante procesos organizados, confiables y profesionales.
              </p>
            </div>
          </div>
        </div>

        {/* Footer decorativo */}
        <div className="mt-12 text-center">
          <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-[#fd7502] to-[#68a317]"></div>
        </div>
      </div>
    </section>
  );
}
