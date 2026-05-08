import { supabase } from '@/lib/supabase'

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
      <h1>Página de Serviços</h1>
      <p>Total de serviços encontrados: {servicos?.length}</p>

      <pre>{JSON.stringify(servicos, null, 2)}</pre>
    </div>
  )
}