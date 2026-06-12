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

      <section className="relative z-10 flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col items-center justify-center text-center">
        <div className="mb-12 flex items-center justify-center gap-5 text-[#064626] drop-shadow-[0_2px_18px_rgba(255,255,255,0.35)]">
          <svg
            aria-hidden="true"
            className="h-24 w-24 text-[#064626]"
            viewBox="0 0 96 96"
            fill="none"
          >
            <path
              d="M25 40c-8-9-11-18-8-24 12 2 21 8 26 18"
              fill="currentColor"
              opacity="0.95"
            />
            <path
              d="M71 40c8-9 11-18 8-24-12 2-21 8-26 18"
              fill="currentColor"
              opacity="0.95"
            />
            <path
              d="M48 18c18 0 31 14 31 34 0 18-12 32-31 32S17 70 17 52c0-20 13-34 31-34Z"
              fill="white"
              opacity="0.92"
            />
            <path
              d="M31 34c6-7 28-7 34 0 6 8 7 27 0 37-6 8-28 8-34 0-7-10-6-29 0-37Z"
              fill="currentColor"
            />
            <path d="M38 47h1M57 47h1" stroke="white" strokeWidth="6" strokeLinecap="round" />
            <path d="M44 61c2 2 6 2 8 0" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </svg>

          <h1 className="text-6xl font-black tracking-tight md:text-8xl">
            Pecuar<span className="text-[#3bbf62]">IA</span>
          </h1>
        </div>

        <LoginForm />

        <footer className="mt-auto grid w-full max-w-4xl gap-4 pt-12 text-base font-medium text-white md:grid-cols-2 md:text-lg">
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
            (c) 2026 PecuarIA. Todos os direitos reservados.
          </p>
        </footer>
      </section>
    </main>
  );
}
