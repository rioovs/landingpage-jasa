"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Copy, Check, Mail, Phone } from "lucide-react";

const banks = [
  {
    name: "Bank BCA",
    number: "1234567890",
    holder: "rioovs",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Bank Mandiri",
    number: "0987654321",
    holder: "rioovs",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "Bank BNI",
    number: "0123456789",
    holder: "rioovs",
    color: "from-green-600 to-green-800",
  },
];

export function Payment() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, bankName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(bankName);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(bankName);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-4">
            Pembayaran
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Info Pembayaran
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Transfer ke salah satu rekening di bawah ini
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {banks.map((bank, index) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-slate-200 transition-all duration-300 hover:border-slate-300 hover:shadow-xl">
                <div className={`h-2 bg-gradient-to-r ${bank.color}`} />
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex items-center justify-center gap-2">
                    <Building2 className="h-5 w-5 text-slate-400" />
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-500">
                      {bank.name}
                    </span>
                  </div>

                  <div className="mb-2 flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold tracking-wider text-slate-900">
                      {bank.number}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(bank.number, bank.name)}
                    >
                      {copied === bank.name ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-slate-400" />
                      )}
                    </Button>
                  </div>

                  <p className="text-sm text-slate-500">
                    a.n. <span className="font-semibold text-slate-700">{bank.holder}</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl bg-slate-50 px-8 py-6 sm:flex-row">
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">0858-5584-6666</span>
            </div>
            <span className="hidden text-slate-300 sm:block">|</span>
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">rivos921@gmail.com</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Konfirmasi transfer ke WhatsApp atau email di atas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
