"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, FileText, RefreshCw, Globe, Shield } from "lucide-react";

const terms = [
  {
    number: "01",
    title: "Pembayaran",
    description: "50% DP di awal pengerjaan, 50% pelunasan setelah website live dan disetujui klien.",
    icon: Wallet,
  },
  {
    number: "02",
    title: "Materi Pendukung",
    description: "Logo, teks, gambar, dan aset brand diserahkan maksimal 3 hari kerja setelah DP.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Revisi",
    description: "Di luar jumlah revisi paket dikenakan biaya tambahan sesuai kesepakatan.",
    icon: RefreshCw,
  },
  {
    number: "04",
    title: "Domain & Hosting",
    description: "Gratis tahun pertama. Perpanjangan tahun berikutnya ditanggung klien.",
    icon: Globe,
  },
  {
    number: "05",
    title: "Garansi",
    description: "Garansi seumur hidup selama masih berlangganan. Tidak mencakup kerusakan pihak ketiga.",
    icon: Shield,
  },
];

export function Terms() {
  return (
    <section id="syarat-ketentuan" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-4">
            Ketentuan Layanan
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Syarat & Ketentuan
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Berlaku untuk seluruh paket layanan
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {terms.map((term, index) => {
            const Icon = term.icon;
            return (
              <motion.div
                key={term.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group h-full border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400">
                          {term.number}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          {term.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {term.description}
                    </p>
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
