import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-muted/10 border-t border-white/5 pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <div className="w-4 h-4 border-2 border-white skew-x-[-12deg]" />
              </div>
              <span className="font-heading text-lg font-extrabold tracking-tighter">
                Proxy Solutions
              </span>
            </Link>
            <p className="text-foreground/40 text-sm leading-relaxed">
              Done-for-you AI automation systems for real estate agencies, clinics, and e-commerce brands that want every lead captured and every follow-up handled.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-foreground/40">
              <li><Link href="#services" className="hover:text-primary transition-colors">AI Growth System</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">CRM Pack</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Micro Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Niches</h4>
            <ul className="space-y-4 text-sm text-foreground/40">
              <li><Link href="#niches" className="hover:text-primary transition-colors">Real Estate</Link></li>
              <li><Link href="#niches" className="hover:text-primary transition-colors">Clinics</Link></li>
              <li><Link href="#niches" className="hover:text-primary transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-foreground/40">
              <li><Link href="#top" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-foreground/40 font-medium">
            &copy; {new Date().getFullYear()} Proxy Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-foreground/40 font-medium">
            <span>Built for Teams in MENA, UK, US, and EU.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
