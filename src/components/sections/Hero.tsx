"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-20 bg-[#121214] text-white">
      {/* Background Subtle Grid & Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient Radial Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#121214]/60 to-[#121214]" />

        {/* Brand Glow Highlights (Yellow & Orange) */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[620px] rounded-full bg-gradient-to-tr from-[#f97316]/15 via-[#facc15]/10 to-transparent blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Grid: Left Content, Right Cartoon Line-Art Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Short, crisp, high-impact copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 space-y-6 text-left"
          >
            {/* Main Title (Eyebrow + Giant Title) */}
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-300 block">
                MERO for
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.04]">
                Careers &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#facc15]">
                  Builders
                </span>
              </h1>
            </div>

            {/* Short, crisp, punchy description (No heavy paragraphs) */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-xl">
              Build an executive personal brand that commands attention. From 99% ATS-proof
              resumes and algorithmic LinkedIn optimization to bespoke portfolio websites — MERO accelerates your professional trajectory.
            </p>

            {/* CTA Buttons Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 text-sm sm:text-base font-black tracking-wider uppercase shadow-xl shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>GET STARTED</span>
                <ChevronRight className="h-5 w-5 stroke-[2.5]" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-200 hover:text-white px-7 py-4 text-sm sm:text-base font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Pricing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust Bullet Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="h-4 w-4 text-[#facc15]" />
                Zero Paywalls
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="h-4 w-4 text-[#f97316]" />
                99% ATS Pass Rate
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                24 - 48h Turnaround
              </span>
            </div>
          </motion.div>

          {/* Right Column: Rocket & Human Illustration directly on transparent dark background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-center relative"
          >
            {/* Floating Stage Pills directly on dark background */}
            <div className="absolute top-2 left-4 z-10 hidden sm:block">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-neutral-900/90 text-indigo-300 border border-indigo-500/30 shadow-lg backdrop-blur-md">
                SET UP
              </span>
            </div>

            <div className="absolute top-0 right-1/3 z-10 hidden sm:block">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-neutral-900/90 text-emerald-300 border border-emerald-500/30 shadow-lg backdrop-blur-md">
                START OFF
              </span>
            </div>

            <div className="absolute top-6 right-2 z-10 hidden sm:block">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-neutral-900/90 text-[#f97316] border border-orange-500/30 shadow-lg backdrop-blur-md">
                SCALE UP
              </span>
            </div>

            {/* Seamless Transparent Cartoon Line-Art Image directly on dark background (NO BOX) */}
            <div className="relative w-full max-w-lg sm:max-w-xl flex items-center justify-center">
              {/* Subtle ambient warm backglow behind rocket */}
              <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-[#f97316]/20 via-[#facc15]/15 to-transparent blur-[90px]" />
              </div>

              <Image
                src="/hero-illustration-dark.png"
                alt="MERO Rocket Launch & Career Builders"
                width={850}
                height={638}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* Two Motivational Lines below the Image */}
            <div className="mt-2 text-center max-w-md mx-auto space-y-1">
              <p className="text-sm sm:text-base font-bold text-neutral-200 tracking-wide leading-snug">
                “Every breakthrough starts with a bold first step.”
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#facc15] leading-snug">
                It’s competitive out there, but MERO’s got your back.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
