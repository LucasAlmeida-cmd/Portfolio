import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Lucas Almeida"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br" className="bg-zinc-500">
      <body>
        {children}
      </body>
    </html>
  );
}
