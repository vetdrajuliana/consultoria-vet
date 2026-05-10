export default function Sobre() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">

      <section className="relative h-[42vh] flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
          alt="Veterinária"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-6">

          <h1
            className="text-5xl md:text-7xl text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Sobre
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-8">
            Serviços Veterinários para Animais de Grande Porte
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-green-700 text-xl font-semibold mb-5">
            Dra. Juliana Moraes
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#1f2933] leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Excelência técnica
            <br />
            no campo
          </h2>

          <p className="mt-10 text-lg text-gray-700 leading-9">
            Dra. Juliana Moraes é médica veterinária, natural de Goiânia,
            formada em 2019 pelo Instituto Federal Goiano, e atua há mais
            de 11 anos no setor pecuário.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-9">
            Possui ampla experiência clínica em animais de produção,
            aliando conhecimento técnico à vivência prática no campo,
            sempre com uma atuação próxima da realidade do produtor rural.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-9">
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

        <div className="relative flex justify-center overflow-hidden">

          <div className="absolute top-0 left-6 w-44 h-44 bg-green-200 rounded-[40px] opacity-60"></div>

          <img
            src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/WhatsApp%20Image%202026-05-09%20at%2019.09.44.jpeg"
            alt="Dra. Juliana Moraes"
            className="relative z-10 rounded-[45px] shadow-2xl w-[92%] h-[600px] object-cover"
          />

        </div>

      </section>

    </main>
  )
}