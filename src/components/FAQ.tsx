"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "We already have a system.",
    answer: "Good. That means you are already generating activity. We plug in and stop the leaks between lead capture, follow-up, and CRM handoff. Existing systems often produce the fastest gains.",
  },
  {
    question: "We can do this in-house.",
    answer: "You could, but internal time has a cost too. Most in-house attempts drag for months and still need maintenance. This is built and deployed in 48 hours with less interruption to your team.",
  },
  {
    question: "Is AI reliable enough for our business?",
    answer: "Each system includes fallback logic and human escalation paths. AI handles the repetitive volume. Your team handles the exceptions. That is the right operating split.",
  },
  {
    question: "What if it does not work for us?",
    answer: "That is what the free audit is for. If there is no meaningful improvement to be made, we will tell you before any build starts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface-muted/5">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-4">Common Questions</h2>
          <p className="text-foreground/60">Everything you need to know before we audit your stack.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden border-white/5">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <div className="flex-shrink-0 ml-4 text-primary">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-foreground/60 leading-relaxed">
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
