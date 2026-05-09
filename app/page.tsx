export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
          alt="Consultoria Veterinária"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center px-6 text-white">

          <p className="text-sm md:text-lg uppercase tracking-[4px] text-green-200">
            Consultoria Veterinária Estratégica
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Início
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Serviços Veterinários para Animais de Grande Porte
          </p>

          <a
            href="https://wa.me/5562998577635"
            target="_blank"
            className="inline-block mt-10 bg-green-700 px-8 py-4 rounded-xl text-lg hover:bg-green-800 transition-all duration-300 shadow-2xl"
          >
            Solicitar Serviços
          </a>

        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-[#f5f5f5]">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-green-900 text-center">
            Resultados e Depoimentos
          </h2>

          <p className="mt-6 text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça alguns resultados alcançados através do acompanhamento técnico,
            manejo estratégico e atuação prática no campo.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <p className="text-gray-700 leading-8 italic">
                “Excelente acompanhamento técnico. Conseguimos melhorar o manejo
                sanitário e reduzir perdas na propriedade.”
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-green-900">
                  Produtor Rural
                </h3>

                <p className="text-gray-500">
                  Barreiras - BA
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <p className="text-gray-700 leading-8 italic">
                “Atendimento extremamente profissional e muito próximo da realidade
                do produtor. Resultados visíveis no rebanho.”
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-green-900">
                  Pecuarista
                </h3>

                <p className="text-gray-500">
                  Goiás
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <p className="text-gray-700 leading-8 italic">
                “A consultoria trouxe mais organização, produtividade e segurança
                sanitária para nossa fazenda.”
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-green-900">
                  Fazenda Parceira
                </h3>

                <p className="text-gray-500">
                  Mato Grosso
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}