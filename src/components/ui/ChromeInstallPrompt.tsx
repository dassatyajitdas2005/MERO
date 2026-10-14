"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, CheckCircle2, Sparkles, Smartphone, ArrowRight, Share } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function ChromeInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    // Check if already in standalone/installed mode
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    ) {
      setIsInstalled(true);
      return;
    }

    // Detect browser & OS
    const ua = navigator.userAgent;
    const isChromeBrowser =
      /Chrome/i.test(ua) && !/Edge|Edg|OPR|Opera/i.test(ua);
    const isAppleMobile = /iPhone|iPad|iPod/i.test(ua);

    setIsChrome(isChromeBrowser);
    setIsIOS(isAppleMobile);

    // Check if user dismissed recently (24 hour cool-down)
    const dismissedAt = localStorage.getItem("mero_pwa_dismissed_at");
    if (dismissedAt) {
      const hoursSinceDismiss =
        (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60);
      if (hoursSinceDismiss < 24) {
        return;
      }
    }

    // Listen to native Chrome beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show prompt after a short delay for non-intrusive arrival
      setTimeout(() => {
        setShowPrompt(true);
      }, 2200);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Fallback: If on Chrome mobile or desktop and event hasn't fired after 3.5s, still show our install suggestion
    const timer = setTimeout(() => {
      if (!isInstalled && isChromeBrowser) {
        setShowPrompt(true);
      }
    }, 3500);

    // Listen to appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      clearTimeout(timer);
    };
  }, [isInstalled]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Trigger native Chrome install dialogue
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setIsInstalled(true);
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    } else {
      // Show visual step-by-step guide for Chrome / mobile
      setShowGuide(true);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("mero_pwa_dismissed_at", Date.now().toString());
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="pointer-events-auto w-full max-w-md rounded-[28px] sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#161619]/95 p-4 sm:p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl"
        >
          {/* Header Row: App Icon + Name + Close Button */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-tr from-[#f97316] to-[#facc15] p-0.5 shadow-md shrink-0">
                <div className="h-full w-full rounded-[14px] bg-[#121214] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/icon.png"
                    alt="MERO App Icon"
                    width={48}
                    height={48}
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                    Install MERO App
                  </h4>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-100 dark:bg-orange-950/80 text-[#f97316] border border-orange-200 dark:border-orange-800">
                    Chrome App
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                  Fast 1-tap access directly on your Home Screen
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleDismiss}
              className="rounded-full p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              aria-label="Dismiss install prompt"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Feature Badges for Trust */}
          <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-700 dark:text-neutral-300">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10b981]" />
              <span>Instant Loading</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
              <Sparkles className="h-3.5 w-3.5 text-[#facc15]" />
              <span>Full Screen App</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
              <Smartphone className="h-3.5 w-3.5 text-[#f97316]" />
              <span>No Play Store needed</span>
            </span>
          </div>

          {/* Interactive Guide (When Native Prompt can't be triggered automatically) */}
          {showGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-slate-800 dark:text-neutral-200 leading-relaxed"
            >
              {isIOS ? (
                <div className="space-y-1">
                  <div className="font-bold flex items-center gap-1 text-[#f97316]">
                    <Share className="h-3.5 w-3.5" />
                    <span>How to Install on iPhone / iPad:</span>
                  </div>
                  <p>1. Tap the <strong>Share</strong> button at bottom of Safari.</p>
                  <p>2. Scroll down &amp; tap <strong>Add to Home Screen (+)</strong>.</p>
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="font-bold text-[#f97316]">
                    How to Install on Chrome:
                  </div>
                  <p>
                    1. Tap the Chrome menu <strong>(⋮)</strong> in the top-right corner.
                  </p>
                  <p>
                    2. Select <strong>&quot;Install app&quot;</strong> or <strong>&quot;Add to Home screen&quot;</strong>.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="mt-4 flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleInstallClick}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white py-2.5 px-4 text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Download className="h-4 w-4 stroke-[2.5]" />
              <span>{deferredPrompt ? "Install App Now" : "Install / Download"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={handleDismiss}
              className="px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Not now
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
