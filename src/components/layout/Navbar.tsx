"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/ui/BrandLogo";
import { Menu, X, Sun, Moon } from "lucide-react";
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
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
      {/* Floating Rounded Pill Navbar */}
      <div className="pointer-events-auto mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between rounded-full border border-neutral-300/80 dark:border-neutral-800/70 bg-white/90 dark:bg-[#161619]/90 px-6 sm:px-8 shadow-2xl backdrop-blur-xl transition-all duration-300">

        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none shrink-0"
        >
          <BrandLogo height={32} width={110} />
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
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700/60 bg-neutral-100 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 hover:text-[#f97316] transition-colors"
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
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700/60 bg-neutral-100 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 hover:text-white hover:border-[#f97316]/50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-[#f97316]" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Floating Rounded Card) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mx-auto mt-3 max-w-sm rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white/95 dark:bg-[#161619]/95 px-5 py-4 shadow-2xl backdrop-blur-xl transition-all">
          <nav className="flex flex-col space-y-1.5">
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
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-neutral-100 dark:bg-neutral-800/60 text-[#f97316] font-semibold border-l-4 border-[#f97316]"
                      : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800/40 dark:hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#f97316]" />
                  )}
                </Link>
              );
            })}

            {/* Day and Night Option in Mobile Dropdown right after Contact */}
            <div className="pt-3 mt-1.5 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between px-3">
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                Theme
              </span>
              <div className="flex items-center p-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700/80">
                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs transition-all ${
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
                  className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs transition-all ${
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
        </div>
      )}
    </header>
  );
}
