"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CustomerStories() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      company: "mero",
      subtext: "by MERO",
      bgAccent: "#22c55e",
      quote:
        "“Built to help professionals create a stronger identity through ATS-ready resumes, LinkedIn optimization, portfolio websites, and professional presentations.”",
      author: "SATYAJIT DAS",
      role: "Senior Product Manager, satyajit",
    },
    {
      company: "NeedMet",
      subtext: "Tech by NeedMet",
      bgAccent: "#f97316",
      quote:
        "“Built a platform that helps businesses improve their digital presence, discover opportunities, and drive growth through structured listings and marketing solutions.”",
      author: "Kingshuk Dash",
      role: "Senior Developer",
    },
    {
      company: "Bookmipg",
      subtext: "Product Leadership",
      bgAccent: "#facc15",
      quote:
        "“Designed and built a modern booking platform for discovering hotels, checking room availability, and making stays simple and convenient.”",
      author: "RIK",
      role: "Principal Architect,Bookmipg",
    },
    {
      company: "Pathshala AI",
      subtext: "Education & Learning",
      bgAccent: "#ea580c",
      quote:
        "“Designed and built a distraction-free study platform that turns YouTube learning into structured notes, tasks, and organized study sessions.”",
      author: "Satyajit & kingshuk",
      role: "Head of Product Design, Pathshala AI",
    },
  ];

  return (
    <section className="relative py-12 md:py-18 border-t border-neutral-800/30 dark:border-neutral-800/30 border-neutral-200/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white"
          >
            Join the 25,000+ professionals who build careers with MERO
          </motion.h2>
        </div>

        {/* Big Angled Testimonial Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-neutral-800/40 dark:border-neutral-800/40 border-neutral-200/80 bg-[#121214] dark:bg-[#121214] bg-neutral-950 text-white shadow-2xl overflow-hidden p-8 sm:p-12 lg:p-14"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#f97316]/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Big Brand Circular Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative flex h-52 w-52 sm:h-64 sm:w-64 flex-col items-center justify-center rounded-full bg-[#16a34a] text-white shadow-2xl transition-transform duration-300 hover:scale-105 p-6 text-center">
                <span className="text-3xl sm:text-4xl font-black tracking-tight">
                  {stories[activeStory].company}
                </span>
                <span className="mt-1 text-xs sm:text-sm font-semibold text-emerald-100 flex items-center gap-1">
                  <span>{stories[activeStory].subtext}</span>
                </span>
                {/* Decorative wavy underline */}
                <svg className="w-16 h-3 mt-3 stroke-white fill-none stroke-[2.5]" viewBox="0 0 60 12">
                  <path d="M2 6 Q 15 0, 30 6 T 58 6" />
                </svg>
              </div>
            </div>

            {/* Right Column: Dynamic Quote Content */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-neutral-200">
                    {stories[activeStory].quote}
                  </p>

                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                      {stories[activeStory].author}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-400">
                      {stories[activeStory].role}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="#case-studies"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f97316] hover:text-[#facc15] transition-colors group"
                    >
                      <span>Read customer story</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Logos Tab Bar */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-6">
            {stories.map((story, idx) => {
              const isActive = activeStory === idx;
              return (
                <button
                  key={story.company}
                  onClick={() => setActiveStory(idx)}
                  className={`group relative pb-2 text-sm sm:text-base font-extrabold tracking-tight transition-all cursor-pointer ${
                    isActive
                      ? "text-white scale-105"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <span>{story.company}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeStoryTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
