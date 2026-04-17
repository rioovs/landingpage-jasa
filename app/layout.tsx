import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://landing.rioovs.my.id";
const SITE_NAME = "rioovs - Jasa Pembuatan Landing Page Profesional";
const SITE_DESCRIPTION =
  "Jasa pembuatan landing page & website profesional mulai Rp450rb. Desain premium, responsif, gratis hosting 1 tahun, support 24/7. Cocok untuk UMKM, bisnis online, dan perusahaan di Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Jasa Pembuatan Landing Page Profesional — rioovs Digital Studio",
    template: "%s | rioovs Digital Studio",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "jasa pembuatan landing page",
    "jasa pembuatan website",
    "jasa buat landing page murah",
    "landing page profesional",
    "jasa web design Indonesia",
    "pembuatan website UMKM",
    "landing page bisnis online",
    "jasa website murah",
    "buat landing page",
    "web developer Indonesia",
    "jasa landing page",
    "website profesional",
    "landing page murah",
    "jasa pembuatan website profesional",
    "desain website",
  ],
  authors: [{ name: "rioovs", url: SITE_URL }],
  creator: "rioovs",
  publisher: "rioovs Digital Studio",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Jasa Pembuatan Landing Page Profesional — rioovs Digital Studio",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "rioovs - Jasa Pembuatan Landing Page Profesional",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Landing Page Profesional — rioovs",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
    creator: "@rioovs",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },

  category: "technology",
  classification: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`,
            }}
          />
        </noscript>
      </head>
      <body className={`${inter.className} min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  );
}
