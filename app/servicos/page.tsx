import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function Servicos() {
  const { data: servicos, error } = await supabase
    .from('servicos')
    .select('*')

  if (error) {
    return (
      <main className="min-h-screen bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-red-700">
          <h2 className="text-3xl font-bold">Erro ao carregar serviços</h2>
          <p className="mt-4">{error.message}</p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white text-[#1f2933] min-h-screen overflow-x-hidden">

      <section className="px-6 md:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-green-700 text-xl md:text-2xl font-semibold mb-6">
              Serviços Veterinários
            </p>

            <h1
              className="text-4xl md:text-6xl font-bold leading-tight text-[#1f2933]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Soluções técnicas
              <br />
              para o campo
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-9 text-gray-700 max-w-2xl">
              Atendimento especializado para animais de grande porte,
              com foco em saúde, bem-estar animal, produtividade e
              eficiência no manejo pecuário.
            </p>
          </div>

          <div className="relative flex justify-center overflow-hidden">
            <div className="absolute top-0 left-6 w-44 h-44 bg-green-200 rounded-[40px] opacity-60"></div>

            <img
              src="https://fqpswxyjssiaqpvmgngg.supabase.co/storage/v1/object/public/Servicos/WhatsApp%20Image%202026-05-10%20at%2012.50.01.jpeg"
              alt="Serviços Veterinários"
              className="relative z-10 max-w-full h-[430px] object-cover rounded-[50px] shadow-2xl"
            />
          </div>

        </div>
      </section>

      <section className="bg-white px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-green-700 text-lg font-semibold mb-3">
                Áreas de atuação
              </p>

              <h2
                className="text-4xl md:text-5xl text-green-900 font-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Serviços Veterinários
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-8 max-w-2xl">
              Passe o mouse sobre cada card para visualizar os detalhes do serviço.
              
            </p>
          </div>

          <div className="servicos-grid">
            {servicos?.map((item) => (
              <div key={item.id ?? item.nome} className="card-servico">
                <img src={item.imagem_url} alt={item.nome} />

                <div className="overlay">
                  <h3>{item.nome}</h3>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .servicos-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
        }

        .card-servico {
          position: relative;
          height: 360px;
          border-radius: 34px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 18px 40px rgba(0,0,0,0.12);
          background: #f8f8f8;
        }

        .card-servico img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.82),
            rgba(0,0,0,0.42),
            rgba(0,0,0,0.08)
          );
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px;
          transition: background 0.4s ease;
        }

        .overlay h3 {
          font-family: Georgia, serif;
          font-size: 26px;
          line-height: 1.15;
          margin-bottom: 12px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.7);
        }

        .overlay p {
          opacity: 0;
          transform: translateY(14px);
          transition: all 0.4s ease;
          line-height: 1.7;
          font-size: 15px;
          color: #f5f5f5;
          text-shadow: 0 3px 10px rgba(0,0,0,0.7);
        }

        .card-servico:hover img {
          transform: scale(1.08);
        }

        .card-servico:hover .overlay {
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.9),
            rgba(0,0,0,0.62),
            rgba(0,0,0,0.24)
          );
        }

        .card-servico:hover .overlay p {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1100px) {
          .servicos-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .servicos-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .card-servico {
            height: 330px;
            border-radius: 28px;
          }

          .overlay {
            padding: 24px;
            background: linear-gradient(
              to top,
              rgba(0,0,0,0.86),
              rgba(0,0,0,0.48),
              rgba(0,0,0,0.12)
            );
          }

          .overlay h3 {
            font-size: 24px;
          }

          .overlay p {
            opacity: 1;
            transform: translateY(0);
            font-size: 15px;
          }
        }
      `}</style>

    </main>
  )
}