export default function Sobre() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">

      <section className="relative h-[70vh] max-w-6xl mx-auto rounded-b-[40px] overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
          alt="Veterinária"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Sobre
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Serviços Veterinários para Animais de Grande Porte
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-4xl font-bold text-green-900">
            Excelência Técnica no Campo
          </h2>

          <p className="mt-8 text-lg text-gray-700 leading-8">
            Dra. Juliana Moraes é médica veterinária, natural de Goiânia,
            formada em 2019 pelo Instituto Federal Goiano, e atua há mais
            de 11 anos no setor pecuário. Possui ampla experiência clínica
            em animais de produção, aliando conhecimento técnico à vivência
            prática no campo, sempre com uma atuação próxima da realidade
            do produtor rural.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            Seu trabalho é pautado em levar ciência, tecnologia e soluções
            estratégicas para a pecuária de forma acessível, atendendo desde
            grandes propriedades até pequenos produtores, com foco em resultados,
            bem-estar animal e eficiência produtiva.
          </p>
        </div>

        <div className="relative flex justify-center">
          <img
            src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/WhatsApp%20Image%202026-05-09%20at%2019.09.44.jpeg"
            alt="Dra. Juliana Moraes"
            className="rounded-3xl shadow-2xl w-[85%] h-[500px] object-cover"
          />

          <div className="absolute -bottom-6 left-10 bg-green-800 text-white p-6 rounded-2xl shadow-xl max-w-xs">
            <h3 className="text-3xl font-bold">
              + Experiência
            </h3>

            <p className="mt-2 text-green-100">
              Atuação técnica voltada à saúde animal, produtividade e resultados no campo.
            </p>
          </div>
        </div>

      </section>

    </main>
  )
}