"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import { Check, Loader2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || subscribing) return;

    setSubscribing(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "86617c2d-b55a-4d40-822c-475ef9330623",
          email: email.trim(),
          subject: `New Newsletter Subscriber via MERO (${email.trim()})`,
          message: `A new user has subscribed to the MERO newsletter with email: ${email.trim()}`,
          from_name: "MERO Newsletter",
        }),
      });

      setSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    } catch {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    } finally {
      setSubscribing(false);
    }
  };

  const ecosystemLinks = [
    { label: "Static Web", href: "/services" },
    { label: "Dynamic Web", href: "/services" },
    { label: "CRM", href: "/services" },
    { label: "Stock ERP", href: "/services" },
  ];

  const companyLinks = [
    { label: "About us", href: "/#about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Community", href: "https://chat.whatsapp.com/K8e6S57u1Y0Ap5rL3EG6SA" },
    { label: "Careers", href: "#careers", badge: "We're hiring!" },
  ];

  return (
    <footer className="w-full rounded-t-[2.5rem] sm:rounded-t-[3.5rem] md:rounded-t-[4rem] border-t border-neutral-200 dark:border-neutral-700/60 bg-neutral-100 dark:bg-[#161619] text-neutral-600 dark:text-neutral-300 shadow-[0_-16px_48px_rgba(0,0,0,0.06)] dark:shadow-[0_-16px_48px_rgba(0,0,0,0.6)] relative z-10 overflow-hidden transition-colors duration-300">
      {/* Top curved edge highlight */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Logo & Brand Summary */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="group inline-flex items-center focus:outline-none">
              <BrandLogo height={34} width={115} />
            </Link>
            <p className="text-xs text-slate-500 dark:text-neutral-400 leading-relaxed max-w-xs">
              Empowering businesses with high-performance web architecture, WhatsApp CRM automation, and intelligent stock management software.
            </p>
          </div>

          {/* Col 2: Services / Ecosystem */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-neutral-100 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-neutral-100 tracking-wide">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5"
                    >
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.badge && (
                    <span className="inline-flex items-center rounded-full bg-[#f97316] px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter / Stay up to date */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-neutral-100 tracking-wide">
              Stay up to date
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-300 dark:border-neutral-700/60 p-1.5 focus-within:border-amber-400/60 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-2 text-sm text-slate-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={subscribing || subscribed}
                  className="mt-2 sm:mt-0 flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#f97316] hover:bg-[#ea580c] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 focus:outline-none cursor-pointer active:scale-95 disabled:opacity-80"
                >
                  {subscribing ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : subscribed ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>
              <p className="text-xs text-neutral-400">
                Stay updated with product releases, CRM automation tips, and web offers.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-16 pt-8 border-t border-neutral-300 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-neutral-400">
          <div>
            <span>© 2026 MERO. All rights reserved. Built for growing businesses.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-5 text-neutral-400">
            {/* WhatsApp Community */}
            <a
              href="https://chat.whatsapp.com/K8e6S57u1Y0Ap5rL3EG6SA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors"
              aria-label="Join MERO WhatsApp Community"
              title="Join MERO WhatsApp Community"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mero.stack?xtok=MzJkNHRsaGl3cXU2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition-colors"
              aria-label="Instagram"
              title="MERO Instagram"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/merostack/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
              title="MERO LinkedIn"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1H84UhLY4Z/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
              title="MERO Facebook"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
