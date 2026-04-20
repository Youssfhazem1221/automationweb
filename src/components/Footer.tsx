import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-32 pb-16 relative overflow-hidden" aria-label="Site Footer">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white/5 flex items-center justify-center p-1 border border-white/10 group-hover:border-secondary/50 transition-colors">
                <Image 
                  src="/logo.png" 
                  alt="Velora Logo" 
                  width={32} 
                  height={32} 
                  className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-tighter uppercase leading-none text-white">
                  Velora
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 leading-none mt-0.5 text-secondary">
                  AI Ops
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Done-for-you AI automation for teams that want faster replies, cleaner follow-up, and more booked sales conversations without adding headcount.
            </p>
          </div>

          <nav aria-label="Footer Service Links">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-10">Services</h4>
            <ul className="space-y-5 text-xs font-black uppercase tracking-[0.1em] text-white/40">
              <li><Link href="#services" className="hover:text-secondary transition-colors">Instant Lead Response</Link></li>
              <li><Link href="#services" className="hover:text-secondary transition-colors">Qualification & Booking</Link></li>
              <li><Link href="#services" className="hover:text-secondary transition-colors">Automation Sprint</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer Sector Links">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-10">Sectors</h4>
            <ul className="space-y-5 text-xs font-black uppercase tracking-[0.1em] text-white/40">
              <li><Link href="#niches" className="hover:text-secondary transition-colors">Real Estate</Link></li>
              <li><Link href="#niches" className="hover:text-secondary transition-colors">Clinics</Link></li>
              <li><Link href="#niches" className="hover:text-secondary transition-colors">E-commerce</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer Action Links">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-10">Next Step</h4>
            <ul className="space-y-5 text-xs font-black uppercase tracking-[0.1em] text-white/40">
              <li><Link href="#contact" className="hover:text-secondary transition-colors">Request Free Audit</Link></li>
              <li><Link href="#faq" className="hover:text-secondary transition-colors">Read FAQ</Link></li>
              <li><Link href="#how-it-works" className="hover:text-secondary transition-colors">See Process</Link></li>
            </ul>
          </nav>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Velora // AI Automation Agency.
          </p>
          <div className="flex items-center gap-8 text-[10px] text-white/10 font-black uppercase tracking-[0.2em]">
             <span className="flex items-center gap-2">
               <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
               MENA // EU // US
             </span>
          </div>
        </div>
      </div>

      {/* Deep Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-secondary/[0.05] via-accent/[0.03] to-transparent pointer-events-none" />
    </footer>
  );
}
