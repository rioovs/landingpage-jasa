"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  MessageCircle,
  Zap,
  Globe,
  LayoutDashboard,
  Building2,
  ChevronDown,
} from "lucide-react";

const ujicobaPackage = {
  name: "Paket Ujicoba Hemat",
  price: "49.000",
  period: "/bulan",
  domain: ".my.id / .web.id / .biz.id",
  description: "Mulai dulu, bayar ringan! Dapatkan website bisnis profesional dengan biaya bulanan super hemat.",
  features: [
    "Free Domain 1 Tahun",
    "Free Hosting 1 Tahun",
    "5 halaman/menu",
    "5 design banner",
    "10 design katalog",
    "Website SSL",
    "Integrasi Whatsapp Order",
    "Pemasangan Google Maps",
    "Standart Form Order",
    "Integrasi Sosial Media",
    "1 x revisi"
  ],
  icon: Zap,
  badges: ["Paling Hemat", "Terbatas"]
};

const mainPackages = [
  {
    name: "Website Bisnis",
    price: "Rp 249.000",
    renewal: "Rp 200.000 / tahun",
    domain: ".my.id / .web.id / .biz.id",
    description: "Untuk UMKM yang ingin tampil profesional secara online dengan budget terjangkau.",
    features: [
      "Free Domain 1 Tahun",
      "Free Hosting 1 Tahun",
      "5 halaman/menu",
      "5 design banner",
      "10 design katalog",
      "Website SSL",
      "Integrasi Whatsapp Order",
      "Pemasangan Google Maps",
      "Standart Form Order",
      "Integrasi Sosial Media",
      "1 x revisi"
    ],
    icon: LayoutDashboard,
    badge: "UMKM",
    featured: false,
  },
  {
    name: "Website Profesional",
    price: "Rp 750.000",
    renewal: "Rp 350.000 / tahun",
    domain: ".online / .site / .store / .space / .tech / .shop",
    description: "Untuk bisnis yang butuh website lengkap dengan fitur e-commerce dan support penuh.",
    features: [
      "Free Domain 1 Tahun",
      "Free Hosting 1 Tahun",
      "15 halaman/menu",
      "10 design banner",
      "30 design katalog",
      "Website SSL",
      "Integrasi Whatsapp Order",
      "Pemasangan Google Maps",
      "Custom Form Order",
      "Integrasi Sosial Media",
      "Free Support Editing",
      "Unlimited Revisi",
      "Fitur Keranjang integrasi WhatsApp"
    ],
    icon: Globe,
    badge: "Best Value",
    featured: true,
  },
  {
    name: "Website Enterprise",
    price: "Rp 1.495.000",
    renewal: "Rp 495.000 / tahun",
    domain: ".com / .id / .net / .org / .co.id",
    description: "Untuk perusahaan & brand yang butuh website kustom tanpa batas.",
    features: [
      "Free Domain 1 Tahun",
      "Free Hosting 1 Tahun",
      "Unlimited halaman/menu",
      "Unlimited design banner",
      "Unlimited design katalog",
      "Website SSL",
      "Integrasi Whatsapp Order",
      "Pemasangan Google Maps",
      "Custom Form Order",
      "Integrasi Sosial Media",
      "Free Support Editing",
      "Unlimited Revisi"
    ],
    icon: Building2,
    badge: "Premium",
    featured: false,
  }
];

function getWhatsAppLink(pkgName: string) {
  return `https://wa.me/6285855846666?text=${encodeURIComponent(
    `Halo, saya tertarik dengan paket ${pkgName}. Bisa diskusikan lebih lanjut?`
  )}`;
}

