"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ConfidenceBanner() {
  return (
    <section className="relative py-8 sm:py-12 md:py-14 overflow-visible bg-transparent transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-r from-[#fb923c] via-[#f97316] to-[#f59e0b] p-7 sm:p-10 md:p-12 text-slate-950 shadow-2xl border border-white/50"
        >
          {/* Subtle Ambient Glow inside Card */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/40 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-amber-300/40 blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            {/* Left: Eyebrow, Title, Subtext */}
            <div className="space-y-3 sm:space-y-3.5 max-w-2xl text-left">
              <span className="text-[11px] sm:text-xs font-black text-slate-950/70 tracking-widest uppercase block">
                MERO
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black tracking-tight text-slate-950 leading-[1.15]">
                Stop guessing. Start building with confidence
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-950/85 font-medium leading-relaxed max-w-xl">
                Bring clarity to prioritization, rally your career trajectory, and land the executive roles you deserve.
              </p>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-5 shrink-0 pt-2 lg:pt-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-950 bg-slate-950 text-white hover:bg-slate-800 px-7 py-3 text-xs sm:text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <span>Get it free</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-950 hover:text-white transition-colors group cursor-pointer whitespace-nowrap"
              >
                <span>Explore all services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
