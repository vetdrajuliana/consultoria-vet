import Link from "next/link";

const features = [
  {
    title: "Gestão de Animais",
    description: "Cadastro individual, controle do rebanho, histórico, peso, categoria e movimentações.",
    icon: "cow",
  },
  {
    title: "Lotes e Piquetes",
    description: "Organize os lotes, acompanhe onde cada grupo está e veja a lotação dos piquetes.",
    icon: "grid",
  },
  {
    title: "Nutrição e Consumo",
    description: "Planeje dietas, acompanhe tratos, consumo por lote e ajustes da leitura de cocho.",
    icon: "feed",
  },
  {
    title: "Indicadores e Relatórios",
    description: "Tenha uma visão rápida da fazenda com dados para tomar decisões no dia a dia.",
    icon: "chart",
  },
  {
    title: "Seguro e na Nuvem",
    description: "Seus dados protegidos, organizados e disponíveis para consulta quando precisar.",
    icon: "cloud",
  },
];

const resourceStats = [
  ["01", "Cadastre fazendas, piquetes, lotes, animais, pessoas e insumos."],
  ["02", "Acompanhe cada lote dentro do piquete correto, sem informação desencontrada."],
  ["03", "Transforme dados de campo em consumo, manejo e relatórios da propriedade."],
];

function FeatureIcon({ name }: { name: string }) {
  const common = {
    className: "h-11 w-11",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 48 48",
  };

  if (name === "cow") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M13 17c-5-5-9-2-9-2 1 8 6 10 10 9" />
        <path d="M35 17c5-5 9-2 9-2-1 8-6 10-10 9" />
        <path d="M14 19c0-7 4-11 10-11s10 4 10 11v9c0 8-5 14-10 14S14 36 14 28v-9Z" />
        <path d="M19 25h.1M29 25h.1M20 34c2 2 6 2 8 0" />
      </svg>
    );
  }

  if (name === "grid") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="m24 5 15 8v17L24 43 9 30V13L24 5Z" />
        <path d="M9 13l15 9 15-9M24 22v21M9 30l15-8 15 8" />
      </svg>
    );
  }

  if (name === "feed") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M15 17h18l3 23H12l3-23Z" />
        <path d="M18 17c0-5 2-8 6-8s6 3 6 8" />
        <path d="M19 29c3-3 7-3 10 0M20 35h8" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M9 40h30M13 35V23M23 35V14M33 35V8" />
        <path d="m13 20 10-9 8 7 8-12" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden="true">
      <path d="M17 35h18a8 8 0 0 0 1-16 12 12 0 0 0-23-2 9 9 0 0 0 4 18Z" />
      <path d="M24 25v8M20 29h8" />
    </svg>
  );
}

export default function RecursosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#002414] text-white">
      <section className="relative">
        <img
          src="/app-login-bg.png"
          alt="Gado em pastagem ao por do sol"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001d10]/95 via-[#002414]/94 to-[#002414]" />

        <div className="relative z-10 mx-auto max-w-[1680px] px-6 py-4 md:px-12">
          <header className="flex flex-wrap items-center justify-between gap-5">
            <Link href="/home" className="block">
              <img src="/pecuaria-logo-menu.png" alt="PecuarIA" className="h-20 w-auto md:h-24 xl:h-28" />
            </Link>

            <nav className="hidden items-center gap-9 text-lg font-semibold text-white/90 lg:flex">
              <Link href="/recursos" className="text-lime-300">Recursos</Link>
              <a href="#sobre" className="transition hover:text-lime-300">Sobre</a>
              <a href="#planos" className="transition hover:text-lime-300">Planos</a>
              <a href="#blog" className="transition hover:text-lime-300">Blog</a>
              <a href="#contato" className="transition hover:text-lime-300">Contato</a>
            </nav>

            <Link
              href="/app"
              className="rounded-xl bg-lime-500 px-7 py-3 text-lg font-bold text-white shadow-xl shadow-lime-900/30 transition hover:bg-lime-400"
            >
              Área do Cliente
            </Link>
          </header>

          <div className="grid gap-10 pb-16 pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-base font-bold uppercase tracking-[0.2em] text-lime-300">Recursos PecuarIA</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight md:text-6xl">
                Tudo o que você precisa para gerenciar a fazenda em um só lugar.
              </h1>
            </div>
            <p className="max-w-3xl text-xl leading-9 text-white/78">
              O PecuarIA organiza a rotina da propriedade, conecta cadastros importantes e prepara os dados
              para acompanhar rebanho, lotes, piquetes, nutrição e resultados com mais segurança.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-14">
        <div className="mx-auto max-w-[1680px]">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-lime-300/15 bg-white/[0.04] p-6 shadow-xl shadow-black/10"
              >
                <div className="grid h-20 w-20 place-items-center rounded-2xl border border-lime-300/25 bg-lime-300/5 text-lime-300">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-lime-100">{feature.title}</h2>
                <p className="mt-3 text-lg leading-8 text-white/72">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid overflow-hidden rounded-2xl border border-lime-300/15 bg-white/[0.035] lg:grid-cols-3">
            {resourceStats.map(([number, text]) => (
              <div key={number} className="border-lime-300/10 p-7 lg:border-r last:lg:border-r-0">
                <p className="text-4xl font-black text-lime-400">{number}</p>
                <p className="mt-4 text-lg leading-8 text-white/78">{text}</p>
              </div>
            ))}
          </div>

          <footer className="mt-12 flex flex-col gap-6 rounded-2xl border border-lime-300/15 bg-white/[0.03] p-8 text-lg text-white/80 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold">Mais tecnologia. Mais produtividade.</p>
              <p className="mt-1 text-lime-300">Melhores resultados para o seu negócio.</p>
            </div>
            <p className="text-base">© 2026 PecuarIA. Todos os direitos reservados.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
