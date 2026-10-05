import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import ConfidenceBanner from "@/components/sections/ConfidenceBanner";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services | MERO - Executive Career & Digital Presence",
  description:
    "Explore MERO's specialized services: LinkedIn Optimization, ATS Resume Building, Website Making, and Personal Portfolios.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-full pt-4 sm:pt-8">
      <ServicesSection />
      <ConfidenceBanner />
      <FinalCTA />
    </div>
  );
}
