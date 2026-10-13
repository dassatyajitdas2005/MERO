"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FeatureBento() {
  return (
    <section id="features" className="relative py-10 sm:py-14 md:py-16 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER MATCHING SCREENSHOT TEXT STYLE                             */}
        {/* ========================================================================= */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2] select-none"
          >
            {/* Highlighter marker on "How MERO" matching screenshot coral/pink highlight */}
            <span className="relative inline-block px-3.5 sm:px-5 py-0.5 mx-1 rounded-2xl bg-[#f43f5e] text-white font-bold -rotate-1 shadow-sm">
              How MERO
            </span>
            <span> helps your business </span>
            {/* Cyan curved underline on "scale" matching screenshot */}
            <span className="relative inline-block text-slate-900 dark:text-white">
              scale
              <svg
                className="absolute -bottom-2.5 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#06b6d4] dark:text-[#22d3ee] overflow-visible pointer-events-none"
                viewBox="0 0 100 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12 C 25 4, 60 5, 97 10"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>
        </div>

        {/* ========================================================================= */}
        {/* "OUR SERVICES" CENTER HUB WITH 4 OUTWARD CURVED ARROWS (NEW STYLE)        */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-5xl">
          
          {/* Desktop & Tablet Display (md and above) */}
          <div className="hidden md:grid md:grid-cols-12 items-center gap-4 lg:gap-8 py-6">
            
            {/* ----------------- LEFT COLUMN (Websites & Inventory) ----------------- */}
            <div className="md:col-span-4 flex flex-col justify-between h-full space-y-24 text-right pr-6 lg:pr-8">
              
              {/* Service 1: Top-Left (Websites) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <p className="text-base lg:text-lg font-semibold text-slate-800 dark:text-neutral-100 leading-snug">
                  We build modern, responsive websites tailored to your needs.
                </p>
                {/* Hand-drawn arrow curving up-left towards this text */}
                <div className="absolute -right-14 lg:-right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none text-slate-800 dark:text-neutral-200">
                  <svg className="w-12 h-12 lg:w-14 lg:h-14" viewBox="0 0 60 60" fill="none">
                    <path
                      d="M 48 48 C 38 32, 28 20, 14 14"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 12 24 L 14 13 L 25 14"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Service 3: Bottom-Left (Inventory) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group"
              >
                <p className="text-base lg:text-lg font-semibold text-slate-800 dark:text-neutral-100 leading-snug">
                  We simplify stock control with inventory management software.
                </p>
                {/* Hand-drawn arrow curving down-left towards this text */}
                <div className="absolute -right-14 lg:-right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none text-slate-800 dark:text-neutral-200">
                  <svg className="w-12 h-12 lg:w-14 lg:h-14" viewBox="0 0 60 60" fill="none">
                    <path
                      d="M 48 14 C 38 28, 28 40, 14 46"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 12 36 L 14 47 L 25 46"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>

            </div>

            {/* ----------------- CENTER COLUMN (OUR Services) ----------------- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="md:col-span-4 text-center px-4 flex flex-col items-center justify-center select-none"
            >
              <span className="text-3xl lg:text-4xl font-sans font-light tracking-[0.26em] text-slate-800 dark:text-neutral-200 uppercase block mb-1">
                OUR
              </span>
              <h3 className="text-6xl lg:text-7xl xl:text-8xl font-serif italic font-normal text-slate-950 dark:text-white leading-[0.95] tracking-tight">
                Services
              </h3>
              <span className="mt-4 text-[11px] lg:text-xs font-bold tracking-[0.24em] uppercase text-slate-600 dark:text-neutral-400 block">
                Content &amp; Business Scaling
              </span>
              <p className="mt-4 text-xs lg:text-sm text-slate-600 dark:text-neutral-400 font-medium leading-relaxed max-w-xs text-center">
                We are helping any kind of business grow with smart digital solutions.
              </p>
            </motion.div>

            {/* ----------------- RIGHT COLUMN (CRM & 24/7 Support) ----------------- */}
            <div className="md:col-span-4 flex flex-col justify-between h-full space-y-24 text-left pl-6 lg:pl-8">
              
              {/* Service 2: Top-Right (CRM) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                {/* Hand-drawn arrow curving up-right towards this text */}
                <div className="absolute -left-14 lg:-left-16 top-1/2 -translate-y-1/2 pointer-events-none select-none text-slate-800 dark:text-neutral-200">
                  <svg className="w-12 h-12 lg:w-14 lg:h-14" viewBox="0 0 60 60" fill="none">
                    <path
                      d="M 12 48 C 22 32, 32 20, 46 14"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 48 24 L 46 13 L 35 14"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-base lg:text-lg font-semibold text-slate-800 dark:text-neutral-100 leading-snug">
                  We provide CRM solutions to manage customers and leads efficiently.
                </p>
              </motion.div>

              {/* Service 4: Bottom-Right (24/7 Support) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group"
              >
                {/* Hand-drawn arrow curving down-right towards this text */}
                <div className="absolute -left-14 lg:-left-16 top-1/2 -translate-y-1/2 pointer-events-none select-none text-slate-800 dark:text-neutral-200">
                  <svg className="w-12 h-12 lg:w-14 lg:h-14" viewBox="0 0 60 60" fill="none">
                    <path
                      d="M 12 14 C 22 28, 32 40, 46 46"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 48 36 L 46 47 L 35 46"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-base lg:text-lg font-semibold text-slate-800 dark:text-neutral-100 leading-snug">
                  Our M² Team provides 24/7 customer support.
                </p>
              </motion.div>

            </div>

          </div>

          {/* Mobile Display (< md) */}
          <div className="md:hidden flex flex-col items-center space-y-8 text-center px-2">
            
            {/* Center Header */}
            <div className="flex flex-col items-center select-none">
              <span className="text-2xl font-sans font-light tracking-[0.25em] text-slate-800 dark:text-neutral-200 uppercase block mb-1">
                OUR
              </span>
              <h3 className="text-5xl font-serif italic font-normal text-slate-950 dark:text-white leading-[0.95]">
                Services
              </h3>
              <span className="mt-3 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-neutral-400 block">
                Content &amp; Business Scaling
              </span>
              <p className="mt-2 text-xs text-slate-600 dark:text-neutral-400 font-medium max-w-xs">
                We are helping any kind of business grow with smart digital solutions.
              </p>
            </div>

            {/* 4 Services with mini curved arrows */}
            <div className="w-full space-y-5 text-left pt-2">
              
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200/80 dark:border-neutral-800">
                <svg className="w-6 h-6 shrink-0 text-[#f59e0b] mt-0.5" viewBox="0 0 30 30" fill="none">
                  <path d="M 6 22 C 12 14, 18 10, 24 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 23 15 L 25 8 L 18 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-semibold text-slate-800 dark:text-neutral-100 leading-snug">
                  We build modern, responsive websites tailored to your needs.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200/80 dark:border-neutral-800">
                <svg className="w-6 h-6 shrink-0 text-[#f97316] mt-0.5" viewBox="0 0 30 30" fill="none">
                  <path d="M 6 22 C 12 14, 18 10, 24 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 23 15 L 25 8 L 18 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-semibold text-slate-800 dark:text-neutral-100 leading-snug">
                  We provide CRM solutions to manage customers and leads efficiently.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200/80 dark:border-neutral-800">
                <svg className="w-6 h-6 shrink-0 text-[#0ea5e9] mt-0.5" viewBox="0 0 30 30" fill="none">
                  <path d="M 6 8 C 12 16, 18 20, 24 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 23 15 L 25 22 L 18 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-semibold text-slate-800 dark:text-neutral-100 leading-snug">
                  We simplify stock control with inventory management software.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200/80 dark:border-neutral-800">
                <svg className="w-6 h-6 shrink-0 text-[#10b981] mt-0.5" viewBox="0 0 30 30" fill="none">
                  <path d="M 6 8 C 12 16, 18 20, 24 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 23 15 L 25 22 L 18 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-semibold text-slate-800 dark:text-neutral-100 leading-snug">
                  Our M² Team provides 24/7 customer support.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
