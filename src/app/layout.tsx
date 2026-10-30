import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADIA Framework — Inteligência artificial. Autonomia humana.",
  description:
    "Conheça o ADIA: uma proposta de aprendizagem assistida por IA que adapta o apoio para desenvolver autonomia, reflexão e transferência de conhecimento.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "ADIA Framework",
    title: "ADIA — Inteligência artificial. Autonomia humana.",
    description:
      "Apoiar cada descoberta. Desenvolver quem aprende. Conheça a proposta de suporte adaptativo do ADIA.",
  },
  twitter: { card: "summary" },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23101713'/%3E%3Cpath d='M32 14 14 50h9l3-8h12l3 8h9L32 14Zm0 15 4 10h-8l4-10Z' fill='%2337b954'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = { themeColor: "#101713" };

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" as="image" href="/img/escolas/alice-fontes.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
