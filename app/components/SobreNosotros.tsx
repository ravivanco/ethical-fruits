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

        {/* Sección 2: Filosofía de Trabajo */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-xl md:p-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#68a317] to-[#fd7502]">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-[#68a317] md:text-3xl">
              Filosofía de Trabajo
            </h3>
          </div>

          <div className="space-y-4">
            <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
              Nuestra filosofía de trabajo se basa en <strong>principios claros: honestidad, cumplimiento y responsabilidad</strong> en cada operación comercial.
            </p>

            <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
              Creemos que el comercio internacional debe desarrollarse sobre bases reales y transparentes, donde cada acuerdo se cumpla según lo establecido. Nuestro propósito es generar seguridad en cada operación y demostrar que es posible construir relaciones comerciales internacionales basadas en confianza y profesionalismo.
            </p>

            <div className="mt-6 rounded-lg border-l-4 border-[#68a317] bg-white p-6 shadow-md">
              <p className="text-justify text-base font-semibold leading-relaxed text-gray-800 md:text-lg">
                Trabajamos con el compromiso de llevar frutas tropicales de alta calidad al mercado internacional mediante procesos organizados y responsables.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 3: Enfoque en la Transparencia */}
        <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#fd7502] to-[#68a317]">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-[#fd7502] md:text-3xl">
              Enfoque en la Transparencia
            </h3>
          </div>

          <div className="space-y-4">
            <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
              <strong>La transparencia es uno de los pilares fundamentales de nuestra operación.</strong>
            </p>

            <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
              Nuestros clientes reciben información clara sobre el desarrollo de sus procesos comerciales, evitando incertidumbre durante cada etapa de la operación.
            </p>

            <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
              Al mismo tiempo, mantenemos un compromiso responsable con los productores y socios de la cadena productiva, asegurando el cumplimiento de acuerdos comerciales y financieros según lo establecido.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-gradient-to-br from-[#fd7502]/10 to-transparent p-6">
                <h4 className="mb-2 font-bold text-gray-900">Para Compradores</h4>
                <p className="text-sm text-gray-700">Información clara y actualizada en cada etapa del proceso comercial.</p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-[#68a317]/10 to-transparent p-6">
                <h4 className="mb-2 font-bold text-gray-900">Para Productores</h4>
                <p className="text-sm text-gray-700">Cumplimiento responsable de acuerdos comerciales y financieros.</p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 p-6">
              <p className="text-justify text-base font-semibold leading-relaxed text-gray-800 md:text-lg">
                Este enfoque permite generar confianza tanto para los compradores internacionales como para quienes forman parte de nuestra cadena de producción.
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
