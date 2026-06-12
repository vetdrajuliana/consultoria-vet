"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);
  const router = useRouter();

  async function acessarPainel(event) {
    event.preventDefault();
    setMensagem("");
    setEnviando(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/pecuaria/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    setEnviando(false);

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setMensagem(data?.message || "Nao foi possivel acessar.");
      return;
    }

    router.push("/app/painel");
    router.refresh();
  }

  return (
    <form onSubmit={acessarPainel} className="w-full max-w-[540px] space-y-4">
      <label className="flex h-20 items-center gap-5 rounded-2xl bg-white/95 px-7 text-[#5f6b66] shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur">
        <span className="sr-only">E-mail</span>
        <svg
          aria-hidden="true"
          className="h-8 w-8 shrink-0 text-[#0b4d2e]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          autoComplete="email"
          required
          className="w-full bg-transparent text-xl text-[#1f2933] outline-none placeholder:text-[#7b827e]"
        />
      </label>

      <label className="flex h-20 items-center gap-5 rounded-2xl bg-white/95 px-7 text-[#5f6b66] shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur">
        <span className="sr-only">Senha</span>
        <svg
          aria-hidden="true"
          className="h-8 w-8 shrink-0 text-[#0b4d2e]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        <input
          type={mostrarSenha ? "text" : "password"}
          name="password"
          placeholder="Senha"
          autoComplete="current-password"
          required
          className="w-full bg-transparent text-xl text-[#1f2933] outline-none placeholder:text-[#7b827e]"
        />
        <button
          type="button"
          aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
          onClick={() => setMostrarSenha((valor) => !valor)}
          className="rounded-full p-2 text-[#59615d] transition hover:bg-green-50 hover:text-[#0b4d2e]"
        >
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
            <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </label>

      <button
        type="submit"
        disabled={enviando}
        className="flex h-20 w-full items-center justify-center gap-4 rounded-2xl bg-[#073f24] text-2xl font-bold text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition hover:bg-[#0b5a34]"
      >
        {enviando ? "Acessando..." : "Acessar"}
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
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <path d="M10 17l5-5-5-5" />
          <path d="M15 12H3" />
        </svg>
      </button>

      {mensagem ? (
        <p className="rounded-2xl bg-white/90 px-5 py-3 text-base font-semibold text-red-700 shadow">
          {mensagem}
        </p>
      ) : null}
    </form>
  );
}
