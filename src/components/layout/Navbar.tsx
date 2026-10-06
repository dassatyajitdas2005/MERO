"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/ui/BrandLogo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
      {/* Floating Rounded Pill Navbar */}
      <div className="pointer-events-auto mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between rounded-full border border-neutral-800/70 bg-[#161619]/90 px-6 sm:px-8 shadow-2xl backdrop-blur-xl transition-all duration-300">

        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none shrink-0"
        >
          <BrandLogo height={32} width={110} />
        </Link>

        {/* Right: Navigation Links Placed Completely on the Far Right */}
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
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full group ${isActive
                      ? "text-[#f97316] font-semibold"
                      : "text-neutral-300 hover:text-white"
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-1.5 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-[#facc15] to-[#f97316]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Hamburger (Far Right on mobile) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700/60 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-[#f97316]/50 transition-colors"
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
        <div className="pointer-events-auto md:hidden mx-auto mt-3 max-w-sm rounded-3xl border border-neutral-800/80 bg-[#161619]/95 px-5 py-4 shadow-2xl backdrop-blur-xl transition-all">
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
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${isActive
                      ? "bg-neutral-800/60 text-[#f97316] font-semibold border-l-4 border-[#f97316]"
                      : "text-neutral-300 hover:bg-neutral-800/40 hover:text-white"
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#f97316]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
