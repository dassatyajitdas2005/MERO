"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

export default function BrandControl() {
  return (
    <section className="relative py-12 md:py-18 overflow-hidden bg-[#121214] text-white">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[650px] rounded-full bg-gradient-to-r from-[#f97316]/8 via-[#facc15]/8 to-transparent blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2-Card Row Grid (Exact Match to Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1 (Left): Control how the world sees you */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-neutral-800/80 bg-[#161619] p-8 sm:p-10 shadow-xl overflow-hidden hover:border-neutral-700/80 transition-all duration-300"
          >
            {/* Top Content */}
            <div className="space-y-4">
              {/* Search Icon */}
              <div className="flex h-10 w-10 items-center justify-center text-neutral-300">
                <Search className="h-6 w-6 stroke-[2]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Control how the world sees you
              </h3>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md font-normal">
                Set the title and description that appear on search, social, and link previews.
              </p>
            </div>

            {/* Bottom Graphic: Search Snippet Card (Orange & Yellow MERO Theme) */}
            <div className="mt-10 pt-4 flex justify-center sm:justify-start">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-md rounded-2xl bg-white p-5 sm:p-6 shadow-2xl border border-neutral-200/80 transform -rotate-1 transition-transform"
              >
                {/* Domain Pill / Breadcrumb */}
                <div className="text-xs sm:text-sm font-semibold text-emerald-600 truncate pb-1">
                  satyajitdas.in
                </div>

                {/* Search Title (Theme Orange/Yellow instead of Blue) */}
                <div className="text-base sm:text-lg font-bold text-[#f97316] hover:text-[#ea580c] transition-colors leading-snug cursor-pointer">
                  Satyajit Das — Builder of MERO
                </div>

                {/* Search Snippet Body */}
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Portfolio builder, resume tools, publishing workflows, and executive product experiments.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2 (Right): Change the mood, not the content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-neutral-800/80 bg-[#161619] p-8 sm:p-10 shadow-xl overflow-hidden hover:border-neutral-700/80 transition-all duration-300"
          >
            {/* Top Content */}
            <div className="space-y-4">
              {/* Sparkle Icon */}
              <div className="flex h-10 w-10 items-center justify-center text-neutral-300">
                <Sparkles className="h-6 w-6 stroke-[2]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Change the mood, not the content
              </h3>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md font-normal">
                Move from technical Signal to editorial Atelier without rebuilding.
              </p>
            </div>

            {/* Bottom Graphic: Overlapping Swatch Cards (MERO Orange/Yellow Theme instead of Blue) */}
            <div className="mt-10 pt-4 flex items-end justify-center sm:justify-end gap-3 sm:gap-5 min-h-[170px] pr-2 sm:pr-4">
              
              {/* Left Swatch: SIGNAL (Light Cream Card) */}
              <motion.div
                whileHover={{ rotate: -2, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-36 sm:w-44 h-48 sm:h-56 rounded-2xl bg-[#f5f2ea] text-neutral-900 p-5 sm:p-6 shadow-2xl border border-neutral-300/40 flex flex-col justify-between transform -rotate-6 transition-all"
              >
                <span className="text-[11px] font-black uppercase tracking-wider text-neutral-800">
                  SIGNAL
                </span>
                <span className="text-5xl sm:text-6xl font-black text-neutral-950 tracking-tighter leading-none select-none">
                  Aa
                </span>
              </motion.div>

              {/* Right Swatch: ATELIER (Replaced Blue with MERO Orange/Yellow & White Text) */}
              <motion.div
                whileHover={{ rotate: 5, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-36 sm:w-44 h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#f97316] via-[#ea580c] to-[#c2410c] text-white p-5 sm:p-6 shadow-2xl border border-orange-400/40 flex flex-col justify-between transform rotate-3 transition-all shadow-[0_12px_30px_rgba(249,115,22,0.3)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-200">
                    ATELIER
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#facc15] animate-pulse" />
                </div>
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tighter leading-none select-none">
                  Aa
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
