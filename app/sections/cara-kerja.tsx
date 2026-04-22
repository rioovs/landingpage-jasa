"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, LayoutTemplate, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Konsultasi & Diskusi",
    description: "Ceritakan kebutuhan website Anda. Kami akan memberikan solusi dan rekomendasi paket terbaik.",
  },
  {
    icon: LayoutTemplate,
    title: "2. Pembuatan Desain",
    description: "Pembuatan wireframe dan desain UI/UX yang modern, responsif, dan sesuai dengan brand Anda.",
  },
  {
    icon: Code2,
    title: "3. Pengembangan Web",
    description: "Proses coding website menggunakan teknologi terbaru dengan performa tinggi dan ramah SEO.",
  },
  {
    icon: Rocket,
    title: "4. Review & Launch",
    description: "Review hasil akhir, revisi jika diperlukan, dan website siap di-launching ke publik.",
  },
];

export function CaraKerja() {
  return (
    <section id="cara-kerja" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-4">Proses Kerja</Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Cara Kerja Kami
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Proses simpel dan transparan dari awal hingga website Anda online.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -z-10 hidden lg:block -translate-y-1/2" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl border border-slate-100 p-6 shadow-xl shadow-slate-200/50 hover:border-blue-200 transition-colors"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 ring-1 ring-blue-100/50">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
