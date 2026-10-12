"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="relative py-10 md:py-16 border-t border-neutral-800/30 dark:border-neutral-800/30 border-neutral-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
            See why customers love us.
          </h2>
        </motion.div>

        {/* Top Featured Rating Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-neutral-200 dark:border-neutral-800/40 bg-neutral-50 dark:bg-[#161619] p-8 sm:p-12 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-10 transition-colors duration-300"
        >
          {/* Left Text */}
          <div className="space-y-4 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              MERO is powered by the M² Core Team
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-400 leading-relaxed">
              MERO is driven by our dedicated M² core team, delivering industry-leading personal branding, executive resumes, and elite career strategy. Learn more about how the M² team powers your growth.
            </p>
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f97316] hover:text-[#ea580c] dark:text-[#f97316] dark:hover:text-[#facc15] transition-colors group"
              >
                <span>M² Team Overview</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right M² Team Badges / Shields */}
          <div className="flex items-center justify-center -space-x-3 sm:-space-x-5 shrink-0 py-4">
            {/* Badge 1 (Left) */}
            <div className="relative z-10 w-28 sm:w-32 rounded-2xl border border-neutral-200 dark:border-neutral-700/60 bg-white dark:bg-[#1e1f23] text-slate-900 dark:text-white shadow-md overflow-hidden flex flex-col items-center">
              <div className="w-full bg-[#ea580c] py-1 text-center text-[10px] sm:text-[11px] font-bold text-white flex items-center justify-center gap-1">
                <span className="font-extrabold">M²</span>
                <span>Team 2026</span>
              </div>
              <div className="p-3 text-center">
                <span className="block text-base sm:text-lg font-black text-slate-900 dark:text-white">Leader</span>
                <span className="text-[10px] text-slate-500 dark:text-neutral-400 font-medium">Enterprise</span>
              </div>
            </div>

            {/* Badge 2 (Center, Elevated) */}
            <div className="relative z-20 -translate-y-3 w-32 sm:w-36 rounded-2xl border border-orange-500/40 bg-white dark:bg-[#1e1f23] text-slate-900 dark:text-white shadow-xl overflow-hidden flex flex-col items-center">
              <div className="w-full bg-[#f97316] py-1.5 text-center text-[11px] sm:text-xs font-bold text-white flex items-center justify-center gap-1">
                <span className="font-black text-sm">M²</span>
                <span>Team 2026</span>
              </div>
              <div className="p-4 text-center">
                <span className="block text-lg sm:text-xl font-black text-slate-900 dark:text-white">Leader</span>
                <span className="text-[10px] text-slate-500 dark:text-neutral-400 font-medium">Overall</span>
              </div>
            </div>

            {/* Badge 3 (Right) */}
            <div className="relative z-10 w-28 sm:w-32 rounded-2xl border border-neutral-200 dark:border-neutral-700/60 bg-white dark:bg-[#1e1f23] text-slate-900 dark:text-white shadow-md overflow-hidden flex flex-col items-center">
              <div className="w-full bg-[#ea580c] py-1 text-center text-[10px] sm:text-[11px] font-bold text-white flex items-center justify-center gap-1">
                <span className="font-extrabold">M²</span>
                <span>Team 2026</span>
              </div>
              <div className="p-3 text-center">
                <span className="block text-base sm:text-lg font-black text-slate-900 dark:text-white">Leader</span>
                <span className="text-[10px] text-slate-500 dark:text-neutral-400 font-medium">Mid-market</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
