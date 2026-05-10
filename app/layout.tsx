import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="bg-[#f4efe6] border-b border-[#e5dccd] sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 md:px-14 py-5 flex items-center justify-between">

            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-green-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Dra. Juliana Moraes
            </Link>

            <div className="flex items-center gap-8 md:gap-12 text-[#2f2f2f] font-medium">

              <Link href="/" className="hover:text-green-800 transition">
                Início
              </Link>

              <Link href="/sobre" className="hover:text-green-800 transition">
                Sobre
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

                <div className="absolute left-0 top-full mt-4 w-[380px] max-h-[430px] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

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
                className="border border-green-800 text-green-900 px-5 py-2 rounded-full hover:bg-green-900 hover:text-white transition"
              >
                WhatsApp
              </a>

            </div>
          </nav>
        </header>

        {children}

        <Analytics />
      </body>
    </html>
  );
}