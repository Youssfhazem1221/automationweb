"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ChevronDown, Send } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
const fieldClassName =
  "w-full rounded-3xl border border-white/10 bg-black/30 px-6 py-5 text-sm font-bold tracking-tight text-white shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-all placeholder:text-white/25 focus:border-secondary/50 focus:bg-black/40 focus:outline-none";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function GlassSelect({
  label,
  id,
  name,
  options,
  placeholder,
  required = false,
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
    <div className="relative isolate space-y-3" ref={containerRef}>
      <label htmlFor={id} className="ml-1 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
        {label}
      </label>

      <input type="hidden" id={id} name={name} value={selected} required={required} />

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="group/btn flex w-full items-center justify-between rounded-3xl border border-white/10 bg-black/30 px-6 py-5 text-left shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-all hover:border-secondary/40 hover:bg-black/40"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={cn("text-sm font-bold tracking-tight", selected ? "text-white" : "text-white/25")}>
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
            className="absolute left-0 right-0 top-full z-50 mt-3 overflow-hidden rounded-[2rem] border border-white/14 bg-[#0b1118]/96 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
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
                  className={`w-full rounded-2xl px-5 py-4 text-left text-xs font-black uppercase tracking-widest transition-all ${
                    selected === opt
                      ? "bg-secondary text-background shadow-[0_10px_28px_rgba(56,189,248,0.28)]"
                      : "text-white/72 hover:bg-white/8 hover:text-white"
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

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [resetToken, setResetToken] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage("Form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local to receive submissions.");
      return;
    }

    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Velora growth audit request");
    formData.append("from_name", "Velora AI Ops");

    const replyTo = formData.get("email");
    if (typeof replyTo === "string" && replyTo) {
      formData.append("replyto", replyTo);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
        setResetToken((token) => token + 1);
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
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-white/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Free Growth Audit</span>
            </motion.div>

            <h2 className="mb-10 text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter">
              Find your fastest <br />
              <span className="serif font-normal italic lowercase opacity-90 text-secondary">automation win.</span>
            </h2>

            <p className="mb-10 max-w-sm text-lg leading-relaxed text-white/50">
              Tell us the bottleneck, the delay, and the outcome you want. We will map the first automation worth building.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { label: "Response Time", val: "Under 24h" },
                { label: "Audit Focus", val: "Revenue Leaks" },
              ].map((item, idx) => (
                <div key={idx} className="glass rounded-3xl border-white/5 p-6">
                  <span className="mb-2 block text-[8px] font-black uppercase tracking-[0.3em] text-white/20">{item.label}</span>
                  <span className="text-xl font-black">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass relative overflow-visible rounded-[3rem] border-white/5 p-6 shadow-3xl sm:p-8 lg:p-10"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="py-12 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-background shadow-[0_0_50px_rgba(56,189,248,0.35)]">
                    <CheckCircle2 size={40} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter">Request received.</h3>
                  <p className="mx-auto mb-10 max-w-xs text-sm font-medium text-white/45">
                    We will review your workflow and reply with the next step within 24 hours.
                  </p>
                  <button onClick={() => setStatus("idle")} className="btn-secondary mx-auto border-secondary/20 hover:bg-secondary/10">
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-8" initial={{ opacity: 1 }} exit={{ opacity: 0 }} noValidate>
                  <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-4 sm:p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-2">
                        <span className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.32em] text-secondary">
                          2-minute intake
                        </span>
                        <p className="max-w-md text-sm font-bold leading-relaxed text-white/68 sm:text-[15px]">
                          Show us the stuck point. We will reply with the first automation to build.
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.28em] text-white/45">
                        <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_14px_rgba(56,189,248,0.75)]" />
                        24h reply
                      </div>
                    </div>
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-4 rounded-3xl border border-red-500/10 bg-red-500/5 p-5 text-xs font-black uppercase tracking-widest text-red-500"
                      role="alert"
                      aria-live="assertive"
                    >
                      <AlertCircle size={18} aria-hidden="true" />
                      {errorMessage}
                    </motion.div>
                  )}

                  <div className="space-y-6 rounded-[2rem] border border-white/8 bg-black/20 p-6 sm:p-7">
                    <div className="space-y-2">
                      <h4 className="text-lg font-black uppercase tracking-tight">Contact details</h4>
                      <p className="text-sm font-medium leading-relaxed text-white/50">
                        We will send the audit response and next-step recommendation to this email.
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <label htmlFor="name" className="ml-1 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                          Name
                        </label>
                        <input required id="name" name="name" type="text" autoComplete="name" placeholder="Your name" className={fieldClassName} />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="ml-1 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                          Contact Email
                        </label>
                        <input
                          required
                          id="email"
                          name="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="email@example.com"
                          className={fieldClassName}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 rounded-[2rem] border border-white/8 bg-black/20 p-6 sm:p-7">
                    <div className="space-y-2">
                      <h4 className="text-lg font-black uppercase tracking-tight">Business context</h4>
                      <p className="text-sm font-medium leading-relaxed text-white/50">
                        A bit of context helps us tailor the automation opportunity to your market and operating region.
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <GlassSelect
                        key={`business-type-${resetToken}`}
                        label="Sector"
                        id="business_type"
                        name="business_type"
                        options={["Real Estate", "Clinic", "E-commerce", "SaaS", "Agency", "Other"]}
                        placeholder="Select sector"
                        required
                      />
                      <GlassSelect
                        key={`country-${resetToken}`}
                        label="Region"
                        id="country"
                        name="country"
                        options={["Egypt", "UAE", "Saudi Arabia", "United Kingdom", "United States", "Other"]}
                        placeholder="Select region"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-6 rounded-[2rem] border border-white/8 bg-black/20 p-6 sm:p-7">
                    <div className="space-y-2">
                      <h4 className="text-lg font-black uppercase tracking-tight">Workflow bottleneck</h4>
                      <p className="text-sm font-medium leading-relaxed text-white/50">
                        Describe the handoff, response delay, or repetitive task you want the first automation to solve.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="challenge" className="ml-1 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                        Where are leads or operations getting stuck?
                      </label>
                      <textarea
                        required
                        id="challenge"
                        name="challenge"
                        rows={5}
                        placeholder="Example: slow lead response, missed DMs, no CRM handoff, manual appointment reminders..."
                        className={`${fieldClassName} min-h-36 resize-none rounded-[2rem] py-6`}
                      />
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-secondary/12 bg-gradient-to-r from-secondary/10 via-white/[0.03] to-transparent p-5 sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.34em] text-secondary">
                          Free Growth Audit
                        </p>
                        <h4 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                          Get your action plan in 24 hours.
                        </h4>
                      </div>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn-primary w-full justify-center bg-secondary text-background transition-all hover:bg-accent hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] sm:w-auto"
                      >
                        {status === "loading" ? (
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        ) : (
                          <>
                            Get My Free Audit
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
