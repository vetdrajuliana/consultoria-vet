import Link from "next/link";
import AppHeader from "../AppHeader";

export const metadata = {
  title: "Painel da Fazenda | Dra. Juliana Moraes",
  description: "Painel interno do app de gestao agropecuaria.",
  robots: {
    index: false,
    follow: false,
  },
};

const cards = [
  {
    href: "/app/fazendas",
    icon: "farm",
    title: "Fazendas",
    description: "Cadastro e controle das propriedades atendidas.",
  },
  {
    href: "/app/animais",
    icon: "cow",
    title: "Animais",
    description: "Cadastro e controle de animais e lotes.",
  },
  {
    href: "/app/usuarios",
    icon: "users",
    title: "Usuários",
    description: "Clientes, proprietários, funcionários e acessos.",
  },
];

function QuickAccessIcon({ name }) {
  const common = {
    className: "h-10 w-10 lg:h-8 lg:w-8",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "farm":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V10l7-5 7 5v11" />
          <path d="M9 21v-6h6v6" />
          <path d="M9 11h6" />
          <path d="M4 13h16" />
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
    case "users":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20a6 6 0 0 1 12 0" />
          <path d="M5 10a2.5 2.5 0 0 0 0 5" />
          <path d="M19 10a2.5 2.5 0 0 1 0 5" />
          <path d="M2 20a4 4 0 0 1 5-3.8" />
          <path d="M22 20a4 4 0 0 0-5-3.8" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PainelPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f6] px-5 pb-20 text-[#10251b] lg:h-screen lg:min-h-0 lg:overflow-hidden lg:px-10 lg:pb-6">
      <AppHeader />

      <section
        className="relative overflow-hidden rounded-3xl px-8 py-14 text-white shadow-lg lg:px-12 lg:py-8"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(3,44,24,0.98) 0%, rgba(3,44,24,0.82) 42%, rgba(3,44,24,0.12) 100%), url('/app-login-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl">
          <p className="text-xl font-semibold text-green-200">
            Gestão Agropecuária Inteligente
          </p>

          <h1
            className="mt-5 text-5xl font-bold leading-tight md:text-6xl lg:mt-3 lg:text-5xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Painel da Fazenda
          </h1>

          <p className="mt-6 text-xl leading-8 text-white/90 lg:mt-4 lg:max-w-2xl lg:leading-8">
            Controle sanitário, manejo, reprodução, visitas técnicas e
            acompanhamento completo da propriedade.
          </p>
        </div>
      </section>

      <section className="mt-10 lg:mt-6">
        <div className="mb-6 flex items-center justify-between lg:mb-4">
          <h2 className="text-3xl font-bold text-[#10251b]">Acesso rápido</h2>

          <button className="rounded-xl border border-green-100 bg-white px-4 py-3 text-base font-semibold text-green-900 shadow-sm">
            Personalizar
          </button>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-green-50 bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl lg:p-5"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-800 transition group-hover:bg-green-200 lg:h-14 lg:w-14">
                <QuickAccessIcon name={card.icon} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#10251b] lg:mt-4 lg:text-2xl">
                {card.title}
              </h3>

              <p className="mx-auto mt-4 max-w-xs text-lg leading-7 text-gray-600 lg:mt-2 lg:text-base lg:leading-6">
                {card.description}
              </p>

              <span className="mt-7 inline-flex w-full max-w-56 items-center justify-center gap-3 rounded-xl bg-green-50 px-5 py-3 text-lg font-semibold text-green-900 lg:mt-4 lg:py-2 lg:text-base">
                Acessar <span>›</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6 text-base text-gray-500 lg:mt-5 lg:pt-4">
        <p>© 2026 PecuarIA. Todos os direitos reservados.</p>
        <p>Versão 1.0.0</p>
      </footer>
    </main>
  );
}
