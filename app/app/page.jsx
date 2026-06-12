export const metadata = {
  title: "App | Dra. Juliana Moraes",
  description: "Area oculta do app de gestao agropecuaria.",
  robots: {
    index: false,
    follow: false,
  },
};

const cards = [
  {
    href: "/app/fazendas",
    initials: "FAZ",
    title: "Fazendas",
    description: "Cadastro e controle das propriedades atendidas.",
  },
  {
    href: "/app/animais",
    initials: "ANI",
    title: "Animais",
    description: "Cadastro e controle de animais e lotes.",
  },
  {
    href: "/app/visitas",
    initials: "VIS",
    title: "Visitas",
    description: "Relatorios tecnicos e acompanhamento.",
  },
  {
    href: "/app/relatorios",
    initials: "REL",
    title: "Relatorios",
    description: "Indicadores e resultados da fazenda.",
  },
];

export default function AppPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] text-[#1f2933]">
      <section className="bg-green-900 text-white px-6 py-10 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-200 text-lg">Gestao Rural Inteligente</p>

          <h1
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Painel da Fazenda
          </h1>

          <p className="mt-6 text-lg text-green-100 max-w-2xl leading-8">
            Controle sanitario, manejo, reproducao, visitas tecnicas e
            acompanhamento completo da propriedade.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="bg-white rounded-3xl p-8 shadow-md border border-green-100 hover:shadow-xl transition-all block"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-900 font-bold mb-5">
                {card.initials}
              </div>

              <h2 className="text-2xl font-bold text-green-900">
                {card.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {card.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
