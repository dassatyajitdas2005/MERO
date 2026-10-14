import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services | MERO - Digital Presence & Software Solutions",
  description:
    "Explore MERO's specialized services: Static Website, Custom Software, WhatsApp CRM, and Stock Management Software.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-full pt-4 sm:pt-8">
      <ServicesSection />
    </div>
  );
}

