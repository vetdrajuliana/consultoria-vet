import Link from "next/link";

const contactCards = [
  {
    title: "Atendimento pelo WhatsApp",
    description: "Fale diretamente para tirar dúvidas, pedir suporte ou conversar sobre o PecuarIA.",
    value: "(62) 99857-7635",
    href: "https://wa.me/5562998577635",
  },
  {
    title: "Área do Cliente",
    description: "Acesse sua conta para entrar no aplicativo e acompanhar sua fazenda.",
    value: "Abrir aplicativo",
    href: "/app",
  },
  {
    title: "Implantação do sistema",
    description: "Organize os cadastros iniciais e comece a usar a gestão da propriedade com segurança.",
    value: "Solicitar orientação",
    href: "https://wa.me/5562998577635?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20PecuarIA.",
  },
];

export default function ContatoPage() {
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

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1680px] flex-col px-6 py-4 md:px-12">
          <header className="flex flex-wrap items-center justify-between gap-5">
            <Link href="/home" className="block">
              <img src="/pecuaria-logo-menu.png" alt="PecuarIA" className="h-20 w-auto md:h-24 xl:h-28" />
            </Link>

            <nav className="hidden items-center gap-9 text-lg font-semibold text-white/90 lg:flex">
              <Link href="/recursos" className="transition hover:text-lime-300">Recursos</Link>
              <a href="#sobre" className="transition hover:text-lime-300">Sobre</a>
              <a href="#planos" className="transition hover:text-lime-300">Planos</a>
              <a href="#blog" className="transition hover:text-lime-300">Blog</a>
              <Link href="/contato" className="text-lime-300">Contato</Link>
            </nav>

            <Link
              href="/app"
              className="rounded-xl bg-lime-500 px-7 py-3 text-lg font-bold text-white shadow-xl shadow-lime-900/30 transition hover:bg-lime-400"
            >
              Área do Cliente
            </Link>
          </header>

          <div className="grid flex-1 gap-10 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-base font-bold uppercase tracking-[0.2em] text-lime-300">Contato</p>
              <h1 className="mt-5 text-5xl font-black leading-tight md:text-6xl">
                Vamos conversar sobre a gestão da sua fazenda.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-white/78">
                Entre em contato para tirar dúvidas, pedir ajuda no acesso ao app ou entender como o PecuarIA
                pode organizar os dados da sua propriedade.
              </p>
            </div>

            <div className="rounded-2xl border border-lime-300/15 bg-white/[0.05] p-6 shadow-2xl shadow-black/25 backdrop-blur">
              <div className="grid gap-5">
                {contactCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="block rounded-2xl border border-lime-300/15 bg-[#002414]/70 p-6 transition hover:border-lime-300/40 hover:bg-[#06351f]/80"
                  >
                    <p className="text-2xl font-bold text-lime-100">{card.title}</p>
                    <p className="mt-3 text-lg leading-8 text-white/72">{card.description}</p>
                    <p className="mt-5 text-xl font-black text-lime-300">{card.value}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-lime-300/15 bg-lime-300/10 p-6">
                <p className="text-lg font-semibold text-lime-100">Atendimento seguro e direto.</p>
                <p className="mt-2 text-base leading-7 text-white/70">
                  A equipe responde pelo WhatsApp e orienta os próximos passos para uso do app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
