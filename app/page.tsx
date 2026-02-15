import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterQuickScan from "@/components/RecruiterQuickScan";
import ImpactBar from "@/components/ImpactBar";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import EventMedia from "@/components/EventMedia";
import SwedenFit from "@/components/SwedenFit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <RecruiterQuickScan />
      <ImpactBar />
      <CaseStudies />
      <EventMedia />
      <SwedenFit />
      <Footer />
    </main>
  );
}
