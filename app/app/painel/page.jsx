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
    icon: "⌂",
    title: "Fazendas",
    description: "Cadastro e controle das propriedades atendidas.",
  },
  {
    href: "/app/animais",
    icon: "♘",
    title: "Animais",
    description: "Cadastro e controle de animais e lotes.",
  },
  {
    href: "/app/usuarios",
    icon: "☷",
    title: "Usuários",
    description: "Clientes, proprietários, funcionários e acessos.",
  },
];

export default function PainelPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f6] px-5 pb-20 text-[#10251b] lg:px-10">
      <AppHeader />

      <section
        className="relative overflow-hidden rounded-3xl px-8 py-14 text-white shadow-lg lg:px-12"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(3,44,24,0.98) 0%, rgba(3,44,24,0.82) 42%, rgba(3,44,24,0.12) 100%), url('/app-login-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl">
          <p className="text-lg font-semibold text-green-200">
            Gestão Agropecuária Inteligente
          </p>

          <h1
            className="mt-5 text-5xl font-bold leading-tight md:text-6xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Painel da Fazenda
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/90">
            Controle sanitário, manejo, reprodução, visitas técnicas e
            acompanhamento completo da propriedade.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#10251b]">Acesso rápido</h2>

          <button className="rounded-xl border border-green-100 bg-white px-4 py-3 text-sm font-semibold text-green-900 shadow-sm">
            Personalizar
          </button>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-green-50 bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-800 transition group-hover:bg-green-200">
                {card.icon}
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#10251b]">
                {card.title}
              </h3>

              <p className="mx-auto mt-4 max-w-xs leading-7 text-gray-600">
                {card.description}
              </p>

              <span className="mt-7 inline-flex w-full max-w-56 items-center justify-center gap-3 rounded-xl bg-green-50 px-5 py-3 font-semibold text-green-900">
                Acessar <span>›</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6 text-sm text-gray-500">
        <p>© 2026 PecuarIA. Todos os direitos reservados.</p>
        <p>Versão 1.0.0</p>
      </footer>
    </main>
  );
}
