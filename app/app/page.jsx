import LoginForm from "./LoginForm";

export const metadata = {
  title: "PecuarIA | Dra. Juliana Moraes",
  description: "Login do app de gestao agropecuaria.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AppPage() {
  return (
    <main
      className="fixed inset-0 z-[10000] flex min-h-screen items-center justify-center overflow-hidden bg-[#12351f] px-5 py-10 text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.2)), url('/app-login-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/45" />
      <div className="absolute inset-0 bg-[#12351f]/10" />

      <section className="relative z-10 flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col items-center text-center">
        <div className="flex flex-1 flex-col items-center justify-center pt-12 md:pt-20">
          <img
            src="/pecuaria-logo.webp"
            alt="PecuarIA - Gestao inteligente para a pecuaria"
            width="900"
            height="319"
            className="mb-10 w-full max-w-[540px] object-contain drop-shadow-[0_2px_18px_rgba(255,255,255,0.28)] md:mb-12"
          />

          <LoginForm />
        </div>

        <footer className="grid w-full max-w-4xl gap-4 pt-8 text-base font-medium text-white md:grid-cols-2 md:text-lg">
          <p className="flex items-center justify-center gap-3">
            <svg
              aria-hidden="true"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
              <path d="m9 12 2 2 4-5" />
            </svg>
            Seus dados e sua fazenda sempre seguros.
          </p>
          <p className="flex items-center justify-center">
            © 2026 PecuarIA. Todos os direitos reservados.
          </p>
        </footer>
      </section>
    </main>
  );
}
