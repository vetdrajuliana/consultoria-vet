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
        <header className="bg-green-900 text-white px-10 py-5">
          <nav className="flex gap-8 text-lg">
            <Link href="/">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/servicos">Serviços</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}