"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Share2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Free Audit",
    desc: "We map exactly where you're losing leads and money. No fluff, just the leak and the opportunity.",
    day: "Day 1",
  },
  {
    icon: PenTool,
    title: "We Build It",
    desc: "Our team designs, builds, and tests your full automation system across messaging and CRM.",
    day: "Day 1-2",
  },
  {
    icon: Share2,
    title: "Live & Running",
    desc: "We deploy, connect it to your tools, and provide support while it handles live inquiries.",
    day: "Day 2",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter">
            Zero to Automated in 48 Hours.
          </h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            The process is simple because the heavy lifting stays on our side.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10" />

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative text-center group"
              >
                <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-primary mx-auto mb-8 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <step.icon size={32} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-surface text-xs font-bold flex items-center justify-center border border-primary/20">
                    0{idx + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed max-w-[280px] mx-auto">
                  {step.desc}
                </p>
                <div className="mt-6 inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                  {step.day}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 glass rounded-3xl text-center border-emerald-500/20"
        >
          <h3 className="text-3xl font-extrabold mb-6 tracking-tight">Stop Losing Leads Today.</h3>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
            Most clients are live within 48 hours of their first call. Audit is free, if we can't find a leak, you keep the report.
          </p>
          <a href="#contact" className="btn-primary">
            Book My Free Audit
          </a>
        </motion.div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 blur-3xl -z-10" />
    </section>
  );
}
