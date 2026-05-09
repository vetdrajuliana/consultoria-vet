import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function Servicos() {
  const { data: servicos, error } = await supabase
    .from('servicos')
    .select('*')

  if (error) {
    return (
      <div style={{ padding: '40px', color: 'red' }}>
        <h2>Erro ao carregar serviços</h2>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <main className="servicos-page">
      <h1>Nossos Serviços</h1>

      <div className="servicos-grid">
        {servicos?.map((item) => (
          <div key={item.id ?? item.nome} className="card-servico">
            <img src={item.imagem_url} alt={item.nome} />

            <div className="overlay">
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .servicos-page {
          padding: 50px;
          background: #f5f5f5;
          min-height: 100vh;
        }

        .servicos-page h1 {
          font-size: 42px;
          margin-bottom: 40px;
          color: #14532d;
          text-align: center;
        }

        .servicos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .card-servico {
          position: relative;
          height: 350px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .card-servico img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 25px;
          transition: background 0.4s ease;
        }

        .overlay h2 {
          font-size: 26px;
          margin-bottom: 10px;
        }

        .overlay p {
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.4s ease;
          line-height: 1.6;
        }

        .card-servico:hover img {
          transform: scale(1.08);
        }

        .card-servico:hover .overlay {
          background: rgba(0,0,0,0.78);
        }

        .card-servico:hover .overlay p {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .servicos-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .servicos-page {
            padding: 25px 18px;
          }

          .servicos-page h1 {
            font-size: 32px;
            margin-bottom: 25px;
          }

          .servicos-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .card-servico {
            height: 300px;
            border-radius: 18px;
          }

          .overlay {
            background: rgba(0,0,0,0.65);
            padding: 22px;
          }

          .overlay h2 {
            font-size: 23px;
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