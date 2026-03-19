export default function Propuesta() {
  return (
    <section id="propuesta" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      {/* Contenedor principal */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header - Título y subtítulo */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            NUESTRA PROPUESTA DE VALOR
          </h2>
          
          <p className="mx-auto max-w-4xl text-lg font-semibold text-gray-700 md:text-xl">
            Comprometidos con un comercio internacional basado en confianza, transparencia y responsabilidad.
          </p>
        </div>

        {/* Introducción destacada */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-[#fd7502] to-[#68a317] p-1 shadow-2xl">
          <div className="rounded-2xl bg-white p-8 md:p-12">
            <h3 className="mb-6 text-center text-2xl font-extrabold text-gray-900 md:text-3xl">
              Principios que respaldan cada operación comercial
            </h3>
            
            <div className="space-y-4">
              <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
                Nuestra empresa se basa en principios de <strong>transparencia, responsabilidad y compromiso comercial</strong>. Entendemos que el comercio internacional requiere confianza entre todas las partes involucradas, por lo que cada operación se desarrolla con procesos claros, información verificable y comunicación constante.
              </p>

              <div className="rounded-lg bg-gradient-to-r from-[#fd7502]/10 to-[#68a317]/10 p-6">
                <p className="text-center text-base font-bold leading-relaxed text-gray-800 md:text-lg">
                  Nuestro objetivo es construir relaciones comerciales duraderas donde productores, exportadores e importadores puedan trabajar con seguridad y confianza.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de propuestas - 2x2 */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Transparencia Total */}
          <div className="group rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fd7502] to-[#fd7502]/70 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#fd7502] md:text-3xl">
                Transparencia Total
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
                Cada operación se realiza con <strong>procesos claros y documentación verificable</strong>, garantizando que nuestros clientes tengan acceso a información confiable durante el desarrollo de cada operación comercial.
              </p>

              <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
                Esto incluye embarques reales, documentación oficial de exportación y comunicación directa, permitiendo que cada cliente tenga la tranquilidad de saber que sus operaciones se manejan con seriedad y profesionalismo.
              </p>

              <div className="mt-4 flex items-start gap-2 rounded-lg border-l-4 border-[#fd7502] bg-[#fd7502]/5 p-4">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#fd7502]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-semibold text-gray-800">Documentación verificable en cada etapa del proceso</p>
              </div>
            </div>
          </div>

          {/* Card 2: Evidencia Visual */}
          <div className="group rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#68a317] to-[#68a317]/70 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#68a317] md:text-3xl">
                Evidencia Visual
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
                Como parte de nuestro compromiso con la transparencia, proporcionamos <strong>evidencia visual del proceso productivo y logístico</strong>.
              </p>

              <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
                Esto puede incluir fotografías y videos de producción en campo, procesos de cosecha, selección, empaque y preparación del embarque. De esta manera, nuestros clientes pueden conocer el origen del producto y observar el desarrollo de sus operaciones.
              </p>

              <div className="mt-4 flex items-start gap-2 rounded-lg border-l-4 border-[#68a317] bg-[#68a317]/5 p-4">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#68a317]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-semibold text-gray-800">Trazabilidad visual desde origen hasta destino</p>
              </div>
            </div>
          </div>

          {/* Card 3: Comercio Justo */}
          <div className="group rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fd7502] to-[#68a317] shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#68a317] md:text-3xl">
                Comercio Justo
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
                Promovemos <strong>relaciones comerciales responsables</strong> donde todos los participantes de la cadena productiva reciban un trato justo.
              </p>

              <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
                Trabajamos bajo principios de cumplimiento, transparencia en los acuerdos y respeto por cada compromiso comercial, buscando construir relaciones sólidas y sostenibles a largo plazo.
              </p>

              <div className="mt-4 flex items-start gap-2 rounded-lg border-l-4 border-[#68a317] bg-gradient-to-r from-[#68a317]/5 to-transparent p-4">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#68a317]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-semibold text-gray-800">Relaciones sostenibles y responsables</p>
              </div>
            </div>
          </div>

          {/* Card 4: Inversión Segura */}
          <div className="group rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#68a317] to-[#fd7502] shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#fd7502] md:text-3xl">
                Inversión Segura
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-justify text-base leading-relaxed text-gray-700 md:text-lg">
                Entendemos que cada operación internacional representa una <strong>inversión importante</strong> para nuestros clientes. Por ello ofrecemos comunicación clara, seguimiento oportuno y respuestas directas durante todo el proceso comercial.
              </p>

              <p className="text-justify text-sm leading-relaxed text-gray-600 md:text-base">
                Nuestro compromiso es que cada cliente tenga la tranquilidad de saber que su inversión está siendo gestionada con responsabilidad y profesionalismo.
              </p>

              <div className="mt-4 flex items-start gap-2 rounded-lg border-l-4 border-[#fd7502] bg-gradient-to-r from-[#fd7502]/5 to-transparent p-4">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#fd7502]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-semibold text-gray-800">Gestión profesional de cada inversión</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer decorativo con estadísticas o cierre */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#fd7502]/10 via-[#68a317]/10 to-[#fd7502]/10 p-8 text-center shadow-lg">
          <p className="text-lg font-bold text-gray-800 md:text-xl">
            Comprometidos con la excelencia en cada operación comercial
          </p>
          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-[#fd7502] to-[#68a317]"></div>
        </div>
      </div>
    </section>
  );
}
