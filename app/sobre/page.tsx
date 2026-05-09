export default function Sobre() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
          alt="Veterinária"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Sobre Nós
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Consultoria veterinária estratégica focada em saúde animal,
            produtividade e resultados reais no campo.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-4xl font-bold text-green-900">
            Excelência Técnica no Campo
          </h2>

          <p className="mt-8 text-lg text-gray-700 leading-8">
            Atuamos com acompanhamento veterinário especializado,
            diagnóstico sanitário, manejo nutricional e protocolos
            estratégicos para propriedades rurais que buscam maior
            eficiência produtiva e segurança sanitária.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            Nosso objetivo é unir tecnologia, experiência prática e
            acompanhamento técnico contínuo para gerar resultados
            sustentáveis e melhorar a performance do rebanho.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
            alt="Atendimento veterinário"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />

          <div className="absolute -bottom-6 -left-6 bg-green-800 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold">
              + Qualidade
            </h3>

            <p className="mt-2 text-green-100">
              Saúde animal e produtividade com acompanhamento estratégico.
            </p>
          </div>
        </div>

      </section>

    </main>
  )
}