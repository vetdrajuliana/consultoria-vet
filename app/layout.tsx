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
    pathname === "/home" || pathname === "/app" || pathname.startsWith("/app/");

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

        <Analytics />
      </body>
    </html>
  );
}
