"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function Hero() {
  // App ecosystem tiles: Exact vector geometries matching screenshots with Yellow, Orange, and Light Blue palette
  const apps = [
    {
      id: "crm",
      name: "CRM",
      icon: (
        <svg className="w-11 h-11 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none">
          {/* CRM Triangular Inverted Handshake Shield */}
          {/* Left Sleeve & Hand (Light Blue) */}
          <path
            d="M 6 13 C 6 11 7.5 9.5 9.5 9.5 L 24 9.5 L 29.5 15 L 24 20.5 L 18 20.5 L 11.5 14 L 6 13 Z"
            fill="#0ea5e9"
          />
          <path
            d="M 11.5 14 L 21 23.5 L 24.5 35 C 24.5 36.5 23 37.5 21.5 37 C 20 36.5 18 34.5 14 30.5 L 6 13 Z"
            fill="#0284c7"
          />
          {/* Right Sleeve & Hand (Orange) */}
          <path
            d="M 42 13 C 42 11 40.5 9.5 38.5 9.5 L 24 9.5 L 18.5 15 L 24 20.5 L 30 20.5 L 36.5 14 L 42 13 Z"
            fill="#f97316"
          />
          <path
            d="M 36.5 14 L 27 23.5 L 23.5 35 C 23.5 36.5 25 37.5 26.5 37 C 28 36.5 30 34.5 34 30.5 L 42 13 Z"
            fill="#ea580c"
          />
          {/* Center Handshake Clasp / Overlap (Yellow) */}
          <path
            d="M 24 15 L 28.5 19.5 L 24 24 L 19.5 19.5 Z"
            fill="#facc15"
          />
          <path
            d="M 21.5 21.5 L 24 24 L 26.5 21.5 L 25 18.5 L 23 18.5 Z"
            fill="#fbbf24"
          />
        </svg>
      ),
    },
    {
      id: "website",
      name: "Website",
      icon: (
        <svg className="w-11 h-11 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none">
          {/* Website Two-Half Wavy Sphere Logo */}
          {/* Upper Half Dome with Wave (Light Blue & Sky Blue) */}
          <path
            d="M 7 21 C 7.5 11.5 15.5 6 24 6 C 32.5 6 40.5 11.5 41 21 C 34 18 29 23 20 20 C 13 18 9 20 7 21 Z"
            fill="#38bdf8"
          />
          <path
            d="M 7 21 C 9 19 14 17.5 20 20 C 27 22.5 32 18.5 41 21 C 38 23 32 23 24 22 C 16 21 10 22 7 21 Z"
            fill="#0284c7"
          />
          {/* Lower Half Bowl with Wave (Orange & Yellow) */}
          <path
            d="M 7 27 C 7.5 36.5 15.5 42 24 42 C 32.5 42 40.5 36.5 41 27 C 34 30 29 25 20 28 C 13 30 9 28 7 27 Z"
            fill="#f97316"
          />
          <path
            d="M 7 27 C 9 28.5 14 29.5 20 28 C 27 25.5 32 29.5 41 27 C 38 25 32 25 24 26 C 16 27 10 26 7 27 Z"
            fill="#facc15"
          />
        </svg>
      ),
    },
    {
      id: "inventory",
      name: "Inventory Software",
      icon: (
        <svg className="w-11 h-11 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none">
          {/* Inventory 3D Sliced Isometric Hexagonal Cube Logo */}
          {/* Slice 1: Left Vertical Slab (Yellow) */}
          <path
            d="M 7 16.5 L 24 7 L 28 9.3 L 12 18.5 L 12 34.4 L 7 31.5 Z"
            fill="#facc15"
          />
          {/* Slice 2: Middle Vertical Slab (Orange) */}
          <path
            d="M 28 9.3 L 33 12.1 L 18 20.7 L 18 37.6 L 12 34.4 L 12 18.5 Z"
            fill="#f97316"
          />
          {/* Slice 3: Right Isometric Face (Light Blue) */}
          <path
            d="M 33 12.1 L 41 16.5 L 41 31.5 L 24 41 L 18 37.6 L 18 20.7 Z"
            fill="#0ea5e9"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 md:pt-18 pb-0 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[680px] rounded-full bg-gradient-to-tr from-amber-500/8 via-orange-500/6 to-transparent blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* ========================================================================= */}
        {/* TOP HEADLINE AREA MATCHING SCREENSHOT 2 (AUTHENTIC HANDWRITTEN STYLE)      */}
        {/* ========================================================================= */}
        
        {/* Line 1: All your business on [one platform.] */}
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] select-none"
        >
          <span>All your business on </span>
          {/* Hand-drawn circular loop around "one platform." matching screenshot with #f59e0b */}
          <span className="relative inline-block px-3 sm:px-5 py-0 mx-1 text-slate-900 dark:text-white font-bold select-none">
            <span>one platform.</span>
            <svg
              className="absolute -inset-x-3 sm:-inset-x-5 -inset-y-2 sm:-inset-y-3 w-[calc(100%+24px)] sm:w-[calc(100%+40px)] h-[calc(100%+16px)] sm:h-[calc(100%+24px)] text-[#f59e0b] overflow-visible pointer-events-none select-none -rotate-1"
              viewBox="0 0 260 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Main Hand-Drawn Sketched Oval Loop */}
              <path
                d="M 130 9 C 55 5, 10 18, 8 36 C 6 54, 45 64, 130 65 C 215 66, 252 52, 252 35 C 252 18, 205 7, 105 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Hand-Sketched Second Accent Stroke matching screenshot */}
              <path
                d="M 112 16 C 145 13, 178 14, 195 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Line 2: Simple, efficient, yet [affordable!] */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-2 sm:mt-3 font-script text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] font-bold tracking-tight text-slate-900 dark:text-neutral-100 leading-[1.15] select-none"
        >
          <span>Simple, efficient, yet </span>
          {/* Blue hand-drawn curved underline beneath "affordable!" */}
          <span className="relative inline-block text-slate-900 dark:text-white">
            affordable!
            <svg
              className="absolute -bottom-2.5 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#0ea5e9] dark:text-[#38bdf8] overflow-visible pointer-events-none"
              viewBox="0 0 140 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 11 C 32 3, 72 4, 137 9"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.div>

        {/* ========================================================================= */}
        {/* BUTTONS & PRICE CALLOUT ROW (WITH ARROW POINTING TO "starting from 2899")   */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative"
        >
          {/* Button 1: Start now */}
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-neutral-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Start now</span>
          </Link>

          {/* Button 2: Meet an advisor -> DIRECT DIAL TO 7872624993 */}
          <a
            href="tel:7872624993"
            aria-label="Call MERO Advisor directly at 7872624993"
            title="Click to call: 7872624993"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#f1f0f4] hover:bg-[#e4e2ea] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#714b67] dark:text-neutral-100 font-bold text-sm sm:text-base border border-neutral-200/80 dark:border-neutral-700/80 shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#714b67] dark:text-amber-400" />
            <span>Meet an advisor</span>
          </a>

          {/* Hand-Drawn Curved Arrow & Price Annotation Matching Screenshot */}
          <div className="relative inline-flex items-center sm:items-start pl-1 sm:pl-3 pt-2 sm:pt-0">
            {/* Curved Arrow pointing to the text */}
            <svg
              className="w-10 h-9 sm:w-14 sm:h-11 text-[#714b67] dark:text-amber-400 rotate-[-10deg] shrink-0 pointer-events-none"
              viewBox="0 0 55 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8 C 22 5, 38 14, 42 30"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M33 26 L 42 32 L 46 23"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Handwritten Price Annotation */}
            <div className="font-script text-xl sm:text-2xl md:text-[26px] text-[#714b67] dark:text-amber-400 font-bold leading-tight -rotate-3 text-left pl-1">
              <span>starting from 2899</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* FULL-WIDTH WATER-LIGHT CONVEX DOME ARCH WITH 3 CLEAN MERO APPS            */}
      {/* ========================================================================= */}
      <div className="relative w-full mt-10 sm:mt-14 md:mt-16 overflow-hidden">
        
        {/* Full-width Smooth Convex Dome SVG Arch */}
        <div className="w-full overflow-hidden leading-none select-none -mb-px">
          <svg
            className="w-full h-14 sm:h-20 md:h-28 text-[#f1f5f9] dark:text-[#181a20] block"
            viewBox="0 0 1440 100"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M 0,100 Q 720,-100 1440,100 L 1440,100 L 0,100 Z" />
          </svg>
        </div>

        {/* Water-Light Dome Canvas Area */}
        <div className="w-full bg-[#f1f5f9] dark:bg-[#181a20] pt-0 pb-10 sm:pb-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Shifted Slightly Higher into the Dome Curve with responsive gaps */}
            <div className="relative -mt-6 sm:-mt-10 md:-mt-12 flex items-start justify-center gap-3.5 sm:gap-10 md:gap-16 lg:gap-20 z-10 px-1">
              {apps.map((app, idx) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group flex flex-col items-center text-center cursor-pointer w-[76px] sm:w-24 md:w-28 shrink-0 overflow-visible"
                >
                  {/* Clean White Squircle Tile */}
                  <div
                    className="w-[76px] h-[76px] sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] flex items-center justify-center p-3 sm:p-4.5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 bg-white dark:bg-[#22252e] shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                  >
                    {app.icon}
                  </div>

                  {/* Clean Bold Name */}
                  <span className="mt-2.5 sm:mt-3.5 text-[11px] sm:text-sm md:text-base font-bold text-slate-800 dark:text-neutral-100 group-hover:text-[#f97316] transition-colors whitespace-nowrap text-center leading-tight">
                    {app.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Seamless bottom fade overlay to match next section */}
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white dark:from-[#121214] to-transparent z-10" />

      </div>

    </section>
  );
}

