"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";

function GlassSelect({ 
  label, 
  id,
  name, 
  options, 
  placeholder,
  required = false 
}: { 
  label: string; 
  id: string;
  name: string; 
  options: string[]; 
  placeholder: string;
  required?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-3 relative" ref={containerRef}>
      <label htmlFor={id} className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 ml-1">{label}</label>
      
      {/* Hidden input for form submission */}
      <input type="hidden" id={id} name={name} value={selected} required={required} />
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-5 flex items-center justify-between group/btn hover:border-secondary/40 transition-all text-left"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={cn("text-sm font-bold tracking-tight", selected ? "text-white" : "text-white/20")}>
          {selected || placeholder}
        </span>
        <ChevronDown 
          size={18} 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "opacity-20 group-hover/btn:opacity-100"}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 top-full left-0 right-0 mt-3 p-3 glass rounded-[2rem] border-white/10 shadow-3xl overflow-hidden"
            role="listbox"
          >
            <div className="max-h-60 overflow-y-auto">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  role="option"
                  aria-selected={selected === opt}
                  onClick={() => {
                    setSelected(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-colors ${
                    selected === opt 
                      ? "bg-secondary text-background" 
                      : "hover:bg-white/5 text-white/45 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setErrorMessage(data.message || "Submission failed. Try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network connection failed. Check connection.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-8"
            >
                <div className="h-px w-12 bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Free Growth Audit</span>
            </motion.div>
            
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter mb-10">
              Find your fastest <br />
              <span className="serif italic lowercase font-normal opacity-90 text-secondary">automation win.</span>
            </h2>
            
            <p className="text-white/50 text-xl max-w-md leading-relaxed mb-12">
              Tell us where leads slow down, where your team is stuck doing manual work, and what outcome matters most. We will map the first automation to build.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Response Time", val: "Under 24h" },
                { label: "Audit Focus", val: "Revenue Leaks" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 glass rounded-3xl border-white/5">
                   <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-white/20 mb-2">{item.label}</span>
                   <span className="text-xl font-black">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-8 lg:p-16 rounded-[4rem] relative overflow-hidden shadow-3xl border-white/5"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="text-center py-12"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-24 h-24 bg-secondary text-background rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(56,189,248,0.35)]">
                    <CheckCircle2 size={40} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Request received.</h3>
                  <p className="text-white/45 mb-10 max-w-xs mx-auto text-sm font-medium">We will review your workflow and reply with the next step within 24 hours.</p>
                  <button 
                     onClick={() => setStatus("idle")}
                     className="btn-secondary mx-auto border-secondary/20 hover:bg-secondary/10"
                  >
                    Reset Form
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                >
                  {status === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-3xl bg-red-500/5 border border-red-500/10 text-red-500 text-xs font-black uppercase tracking-widest flex items-center gap-4"
                      role="alert"
                      aria-live="assertive"
                    >
                      <AlertCircle size={18} aria-hidden="true" />
                      {errorMessage}
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 ml-1">Name</label>
                      <input 
                        required
                        id="name"
                        name="name"
                        type="text" 
                        placeholder="Your name"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-5 focus:outline-none focus:border-secondary/40 transition-all placeholder:text-white/20 text-sm font-bold tracking-tight"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 ml-1">Contact Email</label>
                      <input 
                        required
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-5 focus:outline-none focus:border-secondary/40 transition-all placeholder:text-white/20 text-sm font-bold tracking-tight"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <GlassSelect 
                      label="Sector"
                      id="business_type"
                      name="business_type"
                      options={["Real Estate", "Clinic", "E-commerce", "SaaS", "Agency", "Other"]}
                      placeholder="Select sector"
                      required
                    />
                    <GlassSelect 
                      label="Region"
                      id="country"
                      name="country"
                      options={["Egypt", "UAE", "Saudi Arabia", "United Kingdom", "United States", "Other"]}
                      placeholder="Select region"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="challenge" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 ml-1">Where are leads or operations getting stuck?</label>
                    <textarea 
                      required
                      id="challenge"
                      name="challenge"
                      rows={4}
                      placeholder="Example: slow lead response, missed DMs, no CRM handoff, manual appointment reminders..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] px-6 py-6 focus:outline-none focus:border-secondary/40 transition-all resize-none placeholder:text-white/20 text-sm font-bold tracking-tight"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full btn-primary justify-center bg-secondary text-background hover:bg-accent hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all"
                  >
                    {status === "loading" ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Request Free Growth Audit
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
