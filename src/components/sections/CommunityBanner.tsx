"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, User, X, ExternalLink } from "lucide-react";

export default function CommunityBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const communityUrl = "https://chat.whatsapp.com/K8e6S57u1Y0Ap5rL3EG6SA";

  // Handle escape key to close modal & prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section id="community" className="relative py-12 md:py-18 border-t border-neutral-800/30 dark:border-neutral-800/30 border-neutral-200/50 overflow-hidden">
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
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-orange-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
              >
                <span>Join the discussion</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* WhatsApp Community Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-sm sm:max-w-md rounded-3xl bg-[#161619] border border-neutral-700/80 p-5 sm:p-7 shadow-2xl text-center overflow-hidden my-auto"
            >
              {/* Subtle top glow */}
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-64 rounded-full bg-[#25D366]/15 blur-3xl" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-1.5 mb-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 px-3 py-1 text-xs font-bold text-[#25D366]">
                  <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>WhatsApp Community</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Join MERO Community
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-xs mx-auto">
                  Scan the QR code below or tap Join to connect with our WhatsApp group directly.
                </p>
              </div>

              {/* QR Code Container */}
              <div className="relative mx-auto my-3 max-w-[260px] sm:max-w-[280px] rounded-2xl overflow-hidden border border-neutral-700/70 bg-black/40 p-2 shadow-inner">
                <Image
                  src="/mero-community-card.png"
                  alt="MERO Community WhatsApp QR Code"
                  width={516}
                  height={800}
                  priority
                  className="w-full h-auto rounded-xl object-contain shadow-md"
                />
              </div>

              {/* Action Button: Direct Join Button */}
              <div className="mt-4 space-y-2">
                <a
                  href={communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm sm:text-base py-3.5 px-6 shadow-xl shadow-green-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <svg className="h-5 w-5 fill-black" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Join WhatsApp Community</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <p className="text-[11px] text-neutral-500 font-medium">
                  Exclusive updates, networking &amp; executive branding tips
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
