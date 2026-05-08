import { supabase } from '@/lib/supabase'

export default async function Servicos() {
  const { data: servicos, error } = await supabase
    .from('serviços')
    .select('*')

  if (error) {
    return <p>Erro ao carregar serviços</p>
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        padding: '40px'
      }}
    >
      {servicos?.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
          }}
        >
          <img
            src={item.imagem_url}
            alt={item.nome}
            style={{
              width: '100%',
              height: '220px',
              objectFit: 'cover'
            }}
          />

          <div style={{ padding: '20px' }}>
            <h3
              style={{
                fontSize: '22px',
                marginBottom: '10px',
                color: '#14532d'
              }}
            >
              {item.nome}
            </h3>

            <p
              style={{
                color: '#555',
                lineHeight: '1.6'
              }}
            >
              {item.descricao}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}