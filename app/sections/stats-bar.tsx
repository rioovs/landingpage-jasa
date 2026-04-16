"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Proyek Selesai" },
  { value: "4.9★", label: "Rating Klien" },
  { value: "24/7", label: "Support Teknis" },
  { value: "1-14", label: "Hari Pengerjaan" },
];

export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <div className="-mt-16 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 md:p-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
