import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Pricing | MERO - Simple, Transparent Software Pricing",
  description:
    "Transparent pricing for CRM systems, WhatsApp CRM automation, custom website development, and stock management software.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-full">
      <PricingSection />
    </div>
  );
}
