"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RolesShowcase() {
  const [activeBubble, setActiveBubble] = useState<string | null>(null);

  // 7 MERO Products in a semicircle rainbow arch
  const meroProducts = [
    {
      id: "resume",
      name: "ATS Resume",
      tagline: "99% ATS-proof resume builder",
      pos: { x: 82, y: 210 },
      icon: (
        <svg className="w-6 h-6 select-none" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="16" height="18" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          <path d="M8 8h8M8 12h5M8 16h8" stroke="#854d0e" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="16" cy="12" r="2.5" fill="#eab308" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      name: "LinkedIn Growth",
      tagline: "Executive personal branding",
      pos: { x: 121, y: 135 },
      icon: (
        <svg className="w-6 h-6 select-none" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="1.5" fill="#ea580c" />
          <path d="M8 11v6M12 17v-3.5a2 2 0 0 1 4 0V17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "portfolio",
      name: "Web Portfolios",
      tagline: "Turn resume into live portfolio",
      pos: { x: 188, y: 83 },
      icon: (
        <svg className="w-6 h-6 select-none" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" fill="#f3e8ff" stroke="#9333ea" strokeWidth="1.5" />
          <path d="M3.6 9h16.8M3.6 15h16.8" stroke="#a855f7" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#9333ea" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      id: "ai-core",
      name: "MERO AI Core",
      tagline: "Intelligent auto-tailoring & analytics",
      pos: { x: 270, y: 65 },
      icon: (
        <svg className="w-7 h-7 select-none" viewBox="0 0 24 24" fill="none">
          {/* Glowing 4-point AI Star Apex */}
          <path
            d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
            fill="url(#meroAIGrad)"
          />
          <defs>
            <linearGradient id="meroAIGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f97316" />
              <stop offset="0.5" stopColor="#facc15" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: "whatsapp",
      name: "WhatsApp CRM",
      tagline: "Official Cloud API & sales bot",
      pos: { x: 352, y: 83 },
      icon: (
        <svg className="w-6 h-6 select-none" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#25d366" />
          <path
            d="M17 13.8c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.1-.3.1-.5 0-.2-.1-.9-.3-1.7-1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3 0-.1 0-.3 0-.4-.1-.1-.5-1.1-.7-1.5-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.4.1-.7.4-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3 4.8 4.2.7.3 1.2.4 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      id: "stock",
      name: "Stock ERP",
      tagline: "Real-time inventory & barcodes",
      pos: { x: 419, y: 135 },
      icon: (
        <svg className="w-6 h-6 select-none" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.5" />
          <path d="M12 6l5 3-5 3-5-3 5-3z" fill="#14b8a6" stroke="#0f766e" strokeWidth="1" />
          <path d="M7 9v6l5 3v-6L7 9z" fill="#0d9488" />
          <path d="M17 9v6l-5 3v-6l5-3z" fill="#042f2e" opacity="0.4" />
        </svg>
      ),
    },
    {
      id: "web-apps",
      name: "Web Applications",
      tagline: "Next.js static & dynamic websites",
      pos: { x: 458, y: 210 },
      icon: (
        <svg className="w-6 h-6 select-none" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="4" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" />
          <path d="M8 10l-2 2 2 2M16 10l2 2-2 2M13 9l-2 6" stroke="#4338ca" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Layout Without Card Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big Bold Title */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              Build with the <br />
              best of <br />
              <span className="text-[#f97316]">MERO</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-400 font-normal max-w-md leading-relaxed">
              Connect your career and business with MERO&apos;s unified product suite — ATS Resumes, LinkedIn, Portfolios, WhatsApp CRM, Stock ERP, and Web Apps.
            </p>

            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#f97316] text-white hover:bg-[#ea580c] text-sm font-bold shadow-lg shadow-orange-500/20 transition-all duration-200 group"
              >
                <span>Explore all MERO products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Semicircle Arch of MERO Products + Mascot with Laptop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex items-center justify-center relative select-none"
          >
            <div className="relative w-full max-w-[540px] aspect-[540/360] flex items-center justify-center">
              
              {/* SVG Canvas for Semicircle Mascot & Connections */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 540 360"
                fill="none"
              >
                <defs>
                  {/* Mascot 3D Shading Gradients */}
                  <radialGradient id="mascotHead" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#bae6fd" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </radialGradient>

                  <radialGradient id="mascotBody" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#7dd3fc" />
                    <stop offset="60%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#0369a1" />
                  </radialGradient>

                  <linearGradient id="mascotBelly" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>

                  <linearGradient id="laptopLid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#3730a3" />
                  </linearGradient>
                </defs>

                {/* Gentle Guide Arch */}
                <path
                  d="M 82 210 A 195 195 0 0 1 458 210"
                  stroke="#334155"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />

                {/* MASCOT GRAPHIC (Center Bottom) */}
                <g id="mascot-character">
                  {/* Left & Right Flapping Wings */}
                  <ellipse cx="195" cy="235" rx="26" ry="14" fill="#38bdf8" transform="rotate(-20 195 235)" />
                  <ellipse cx="345" cy="235" rx="26" ry="14" fill="#38bdf8" transform="rotate(20 345 235)" />

                  {/* Cute Head Tuft / Top Crest */}
                  <circle cx="270" cy="142" r="14" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
                  <circle cx="270" cy="138" r="8" fill="#bae6fd" />

                  {/* Main Head Sphere */}
                  <circle cx="270" cy="195" r="54" fill="url(#mascotHead)" />

                  {/* Face Mask / Goggle Rings */}
                  <ellipse cx="248" cy="192" rx="20" ry="22" fill="#0284c7" />
                  <ellipse cx="292" cy="192" rx="20" ry="22" fill="#0284c7" />
                  <ellipse cx="248" cy="192" rx="16" ry="18" fill="#06b6d4" />
                  <ellipse cx="292" cy="192" rx="16" ry="18" fill="#06b6d4" />

                  {/* Big Adorable Glossy Eyes */}
                  <circle cx="248" cy="192" r="12" fill="#0f172a" />
                  <circle cx="292" cy="192" r="12" fill="#0f172a" />

                  {/* Eye Catchlights / Sparkles */}
                  <circle cx="244" cy="188" r="4.5" fill="#ffffff" />
                  <circle cx="251" cy="195" r="2" fill="#ffffff" />
                  <circle cx="288" cy="188" r="4.5" fill="#ffffff" />
                  <circle cx="295" cy="195" r="2" fill="#ffffff" />

                  {/* Cute Beak */}
                  <polygon points="270,198 260,218 280,218" fill="#78350f" stroke="#451a03" strokeWidth="1" />
                  <polygon points="270,202 263,217 277,217" fill="#b45309" />

                  {/* Cute White Chest Bib */}
                  <path d="M 248 232 Q 270 248 292 232 Q 270 258 248 232 Z" fill="url(#mascotBelly)" />

                  {/* Paws on Sides */}
                  <ellipse cx="198" cy="275" rx="16" ry="10" fill="#78350f" />
                  <ellipse cx="342" cy="275" rx="16" ry="10" fill="#78350f" />

                  {/* LAPTOP WITH MERO BRAND LOGO ON LID */}
                  <g transform="translate(195, 230)">
                    {/* Laptop Screen Lid Facing Forward */}
                    <rect x="0" y="0" width="150" height="92" rx="12" fill="url(#laptopLid)" stroke="#312e81" strokeWidth="2" />
                    
                    {/* Subtle Lid Rim Highlight */}
                    <line x1="12" y1="6" x2="138" y2="6" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />

                    {/* Official MERO Brand Logo on Lid */}
                    <g transform="translate(60, 28)">
                      {/* MERO Stylized Flame & "M" Emblem */}
                      <path
                        d="M15 2C15 2 6 12 6 20C6 24.97 10.03 29 15 29C19.97 29 24 24.97 24 20C24 12 15 2 15 2Z"
                        fill="#f97316"
                      />
                      <path
                        d="M15 10C15 10 10 16 10 21C10 23.76 12.24 26 15 26C17.76 26 20 23.76 20 21C20 16 15 10 15 10Z"
                        fill="#facc15"
                      />
                      <path
                        d="M15 16C15 16 12 19 12 22C12 23.66 13.34 25 15 25C16.66 25 18 23.66 18 22C18 19 15 16 15 16Z"
                        fill="#ffffff"
                      />
                    </g>
                  </g>
                </g>
              </svg>

              {/* 7 FLOATING CIRCULAR PRODUCT BUBBLES IN A RAINBOW ARCH */}
              {meroProducts.map((prod, idx) => {
                const isActive = activeBubble === prod.id;
                return (
                  <div
                    key={prod.id}
                    style={{
                      left: `${(prod.pos.x / 540) * 100}%`,
                      top: `${(prod.pos.y / 360) * 100}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                    onMouseEnter={() => setActiveBubble(prod.id)}
                    onMouseLeave={() => setActiveBubble(null)}
                  >
                    <motion.div
                      animate={{ y: [0, idx % 2 === 0 ? -5 : 5, 0] }}
                      transition={{
                        duration: 3 + (idx % 3) * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.22 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl shadow-black/40 border-2 transition-all duration-300 flex items-center justify-center p-2.5 ${
                        isActive
                          ? "border-[#f97316] ring-4 ring-[#f97316]/25 shadow-2xl scale-110"
                          : "border-neutral-800 hover:border-neutral-600"
                      }`}
                    >
                      {prod.icon}
                    </motion.div>

                    {/* Tooltip on Hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                      <span className="text-[11px] font-bold text-neutral-200 bg-[#18181c]/95 border border-neutral-700/80 px-2.5 py-1 rounded-md shadow-xl">
                        {prod.name}
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
