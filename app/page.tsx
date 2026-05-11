export default function Home() {
  return (
    <main className="bg-white text-[#1f2933] min-h-screen overflow-x-hidden w-full">

      <section className="relative min-h-[85vh] flex items-center px-6 md:px-16 py-16 overflow-hidden">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full overflow-x-hidden">

          <div className="w-full min-w-0">

            <p className="text-green-700 text-xl md:text-2xl font-semibold mb-6">
              Serviços Veterinários
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
<section className="bg-white px-6 md:px-16 pt-0 pb-12">
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-green-700 text-lg font-semibold mb-3">
      Regiões Atendidas
    </p>

    <h2
      className="text-3xl md:text-4xl text-green-900 font-light mb-6"
      style={{ fontFamily: "Georgia, serif" }}
    >
      Atendimento no entorno de Trindade e região
    </h2>

    <p className="text-gray-700 text-lg leading-8 max-w-3xl mx-auto mb-10">
      Atendimentos técnicos a campo para propriedades rurais, com foco em bovinos,
      equinos e animais de grande porte.
    </p>

    <div className="rounded-3xl overflow-hidden shadow-xl border border-green-100 bg-green-50">
      <img
        src="/mapa-regioes.PNG"
        alt="Mapa das regiões atendidas no entorno de Trindade"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>

            Resultados e Depoimentos
          </h2>

          <p className="mt-6 text-center text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Acompanhe alguns resultados obtidos através de atendimento técnico,
            manejo adequado e acompanhamento veterinário especializado.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-[#f8f8f8] rounded-[30px] overflow-hidden shadow-lg">

              <img
                src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/43B15F01-9C55-45E9-91AB-44656596ED76.jpg.jpeg"
                alt="Resultado de tratamento"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-900">
                  Recuperação Clínica
                </h3>

                <p className="mt-4 text-gray-700 leading-8">
                  Evolução positiva após acompanhamento veterinário
                  e protocolo terapêutico adequado.
                </p>
              </div>

            </div>

            <div className="bg-[#f8f8f8] rounded-[30px] overflow-hidden shadow-lg">

              <img
                src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/8A3693C4-4636-4E85-8688-2E396D435E7D.jpg.jpeg"
                alt="Antes e depois"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-900">
                  Melhora Sanitária
                </h3>

                <p className="mt-4 text-gray-700 leading-8">
                  Resultado obtido com diagnóstico, manejo correto
                  e acompanhamento técnico no campo.
                </p>
              </div>

            </div>

            <div className="bg-[#f8f8f8] rounded-[30px] overflow-hidden shadow-lg">

              <img
                src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/CDF1FB66-CEAF-40D7-88A5-56CB036D41E7.jpg.jpeg"
                alt="Resultado no campo"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-900">
                  Eficiência no Tratamento
                </h3>

                <p className="mt-4 text-gray-700 leading-8">
                  Acompanhamento estratégico com foco em bem-estar animal,
                  produtividade e resposta clínica.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}