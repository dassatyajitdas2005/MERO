"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ExternalLink, X, CheckCircle2, Quote } from "lucide-react";

interface ClientReview {
  id: string;
  name: string;
  role: string;
  location: string;
  initial: string;
  shortText: string;
  fullText: string;
  service: string;
  deliveryTime: string;
  rating: number;
}

const reviews: ClientReview[] = [
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "Salon Owner",
    location: "Kolkata, WB",
    initial: "P",
    shortText: "Their WhatsApp CRM setup automated our customer bookings and inquiries. Very professional and creative team.",
    fullText: "Before working with MERO, our salon staff spent at least 3 to 4 hours every day manually replying to WhatsApp messages and writing down appointment bookings in a register. MERO set up an automated WhatsApp CRM with instant service menus, automatic slot confirmation, and reminder alerts. Our customer no-shows dropped by over 60%, and our booking volume increased within the first two weeks. Truly the best investment for our salon!",
    service: "WhatsApp CRM & Automation",
    deliveryTime: "4 Days",
    rating: 5,
  },
  {
    id: "rohan-das",
    name: "Rohan Das",
    role: "Grocery Store Owner",
    location: "Siliguri, WB",
    initial: "R",
    shortText: "The website design they delivered is sleek, fast, and converting customers like crazy. Great ROI!",
    fullText: "We wanted an online ordering catalog for our local grocery mart so customers could order fresh vegetables and daily essentials directly from their phones. MERO designed and launched a lightning-fast modern store with easy WhatsApp checkout. We got over 120 orders in our very first week. The support team is always responsive and helpful whenever we need product updates.",
    service: "E-Commerce Website & Ordering",
    deliveryTime: "5 Days",
    rating: 5,
  },
  {
    id: "ananya-manna",
    name: "Ananya Manna",
    role: "Beauty Parlor Owner",
    location: "Howrah, WB",
    initial: "A",
    shortText: "Amazing digital solutions and fast delivery within 6 days. Highly transparent reporting. They know what they are doing.",
    fullText: "Finding a reliable agency for local digital marketing and booking pages was tough until we connected with MERO. They built our website and launched our promotional campaign in just 6 days. The reporting was completely transparent, with clear metrics on calls and leads generated. We booked out all weekend bridal slots in our first month!",
    service: "Digital Marketing & Landing Page",
    deliveryTime: "6 Days",
    rating: 5,
  },
  {
    id: "vikram-sen",
    name: "Vikram Sen",
    role: "Retail Store Manager",
    location: "Durgapur, WB",
    initial: "V",
    shortText: "Inventory software made multi-branch stock control so simple. Saved our staff 15+ hours every week!",
    fullText: "Managing inventory between our three retail outlets used to be a complete logistical headache with frequent stockouts and discrepancies. MERO developed a custom cloud inventory system tailored specifically for our staff with barcode scanning and low-stock alerts. It saved our managers over 15 hours every week and eliminated billing errors completely.",
    service: "Custom ERP & Inventory Software",
    deliveryTime: "10 Days",
    rating: 5,
  },
  {
    id: "rajesh-gupta",
    name: "Rajesh Gupta",
    role: "Fitness Studio Founder",
    location: "Asansol, WB",
    initial: "R",
    shortText: "Outstanding 24/7 support. Whenever we needed urgent tweaks, the M² team resolved them immediately.",
    fullText: "MERO created our gym membership portal, automated monthly renewal reminders, and member check-in tracking. What impressed me most was their dedication—anytime we had an urgent question or requested a custom feature, their team responded within minutes. You rarely see this level of commitment and passion from tech agencies today.",
    service: "Membership Portal & Automation",
    deliveryTime: "7 Days",
    rating: 5,
  },
];

