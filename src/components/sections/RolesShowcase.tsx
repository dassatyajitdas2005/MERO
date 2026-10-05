"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AllInOneSolution() {
  const solutions = [
    {
      title: "Resume",
      description:
        "A resume designed around your experience, strengths, and goals.",
      linkText: "Build your resume",
      href: "/services",
      iconColor: "yellow",
      icon: (
        <svg
          className="h-7 w-7 text-[#facc15]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
          <circle cx="9.5" cy="8" r="1" fill="#facc15" stroke="none" />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      description:
        "Turn your LinkedIn profile into a stronger professional presence.",
      linkText: "Optimize LinkedIn",
      href: "/services",
      iconColor: "orange",
      icon: (
        <svg
          className="h-7 w-7 text-[#f97316]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
          <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
          <circle cx="7.5" cy="7.5" r="1.2" fill="#f97316" stroke="none" />
          <line x1="11.5" y1="16.5" x2="11.5" y2="10.5" />
          <path d="M11.5 13a2.5 2.5 0 0 1 5 0v3.5" />
        </svg>
      ),
    },
    {
      title: "Portfolio",
      description:
        "Showcase your work with a portfolio that feels uniquely yours.",
      linkText: "Build portfolio",
      href: "/services",
      iconColor: "yellow",
      icon: (
        <svg
          className="h-7 w-7 text-[#facc15]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="3" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M12 11v2" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Presentation",
      description:
        "Turn your ideas into clear, polished professional presentations.",
      linkText: "Create presentation",
      href: "/services",
      iconColor: "orange",
      icon: (
        <svg
          className="h-7 w-7 text-[#f97316]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="3" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <line x1="7" y1="8" x2="17" y2="8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 md:py-24 border-t border-neutral-800/40 bg-[#121214] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow and Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#f97316] uppercase"
          >
            <span className="inline-block w-4 h-[2px] bg-[#f97316] rounded-full" />
            <span>ALL-IN-ONE SOLUTION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white"
          >
            Everything you need to stand out.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg text-neutral-400 font-normal pt-1"
          >
            One professional identity, built across every touchpoint.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl border border-neutral-800/80 bg-[#161619]/90 p-7 sm:p-8 hover:border-neutral-700 hover:bg-[#18191d] transition-all duration-300 shadow-xl"
            >
              <div className="space-y-6">
                {/* Icon Squircle Box */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    item.iconColor === "yellow"
                      ? "border-amber-400/30 bg-amber-400/10 group-hover:border-amber-400/60 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]"
                      : "border-orange-500/30 bg-orange-500/10 group-hover:border-orange-500/60 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Title and Description */}
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f97316] hover:text-[#ea580c] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
