import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Niches from "@/components/Niches";
import Metrics from "@/components/Metrics";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Metrics />
      <Services />
      <HowItWorks />
      <Niches />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}

