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
  { href: "/app/painel", label: "Painel da Fazenda", icon: "PF" },
  { label: "Cadastros", icon: "CD", children: cadastros },
  { href: "/app/rebanho", label: "Rebanho", icon: "RB" },
  { label: "Manejos", icon: "MJ", children: manejos },
  { href: "/app/nutricao", label: "Nutrição", icon: "NT" },
  { href: "/app/financeiro", label: "Financeiro", icon: "$" },
  { href: "/app/relatorios", label: "Relatórios", icon: "RL" },
  { href: "/app/configuracoes", label: "Configurações", icon: "CF" },
];

const iconClass =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/14 text-[11px] font-black tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]";

function MenuItem({ item }) {
  if (item.children) {
    return (
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-2.5 text-white transition hover:bg-white/12">
          <span className="flex items-center gap-3">
            <span className={iconClass}>{item.icon}</span>
            <span className="font-bold">{item.label}</span>
          </span>
          <span className="text-2xl leading-none text-white transition group-open:rotate-90">
            ›
          </span>
        </summary>

        <div className="mt-1 space-y-0.5 pl-12">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-xl px-3 py-1.5 text-sm font-semibold text-white/78 transition hover:bg-white/12 hover:text-white"
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
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-white transition hover:bg-white/12"
    >
      <span className={iconClass}>{item.icon}</span>
      <span className="font-bold">{item.label}</span>
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
        <aside className="fixed inset-y-0 left-0 z-[80] hidden h-screen w-72 flex-col overflow-hidden bg-[#052514] text-white shadow-2xl lg:flex">
          <div
            className="absolute inset-x-0 bottom-0 h-72 opacity-18"
            style={{
              backgroundImage: "url('/app-login-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          />

          <div className="relative z-10 flex h-full flex-col p-4">
            <Link
              href="/app/painel"
              className="mb-5 flex justify-center px-1 py-2"
            >
              <img
                src="/pecuaria-logo-menu.png"
                alt="PecuarIA"
                className="h-auto w-60 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
              />
            </Link>

            <nav className="space-y-1 text-sm">
              {menuPrincipal.map((item) => (
                <MenuItem key={item.label} item={item} />
              ))}
            </nav>

            <div className="mt-auto rounded-2xl border border-white/18 bg-white/8">
              <div className="flex items-center gap-3 border-b border-white/10 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 font-bold text-white">
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
                  className="flex w-full items-center gap-3 px-4 py-3 text-left font-semibold text-white transition hover:bg-white/12"
                >
                  <span className="text-xl">S</span>
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
              <span className="text-xl font-bold">Q</span>
            </label>

            <div className="flex items-center gap-4 text-[#10251b]">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-green-50 font-bold text-green-900">
                N
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
