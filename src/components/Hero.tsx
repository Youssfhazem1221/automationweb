"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Activity, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const events = [
  "INTAKE: New request captured",
  "TASK_ROUTED: Owner assigned",
  "CRM_SYNC: Record updated",
  "CALENDAR_MATCH: Call scheduled",
  "SUPPORT: Reply drafted",
  "REPORT_READY: Daily summary sent",
  "AUDIT_CHECK: Workflow healthy",
];

export default function Hero() {
  const [workflowCount, setWorkflowCount] = useState(1204);
  const [activeFlows, setActiveFlows] = useState(14);
  const [isAiProcessing, setIsAiProcessing] = useState(true);
  const [lastEvent, setLastEvent] = useState("SYSTEM_BOOT_COMPLETE");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAiProcessing) {
        const workflowChange = Math.random() > 0.6 ? 1 : 0;
        if (workflowChange > 0) {
          setWorkflowCount(prev => prev + workflowChange);
          setPulse(true);
          setLastEvent(events[Math.floor(Math.random() * events.length)]);
          setTimeout(() => setPulse(false), 1000);
        }
        
        if (Math.random() > 0.8) setActiveFlows(prev => Math.max(12, Math.min(18, prev + (Math.random() > 0.5 ? 1 : -1))));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isAiProcessing]);

  return (
    <section className="relative min-h-screen lg:min-h-[760px] xl:min-h-[780px] flex items-center pt-28 lg:pt-16 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-secondary/[0.08] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-accent/[0.05] to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-14 items-center">
          
          {/* Left: Persuasive Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-7 animate-float" aria-hidden="true">
               <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 text-white">AI Automation Agency // Live</span>
            </div>
            
            <h1 className="text-[clamp(3rem,5.4vw,5rem)] font-black leading-[0.9] tracking-tight uppercase mb-7">
              Automate the work <br />
              <span className="serif italic font-normal lowercase tracking-normal text-secondary">that slows you down.</span>
            </h1>
            
            <p className="text-base lg:text-[1.05rem] text-white/50 mb-9 max-w-lg leading-relaxed font-medium">
              Velora builds done-for-you AI systems for the repetitive work behind growth: customer intake, follow-up, scheduling, CRM updates, reporting, and team handoffs. <span className="text-white">Cleaner operations, faster response, fewer manual hours.</span>
            </p>
            
            <div className="flex flex-wrap gap-5 mb-16">
              <Link href="#contact" className="btn-primary lg:!px-8 lg:!py-4" aria-label="Book a free performance audit">
                Book Free Growth Audit
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <button onClick={() => setIsAiProcessing(!isAiProcessing)} className="btn-secondary lg:!px-8 lg:!py-4 group">
                <span className={cn("w-2 h-2 rounded-full mr-2 transition-colors", isAiProcessing ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-red-500")} />
                Demo {isAiProcessing ? "Online" : "Paused"}
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-7 border-t border-white/5 pt-8" role="list">
              {[
                { label: "First launch", val: "48H" },
                { label: "Coverage", val: "24/7" },
                { label: "Manual steps", val: "Less" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1" role="listitem">
                  <span className="text-xl lg:text-2xl font-black tracking-tighter glow-brand">{stat.val}</span>
                  <span className="text-[9px] uppercase font-bold opacity-30 tracking-[0.2em]">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Command Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 relative hidden lg:block"
          >
            <div className="glass rounded-[2.25rem] p-6 xl:p-7 border-white/10 shadow-3xl relative overflow-hidden bg-white/[0.01]">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/5">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                         <Activity size={16} className="text-secondary" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Operations_Dashboard_v4</span>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/5" />
                      <div className="w-2 h-2 rounded-full bg-white/5" />
                      <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                   </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-2 gap-5 mb-6">
                   <div className={cn("glass p-5 rounded-3xl border-white/5 transition-all group", pulse && "border-secondary/50 bg-secondary/5 shadow-[0_0_20px_rgba(56,189,248,0.1)]")}>
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-30 mb-2 block">Workflows_Handled</span>
                      <div className="flex items-end gap-3">
                         <span className="text-3xl font-black tracking-tighter text-white group-hover:text-secondary transition-colors">{workflowCount}</span>
                         <TrendingUp size={18} className="text-emerald-500 mb-2" />
                      </div>
                   </div>
                   <div className="glass p-5 rounded-3xl border-white/5 hover:border-secondary/20 transition-all group">
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-30 mb-2 block">Active_Automations</span>
                      <div className="flex items-end gap-3">
                         <span className="text-3xl font-black tracking-tighter text-white group-hover:text-secondary transition-colors">{activeFlows}</span>
                         <Zap size={18} className="text-secondary mb-2 animate-pulse" />
                      </div>
                   </div>
                </div>

                {/* Live Processing Visualization */}
                <div className="glass rounded-3xl p-5 border-white/5 mb-6 relative overflow-hidden group">
                   <div className="flex items-center justify-between mb-5">
                      <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">Operations_Queue</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-mono text-secondary animate-pulse">{lastEvent}</span>
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                            animate={{ width: isAiProcessing ? ["20%", "65%", "45%", "90%", "60%"] : "40%" }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-secondary to-accent shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                         />
                      </div>
                      <div className="flex justify-between items-center">
                         <div className="flex gap-2">
                            {[1,2,3,4,5].map(i => (
                               <motion.div 
                                  key={i}
                                  animate={{ opacity: isAiProcessing ? [0.2, 1, 0.2] : 0.2 }}
                                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                  className="w-1.5 h-1.5 rounded-full bg-secondary"
                               />
                            ))}
                         </div>
                         <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-tighter">
                           {isAiProcessing ? "Workflow_Engine_Active" : "Demo_Paused"}
                         </span>
                      </div>
                   </div>
                   
                   {/* Scanning Effect Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-linear pointer-events-none" />
                </div>

                {/* Footer Interaction */}
                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-white/10 flex items-center justify-center overflow-hidden relative">
                           <Image 
                             src={`https://i.pravatar.cc/100?img=${i + 10}`}
                             alt="Industry Expert"
                             fill
                             sizes="32px"
                             className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                           />
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[8px] font-black text-background shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                        +24
                      </div>
                   </div>
                   <div className="flex flex-col items-end">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Automated_Workflows</span>
                      <span className="text-[7px] font-mono text-emerald-500/50 uppercase">Systems_Synced</span>
                   </div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
