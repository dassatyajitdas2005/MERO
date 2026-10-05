import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | MERO - Let's Craft the Perfect Solution",
  description:
    "Have questions or want to discuss a project? Reach out to MERO for executive resumes, LinkedIn optimization, and bespoke portfolio websites.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-full">
      <ContactSection />
    </div>
  );
}

