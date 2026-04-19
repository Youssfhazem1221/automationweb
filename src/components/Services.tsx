"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Database, Zap, Cpu } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Database,
    title: "AI Growth System",
    description: "Your full lead engine on autopilot. Capture, qualify, and follow up instantly.",
    features: [
      "Instant AI replies (WA/IG)",
      "Automated qualification",
      "No manual CRM entry",
      "Real-time reporting",
    ],
    popular: true,
  },
  {
    icon: Zap,
    title: "CRM & Automation Pack",
    description: "Fix the leaks in your pipeline. Sync your channels and automate routing.",
    features: [
      "Channel synchronization",
      "Smart routing rules",
      "API integrations",
      "Follow-up sequences",
    ],
    popular: false,
  },
  {
    icon: Cpu,
    title: "Micro Automation",
    description: "One high-friction workflow fixed in 24-48 hours. Start small, scale fast.",
    features: [
      "Single workflow scoped",
      "Webhook/API setup",
      "24-48h deployment",
      "Scaling upgrade path",
    ],
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Outcome-First Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-extrabold mt-4 mb-6 tracking-tighter"
          >
            Professional Automation Systems, <br /> Built for Your Bottom Line.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-foreground/60 text-lg"
          >
            No consulting-only fluff. We install the actual infrastructure that grows your business.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`glass p-8 rounded-3xl relative overflow-hidden group hover:translate-y-[-8px] transition-all duration-300 ${
                service.popular ? "border-primary/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 py-1 px-4 bg-primary text-white text-[10px] font-bold rounded-bl-xl uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/60 mb-8 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check size={12} className="text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="#contact" className="flex items-center gap-2 text-primary font-bold group/link">
                Get This System
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
