"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

export default function CommunityBanner() {
  return (
    <section className="relative py-12 md:py-18 border-t border-neutral-800/30 dark:border-neutral-800/30 border-neutral-200/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Graphic: Overlapping Speech Bubbles & Avatars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center py-6"
          >
            <div className="relative w-72 h-64 sm:w-88 sm:h-72 flex items-center justify-center">
              {/* Avatar dot 1 (Top) */}
              <div className="absolute top-2 left-1/3 flex h-8 w-8 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-md z-20">
                <User className="h-4 w-4" />
              </div>

              {/* Yellow Primary Speech Bubble */}
              <div className="absolute top-8 left-4 w-44 sm:w-52 h-28 sm:h-32 rounded-2xl bg-[#facc15] shadow-lg p-5 z-10 flex flex-col justify-center space-y-2">
                <div className="h-2 w-24 bg-neutral-900/80 rounded-full" />
                <div className="h-2 w-32 bg-neutral-900/80 rounded-full" />
                {/* Speech tail */}
                <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[#facc15] border-r-[12px] border-r-transparent" />
              </div>

              {/* Purple/Coral Semi-transparent Overlapping Bubble */}
              <div className="absolute top-16 right-4 sm:right-6 w-44 sm:w-52 h-28 sm:h-32 rounded-2xl bg-[#a855f7]/85 backdrop-blur-md shadow-xl p-5 z-15 flex flex-col justify-center">
                {/* Wavy line */}
                <svg className="w-24 sm:w-28 h-6 stroke-neutral-900 stroke-[3] fill-none" viewBox="0 0 100 20">
                  <path d="M0 10 Q 25 0, 50 10 T 100 10" />
                </svg>
                {/* Speech tail */}
                <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[#a855f7]/85 border-r-[12px] border-r-transparent" />
              </div>

              {/* Avatar dot 2 (Left) */}
              <div className="absolute bottom-16 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#a855f7] text-white shadow-md z-20">
                <User className="h-4 w-4" />
              </div>

              {/* Orange Small Speech Bubble with 3 Dots */}
              <div className="absolute bottom-4 left-20 w-28 sm:w-32 h-20 sm:h-22 rounded-2xl bg-[#f97316] shadow-lg p-3 z-20 flex items-center justify-center space-x-2">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-900" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-900" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-900" />
                {/* Speech tail */}
                <div className="absolute -bottom-2.5 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-[#f97316] border-r-[8px] border-r-transparent" />
              </div>

              {/* Avatar dot 3 (Bottom-Right) */}
              <div className="absolute bottom-2 right-12 flex h-8 w-8 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-md z-20">
                <User className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Link */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              Join us in the MERO Community
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
              Ask questions, get career feedback, and connect with our team and other users to learn executive branding best practices.
            </p>

            <div className="pt-2">
              <Link
                href="#community"
                className="inline-flex items-center gap-1.5 text-base font-bold text-[#f97316] hover:text-[#ea580c] dark:text-[#f97316] dark:hover:text-[#facc15] transition-colors group"
              >
                <span>Join the discussion</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
