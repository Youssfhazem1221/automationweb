"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "48hrs", label: "Avg. Deployment" },
  { value: "3x", label: "Lead Response" },
  { value: "100%", label: "Done For You" },
  { value: "0", label: "Leads Lost" },
];

export default function Metrics() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-2 group-hover:text-primary transition-colors">
                {metric.value}
              </div>
              <div className="text-foreground/40 text-xs font-bold uppercase tracking-widest">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Visual accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
