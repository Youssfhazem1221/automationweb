"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What happens during the free audit?",
    answer: "We review your lead sources, response process, CRM handoff, follow-up timing, and booking flow. You leave with a clear list of automations worth building first, even if we do not work together.",
  },
  {
    question: "Can we use our current tools?",
    answer: "Usually, yes. We build around the stack you already use whenever possible, including WhatsApp, Instagram, website forms, CRMs, calendars, spreadsheets, and email platforms.",
  },
  {
    question: "How fast can this go live?",
    answer: "Most first-scope systems can launch within 48 hours after we have access, approved copy, and the workflow rules. Larger CRM or multi-location builds may need a phased rollout.",
  },
  {
    question: "Will the AI sound generic?",
    answer: "No. We train the conversation flow on your offer, tone, qualification criteria, and escalation rules so it behaves like a sharp sales assistant, not a public chatbot.",
  },
  {
    question: "What if a lead needs a person?",
    answer: "Human handoff is built into the logic. The system escalates high-value, sensitive, or unclear conversations with the context your team needs to respond quickly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-secondary/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Questions</span>
            <div className="h-[1px] w-8 bg-secondary/50" />
          </motion.div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-tighter mb-4">Before you book</h2>
          <p className="text-white/45 font-medium">Straight answers on launch speed, tools, and quality control.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="glass rounded-[2rem] overflow-hidden border-white/5 transition-all duration-500 hover:border-secondary/20 group">
              <button
                className="w-full px-8 py-8 text-left flex items-center justify-between transition-colors outline-none focus-visible:bg-white/5"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-black text-xl uppercase tracking-tighter group-hover:text-secondary transition-colors">{faq.question}</span>
                <div className={cn("flex-shrink-0 ml-4 transition-all duration-300", openIndex === idx ? "text-accent opacity-100" : "opacity-40 group-hover:opacity-100 group-hover:text-secondary")}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-10 text-white/65 font-medium leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
