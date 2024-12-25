import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Daniel - Portfólio",
  description: "Site pessoal do Daniel baseado no layout das imagens.",
};


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-900 text-white flex flex-col min-h-screen">
        {/* Cabeçalho fixo */}
        <header className="py-4 border-b border-gray-700">
          <nav className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
            <div className="font-bold text-xl">
              <a href="/." className="text-white-400 hover:text-yellow-400">
                Daniel Kotsugai Sarmento
              </a>
            </div>
            <ul className="flex space-x-8">
              <li>
                <a href="/curriculum" className="hover:text-yellow-400">
                  Currículo
                </a>
              </li>
              <li>
                <a href="/projetos" className="hover:text-yellow-400">
                  Projetos
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Conteúdo principal */}
        <main className="flex-grow max-w-screen-xl mx-auto px-4 py-8">
          {children}
        </main>

        {/* Rodapé fixo */}
        <footer className="border-t border-gray-700 py-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Por Daniel.</p>
          <p className="mt-1">Orgulhosamente criado com Next.js 13</p>
        </footer>
      </body>
    </html>
  );
}