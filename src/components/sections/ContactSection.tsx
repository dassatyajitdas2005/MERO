"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HelpCircle,
  MessageSquare,
  MapPin,
  Mail,
  ArrowRight,
  CheckCircle2,
  Send,
  Loader2,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "86617c2d-b55a-4d40-822c-475ef9330623",
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.details || "No details provided",
          subject: `New Inquiry from ${formData.firstName} via MERO`,
          from_name: "MERO Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send message. Please verify your access key.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email us directly at meroindian@gmail.com.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative pt-6 pb-20 sm:pt-10 sm:pb-24 md:pt-12 md:pb-28 bg-[#121214] text-white overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[580px] rounded-full bg-gradient-to-tr from-[#f97316]/10 via-[#facc15]/8 to-transparent blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header (Exact Match to Screenshot) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white"
          >
            Contact us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed"
          >
            Have questions or want to discuss a project? Reach out, and let&apos;s
            craft the perfect solution with our tools and services.
          </motion.p>
        </div>

        {/* Main 2-Column Grid (Form on Left, Resources on Right) */}
        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Fill in the form below
            </h2>

            {status === "success" ? (
              <div className="rounded-2xl border border-amber-500/30 bg-[#18181c] p-8 text-center space-y-4 shadow-xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#facc15]/15 text-[#facc15]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-neutral-400 max-w-md mx-auto">
                  Thank you for reaching out, {formData.firstName}. We&apos;ve
                  received your inquiry and our team will get back to you within 1-2 business days.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        details: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 px-5 py-2.5 text-xs font-semibold text-neutral-200 transition-colors"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-neutral-800 bg-[#18181c] px-4 py-3.5 text-sm sm:text-base text-white placeholder-neutral-500 transition-all duration-200 focus:border-[#facc15] focus:bg-[#1a1a20] focus:outline-none focus:ring-1 focus:ring-[#facc15]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-neutral-800 bg-[#18181c] px-4 py-3.5 text-sm sm:text-base text-white placeholder-neutral-500 transition-all duration-200 focus:border-[#facc15] focus:bg-[#1a1a20] focus:outline-none focus:ring-1 focus:ring-[#facc15]"
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-800 bg-[#18181c] px-4 py-3.5 text-sm sm:text-base text-white placeholder-neutral-500 transition-all duration-200 focus:border-[#facc15] focus:bg-[#1a1a20] focus:outline-none focus:ring-1 focus:ring-[#facc15]"
                  />
                </div>

                {/* Row 3: Phone Number */}
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-800 bg-[#18181c] px-4 py-3.5 text-sm sm:text-base text-white placeholder-neutral-500 transition-all duration-200 focus:border-[#facc15] focus:bg-[#1a1a20] focus:outline-none focus:ring-1 focus:ring-[#facc15]"
                  />
                </div>

                {/* Row 4: Details Textarea */}
                <div>
                  <label htmlFor="details" className="sr-only">
                    Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    placeholder="Details"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-800 bg-[#18181c] px-4 py-3.5 text-sm sm:text-base text-white placeholder-neutral-500 transition-all duration-200 focus:border-[#facc15] focus:bg-[#1a1a20] focus:outline-none focus:ring-1 focus:ring-[#facc15] resize-y"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs sm:text-sm text-red-400 flex items-center gap-2">
                    <span>{errorMessage || "Failed to send message. Please try again."}</span>
                  </div>
                )}

                {/* Row 5: Submit Button (Vibrant Brand Yellow from Screenshot) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-neutral-950 px-6 py-4 text-sm sm:text-base font-bold shadow-lg shadow-yellow-500/10 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Subtext below button */}
                <p className="text-center text-xs sm:text-sm text-neutral-400 pt-1">
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right Column: Information & Help Links (Exact Match to Screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col divide-y divide-neutral-800/80 pt-2 lg:pt-0"
          >
            {/* Item 1: Knowledgebase */}
            <div className="pb-7 space-y-2">
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 items-center justify-center text-neutral-400 shrink-0 mt-0.5">
                  <HelpCircle className="h-5 w-5 stroke-[1.8]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Knowledgebase
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Browse through all of our knowledgebase articles and career guides.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/#features"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-[#facc15] transition-colors group"
                    >
                      <span>Visit guides &amp; tutorials</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2: FAQ */}
            <div className="py-7 space-y-2">
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 items-center justify-center text-neutral-400 shrink-0 mt-0.5">
                  <MessageSquare className="h-5 w-5 stroke-[1.8]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    FAQ
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Explore our FAQ for quick, clear answers to common queries about ATS, LinkedIn, and portfolios.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/#features"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-[#facc15] transition-colors group"
                    >
                      <span>Visit FAQ</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3: Visit our office */}
            <div className="py-7 space-y-2">
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 items-center justify-center text-neutral-400 shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5 stroke-[1.8]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Visit our office
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium">
                    MERO Global Studio
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Available Worldwide • Remote &amp; On-Demand Collaboration
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4: Contact us by email */}
            <div className="pt-7 space-y-2">
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 items-center justify-center text-neutral-400 shrink-0 mt-0.5">
                  <Mail className="h-5 w-5 stroke-[1.8]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Contact us by email
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Prefer the written word? Drop us an email at
                  </p>
                  <p className="pt-1">
                    <a
                      href="mailto:meroindian@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-[#facc15] hover:text-[#f97316] transition-colors underline underline-offset-4"
                    >
                      meroindian@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
