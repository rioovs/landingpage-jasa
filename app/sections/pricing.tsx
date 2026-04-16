"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Check,
  MessageCircle,
  Clock,
  RefreshCw,
  Zap,
  Globe,
  LayoutDashboard,
  Search,
  Smartphone,
} from "lucide-react";

const packages = [
  {
    name: "Standard",
    price: "Rp450,0 rb",
    time: "Waktu pengerjaan 1-3 hari",
    accent: "green",
    description:
      "Cocok untuk promosi produk spesifik, campaign iklan, atau profil bisnis ringkas.",
    features: [
      "1 Halaman Landing Page (Desain Premium)",
      "Gratis Hosting 1 Tahun + Subdomain",
      "Responsif di semua perangkat (Mobile Friendly)",
      "Tombol Chat WhatsApp / Call-to-Action (CTA)",
    ],
    icon: Zap,
    featured: false,
  },
  {
    name: "Premium",
    price: "Rp850,0 rb",
    time: "Waktu pengerjaan 1-14 hari",
    revisions: "Jumlah Revisi Tak terbatas",
    accent: "blue",
    description:
      "Cocok untuk perusahaan, UMKM, atau agensi yang ingin tampil profesional di internet.",
    features: [
      "Hingga 5 Halaman Utama (Home, About, Services, Gallery, Contact)",
      "GRATIS Domain (.com / .id) & Hosting 1 Tahun",
      "Formulir Kontak langsung terhubung ke email",
      "Integrasi Sosial Media & Google Maps",
      "Akses Admin Panel (Bisa update konten sendiri)",
      "SEO Basic & Speed Optimization",
    ],
    icon: Globe,
    featured: true,
  },
];

export function Pricing() {
  const handleNego = (pkgName: string) => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan paket ${pkgName}. Bisa diskusikan lebih lanjut?`,
    );
    window.open(`https://wa.me/6285855846666?text=${message}`, "_blank");
  };

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-4">
            Harga Terbaik
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Pilih Paket Sesuai Kebutuhan
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Semua paket termasuk desain responsif, gratis hosting, dan garansi
            teknis
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                    pkg.featured
                      ? "border-2 border-blue-500/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl shadow-blue-500/10"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  {/* Accent Line */}
                  <div
                    className={`absolute left-0 top-0 h-full w-1 ${
                      pkg.featured
                        ? "bg-gradient-to-b from-blue-500 to-purple-500"
                        : pkg.accent === "green"
                          ? "bg-green-500"
                          : "bg-blue-500"
                    }`}
                  />

                  {pkg.featured && (
                    <div className="absolute right-4 top-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        Paling Populer
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                      <Icon
                        className={`h-6 w-6 ${
                          pkg.featured ? "text-slate-900" : "text-slate-600"
                        }`}
                      />
                    </div>
                    <div className="flex items-baseline justify-between">
                      <CardTitle
                        className={`text-2xl font-bold ${
                          pkg.featured ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {pkg.name}
                      </CardTitle>
                      <span
                        className={`text-2xl font-extrabold ${
                          pkg.featured
                            ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                            : "text-blue-600"
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {pkg.time}
                      </span>
                      {pkg.revisions && (
                        <>
                          <span className="text-slate-400">|</span>
                          <span className="flex items-center gap-1">
                            <RefreshCw className="h-4 w-4" />
                            {pkg.revisions}
                          </span>
                        </>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p
                      className={`text-sm ${
                        pkg.featured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {pkg.description}
                    </p>

                    <div>
                      <h4
                        className={`mb-3 text-sm font-semibold ${
                          pkg.featured ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Apa yang akan diterima:
                      </h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature) => (
                          <li
                            key={feature}
                            className={`flex items-start gap-3 text-sm ${
                              pkg.featured ? "text-slate-300" : "text-slate-600"
                            }`}
                          >
                            <Check
                              className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                                pkg.featured
                                  ? "text-blue-400"
                                  : "text-green-500"
                              }`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => handleNego(pkg.name)}
                      className={`w-full gap-2 py-6 text-base font-semibold transition-all duration-300 ${
                        pkg.featured
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25"
                          : "bg-slate-900 hover:bg-slate-800"
                      }`}
                    >
                      <MessageCircle className="h-5 w-5" />
                      Chat
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
