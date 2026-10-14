"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AppSplashLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if splash has already been shown in this active tab session
    const alreadyShown = sessionStorage.getItem("mero_app_splash_shown");
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    // Show splash on every fresh standalone app launch, or once per browser session
    if (alreadyShown && !isStandalone) {
      setLoading(false);
      return;
    }

    // Set a smooth 2.1-second timer (within 1 to 3 seconds as requested)
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("mero_app_splash_shown", "true");
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="mero-splash-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#121214] text-white overflow-hidden select-none"
        >
          {/* Ambient Glow in the background */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-[#f97316]/25 to-[#facc15]/20 blur-[100px] animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* App Icon Container with White Squircle matching the requested icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-[28px] sm:rounded-[32px] bg-white p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden border border-white/20"
            >
              <Image
                src="/icon.png"
                alt="MERO App"
                width={120}
                height={120}
                priority
                className="h-full w-full object-contain"
              />
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex flex-col items-center text-center space-y-1"
            >
              <h1 className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase flex items-center gap-1.5">
                <span>MERO</span>
              </h1>
              <span className="text-[11px] sm:text-xs font-semibold text-neutral-400 tracking-wider">
                All your business on one platform
              </span>
            </motion.div>

            {/* Smooth Loading Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-8 w-44 sm:w-52 h-1.5 rounded-full bg-neutral-800 overflow-hidden relative"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#facc15] via-[#f97316] to-[#ea580c] shadow-[0_0_12px_rgba(249,115,22,0.8)]"
              />
            </motion.div>

            {/* Subtle Pulse Text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="mt-3 text-[10px] uppercase font-bold tracking-widest text-neutral-500"
            >
              Loading App...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
