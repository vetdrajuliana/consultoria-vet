import AppHeader from "../AppHeader";
import PainelQuickAccess from "./PainelQuickAccess";

export const metadata = {
  title: "Painel da Fazenda | Dra. Juliana Moraes",
  description: "Painel interno do app de gestao agropecuaria.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PainelPage() {
  return (
    <main className="min-h-dvh bg-[#f7f8f6] px-5 pb-20 text-[#10251b] lg:h-dvh lg:min-h-0 lg:overflow-hidden lg:px-8 lg:pb-4">
      <AppHeader />

      <section
        className="relative overflow-hidden rounded-3xl px-8 py-12 text-white shadow-lg lg:px-10 lg:py-6"
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
            className="mt-5 text-5xl font-bold leading-tight md:text-6xl lg:mt-2 lg:text-4xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Painel da Fazenda
          </h1>

          <p className="mt-6 text-xl leading-8 text-white/90 lg:mt-3 lg:max-w-2xl lg:text-lg lg:leading-7">
            Controle sanitário, manejo, reprodução, visitas técnicas e
            acompanhamento completo da propriedade.
          </p>
        </div>
      </section>

      <PainelQuickAccess />

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5 text-base text-gray-500 lg:mt-4 lg:pt-3 lg:text-sm">
        <p>© 2026 PecuarIA. Todos os direitos reservados.</p>
        <p>Versão 1.0.0</p>
      </footer>
    </main>
  );
}
