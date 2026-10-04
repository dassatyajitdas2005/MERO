"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ConfidenceBanner() {
  return (
    <section className="relative pt-8 pb-0 sm:pt-12 sm:pb-0 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto"
        >
          {/* Layered Offset Background (matching the playful angled banner in reference) */}
          <div className="absolute inset-0 bg-[#ea580c] rounded-3xl transform rotate-1 scale-[1.01] opacity-60" />
          
          <div className="relative rounded-3xl bg-gradient-to-r from-[#f97316] to-[#ea580c] p-10 sm:p-14 md:p-16 text-center text-white shadow-2xl overflow-hidden">
            {/* Ambient Lighting */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#facc15]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Stop guessing. Start building with confidence
              </h2>

              <p className="text-base sm:text-lg text-orange-100/90 leading-relaxed max-w-2xl mx-auto">
                Bring clarity to prioritization, rally your career trajectory, and land the executive roles you deserve.
              </p>

              <div className="pt-4 flex justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#facc15] hover:bg-[#fbbf24] text-neutral-950 font-bold px-8 py-3.5 text-sm sm:text-base shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Get it free</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
