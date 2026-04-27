"use client";

import { motion } from "framer-motion";
import { Home, Stethoscope, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const niches = [
  {
    icon: Home,
    title: "Real Estate",
    sector: "Industry 01",
    benefit: "Reply before the next agent does.",
    desc: "Qualify buyer and seller inquiries, route hot prospects to agents, and keep every viewing or valuation request moving.",
    stat: "3x Faster Response",
    accent: {
      text: "text-secondary",
      line: "bg-secondary/50 group-hover:bg-secondary",
      icon: "bg-secondary/10 border-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-background group-hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]",
      heading: "group-hover:text-secondary",
      card: "hover:border-secondary/30",
      glow: "bg-secondary/5 group-hover:bg-secondary/10",
      button: "group-hover/btn:text-secondary",
    },
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    sector: "Industry 02",
    benefit: "Turn inquiries into booked appointments.",
    desc: "Capture missed calls and messages, answer common questions, collect patient context, and guide qualified inquiries into open slots.",
    stat: "Fewer Empty Slots",
    accent: {
      text: "text-emerald-400",
      line: "bg-emerald-400/50 group-hover:bg-emerald-400",
      icon: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-background group-hover:shadow-[0_0_30px_rgba(52,211,153,0.32)]",
      heading: "group-hover:text-emerald-400",
      card: "hover:border-emerald-400/30",
      glow: "bg-emerald-400/5 group-hover:bg-emerald-400/10",
      button: "group-hover/btn:text-emerald-400",
    },
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    sector: "Industry 03",
    benefit: "Recover revenue from support gaps.",
    desc: "Automate pre-sale answers, order updates, abandoned-cart follow-up, and post-purchase support without slowing your team.",
    stat: "More Recovered Carts",
    accent: {
      text: "text-accent",
      line: "bg-accent/50 group-hover:bg-accent",
      icon: "bg-accent/10 border-accent/20 text-accent group-hover:bg-accent group-hover:text-background group-hover:shadow-[0_0_30px_rgba(245,158,11,0.32)]",
      heading: "group-hover:text-accent",
      card: "hover:border-accent/30",
      glow: "bg-accent/5 group-hover:bg-accent/10",
      button: "group-hover/btn:text-accent",
    },
  },
];

export default function Niches() {
  return (
    <section id="niches" className="relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-accent/60" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                Use Cases
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[1] tracking-tighter"
            >
              Pick the workflow <br />
              <span className="serif italic lowercase font-normal opacity-90 text-secondary">that costs you time.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/45 text-sm max-w-xs font-medium leading-relaxed"
          >
            Velora adapts to your tools, team, and customer journey. These are the workflows where AI automation usually creates the fastest visible lift.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8" role="list">
          {niches.map((niche, idx) => (
            <motion.article
              key={niche.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`glass group relative flex h-full flex-col overflow-hidden rounded-[3.5rem] border-white/5 bg-white/[0.01] p-10 transition-all duration-700 lg:p-12 ${niche.accent.card}`}
              role="listitem"
            >
              <div className="flex items-center justify-between mb-12">
                <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-500 ${niche.accent.icon}`} aria-hidden="true">
                  <niche.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25 mb-1">{niche.sector}</span>
                  <div className={`w-8 h-[1px] group-hover:w-12 transition-all ${niche.accent.line}`} />
                </div>
              </div>

              <h3 className={`text-3xl font-black uppercase tracking-tighter mb-6 transition-colors duration-500 leading-[1.1] ${niche.accent.heading}`}>{niche.benefit}</h3>
              <p className="mb-12 flex-1 text-base font-medium leading-relaxed text-white/55">
                {niche.desc}
              </p>

              <div className="mt-auto flex items-end justify-between gap-6 border-t border-white/5 pt-10">
                <div className="flex min-h-28 flex-col justify-end">
                  <span className={`text-[9px] font-black uppercase tracking-[0.3em] mb-1 ${niche.accent.text}`}>Primary Outcome</span>
                  <span className="text-2xl font-black glow-brand text-white">{niche.stat}</span>
                </div>
                <Link
                  href="#contact"
                  className="w-14 h-14 rounded-full glass border-white/10 flex items-center justify-center hover:scale-110 focus-visible:ring-2 focus-visible:ring-secondary transition-all group/btn bg-white/5"
                  aria-label={`Get ${niche.title} automation solutions`}
                >
                  <ArrowRight size={20} className={`text-white/45 ${niche.accent.button} group-hover/btn:translate-x-1 transition-all`} aria-hidden="true" />
                </Link>
              </div>

              <div className={`absolute -bottom-10 -right-10 w-40 h-40 blur-[80px] rounded-full transition-all duration-1000 ${niche.accent.glow}`} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
