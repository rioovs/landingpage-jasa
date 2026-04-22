"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa harga jasa pembuatan landing page?",
    answer: "Harga jasa pembuatan landing page mulai dari Rp450.000 untuk paket Standard (1 halaman) dan Rp850.000 untuk paket Premium (hingga 5 halaman). Semua paket termasuk desain responsif, gratis hosting 1 tahun, dan garansi teknis.",
  },
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer: "Waktu pengerjaan untuk paket Standard adalah 1-3 hari kerja, sedangkan paket Premium membutuhkan 1-14 hari kerja tergantung kompleksitas proyek.",
  },
  {
    question: "Apakah sudah termasuk hosting dan domain?",
    answer: "Ya, semua paket sudah termasuk gratis hosting 1 tahun. Paket Standard mendapat subdomain gratis, sedangkan paket Premium mendapat domain .com atau .id gratis. Perpanjangan tahun berikutnya ditanggung klien.",
  },
  {
    question: "Bagaimana sistem pembayaran?",
    answer: "Sistem pembayaran menggunakan DP 50% di awal pengerjaan, dan 50% pelunasan setelah website live dan disetujui klien.",
  },
  {
    question: "Apakah bisa revisi jika desain kurang cocok?",
    answer: "Tentu. Kami memberikan kesempatan revisi sesuai dengan paket yang Anda pilih. Untuk paket Premium, Anda mendapatkan revisi tak terbatas (unlimited) sampai desain sesuai keinginan.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <Badge variant="secondary" className="mb-4">Tanya Jawab</Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Pertanyaan yang sering ditanyakan seputar jasa kami.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-blue-500" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
