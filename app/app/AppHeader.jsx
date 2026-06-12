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

const nutricao = [
  { href: "/app/nutricao/leitura-cocho", label: "Leitura de cocho" },
  { href: "/app/nutricao/consumo-lote", label: "Consumo" },
  { href: "/app/nutricao/dietas", label: "Dietas" },
  { href: "/app/nutricao/estoque-insumos", label: "Estoque" },
];

const menuPrincipal = [
  { href: "/app/painel", label: "Painel da Fazenda", icon: "dashboard" },
  { label: "Cadastros", icon: "clipboard", children: cadastros },
  { href: "/app/rebanho", label: "Rebanho", icon: "cow" },
  { label: "Manejos", icon: "activity", children: manejos },
  { label: "Nutrição", icon: "leaf", children: nutricao },
  { href: "/app/financeiro", label: "Financeiro", icon: "money" },
  { href: "/app/relatorios", label: "Relatórios", icon: "file" },
  { href: "/app/configuracoes", label: "Configurações", icon: "settings" },
];

const iconClass =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/14 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]";

function MenuIcon({ name }) {
  const common = {
    className: "h-[18px] w-[18px]",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "dashboard":
      return (
        <svg {...common}>
          <path d="M4 13a8 8 0 0 1 16 0" />
          <path d="M12 13l4-4" />
          <path d="M7 17h10" />
          <path d="M5 21h14" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <path d="M9 4h6" />
          <path d="M9 4a3 3 0 0 0-3 3v12h12V7a3 3 0 0 0-3-3" />
          <path d="M9 9h6" />
          <path d="M9 13h6" />
          <path d="M9 17h3" />
        </svg>
      );
    case "cow":
      return (
        <svg {...common}>
          <path d="M7 8c-2-2-4-2-5 0 1 2 3 3 5 3" />
          <path d="M17 8c2-2 4-2 5 0-1 2-3 3-5 3" />
          <path d="M8 6c1-2 7-2 8 0 2 4 1 11-4 11S6 10 8 6Z" />
          <path d="M9 17c1 3 5 3 6 0" />
          <path d="M9.5 10h.01" />
          <path d="M14.5 10h.01" />
          <path d="M10 14h4" />
          <path d="M11 14v2" />
          <path d="M13 14v2" />
        </svg>
      );
    case "activity":
      return (
        <svg {...common}>
          <path d="M4 13h4l2-6 4 10 2-6h4" />
          <path d="M5 5h14" />
          <path d="M5 21h14" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M20 4c-7 0-12 4-12 10a6 6 0 0 0 10 4c3-3 2-9 2-14Z" />
          <path d="M4 20c4-7 8-10 14-13" />
        </svg>
      );
    case "money":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v10" />
          <path d="M15 9.5c-.8-1-4-1.2-4 1 0 2 4 1.2 4 3.5 0 2.4-3.3 2.1-4.4.9" />
        </svg>
      );
    case "file":
      return (
        <svg {...common}>
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v5h4" />
          <path d="M10 12h5" />
          <path d="M10 16h5" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5l-.3 3a7 7 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.7 1l.3 3h5l.3-3a7 7 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5c.1-.3.1-.7.1-1Z" />
        </svg>
      );
    default:
      return null;
  }
}

function MenuItem({ item }) {
  if (item.children) {
    return (
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-1.5 text-white transition hover:bg-white/12">
          <span className="flex items-center gap-3">
            <span className={iconClass}>
              <MenuIcon name={item.icon} />
            </span>
            <span className="font-bold">{item.label}</span>
          </span>
          <span className="text-2xl leading-none text-white transition group-open:rotate-90">
            ›
          </span>
        </summary>

        <div className="mt-0.5 space-y-0 pl-11">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-xl px-3 py-1.5 text-sm font-semibold text-white/82 transition hover:bg-white/12 hover:text-white"
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
      className="flex items-center gap-3 rounded-xl px-3 py-1.5 text-white transition hover:bg-white/12"
    >
      <span className={iconClass}>
        <MenuIcon name={item.icon} />
      </span>
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

          <div className="relative z-10 flex h-full flex-col p-3">
            <Link
              href="/app/painel"
              className="mb-2 flex justify-center px-1 py-1"
            >
              <img
                src="/pecuaria-logo-menu.png"
                alt="PecuarIA"
                className="h-auto w-64 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
              />
            </Link>

            <nav className="space-y-0.5 text-[15px]">
              {menuPrincipal.map((item) => (
                <MenuItem key={item.label} item={item} />
              ))}
            </nav>

            <div className="mt-auto rounded-2xl border border-white/18 bg-white/8">
              <div className="flex items-center gap-3 border-b border-white/10 p-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
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
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-[15px] font-semibold text-white transition hover:bg-white/12"
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
              <p className="text-xl font-bold text-[#10251b]">
                Bom dia, Juliana!
              </p>
              <p className="text-base text-gray-500">Bem-vinda ao PecuarIA</p>
            </div>

            <label className="hidden h-12 flex-1 max-w-xl items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 text-base text-gray-500 md:flex">
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
          <nav className="grid grid-cols-4 gap-1 text-center text-sm font-semibold text-green-900">
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
