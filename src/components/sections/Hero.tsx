"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  Mail,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20">
      {/* Background Subtle Grid & Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient Radial Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-background/60 to-background" />

        {/* Brand Glow Highlights (Yellow & Orange) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[580px] rounded-full bg-gradient-to-tr from-[#f97316]/12 via-[#facc15]/12 to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm backdrop-blur-md"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#facc15]/20 text-[#f59e0b] dark:text-[#facc15]">
            <CheckCircle2 className="h-3.5 w-3.5" />
          </span>
          <span>Zero Paywalls • Zero Forced Signups</span>
        </motion.div>

        {/* Main Headline Container with Floating Interactive Badges */}
        <div className="relative mt-6 sm:mt-10">
          {/* Floating Chip 1: Top-Left (Resume AI) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:inline-flex absolute -top-4 left-4 lg:left-12 -translate-y-1/2 items-center gap-2 rounded-full border border-amber-400/30 dark:border-amber-400/25 bg-amber-50/90 dark:bg-amber-950/20 px-3.5 py-1.5 text-xs font-semibold text-[#f59e0b] dark:text-[#fbbf24] shadow-sm backdrop-blur-md animate-bounce [animation-duration:5s]"
          >
            <FileText className="h-3.5 w-3.5 text-[#f59e0b] dark:text-[#fbbf24]" />
            <span>Resume AI</span>
          </motion.div>

          {/* Floating Chip 2: Top-Right (Cover Letter) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden sm:inline-flex absolute top-6 right-2 lg:right-10 items-center gap-2 rounded-full border border-orange-400/30 dark:border-orange-400/25 bg-orange-50/90 dark:bg-orange-950/20 px-3.5 py-1.5 text-xs font-semibold text-[#ea580c] dark:text-[#f97316] shadow-sm backdrop-blur-md animate-bounce [animation-duration:6s] [animation-delay:1s]"
          >
            <Mail className="h-3.5 w-3.5 text-[#ea580c] dark:text-[#f97316]" />
            <span>Cover Letter</span>
          </motion.div>

          {/* Main Giant Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] text-neutral-400 dark:text-neutral-400"
          >
            <span className="block text-neutral-400 dark:text-neutral-400">The future</span>
            <span className="block text-neutral-400 dark:text-neutral-400">of your career</span>

            {/* Line 3: is human + AI */}
            <span className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-neutral-900 dark:text-neutral-100">
              <span className="font-extrabold">is</span>

              {/* Glowing Fingerprint (Human) - Yellow Accent */}
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute -inset-1 rounded-full bg-[#facc15]/25 blur-md" />
                <svg
                  className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-[#facc15] dark:text-[#facc15] transition-transform duration-300 hover:scale-105"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                  <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                  <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                  <path d="M2 12a10 10 0 0 1 18-6" />
                  <path d="M2 16h.01" />
                  <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                  <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
                  <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                  <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
                </svg>
              </span>

              <span className="font-black">human</span>
              <span className="font-normal text-neutral-400 dark:text-neutral-500">+</span>

              {/* Glowing Sparkle (AI) - Orange Accent */}
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute -inset-1 rounded-full bg-[#f97316]/30 blur-md" />
                <svg
                  className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-[#f97316] dark:text-[#f97316] transition-transform duration-300 hover:scale-105"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2c0 4.5-2.5 8-7 8 4.5 0 7 3.5 7 8 0-4.5 2.5-8 7-8-4.5 0-7-3.5-7-8z" />
                  <circle cx="19" cy="5" r="1" fill="currentColor" />
                  <circle cx="5" cy="19" r="1.5" fill="currentColor" />
                </svg>
              </span>

              <span className="font-black">AI</span>
            </span>
          </motion.h1>

          {/* Floating Chip 3: Bottom-Left (Portfolio Builder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden sm:inline-flex absolute -bottom-6 left-12 lg:left-24 items-center gap-2 rounded-full border border-orange-400/30 dark:border-orange-400/25 bg-orange-50/90 dark:bg-orange-950/20 px-3.5 py-1.5 text-xs font-semibold text-[#ea580c] dark:text-[#f97316] shadow-sm backdrop-blur-md animate-bounce [animation-duration:7s] [animation-delay:2s]"
          >
            <Globe className="h-3.5 w-3.5 text-[#ea580c] dark:text-[#f97316]" />
            <span>Portfolio Builder</span>
          </motion.div>

          {/* Floating Chip 4: Bottom-Right (AI CV) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden sm:inline-flex absolute -bottom-4 right-8 lg:right-28 items-center gap-2 rounded-full border border-amber-400/30 dark:border-amber-400/25 bg-amber-50/90 dark:bg-amber-950/20 px-3.5 py-1.5 text-xs font-semibold text-[#f59e0b] dark:text-[#fbbf24] shadow-sm backdrop-blur-md animate-bounce [animation-duration:5.5s] [animation-delay:1.5s]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#f59e0b] dark:text-[#fbbf24]" />
            <span>AI CV</span>
          </motion.div>
        </div>

        {/* Sub-headline Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal"
        >
          Create tailored resumes, matching cover letters, and a live web portfolio from one profile. Free to build, free to export, and nothing leaves your browser unless you ask for something that needs it.
        </motion.p>

        {/* CTA Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA (Vivid Orange) */}
          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Building Free</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 px-7 py-3.5 text-sm sm:text-base font-medium shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>See how it works</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
