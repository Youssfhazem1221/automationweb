import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SystemDashboard from "@/components/SystemDashboard";
import HowItWorks from "@/components/HowItWorks";
import Niches from "@/components/Niches";
import Metrics from "@/components/Metrics";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MissionLogs from "@/components/MissionLogs";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Metrics />
      <Niches />
      <Services />
      <SystemDashboard />
      <HowItWorks />
      <MissionLogs />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
