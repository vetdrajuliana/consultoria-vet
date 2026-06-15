import Link from "next/link";

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
                <p className="text-sm font-semibold text-green-200">Gestão Agropecuária Inteligente</p>
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
              <Link href="/recursos" className="transition hover:text-lime-300">Recursos</Link>
              <Link href="/sobre" className="transition hover:text-lime-300">Sobre</Link>
              <a href="#planos" className="transition hover:text-lime-300">Planos</a>
              <a href="#blog" className="transition hover:text-lime-300">Blog</a>
              <Link href="/contato" className="transition hover:text-lime-300">Contato</Link>
            </nav>

            <div className="rounded-full border border-lime-300/25 bg-white/5 px-5 py-3 text-base font-semibold text-lime-50 backdrop-blur">
              Seguro. Confiavel. Feito para pecuaristas.
            </div>
          </header>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="inline-flex w-fit rounded-full border border-lime-300/25 bg-white/5 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-lime-300 md:text-base">
              Tecnologia que gera resultados
            </div>

            <Link
              href="/app"
              className="flex w-fit items-center justify-center gap-5 rounded-xl bg-lime-500 px-8 py-3.5 text-xl font-bold text-white shadow-xl shadow-lime-900/30 transition hover:bg-lime-400 lg:ml-auto"
            >
              Área do Cliente
              <span className="text-base font-semibold text-white/80">Acesse sua conta</span>
            </Link>
          </div>

          <div className="grid flex-1 items-center gap-8 py-2 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="-mt-4 max-w-2xl lg:-mt-6">
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-[4rem] xl:text-[4.35rem]">
                Gestão completa da sua fazenda,
                <span className="block text-lime-400">na palma da mão.</span>
              </h1>

              <p className="mt-4 max-w-xl text-xl leading-8 text-white/85">
                Acompanhe animais, lotes, consumo, nutricao e resultados em tempo real
                e tome decisoes mais inteligentes para o sucesso da sua producao.
              </p>

              <p className="mt-4 text-lg text-white/75">Acesso seguro e seus dados protegidos</p>
            </div>

            <div className="relative">
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
