import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>

        <header className="bg-green-950 text-white px-6 md:px-14 py-5 shadow-lg">

          <nav
            className="flex gap-8 md:gap-12 text-base md:text-lg items-center"
            style={{
              fontFamily: "Georgia, serif",
              letterSpacing: "1px",
            }}
          >
            <Link
              href="/"
              className="hover:text-green-200 transition-all duration-300"
            >
              Início
            </Link>

            <Link
              href="/sobre"
              className="hover:text-green-200 transition-all duration-300"
            >
              Sobre
            </Link>

            <Link
              href="/servicos"
              className="hover:text-green-200 transition-all duration-300"
            >
              Serviços
            </Link>
          </nav>

        </header>

        {children}

      </body>
    </html>
  );
}