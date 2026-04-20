"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  ArrowRight, 
  Zap, 
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const liveLeads = [
  { id: "L-904", source: "WhatsApp", action: "Meeting Booked", time: "2m ago", color: "text-emerald-500" },
  { id: "L-905", source: "Instagram", action: "CRM Synced", time: "5m ago", color: "text-secondary" },
  { id: "L-906", source: "Website", action: "Analyzing Intent", time: "Just now", color: "text-accent" },
];

export default function SystemDashboard() {
  const [leadCount, setLeadCount] = useState(1240);
  const [currentLeads, setCurrentLeads] = useState(liveLeads);

  useEffect(() => {
    const interval = setInterval(() => {
      const chance = Math.random();
      if (chance > 0.7) {
        setLeadCount(prev => prev + 1);
        const newLead = {
          id: `L-${Math.floor(Math.random() * 1000 + 900)}`,
          source: ["WhatsApp", "Instagram", "Website"][Math.floor(Math.random() * 3)],
          action: ["Meeting Booked", "CRM Synced", "Call Scheduled"][Math.floor(Math.random() * 3)],
          time: "Just now",
          color: chance > 0.85 ? "text-secondary" : "text-emerald-500"
        };
        setCurrentLeads(prev => [newLead, ...prev.slice(0, 2)]);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" aria-labelledby="dashboard-title">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-secondary/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
                Revenue Engine // Live
              </span>
            </motion.div>
            <h2 id="dashboard-title" className="text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Inquiry to <br />
              <span className="serif italic lowercase font-normal opacity-90 text-secondary">booked revenue.</span>
            </h2>
            <p className="text-white/60 text-lg lg:text-xl font-medium max-w-2xl leading-relaxed">
              Your hottest buyers usually choose the business that replies first. Our systems answer, qualify, and book the right leads before they drift to a competitor.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
             <div className="glass p-6 rounded-[2rem] border-secondary/20 bg-secondary/5 min-w-[280px]">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Live Performance</span>
                   <TrendingUp size={16} className="text-secondary" />
                </div>
                <div className="text-3xl font-black tracking-tighter mb-1">84.2%</div>
                <p className="text-[10px] font-bold text-white/40 uppercase">Qualified Lead Rate</p>
             </div>
          </div>
        </div>

        {/* Modular Dashboard Interface */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-4 glass rounded-[3rem] p-10 border-white/5 relative overflow-hidden group hover:border-secondary/30 transition-all duration-500"
          >
             <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-secondary group-hover:text-background transition-all">
                   <Zap size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">01. Capture</h3>
                <p className="text-white/40 text-sm font-medium mb-10 leading-relaxed">
                  WhatsApp, Instagram, and website inquiries flow into one sales lane. <span className="text-white">Every buyer gets an instant first touch.</span>
                </p>
                
                <div className="space-y-3">
                   {['WhatsApp Business', 'Instagram Direct', 'Web Forms'].map((source) => (
                     <div key={source} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                        <span className="text-xs font-bold text-white/80">{source}</span>
                        <div className="flex gap-1">
                           {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />)}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 blur-[60px] rounded-full group-hover:bg-secondary/10 transition-all" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 glass rounded-[3rem] p-10 border-secondary/20 bg-secondary/[0.02] relative overflow-hidden group shadow-[0_0_80px_rgba(56,189,248,0.1)]"
          >
             <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-[10px] font-black uppercase tracking-widest text-accent mb-8">
                  Buyer Fit Scoring
                </div>
                
                <div className="relative w-48 h-48 mb-10">
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-secondary/20 rounded-full border-dashed"
                   />
                   <div className="absolute inset-4 rounded-full glass border-white/10 flex flex-col items-center justify-center bg-background/40 backdrop-blur-xl">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Cpu size={48} className="text-secondary mb-2" />
                      </motion.div>
                      <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">Scoring_V4</span>
                   </div>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">02. Qualify</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed mb-auto">
                  The assistant checks <span className="text-white">intent, budget, timeline, and fit</span>, then routes serious opportunities to the next best step.
                </p>

                <div className="mt-8 flex gap-3">
                   <div className="flex flex-col items-center">
                      <div className="text-xs font-black text-emerald-500">0.4s</div>
                      <span className="text-[8px] font-bold opacity-30 uppercase">Latency</span>
                   </div>
                   <div className="h-8 w-px bg-white/10" />
                   <div className="flex flex-col items-center">
                      <div className="text-xs font-black text-secondary">24/7</div>
                      <span className="text-[8px] font-bold opacity-30 uppercase">Coverage</span>
                   </div>
                </div>
             </div>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-4 glass rounded-[3rem] p-10 border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500"
          >
             <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-emerald-500 group-hover:text-background transition-all">
                   <Calendar size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">03. Convert</h3>
                <p className="text-white/40 text-sm font-medium mb-10 leading-relaxed">
                  Qualified leads land in your CRM and on your calendar with the conversation context attached. <span className="text-white">Your team walks in prepared.</span>
                </p>

                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                   {currentLeads.map((lead) => (
                     <motion.div 
                        key={lead.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group/lead hover:bg-white/5 transition-all"
                      >
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-white/40 uppercase mb-1">{lead.source}</span>
                           <span className="text-xs font-bold">{lead.id}</span>
                        </div>
                        <div className="text-right">
                           <div className={cn("text-[9px] font-black uppercase mb-1", lead.color)}>{lead.action}</div>
                           <span className="text-[8px] font-mono opacity-20">{lead.time}</span>
                        </div>
                     </motion.div>
                   ))}
                  </AnimatePresence>
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 blur-[60px] rounded-full group-hover:bg-emerald-500/10 transition-all" />
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 p-8 lg:p-12 glass rounded-[3rem] border-secondary/20 flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-secondary/5 via-transparent to-transparent"
        >
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shadow-inner">
                <Users size={28} className="text-secondary" />
             </div>
             <div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-1">Scale your sales, not your team.</h4>
                <p className="text-sm font-medium text-white/40"><span className="text-white">{leadCount}</span> inbound opportunities processed through the demo engine.</p>
             </div>
          </div>
          <Link href="#contact" className="w-full lg:w-auto px-10 py-5 bg-secondary text-background font-black rounded-full hover:bg-accent transition-all shadow-xl hover:shadow-secondary/20 uppercase tracking-widest text-xs flex items-center justify-center gap-3 group">
            Book My Growth Audit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


