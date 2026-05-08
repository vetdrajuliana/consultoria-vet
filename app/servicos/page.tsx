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
    <div style={{ padding: '40px' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '30px', color: '#14532d' }}>
        Serviços
      </h1>

      <p>Total de serviços: {servicos?.length}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '30px' }}>
        {servicos?.map((item) => (
          <div key={item.id ?? item.nome} style={{ borderRadius: '18px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
            <img
              src={item.imagem_url}
              alt={item.nome}
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />

            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px', color: '#14532d' }}>
                {item.nome}
              </h3>

              <p style={{ color: '#555', lineHeight: '1.6' }}>
                {item.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}