"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/ui/BrandLogo";
import { Menu, X, Sun, Moon, MessageCircle, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-2.5 sm:top-4 z-50 w-full px-3 sm:px-6 lg:px-8 pointer-events-none">
      {/* Floating Rounded Pill Navbar */}
      <div className="pointer-events-auto mx-auto flex h-14 sm:h-18 max-w-7xl items-center justify-between rounded-full border border-neutral-300/80 dark:border-neutral-800/70 bg-white/95 dark:bg-[#161619]/95 px-4 sm:px-8 shadow-2xl backdrop-blur-xl transition-all duration-300">

        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none shrink-0"
        >
          <BrandLogo height={28} width={98} className="sm:h-8 sm:w-[110px]" />
        </Link>

        {/* Right: Navigation Links + Day & Night Option */}
        <div className="flex items-center space-x-1 sm:space-x-3">
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/services"
                  ? pathname === "/services"
                  : link.href === "/pricing"
                  ? pathname === "/pricing"
                  : link.href === "/contact"
                  ? pathname === "/contact"
                  : link.href === "/"
                  ? pathname === "/"
                  : false;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full group ${
                    isActive
                      ? "text-[#f97316] font-semibold"
                      : "text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-1.5 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-[#facc15] to-[#f97316]" />
                  )}
                </Link>
              );
            })}

            {/* Day and Night Option Placed Right After Contact */}
            <div className="flex items-center ml-2 sm:ml-3">
              <div className="flex items-center p-1 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-300/80 dark:border-neutral-700/80 shadow-inner">
                {/* Day Mode Option */}
                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  aria-label="Switch to Day mode"
                  title="Day mode"
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-200 cursor-pointer ${
                    theme === "light"
                      ? "bg-amber-400 text-slate-950 font-bold shadow-sm"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white font-medium"
                  }`}
                >
                  <Sun className="h-3.5 w-3.5" />
                  <span className="text-[11px] font-semibold">Day</span>
                </button>

                {/* Night Mode Option */}
                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  aria-label="Switch to Night mode"
                  title="Night mode"
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-200 cursor-pointer ${
                    theme === "dark"
                      ? "bg-neutral-800 text-amber-300 font-bold shadow-sm border border-neutral-700/60"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white font-medium"
                  }`}
                >
                  <Moon className="h-3.5 w-3.5" />
                  <span className="text-[11px] font-semibold">Night</span>
                </button>
              </div>
            </div>
          </nav>

          {/* Day / Night Toggle Icon on Mobile Header */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "Day" : "Night"} mode`}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700/60 bg-neutral-100 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 hover:text-[#f97316] transition-colors"
          >
            {theme === "light" ? (
              <Sun className="h-4 w-4 text-amber-500" />
            ) : (
              <Moon className="h-4 w-4 text-amber-400" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700/60 bg-neutral-100 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 hover:text-white hover:border-[#f97316]/50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4 text-[#f97316]" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Smooth Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto md:hidden mx-auto mt-2.5 max-w-sm rounded-[24px] border border-neutral-200/90 dark:border-neutral-800/80 bg-white/95 dark:bg-[#161619]/95 p-4 shadow-2xl backdrop-blur-2xl"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/services"
                    ? pathname === "/services"
                    : link.href === "/pricing"
                    ? pathname === "/pricing"
                    : link.href === "/contact"
                    ? pathname === "/contact"
                    : link.href === "/"
                    ? pathname === "/"
                    : false;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500/15 to-transparent text-[#f97316] border-l-4 border-[#f97316]"
                        : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800/50 dark:hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="h-2 w-2 rounded-full bg-[#f97316]" />
                    ) : (
                      <ArrowRight className="h-3.5 w-3.5 opacity-40" />
                    )}
                  </Link>
                );
              })}

              {/* Quick WhatsApp Action for Mobile Customers */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919641049148?text=Hello%20MERO%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md transition-transform active:scale-98"
                >
                  <MessageCircle className="h-4 w-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Day and Night Option in Mobile Dropdown */}
              <div className="pt-3 mt-1.5 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between px-2">
                <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                  Theme Mode
                </span>
                <div className="flex items-center p-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700/80">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                      theme === "light"
                        ? "bg-amber-400 text-slate-950 font-bold shadow-sm"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    <Sun className="h-3.5 w-3.5" />
                    <span>Day</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                      theme === "dark"
                        ? "bg-neutral-800 text-amber-300 font-bold shadow-sm"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    <Moon className="h-3.5 w-3.5" />
                    <span>Night</span>
                  </button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
