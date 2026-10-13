"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Package, Globe, BarChart3, Settings2 } from "lucide-react";

export default function RolesShowcase() {
  return (
    <section className="relative py-10 sm:py-14 md:py-16 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER MATCHING SCREENSHOT (HANDWRITTEN STYLE WITH CIRCLE & UNDERLINE) */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] select-none"
          >
            <span>What </span>
            
            {/* Hand-drawn sketched green/cyan circle loop around "services" */}
            <span className="relative inline-block px-3 sm:px-4 py-0 mx-1 text-slate-900 dark:text-white font-bold select-none">
              <span>services</span>
              <svg
                className="absolute -inset-x-3 sm:-inset-x-4 -inset-y-2 sm:-inset-y-3 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+16px)] sm:h-[calc(100%+22px)] text-[#10b981] overflow-visible pointer-events-none select-none -rotate-1"
                viewBox="0 0 200 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M 100 8 C 40 4, 8 16, 6 34 C 4 52, 38 61, 105 62 C 170 63, 194 50, 194 33 C 194 17, 155 7, 85 9"
                  stroke="currentColor"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 88 14 C 115 11, 142 12, 158 15"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>
            </span>

            <span> we </span>

            {/* Hand-drawn blue curved underline under "provide" */}
            <span className="relative inline-block text-slate-900 dark:text-white">
              provide
              <svg
                className="absolute -bottom-2.5 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#0ea5e9] dark:text-[#38bdf8] overflow-visible pointer-events-none"
                viewBox="0 0 120 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 11 C 28 3, 62 4, 117 9"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          <p className="font-script text-2xl sm:text-3xl md:text-4xl font-medium text-slate-600 dark:text-neutral-300 mt-3 sm:mt-5 select-none">
            We provide smart solutions for modern businesses
          </p>
        </div>

        {/* ========================================================================= */}
        {/* INTERLOCKING CHEVRON HEXAGON INFOGRAPHIC MATCHING SCREENSHOT 2            */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-6xl xl:max-w-7xl py-6 select-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center">
            
            {/* ----------------- LEFT NODE (WHATSAPP CRM -> Points Right) ----------------- */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative flex items-center group max-w-xl lg:max-w-2xl w-full">
                {/* Pointed Hexagon Chevron Background Backdrop */}
                <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-32 lg:w-36 bg-gradient-to-r from-[#ea580c] via-[#dc2626] to-[#991b1b] rounded-r-2xl [clip-path:polygon(0%_0%,65%_0%,100%_50%,65%_100%,0%_100%)] drop-shadow-md" />

                {/* Overlapping White Foreground Card (Stretched) */}
                <div className="relative z-10 flex items-center justify-between w-[calc(100%-24px)] sm:w-[calc(100%-30px)] lg:w-[calc(100%-34px)] bg-white dark:bg-[#181a20] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[0_14px_34px_rgba(0,0,0,0.08)] dark:shadow-[0_14px_34px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-neutral-800">
                  {/* Left: Text Content */}
                  <div className="text-left pr-4 flex-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
                      WhatsApp CRM
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 font-semibold mt-1">
                      Automated Leads &amp; 24/7 Chat
                    </p>
                  </div>

                  {/* Red/Orange Vertical Divider Line */}
                  <div className="h-12 w-[2px] bg-gradient-to-b from-transparent via-[#dc2626] to-transparent shrink-0 mx-3 sm:mx-4" />

                  {/* Circular Orbit Icon on the Right */}
                  <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                    {/* Concentric Dashed Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#dc2626] animate-[spin_18s_linear_infinite]" />
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-[#dc2626]">
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ----------------- RIGHT COLUMN (2 Stacked Nodes -> Points Left) ----------------- */}
            <div className="flex flex-col space-y-10 lg:space-y-14 justify-center">
              
              {/* TOP-RIGHT NODE: INVENTORY SOFTWARE */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="flex justify-center md:justify-start"
              >
                <div className="relative flex items-center group max-w-xl lg:max-w-2xl w-full">
                  {/* Pointed Hexagon Chevron Background Backdrop (Points Left) */}
                  <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-32 lg:w-36 bg-gradient-to-l from-[#ea580c] via-[#dc2626] to-[#991b1b] rounded-l-2xl [clip-path:polygon(100%_0%,35%_0%,0%_50%,35%_100%,100%_100%)] drop-shadow-md" />

                  {/* Overlapping White Foreground Card (Stretched) */}
                  <div className="relative z-10 ml-auto flex items-center justify-between w-[calc(100%-24px)] sm:w-[calc(100%-30px)] lg:w-[calc(100%-34px)] bg-white dark:bg-[#181a20] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[0_14px_34px_rgba(0,0,0,0.08)] dark:shadow-[0_14px_34px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-neutral-800">
                    {/* Circular Orbit Icon on the Left */}
                    <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0 ml-1">
                      {/* Concentric Dashed Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#dc2626] animate-[spin_18s_linear_infinite]" />
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-[#dc2626]">
                        <Package className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Red/Orange Vertical Divider Line */}
                    <div className="h-12 w-[2px] bg-gradient-to-b from-transparent via-[#dc2626] to-transparent shrink-0 mx-3 sm:mx-4" />

                    {/* Right: Text Content */}
                    <div className="text-left flex-1 pl-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
                        Inventory Software
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 font-semibold mt-1">
                        Real-Time Stock ERP &amp; Alerts
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* BOTTOM-RIGHT NODE: WEBSITE SOLUTIONS */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="flex justify-center md:justify-start"
              >
                <div className="relative flex items-center group max-w-xl lg:max-w-2xl w-full">
                  {/* Pointed Hexagon Chevron Background Backdrop (Points Left) */}
                  <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-32 lg:w-36 bg-gradient-to-l from-[#ea580c] via-[#dc2626] to-[#991b1b] rounded-l-2xl [clip-path:polygon(100%_0%,35%_0%,0%_50%,35%_100%,100%_100%)] drop-shadow-md" />

                  {/* Overlapping White Foreground Card (Stretched) */}
                  <div className="relative z-10 ml-auto flex items-center justify-between w-[calc(100%-24px)] sm:w-[calc(100%-30px)] lg:w-[calc(100%-34px)] bg-white dark:bg-[#181a20] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[0_14px_34px_rgba(0,0,0,0.08)] dark:shadow-[0_14px_34px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-neutral-800">
                    {/* Circular Orbit Icon on the Left */}
                    <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0 ml-1">
                      {/* Concentric Dashed Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#dc2626] animate-[spin_18s_linear_infinite]" />
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-[#dc2626]">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Red/Orange Vertical Divider Line */}
                    <div className="h-12 w-[2px] bg-gradient-to-b from-transparent via-[#dc2626] to-transparent shrink-0 mx-3 sm:mx-4" />

                    {/* Right: Text Content */}
                    <div className="text-left flex-1 pl-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
                        Website Solutions
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-neutral-400 font-semibold mt-1 leading-snug">
                        Landing • Dynamic • Business • E-Commerce • Custom
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTER CTA BUTTON MATCHING SCREENSHOT ("EXPLORE ALL MERO PRODUCTS ->")    */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 flex items-center justify-center text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm sm:text-base shadow-xl shadow-amber-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
          >
            <span>Explore all MERO products</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}