export function Pricing() {
  const [showAllUjicoba, setShowAllUjicoba] = useState(false);
  const [showAll, setShowAll] = useState<Record<string, boolean>>({});

  const toggleFeatures = (pkgName: string) => {
    setShowAll((prev) => ({ ...prev, [pkgName]: !prev[pkgName] }));
  };

  return (
    <section id="pricing" className="bg-[#0a0a0a] py-20 md:py-28 relative overflow-hidden">
      {/* Dark mode background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Paket & Harga
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Harga jelas — saya kerjakan sendiri dengan AI Tools untuk hasil maksimal.
          </p>
        </motion.div>

        {/* Paket Ujicoba (Top Full Width Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-slate-900 p-1 ring-1 ring-purple-500/30 shadow-2xl shadow-purple-500/20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="relative rounded-[1.4rem] bg-gradient-to-br from-indigo-950/90 to-purple-950/90 p-8 md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {ujicobaPackage.badges.map((badge, i) => (
                      <Badge key={i} className="bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 border border-purple-500/30">
                        {i === 0 && <Zap className="mr-1 h-3 w-3" />}
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-1 text-3xl font-bold text-white md:text-4xl">
                    {ujicobaPackage.name}
                  </h3>
                  <p className="mb-4 text-sm text-purple-200/80 md:text-base max-w-md">
                    {ujicobaPackage.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-xs font-medium text-slate-400 block mb-1">Domain: {ujicobaPackage.domain}</span>
                  </div>

                  {/* Highlighted features for Ujicoba */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {ujicobaPackage.features.slice(0, 4).map((feat, i) => (
                      <span key={i} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-purple-100 border border-white/10">
                        <Check className="h-3 w-3 text-purple-300" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setShowAllUjicoba(!showAllUjicoba)}
                    className="flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Lihat semua fitur
                    <ChevronDown className={`h-4 w-4 transition-transform ${showAllUjicoba ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {showAllUjicoba && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-4"
                      >
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {ujicobaPackage.features.slice(4).map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-purple-200/80">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
                
                <div className="flex flex-col items-start md:items-end md:pl-8 md:border-l md:border-white/10">
                  <div className="mb-1 text-sm font-medium text-purple-200/80 text-right w-full">MULAI DARI</div>
                  <div className="mb-6 flex items-baseline gap-1 text-white">
                    <span className="text-xl font-semibold text-purple-300">Rp</span>
                    <span className="text-5xl font-extrabold tracking-tight md:text-6xl">{ujicobaPackage.price}</span>
                    <span className="text-lg text-purple-200/60 font-medium">{ujicobaPackage.period}</span>
                  </div>
                  <a
                    href={getWhatsAppLink(ujicobaPackage.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Coba Sekarang
                  </a>
                  <p className="mt-3 text-xs text-purple-200/60 text-center w-full">Tanpa kontrak · Bisa upgrade kapan saja</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Main Packages Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {mainPackages.map((pkg, index) => {
            const isFeatured = pkg.featured;
            const isExpanded = showAll[pkg.name];
            
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
                    isFeatured
                      ? "bg-slate-900 border border-purple-500/50 shadow-2xl shadow-purple-500/10"
                      : "bg-[#111111] border border-white/10"
                  }`}
                >
                  <div className="flex flex-col flex-1 p-8">
                    <div className="mb-6">
                      <Badge className={`uppercase tracking-wider text-[10px] font-bold ${
                        isFeatured ? "bg-purple-500 text-white hover:bg-purple-600" : "bg-white/10 text-slate-300 hover:bg-white/20"
                      }`}>
                        {pkg.badge}
                      </Badge>
                    </div>
                    
                    <h3 className="mb-1 text-2xl font-bold text-white">
                      {pkg.name}
                    </h3>

                    <div className="mb-4">
                      <span className="text-[10px] font-medium text-slate-500 block leading-tight">{pkg.domain}</span>
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-3xl font-extrabold text-white md:text-4xl tracking-tight">
                        {pkg.price}
                      </span>
                    </div>

                    <div className="mb-6">
                       <span className="text-[11px] text-slate-500">Renewal: {pkg.renewal}</span>
                    </div>
                    
                    <p className="mb-8 text-sm text-slate-400">
                      {pkg.description}
                    </p>

                    <button 
                      onClick={() => toggleFeatures(pkg.name)}
                      className="mb-6 flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors w-fit"
                    >
                      Lihat semua fitur
                      <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mb-6"
                        >
                          <ul className="space-y-3">
                            {pkg.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3 text-sm text-slate-300"
                              >
                                <Check
                                  className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                                    isFeatured ? "text-purple-400" : "text-slate-500"
                                  }`}
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-auto pt-6">
                      <a
                        href={getWhatsAppLink(pkg.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold transition-all duration-300 ${
                          isFeatured
                            ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/25"
                            : "bg-transparent border border-white/20 text-white hover:bg-white/5"
                        }`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Pesan Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
