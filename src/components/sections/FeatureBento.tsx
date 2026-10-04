"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  FileText,
  Globe,
  Lock,
  CheckCircle2,
} from "lucide-react";

export default function FeatureBento() {
  return (
    <section id="features" className="relative py-8 md:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1 (Left Column): The AI Resume Engine */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-neutral-800/50 dark:border-neutral-800/50 border-neutral-200/80 bg-[#121214] dark:bg-[#121214] bg-white p-8 sm:p-10 shadow-xl relative overflow-hidden group"
          >
            {/* Ambient Corner Glow - Orange/Yellow */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#f97316]/10 dark:bg-[#facc15]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            {/* Top Icon Badge */}
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-400/20 dark:border-amber-400/20 bg-orange-50/80 dark:bg-amber-950/20 text-[#f97316] dark:text-[#facc15]">
                <Bot className="h-6 w-6" />
              </div>
            </div>

            {/* Center Graphic: ATS Circular Score Widget */}
            <div className="my-10 sm:my-14 flex justify-center">
              <div className="relative flex flex-col items-center justify-center rounded-3xl border border-neutral-800/60 dark:border-neutral-800/60 border-neutral-200/80 bg-neutral-900/60 dark:bg-neutral-900/60 bg-neutral-50 p-8 shadow-lg backdrop-blur-sm w-56 h-56 sm:w-60 sm:h-60">
                {/* Glowing Outer Ring - Orange & Yellow */}
                <div className="relative flex items-center justify-center">
                  <svg className="w-32 h-32 -rotate-90 transform" viewBox="0 0 120 120">
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#facc15" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="9"
                      className="text-neutral-800/60 dark:text-neutral-800/60 text-neutral-200"
                      fill="transparent"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="url(#scoreGradient)"
                      strokeWidth="9"
                      strokeDasharray="314"
                      strokeDashoffset="6.28"
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white">
                      98<span className="text-xl sm:text-2xl font-bold text-neutral-400">%</span>
                    </span>
                  </div>
                </div>

                {/* Pill below score */}
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 dark:border-amber-400/30 bg-orange-50 dark:bg-amber-950/40 px-3 py-1 text-xs font-semibold text-[#f97316] dark:text-[#facc15]">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>ATS Optimized</span>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                The AI Resume Engine
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Role-Specific Resumes in Seconds. Paste a job description, and the AI highlights your relevant achievements and keywords without inventing fake experience.
              </p>
            </div>
          </motion.div>

          {/* Right Side Column (Holds Top Wide Card + Bottom Two Cards) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Card 2: Contextual Cover Letters */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-between rounded-3xl border border-neutral-800/50 dark:border-neutral-800/50 border-neutral-200/80 bg-[#161619] dark:bg-[#161619] bg-white p-8 sm:p-10 shadow-xl relative overflow-hidden group"
            >
              {/* Top row with Icon and Floating Preview Card */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 dark:border-amber-400/20 bg-amber-50 dark:bg-amber-950/30 text-[#f59e0b] dark:text-[#fbbf24] shrink-0">
                  <FileText className="h-6 w-6" />
                </div>

                {/* Floating Preview Card matching reference */}
                <div className="rounded-2xl border border-neutral-700/50 dark:border-neutral-700/50 border-neutral-200 bg-neutral-900/80 dark:bg-neutral-900/80 bg-neutral-50 p-4 shadow-md max-w-sm">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f59e0b] dark:text-[#fbbf24]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#facc15] animate-pulse" />
                    <span>AI Tailoring</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-300 dark:text-neutral-300 text-neutral-700 leading-normal">
                    Applying for{" "}
                    <span className="inline-block rounded-md bg-amber-400/15 dark:bg-amber-400/20 px-1.5 py-0.5 font-medium text-[#f59e0b] dark:text-[#facc15] text-[11px]">
                      Senior React Developer
                    </span>{" "}
                    - experience matches requirements.
                  </p>
                </div>
              </div>

              {/* Text Bottom */}
              <div className="mt-6 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                  Contextual Cover Letters
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                  Cover Letters That Don&apos;t Sound Like a Robot. Generate matched cover letters that sound like you and directly address the hiring manager&apos;s requirements.
                </p>
              </div>
            </motion.div>

            {/* Bottom Row: 2 Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 3: Web Portfolios */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-between rounded-3xl border border-neutral-800/50 dark:border-neutral-800/50 border-neutral-200/80 bg-[#161619] dark:bg-[#161619] bg-white p-7 sm:p-8 shadow-xl relative overflow-hidden"
              >
                {/* Top: Icon + Mini Browser Window */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-400/20 dark:border-orange-400/20 bg-orange-50 dark:bg-orange-950/30 text-[#f97316] shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>

                  {/* Browser Mockup */}
                  <div className="rounded-xl border border-neutral-700/50 dark:border-neutral-700/50 border-neutral-200 bg-neutral-900/80 dark:bg-neutral-900/80 bg-neutral-100 p-2.5 shadow-sm w-36 sm:w-40">
                    <div className="flex items-center gap-1 pb-1.5 border-b border-neutral-800/60 dark:border-neutral-800/60 border-neutral-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      <span className="ml-1 text-[8px] text-neutral-400 truncate">mero.live</span>
                    </div>
                    <div className="pt-2 flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-[#f97316] to-[#facc15] shrink-0" />
                      <div className="space-y-1 w-full">
                        <div className="h-1.5 w-14 rounded-full bg-neutral-700 dark:bg-neutral-700 bg-neutral-300" />
                        <div className="h-1.5 w-8 rounded-full bg-neutral-800 dark:bg-neutral-800 bg-neutral-200" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 space-y-2">
                  <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                    Web Portfolios
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Turn your resume into a live website. Publish an interactive web portfolio with your projects and GitHub links on your own mero.com subdomain, opening at launch.
                  </p>
                </div>
              </motion.div>

              {/* Card 4: Privacy First */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col justify-between rounded-3xl border border-neutral-800/50 dark:border-neutral-800/50 border-neutral-200/80 bg-[#121214] dark:bg-[#121214] bg-white p-7 sm:p-8 shadow-xl relative overflow-hidden"
              >
                {/* Ambient Amber/Yellow Glow */}
                <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-[#facc15]/10 blur-2xl" />

                {/* Top: Glowing Lock Icon + Local Vault Badge */}
                <div className="flex items-center justify-between">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/25 bg-amber-50 dark:bg-amber-950/30 text-[#f59e0b] dark:text-[#facc15]">
                    <Lock className="h-5 w-5" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 text-[11px] font-semibold text-[#f59e0b] dark:text-[#facc15]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#facc15] animate-pulse" />
                    <span>Local Vault</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 space-y-2">
                  <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                    Privacy First
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Your Data Stays on Your Machine. All PDF generation happens locally in your browser. No trackers, no databases hoarding your phone number or salary history.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
