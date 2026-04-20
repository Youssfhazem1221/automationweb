"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Database, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Database,
    title: "Instant Lead Response",
    description: "Every inbound message gets a fast, human-sounding reply that keeps the buyer engaged while intent is highest.",
    features: [
      "WhatsApp, Instagram, and web forms",
      "Smart replies trained on your offer",
      "Lead source and intent tracking",
      "Daily conversion summaries",
    ],
  },
  {
    icon: Sparkles,
    title: "Qualification & Booking",
    description: "Separate serious buyers from casual browsers, then move qualified leads straight into a booked call.",
    features: [
      "Budget, timeline, and need checks",
      "Calendar booking flows",
      "Automated reminders",
      "No-show reduction sequences",
    ],
  },
  {
    icon: Cpu,
    title: "Automation Sprint",
    description: "Remove the manual sales and operations steps that slow your team down, one high-impact workflow at a time.",
    features: [
      "CRM and spreadsheet cleanup",
      "Webhook and API connections",
      "Follow-up task automation",
      "48-hour first launch window",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-secondary/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
              What We Build
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] uppercase mb-10"
          >
            Systems that turn <br />
            <span className="serif italic lowercase font-normal tracking-tight opacity-90 text-secondary">attention into appointments.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white/55 text-xl max-w-2xl leading-relaxed"
          >
            We focus on the moments that create revenue: fast replies, better qualification, clean handoff, and persistent follow-up until the lead books or opts out.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-700 hover:shadow-[0_0_60px_rgba(56,189,248,0.12)] border-white/5 hover:border-secondary/25"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-10 group-hover:bg-secondary group-hover:text-background transition-all duration-500 shadow-inner" aria-hidden="true">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 group-hover:text-secondary transition-colors duration-500">{service.title}</h3>

                <p className="text-white/45 mb-10 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>

                <ul className="space-y-5 mb-12" role="list">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-xs font-bold tracking-tight text-white/65" role="listitem">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/70 group-hover:bg-accent transition-colors" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="#contact" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] group/link text-white/65 hover:text-white transition-colors" aria-label={`Book an audit for ${service.title}`}>
                  See what we can automate
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover/link:opacity-100 transition-all group-hover/link:translate-x-1 group-hover/link:-translate-y-1 text-secondary" aria-hidden="true" />
                </Link>
              </div>

              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary/5 blur-[50px] rounded-full group-hover:bg-accent/10 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
