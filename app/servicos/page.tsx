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
    <main style={{ padding: '50px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '42px', marginBottom: '40px', color: '#14532d', textAlign: 'center' }}>
        Nossos Serviços
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
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
      `}</style>
    </main>
  )
}