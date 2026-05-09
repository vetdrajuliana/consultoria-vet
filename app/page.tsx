export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      <section className="relative h-screen max-w-7xl mx-auto rounded-b-[40px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
          alt="Serviços Veterinários"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-white max-w-5xl">

          <p className="text-sm md:text-lg uppercase tracking-[4px] text-green-200">
            Medicina Veterinária Estratégica
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
            Resultados reais
            <br />
            para sua produção
          </h1>

          <p className="mt-8 text-lg md:text-xl max-w-2xl text-gray-200 leading-8">
            Soluções técnicas para saúde animal, manejo inteligente
            e aumento da produtividade no campo.
          </p>

          <button className="mt-10 w-fit bg-green-700 px-8 py-4 rounded-xl text-lg hover:bg-green-800 transition-all duration-300 shadow-2xl">
            Solicitar Consultoria
          </button>

        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900">
              Sobre
            </h2>

            <p className="mt-8 text-lg text-gray-700 leading-9">
              Atuamos com consultoria veterinária especializada para
              propriedades rurais que buscam excelência técnica,
              melhoria sanitária e aumento sustentável de produtividade.
            </p>

            <p className="mt-6 text-lg text-gray-700 leading-9">
              Unimos experiência prática, tecnologia e acompanhamento
              estratégico para oferecer soluções eficientes e resultados reais.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="Veterinária"
              className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
            />

            <div className="absolute -bottom-6 left-6 bg-green-800 text-white p-6 rounded-2xl shadow-xl max-w-xs">
              <h3 className="text-3xl font-bold">
                +11 anos
              </h3>

              <p className="mt-2 text-green-100">
                Experiência prática no setor pecuário.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-green-50">

        <h2 className="text-4xl md:text-5xl font-bold text-green-900 text-center">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-7xl mx-auto">

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-green-900">
              Diagnóstico Sanitário
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Avaliação técnica completa do rebanho com foco em prevenção e desempenho.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-green-900">
              Manejo Preventivo
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Protocolos sanitários e nutricionais para máxima eficiência produtiva.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-green-900">
              Treinamento de Equipe
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Capacitação prática para melhorar resultados e manejo no campo.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}