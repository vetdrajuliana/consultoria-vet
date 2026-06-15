import Link from "next/link";

const pillars = [
  {
    title: "Dados organizados",
    description:
      "Cadastros, lotes, animais e manejos em um lugar simples de consultar.",
  },
  {
    title: "Decisao no campo",
    description:
      "Indicadores claros para acompanhar consumo, rebanho e resultado da fazenda.",
  },
  {
    title: "Uso seguro",
    description:
      "Acesso direto ao app, com rotina pensada para o trabalho real da propriedade.",
  },
];

export default function Sobre() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#002414] text-white">
      <section className="relative min-h-screen">
        <img
          src="/app-login-bg.png"
          alt="Gado em pastagem ao por do sol"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001d10] via-[#001d10]/92 to-[#001d10]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002414] via-transparent to-black/25" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1680px] flex-col px-6 py-3 md:px-12">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="block">
              <img
                src="/pecuaria-logo-menu.png"
                alt="PecuarIA"
                className="h-14 w-auto md:h-16 xl:h-20"
              />
            </Link>

            <nav className="hidden items-center gap-8 text-base font-semibold text-white/90 lg:flex">
              <Link href="/recursos" className="transition hover:text-lime-300">
                Recursos
              </Link>
              <Link href="/sobre" className="text-lime-300">
                Sobre
              </Link>
              <a href="#planos" className="transition hover:text-lime-300">
                Planos
              </a>
              <a href="#blog" className="transition hover:text-lime-300">
                Blog
              </a>
              <Link href="/contato" className="transition hover:text-lime-300">
                Contato
              </Link>
            </nav>

            <Link
              href="/app"
              className="rounded-xl bg-lime-500 px-6 py-3 text-base font-bold text-white shadow-xl shadow-lime-900/30 transition hover:bg-lime-400"
            >
              Area do Cliente
            </Link>
          </header>

          <div className="grid flex-1 gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
                Sobre
              </p>

              <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl xl:text-[3.55rem]">
                Tecnologia para transformar a gestao da sua fazenda.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78 xl:text-xl">
                O PecuarIA nasceu para facilitar a rotina do pecuarista,
                reunindo informacoes da propriedade em uma plataforma visual,
                pratica e preparada para decisoes mais inteligentes.
              </p>
            </div>

            <div className="rounded-2xl border border-lime-300/15 bg-white/[0.05] p-5 shadow-2xl shadow-black/25 backdrop-blur">
              <div className="grid gap-4">
                {pillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="rounded-2xl border border-lime-300/15 bg-[#002414]/70 p-5"
                  >
                    <p className="text-xl font-bold text-lime-100">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/72">
                      {pillar.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/app"
                  className="rounded-xl bg-lime-500 px-6 py-3 text-center text-base font-bold text-white transition hover:bg-lime-400"
                >
                  Acessar aplicativo
                </Link>
                <Link
                  href="/contato"
                  className="rounded-xl border border-lime-300/30 px-6 py-3 text-center text-base font-bold text-lime-100 transition hover:border-lime-300/70"
                >
                  Falar com a equipe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
