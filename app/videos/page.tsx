export default function Videos() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">

      <section className="px-6 md:px-16 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">

            <p className="text-green-700 text-lg font-semibold mb-3">
              Conteúdo Técnico
            </p>

            <h1
              className="text-4xl md:text-5xl text-green-900 font-light"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Vídeos e Conteúdos
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-9 text-gray-700 max-w-3xl">
              Acompanhe vídeos, orientações técnicas, resultados de campo
              e conteúdos voltados à saúde e produtividade animal.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#f8f8f8] rounded-[30px] overflow-hidden shadow-lg">

              <div className="relative w-full overflow-hidden rounded-t-[30px] bg-black flex justify-center">

  <iframe
    src="https://www.instagram.com/reel/DTObmf5jl7u/embed"
    className="w-full max-w-[380px] h-[680px]"
    allowTransparency={true}
  ></iframe>

</div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}