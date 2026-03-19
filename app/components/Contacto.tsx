export default function Contacto() {
  return (
    <section id="contacto" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Contenedor principal */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 lg:flex-row lg:gap-16 lg:px-10">
        
        {/* Columna Izquierda - Información y Logo */}
        <div className="mb-12 flex w-full flex-col items-start justify-center lg:mb-0 lg:w-1/2">
          {/* Logo */}
          <div className="mb-10">
            <img
              src="/img/logo_2.png"
              alt="Logo Global Harvest"
              className="h-32 w-auto object-contain md:h-40 lg:h-48"
            />
          </div>

          {/* Título */}
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            CONTACTO
          </h2>

          {/* Subtítulo */}
          <p className="mb-6 text-lg font-semibold text-gray-700 md:text-xl">
            Construyendo relaciones comerciales sólidas en el comercio internacional de frutas frescas.
          </p>

          {/* Descripción 1 */}
          <p className="mb-4 text-base leading-relaxed text-gray-600">
            Si desea recibir más información sobre nuestros productos, disponibilidad o procesos comerciales, puede contactarnos directamente.
          </p>

          {/* Descripción 2 */}
          <p className="text-base leading-relaxed text-gray-600">
            Nuestro equipo está disponible para atender consultas comerciales y explorar nuevas oportunidades de cooperación en el comercio internacional de frutas tropicales.
          </p>
        </div>

        {/* Columna Derecha - Formulario */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl bg-white p-8 shadow-2xl md:p-10">
            <h3 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
              Envía un mensaje
            </h3>

            <form className="space-y-6">
              {/* Nombre - Nombre y Apellido */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-gray-700">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-[#fd7502] focus:bg-white focus:outline-none"
                    placeholder=""
                  />
                  <p className="mt-1 text-xs text-gray-500">Nombre</p>
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-gray-700">
                    &nbsp;
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-[#fd7502] focus:bg-white focus:outline-none"
                    placeholder=""
                  />
                  <p className="mt-1 text-xs text-gray-500">Apellido</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-[#fd7502] focus:bg-white focus:outline-none"
                  placeholder=""
                />
              </div>

              {/* Comentario o Mensaje */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
                  Comentario o Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-[#fd7502] focus:bg-white focus:outline-none"
                  placeholder=""
                />
              </div>

              {/* Botón Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#fd7502] to-[#68a317] px-8 py-4 font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:w-auto md:px-12"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
