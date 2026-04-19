"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <section id="contact" className="relative group">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Contact</span>
            <h2 className="text-5xl font-extrabold mt-4 mb-8 tracking-tighter leading-tight">
              Ready to plug <br /> the leaks?
            </h2>
            <p className="text-foreground/60 text-lg mb-10 max-w-md">
              Tell us where the bottleneck is. We'll review your setup, show the fastest win, and map the right automation path.
            </p>
            
            <div className="space-y-6">
              {[
                "We respond within 24 hours.",
                "Professional audit report included.",
                "Zero obligation, zero spam.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-bold text-sm">
                  <CheckCircle2 size={18} className="text-primary" />
                  {item}
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap gap-3">
              {["n8n", "Python", "OpenAI", "Webhooks", "WhatsApp", "CRM APIs"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-surface-muted/30 border border-white/5 text-[10px] uppercase font-bold text-foreground/40">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-8 lg:p-12 rounded-3xl"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-foreground/60 mb-8">We'll review your challenge and reach out within 24 hours.</p>
                <button 
                   onClick={() => setStatus("idle")}
                   className="btn-secondary py-2"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-40 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-surface-muted/30 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-40 ml-1">Business Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@company.com"
                      className="w-full bg-surface-muted/30 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-40 ml-1">Business Type</label>
                    <select 
                      required
                      className="w-full bg-surface-muted/30 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                    >
                      <option value="">Select type</option>
                      <option>Real Estate</option>
                      <option>Clinic</option>
                      <option>E-commerce</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-40 ml-1">Country</label>
                    <select 
                      required
                      className="w-full bg-surface-muted/30 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                    >
                      <option value="">Select country</option>
                      <option>Egypt</option>
                      <option>UAE</option>
                      <option>Saudi Arabia</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-40 ml-1">Biggest Challenge</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="e.g. We get leads but nobody follows up fast enough..."
                    className="w-full bg-surface-muted/30 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="btn-primary w-full flex items-center justify-center gap-3 py-5"
                >
                  {status === "loading" ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send My Audit Request
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
