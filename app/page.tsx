export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      <section className="relative h-[45vh] flex items-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
          alt="Consultoria Veterinária"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 px-8 md:px-20 text-white max-w-4xl">

          <p className="text-sm md:text-base uppercase tracking-[5px] text-green-200 font-light">
            Consultoria Veterinária Estratégica
          </p>

          <h1
            className="mt-5 text-5xl md:text-7xl leading-tight font-light"
            style={{
              fontFamily: 'Georgia, serif'
            }}
          >
            Resultados reais
            <br />
            para sua produção
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-gray-200 leading-9 max-w-2xl">
            Serviços Veterinários para Animais de Grande Porte.
          </p>

          <a
            href="https://wa.me/5562998577635"
            target="_blank"
            className="inline-block mt-10 border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Solicitar Serviços
          </a>

        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-[#f5f5f5]">

        <div className="max-w-7xl mx-auto">

          <h2
            className="text-4xl md:text-5xl text-green-900 text-center font-light"
            style={{
              fontFamily: 'Georgia, serif'
            }}
          >
            Resultados e Depoimentos
          </h2>

          <p className="mt-6 text-center text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Conheça alguns resultados alcançados através do acompanhamento técnico,
            manejo estratégico e atuação prática no campo.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-10 rounded-[30px] shadow-lg">
              <p className="text-gray-700 leading-8 italic">
                “Excelente acompanhamento técnico. Conseguimos melhorar o manejo
                sanitário e reduzir perdas na propriedade.”
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-green-900">
                  Produtor Rural
                </h3>

                <p className="text-gray-500">
                  Barreiras - BA
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[30px] shadow-lg">
              <p className="text-gray-700 leading-8 italic">
                “Atendimento extremamente profissional e muito próximo da realidade
                do produtor. Resultados visíveis no rebanho.”
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-green-900">
                  Pecuarista
                </h3>

                <p className="text-gray-500">
                  Goiás
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[30px] shadow-lg">
              <p className="text-gray-700 leading-8 italic">
                “A consultoria trouxe mais organização, produtividade e segurança
                sanitária para nossa fazenda.”
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-green-900">
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