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
      <h1
        style={{
          fontSize: '42px',
          marginBottom: '40px',
          color: '#14532d',
          textAlign: 'center'
        }}
      >
        Nossos Serviços
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '25px'
        }}
      >
        {servicos?.map((item) => (
          <div
            key={item.id ?? item.nome}
            className="card-servico"
            style={{
              position: 'relative',
              height: '350px',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <img
              src={item.imagem_url}
              alt={item.nome}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            <div
              className="overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.55)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '25px',
                transition: '0.4s'
              }}
            >
              <h2
                style={{
                  color: '#fff',
                  fontSize: '26px',
                  marginBottom: '10px'
                }}
              >
                {item.nome}
              </h2>

              <p
                className="descricao"
                style={{
                  color: '#fff',
                  lineHeight: '1.6',
                  opacity: 0,
                  transform: 'translateY(10px)',
                  transition: '0.4s'
                }}
              >
                {item.descricao}
              </p>
            </div>

            <style jsx>{`
              .card-servico:hover .overlay {
                background: rgba(0, 0, 0, 0.75);
              }

              .card-servico:hover .descricao {
                opacity: 1;
                transform: translateY(0);
              }
            `}</style>
          </div>
        ))}
      </div>
    </main>
  )
}