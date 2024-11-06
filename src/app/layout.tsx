import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";

export const metadata: Metadata = {
  title: "Portfolio - Lucas Almeida"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br">
      <body>
        <Cabecalho/>
        {children}
      </body>
    </html>
  );
}
