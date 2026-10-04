"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden bg-[#121214] text-white transition-colors">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[320px] w-[560px] rounded-full bg-gradient-to-r from-[#f97316]/10 via-[#facc15]/10 to-transparent blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title Row with Geometric Floating Accents */}
        <div className="relative inline-flex items-center justify-center px-8 sm:px-16">
          
          {/* Left: Orange Wireframe 3D Cube Icon */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute -left-2 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2"
          >
            <div className="relative animate-bounce [animation-duration:6s]">
              <span className="absolute -inset-2 rounded-full bg-[#f97316]/20 blur-md" />
              {/* Isometric 3D Cube SVG */}
              <svg
                className="relative h-9 w-9 sm:h-12 sm:w-12 text-[#f97316] stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Cube vertices & edges */}
                <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
                <path d="M12 11l8-4.5" />
                <path d="M12 11v9" />
                <path d="M12 11L4 6.5" />
                {/* Vertex accent dots */}
                <circle cx="12" cy="2" r="1.2" fill="#f97316" stroke="none" />
                <circle cx="20" cy="6.5" r="1.2" fill="#f97316" stroke="none" />
                <circle cx="4" cy="6.5" r="1.2" fill="#f97316" stroke="none" />
                <circle cx="12" cy="11" r="1.2" fill="#f97316" stroke="none" />
                <circle cx="20" cy="15.5" r="1.2" fill="#f97316" stroke="none" />
                <circle cx="4" cy="15.5" r="1.2" fill="#f97316" stroke="none" />
                <circle cx="12" cy="20" r="1.2" fill="#f97316" stroke="none" />
              </svg>
            </div>
          </motion.div>

          {/* Central Bold Heading: Let's Build Together */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-white"
          >
            Let&apos;s Build Together
          </motion.h2>

          {/* Right: Yellow Wireframe Orbital Sphere / Ring Icon */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute -right-2 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2"
          >
            <div className="relative animate-bounce [animation-duration:5s] [animation-delay:1s]">
              <span className="absolute -inset-2 rounded-full bg-[#facc15]/20 blur-md" />
              {/* Orbital nodes sphere SVG */}
              <svg
                className="relative h-8 w-8 sm:h-11 sm:w-11 text-[#facc15] stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
                <ellipse cx="12" cy="12" rx="9" ry="4" strokeDasharray="2 2" className="animate-spin [animation-duration:14s]" />
                <circle cx="12" cy="3" r="1.4" fill="#facc15" stroke="none" />
                <circle cx="19" cy="16" r="1.4" fill="#facc15" stroke="none" />
                <circle cx="5" cy="12" r="1.4" fill="#facc15" stroke="none" />
              </svg>
            </div>
          </motion.div>

        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
        >
          Elevate your professional identity with bespoke career assets that command attention and accelerate your trajectory.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#f97316] hover:bg-[#ea580c] px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Start Building Free</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700/60 bg-neutral-900/40 hover:bg-neutral-800/60 text-neutral-200 px-7 py-3.5 text-sm sm:text-base font-medium shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
