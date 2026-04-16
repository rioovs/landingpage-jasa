"use client";

import { motion } from "framer-motion";
import { Heart, Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="mb-1 text-xl font-bold text-slate-900">rioovs</h3>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} rioovs. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <a
              href="mailto:rivos921@gmail.com"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600"
            >
              <Mail className="h-4 w-4" />
              rivos921@gmail.com
            </a>
            <a
              href="tel:+6285855846666"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600"
            >
              <Phone className="h-4 w-4" />
              0858-5584-6666
            </a>
            <a
              href="https://landing.rioovs.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600"
            >
              <Globe className="h-4 w-4" />
              landing.rioovs.my.id
            </a>
          </div>
        </motion.div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="flex items-center justify-center gap-1 text-xs text-slate-400">
            Dibuat dengan <Heart className="h-3 w-3 fill-red-400 text-red-400" /> di Indonesia
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
