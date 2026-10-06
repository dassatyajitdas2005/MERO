"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Clock,
  Flame,
  Globe,
  Code2,
  FileText,
  Monitor,
  Layers,
  Settings,
  HelpCircle,
} from "lucide-react";

const LinkedinIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

type PricingTab = "mero-plans" | "individual" | "custom" | "all";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<PricingTab>("mero-plans");

  // Group 1: Individual Services
  const individualServices = [
    {
      id: "resume",
      name: "Resume",
      price: 99,
      period: "one-time",
      icon: FileText,
      tagline: "ATS-Optimized Executive Format",
      description: "Engineered to pass corporate ATS filters and highlight quantifiable career impact.",
      features: [
        "99% ATS match rate layout",
        "XYZ-metric bullet restructuring",
        "Action verbs & industry keyword density",
        "Delivery in 24 - 48 hours (PDF & Editable)",
        "1 revision cycle included",
      ],
      popular: false,
      ctaText: "Order Resume",
      link: "/contact?service=resume",
    },
    {
      id: "linkedin",
      name: "LinkedIn Optimization",
      price: 89,
      period: "one-time",
      icon: LinkedinIcon,
      tagline: "Recruiter Inbound Magnet",
      description: "Strategic profile makeover to rank in algorithmic recruiter searches.",
      features: [
        "High-intent search keyword headline",
        "Storytelling 1st-person 'About' section",
        "Experience bullet achievement metrics",
        "Custom banner & visual presentation guide",
        "Profile visibility & engagement playbook",
      ],
      popular: false,
      ctaText: "Optimize LinkedIn",
      link: "/contact?service=linkedin-optimization",
    },
    {
      id: "one-page-portfolio",
      name: "One-Page Portfolio",
      price: 199,
      period: "one-time",
      icon: Monitor,
      tagline: "Personal Web Headquarters",
      description: "A fast, sleek personal site to showcase your projects, proof of work, and bio.",
      features: [
        "Modern single-page responsive design",
        "Proof-of-work & case studies showcase",
        "1-click resume download trigger",
        "Mobile-first, lightning-fast loading",
        "Custom domain setup ready",
      ],
      popular: false,
      ctaText: "Build One-Page",
      link: "/contact?service=one-page-portfolio",
    },
    {
      id: "multi-page-portfolio",
      name: "Multi-Page Portfolio",
      price: 299,
      period: "one-time",
      icon: Globe,
      tagline: "Executive Career Portal",
      description: "Complete personal branding hub for senior builders, consultants, and leaders.",
      features: [
        "Multi-page architecture (Home, About, Work, Contact)",
        "Interactive case study galleries",
        "Full SEO meta tags & social cards",
        "Custom animations & refined typography",
        "Complete source code / live deployment",
      ],
      popular: false,
      ctaText: "Build Multi-Page",
      link: "/contact?service=multi-page-portfolio",
    },
  ];

  // Group 2: MERO Plans
  const meroPlans = [
    {
      id: "m",
      name: "M",
      subtitle: "One service",
      badge: "Starter",
      badgeColor: "neutral",
      price: 99,
      strikethrough: null,
      saveAmount: null,
      description: "Targeted single service to solve your most immediate career branding need.",
      features: [
        "Pick ANY 1 core service (Resume or LinkedIn)",
        "ATS keyword audit & strategic review",
        "Fast 24 - 48 hour turnaround",
        "1 round of revisions included",
        "Direct WhatsApp / Email delivery",
      ],
      highlighted: false,
      ctaText: "Choose M Plan",
      link: "/contact?plan=M",
    },
    {
      id: "m2",
      name: "M²",
      subtitle: "Any 2 services",
      badge: "MOST POPULAR",
      badgeColor: "orange",
      price: 179,
      strikethrough: 188,
      saveAmount: "SAVE ₹9",
      description: "The essential dual-weapon combo for active job hunters who need maximum recruiter conversion.",
      features: [
        "Bundle ANY 2 services (e.g. Resume + LinkedIn)",
        "Unified executive narrative across both assets",
        "Strategic keyword synchronization",
        "Priority 48-hour delivery",
        "2 rounds of iterative revisions",
        "Direct 1-on-1 career profile audit",
      ],
      highlighted: true,
      ctaText: "Get M² Bundle",
      link: "/contact?plan=M2",
    },
    {
      id: "m3",
      name: "M³",
      subtitle: "Resume + LinkedIn + One-Page Portfolio",
      badge: "FULL TRIFECTA",
      badgeColor: "yellow",
      price: 349,
      strikethrough: 387,
      saveAmount: "SAVE ₹38",
      description: "The complete personal branding trifecta — resume, LinkedIn, and personal website in one unified package.",
      features: [
        "Complete 3-in-1 Suite: Resume + LinkedIn + Portfolio",
        "99% ATS-proof resume with impact metrics",
        "High-ranking LinkedIn profile makeover",
        "Live One-Page Portfolio website hosted",
        "100% Brand story consistency across all channels",
        "VIP expedited turnaround & priority support",
      ],
      highlighted: false,
      ctaText: "Get M³ Trifecta",
      link: "/contact?plan=M3",
    },
  ];

  // Group 3: Custom Solutions
  const customWebsites = [
    {
      id: "landing-website",
      name: "Landing Website",
      price: "From ₹999",
      period: "one-time",
      icon: Zap,
      tagline: "High-Converting Single Page",
      description: "Designed for product launches, freelancers, and personal brand campaigns with clear lead capture.",
      turnaround: "3 - 5 Days",
      features: [
        "Conversion-focused single page design",
        "Modern responsive UI with smooth animations",
        "Lead capture & contact form integration",
        "Speed optimized (95+ Lighthouse score)",
        "Custom domain configuration",
      ],
      ctaText: "Get Landing Website",
      link: "/contact?solution=landing-website",
    },
    {
      id: "business-website",
      name: "Business Website",
      price: "From ₹1,999",
      period: "one-time",
      icon: Globe,
      tagline: "Multi-Page Corporate Presence",
      description: "Full-scale corporate site for businesses, agencies, and ventures seeking instant digital authority.",
      turnaround: "5 - 7 Days",
      features: [
        "5 to 8 custom responsive pages",
        "CMS integration for blogs & case studies",
        "Google SEO setup & meta tags",
        "Client testimonials & booking integration",
        "Mobile-first, cross-browser compatibility",
      ],
      ctaText: "Get Business Website",
      link: "/contact?solution=business-website",
    },
    {
      id: "premium-website",
      name: "Premium Website",
      price: "From ₹3,999",
      period: "one-time",
      icon: Sparkles,
      tagline: "Bespoke Digital Flagship",
      description: "Handcrafted web experience with custom micro-interactions, Next.js architecture, and elite polish.",
      turnaround: "7 - 12 Days",
      features: [
        "Next.js 16 + React 19 state-of-the-art stack",
        "Bespoke Framer Motion interactions",
        "98+ Google Lighthouse performance guarantee",
        "Custom design tokens & responsive components",
        "Full source repository & CI/CD deployment",
      ],
      ctaText: "Get Premium Website",
      link: "/contact?solution=premium-website",
    },
  ];

  const customCareAndSystems = [
    {
      id: "website-care",
      name: "Website Care",
      price: "₹299",
      period: "/month",
      icon: ShieldCheck,
      tagline: "Reliable Upkeep & Security",
      description: "Keep your site secure, updated, and running smoothly without lifting a finger.",
      features: [
        "24/7 uptime & health monitoring",
        "Weekly encrypted backups",
        "Security patches & dependency updates",
        "Monthly minor content & asset updates",
        "Emergency bug resolution",
      ],
      ctaText: "Start Website Care",
      link: "/contact?solution=website-care",
    },
    {
      id: "website-pro",
      name: "Website Pro",
      price: "₹599",
      period: "/month",
      icon: Layers,
      tagline: "Dedicated Growth Partner",
      description: "Proactive speed optimization, SEO auditing, and priority development hours each month.",
      features: [
        "Priority 24-hour turnaround for requests",
        "Monthly speed & SEO audit reports",
        "Unlimited minor revisions & tweaks",
        "Direct WhatsApp technical support",
        "Performance & conversion recommendations",
      ],
      ctaText: "Start Website Pro",
      link: "/contact?solution=website-pro",
    },
    {
      id: "custom-system",
      name: "Custom Business System",
      price: "Let’s Talk",
      period: "custom scope",
      icon: Settings,
      badge: "BESPOKE",
      tagline: "CRM, Dashboard, Booking, Automation",
      description: "Tailored internal operations tools engineered to automate manual work and scale revenue.",
      features: [
        "Custom CRM & client management dashboards",
        "Automated booking, scheduling & payments",
        "Multi-step webhook & API automations",
        "Role-based access & database integration",
        "Free discovery & architecture scoping call",
      ],
      ctaText: "Let’s Talk",
      link: "/contact?solution=custom-business-system",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 md:py-28 bg-[#121214] text-white overflow-hidden border-t border-neutral-800/40"
    >
      {/* Invisible anchor for backward compatibility with #blog */}
      <div id="blog" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Ambient Radial Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-gradient-to-tr from-[#f97316]/10 via-[#facc15]/8 to-transparent blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[450px] rounded-full bg-gradient-to-br from-[#ea580c]/8 via-transparent to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#facc15] shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#facc15]" />
            <span>TRANSPARENT PRICING • NO HIDDEN FEES</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]"
          >
            Start small. Build your professional identity.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Pay only for what you need. Upgrade whenever you&apos;re ready.
          </motion.p>
        </div>

        {/* Pricing Category Tabs Switcher */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#18181c] border border-neutral-800 shadow-xl max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("mero-plans")}
              className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeTab === "mero-plans"
                  ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-md shadow-orange-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Zap className="h-3.5 w-3.5" />
              <span>MERO Plans</span>
              <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-black/30 text-amber-200">
                Bundles
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("individual")}
              className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeTab === "individual"
                  ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-md shadow-orange-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Individual Services</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("custom")}
              className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeTab === "custom"
                  ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-md shadow-orange-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>Custom Solutions</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`relative px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === "all"
                  ? "bg-neutral-700/80 text-white shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>View All</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait">
            {/* VIEW 1: MERO PLANS */}
            {(activeTab === "mero-plans" || activeTab === "all") && (
              <motion.div
                key="mero-plans-section"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className={activeTab === "all" ? "mb-20" : ""}
              >
                {activeTab === "all" && (
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-1.5 rounded-full bg-[#f97316]" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        2. MERO Plans (Bundled Value)
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400">
                        Multi-service packages with exclusive savings & synchronized brand storytelling.
                      </p>
                    </div>
                  </div>
                )}

                {/* 3 Cards Grid for MERO Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                  {meroPlans.map((plan) => (
                    <motion.div
                      key={plan.id}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-gradient-to-b from-[#1b1917] via-[#161619] to-[#141416] border-2 border-[#f97316] shadow-2xl shadow-orange-500/15 md:-translate-y-2"
                          : "bg-[#161619] border border-neutral-800/90 hover:border-neutral-700 shadow-xl"
                      }`}
                    >
                      {/* Top Badges / Highlight Pill */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          {plan.badge === "MOST POPULAR" ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-md shadow-orange-500/30">
                              <Flame className="h-3.5 w-3.5" />
                              MOST POPULAR
                            </span>
                          ) : plan.badge === "FULL TRIFECTA" ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30">
                              <Sparkles className="h-3 w-3" />
                              {plan.badge}
                            </span>
                          ) : (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-400 border border-neutral-700/60">
                              {plan.badge}
                            </span>
                          )}
                        </div>

                        {/* Save Amount Chip */}
                        {plan.saveAmount && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            {plan.saveAmount}
                          </span>
                        )}
                      </div>

                      {/* Plan Header */}
                      <div>
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            {plan.name}
                          </h3>
                          <span className="text-sm font-semibold text-neutral-400">
                            — {plan.subtitle}
                          </span>
                        </div>

                        <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed min-h-[40px]">
                          {plan.description}
                        </p>

                        {/* Pricing Display */}
                        <div className="mt-6 pt-6 border-t border-neutral-800/80 flex items-baseline gap-2">
                          <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                            ₹{plan.price}
                          </span>
                          {plan.strikethrough && (
                            <span className="text-base sm:text-lg text-neutral-500 line-through font-medium">
                              ₹{plan.strikethrough}
                            </span>
                          )}
                          <span className="text-xs text-neutral-400 font-medium">
                            / total package
                          </span>
                        </div>

                        {/* Feature Bullet List */}
                        <div className="mt-6 space-y-3">
                          <p className="text-xs uppercase tracking-wider font-bold text-neutral-300">
                            What&apos;s Included:
                          </p>
                          <ul className="space-y-2.5">
                            {plan.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-snug"
                              >
                                <span
                                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                                    plan.highlighted
                                      ? "bg-[#f97316]/20 text-[#f97316]"
                                      : "bg-neutral-800 text-amber-400"
                                  }`}
                                >
                                  <Check className="h-3 w-3 stroke-[2.5]" />
                                </span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 pt-6 border-t border-neutral-800/80">
                        <Link
                          href={plan.link}
                          className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl py-3.5 px-6 text-sm font-bold transition-all duration-200 shadow-md ${
                            plan.highlighted
                              ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white shadow-orange-500/25 hover:shadow-orange-500/40"
                              : "bg-[#202024] hover:bg-neutral-800 text-white border border-neutral-700/80 hover:border-neutral-600"
                          }`}
                        >
                          <span>{plan.ctaText}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Sub-banner when viewing just MERO Plans */}
                {activeTab === "mero-plans" && (
                  <div className="mt-8 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <Sparkles className="h-4 w-4 text-[#facc15] shrink-0" />
                      <span>
                        Need only a single service? Or ready for a custom web development package?
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab("individual")}
                        className="text-xs font-semibold text-[#f97316] hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        Individual Services (from ₹89) →
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* VIEW 2: INDIVIDUAL SERVICES */}
            {(activeTab === "individual" || activeTab === "all") && (
              <motion.div
                key="individual-services-section"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className={activeTab === "all" ? "mb-20" : ""}
              >
                {activeTab === "all" && (
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-1.5 rounded-full bg-[#facc15]" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        1. Individual Services (A La Carte)
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400">
                        Order single high-impact services with zero long-term commitments.
                      </p>
                    </div>
                  </div>
                )}

                {/* 4 Cards Grid for Individual Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
                  {individualServices.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.25 }}
                        className="relative flex flex-col justify-between rounded-3xl bg-[#161619] border border-neutral-800/90 hover:border-neutral-700/90 p-6 shadow-xl transition-all duration-300 group"
                      >
                        <div>
                          {/* Top Icon & Tag */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-800/80 border border-neutral-700/50 text-[#facc15] group-hover:text-[#f97316] transition-colors">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                              A La Carte
                            </span>
                          </div>

                          {/* Title & Tagline */}
                          <h3 className="text-xl font-bold text-white tracking-tight">
                            {service.name}
                          </h3>
                          <p className="text-xs text-[#f97316] font-medium mt-1">
                            {service.tagline}
                          </p>

                          <p className="mt-3 text-xs text-neutral-400 leading-relaxed min-h-[36px]">
                            {service.description}
                          </p>

                          {/* Price Tag */}
                          <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-baseline gap-1.5">
                            <span className="text-3xl font-black text-white tracking-tight">
                              ₹{service.price}
                            </span>
                            <span className="text-xs text-neutral-400 font-medium">
                              / {service.period}
                            </span>
                          </div>

                          {/* Features List */}
                          <ul className="mt-5 space-y-2 border-t border-neutral-800/60 pt-4">
                            {service.features.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs text-neutral-300 leading-snug"
                              >
                                <Check className="h-3.5 w-3.5 text-[#facc15] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Link */}
                        <div className="mt-6 pt-4 border-t border-neutral-800/80">
                          <Link
                            href={service.link}
                            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-neutral-800/90 hover:bg-[#f97316] text-neutral-200 hover:text-white py-3 text-xs font-bold transition-all duration-200 border border-neutral-700/60 hover:border-orange-500 shadow-sm"
                          >
                            <span>{service.ctaText}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* VIEW 3: CUSTOM SOLUTIONS */}
            {(activeTab === "custom" || activeTab === "all") && (
              <motion.div
                key="custom-solutions-section"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                {activeTab === "all" && (
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-1.5 rounded-full bg-emerald-500" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        3. Custom Solutions & Business Systems
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400">
                        Tailored web development, ongoing site care, and bespoke operational tools.
                      </p>
                    </div>
                  </div>
                )}

                {/* Sub-header 1: Website Making */}
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-[#f97316]" />
                    Custom Website Development
                  </h4>
                  <span className="text-xs text-neutral-500 font-mono">Turnaround: 3 to 12 Days</span>
                </div>

                {/* 3 Cards: Websites */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
                  {customWebsites.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={item.id}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.25 }}
                        className="relative flex flex-col justify-between rounded-3xl bg-[#161619] border border-neutral-800/90 hover:border-neutral-700 p-6 sm:p-7 shadow-xl transition-all duration-300"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-800/80 border border-neutral-700/50 text-[#facc15]">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <span className="text-[11px] font-semibold text-neutral-400 flex items-center gap-1 font-mono">
                              <Clock className="h-3 w-3" />
                              {item.turnaround}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#f97316] font-medium mt-1">
                            {item.tagline}
                          </p>

                          <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed min-h-[44px]">
                            {item.description}
                          </p>

                          {/* Price Tag */}
                          <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-baseline gap-1.5">
                            <span className="text-3xl font-black text-white tracking-tight">
                              {item.price}
                            </span>
                            <span className="text-xs text-neutral-400 font-medium">
                              / {item.period}
                            </span>
                          </div>

                          {/* Features */}
                          <ul className="mt-5 space-y-2 border-t border-neutral-800/60 pt-4">
                            {item.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-snug"
                              >
                                <Check className="h-3.5 w-3.5 text-[#facc15] shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 pt-4 border-t border-neutral-800/80">
                          <Link
                            href={item.link}
                            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-neutral-800/90 hover:bg-[#f97316] text-neutral-200 hover:text-white py-3 text-xs sm:text-sm font-bold transition-all duration-200 border border-neutral-700/60 hover:border-orange-500 shadow-sm"
                          >
                            <span>{item.ctaText}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Sub-header 2: Website Care & Custom Business Systems */}
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                    <Settings className="h-4 w-4 text-[#facc15]" />
                    Website Maintenance & Custom Business Systems
                  </h4>
                  <span className="text-xs text-neutral-500">Monthly Care & Bespoke Tooling</span>
                </div>

                {/* 3 Cards: Website Care, Pro & Custom Business System */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {customCareAndSystems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={item.id}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.25 }}
                        className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 shadow-xl transition-all duration-300 ${
                          item.badge === "BESPOKE"
                            ? "bg-gradient-to-b from-[#1b1917] via-[#161619] to-[#141416] border-2 border-amber-400/60 hover:border-amber-400 shadow-amber-500/10"
                            : "bg-[#161619] border border-neutral-800/90 hover:border-neutral-700"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-800/80 border border-neutral-700/50 text-[#facc15]">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            {item.badge && (
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#f97316] font-medium mt-1">
                            {item.tagline}
                          </p>

                          <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed min-h-[44px]">
                            {item.description}
                          </p>

                          {/* Price Tag */}
                          <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-baseline gap-1.5">
                            <span className="text-3xl font-black text-white tracking-tight">
                              {item.price}
                            </span>
                            <span className="text-xs text-neutral-400 font-medium">
                              {item.period}
                            </span>
                          </div>

                          {/* Features */}
                          <ul className="mt-5 space-y-2 border-t border-neutral-800/60 pt-4">
                            {item.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-snug"
                              >
                                <Check className="h-3.5 w-3.5 text-[#facc15] shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 pt-4 border-t border-neutral-800/80">
                          <Link
                            href={item.link}
                            className={`w-full inline-flex items-center justify-center gap-1.5 rounded-xl py-3 text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm ${
                              item.badge === "BESPOKE"
                                ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white shadow-orange-500/25"
                                : "bg-neutral-800/90 hover:bg-[#f97316] text-neutral-200 hover:text-white border border-neutral-700/60 hover:border-orange-500"
                            }`}
                          >
                            <span>{item.ctaText}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* High-Trust Value Assurance Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-18 rounded-3xl border border-neutral-800 bg-[#161619]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-[#f97316] border border-orange-500/20">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Fast Turnaround</h5>
                <p className="text-xs text-neutral-400">24 to 48 hours for core documents</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#facc15] border border-amber-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">100% Confidential</h5>
                <p className="text-xs text-neutral-400">Your career data is never shared</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Check className="h-5 w-5 stroke-[2.5]" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Revisions Included</h5>
                <p className="text-xs text-neutral-400">Iterative polish till you are satisfied</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Need Consultation?</h5>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-[#f97316] hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Talk with Satyajit</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
