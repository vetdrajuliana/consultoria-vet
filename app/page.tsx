export default function Home() {
  return (
    <main className="bg-white text-[#1f2933] min-h-screen overflow-x-hidden w-full">

      <section className="relative min-h-[85vh] flex items-center px-6 md:px-16 py-16 overflow-hidden">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full overflow-x-hidden">

          <div className="w-full min-w-0">
            <p className="text-green-700 text-xl md:text-2xl font-semibold mb-6">
              Serviços Veterinários para Animais de Grande Porte
            </p>

            <h1
              className="text-4xl md:text-6xl font-bold leading-tight text-[#1f2933]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Resultados reais
              <br />
              para sua produção
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-9 text-gray-700 max-w-2xl">
              Atendimento veterinário estratégico para propriedades rurais,
              com foco em saúde animal, produtividade, manejo eficiente e
              soluções práticas para o campo.
            </p>

            <a
              href="https://wa.me/5562998577635"
              target="_blank"
              className="inline-flex items-center gap-3 mt-10 bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition-all duration-300 shadow-lg"
            >
              Solicitar Serviços
              <span>→</span>
            </a>
          </div>

          <div className="relative w-full min-w-0 overflow-hidden -mt-6 md:-mt-12 flex justify-center">

            <div className="absolute top-0 left-6 w-44 h-44 bg-green-200 rounded-[40px] opacity-60"></div>

            <img
              src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/Foto%20site%20(1).PNG"
              alt="Consultoria Veterinária no Campo"
              className="relative z-10 max-w-full h-[500px] object-cover rounded-[50px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      <section className="bg-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <h2
            className="text-4xl md:text-5xl text-green-900 text-center font-light"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Resultados e Depoimentos
          </h2>

          <p className="mt-6 text-center text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Conheça alguns resultados alcançados através do acompanhamento técnico,
            manejo estratégico e atuação prática no campo.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-[#f8f8f8] p-10 rounded-[30px] shadow-lg">
              <p className="text-gray-700 leading-8 italic">
                “Excelente acompanhamento técnico. Conseguimos melhorar o manejo
                sanitário e reduzir perdas na propriedade.”
              </p>

              <h3 className="mt-6 font-bold text-green-900">
                Produtor Rural
              </h3>
            </div>

            <div className="bg-[#f4efe6] p-10 rounded-[30px] shadow-lg">
              <p className="text-gray-700 leading-8 italic">
                “Atendimento profissional e muito próximo da realidade do produtor.
                Resultados visíveis no rebanho.”
              </p>

              <h3 className="mt-6 font-bold text-green-900">
                Pecuarista
              </h3>
            </div>

            <div className="bg-[#f4efe6] p-10 rounded-[30px] shadow-lg">
              <p className="text-gray-700 leading-8 italic">
                “A consultoria trouxe mais organização, produtividade e segurança
                sanitária para nossa fazenda.”
              </p>

              <h3 className="mt-6 font-bold text-green-900">
                Fazenda Parceira
              </h3>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}