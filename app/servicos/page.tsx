import { supabase } from '../../lib/supabase'

export default async function Servicos() {
  const { data: servicos, error } = await supabase
    .from('servicos')
    .select('*')

  if (error) {
    return <p>Erro ao carregar serviços</p>
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      {servicos?.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden' }}>
          
          <img 
            src={item.imagem_url} 
            alt={item.nome} 
            style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
          />

          <div style={{ padding: '10px' }}>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
          </div>

        </div>
      ))}
    </div>
  )
}