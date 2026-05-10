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

      <section className="bg-white px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-green-700 text-lg font-semibold mb-3">
              Áreas de atuação
            </p>

            <h1
              className="text-4xl md:text-5xl text-green-900 font-light"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Nossos Serviços
            </h1>
          </div>

          <div className="servicos-grid">
            {servicos?.map((item) => (
              <div key={item.id ?? item.nome} className="card-servico">

                <div className="imagem-box">
                  <img src={item.imagem_url} alt={item.nome} />

                  <div className="fade-descricao">
                    <p>{item.descricao}</p>
                  </div>
                </div>

                <div className="titulo-box">
                  <h3>{item.nome}</h3>
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
          gap: 30px;
        }

        .card-servico {
          background: #ffffff;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 14px 34px rgba(0,0,0,0.10);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .card-servico:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 46px rgba(0,0,0,0.14);
        }

        .imagem-box {
          position: relative;
          height: 280px;
          overflow: hidden;
          border-radius: 30px 30px 0 0;
        }

        .imagem-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .card-servico:hover .imagem-box img {
          transform: scale(1.06);
        }

        .fade-descricao {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20, 83, 45, 0.92),
            rgba(20, 83, 45, 0.72),
            rgba(20, 83, 45, 0.30)
          );
          color: white;
          display: flex;
          align-items: flex-end;
          padding: 26px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card-servico:hover .fade-descricao {
          opacity: 1;
        }

        .fade-descricao p {
          line-height: 1.7;
          font-size: 15px;
          text-shadow: 0 3px 10px rgba(0,0,0,0.35);
        }

        .titulo-box {
          padding: 22px 24px 26px;
          background: #fff;
        }

        .titulo-box h3 {
          font-family: Georgia, serif;
          color: #14532d;
          font-size: 24px;
          line-height: 1.2;
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

          .imagem-box {
            height: 300px;
          }

          .fade-descricao {
            opacity: 1;
            background: linear-gradient(
              to top,
              rgba(20, 83, 45, 0.88),
              rgba(20, 83, 45, 0.55),
              rgba(20, 83, 45, 0.10)
            );
          }

          .titulo-box h3 {
            font-size: 23px;
          }
        }
      `}</style>

    </main>
  )
}