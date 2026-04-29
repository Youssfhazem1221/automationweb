import { Search, PenTool, Share2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find the revenue leaks",
    desc: "We audit your lead sources, response times, follow-up gaps, CRM handoff, and booking flow so the build starts with the highest-ROI bottleneck.",
    day: "Step 01",
  },
  {
    icon: PenTool,
    title: "Build the conversion flow",
    desc: "We write the logic, connect the tools, train the assistant on your offer, and map every qualified lead to the correct next step.",
    day: "Step 02",
  },
  {
    icon: Share2,
    title: "Launch and optimize",
    desc: "Your system goes live, your team gets the handoff process, and we tune the automations against real buyer conversations.",
    day: "Step 03",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-secondary/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">The Process</span>
            <div className="h-[1px] w-8 bg-secondary/50" />
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter">
            From manual follow-up <br />
            <span className="serif italic lowercase font-normal opacity-90 text-secondary">to automated bookings.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-white/5 -z-10" />

          <div className="grid lg:grid-cols-3 gap-20">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative text-center group"
              >
                <div className="w-24 h-24 rounded-full glass flex items-center justify-center text-white mx-auto mb-12 relative z-10 group-hover:bg-secondary group-hover:text-background transition-all duration-700 shadow-2xl">
                  <step.icon size={32} strokeWidth={1.5} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full glass text-[10px] font-black flex items-center justify-center border border-accent/30 text-accent">
                    0{idx + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight mb-6">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-[300px] mx-auto font-medium">
                  {step.desc}
                </p>
                <div className="mt-8 inline-block py-1.5 px-6 rounded-full glass text-[10px] font-black uppercase tracking-[0.2em] text-white/65">
                  {step.day}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 p-16 glass rounded-[3rem] text-center border-white/5 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-[clamp(1.5rem,4vw,3.5rem)] font-black uppercase leading-none mb-8 tracking-tighter">Want to know what is leaking revenue?</h3>
            <p className="text-white/45 mb-12 max-w-xl mx-auto text-lg font-medium leading-relaxed">
              The free audit shows where leads slow down, where follow-up breaks, and what automation should be built first for the fastest payback.
            </p>
            <a href="#contact" className="btn-primary w-full max-w-sm mx-auto justify-center">
              Request Free Audit
            </a>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary/[0.06] to-transparent pointer-events-none group-hover:from-accent/[0.08] transition-all duration-1000" />
        </div>
      </div>
    </section>
  );
}
