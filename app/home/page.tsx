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
  if (name === "cow") {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <path d="M13 17c-5-5-9-2-9-2 1 8 6 10 10 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 17c5-5 9-2 9-2-1 8-6 10-10 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 19c0-7 4-11 10-11s10 4 10 11v9c0 8-5 14-10 14S14 36 14 28v-9Z" stroke="currentColor" strokeWidth="2" />
        <path d="M19 25h.1M29 25h.1M20 34c2 2 6 2 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "grid") {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <path d="m24 5 15 8v17L24 43 9 30V13L24 5Z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 13l15 9 15-9M24 22v21M9 30l15-8 15 8" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "feed") {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <path d="M15 17h18l3 23H12l3-23Z" stroke="currentColor" strokeWidth="2" />
        <path d="M18 17c0-5 2-8 6-8s6 3 6 8" stroke="currentColor" strokeWidth="2" />
        <path d="M19 29c3-3 7-3 10 0M20 35h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <path d="M9 40h30M13 35V23M23 35V14M33 35V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="m13 20 10-9 8 7 8-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
      <path d="M17 35h18a8 8 0 0 0 1-16 12 12 0 0 0-23-2 9 9 0 0 0 4 18Z" stroke="currentColor" strokeWidth="2" />
      <path d="M24 25v8M20 29h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DashboardMock() {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="absolute -right-2 top-24 hidden w-[170px] rounded-[28px] border border-lime-300/25 bg-[#061d12] p-3 shadow-2xl shadow-black/70 md:block">
        <div className="mb-3 flex items-center justify-between text-[9px] text-white/80">
          <span>9:41</span>
          <span>● ● ●</span>
        </div>
        <div className="rounded-[22px] bg-[#092719] p-4 text-white">
          <p className="text-sm font-bold">Ola, Pecuarista!</p>
          <p className="mt-1 text-[10px] text-white/60">Bem-vindo de volta</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {["1.248", "32", "R$45k", "R$87k"].map((item) => (
              <div key={item} className="rounded-xl bg-lime-300/10 p-2">
                <p className="text-sm font-bold text-lime-200">{item}</p>
                <p className="text-[9px] text-white/55">Resumo</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-full border-[10px] border-lime-400/80 p-5 text-center text-xl font-bold">
            72%
          </div>
          <div className="mt-4 space-y-2 text-[10px] text-white/70">
            <p>Entrada de animais no lote 05</p>
            <p>Consumo atualizado</p>
            <p>Vacinacao registrada</p>
          </div>
        </div>
      </div>

      <div className="rounded-t-[28px] border border-white/15 bg-[#111] p-3 shadow-2xl shadow-black/70">
        <div className="rounded-t-[20px] bg-[#03190f] p-5">
          <div className="grid gap-4 lg:grid-cols-[150px_1fr]">
            <aside className="rounded-2xl bg-black/20 p-4 text-xs text-white/65">
              <div className="mb-6 flex items-center gap-2">
                <img src="/pecuaria-logo-menu.png" alt="PecuarIA" className="h-8 w-auto" />
              </div>
              {["Inicio", "Animais", "Lotes", "Pastagens", "Nutricao", "Relatorios"].map((item, index) => (
                <div
                  key={item}
                  className={`mb-2 rounded-lg px-3 py-2 ${index === 0 ? "bg-lime-400/15 text-lime-200" : ""}`}
                >
                  {item}
                </div>
              ))}
            </aside>

            <section className="text-white">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">Resumo da Fazenda</h2>
                <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/70">
                  Fazenda Boa Vista
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {["1.248 Animais", "32 Lotes", "R$ 45.780 Custo", "R$ 87.560 Resultado"].map((item) => (
                  <div key={item} className="rounded-2xl bg-lime-300/10 p-4">
                    <p className="text-xl font-bold text-white">{item.split(" ")[0]}</p>
                    <p className="mt-1 text-xs text-white/60">{item.replace(item.split(" ")[0], "")}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_1.2fr]">
                <div className="rounded-2xl bg-lime-300/10 p-4">
                  <p className="mb-4 text-sm font-semibold">Consumo de Alimentos</p>
                  <div className="flex items-center gap-4">
                    <div className="grid h-28 w-28 place-items-center rounded-full border-[14px] border-lime-400 text-2xl font-bold">
                      72%
                    </div>
                    <div className="text-sm text-white/70">
                      <p><strong className="text-white">12.580 kg</strong> consumido</p>
                      <p className="mt-3"><strong className="text-white">17.500 kg</strong> previsto</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-lime-300/10 p-4">
                  <p className="mb-4 text-sm font-semibold">Evolucao do Resultado</p>
                  <div className="flex h-32 items-end gap-2">
                    {[28, 35, 42, 48, 57, 54, 64, 70, 76, 88].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t bg-lime-400/80" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="mx-auto h-4 w-[88%] rounded-b-[60px] bg-gradient-to-b from-[#2b2b2b] to-[#0b0b0b]" />
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

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1720px] flex-col px-6 py-8 md:px-14">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <Link href="/home" className="block">
              <img src="/pecuaria-logo-menu.png" alt="PecuarIA" className="h-16 w-auto md:h-20" />
            </Link>

            <nav className="hidden items-center gap-10 text-base font-medium text-white/90 lg:flex">
              <a href="#recursos" className="transition hover:text-lime-300">Recursos</a>
              <a href="#sobre" className="transition hover:text-lime-300">Sobre</a>
              <a href="#planos" className="transition hover:text-lime-300">Planos</a>
              <a href="#blog" className="transition hover:text-lime-300">Blog</a>
              <a href="#contato" className="transition hover:text-lime-300">Contato</a>
            </nav>

            <div className="rounded-full border border-lime-300/25 bg-white/5 px-5 py-3 text-sm text-lime-50 backdrop-blur">
              Seguro. Confiavel. Feito para pecuaristas.
            </div>
          </header>

          <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <div className="mb-8 inline-flex rounded-full border border-lime-300/25 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-lime-300">
                Tecnologia que gera resultados
              </div>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Gestao completa da sua fazenda,
                <span className="block text-lime-400">na palma da mao.</span>
              </h1>

              <p className="mt-7 max-w-xl text-xl leading-8 text-white/82">
                Acompanhe animais, lotes, consumo, nutricao e resultados em tempo real
                e tome decisoes mais inteligentes para o sucesso da sua producao.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/app"
                  className="flex items-center justify-center gap-4 rounded-xl bg-lime-500 px-8 py-5 text-lg font-bold text-white shadow-xl shadow-lime-900/30 transition hover:bg-lime-400"
                >
                  Area do Cliente
                  <span className="text-sm font-medium text-white/80">Acesse sua conta</span>
                </Link>

                <Link
                  href="/app"
                  className="flex items-center justify-center gap-4 rounded-xl border border-lime-300/50 bg-black/20 px-8 py-5 text-lg font-bold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Acessar o App
                  <span className="text-sm font-medium text-white/70">Abrir aplicativo</span>
                </Link>
              </div>

              <p className="mt-7 text-sm text-white/70">Acesso seguro e seus dados protegidos</p>
            </div>

            <div className="relative">
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      <section id="recursos" className="relative z-10 border-t border-lime-300/10 bg-[#002414] px-6 pb-14 md:px-14">
        <div className="mx-auto max-w-[1720px]">
          <h2 className="pt-4 text-center text-2xl font-semibold md:text-3xl">
            Tudo o que voce precisa em um so lugar
          </h2>
          <div className="mx-auto mt-3 h-px w-12 bg-lime-400" />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-lime-300/25 text-lime-300">
                  <FeatureIcon name={feature.icon} />
                </div>
                <div>
                  <h3 className="font-bold text-lime-200">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/72">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <footer className="mt-10 flex flex-col gap-6 rounded-2xl border border-lime-300/15 bg-white/[0.03] p-7 text-white/80 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold">Mais tecnologia. Mais produtividade.</p>
              <p className="mt-1 text-lime-300">Melhores resultados para o seu negocio.</p>
            </div>
            <p className="text-sm">© 2026 PecuarIA. Todos os direitos reservados.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
