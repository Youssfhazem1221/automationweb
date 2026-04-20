"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ShieldCheck, Zap, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#how-it-works" },
  { name: "Use Cases", href: "#niches" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:py-6 pointer-events-none">
      <nav className={cn(
        "max-w-7xl mx-auto grid grid-cols-[auto_auto] lg:grid-cols-[auto_1fr_auto] items-center justify-between gap-4 transition-all duration-500 pointer-events-auto",
        "glass px-4 py-3 md:px-5 lg:px-6 lg:py-3 rounded-[1.75rem] border-white/10 shadow-2xl",
        isScrolled ? "bg-background/85 backdrop-blur-2xl border-secondary/20" : "bg-background/50"
      )}>
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group min-w-max">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white/5 flex items-center justify-center p-1 border border-white/10 group-hover:border-secondary/50 transition-colors">
            <Image 
              src="/logo.png" 
              alt="Velora Logo" 
              width={32} 
              height={32} 
              className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tighter uppercase leading-none text-white">
              Velora
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 leading-none mt-0.5 text-secondary">
              AI Ops
            </span>
          </div>
          <div className="hidden xl:block h-8 w-px bg-white/10 mx-2" aria-hidden="true" />
          <span className="hidden xl:block text-[10px] font-bold uppercase tracking-[0.24em] text-white/35 group-hover:text-white/55 transition-colors">
            AI Operations Systems
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-1 justify-self-center rounded-full border border-white/10 bg-white/[0.035] p-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 xl:px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-all hover:bg-white/[0.07] rounded-full focus-visible:ring-2 focus-visible:ring-secondary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 justify-self-end">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2.5 bg-white/[0.035] rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-white/45">
              48h first launch
            </span>
          </div>

          <Link
            href="#contact"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-secondary text-background text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-accent transition-all shadow-lg hover:shadow-secondary/20"
          >
            Audit My Ops
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 lg:hidden pointer-events-auto"
          >
            <div className="glass p-8 rounded-[2.5rem] border-white/10 shadow-3xl bg-background/95 backdrop-blur-3xl">
              <div className="grid gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between group py-4 border-b border-white/5"
                    >
                      <span className="text-2xl font-black uppercase tracking-tighter text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all">
                        {link.name}
                      </span>
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-5 bg-secondary text-background font-black text-center rounded-[1.5rem] uppercase tracking-widest text-sm hover:bg-accent transition-all shadow-2xl"
                >
                  Request Free Audit
                </Link>
                <div className="flex items-center justify-center gap-6 mt-4">
                   <div className="flex flex-col items-center">
                      <Zap size={16} className="text-secondary mb-1" />
                      <span className="text-[10px] font-bold opacity-30 uppercase">Fast Reply</span>
                   </div>
                   <div className="flex flex-col items-center">
                      <ShieldCheck size={16} className="text-emerald-500 mb-1" />
                      <span className="text-[10px] font-bold opacity-30 uppercase">CRM Safe</span>
                   </div>
                   <div className="flex flex-col items-center">
                      <Activity size={16} className="text-secondary mb-1" />
                      <span className="text-[10px] font-bold opacity-30 uppercase">Booked</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
