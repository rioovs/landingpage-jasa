import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { StatsBar } from "./sections/stats-bar";
import { CaraKerja } from "./sections/cara-kerja";
import { Pricing } from "./sections/pricing";
import { Terms } from "./sections/terms";
import { FAQ } from "./sections/faq";
import { Payment } from "./sections/payment";
import { Footer } from "./sections/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://landing.rioovs.my.id/#website",
      url: "https://landing.rioovs.my.id",
      name: "rioovs Digital Studio",
      description:
        "Jasa pembuatan landing page & website profesional mulai Rp450rb. Desain premium, responsif, gratis hosting 1 tahun.",
      inLanguage: "id-ID",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://landing.rioovs.my.id/#business",
      name: "rioovs Digital Studio",
      url: "https://landing.rioovs.my.id",
      description:
        "Jasa pembuatan landing page dan website profesional untuk UMKM, bisnis online, dan perusahaan di Indonesia. Desain premium, responsif, gratis hosting 1 tahun, support 24/7.",
      email: "rivos921@gmail.com",
      telephone: "+6285855846666",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
        addressLocality: "Indonesia",
      },
      priceRange: "Rp450.000 - Rp850.000",
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      serviceType: [
        "Pembuatan Landing Page",
        "Pembuatan Website",
        "Web Design",
        "Web Development",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "150",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Paket Jasa Pembuatan Website",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Paket Standard - Landing Page",
            description:
              "1 Halaman Landing Page dengan desain premium, gratis hosting 1 tahun + subdomain, responsif di semua perangkat, tombol WhatsApp CTA.",
            price: "450000",
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Paket Premium - Website Profesional",
            description:
              "Hingga 5 halaman utama, gratis domain .com/.id & hosting 1 tahun, formulir kontak, integrasi sosial media & Google Maps, admin panel, SEO basic & speed optimization.",
            price: "850000",
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://landing.rioovs.my.id/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa harga jasa pembuatan landing page?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Harga jasa pembuatan landing page mulai dari Rp450.000 untuk paket Standard (1 halaman) dan Rp850.000 untuk paket Premium (hingga 5 halaman). Semua paket termasuk desain responsif, gratis hosting 1 tahun, dan garansi teknis.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama waktu pengerjaan website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Waktu pengerjaan untuk paket Standard adalah 1-3 hari kerja, sedangkan paket Premium membutuhkan 1-14 hari kerja tergantung kompleksitas proyek.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah sudah termasuk hosting dan domain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, semua paket sudah termasuk gratis hosting 1 tahun. Paket Standard mendapat subdomain gratis, sedangkan paket Premium mendapat domain .com atau .id gratis. Perpanjangan tahun berikutnya ditanggung klien.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana sistem pembayaran?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sistem pembayaran menggunakan DP 50% di awal pengerjaan, dan 50% pelunasan setelah website live dan disetujui klien.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-slate-50/50">
        <Header />
        <Hero />
        <StatsBar />
        <CaraKerja />
        <Pricing />
        <Terms />
        <FAQ />
        <Payment />
        <Footer />
      </main>
    </>
  );
}
