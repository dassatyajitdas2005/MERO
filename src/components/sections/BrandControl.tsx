"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function BrandControl() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      client: "Headspace",
      stat: "30-40% increase in team productivity after adopting MERO",
      subtext: "Unified WhatsApp CRM and automated inventory pipelines enabled instant customer responses.",
      screenHeader: "What's on your mind?",
      screenSubtext: "I want to...",
      options: [
        { label: "Automate sales & leads", selected: true },
        { label: "Live inventory sync", selected: false },
        { label: "Launch 98+ speed website", selected: false },
      ],
      link: "/contact?case=headspace",
    },
    {
      client: "LogiTrack",
      stat: "45% reduction in stockouts & 100% barcode ledger accuracy",
      subtext: "Multi-warehouse real-time tracking with automatic low-stock purchase order triggers.",
      screenHeader: "Inventory Overview",
      screenSubtext: "Select action...",
      options: [
        { label: "Scan barcode SKU", selected: true },
        { label: "Auto-reorder threshold", selected: false },
        { label: "Export GST billing report", selected: false },
      ],
      link: "/contact?case=logitrack",
    },
    {
      client: "Zenith Retail",
      stat: "3.2x higher conversion rate & 24/7 automated WhatsApp sales",
      subtext: "Direct-to-consumer catalogs and payment links integrated directly inside WhatsApp chats.",
      screenHeader: "Customer Funnel",
      screenSubtext: "Active campaigns...",
      options: [
        { label: "24/7 AI Chatbot Active", selected: true },
        { label: "Broadcast catalog blast", selected: false },
        { label: "Instant UPI payments", selected: false },
      ],
      link: "/contact?case=zenith",
    },
  ];

  const current = stories[activeStory];

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[750px] rounded-full bg-gradient-to-r from-[#f97316]/6 via-[#facc15]/6 to-transparent blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Screenshot Reference */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight"
          >
            How MERO helps your business scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-neutral-300 font-normal max-w-2xl mx-auto"
          >
            The measurable ROI teams achieved after selecting MERO.
          </motion.p>
        </div>

        {/* 2-Column Layout Without Card Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Client Brand, Giant ROI Metric & Read Story Link */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Client Tab Switcher Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {stories.map((s, idx) => (
                <button
                  key={s.client}
                  onClick={() => setActiveStory(idx)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeStory === idx
                      ? "bg-[#f97316] text-white shadow-lg shadow-orange-500/25"
                      : "bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {s.client}
                </button>
              ))}
            </div>

            {/* Main Client Impact Statement */}
            <motion.h3
              key={current.stat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]"
            >
              {current.stat}
            </motion.h3>

            <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-400 font-normal max-w-xl leading-relaxed">
              {current.subtext}
            </p>

            {/* Read Story Action Link with Arrow */}
            <div className="pt-2">
              <Link
                href={current.link}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#f97316] hover:text-[#ea580c] transition-colors group"
              >
                <span>Read story</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Realistic Smartphone Mockup Matching Screenshot */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            {/* Soft Ambient Glow behind Phone */}
            <div className="absolute -inset-4 w-72 h-96 rounded-full bg-gradient-to-tr from-[#f97316]/15 via-[#facc15]/10 to-transparent blur-3xl pointer-events-none" />

            <motion.div
              key={current.client}
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-[280px] sm:max-w-[310px] z-10"
            >
              {/* Smartphone Device Chassis */}
              <div className="relative rounded-[40px] border-[7px] border-neutral-800 bg-white shadow-2xl shadow-black/80 overflow-hidden aspect-[9/18.5] flex flex-col justify-between">
                
                {/* Top Status Bar & Notch */}
                <div className="relative z-20 pt-2.5 px-6 flex items-center justify-between text-[11px] font-bold text-slate-900 select-none bg-[#f59e0b]">
                  <span>12:00</span>
                  {/* Punch-hole Selfie Camera */}
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-950 border border-slate-800" />
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 rounded-xs border border-slate-900 p-0.5">
                      <div className="h-full w-full bg-slate-900 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* App Screen Content */}
                <div className="flex-1 flex flex-col justify-between bg-white overflow-hidden">
                  
                  {/* Warm Sunny Header with Friendly Mascot Avatar */}
                  <div className="bg-[#f59e0b] pt-4 pb-8 px-6 rounded-b-[40px] flex items-center justify-center relative">
                    <div className="w-20 h-20 rounded-full bg-[#f97316] shadow-lg flex items-center justify-center relative">
                      {/* Friendly Zen Avatar Face */}
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="22" fill="#f97316" />
                        {/* Closed Happy Eyes */}
                        <path d="M14 20 Q 18 24 22 20" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M26 20 Q 30 24 34 20" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        {/* Gentle Smile */}
                        <path d="M19 28 Q 24 33 29 28" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                      </svg>
                    </div>
                  </div>

                  {/* App Middle Content: "What's on your mind?" */}
                  <div className="px-5 py-4 text-center space-y-1">
                    <h4 className="text-base sm:text-lg font-black tracking-tight text-slate-950">
                      {current.screenHeader}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {current.screenSubtext}
                    </p>
                  </div>

                  {/* App Options List with Checkmark Selection Matching Screenshot */}
                  <div className="px-4 pb-5 space-y-2">
                    {current.options.map((opt) => (
                      <div
                        key={opt.label}
                        className={`rounded-2xl p-3 flex items-center justify-between text-xs font-bold transition-all ${
                          opt.selected
                            ? "bg-slate-200 text-slate-950 shadow-xs"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {opt.selected ? (
                          <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-slate-300" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="pb-2 pt-1 flex justify-center">
                    <div className="w-24 h-1 rounded-full bg-slate-400" />
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
