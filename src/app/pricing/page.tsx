import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Pricing | MERO - Start small. Build your professional identity.",
  description:
    "Transparent pricing for executive resumes, LinkedIn optimization, personal portfolios, custom websites, and business systems.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-full pt-4 sm:pt-8">
      <PricingSection />
    </div>
  );
}
