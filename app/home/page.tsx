import Link from "next/link";

const features = [
  {
    title: "Gestao de Animais",
    description: "Controle completo do rebanho, nascimento, peso, sanidade e muito mais.",
    icon: "cow",
  },
  {
    title: "Lotes e Piquetes",
    description: "Organize lotes, piquetes e localizacoes de forma simples e eficiente.",
    icon: "grid",
  },
  {
    title: "Nutricao e Consumo",
    description: "Acompanhe o consumo de alimentos e otimize sua dieta para melhores resultados.",
    icon: "feed",
  },
  {
    title: "Indicadores e Relatorios",
    description: "Relatorios completos com indicadores para decisoes do dia a dia.",
    icon: "chart",
  },
  {
    title: "Seguro e na Nuvem",
    description: "Seus dados protegidos e disponiveis de qualquer lugar, a qualquer hora.",
    icon: "cloud",
  },
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

function DashboardMock() {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="rounded-t-[26px] border border-white/15 bg-[#171717] p-2 shadow-2xl shadow-black/70">
        <div className="overflow-hidden rounded-t-[20px] bg-[#f7f8f6] text-[#10251b]">
          <div className="grid min-h-[350px] grid-cols-[170px_1fr]">
            <aside className="relative overflow-hidden bg-[#052514] p-3 text-white">
              <div
                className="absolute inset-x-0 bottom-0 h-52 opacity-20"
                style={{
                  backgroundImage: "url('/app-login-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                }}
              />
              <div className="relative z-10 mb-4 flex justify-center">
                <img src="/pecuaria-logo-menu.png" alt="PecuarIA" className="h-16 w-auto" />
              </div>

              {["Painel da Fazenda", "Cadastros", "Rebanho", "Manejos", "Nutricao", "Relatorios"].map((item, index) => (
                <div
                  key={item}
                  className={`relative z-10 mb-1 rounded-xl px-3 py-2 text-[12px] font-bold ${
                    index === 0 ? "bg-white/14 text-white" : "text-white/82"
                  }`}
                >
                  {item}
                </div>
              ))}
            </aside>

            <section className="p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-bold">Bom dia, Pecuarista!</p>
                  <p className="text-sm text-gray-500">Bem-vinda ao PecuarIA</p>
                </div>
                <div className="hidden flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 xl:block">
                  Buscar no sistema...
                </div>
                <span className="rounded-full bg-green-50 px-3 py-2 text-xs font-bold text-green-900">
                  Fazenda Boa Vista
                </span>
              </div>

              <div
                className="mb-3 overflow-hidden rounded-2xl px-5 py-4 text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(3,44,24,0.98) 0%, rgba(3,44,24,0.78) 48%, rgba(3,44,24,0.2) 100%), url('/app-login-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-sm font-semibold text-green-200">Gestao Agropecuaria Inteligente</p>
                <h2 className="mt-1 text-2xl font-bold">Painel da Fazenda</h2>
                <p className="mt-2 max-w-lg text-sm leading-5 text-white/90">
                  Controle completo da propriedade, com indicadores simples para o dia a dia.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Fazendas", "Cadastro das propriedades"],
                  ["Animais", "Controle do rebanho"],
                  ["Lotes", "Piquetes e movimentacoes"],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-green-50 bg-white p-3 text-center shadow-md">
                    <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-green-100" />
                    <p className="text-base font-bold text-[#10251b]">{title}</p>
                    <p className="mt-1 text-xs leading-4 text-gray-600">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-[1fr_1.2fr] gap-3">
                <div className="rounded-2xl border border-green-50 bg-white p-3 shadow-md">
                  <p className="text-base font-bold">Consumo por lote</p>
                  <p className="mt-1 text-sm text-gray-600">Tratos, MS e MN.</p>
                  <div className="mt-2 grid h-20 w-20 place-items-center rounded-full border-[10px] border-green-500 text-lg font-black text-green-900">
                    72%
                  </div>
                </div>
                <div className="rounded-2xl border border-green-50 bg-white p-3 shadow-md">
                  <p className="text-base font-bold">Evolucao do resultado</p>
                  <div className="mt-2 flex h-20 items-end gap-2">
                    {[28, 35, 42, 48, 57, 54, 64, 70, 76, 88].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t bg-green-500" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="mx-auto h-4 w-[88%] rounded-b-[70px] bg-gradient-to-b from-[#2b2b2b] to-[#0b0b0b]" />
    </div>
  );
}

export default function AppPecuariaHome() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#002414] text-white">
      <section className="relative min-h-screen">
        <img
          src="/app-login-bg.png"
          alt="Gado em pastagem ao por do sol"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001d10] via-[#001d10]/90 to-[#001d10]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002414] via-transparent to-black/25" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1680px] flex-col px-6 py-4 md:px-12">
          <header className="flex flex-wrap items-center justify-between gap-5">
            <Link href="/home" className="block">
              <img src="/pecuaria-logo-menu.png" alt="PecuarIA" className="h-20 w-auto md:h-24 xl:h-28" />
            </Link>

            <nav className="hidden items-center gap-9 text-lg font-semibold text-white/90 lg:flex">
              <a href="#recursos" className="transition hover:text-lime-300">Recursos</a>
              <a href="#sobre" className="transition hover:text-lime-300">Sobre</a>
              <a href="#planos" className="transition hover:text-lime-300">Planos</a>
              <a href="#blog" className="transition hover:text-lime-300">Blog</a>
              <a href="#contato" className="transition hover:text-lime-300">Contato</a>
            </nav>

            <div className="rounded-full border border-lime-300/25 bg-white/5 px-5 py-3 text-base font-semibold text-lime-50 backdrop-blur">
              Seguro. Confiavel. Feito para pecuaristas.
            </div>
          </header>

          <div className="grid flex-1 items-center gap-8 py-2 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-full border border-lime-300/25 bg-white/5 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-lime-300 md:text-base">
                Tecnologia que gera resultados
              </div>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-[4rem] xl:text-[4.35rem]">
                Gestao completa da sua fazenda,
                <span className="block text-lime-400">na palma da mao.</span>
              </h1>

              <p className="mt-4 max-w-xl text-xl leading-8 text-white/85">
                Acompanhe animais, lotes, consumo, nutricao e resultados em tempo real
                e tome decisoes mais inteligentes para o sucesso da sua producao.
              </p>

              <p className="mt-4 text-lg text-white/75">Acesso seguro e seus dados protegidos</p>
            </div>

            <div className="relative">
              <div className="mb-5 flex justify-center lg:justify-end">
                <Link
                  href="/app"
                  className="flex items-center justify-center gap-5 rounded-xl bg-lime-500 px-9 py-4 text-xl font-bold text-white shadow-xl shadow-lime-900/30 transition hover:bg-lime-400"
                >
                  Area do Cliente
                  <span className="text-base font-semibold text-white/80">Acesse sua conta</span>
                </Link>
              </div>
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      <section id="recursos" className="relative z-10 border-t border-lime-300/10 bg-[#002414] px-6 pb-14 md:px-14">
        <div className="mx-auto max-w-[1780px]">
          <h2 className="pt-6 text-center text-3xl font-semibold md:text-4xl">
            Tudo o que voce precisa em um so lugar
          </h2>
          <div className="mx-auto mt-3 h-px w-12 bg-lime-400" />

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-5">
                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl border border-lime-300/25 text-lime-300">
                  <FeatureIcon name={feature.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-lime-200">{feature.title}</h3>
                  <p className="mt-2 text-base leading-7 text-white/75">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <footer className="mt-12 flex flex-col gap-6 rounded-2xl border border-lime-300/15 bg-white/[0.03] p-8 text-lg text-white/80 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold">Mais tecnologia. Mais produtividade.</p>
              <p className="mt-1 text-lime-300">Melhores resultados para o seu negocio.</p>
            </div>
            <p className="text-base">© 2026 PecuarIA. Todos os direitos reservados.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
