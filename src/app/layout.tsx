import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Almeida | Full Stack Developer",
  description: "Portfólio de Lucas Almeida, desenvolvedor Java e React.",
  icons: {
    icon: "/favicon.png", 
  },
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
