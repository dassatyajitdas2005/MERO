"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, X, CheckCircle2, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  badgeLines: [string, string];
  variant: "light" | "dark";
  badgeBg: "yellow" | "white";
  illustration: React.ReactNode;
  shortDesc: string;
  modalDetails: {
    tagline: string;
    description: string;
    deliverables: string[];
    turnaround: string;
  };
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "linkedin-optimization",
      badgeLines: ["LinkedIn", "optimization"],
      variant: "light",
      badgeBg: "yellow",
      shortDesc: "Complete profile makeover to rank in recruiter searches and attract high-tier inbound leads.",
      modalDetails: {
        tagline: "Turn your LinkedIn into a 24/7 inbound opportunity magnet.",
        description:
          "We strategically rewrite your headline, about section, experience bullets, and featured media with high-intent industry keywords that algorithmic recruiter searches prioritize.",
        deliverables: [
          "Recruiter-search keyword optimized headline",
          "High-converting 1st-person Storytelling 'About' section",
          "Quantified experience highlights & achievement metrics",
          "Custom banner & profile visual guidance",
          "Engagement & networking playbook for 10x visibility",
        ],
        turnaround: "3 - 5 Days",
      },
      illustration: (
        <svg
          className="w-44 h-36 sm:w-52 sm:h-40 md:w-56 md:h-44 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 240 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital ellipse rings */}
          <ellipse cx="140" cy="95" rx="75" ry="32" stroke="#191a23" strokeWidth="1.8" strokeDasharray="4 3" />
          <ellipse cx="140" cy="95" rx="90" ry="42" stroke="#191a23" strokeWidth="1.5" />

          {/* Orbital satellite nodes */}
          <circle cx="65" cy="85" r="5" fill="#facc15" stroke="#191a23" strokeWidth="1.8" />
          <circle cx="215" cy="115" r="4" fill="#f97316" stroke="#191a23" strokeWidth="1.8" />
          <circle cx="170" cy="58" r="3" fill="#191a23" />

          {/* Profile badge card */}
          <rect x="70" y="32" width="85" height="110" rx="14" fill="#ffffff" stroke="#191a23" strokeWidth="2" />
          
          {/* Avatar graphic */}
          <circle cx="112.5" cy="62" r="16" fill="#fef08a" stroke="#191a23" strokeWidth="1.8" />
          <path d="M102 75c0-5.8 4.7-10.5 10.5-10.5s10.5 4.7 10.5 10.5" fill="#facc15" stroke="#191a23" strokeWidth="1.8" />
          <circle cx="112.5" cy="57" r="6" fill="#f97316" stroke="#191a23" strokeWidth="1.8" />

          {/* Verified badge */}
          <circle cx="125" cy="52" r="5.5" fill="#f97316" stroke="#191a23" strokeWidth="1.5" />
          <path d="M123 52l1.5 1.5 2.5-2.5" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Card text lines */}
          <rect x="84" y="86" width="57" height="5" rx="2.5" fill="#191a23" />
          <rect x="88" y="96" width="49" height="4" rx="2" fill="#9ca3af" />
          
          {/* Mini LinkedIn In-badge & status */}
          <rect x="84" y="110" width="28" height="15" rx="4" fill="#facc15" stroke="#191a23" strokeWidth="1.4" />
          <text x="98" y="121" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#191a23" fontFamily="sans-serif">in</text>
          <rect x="118" y="114" width="23" height="7" rx="3.5" fill="#f97316" />

          {/* Large tilted Magnifying Glass */}
          <g transform="translate(108, 48) rotate(-22)">
            <circle cx="34" cy="34" r="25" fill="#fef9c3" fillOpacity="0.85" stroke="#191a23" strokeWidth="2.4" />
            <circle cx="34" cy="34" r="19" stroke="#facc15" strokeWidth="2.4" strokeDasharray="3 3" />
            <line x1="51" y1="51" x2="76" y2="76" stroke="#191a23" strokeWidth="6" strokeLinecap="round" />
            <line x1="54" y1="54" x2="74" y2="74" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M22 24 A15 15 0 0 1 34 18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Sparkles */}
          <path d="M38 52 Q38 62 28 62 Q38 62 38 72 Q38 62 48 62 Q38 62 38 52Z" fill="#facc15" stroke="#191a23" strokeWidth="1.4" />
          <path d="M198 42 Q198 50 190 50 Q198 50 198 58 Q198 50 206 50 Q198 50 198 42Z" fill="#f97316" stroke="#191a23" strokeWidth="1.4" />
        </svg>
      ),
    },
    {
      id: "resume-building-ats",
      badgeLines: ["Resume building", "with ATS"],
      variant: "dark",
      badgeBg: "white",
      shortDesc: "Engineered resumes configured to bypass Applicant Tracking Systems and impress executive hiring managers.",
      modalDetails: {
        tagline: "99% ATS match rate with punchy, high-impact career narratives.",
        description:
          "Applicant Tracking Systems filter out over 75% of qualified resumes before a human ever sees them. We reverse-engineer job postings to inject exact semantic keywords, eliminate parsing bugs, and highlight tangible ROI.",
        deliverables: [
          "100% ATS-compliant single or two-page clean layout",
          "Target role keyword frequency & semantic mapping",
          "XYZ metric-driven bullet formulas (Accomplished [X] as measured by [Y], by doing [Z])",
          "Plaintext ATS export + High-resolution Designer PDF",
          "Tailored cover letter template included",
        ],
        turnaround: "2 - 4 Days",
      },
      illustration: (
        <svg
          className="w-44 h-36 sm:w-52 sm:h-40 md:w-56 md:h-44 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 240 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Resume Document Canvas */}
          <rect x="46" y="24" width="108" height="132" rx="8" fill="#ffffff" stroke="#ffffff" strokeWidth="2" />
          
          {/* Top Resume Header */}
          <rect x="58" y="36" width="52" height="7" rx="3.5" fill="#191a23" />
          <rect x="58" y="47" width="72" height="4" rx="2" fill="#9ca3af" />
          <line x1="58" y1="58" x2="142" y2="58" stroke="#e5e7eb" strokeWidth="1.5" />

          {/* Resume Body Lines */}
          <rect x="58" y="66" width="82" height="4" rx="2" fill="#d1d5db" />
          <rect x="58" y="74" width="68" height="4" rx="2" fill="#d1d5db" />
          <rect x="58" y="82" width="76" height="4" rx="2" fill="#d1d5db" />

          {/* ATS Keyword Match Highlight (Orange bar) */}
          <rect x="58" y="93" width="72" height="9" rx="3.5" fill="#ffedd5" stroke="#f97316" strokeWidth="1.2" />
          <rect x="62" y="96.5" width="34" height="2.5" rx="1.2" fill="#ea580c" />

          <rect x="58" y="109" width="56" height="4" rx="2" fill="#d1d5db" />
          <rect x="58" y="117" width="74" height="4" rx="2" fill="#d1d5db" />
          <rect x="58" y="125" width="42" height="4" rx="2" fill="#d1d5db" />

          {/* Laser Scanner Line (Horizontal orange beam across resume) */}
          <line x1="36" y1="90" x2="162" y2="90" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5 3" />
          <circle cx="36" cy="90" r="3.5" fill="#f97316" />
          <circle cx="162" cy="90" r="3.5" fill="#f97316" />

          {/* 99% ATS Score Target Circle */}
          <g transform="translate(132, 58)">
            <circle cx="42" cy="42" r="35" fill="#191a23" stroke="#ffffff" strokeWidth="2" />
            <circle cx="42" cy="42" r="27" stroke="#facc15" strokeWidth="3" strokeDasharray="135 30" />
            <text x="42" y="40" fontSize="15" fontWeight="900" textAnchor="middle" fill="#ffffff" fontFamily="sans-serif">99%</text>
            <text x="42" y="52" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#facc15" fontFamily="sans-serif" letterSpacing="0.8">ATS PASS</text>
            
            {/* Floating check badge */}
            <circle cx="67" cy="20" r="9.5" fill="#f97316" stroke="#ffffff" strokeWidth="2" />
            <path d="M63 20l3 3 5-5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Cursor arrow pointing */}
          <path d="M120 122l11 17-5 3-4-2-6 11-4-2 6-11-6-2 14-17z" fill="#ffffff" stroke="#191a23" strokeWidth="1.5" />

          {/* Sparkles */}
          <path d="M194 36 Q194 44 186 44 Q194 44 194 52 Q194 44 202 44 Q194 44 194 36Z" fill="#facc15" stroke="#ffffff" strokeWidth="1" />
        </svg>
      ),
    },
    {
      id: "website-making",
      badgeLines: ["Website", "making"],
      variant: "dark",
      badgeBg: "white",
      shortDesc: "High-performance, bespoke websites that showcase your authority, services, or SaaS products.",
      modalDetails: {
        tagline: "Custom-crafted, lightning-fast digital storefronts.",
        description:
          "From sleek personal brand pages to full corporate agency portals, we build modern websites using Next.js, React, and tailored styling that look extraordinary on every screen size.",
        deliverables: [
          "Bespoke UI/UX design matching your exact brand tone",
          "Ultra-fast loading speed (95+ Google Lighthouse scores)",
          "Fully responsive on mobile, tablet, and ultra-wide screens",
          "SEO meta tags, OpenGraph previews, and contact forms",
          "Clean code, seamless animations, and painless hosting",
        ],
        turnaround: "5 - 10 Days",
      },
      illustration: (
        <svg
          className="w-44 h-36 sm:w-52 sm:h-40 md:w-56 md:h-44 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 240 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Browser Window Frame */}
          <rect x="35" y="32" width="165" height="114" rx="14" fill="#ffffff" stroke="#ffffff" strokeWidth="2" />
          
          {/* Top Browser Bar */}
          <line x1="35" y1="56" x2="200" y2="56" stroke="#191a23" strokeWidth="1.5" />
          
          {/* Window traffic lights */}
          <circle cx="50" cy="44" r="3.5" fill="#f87171" stroke="#191a23" strokeWidth="1" />
          <circle cx="62" cy="44" r="3.5" fill="#facc15" stroke="#191a23" strokeWidth="1" />
          <circle cx="74" cy="44" r="3.5" fill="#4ade80" stroke="#191a23" strokeWidth="1" />

          {/* URL Bar */}
          <rect x="86" y="38" width="98" height="12" rx="6" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
          <circle cx="94" cy="44" r="2" fill="#9ca3af" />
          <rect x="101" y="42" width="46" height="4" rx="2" fill="#9ca3af" />

          {/* Website Canvas Elements */}
          <rect x="49" y="68" width="68" height="7" rx="3.5" fill="#191a23" />
          <rect x="49" y="79" width="48" height="4" rx="2" fill="#9ca3af" />

          {/* Code Tag badge </> */}
          <rect x="135" y="67" width="52" height="18" rx="6" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
          <text x="161" y="80" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#ea580c" fontFamily="monospace">&lt;/&gt;</text>

          {/* Interactive Button */}
          <rect x="49" y="95" width="60" height="20" rx="7" fill="#facc15" stroke="#191a23" strokeWidth="1.8" />
          <text x="79" y="108.5" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#191a23" fontFamily="sans-serif">Live Site</text>

          {/* Wireframe Cards inside website */}
          <rect x="122" y="94" width="34" height="36" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
          <rect x="162" y="94" width="28" height="36" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />

          {/* Black Pointer Cursor Arrow clicking the button */}
          <g transform="translate(98, 102)">
            <path d="M0 0l7 18 4-4 6 8 4-3-6-8 7-1L0 0z" fill="#191a23" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
            <circle cx="2" cy="2" r="8" stroke="#f97316" strokeWidth="1.8" strokeDasharray="3 3" />
          </g>

          {/* Orbit Nodes */}
          <ellipse cx="120" cy="154" rx="75" ry="14" stroke="#ffffff" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.4" />
          <circle cx="206" cy="88" r="4.5" fill="#f97316" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="26" cy="112" r="3.5" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: "portfolio-personal-web",
      badgeLines: ["Portfolio", "(personal web)"],
      variant: "light",
      badgeBg: "yellow",
      shortDesc: "Stand out from the pile with an interactive personal portfolio showcasing case studies, skills, and links.",
      modalDetails: {
        tagline: "Your own permanent home on the web that commands respect.",
        description:
          "Transform your traditional static PDF into an interactive, visually stunning personal portfolio. Show proof-of-work, project demos, client testimonials, and github repositories with effortless polish.",
        deliverables: [
          "Interactive projects & case studies showcase with modal previews",
          "Custom domain integration (yourname.com or mero.live/you)",
          "1-Click downloadable resume and contact integration",
          "Social proof, skill matrices, and dynamic achievements bar",
          "Search-engine indexed to build personal Google ranking",
        ],
        turnaround: "3 - 7 Days",
      },
      illustration: (
        <svg
          className="w-44 h-36 sm:w-52 sm:h-40 md:w-56 md:h-44 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 240 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital Rings */}
          <ellipse cx="125" cy="100" rx="90" ry="38" stroke="#191a23" strokeWidth="1.6" strokeDasharray="4 3" />
          <ellipse cx="125" cy="100" rx="70" ry="24" stroke="#191a23" strokeWidth="1.4" />

          {/* Orbital Accent Dots */}
          <circle cx="45" cy="115" r="5" fill="#f97316" stroke="#191a23" strokeWidth="1.8" />
          <circle cx="205" cy="85" r="4" fill="#facc15" stroke="#191a23" strokeWidth="1.8" />

          {/* Portfolio Frame Card */}
          <g transform="translate(58, 38) rotate(-6)">
            <rect x="0" y="0" width="85" height="102" rx="14" fill="#ffffff" stroke="#191a23" strokeWidth="2" />
            <circle cx="22" cy="24" r="10" fill="#fed7aa" stroke="#191a23" strokeWidth="1.5" />
            <circle cx="22" cy="21" r="4" fill="#ea580c" />
            <rect x="38" y="17" width="36" height="5" rx="2.5" fill="#191a23" />
            <rect x="38" y="26" width="26" height="3.5" rx="1.7" fill="#9ca3af" />

            {/* Portfolio URL Pill */}
            <rect x="12" y="44" width="61" height="12" rx="6" fill="#fef08a" stroke="#191a23" strokeWidth="1.2" />
            <text x="42.5" y="52.5" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#191a23" fontFamily="sans-serif">mero.live/me</text>

            {/* Project Mockup Box */}
            <rect x="12" y="63" width="61" height="26" rx="6" fill="#f9fafb" stroke="#191a23" strokeWidth="1.4" />
            <circle cx="24" cy="76" r="5" fill="#facc15" stroke="#191a23" strokeWidth="1.2" />
            <rect x="34" y="71" width="30" height="4" rx="2" fill="#191a23" />
            <rect x="34" y="78" width="20" height="3" rx="1.5" fill="#9ca3af" />
          </g>

          {/* Soaring Dynamic 3D Paper Plane / Rocket */}
          <g transform="translate(130, 42) rotate(14)">
            <path d="M-15 32 L-2 22 L-10 40 Z" fill="#facc15" opacity="0.9" />
            <path d="M-20 40 L-6 28 L-14 48 Z" fill="#f97316" opacity="0.9" />
            <polygon points="45,5 5,30 20,20" fill="#ffffff" stroke="#191a23" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="45,5 20,20 18,36" fill="#facc15" stroke="#191a23" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="45,5 18,36 10,24" fill="#fef08a" stroke="#191a23" strokeWidth="2" strokeLinejoin="round" />
          </g>

          {/* 4-pointed Sparkle Stars */}
          <path d="M195 45 Q195 53 187 53 Q195 53 195 61 Q195 53 203 53 Q195 53 195 45Z" fill="#facc15" stroke="#191a23" strokeWidth="1.4" />
          <path d="M38 48 Q38 55 31 55 Q38 55 38 62 Q38 55 45 55 Q38 55 38 48Z" fill="#f97316" stroke="#191a23" strokeWidth="1.4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-[#121214] text-white overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[620px] rounded-full bg-gradient-to-tr from-[#f97316]/8 via-[#facc15]/8 to-transparent blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Highlight Pill + Descriptive Text (matching screenshot) */}
        <div className="flex flex-col md:flex-row md:items-center gap-5 sm:gap-8 md:gap-10 mb-12 sm:mb-16">
          {/* Services Badge Pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <span className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 rounded-xl bg-[#facc15] text-[#191a23] font-black text-2xl sm:text-3xl md:text-4xl shadow-sm tracking-tight">
              Services
            </span>
          </motion.div>

          {/* Descriptive text alongside */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-300 text-sm sm:text-base max-w-2xl leading-relaxed font-normal"
          >
            At MERO, we offer a specialized range of career acceleration and personal branding services to help professionals stand out, pass the ATS, and succeed online. These services include:
          </motion.p>
        </div>

        {/* 2x2 Services Cards Grid (matching exact Positivus layout and alternating colors) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((item, idx) => {
            const isLight = item.variant === "light";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col justify-between rounded-[36px] sm:rounded-[42px] border-2 transition-all duration-300 ${
                  isLight
                    ? "bg-[#f3f3f3] text-[#191a23] border-neutral-900 shadow-[0px_5px_0px_#000000] hover:shadow-[0px_8px_0px_#000000]"
                    : "bg-[#191a23] text-white border-neutral-700/80 shadow-[0px_5px_0px_#000000] hover:shadow-[0px_8px_0px_#facc15]/30 hover:border-neutral-600"
                } p-8 sm:p-10 lg:p-12 min-h-[300px] sm:min-h-[320px]`}
              >
                {/* Content Row: Left Details & Right Illustration */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-4 h-full">
                  
                  {/* Left Column: Title Pills + Bottom Action */}
                  <div className="flex flex-col justify-between flex-1 h-full min-h-[200px]">
                    
                    {/* Top: 2-Line Highlight Title Badges */}
                    <div className="space-y-1.5">
                      <div className="flex flex-col items-start gap-1">
                        <span
                          className={`inline-block px-3 py-1 rounded-lg font-extrabold text-2xl sm:text-3xl tracking-tight ${
                            item.badgeBg === "yellow"
                              ? "bg-[#facc15] text-[#191a23]"
                              : "bg-white text-[#191a23]"
                          }`}
                        >
                          {item.badgeLines[0]}
                        </span>
                        <span
                          className={`inline-block px-3 py-1 rounded-lg font-extrabold text-2xl sm:text-3xl tracking-tight ${
                            item.badgeBg === "yellow"
                              ? "bg-[#facc15] text-[#191a23]"
                              : "bg-white text-[#191a23]"
                          }`}
                        >
                          {item.badgeLines[1]}
                        </span>
                      </div>
                      
                      {/* Short Description */}
                      <p
                        className={`text-xs sm:text-sm pt-3 line-clamp-2 max-w-xs ${
                          isLight ? "text-neutral-600" : "text-neutral-400"
                        }`}
                      >
                        {item.shortDesc}
                      </p>
                    </div>

                    {/* Bottom: Learn More Button with Arrow Circle */}
                    <div className="pt-6 sm:pt-8">
                      <button
                        type="button"
                        onClick={() => setSelectedService(item)}
                        className="inline-flex items-center gap-3.5 group/btn cursor-pointer focus:outline-none"
                        aria-label={`Learn more about ${item.badgeLines.join(" ")}`}
                      >
                        <div
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-45 shadow-sm ${
                            isLight
                              ? "bg-[#191a23] text-[#facc15] group-hover/btn:bg-[#f97316] group-hover/btn:text-white"
                              : "bg-white text-[#191a23] group-hover/btn:bg-[#facc15]"
                          }`}
                        >
                          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                        </div>
                        <span
                          className={`text-base sm:text-lg font-semibold transition-colors duration-200 group-hover/btn:underline ${
                            isLight
                              ? "text-[#191a23] group-hover/btn:text-[#f97316]"
                              : "text-white group-hover/btn:text-[#facc15]"
                          }`}
                        >
                          Learn more
                        </span>
                      </button>
                    </div>

                  </div>

                  {/* Right Column: Custom Line-Art Illustration */}
                  <div className="flex items-center justify-center self-center sm:self-auto shrink-0 pt-2 sm:pt-0">
                    {item.illustration}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Card: "Let's make things happen" (matching screenshot banner style) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 rounded-[36px] sm:rounded-[42px] border-2 border-neutral-900 bg-[#f3f3f3] text-[#191a23] shadow-[0px_5px_0px_#000000] p-8 sm:p-12 lg:p-14 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading + Copy + Action Button */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#191a23]">
                Let&apos;s make things happen
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed max-w-lg">
                Contact us today to learn more about how our career acceleration &amp; personal branding services can help you stand out, get hired, and build your digital presence.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#191a23] hover:bg-[#2c2d3a] text-white px-7 py-4 text-sm sm:text-base font-semibold shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <span>Get your free proposal</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Mascot & Orbital Star Illustration (from screenshot) */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <svg
                className="w-56 h-44 sm:w-64 sm:h-52 md:w-80 md:h-56"
                viewBox="0 0 300 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Orbital Wireframe Rings */}
                <ellipse cx="180" cy="115" rx="100" ry="32" stroke="#191a23" strokeWidth="1.8" />
                <ellipse cx="180" cy="122" rx="90" ry="28" stroke="#191a23" strokeWidth="1.6" />
                <ellipse cx="180" cy="129" rx="80" ry="24" stroke="#191a23" strokeWidth="1.4" />

                {/* Orbital Ring Accent Dots */}
                <circle cx="265" cy="122" r="4" fill="#facc15" stroke="#191a23" strokeWidth="1.5" />
                <circle cx="95" cy="115" r="3.5" fill="#f97316" stroke="#191a23" strokeWidth="1.5" />

                {/* Black Mascot Character Head */}
                <circle cx="180" cy="88" r="36" fill="#191a23" />
                {/* Expressive Eyes */}
                <ellipse cx="170" cy="86" rx="4.5" ry="8" fill="#ffffff" />
                <ellipse cx="190" cy="86" rx="4.5" ry="8" fill="#ffffff" />

                {/* Big 4-pointed Star (Brand Yellow) */}
                <path
                  d="M175 125 Q175 155 145 155 Q175 155 175 185 Q175 155 205 155 Q175 155 175 125Z"
                  fill="#facc15"
                  stroke="#191a23"
                  strokeWidth="1.8"
                />

                {/* Second Star (Silver/Orange Accent) */}
                <path
                  d="M230 110 Q230 132 210 132 Q230 132 230 154 Q230 132 250 132 Q230 132 230 110Z"
                  fill="#cbd5e1"
                  stroke="#191a23"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Interactive Detail Modal on "Learn More" */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-3xl border-2 border-neutral-700 bg-[#161619] p-6 sm:p-8 text-white shadow-2xl z-10 overflow-hidden"
            >
              {/* Top Bar with Badge & Close */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#facc15] text-[#191a23] font-bold text-sm sm:text-base">
                    {selectedService.badgeLines.join(" ")}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    • {selectedService.modalDetails.turnaround}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Tagline & Description */}
              <div className="mt-5 space-y-3">
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  {selectedService.modalDetails.tagline}
                </h4>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {selectedService.modalDetails.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="mt-6 space-y-2.5">
                <h5 className="text-xs uppercase tracking-wider font-bold text-[#f97316] flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  What You Get
                </h5>
                <ul className="space-y-2">
                  {selectedService.modalDetails.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="h-4 w-4 text-[#facc15] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-800">
                <Link
                  href="/contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white py-3 text-sm font-semibold transition-all shadow-md"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="rounded-xl border border-neutral-700 bg-neutral-800/80 px-5 py-3 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
