import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Landing Page — Digital Studio",
  description: "Solusi digital untuk meningkatkan penjualan, promosi produk, dan membangun citra profesional bisnis Anda di internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  );
}
