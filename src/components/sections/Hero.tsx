"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wifi,
  Battery,
  TrendingUp,
  ShoppingBag,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-20 md:pt-18 md:pb-24 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background Subtle Ambience - Pure Smooth Seamless Match */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Soft atmospheric gradient highlights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[580px] rounded-full bg-gradient-to-tr from-[#f97316]/10 via-purple-600/6 to-transparent blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 h-[420px] w-[520px] rounded-full bg-gradient-to-bl from-cyan-500/6 via-amber-500/6 to-transparent blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Concise, Bold, Punchy Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-5 xl:col-span-5 space-y-6 text-left"
          >
            {/* Giant Clean Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.06]">
              Build anything with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb923c] via-[#f97316] to-[#facc15]">
                MERO
              </span>
            </h1>

            {/* Short, Punchy Description (Concise - 2 lines) */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 font-normal leading-relaxed max-w-lg">
              High-speed modern websites, automated WhatsApp CRMs, and intelligent growth tools — built to scale your business.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-neutral-100 px-7 py-3.5 text-sm sm:text-base font-bold transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900/60 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-slate-800 dark:text-neutral-200 hover:text-black dark:hover:text-white px-7 py-3.5 text-sm sm:text-base font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Learn more</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-neutral-300">
                <CheckCircle2 className="h-4 w-4 text-[#facc15]" />
                Zero Setup Hassle
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-neutral-300">
                <CheckCircle2 className="h-4 w-4 text-[#f97316]" />
                24/7 Automation
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-neutral-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Lightning Fast
              </span>
            </div>
          </motion.div>

          {/* Right Column: 3 Layered Animated SmartPhones + Geometric Shapes (Flutter Style) */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[580px]">
            
            {/* Background Geometric Accent 1: Soft Large Radiant Gradient Sphere */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-gradient-to-tr from-purple-600/70 via-pink-500/60 to-amber-400/80 blur-[2px] opacity-75 -z-10"
              style={{
                top: "10%",
                left: "15%",
              }}
            />

            {/* Background Geometric Accent 2: Cyan Sharp Triangle (from screenshot bottom-left) */}
            <motion.svg
              animate={{
                rotate: [0, -4, 0],
                y: [0, 6, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 sm:bottom-8 left-0 sm:left-4 w-44 sm:w-60 h-44 sm:h-60 -z-10 select-none filter drop-shadow-[0_10px_20px_rgba(6,182,212,0.25)]"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="15,190 190,40 70,10" fill="url(#tealTriangleGrad)" />
              <defs>
                <linearGradient id="tealTriangleGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Background Geometric Accent 3: Tilted Dashed Line Box (from screenshot right) */}
            <motion.div
              animate={{
                rotate: [12, 15, 12],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-6 sm:bottom-10 right-2 sm:right-6 w-40 sm:w-52 h-56 sm:h-72 border-2 border-dashed border-indigo-400/35 rounded-3xl -z-10 pointer-events-none"
            />

            {/* Phones Container - Centered Cluster */}
            <div className="relative flex items-center justify-center w-full max-w-lg sm:max-w-xl md:max-w-2xl select-none">
              
              {/* PHONE 1: LEFT (Light Modern E-Commerce / Store App - Wolt Style) */}
              <motion.div
                initial={{ opacity: 0, x: -40, rotate: -4 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, 10, 0],
                  rotate: [-3, -5, -3],
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  x: { duration: 0.6 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative -mr-16 sm:-mr-24 md:-mr-28 z-10 w-[180px] sm:w-[220px] md:w-[240px] h-[380px] sm:h-[450px] md:h-[490px] rounded-[38px] sm:rounded-[44px] bg-[#0c0c0e] p-2.5 sm:p-3 shadow-2xl border-[5px] sm:border-[6px] border-neutral-800"
              >
                {/* Phone Inner Screen */}
                <div className="relative w-full h-full rounded-[30px] sm:rounded-[36px] bg-gradient-to-b from-[#e0f2fe] via-sky-50 to-white text-slate-900 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-800 font-semibold pt-0.5">
                    <span>9:41</span>
                    {/* Dynamic Island */}
                    <div className="w-16 sm:w-20 h-3.5 sm:h-4 bg-black rounded-full" />
                    <div className="flex items-center gap-1">
                      <Wifi className="w-2.5 h-2.5" />
                      <Battery className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* App Brand Header */}
                  <div className="text-center pt-2">
                    <span className="text-sm sm:text-base font-black italic tracking-tight text-sky-600">
                      MERO Store
                    </span>
                  </div>

                  {/* Graphic Card Illustration */}
                  <div className="bg-white/90 rounded-2xl p-2.5 sm:p-3 shadow-sm border border-sky-100 flex flex-col items-center text-center space-y-1.5 my-auto">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                      <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        Order in Seconds
                      </h4>
                      <p className="text-[9px] sm:text-[11px] text-slate-500 leading-tight">
                        Instant delivery &amp; real-time tracking.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="space-y-2 pb-1">
                    <div className="w-full py-2 sm:py-2.5 rounded-full bg-sky-500 text-white font-bold text-[11px] sm:text-xs text-center shadow-md">
                      Get started
                    </div>
                    {/* Home Indicator */}
                    <div className="w-20 h-1 bg-slate-300 rounded-full mx-auto" />
                  </div>
                </div>
              </motion.div>

              {/* PHONE 2: CENTER (Dominant Hero Phone - Dark Theme Growth / Betterment Style) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.1 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative z-20 w-[200px] sm:w-[245px] md:w-[270px] h-[410px] sm:h-[490px] md:h-[535px] rounded-[42px] sm:rounded-[48px] bg-black p-2.5 sm:p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border-[5px] sm:border-[7px] border-neutral-700"
              >
                {/* Phone Inner Screen */}
                <div className="relative w-full h-full rounded-[32px] sm:rounded-[38px] bg-[#09090b] text-white overflow-hidden flex flex-col justify-between p-3.5 sm:p-4.5 border border-white/10">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-neutral-300 font-semibold pt-0.5">
                    <span>9:41</span>
                    {/* Dynamic Island */}
                    <div className="w-18 sm:w-22 h-4 sm:h-4.5 bg-black rounded-full border border-white/10" />
                    <div className="flex items-center gap-1 text-neutral-300">
                      <Wifi className="w-2.5 h-2.5" />
                      <Battery className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* App Brand Header */}
                  <div className="flex items-center justify-between pt-1 text-[11px] sm:text-xs text-neutral-400">
                    <span className="font-bold text-white tracking-wide flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                      MERO OS
                    </span>
                    <span className="text-[10px] text-neutral-400">Log in</span>
                  </div>

                  {/* Hero Copy inside Screen */}
                  <div className="space-y-1 pt-2">
                    <h3 className="text-base sm:text-xl md:text-2xl font-black text-white leading-tight">
                      Growth <br />
                      made effortless.
                    </h3>
                  </div>

                  {/* Atmospheric Night Sky & Growth Metric Artwork */}
                  <div className="relative my-auto w-full h-24 sm:h-32 rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-white/10 p-2.5 flex flex-col justify-between overflow-hidden">
                    {/* Crescent Moon & Stars */}
                    <div className="absolute top-2 right-3 w-5 h-5 rounded-full border-r-2 border-t-2 border-amber-200/90 rotate-45" />
                    <div className="absolute top-4 left-6 w-1 h-1 rounded-full bg-white animate-ping" />
                    <div className="absolute top-7 right-12 w-1 h-1 rounded-full bg-white/70" />

                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Revenue +240%</span>
                    </div>

                    {/* Chart Silhouette Line */}
                    <div className="relative h-10 w-full flex items-end">
                      <svg className="w-full h-full" viewBox="0 0 100 40" fill="none">
                        <path
                          d="M0 35 Q 25 30, 45 20 T 75 12 T 100 4"
                          stroke="#f97316"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0 35 Q 25 30, 45 20 T 75 12 T 100 4 L 100 40 L 0 40 Z"
                          fill="url(#orangeGlowFill)"
                          opacity="0.3"
                        />
                        <defs>
                          <linearGradient id="orangeGlowFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Actions inside Phone */}
                  <div className="space-y-2 pb-1">
                    <div className="w-full py-2.5 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-blue-600/30">
                      Get started
                    </div>
                    <div className="text-center text-[10px] sm:text-xs text-neutral-400 font-medium">
                      See how it works
                    </div>
                    {/* Home Indicator */}
                    <div className="w-24 h-1 bg-neutral-600 rounded-full mx-auto" />
                  </div>
                </div>
              </motion.div>

              {/* PHONE 3: RIGHT (Warm Orange WhatsApp CRM / Bot App - Flutter Style Right Phone) */}
              <motion.div
                initial={{ opacity: 0, x: 40, rotate: 4 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -10, 0],
                  rotate: [3, 5, 3],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.2 },
                  x: { duration: 0.6, delay: 0.2 },
                  y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative -ml-16 sm:-ml-24 md:-ml-28 z-10 w-[180px] sm:w-[220px] md:w-[240px] h-[380px] sm:h-[450px] md:h-[490px] rounded-[38px] sm:rounded-[44px] bg-[#0c0c0e] p-2.5 sm:p-3 shadow-2xl border-[5px] sm:border-[6px] border-neutral-800"
              >
                {/* Phone Inner Screen */}
                <div className="relative w-full h-full rounded-[30px] sm:rounded-[36px] bg-gradient-to-b from-[#fef3c7] via-orange-50 to-white text-slate-900 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-800 font-semibold pt-0.5">
                    <span>9:41</span>
                    {/* Dynamic Island */}
                    <div className="w-16 sm:w-20 h-3.5 sm:h-4 bg-black rounded-full" />
                    <div className="flex items-center gap-1">
                      <Wifi className="w-2.5 h-2.5" />
                      <Battery className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* App Brand Header */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs sm:text-sm font-black text-amber-700">
                      MERO CRM
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Bot
                    </span>
                  </div>

                  {/* Chat Automation UI */}
                  <div className="space-y-2 my-auto">
                    {/* Incoming Client Bubble */}
                    <div className="bg-white rounded-xl rounded-tl-sm p-2 shadow-sm border border-amber-100 text-[10px] sm:text-xs text-slate-800">
                      <span className="font-semibold block text-[9px] text-amber-600">Client:</span>
                      I need a custom website quote!
                    </div>

                    {/* Instant Bot Response */}
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl rounded-tr-sm p-2 shadow-sm text-[10px] sm:text-xs ml-auto max-w-[90%]">
                      <span className="font-semibold block text-[9px] text-amber-100 flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5" /> MERO Bot:
                      </span>
                      Proposal sent to your email in 0.2s!
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="space-y-2 pb-1">
                    <div className="w-full py-2 sm:py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[11px] sm:text-xs text-center shadow-md">
                      Auto-pilot ON
                    </div>
                    {/* Home Indicator */}
                    <div className="w-20 h-1 bg-slate-300 rounded-full mx-auto" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Seamless bottom fade overlay matching next section */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white dark:from-[#121214] to-transparent z-10" />
    </section>
  );
}
