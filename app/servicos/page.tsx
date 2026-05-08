import { supabase } from '@/lib/supabase'

export default async function Servicos() {
  const { data, error } = await supabase
    .from('servicos')
    .select('*')

  return (
    <div style={{ padding: '40px' }}>
      <h1>Teste Supabase</h1>

      <pre>
        {JSON.stringify({ data, error }, null, 2)}
      </pre>
    </div>
  )
}