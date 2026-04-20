"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const logs = [
  {
    target: "Real estate team // Egypt",
    transmission: "Captured and qualified 42 property inquiries in the first 24 hours, then pushed the best opportunities into the CRM for immediate follow-up.",
    integrity: "100%",
    status: "LEADS ROUTED",
  },
  {
    target: "E-commerce brand // UK",
    transmission: "Recovered GBP 12k in abandoned-cart opportunity with instant answers, order support, and timed follow-up messages during peak demand.",
    integrity: "98.4%",
    status: "REVENUE RECOVERED",
  },
  {
    target: "Clinic group // UAE",
    transmission: "Booked 64 appointments from inbound inquiries without adding front-desk headcount, while keeping patient context attached to every slot.",
    integrity: "99.9%",
    status: "CALENDAR FILLED",
  },
];

export default function MissionLogs() {
  return (
    <section className="relative overflow-hidden bg-white/[0.01]">
      <div className="section-container">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Proof Snapshots</span>
          </motion.div>

          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.9] tracking-tighter mb-10">
            Built around the numbers <br />
            <span className="serif italic lowercase font-normal opacity-90 text-secondary">your sales team cares about.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {logs.map((log, idx) => (
            <motion.article
              key={log.target}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 lg:p-12 rounded-[3.5rem] border-white/5 relative group hover:border-secondary/30 transition-all duration-700 overflow-hidden bg-white/[0.01]"
              aria-labelledby={`log-target-${idx}`}
            >
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                    <Terminal size={18} className="text-secondary" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-secondary/90">{log.status}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_12px_rgba(245,158,11,0.8)]" aria-hidden="true" />
              </div>

              <span id={`log-target-${idx}`} className="block text-[10px] font-black uppercase tracking-[0.4em] text-white/35 mb-6">{log.target}</span>

              <p className="font-mono text-sm lg:text-base leading-relaxed text-white/70 mb-12 min-h-[120px] group-hover:text-white transition-colors">
                {log.transmission}
              </p>

              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/25">Delivery Confidence</span>
                  <span className="text-lg font-black tracking-widest uppercase text-accent">{log.integrity}</span>
                </div>
                <div className="flex items-center gap-2" aria-hidden="true">
                  <div className="h-1.5 w-16 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-secondary shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: log.integrity }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.06] to-transparent pointer-events-none -translate-y-full group-hover:translate-y-full transition-transform duration-[3000ms] ease-in-out" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