export default function BrandControl() {
  const [selectedReview, setSelectedReview] = useState<ClientReview | null>(null);

  // Close modal on Escape key press & prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedReview(null);
      }
    };

    if (selectedReview) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedReview]);

  return (
    <section className="relative py-10 sm:py-14 md:py-16 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: "WHY PEOPLE LOVE US" (MATCHING HANDWRITTEN SCRIPT STYLE)  */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-script text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2] select-none"
          >
            <span>Why </span>
            <span className="relative inline-block text-slate-900 dark:text-white">
              people love us
              {/* Hand-drawn amber brush stroke underline matching MERO brand */}
              <svg
                className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-3 sm:h-4 text-[#f59e0b] overflow-visible pointer-events-none"
                viewBox="0 0 180 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 4 11 C 45 3, 110 4, 175 10"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-slate-600 dark:text-neutral-300 mt-3 sm:mt-5 select-none"
          >
            Real reviews from businesses scaling with MERO
          </motion.p>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5 CARDS CONTINUOUS SMOOTH MARQUEE (RIGHT TO LEFT)                         */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        
        {/* Side fade masks for seamless right-to-left marquee entrance & exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 z-10 bg-gradient-to-r from-white dark:from-[#121214] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 z-10 bg-gradient-to-l from-white dark:from-[#121214] to-transparent" />

        {/* Marquee Track (Loops seamlessly right-to-left, pauses on hover) */}
        <div className="flex animate-marquee-rtl gap-6 hover:[animation-play-state:paused] px-4">
          {[...reviews, ...reviews, ...reviews].map((rev, idx) => (
            <div
              key={`${rev.name}-${idx}`}
              onClick={() => setSelectedReview(rev)}
              className="w-[310px] sm:w-[360px] md:w-[390px] shrink-0 bg-white dark:bg-[#181a20] rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-slate-100 dark:border-neutral-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-500/40 flex flex-col justify-between cursor-pointer group/card"
            >
              {/* Top Header Row */}
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar Initial Circle in #f59e0b */}
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-base shadow-md shrink-0 bg-[#f59e0b] text-white">
                      {rev.initial}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-base text-slate-900 dark:text-white leading-tight group-hover/card:text-[#f59e0b] transition-colors">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-neutral-400 font-medium mt-0.5">
                        {rev.role}
                      </p>
                    </div>
                  </div>

                  {/* 5 Stars in #f59e0b */}
                  <div className="flex items-center gap-0.5 text-[#f59e0b] shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                    ))}
                  </div>
                </div>

                {/* Review Text Body (Concise, Italicized Like Screenshot) */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-neutral-300 font-normal leading-relaxed italic text-left">
                  &ldquo;{rev.shortText}&rdquo;
                </p>
              </div>

              {/* Bottom Expand Review Link */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-neutral-800/60 flex items-center justify-between text-left">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedReview(rev);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f59e0b] hover:text-[#d97706] dark:hover:text-[#facc15] hover:underline cursor-pointer group/btn"
                >
                  <span>Expand review</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
                <span className="text-[11px] font-medium text-slate-400 dark:text-neutral-500">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE EXPANDED REVIEW MODAL (OPENS ON "EXPAND REVIEW" CLICK)        */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop with smooth blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedReview(null)}
              className="fixed inset-0 bg-slate-950/65 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-lg bg-white dark:bg-[#181a20] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-neutral-800 my-auto text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                aria-label="Close review"
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Client Info Header */}
              <div className="flex items-center gap-4 pr-10">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-black text-xl shadow-md shrink-0 bg-[#f59e0b] text-white">
                  {selectedReview.initial}
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">
                    {selectedReview.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 font-medium mt-0.5">
                    {selectedReview.role} • {selectedReview.location}
                  </p>
                </div>
              </div>

              {/* Rating and Verification Row */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {[...Array(selectedReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-neutral-200">
                    5.0 Star Rating
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Verified MERO Client</span>
                </div>
              </div>

              {/* Service & Turnaround Badges */}
              <div className="mt-3.5 flex flex-wrap gap-2">
                <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-neutral-800/80 text-slate-700 dark:text-neutral-300">
                  ⚡ Service: {selectedReview.service}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40">
                  ⏱ Turnaround: {selectedReview.deliveryTime}
                </span>
              </div>

              {/* Full Detailed Review Body */}
              <div className="mt-5 relative">
                <Quote className="w-8 h-8 text-amber-500/20 absolute -top-3 -left-1 pointer-events-none rotate-180" />
                <p className="text-sm sm:text-base text-slate-700 dark:text-neutral-200 leading-relaxed font-normal italic pl-4">
                  &ldquo;{selectedReview.fullText}&rdquo;
                </p>
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-7 pt-4 border-t border-slate-100 dark:border-neutral-800/80 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedReview(null)}
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 hover:bg-slate-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  Close
                </button>
                <a
                  href="https://wa.me/919641049148?text=Hi%20MERO%2C%20I%20am%20Interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#f59e0b] hover:bg-[#d97706] text-white shadow-md shadow-amber-500/20 transition-all hover:scale-105"
                >
                  Discuss your project →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

