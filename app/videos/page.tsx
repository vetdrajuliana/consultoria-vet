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

              <video
                controls
                playsInline
                className="w-full aspect-[9/16] object-cover bg-black"
              >
                <source
                  src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/SaveClip.App_AQNFSKD3PFMBik8W23yhsCmMYQbJuA83AwUngQFF7fEKnnxtHXcqTlzDIy0RgNYlE8sjJyUbPomRMl_KKFD8080y.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="p-8">
                <h2 className="text-2xl text-green-900 font-bold">
                  Termos Técnicos Veterinários x Termos Utilizados no Campo
                </h2>

                <p className="mt-4 text-gray-700 leading-8">
                  Vocês conhecem algum desses termos?
                </p>
              </div>

            </div>
<div className="bg-[#f8f8f8] rounded-[30px] overflow-hidden shadow-lg">

              <video
                controls
                playsInline
                className="w-full aspect-[9/16] object-cover bg-black"
              >
                <source
                  src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/SaveClip.App_AQNTX8AftY37eZs1LdNaHKGOAvvgza4sik4PSPdIv0zgqASRVozC6Y-apnhdcPGQQloMbv6O1i4d9R80GiYx5kKjTorsWL3oLAKSEqQ.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="p-8">
                <h2 className="text-2xl text-green-900 font-bold">
                 Como identificar um bovino doente?
                </h2>

                <p className="mt-4 text-gray-700 leading-8">
                  Dicas práticas de como identificar se seu animal apresenta alguma doença!
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}