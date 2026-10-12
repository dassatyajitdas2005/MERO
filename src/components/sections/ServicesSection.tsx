"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  Star,
  Users,
  ShieldCheck,
  FileText,
  MessageSquare,
  Bot,
  Send,
  Zap,
  BarChart3,
  Headphones,
  Clock,
} from "lucide-react";

interface ServiceWhatsIncluded {
  title: string;
  desc: string;
  icon: "message" | "badge" | "file" | "send" | "bot" | "zap" | "chart" | "support";
}

interface ServicePlan {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
}

interface ServiceItem {
  id: string;
  badgeLines: [string, string];
  variant: "light" | "dark";
  badgeBg: "yellow" | "white";
  price: string;
  illustration: React.ReactNode;
  shortDesc: string;
  category: string;
  title: string;
  gradient: string;
  accentColor: string;
  bannerIcon: React.ReactNode;
  rating: string;
  served: string;
  verifiedBadge: string;
  whatsIncluded: ServiceWhatsIncluded[];
  plans: ServicePlan[];
  modalDetails: {
    tagline: string;
    description: string;
    deliverables: string[];
    turnaround: string;
  };
}

function renderItemIcon(icon: ServiceWhatsIncluded["icon"]) {
  switch (icon) {
    case "message":
      return <MessageSquare className="w-4 h-4" />;
    case "badge":
      return <ShieldCheck className="w-4 h-4" />;
    case "file":
      return <FileText className="w-4 h-4" />;
    case "send":
      return <Send className="w-4 h-4" />;
    case "bot":
      return <Bot className="w-4 h-4" />;
    case "zap":
      return <Zap className="w-4 h-4" />;
    case "chart":
      return <BarChart3 className="w-4 h-4" />;
    case "support":
      return <Headphones className="w-4 h-4" />;
    default:
      return <CheckCircle2 className="w-4 h-4" />;
  }
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);

  const services: ServiceItem[] = [
    {
      id: "linkedin-optimization",
      badgeLines: ["LinkedIn", "optimization"],
      variant: "light",
      badgeBg: "yellow",
      price: "from ₹89",
      category: "PERSONAL BRANDING",
      title: "LinkedIn Optimization Plan",
      gradient: "bg-gradient-to-br from-[#0284c7] via-[#0ea5e9] to-[#0369a1]",
      accentColor: "#0ea5e9",
      rating: "4.9 (140 Reviews)",
      served: "200+ Served",
      verifiedBadge: "Pro Verified",
      bannerIcon: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-white/50 bg-white/15 backdrop-blur-md flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
          <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">in</span>
        </div>
      ),
      whatsIncluded: [
        { title: "Headline Engineering", desc: "Algorithmic recruiter keyword optimization", icon: "zap" },
        { title: "Storytelling 'About'", desc: "High-converting 1st-person narrative", icon: "file" },
        { title: "Experience Metrics", desc: "Quantified achievement metrics & XYZ formula", icon: "chart" },
        { title: "Verified Visuals", desc: "Executive banner & portrait guidelines", icon: "badge" },
        { title: "Inbound Playbook", desc: "Networking & algorithmic visibility strategy", icon: "send" },
        { title: "Skills & Endorsements", desc: "Top skills prioritization for search algorithms", icon: "bot" },
        { title: "Featured Section Setup", desc: "Showcase case studies & key links", icon: "message" },
        { title: "1-on-1 Profile Audit", desc: "Strategic feedback & checklist review", icon: "support" },
      ],
      plans: [
        { name: "Standard", price: "₹89", period: "/ one-time", popular: true },
        { name: "Executive Revamp", price: "₹199", period: "/ full overhaul" },
      ],
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
      price: "from ₹99",
      category: "EXECUTIVE RESUME",
      title: "Resume Building with ATS Plan",
      gradient: "bg-gradient-to-br from-[#ea580c] via-[#f97316] to-[#c2410c]",
      accentColor: "#f97316",
      rating: "4.9 (190 Reviews)",
      served: "350+ Served",
      verifiedBadge: "Pro Verified",
      bannerIcon: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-white/50 bg-white/15 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] gap-1">
          <span className="text-2xl sm:text-3xl font-black text-white">99%</span>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#fef08a] uppercase">ATS PASS</span>
        </div>
      ),
      whatsIncluded: [
        { title: "ATS Algorithmic Test", desc: "100% compliant single/two-page clean layout", icon: "bot" },
        { title: "Semantic Role Mapping", desc: "Target job posting keywords & semantic density", icon: "file" },
        { title: "Action-Bullet Formulas", desc: "Accomplished [X] by [Y] measuring [Z] impact", icon: "chart" },
        { title: "Dual Format Delivery", desc: "ATS-friendly Plaintext + High-Res Designer PDF", icon: "badge" },
        { title: "Cover Letter Included", desc: "Modern, tailored executive cover letter template", icon: "message" },
        { title: "HR Human Eye Check", desc: "Manual recruiter 6-second scan optimization", icon: "support" },
        { title: "Unlimited Revisions", desc: "Fine-tune bullets until 100% satisfied", icon: "zap" },
        { title: "Expedited Turnaround", desc: "Delivered in 48-72 hours with priority review", icon: "send" },
      ],
      plans: [
        { name: "Standard ATS", price: "₹99", period: "/ one-time", popular: true },
        { name: "Executive Suite", price: "₹249", period: "/ with cover letter" },
      ],
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
      price: "from ₹999",
      category: "WEB ARCHITECTURE",
      title: "High-Performance Website Plan",
      gradient: "bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#6d28d9]",
      accentColor: "#8b5cf6",
      rating: "4.9 (95 Reviews)",
      served: "110+ Served",
      verifiedBadge: "Pro Verified",
      bannerIcon: (
        <div className="w-24 h-20 sm:w-28 sm:h-24 rounded-2xl border-2 border-white/50 bg-white/15 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] gap-1">
          <div className="flex gap-1 self-start ml-2 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </div>
          <span className="text-xl sm:text-2xl font-mono font-black text-white">&lt;/&gt;</span>
        </div>
      ),
      whatsIncluded: [
        { title: "Custom UI/UX Design", desc: "Bespoke modern styling tailored to your brand", icon: "badge" },
        { title: "95+ Lighthouse Speed", desc: "Ultra-fast Next.js architecture with instant load", icon: "zap" },
        { title: "Mobile Responsive", desc: "Seamless experience on phones, tablets & desktops", icon: "bot" },
        { title: "SEO Meta & OpenGraph", desc: "Search index ready with rich social previews", icon: "chart" },
        { title: "Lead Capture Forms", desc: "Direct WhatsApp & email contact form routing", icon: "send" },
        { title: "Domain & SSL Setup", desc: "Custom domain configuration with free HTTPS security", icon: "file" },
        { title: "Smooth Micro-Animations", desc: "Modern Framer Motion transitions and hover states", icon: "message" },
        { title: "Free Deployment", desc: "Full source code handover & zero-downtime CI/CD", icon: "support" },
      ],
      plans: [
        { name: "Landing Website", price: "₹999", period: "/ one-time", popular: true },
        { name: "Business Multi-Page", price: "₹1,999", period: "/ full site" },
      ],
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
      price: "from ₹199",
      category: "CREATIVE SHOWCASE",
      title: "Interactive Portfolio Plan",
      gradient: "bg-gradient-to-br from-[#d97706] via-[#f59e0b] to-[#b45309]",
      accentColor: "#f59e0b",
      rating: "4.8 (75 Reviews)",
      served: "90+ Served",
      verifiedBadge: "Pro Verified",
      bannerIcon: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-white/50 bg-white/15 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
          <span className="text-3xl sm:text-4xl">🚀</span>
        </div>
      ),
      whatsIncluded: [
        { title: "Interactive Proof-of-Work", desc: "Project showcase cards with live preview modals", icon: "zap" },
        { title: "Custom Domain Link", desc: "Connected to yourname.com or custom branded URL", icon: "file" },
        { title: "1-Click Resume Access", desc: "Embedded CV viewer and direct download button", icon: "badge" },
        { title: "Omnichannel Socials", desc: "Integrated GitHub, LinkedIn, Twitter & booking links", icon: "send" },
        { title: "Dark & Light Mode", desc: "Theme toggle with persistent visitor preference", icon: "bot" },
        { title: "SEO Google Ranking", desc: "Personal keyword ranking for your name in Google", icon: "chart" },
        { title: "Case Study Deep Dives", desc: "Rich project storytelling with quantified outcomes", icon: "message" },
        { title: "Hosting & Maintenance", desc: "Fast cloud hosting with lifetime free upkeep", icon: "support" },
      ],
      plans: [
        { name: "Starter Portfolio", price: "₹199", period: "/ one-time", popular: true },
        { name: "Elite Flagship", price: "₹399", period: "/ custom domain" },
      ],
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
    {
      id: "whatsapp-crm",
      badgeLines: ["WhatsApp", "CRM"],
      variant: "light",
      badgeBg: "yellow",
      price: "from ₹2,499",
      category: "DIGITAL MARKETING",
      title: "WhatsApp Marketing Plan",
      gradient: "bg-gradient-to-br from-[#059669] via-[#10b981] to-[#047857]",
      accentColor: "#10b981",
      rating: "4.8 (80 Reviews)",
      served: "80+ Served",
      verifiedBadge: "Pro Verified",
      bannerIcon: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-white/50 bg-white/15 backdrop-blur-md flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] relative">
          <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            <path d="M9 10h.01M15 10h.01M9.5 15a4.5 4.5 0 0 0 5 0" />
          </svg>
        </div>
      ),
      whatsIncluded: [
        { title: "Business API Setup", desc: "Official WhatsApp Business API configuration", icon: "message" },
        { title: "Verified Profile", desc: "Business profile and catalog configuration", icon: "badge" },
        { title: "Message Templates", desc: "Template creation, variables & Meta approval", icon: "file" },
        { title: "Campaign Management", desc: "Campaign setup, audience segmentation & execution", icon: "send" },
        { title: "Automation", desc: "Welcome, FAQ bots & out of office workflows", icon: "bot" },
        { title: "Broadcast Campaigns", desc: "Promotional and notification broadcasts to leads", icon: "zap" },
        { title: "Performance Reports", desc: "Delivery, read rates and conversion analytics", icon: "chart" },
        { title: "Technical Support", desc: "Ongoing API, webhook and team inbox assistance", icon: "support" },
      ],
      plans: [
        { name: "Standard", price: "₹2,099", period: "/ month", popular: true },
        { name: "Lifetime Setup", price: "₹2,499", period: "/ one-time" },
      ],
      shortDesc: "Automated WhatsApp chatbots, unified team inbox, broadcast campaigns, and instant lead capture.",
      modalDetails: {
        tagline: "Turn WhatsApp into your highest-converting sales & customer channel.",
        description:
          "We design and deploy automated WhatsApp CRM systems that capture inbound leads, automate answers 24/7, assign chats to agents, and sync directly with your database.",
        deliverables: [
          "Official WhatsApp Business API setup & verified green tick guidance",
          "Unified multi-agent team inbox & conversation routing",
          "Automated 24/7 lead capture chatbot & custom FAQs funnel",
          "Broadcast campaigns & automated appointment reminders",
          "Seamless integration with Google Sheets, webhook, or custom database",
        ],
        turnaround: "3 - 6 Days",
      },
      illustration: (
        <svg
          className="w-44 h-36 sm:w-52 sm:h-40 md:w-56 md:h-44 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 240 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital Rings */}
          <ellipse cx="130" cy="95" rx="85" ry="34" stroke="#191a23" strokeWidth="1.6" strokeDasharray="4 3" />
          <ellipse cx="130" cy="95" rx="100" ry="46" stroke="#191a23" strokeWidth="1.4" />

          {/* Accent Dots */}
          <circle cx="50" cy="80" r="5" fill="#facc15" stroke="#191a23" strokeWidth="1.8" />
          <circle cx="215" cy="115" r="4.5" fill="#f97316" stroke="#191a23" strokeWidth="1.8" />
          <circle cx="165" cy="45" r="3" fill="#191a23" />

          {/* Smartphone device frame */}
          <rect x="62" y="24" width="86" height="132" rx="16" fill="#ffffff" stroke="#191a23" strokeWidth="2" />
          <rect x="91" y="29" width="28" height="4" rx="2" fill="#191a23" />

          {/* WhatsApp Top Header Bar */}
          <rect x="64" y="38" width="82" height="18" fill="#facc15" stroke="#191a23" strokeWidth="1.2" />
          <circle cx="75" cy="47" r="4" fill="#ffffff" stroke="#191a23" strokeWidth="1.2" />
          <rect x="83" y="45" width="30" height="4" rx="2" fill="#191a23" />

          {/* Inbound Customer Bubble */}
          <rect x="70" y="64" width="50" height="20" rx="8" fill="#f3f4f6" stroke="#191a23" strokeWidth="1.4" />
          <rect x="76" y="70" width="38" height="3" rx="1.5" fill="#191a23" />
          <rect x="76" y="75" width="24" height="2.5" rx="1.2" fill="#9ca3af" />

          {/* Automated CRM Reply Bubble (Orange) */}
          <rect x="84" y="90" width="58" height="24" rx="8" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
          <rect x="90" y="96" width="46" height="3" rx="1.5" fill="#ea580c" />
          <rect x="90" y="102" width="30" height="2.5" rx="1.2" fill="#f97316" />
          <path d="M130 106l2 2 4-4" stroke="#f97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M133 106l2 2 4-4" stroke="#f97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Floating CRM Bot / Hub Badge */}
          <g transform="translate(126, 48)">
            <rect x="0" y="0" width="62" height="42" rx="12" fill="#191a23" stroke="#ffffff" strokeWidth="2" />
            <circle cx="18" cy="21" r="8" fill="#facc15" stroke="#191a23" strokeWidth="1.5" />
            <circle cx="16" cy="20" r="1.5" fill="#191a23" />
            <circle cx="20" cy="20" r="1.5" fill="#191a23" />
            <rect x="32" y="15" width="22" height="4" rx="2" fill="#ffffff" />
            <rect x="32" y="23" width="16" height="3" rx="1.5" fill="#facc15" />
            <circle cx="52" cy="10" r="3.5" fill="#22c55e" stroke="#191a23" strokeWidth="1" />
          </g>

          {/* Chat check badge */}
          <g transform="translate(142, 106)">
            <circle cx="18" cy="18" r="16" fill="#f97316" stroke="#191a23" strokeWidth="2" />
            <path d="M13 18l3 3 7-7" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Sparkles */}
          <path d="M42 45 Q42 53 34 53 Q42 53 42 61 Q42 53 50 53 Q42 53 42 45Z" fill="#facc15" stroke="#191a23" strokeWidth="1.4" />
          <path d="M198 42 Q198 49 191 49 Q198 49 198 56 Q198 49 205 49 Q198 49 198 42Z" fill="#f97316" stroke="#191a23" strokeWidth="1.4" />
        </svg>
      ),
    },
    {
      id: "stock-management-software",
      badgeLines: ["Stock management", "software"],
      variant: "dark",
      badgeBg: "white",
      price: "from ₹3,499",
      category: "BUSINESS OPERATIONS",
      title: "Stock Management Plan",
      gradient: "bg-gradient-to-br from-[#334155] via-[#475569] to-[#1e293b]",
      accentColor: "#94a3b8",
      rating: "4.9 (60 Reviews)",
      served: "65+ Served",
      verifiedBadge: "Pro Verified",
      bannerIcon: (
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-white/50 bg-white/15 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] gap-1">
          <span className="text-3xl sm:text-4xl">📦</span>
          <span className="text-[10px] font-bold tracking-widest text-[#facc15] uppercase">98% SYNC</span>
        </div>
      ),
      whatsIncluded: [
        { title: "Real-Time Stock Ledger", desc: "Automated in/out tracking across all inventory items", icon: "chart" },
        { title: "Low-Stock Reorder Alerts", desc: "Instant automated WhatsApp & email reorder notices", icon: "zap" },
        { title: "Barcode & QR Scanning", desc: "Mobile camera scanning for instant product lookups", icon: "bot" },
        { title: "Multi-Warehouse Sync", desc: "Inter-store transfers and location inventory logs", icon: "send" },
        { title: "Supplier & PO Tracking", desc: "Vendor orders, invoice management & billing export", icon: "file" },
        { title: "Executive Margin Reports", desc: "Profitability, slow-moving items & sales velocity", icon: "badge" },
        { title: "Role-Based Staff Access", desc: "Admin, manager, and cashier permission tiers", icon: "message" },
        { title: "Database & Excel Sync", desc: "1-click CSV import/export and automated backup", icon: "support" },
      ],
      plans: [
        { name: "Standard", price: "₹3,499", period: "/ setup", popular: true },
        { name: "Multi-Warehouse Pro", price: "₹6,999", period: "/ enterprise system" },
      ],
      shortDesc: "Real-time inventory tracking, multi-warehouse control, low-stock alerts, and custom analytics dashboards.",
      modalDetails: {
        tagline: "Intelligent inventory & warehouse control engineered for zero stockouts.",
        description:
          "Custom-built, high-reliability software designed to track stock movements, automate vendor purchase orders, generate barcode labels, and deliver real-time financial reporting.",
        deliverables: [
          "Real-time stock ledger & automated low-stock reorder thresholds",
          "Barcode & SKU tracking with quick mobile scanning",
          "Multi-location & warehouse inventory transfer tracking",
          "Supplier management, purchase order logs & billing export",
          "Executive analytics dashboard with profit margin & velocity reports",
        ],
        turnaround: "7 - 14 Days",
      },
      illustration: (
        <svg
          className="w-44 h-36 sm:w-52 sm:h-40 md:w-56 md:h-44 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 240 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital Ellipse */}
          <ellipse cx="120" cy="100" rx="85" ry="32" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" />

          {/* Warehouse Pallet / Base Rack */}
          <rect x="42" y="132" width="112" height="10" rx="3" fill="#334155" stroke="#ffffff" strokeWidth="1.8" />
          <rect x="52" y="142" width="14" height="6" fill="#334155" stroke="#ffffff" strokeWidth="1.5" />
          <rect x="91" y="142" width="14" height="6" fill="#334155" stroke="#ffffff" strokeWidth="1.5" />
          <rect x="130" y="142" width="14" height="6" fill="#334155" stroke="#ffffff" strokeWidth="1.5" />

          {/* Main Shipping Box (White) */}
          <rect x="48" y="66" width="68" height="66" rx="8" fill="#ffffff" stroke="#ffffff" strokeWidth="2" />
          {/* Box Tape Band */}
          <rect x="48" y="88" width="68" height="14" fill="#fef08a" stroke="#191a23" strokeWidth="1.4" />
          {/* Barcode on front */}
          <g transform="translate(56, 108)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="#191a23" strokeWidth="2" />
            <line x1="4" y1="0" x2="4" y2="14" stroke="#191a23" strokeWidth="1" />
            <line x1="7" y1="0" x2="7" y2="14" stroke="#191a23" strokeWidth="2.5" />
            <line x1="12" y1="0" x2="12" y2="14" stroke="#191a23" strokeWidth="1" />
            <line x1="16" y1="0" x2="16" y2="14" stroke="#191a23" strokeWidth="2" />
            <line x1="21" y1="0" x2="21" y2="14" stroke="#191a23" strokeWidth="1.5" />
          </g>
          {/* Box QR / label tag */}
          <rect x="88" y="108" width="20" height="14" rx="3" fill="#f3f4f6" stroke="#191a23" strokeWidth="1" />
          <rect x="92" y="112" width="6" height="6" fill="#ea580c" />

          {/* Secondary Stacked Box (Orange) */}
          <rect x="84" y="32" width="56" height="46" rx="7" fill="#f97316" stroke="#ffffff" strokeWidth="2" />
          <rect x="84" y="48" width="56" height="10" fill="#fb923c" stroke="#191a23" strokeWidth="1.2" />
          <polygon points="98,38 104,38 101,43" fill="#ffffff" />
          <text x="112" y="44" fontSize="7" fontWeight="bold" fill="#ffffff" fontFamily="sans-serif">UP</text>

          {/* Circular Stock Analytics Gauge */}
          <g transform="translate(138, 54)">
            <circle cx="38" cy="38" r="32" fill="#191a23" stroke="#ffffff" strokeWidth="2" />
            <circle cx="38" cy="38" r="24" stroke="#facc15" strokeWidth="3" strokeDasharray="115 35" />
            <text x="38" y="34" fontSize="13" fontWeight="900" textAnchor="middle" fill="#ffffff" fontFamily="sans-serif">98%</text>
            <text x="38" y="46" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#facc15" fontFamily="sans-serif" letterSpacing="0.6">SYNCED</text>
            {/* Floating green status dot */}
            <circle cx="62" cy="18" r="8" fill="#22c55e" stroke="#ffffff" strokeWidth="1.8" />
            <path d="M59 18l2 2 4-4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Barcode scanner laser beam */}
          <line x1="32" y1="84" x2="124" y2="84" stroke="#f87171" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="32" cy="84" r="3" fill="#ef4444" />

          {/* Floating Sparkles */}
          <path d="M198 34 Q198 42 190 42 Q198 42 198 50 Q198 42 206 42 Q198 42 198 34Z" fill="#facc15" stroke="#ffffff" strokeWidth="1" />
          <path d="M30 46 Q30 52 24 52 Q30 52 30 58 Q30 52 36 52 Q30 52 30 46Z" fill="#f97316" stroke="#ffffff" strokeWidth="1" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-white dark:bg-[#121214] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
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
            className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base max-w-2xl leading-relaxed font-normal"
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
                {/* Top Section: Badges & Description on Left, Illustration on Right */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-4 flex-1">
                  
                  {/* Left: 2-Line Highlight Title Badges & Short Description */}
                  <div className="space-y-1.5 flex-1 max-w-sm">
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

                  {/* Right: Custom Line-Art Illustration */}
                  <div className="flex items-center justify-center self-center sm:self-auto shrink-0 pt-2 sm:pt-0">
                    {item.illustration}
                  </div>

                </div>

                {/* Bottom Section: Learn More on Left, Large Price on Far Right of Card */}
                <div className="pt-6 sm:pt-8 flex items-center justify-between gap-4 mt-auto">
                  <button
                    type="button"
                    onClick={() => {
                      const popIdx = item.plans.findIndex((p) => p.popular);
                      setSelectedPlanIndex(popIdx !== -1 ? popIdx : 0);
                      setSelectedService(item);
                    }}
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

                  {/* Far-Right Large Price */}
                  <div className="text-right">
                    <span
                      className={`text-xl sm:text-2xl font-black tracking-tight ${
                        isLight ? "text-neutral-900" : "text-[#facc15]"
                      }`}
                    >
                      {item.price}
                    </span>
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

      {/* Interactive Detail Modal on "Learn More" (matching sample style) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#141416] border border-neutral-800 text-white shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden"
            >
              {/* Close Button Top Right */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 rounded-full p-2 bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6">
                
                {/* 1. Header Hero Banner Card */}
                <div className="relative rounded-3xl overflow-hidden p-6 sm:p-8 min-h-[190px] sm:min-h-[220px] flex flex-col justify-end text-white shadow-xl">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${selectedService.gradient}`} />

                  {/* Topographical Wave Contour Lines SVG */}
                  <svg
                    className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none mix-blend-overlay"
                    viewBox="0 0 600 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M-50 40 C 150 120, 350 -20, 650 60" stroke="#ffffff" strokeWidth="1.8" />
                    <path d="M-50 70 C 150 150, 350 10, 650 90" stroke="#ffffff" strokeWidth="1.8" />
                    <path d="M-50 100 C 150 180, 350 40, 650 120" stroke="#ffffff" strokeWidth="1.8" />
                    <path d="M-50 130 C 150 210, 350 70, 650 150" stroke="#ffffff" strokeWidth="1.8" />
                    <path d="M-50 160 C 150 240, 350 100, 650 180" stroke="#ffffff" strokeWidth="1.8" />
                    <path d="M-50 190 C 150 270, 350 130, 650 210" stroke="#ffffff" strokeWidth="1.8" />
                  </svg>

                  {/* Ambient Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-white/20 blur-2xl pointer-events-none" />

                  {/* Center Glassmorphic Emblem */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
                    {selectedService.bannerIcon}
                  </div>

                  {/* Bottom Text in Banner */}
                  <div className="relative z-10 space-y-1.5 max-w-lg">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-black/40 backdrop-blur-md text-white/95 border border-white/15">
                      {selectedService.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* 2. Metric Row (Matching Screenshot 1) */}
                <div className="flex items-center justify-start gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-neutral-300 py-1 flex-wrap border-b border-neutral-800/80 pb-4">
                  <div className="flex items-center gap-1.5 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-white">{selectedService.rating}</span>
                  </div>
                  <span className="text-neutral-600">•</span>
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Users className="w-4 h-4 text-neutral-400" />
                    <span>{selectedService.served}</span>
                  </div>
                  <span className="text-neutral-600">•</span>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{selectedService.verifiedBadge}</span>
                  </div>
                </div>

                {/* 3. What's Included (Matching Screenshot 2) */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                    <FileText className="w-4 h-4 text-[#f97316]" />
                    <span>What&apos;s Included</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {selectedService.whatsIncluded.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-[#1b1c20]/90 p-3 sm:p-3.5 hover:border-neutral-700 transition-colors shadow-sm"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border"
                          style={{
                            backgroundColor: `${selectedService.accentColor}18`,
                            borderColor: `${selectedService.accentColor}35`,
                            color: selectedService.accentColor,
                          }}
                        >
                          {renderItemIcon(item.icon)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs sm:text-sm font-bold text-white truncate">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-neutral-400 truncate">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Select Duration / Plan (Matching Screenshot 2) */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                    <Clock className="w-4 h-4 text-[#facc15]" />
                    <span>Select Duration / Plan</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.plans.map((plan, idx) => {
                      const isSelected = selectedPlanIndex === idx;
                      return (
                        <button
                          key={plan.name}
                          type="button"
                          onClick={() => setSelectedPlanIndex(idx)}
                          className={`relative text-left rounded-2xl border-2 p-3.5 sm:p-4 transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "border-[#facc15] bg-[#facc15]/10 shadow-[0_0_20px_rgba(250,204,21,0.12)]"
                              : "border-neutral-800 bg-[#1b1c20]/70 hover:border-neutral-700"
                          }`}
                        >
                          {plan.popular && (
                            <span
                              className="absolute -top-2.5 right-3 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm"
                              style={{ backgroundColor: selectedService.accentColor }}
                            >
                              Popular
                            </span>
                          )}
                          <div className="text-xs sm:text-sm font-semibold text-neutral-300">
                            {plan.name}
                          </div>
                          <div className="text-lg sm:text-xl font-black text-white mt-1 flex items-baseline gap-1">
                            <span>{plan.price}</span>
                            <span className="text-xs font-normal text-neutral-400">
                              {plan.period}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Bottom Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/contact?service=${selectedService.id}&plan=${encodeURIComponent(selectedService.plans[selectedPlanIndex]?.name || "")}`}
                    onClick={() => setSelectedService(null)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white py-3.5 text-sm sm:text-base font-bold transition-all shadow-lg hover:shadow-orange-500/25"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="rounded-xl border border-neutral-700 bg-neutral-800/80 px-6 py-3.5 text-sm font-semibold text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
