"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function EcosystemGrid() {
  const cards = [
    {
      title: "Studio",
      description: "Build resumes, cover letters, and professional documents.",
      isPrimary: true, // Vivid Orange card
      href: "#studio",
    },
    {
      title: "Docs",
      description: "Read product guides, API notes, and implementation docs.",
      isPrimary: false,
      href: "#docs",
    },
    {
      title: "Blog",
      description: "Follow product thinking, releases, and builder notes.",
      isPrimary: false,
      href: "#blog",
    },
    {
      title: "Portfolio",
      description: "Create a public website from one reusable profile.",
      isPrimary: false,
      href: "#portfolio",
    },
  ];

  return (
    <section className="relative py-10 md:py-16 border-t border-neutral-800/30 dark:border-neutral-800/30 border-neutral-200/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Top Brand Pill / Label with Official MERO Icon */}
            <div className="inline-flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden p-0.5">
                <Image
                  src="/icon.png"
                  alt="MERO"
                  width={24}
                  height={24}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-sm font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
                MERO Portfolio
              </span>
            </div>

            {/* Giant Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.08]">
              One profile,<br />
              many ways to<br />
              present your work.
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md pt-1">
              Portfolio is part of the MERO ecosystem for building documents, publishing proof, and keeping your professional presence current.
            </p>
          </motion.div>

          {/* Right Column: 2x2 Bento Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 min-h-[180px] sm:min-h-[200px] ${
                  card.isPrimary
                    ? "bg-[#f97316] hover:bg-[#ea580c] text-white shadow-xl shadow-orange-500/20 border border-orange-400/40"
                    : "bg-[#161619] dark:bg-[#161619] bg-white border border-neutral-800/40 dark:border-neutral-800/40 border-neutral-200/70 hover:border-amber-400/40 dark:hover:border-amber-400/30 text-neutral-900 dark:text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {/* Card Header (Title & Arrow) */}
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight ${
                      card.isPrimary ? "text-white" : "text-neutral-900 dark:text-white"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      card.isPrimary
                        ? "text-white"
                        : "text-neutral-400 dark:text-neutral-400 group-hover:text-[#f97316]"
                    }`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Card Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    card.isPrimary
                      ? "text-orange-50 font-normal"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {card.description}
                </p>
              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
