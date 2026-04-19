"use client";

import { motion } from "framer-motion";
import { Home, Stethoscope, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const niches = [
  {
    icon: Home,
    title: "Real Estate",
    tag: "Real Estate",
    benefit: "Close more deals without chasing leads.",
    desc: "Instant replies, lead qualification, appointment prompts, and follow-up sequences keep properties moving.",
    stat: "Avg. 3x faster response",
    color: "emerald",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    tag: "Clinics",
    benefit: "Fill your calendar automatically.",
    desc: "Missed calls and slow replies create empty slots. Automation handles inquiry capture and booking follow-up.",
    stat: "40% fewer missed bookings",
    color: "blue",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    tag: "E-commerce",
    benefit: "Stop losing orders to slow support.",
    desc: "Order tracking, cart recovery, and pre-sale answers happen instantly so your team focuses on exceptions.",
    stat: "60% fewer support tickets",
    color: "pink",
  },
];

export default function Niches() {
  return (
    <section id="niches" className="bg-surface-muted/10">
      <div className="section-container">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Niche Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-extrabold mt-4 tracking-tighter"
          >
            Built for Your Industry.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {niches.map((niche, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 flex flex-col hover:border-primary/30 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                niche.color === "emerald" ? "bg-emerald-500/20 text-emerald-400" :
                niche.color === "blue" ? "bg-blue-500/20 text-blue-400" :
                "bg-pink-500/20 text-pink-400"
              }`}>
                <niche.icon size={24} />
              </div>
              
              <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${
                niche.color === "emerald" ? "text-emerald-400" :
                niche.color === "blue" ? "text-blue-400" :
                "text-pink-400"
              }`}>
                {niche.tag}
              </span>
              
              <h3 className="text-2xl font-bold mb-4">{niche.benefit}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
                {niche.desc}
              </p>
              
              <div className="pt-6 border-t border-white/5 mt-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-extrabold">{niche.stat}</span>
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-white/5" />
                    ))}
                  </div>
                </div>
                <Link href="#contact" className="btn-secondary w-full py-2 flex items-center justify-center gap-2 group">
                  See {niche.title} Solutions
                  <ArrowRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
