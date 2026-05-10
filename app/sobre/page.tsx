export default function Sobre() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">

      <section className="relative min-h-[85vh] flex items-center px-6 md:px-16 py-16 overflow-hidden">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

          <div>

            <p className="text-green-700 text-xl md:text-2xl font-semibold mb-6">
              Sobre
            </p>

            <h1
              className="text-4xl md:text-6xl font-bold leading-tight text-[#1f2933]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Excelência técnica
              <br />
              no campo
            </h1>

            <p className="mt-10 text-lg md:text-xl leading-9 text-gray-700">
              Dra. Juliana Moraes é médica veterinária, natural de Goiânia,
              formada em 2019 pelo Instituto Federal Goiano, e atua há mais
              de 11 anos no setor pecuário.
            </p>

            <p className="mt-6 text-lg md:text-xl leading-9 text-gray-700">
              Possui ampla experiência clínica em animais de produção,
              aliando conhecimento técnico à vivência prática no campo,
              sempre com uma atuação próxima da realidade do produtor rural.
            </p>

            <p className="mt-6 text-lg md:text-xl leading-9 text-gray-700">
              Seu trabalho é pautado em levar ciência, tecnologia e soluções
              estratégicas para a pecuária de forma acessível, atendendo desde
              grandes propriedades até pequenos produtores, com foco em resultados,
              bem-estar animal e eficiência produtiva.
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

          <div className="relative flex justify-center overflow-hidden -mt-6 md:-mt-12">

            <div className="absolute top-0 left-6 w-44 h-44 bg-green-200 rounded-[40px] opacity-60"></div>

            <img
              src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/WhatsApp%20Image%202026-05-10%20at%2012.20.47.jpeg"
              alt="Dra. Juliana Moraes"
              className="relative z-10 max-w-full h-[600px] object-cover rounded-[50px] shadow-2xl"
            />

          </div>

        </div>

      </section>

    </main>
  )
}