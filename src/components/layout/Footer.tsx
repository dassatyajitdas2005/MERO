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
    { label: "Executive Resumes", href: "/services" },
    { label: "LinkedIn Optimization", href: "/services" },
    { label: "Portfolio Websites", href: "/services" },
    { label: "Brand Presentations", href: "/services" },
  ];

  const companyLinks = [
    { label: "About us", href: "/#about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Community", href: "https://chat.whatsapp.com/K8e6S57u1Y0Ap5rL3EG6SA" },
    { label: "Careers", href: "#careers", badge: "We're hiring!" },
    { label: "Case Studies", href: "#featured" },
  ];

  return (
    <footer className="w-full rounded-t-[2.5rem] sm:rounded-t-[3.5rem] md:rounded-t-[4rem] border-t border-neutral-700/60 bg-[#161619] text-neutral-300 shadow-[0_-16px_48px_rgba(0,0,0,0.6)] relative z-10 overflow-hidden">
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
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
              Crafting distinct personal brands and elite career identities that command attention.
            </p>
          </div>

          {/* Col 2: Services / Ecosystem */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-neutral-100 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-neutral-100 tracking-wide">
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
                      className="text-neutral-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5"
                    >
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-150"
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
            <h3 className="text-sm font-semibold text-neutral-100 tracking-wide">
              Stay up to date
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center rounded-xl bg-neutral-900/90 border border-neutral-700/60 p-1.5 focus-within:border-amber-400/60 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none"
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
                Stay updated with career branding insights and exclusive resources.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-16 pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <span>© 2026 MERO. Crafted with precision for high-impact careers.</span>
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

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            {/* Google / Dribbble / Globe */}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Google"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </a>

            {/* Slack */}
            <a
              href="https://slack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Slack"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
