"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeader =
    pathname === "/home" ||
    pathname === "/recursos" ||
    pathname === "/contato" ||
    pathname === "/app" ||
    pathname.startsWith("/app/");

  return (
    <html lang="pt-BR">
      <body className="overflow-x-hidden">
        {!hideHeader ? (
        <>
          <header className="bg-[#f4efe6]/95 backdrop-blur-md border-b border-[#e5dccd] fixed top-0 left-0 right-0 z-[9999]">
          <nav className="max-w-7xl mx-auto px-5 md:px-14 py-2">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <Link href="/" className="flex items-center gap-4">

  <img
    src="/logo.PNG"
    alt="Dra Juliana Moraes"
    className="h-[70px] md:h-[90px] w-auto object-contain mix-blend-multiply"
  />

  <div className="flex flex-col leading-tight">

    <span
      className="text-[#1f3d2e] text-2xl md:text-4xl font-serif font-semibold tracking-tight"
    >
      Dra. Juliana Moraes
    </span>

    <span
      className="text-[#4f6f5b] text-sm md:text-xl mt-1"
    >
      Médica Veterinária - CRMV GO 14194
    </span>

  </div>

</Link>

              <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-10 text-[#2f2f2f] text-base md:text-xl font-medium">

                <Link href="/" className="hover:text-green-800 transition">
                  Início
                </Link>

                <Link href="/sobre" className="hover:text-green-800 transition">
                  Sobre
                </Link>

                <Link href="/videos" className="hover:text-green-800 transition">
                  Vídeos
                </Link>

                <div className="relative group">
                  <Link
                    href="/servicos"
                    className="hover:text-green-800 transition flex items-center gap-2"
                  >
                    Serviços
                    <span className="text-green-700 text-xs transition-transform duration-300 group-hover:rotate-180">
                      ▼
                    </span>
                  </Link>

                  <div className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 top-full mt-4 w-[300px] md:w-[380px] max-h-[360px] md:max-h-[430px] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5 md:p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                    <Link href="/servicos" className="block p-3 rounded-xl hover:bg-green-50">
                      <h3 className="font-bold text-green-900">
                        Assistência Técnica a Campo
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Protocolos sanitários e manejo nutricional.
                      </p>
                    </Link>

                    <Link href="/servicos" className="block p-3 rounded-xl hover:bg-green-50">
                      <h3 className="font-bold text-green-900">
                        Exames Laboratoriais
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Coleta de sangue e análises para diagnóstico.
                      </p>
                    </Link>

                    <Link href="/servicos" className="block p-3 rounded-xl hover:bg-green-50">
                      <h3 className="font-bold text-green-900">
                        Necrópsia a Campo
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Avaliação e coleta para diagnóstico de doenças.
                      </p>
                    </Link>

                    <Link
                      href="/servicos"
                      className="block mt-5 text-center bg-green-800 text-white px-5 py-3 rounded-full hover:bg-green-900 transition"
                    >
                      Ver mais
                    </Link>

                  </div>
                </div>

                <a
                  href="https://wa.me/5562998577635"
                  target="_blank"
                  className="border border-green-800 text-green-900 px-5 md:px-6 py-2 rounded-full hover:bg-green-900 hover:text-white transition text-base md:text-lg"
                >
                  WhatsApp
                </a>

              </div>
            </div>
          </nav>
          </header>

          <div className="h-[170px] md:h-[140px]"></div>
        </>
        ) : null}

        {children}

        <a
          href="https://wa.me/5562998577635"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chamar no WhatsApp"
          className="fixed bottom-5 right-5 z-[10000] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-black/25 transition hover:scale-105 hover:bg-[#1fb457] focus:outline-none focus:ring-4 focus:ring-[#25d366]/35"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            className="h-8 w-8"
            fill="currentColor"
          >
            <path d="M16.02 3.2c-7.05 0-12.78 5.7-12.78 12.73 0 2.25.59 4.45 1.72 6.39L3.13 29l6.85-1.8a12.8 12.8 0 0 0 6.04 1.54c7.04 0 12.77-5.7 12.77-12.73S23.06 3.2 16.02 3.2Zm0 23.39c-1.94 0-3.84-.52-5.5-1.5l-.39-.23-4.06 1.07 1.08-3.95-.26-.41a10.55 10.55 0 0 1-1.62-5.64c0-5.84 4.82-10.59 10.75-10.59 5.92 0 10.74 4.75 10.74 10.59 0 5.84-4.82 10.66-10.74 10.66Zm5.9-7.95c-.32-.16-1.9-.94-2.19-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.59-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.59 1.16 3.13 1.32 3.34.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.48.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
          </svg>
        </a>

        <Analytics />
      </body>
    </html>
  );
}
