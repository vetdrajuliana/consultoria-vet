import Link from "next/link";

const cadastros = [
  { href: "/app/fazendas", label: "Fazendas" },
  { href: "/app/lotes", label: "Lotes/Piquetes" },
  { href: "/app/animais", label: "Animais" },
  { href: "/app/fornecedores", label: "Fornecedores" },
  { href: "/app/insumos", label: "Insumos" },
  { href: "/app/usuarios", label: "Usuários" },
];

const linkClass =
  "text-green-900 hover:text-green-700 font-medium transition-all";

export default function AppHeader() {
  return (
    <header className="bg-white border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/app/painel"
          className="text-2xl font-bold text-green-900"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Gestao Agropecuaria
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/app/painel" className={linkClass}>
            Inicio
          </Link>

          <div className="relative group">
            <button type="button" className={`${linkClass} py-2`}>
              Cadastros
            </button>

            <div className="absolute left-0 top-full hidden pt-2 group-hover:block group-focus-within:block z-50">
              <div className="bg-white shadow-lg rounded-2xl border border-green-100 min-w-[220px] overflow-hidden">
                {cadastros.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-3 text-green-900 hover:bg-green-50 transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/app/rebanho" className={linkClass}>
            Rebanho
          </Link>

          <Link href="/app/nutricao" className={linkClass}>
            Nutricao
          </Link>

          <Link href="/app/financeiro" className={linkClass}>
            Financeiro
          </Link>

          <Link href="/app/relatorios" className={linkClass}>
            Relatorios
          </Link>
        </nav>
      </div>
    </header>
  );
}
