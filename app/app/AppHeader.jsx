import Link from "next/link";

const cadastros = [
  { href: "/app/fazendas", label: "Fazendas" },
  { href: "/app/lotes", label: "Lotes/Piquetes" },
  { href: "/app/animais", label: "Animais" },
  { href: "/app/fornecedores", label: "Fornecedores" },
  { href: "/app/insumos", label: "Insumos" },
  { href: "/app/usuarios", label: "Usuários" },
];

const manejos = [
  { href: "/app/manejos/entrada", label: "Entrada" },
  { href: "/app/manejos/saida", label: "Saída" },
  { href: "/app/manejos/morte", label: "Morte" },
  { href: "/app/manejos/movimentacao", label: "Movimentação" },
];

const menuPrincipal = [
  { href: "/app/painel", label: "Painel da Fazenda", icon: "⌂" },
  { label: "Cadastros", icon: "▤", children: cadastros },
  { href: "/app/rebanho", label: "Rebanho", icon: "♘" },
  { label: "Manejos", icon: "▣", children: manejos },
  { href: "/app/nutricao", label: "Nutrição", icon: "♧" },
  { href: "/app/financeiro", label: "Financeiro", icon: "$" },
  { href: "/app/relatorios", label: "Relatórios", icon: "▥" },
  { href: "/app/configuracoes", label: "Configurações", icon: "⚙" },
];

function MenuItem({ item }) {
  if (item.children) {
    return (
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-white/90 transition hover:bg-white/10">
          <span className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 text-sm">
              {item.icon}
            </span>
            {item.label}
          </span>
          <span className="text-lg leading-none transition group-open:rotate-90">
            ›
          </span>
        </summary>

        <div className="mt-1 space-y-1 pl-12">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </details>
    );
  }

  return (
    <Link
      href={item.href}
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/90 transition hover:bg-white/10"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 text-sm">
        {item.icon}
      </span>
      {item.label}
    </Link>
  );
}

export default function AppHeader() {
  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          body:has(.pecuaria-app-frame) main {
            padding-left: 20rem;
            padding-top: 6.75rem;
          }
        }
      `}</style>

      <div className="pecuaria-app-frame">
        <aside className="fixed inset-y-0 left-0 z-[80] hidden w-72 flex-col overflow-y-auto bg-[#062b19] text-white shadow-2xl lg:flex">
          <div
            className="absolute inset-x-0 bottom-0 h-72 opacity-20"
            style={{
              backgroundImage: "url('/app-login-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          />

          <div className="relative z-10 flex min-h-full flex-col p-5">
            <Link href="/app/painel" className="mb-8 flex justify-center">
              <img
                src="/pecuaria-logo.webp"
                alt="PecuarIA"
                className="h-auto w-52 object-contain"
              />
            </Link>

            <nav className="space-y-2 text-base font-semibold">
              {menuPrincipal.map((item) => (
                <MenuItem key={item.label} item={item} />
              ))}
            </nav>

            <div className="mt-auto rounded-2xl border border-white/15 bg-white/5">
              <div className="flex items-center gap-3 border-b border-white/10 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                  JM
                </span>
                <div>
                  <p className="font-bold">PecuarIA</p>
                  <p className="text-sm text-white/70">Gestão da fazenda</p>
                </div>
              </div>

              <form action="/api/pecuaria/logout" method="post">
                <button
                  type="submit"
                  className="flex w-full items-center gap-3 px-5 py-4 text-left font-semibold text-white/90 transition hover:bg-white/10"
                >
                  <span className="text-xl">↳</span>
                  Sair
                </button>
              </form>
            </div>
          </div>
        </aside>

        <header className="fixed inset-x-0 top-0 z-[70] border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur lg:left-72">
          <div className="flex h-20 items-center justify-between gap-5 px-5 lg:px-10">
            <div className="min-w-0">
              <p className="text-lg font-bold text-[#10251b]">
                Bom dia, Juliana!
              </p>
              <p className="text-sm text-gray-500">Bem-vinda ao PecuarIA</p>
            </div>

            <label className="hidden h-12 flex-1 max-w-xl items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 text-gray-500 md:flex">
              <input
                type="search"
                placeholder="Buscar no sistema..."
                className="w-full bg-transparent outline-none"
              />
              <span className="text-xl">⌕</span>
            </label>

            <div className="flex items-center gap-4 text-[#10251b]">
              <span className="relative text-2xl">
                ♢
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">
                  3
                </span>
              </span>
              <span className="hidden font-semibold md:inline">Ajuda</span>
            </div>
          </div>
        </header>

        <div className="fixed inset-x-0 bottom-0 z-[75] border-t border-green-100 bg-white px-3 py-2 shadow-2xl lg:hidden">
          <nav className="grid grid-cols-4 gap-1 text-center text-xs font-semibold text-green-900">
            <Link href="/app/painel" className="rounded-xl px-2 py-2">
              Painel
            </Link>
            <Link href="/app/insumos" className="rounded-xl px-2 py-2">
              Insumos
            </Link>
            <Link href="/app/animais" className="rounded-xl px-2 py-2">
              Animais
            </Link>
            <Link href="/app/usuarios" className="rounded-xl px-2 py-2">
              Usuários
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
