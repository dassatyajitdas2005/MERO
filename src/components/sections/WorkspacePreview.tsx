"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  RefreshCw,
  Folder,
  FileText,
  Calendar,
  CheckSquare,
  ChevronDown,
  Layers,
} from "lucide-react";

export default function WorkspacePreview() {
  const teamspaces = [
    { name: "Company OS", icon: Folder },
    { name: "MERO Workspace", icon: Folder, indent: true },
    { name: "Projects", icon: Layers },
    { name: "Docs", icon: FileText },
    { name: "Meetings", icon: Calendar },
    { name: "Tasks", icon: CheckSquare, active: true },
    { name: "Product", icon: Folder },
    { name: "Engineering", icon: Folder },
    { name: "Marketing", icon: Folder },
    { name: "Design", icon: Folder },
  ];

  const taskItems = [
    { name: "Complete compliance audit for ISO27001", checked: true },
    { name: "Implement data encryption at rest and in transit", checked: true },
    { name: "Configure multi-region personal portfolio sync", checked: false },
  ];

  return (
    <section className="relative py-10 md:py-16 border-t border-neutral-800/30 dark:border-neutral-800/30 border-neutral-200/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Workspace Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-neutral-800/40 dark:border-neutral-800/40 border-neutral-200/80 bg-white dark:bg-[#151518] shadow-xl overflow-hidden">
              {/* Window Controls Bar */}
              <div className="flex items-center justify-between border-b border-neutral-200/70 dark:border-neutral-800/60 px-4 py-3 bg-neutral-50/80 dark:bg-[#121214]">
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                  <span>MERO Workspace</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </div>
                <div className="w-10" />
              </div>

              {/* Workspace Inner Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[340px]">
                {/* Left Mini Sidebar */}
                <div className="sm:col-span-5 border-r border-neutral-200/70 dark:border-neutral-800/60 p-4 bg-neutral-50/60 dark:bg-[#121214]/50 space-y-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 px-2">
                    Teamspaces
                  </div>
                  <nav className="space-y-1">
                    {teamspaces.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.name}
                          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            item.active
                              ? "bg-amber-400/15 dark:bg-amber-400/15 text-[#f97316] font-semibold"
                              : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/40"
                          } ${item.indent ? "ml-3" : ""}`}
                        >
                          <Icon className={`h-3.5 w-3.5 ${item.active ? "text-[#f97316]" : "text-neutral-400"}`} />
                          <span className="truncate">{item.name}</span>
                        </div>
                      );
                    })}
                  </nav>
                </div>

                {/* Right Main Task Panel */}
                <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-5">
                  {/* Big Check Badge & Title */}
                  <div className="space-y-2.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-[#f59e0b] dark:text-[#facc15] shadow-inner">
                      <Check className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                      Tasks
                    </h4>
                  </div>

                  {/* Sync status pill (Amber/Yellow) */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-50 dark:bg-amber-950/30 px-3 py-1 text-xs font-semibold text-[#f59e0b] dark:text-[#facc15]">
                      <RefreshCw className="h-3 w-3 animate-spin [animation-duration:4s]" />
                      <span>Sync in progress</span>
                    </span>
                  </div>

                  {/* Tasks List */}
                  <div className="space-y-2.5 pt-1">
                    {taskItems.map((task, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                      >
                        <div
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${
                            task.checked
                              ? "border-[#f97316] bg-[#f97316] text-white"
                              : "border-neutral-300 dark:border-neutral-600"
                          }`}
                        >
                          {task.checked && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <span className={task.checked ? "line-through text-neutral-400 dark:text-neutral-500" : ""}>
                          {task.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-3"
          >
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f97316]">
              Customizable
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              Flexible design that grows with you.
            </h3>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
              A customizable workspace that adapts and scales with your team&apos;s needs, reducing the need for point solutions, more tool sprawl, and extra costs.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
