"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  HelpCircle,
} from "lucide-react";

interface PricingPlan {
  id: string;
  title: string;
  badge?: string;
  topBorderColor: string; // Hex color for card top stripe
  accentColor: string; // Color for large price text
  price: string;
  originalPrice: string;
  pricePrefix?: string;
  priceSuffix: string;
  subTagline: string;
  isCustomPoints?: boolean;
  points?: Array<{
    name: string;
    price?: string;
    desc: string;
    isLink?: boolean;
    href?: string;
  }>;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export default function PricingSection() {
  const plans: PricingPlan[] = [
    {
      id: "whatsapp-crm",
      title: "WhatsApp CRM",
      badge: "POPULAR",
      topBorderColor: "#f43f5e", // Coral/Red top border (matching screenshot column 2)
      accentColor: "#f43f5e",
      price: "1,700",
      originalPrice: "3,999", // User specified: "what app crm ka price set kero 1700 and side main 3999 ko upper se red se cross kero"
      pricePrefix: "Rs",
      priceSuffix: "starting",
      subTagline: "Automated WhatsApp chatbot & team inbox",
      features: [
        "Connect your business with WhatsApp messaging",
        "Automated Customer Messaging",
        "Approved templates for eligible business messaging",
        "24/7 Customer Support",
        "1-Month CRM Warranty: Receive support for eligible CRM issues for one month after purchase",
        "Purchase the CRM for ₹1,700 and get access to affordable SMS top-ups (₹200 SMS top-up to send up to 100 business SMS messages to your customers)",
      ],
      ctaText: "START NOW",
      ctaHref: "/contact?service=whatsapp-crm",
    },
    {
      id: "website",
      title: "Website",
      topBorderColor: "#10b981", // Teal/Emerald top border (matching screenshot column 3)
      accentColor: "#10b981",
      price: "2,899",
      originalPrice: "4,999",
      pricePrefix: "Rs",
      priceSuffix: "starting",
      subTagline: "High-performance, bespoke web architecture",
      isCustomPoints: true,
      // User's exact 3 required tiers for Website:
      points: [
        {
          name: "Static Website",
          price: "₹2,899",
          desc: "Ultra-fast single-page landing site, lead forms & 95+ speed",
        },
        {
          name: "Dynamic Website",
          price: "₹4,899",
          desc: "Multi-page corporate site, CMS blog & database integration",
        },
        {
          name: "Other Category",
          price: "Contact Us",
          desc: "Bespoke SaaS platforms, custom portals & web applications",
          isLink: true,
          href: "/contact?service=custom-website",
        },
      ],
      features: [
        "Ultra-fast loading speed (95+ Lighthouse)",
        "Mobile responsive & clean modern UI",
        "SEO meta tags & social open graph preview",
        "Free SSL & continuous zero-downtime hosting",
      ],
      ctaText: "BUY NOW",
      ctaHref: "/contact?service=website",
    },
    {
      id: "stock-management",
      title: "Stock Management",
      topBorderColor: "#f59e0b", // Amber/Gold top border
      accentColor: "#f59e0b",
      price: "4,899",
      originalPrice: "6,999",
      pricePrefix: "Rs",
      priceSuffix: "starting",
      subTagline: "Real-time inventory & warehouse control",
      features: [
        "Expiry date alerts for near-expiry products",
        "Real-time stock count and inventory tracking",
        "Total sales overview and reporting",
        "Total purchases tracking",
        "Revenue monitoring and business performance reports",
        "View stock levels, sales, purchases, and revenue at a glance",
        "Generate bills, manage invoices, and track payments efficiently",
      ],
      ctaText: "BUY NOW",
      ctaHref: "/contact?service=stock-management",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 bg-white dark:bg-[#121214] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300"
    >
      {/* Invisible anchor for backward compatibility */}
      <div id="blog" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Subtle Ambient Radial Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-gradient-to-tr from-[#f97316]/8 via-[#facc15]/6 to-transparent blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[450px] rounded-full bg-gradient-to-br from-[#0ea5e9]/6 via-transparent to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: EXACT MATCH TO SCREENSHOT (HANDWRITTEN WITH HIGHLIGHT)     */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] select-none"
          >
            <span>You are not </span>
            
            {/* Hand-drawn coral/red highlight underline on "dreaming!" matching screenshot */}
            <span className="relative inline-block px-1 text-slate-900 dark:text-white font-bold select-none">
              <span>dreaming!</span>
              <svg
                className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-3 sm:h-4 text-[#f43f5e] overflow-visible pointer-events-none select-none"
                viewBox="0 0 160 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 4 11 C 45 4, 110 4, 156 10"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          {/* Subtitle in MERO theme subtext style */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-script text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 dark:text-neutral-300 mt-3 sm:mt-4 max-w-xl mx-auto select-none"
          >
            Affordable, transparent pricing tailored to scale your business
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 3 PRICING CARDS: EXACT MATCH TO ODOO SCREENSHOT FORMAT                    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white dark:bg-[#18181c] border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Colored Top Border Stripe (matching screenshot) */}
                <div
                  className="h-2 w-full shrink-0"
                  style={{ backgroundColor: plan.topBorderColor }}
                />

                <div className="p-5 sm:p-8 flex flex-col flex-1">
                  
                  {/* Card Title & Optional Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {plan.title}
                    </h3>
                    {plan.badge && (
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 border border-rose-300 dark:border-rose-800 shrink-0">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Sub-tagline */}
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5 min-h-[32px] leading-relaxed">
                    {plan.subTagline}
                  </p>

                  {/* Price Area: Matching Screenshot (Large colored number + red crossed-out 3999 / original price) */}
                  <div className="mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800/80">
                    <div className="flex items-baseline gap-2">
                      {/* Currency Prefix */}
                      <span
                        className="text-xl sm:text-2xl font-black"
                        style={{ color: plan.accentColor }}
                      >
                        {plan.pricePrefix}
                      </span>

                      {/* Main Large Price Number */}
                      <span
                        className="text-4xl sm:text-5xl font-black tracking-tight"
                        style={{ color: plan.accentColor }}
                      >
                        {plan.price}
                      </span>

                      {/* Original Price with Red Diagonal Slash (User requested: 3999 ko red se cross kero) */}
                      <div className="relative inline-flex items-center ml-1 text-xs sm:text-sm font-semibold text-neutral-400 select-none">
                        <span>{plan.originalPrice} Rs</span>
                        <span className="text-[#f43f5e] font-bold ml-0.5">*</span>
                        {/* Red diagonal strikethrough slash */}
                        <svg
                          className="absolute -inset-x-1 inset-y-0 w-[calc(100%+8px)] h-full text-[#f43f5e] pointer-events-none"
                          viewBox="0 0 100 24"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <line
                            x1="0"
                            y1="20"
                            x2="100"
                            y2="4"
                            stroke="currentColor"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Suffix label (e.g. / month or starting) */}
                    <div className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 mt-1">
                      {plan.priceSuffix}
                    </div>
                  </div>

                  {/* Content Area */}
                  {plan.isCustomPoints && plan.points ? (
                    /* Custom 3 Points Format Specifically for Website (as requested) */
                    <div className="space-y-3.5 mb-6 flex-1">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-neutral-200 block mb-2">
                        Options &amp; Tiers:
                      </span>
                      {plan.points.map((pt) => (
                        <div
                          key={pt.name}
                          className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-[#1e1f24] p-3 text-left transition-colors hover:border-emerald-500/40"
                        >
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                              {pt.name}
                            </span>
                            {pt.isLink ? (
                              <Link
                                href={pt.href || "/contact"}
                                className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#10b981] hover:underline"
                              >
                                <span>{pt.price}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            ) : (
                              <span className="text-xs font-black text-[#10b981]">
                                {pt.price}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
                            {pt.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Standard Features Bullet List */
                    <div className="space-y-3 mb-6 flex-1">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-neutral-200 block mb-2">
                        Included features:
                      </span>
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{
                              backgroundColor: `${plan.topBorderColor}18`,
                              color: plan.topBorderColor,
                            }}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Action CTA Button: Exactly matching screenshot solid purple/charcoal button */}
                  <div className="mt-auto pt-2">
                    <Link
                      href={plan.ctaHref}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#714b67] hover:bg-[#5b3c53] active:bg-[#4a3144] text-white py-3.5 px-4 text-xs sm:text-sm font-black tracking-wider uppercase shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* VALUE ASSURANCE BAR AT BOTTOM                                             */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#161619]/90 p-6 sm:p-8 backdrop-blur-md shadow-md max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/20">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">Fast Deployment</h5>
                <p className="text-xs text-slate-600 dark:text-neutral-400">Rapid 3 to 7 days delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">Official APIs &amp; Code</h5>
                <p className="text-xs text-slate-600 dark:text-neutral-400">Full source &amp; Meta verified</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                <Check className="h-5 w-5 stroke-[2.5]" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">Zero Hidden Charges</h5>
                <p className="text-xs text-slate-600 dark:text-neutral-400">Transparent flat pricing</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#714b67]/10 text-[#714b67] dark:text-purple-300 border border-[#714b67]/20">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">Need Consultation?</h5>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-[#f97316] hover:text-[#ea580c] dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Talk with our team</span>
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
