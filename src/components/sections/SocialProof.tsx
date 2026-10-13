"use client";

import React from "react";
import { motion } from "framer-motion";

interface WhyChooseItem {
  title: string;
  desc: string;
  theme: "accent" | "neutral";
  tilt: string;
}

const features: WhyChooseItem[] = [
  {
    title: "Affordable Pricing",
    desc: "Flexible pricing designed to fit different business needs and budgets.",
    theme: "accent",
    tilt: "-rotate-1 sm:-rotate-[1.2deg]",
  },
  {
    title: "Fast Delivery",
    desc: "Projects typically completed within 5–9 working days, depending on scope.",
    theme: "neutral",
    tilt: "rotate-1 sm:rotate-[1deg]",
  },
  {
    title: "1-Month Support",
    desc: "Dedicated post-purchase assistance from our Core M² Team.",
    theme: "neutral",
    tilt: "-rotate-1 sm:-rotate-[0.8deg]",
  },
  {
    title: "24/7 Customer Support",
    desc: "Get help whenever you need assistance.",
    theme: "accent",
    tilt: "rotate-1 sm:rotate-[1.2deg]",
  },
  {
    title: "Customized Solutions",
    desc: "Digital products tailored to your business requirements.",
    theme: "accent",
    tilt: "-rotate-1 sm:-rotate-[1deg]",
  },
  {
    title: "One Platform, Multiple Solutions",
    desc: "Websites, CRM, inventory management, and custom software in one place.",
    theme: "neutral",
    tilt: "rotate-1 sm:rotate-[0.8deg]",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-10 sm:py-14 md:py-16 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HANDWRITTEN SCRIPT HEADER (STAGGERED: TOP LEFT, BOTTOM RIGHT)             */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 flex flex-col items-center">
          
          {/* Top Line: "Why choose MERO" shifted to the Left */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full flex justify-center"
          >
            <h2 className="font-script text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2] select-none -translate-x-4 sm:-translate-x-12 md:-translate-x-20">
              <span className="relative inline-block text-slate-900 dark:text-white">
                Why choose MERO
                {/* Hand-drawn coral/pink brush stroke underline matching reference screenshot */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-3 sm:h-4 text-[#f43f5e] overflow-visible pointer-events-none"
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
            </h2>
          </motion.div>

          {/* Bottom Line: "How MERO is different from others" shifted to the Right */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full flex justify-center"
          >
            <p className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-slate-600 dark:text-neutral-300 mt-3 sm:mt-5 select-none translate-x-4 sm:translate-x-12 md:translate-x-20">
              How MERO is different from others
            </p>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* 6 PILL CARDS MATCHING SCREENSHOT WITH ALTERNATING THEME & PLAYFUL TILTS   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 lg:gap-8 max-w-5xl lg:max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const isAccent = feature.theme === "accent";

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative group ${feature.tilt} hover:rotate-0 transition-transform duration-300`}
              >
                <div
                  className={`relative flex items-start gap-4 sm:gap-5 p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                    isAccent
                      ? "bg-[#f59e0b] hover:bg-[#ea580c] text-slate-950 shadow-xl shadow-amber-500/20 border-2 border-amber-400/50"
                      : "bg-white dark:bg-[#181a20] text-slate-900 dark:text-white shadow-lg shadow-slate-200/50 dark:shadow-none border-2 border-slate-200 dark:border-neutral-800 hover:border-amber-500/40 dark:hover:border-amber-500/40"
                  }`}
                >
                  {/* Distinct Bullet Dot matching the screenshot */}
                  <div className="shrink-0 mt-1">
                    <span
                      className={`block w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-inner ${
                        isAccent
                          ? "bg-slate-950"
                          : "bg-[#f59e0b] dark:bg-[#f59e0b]"
                      }`}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base sm:text-lg lg:text-xl font-black tracking-tight leading-snug uppercase ${
                        isAccent
                          ? "text-slate-950"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-xs sm:text-sm font-semibold leading-relaxed ${
                        isAccent
                          ? "text-slate-900/90"
                          : "text-slate-600 dark:text-neutral-400"
                      }`}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
