"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "48H", label: "First launch" },
  { value: "<60s", label: "Target reply time" },
  { value: "24/7", label: "Follow-up coverage" },
  { value: "0", label: "Missed hot leads" },
];

export default function Metrics() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.015] relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="group flex flex-col items-center lg:items-start"
            >
              <div className="flex items-center gap-2 mb-4" aria-hidden="true">
                <div className="w-1 h-1 rounded-full bg-accent opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.7)] transition-all" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{metric.label}</span>
              </div>
              <div className="text-5xl lg:text-7xl font-black tracking-tighter glow-text group-hover:text-secondary group-hover:scale-105 transition-all duration-700">
                <span className="sr-only">{metric.label}: </span>
                {metric.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ translateY: ["0%", "100%"], opacity: [0, 0.18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none"
      />
    </section>
  );
}
