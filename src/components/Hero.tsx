"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-48 pb-20">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              48-Hour Deployment Guaranteed
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tighter">
              Automate Your <span className="text-primary italic">Revenue Engine</span> While You Sleep.
            </h1>
            
            <p className="text-lg text-foreground/70 mb-10 max-w-lg leading-relaxed">
              Proxy Solutions installs high-performance AI systems for Real Estate, Clinics, and E-commerce. Capture more leads, qualify instantly, and stop leaking revenue.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn-primary group">
                Book a Free Audit
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              {[
                { icon: ShieldCheck, label: "Done-for-you" },
                { icon: Zap, label: "Instant ROI" },
                { icon: Bot, label: "AI Native" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                  <item.icon size={20} className="text-primary" />
                  <span className="text-sm font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side / Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass p-8 rounded-3xl aspect-square relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Live Lead Engine</p>
                    <h3 className="text-2xl font-bold">Performance Dashboard</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold animate-pulse">
                    ACTIVE
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-muted/30 p-4 rounded-2xl border border-white/5">
                    <p className="text-xs text-foreground/50 mb-1">Response Time</p>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-primary">0.4s</span>
                      <span className="text-xs text-emerald-400 font-bold mb-1">+340%</span>
                    </div>
                  </div>
                  <div className="bg-surface-muted/30 p-4 rounded-2xl border border-white/5">
                    <p className="text-xs text-foreground/50 mb-1">Lead Capture</p>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold">98%</span>
                      <span className="text-xs text-emerald-400 font-bold mb-1">↑</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-12 bg-surface-muted/20 rounded-xl border border-white/5 flex items-center px-4 gap-3 animate-float">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Zap size={16} className="text-green-400" />
                    </div>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-primary" />
                    </div>
                    <span className="text-[10px] font-bold opacity-40">WhatsApp</span>
                  </div>
                  <div className="h-12 bg-surface-muted/20 rounded-xl border border-white/5 flex items-center px-4 gap-3 animate-float [animation-delay:1s]">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot size={16} className="text-primary" />
                    </div>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-primary" />
                    </div>
                    <span className="text-[10px] font-bold opacity-40">Auto-Qualify</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-surface-muted border-2 border-[var(--glass-bg)]" />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold border-2 border-[var(--glass-bg)]">
                      +12
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 blur-[120px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
