"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FeatureBento() {
  const features = [
    {
      id: "web-services",
      title: "Modern Web Services",
      subtitle:
        "High-performance static and dynamic web applications built for speed, SEO, and seamless conversions.",
      illustration: (
        <svg
          className="w-full max-w-[310px] h-[210px] sm:h-[230px] mx-auto select-none"
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Angled Polygon Wedges matching reference screenshot */}
          <polygon points="25,165 240,110 280,185 65,215" fill="#1e1b4b" fillOpacity="0.85" />
          <polygon points="75,125 275,85 295,155 95,195" fill="#312e81" fillOpacity="0.75" />

          {/* Floating Mobile Smartphone */}
          <g transform="translate(138, 38) rotate(9)">
            <rect x="0" y="0" width="78" height="138" rx="14" fill="#ffffff" stroke="#191a23" strokeWidth="2.2" />
            <rect x="6" y="8" width="66" height="10" rx="3" fill="#818cf8" />
            <rect x="6" y="24" width="66" height="30" rx="4" fill="#facc15" />
            <rect x="6" y="60" width="34" height="9" rx="3" fill="#f97316" />
            <rect x="6" y="75" width="66" height="22" rx="3" fill="#e0e7ff" />
            <rect x="6" y="103" width="30" height="22" rx="4" fill="#f1f5f9" />
            <rect x="42" y="103" width="30" height="22" rx="4" fill="#f1f5f9" />
          </g>

          {/* Floating Code Snippet Card in Front */}
          <g transform="translate(55, 82) rotate(-6)">
            <rect x="0" y="0" width="122" height="68" rx="10" fill="#18181b" stroke="#3f3f46" strokeWidth="1.8" />
            <circle cx="10" cy="11" r="2.5" fill="#ef4444" />
            <circle cx="18" cy="11" r="2.5" fill="#facc15" />
            <circle cx="26" cy="11" r="2.5" fill="#22c55e" />
            <rect x="10" y="22" width="48" height="4.5" rx="2" fill="#f43f5e" />
            <rect x="18" y="32" width="70" height="4.5" rx="2" fill="#38bdf8" />
            <rect x="18" y="42" width="54" height="4.5" rx="2" fill="#facc15" />
            <rect x="10" y="52" width="38" height="4.5" rx="2" fill="#f43f5e" />
          </g>

          {/* Floating Globe Badge (Left) */}
          <g transform="translate(38, 142)">
            <circle cx="18" cy="18" r="18" fill="#18181b" stroke="#818cf8" strokeWidth="2" />
            <circle cx="18" cy="18" r="12" stroke="#818cf8" strokeWidth="1.2" strokeDasharray="3 2" />
            <path d="M6 18h24M18 6v24" stroke="#818cf8" strokeWidth="1.2" />
          </g>

          {/* 98+ Speed Pill Badge (Right) */}
          <g transform="translate(195, 148)">
            <rect x="0" y="0" width="78" height="22" rx="11" fill="#facc15" stroke="#191a23" strokeWidth="1.6" />
            <text x="39" y="15" fontSize="9" fontWeight="900" textAnchor="middle" fill="#191a23" fontFamily="sans-serif">
              98+ SPEED
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: "whatsapp-crm",
      title: "WhatsApp CRM",
      subtitle:
        "Automate customer chats, capture leads 24/7, and manage your full sales pipeline directly in WhatsApp.",
      illustration: (
        <svg
          className="w-full max-w-[310px] h-[210px] sm:h-[230px] mx-auto select-none"
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Angled Polygon Wedges */}
          <polygon points="35,175 245,105 285,180 75,215" fill="#064e3b" fillOpacity="0.9" />
          <polygon points="85,115 270,75 295,145 110,185" fill="#047857" fillOpacity="0.8" />

          {/* Floating Mobile Device (Left) */}
          <g transform="translate(56, 42) rotate(-5)">
            <rect x="0" y="0" width="76" height="136" rx="14" fill="#ffffff" stroke="#191a23" strokeWidth="2.2" />
            <rect x="6" y="6" width="64" height="15" rx="4" fill="#10b981" />
            <rect x="8" y="28" width="48" height="17" rx="6" fill="#f1f5f9" />
            <rect x="18" y="52" width="50" height="20" rx="6" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
            <path d="M58 64l2 2 4-4" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M61 64l2 2 4-4" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="8" y="78" width="44" height="16" rx="6" fill="#f1f5f9" />
            <rect x="12" y="100" width="52" height="15" rx="5" fill="#f97316" />
          </g>

          {/* Floating CRM Pipeline Tablet Screen (Center Right) */}
          <g transform="translate(136, 70) rotate(4)">
            <rect x="0" y="0" width="128" height="96" rx="12" fill="#ffffff" stroke="#191a23" strokeWidth="2.2" />
            <rect x="8" y="8" width="112" height="10" rx="3" fill="#f1f5f9" />
            {/* Tile grid matching reference screenshot */}
            <rect x="8" y="24" width="24" height="24" rx="6" fill="#fef08a" />
            <rect x="37" y="24" width="24" height="24" rx="6" fill="#fed7aa" />
            <rect x="66" y="24" width="24" height="24" rx="6" fill="#bbf7d0" />
            <rect x="95" y="24" width="24" height="24" rx="6" fill="#e0e7ff" />

            <rect x="8" y="55" width="24" height="24" rx="6" fill="#bbf7d0" />
            <rect x="37" y="55" width="24" height="24" rx="6" fill="#fef08a" />
            <rect x="66" y="55" width="24" height="24" rx="6" fill="#fca5a5" />
            <rect x="95" y="55" width="24" height="24" rx="6" fill="#fed7aa" />
          </g>

          {/* WhatsApp Floating Green Badge */}
          <g transform="translate(42, 42)">
            <circle cx="14" cy="14" r="14" fill="#22c55e" stroke="#ffffff" strokeWidth="2" />
            <path
              d="M19 12.5a5.5 5.5 0 0 1-.6 2.5 5.6 5.6 0 0 1-5 3.1 5.5 5.5 0 0 1-2.5-.6L7 19l1.4-3.7a5.5 5.5 0 0 1-.6-2.5 5.6 5.6 0 0 1 3.1-5 5.5 5.5 0 0 1 2.5-.6h.3a5.6 5.6 0 0 1 5.3 5.3z"
              stroke="#ffffff"
              strokeWidth="1.2"
              fill="none"
            />
          </g>

          {/* Bottom Row Multi-Integration Node Icons */}
          <g transform="translate(162, 180)">
            <rect x="0" y="0" width="10" height="10" fill="#facc15" rx="2" />
            <rect x="14" y="0" width="10" height="10" fill="#f97316" rx="2" />
            <rect x="28" y="0" width="10" height="10" fill="#22c55e" rx="2" />
            <rect x="42" y="0" width="10" height="10" fill="#38bdf8" rx="2" />
          </g>
        </svg>
      ),
    },
    {
      id: "stock-management",
      title: "Stock Management",
      subtitle:
        "Real-time inventory tracking, multi-warehouse sync, and automated low-stock alerts for zero stockouts.",
      illustration: (
        <svg
          className="w-full max-w-[310px] h-[210px] sm:h-[230px] mx-auto select-none"
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Angled Polygon Wedges */}
          <polygon points="40,165 245,95 285,175 80,215" fill="#1e293b" fillOpacity="0.9" />
          <circle cx="160" cy="115" r="70" fill="#0f172a" fillOpacity="0.8" />

          {/* Central Mobile Screen */}
          <g transform="translate(112, 32)">
            <rect x="0" y="0" width="96" height="152" rx="18" fill="#ffffff" stroke="#191a23" strokeWidth="2.2" />
            <rect x="10" y="8" width="76" height="8" rx="3" fill="#e2e8f0" />

            {/* Central Puzzle / Box Circle Graphic */}
            <circle cx="48" cy="58" r="32" fill="#ccfbf1" stroke="#2dd4bf" strokeWidth="1.6" />
            <rect x="36" y="46" width="24" height="24" rx="5" fill="#0f766e" />
            <rect x="42" y="52" width="12" height="12" rx="3" fill="#facc15" />

            {/* Barcode scanner laser beam */}
            <g transform="translate(18, 102)">
              <line x1="0" y1="0" x2="0" y2="12" stroke="#191a23" strokeWidth="2" />
              <line x1="4" y1="0" x2="4" y2="12" stroke="#191a23" strokeWidth="1" />
              <line x1="8" y1="0" x2="8" y2="12" stroke="#191a23" strokeWidth="2.5" />
              <line x1="14" y1="0" x2="14" y2="12" stroke="#191a23" strokeWidth="1" />
              <line x1="19" y1="0" x2="19" y2="12" stroke="#191a23" strokeWidth="2" />
              <line x1="25" y1="0" x2="25" y2="12" stroke="#191a23" strokeWidth="1.5" />
              <line x1="31" y1="0" x2="31" y2="12" stroke="#191a23" strokeWidth="2.2" />
              <line x1="37" y1="0" x2="37" y2="12" stroke="#191a23" strokeWidth="1" />
              <line x1="44" y1="0" x2="44" y2="12" stroke="#191a23" strokeWidth="2" />
              <line x1="50" y1="0" x2="50" y2="12" stroke="#191a23" strokeWidth="1.5" />
              <line x1="56" y1="0" x2="56" y2="12" stroke="#191a23" strokeWidth="2.5" />
              <line x1="-8" y1="6" x2="68" y2="6" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
            </g>

            {/* 98% SYNC Pill */}
            <rect x="14" y="124" width="68" height="16" rx="8" fill="#10b981" />
            <text x="48" y="135" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#ffffff" fontFamily="sans-serif">
              98% SYNCED
            </text>
          </g>

          {/* Flanking Integration Badges */}
          {/* Left Badge: Barcode SKU */}
          <g transform="translate(56, 78)">
            <rect x="0" y="0" width="36" height="36" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.8" />
            <rect x="8" y="10" width="20" height="16" rx="3" fill="#fef08a" />
          </g>

          {/* Top-Right Badge: Alert Flame */}
          <g transform="translate(228, 54)">
            <rect x="0" y="0" width="36" height="36" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.8" />
            <circle cx="18" cy="18" r="8" fill="#f97316" />
          </g>

          {/* Bottom-Right Badge: Cloud DB */}
          <g transform="translate(214, 126)">
            <rect x="0" y="0" width="38" height="38" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.8" />
            <circle cx="19" cy="19" r="9" fill="#38bdf8" />
          </g>

          {/* Connecting Curved Dashed Lines */}
          <path d="M92 96 Q 102 96 112 100" stroke="#818cf8" strokeWidth="1.6" strokeDasharray="3 3" />
          <path d="M228 72 Q 218 72 208 80" stroke="#818cf8" strokeWidth="1.6" strokeDasharray="3 3" />
          <path d="M214 144 Q 205 144 195 136" stroke="#818cf8" strokeWidth="1.6" strokeDasharray="3 3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Ambient Subtle Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[700px] rounded-full bg-gradient-to-tr from-[#f97316]/5 via-[#facc15]/5 to-transparent blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3-Column Layout Matching User Screenshot (No Cards, Direct Text & Graphics) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-800"
            >
              {/* Top: Title & Concise 2-line Description */}
              <div className="space-y-2.5">
                <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-400 font-normal leading-relaxed max-w-sm">
                  {feature.subtitle}
                </p>
              </div>

              {/* Bottom: Custom Vector Graphic Floating Freely Below */}
              <div className="pt-8 sm:pt-12 flex items-center justify-center">
                {feature.illustration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
