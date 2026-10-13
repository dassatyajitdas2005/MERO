"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

export default function CommunityBanner() {
  const whatsappUrl =
    "https://wa.me/919641049148?text=" +
    encodeURIComponent("Hi MERO, I am Interested in your services");

  return (
    <section
      id="contact-team"
      className="relative py-10 sm:py-14 md:py-16 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
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
            <div className="relative w-72 h-64 sm:w-88 sm:h-72 flex items-center justify-center select-none">
              
              {/* Avatar dot 1 (Top) */}
              <div className="absolute top-2 left-1/3 flex h-8 w-8 items-center justify-center rounded-full bg-[#f97316] text-white shadow-md z-20">
                <User className="h-4 w-4" />
              </div>

              {/* Yellow Primary Speech Bubble */}
              <div className="absolute top-8 left-4 w-44 sm:w-52 h-28 sm:h-32 rounded-2xl bg-[#facc15] shadow-lg p-5 z-10 flex flex-col justify-center space-y-2">
                <div className="h-2 w-24 bg-neutral-900/80 rounded-full" />
                <div className="h-2 w-32 bg-neutral-900/80 rounded-full" />
                {/* Speech tail */}
                <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[#facc15] border-r-[12px] border-r-transparent" />
              </div>

              {/* WhatsApp Green / Teal Overlapping Bubble */}
              <div className="absolute top-16 right-4 sm:right-6 w-44 sm:w-52 h-28 sm:h-32 rounded-2xl bg-[#25D366]/90 backdrop-blur-md shadow-xl p-5 z-15 flex flex-col justify-center">
                {/* Wavy speech line */}
                <svg className="w-24 sm:w-28 h-6 stroke-neutral-900 stroke-[3] fill-none" viewBox="0 0 100 20">
                  <path d="M0 10 Q 25 0, 50 10 T 100 10" />
                </svg>
                {/* Speech tail */}
                <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[#25D366]/90 border-r-[12px] border-r-transparent" />
              </div>

              {/* Avatar dot 2 (Left) */}
              <div className="absolute bottom-16 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-black shadow-md z-20 font-bold text-xs">
                M²
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

          {/* Right Column: Handwritten Heading, Custom Subtext, Direct WhatsApp Action */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5 text-left"
          >
            {/* Direct Contact Header in MERO Script Style */}
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] select-none">
              <span>Direct contact with </span>
              <span className="relative inline-block text-slate-900 dark:text-white">
                MERO team...
                {/* Hand-drawn amber/green brush stroke underline */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#f59e0b] overflow-visible pointer-events-none"
                  viewBox="0 0 160 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 3 11 C 45 4, 105 4, 157 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Custom Subtext Requested by User */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 leading-relaxed max-w-lg font-normal">
              Connect with our team to discuss your requirements, explore possibilities, and find the right solution with MERO
            </p>

            {/* Direct WhatsApp Redirect Button */}
            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold px-8 py-4 text-base sm:text-lg shadow-xl shadow-green-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
              >
                {/* WhatsApp Vector Icon */}
                <svg className="h-6 w-6 fill-black" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Chat on WhatsApp</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
