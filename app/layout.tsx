import { ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
        <Header />git

        {/* Conteúdo principal */}
        <main className="flex-grow max-w-screen-xl mx-auto px-4 py-8">
          {children}
        </main>

        {/* Rodapé fixo */}
        <Footer />
      </body>
    </html>
  );
}