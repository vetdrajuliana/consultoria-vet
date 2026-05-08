export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      <section className="h-screen bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694d30')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-16 text-white max-w-5xl">
          <p className="text-lg uppercase tracking-[4px]">
            Consultoria Veterinária Estratégica
          </p>

          <h1 className="text-7xl font-bold mt-4 leading-tight">
            Resultados reais
            <br />
            para sua produção
          </h1>

          <p className="mt-8 text-xl max-w-2xl">
            Soluções técnicas para saúde animal, manejo inteligente
            e aumento da produtividade no campo.
          </p>

          <button className="mt-10 w-fit bg-green-700 px-8 py-4 rounded-lg text-lg hover:bg-green-800">
            Solicitar Consultoria
          </button>
        </div>
      </section>

      <section className="py-24 px-16 bg-white">
        <h2 className="text-5xl font-bold text-green-900">
          Quem Somos
        </h2>

        <p className="mt-8 text-xl max-w-4xl text-gray-700 leading-9">
          Atuamos com consultoria veterinária especializada para
          propriedades rurais que buscam excelência técnica,
          melhoria sanitária e aumento sustentável de produtividade.
        </p>
      </section>

      <section className="py-24 px-16 bg-green-50">
        <h2 className="text-5xl font-bold text-green-900 text-center">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Diagnóstico Sanitário
            </h3>
            <p className="mt-4 text-gray-600">
              Avaliação técnica completa do rebanho.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Manejo Preventivo
            </h3>
            <p className="mt-4 text-gray-600">
              Protocolos para prevenção e eficiência.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Treinamento de Equipe
            </h3>
            <p className="mt-4 text-gray-600">
              Capacitação prática para melhores resultados.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}