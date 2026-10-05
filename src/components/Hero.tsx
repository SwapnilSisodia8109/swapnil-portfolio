"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Mail,
  Copy,
  Check,
  MapPin,
  Phone,
  Globe,
  Sparkles,
} from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="pt-12 pb-20 lg:pt-20 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Available for New Roles • {personalDetails.relocationNote}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Architecting High-Performance{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              React Native
            </span>{" "}
            Mobile Applications.
          </h1>

          {/* Summary Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Hello, I&apos;m{" "}
            <span className="text-white font-semibold">
              {personalDetails.name}
            </span>
            , an Application & React Native Developer with{" "}
            <span className="text-sky-400 font-semibold">
              {personalDetails.metrics.experienceYears} years
            </span>{" "}
            of hands-on experience engineering, scaling, and deploying iOS and
            Android apps. Lead developer behind live production apps like{" "}
            <span className="text-white font-semibold">
              Suhavi Audiobooks (30k+ active listeners)
            </span>
            , <span className="text-white font-semibold">AutoSpa</span>, and{" "}
            <span className="text-white font-semibold">Sofri Trust</span>,
            specialized in Redux/Redux-Saga state architectures, REST APIs,
            in-app purchases, and complete store release management.
          </p>

          {/* Fast Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              Explore Featured Apps
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-slate-600 text-white font-semibold text-sm transition-all flex items-center gap-2"
            >
              Contact & Inquiries
            </a>

            <button
              onClick={copyEmail}
              className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-medium flex items-center gap-2 transition-all"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied Email!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>{personalDetails.email}</span>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                </>
              )}
            </button>
          </div>

          {/* Quick Info Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>
                {personalDetails.location} ({personalDetails.relocationNote})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <a
                href={`tel:${personalDetails.phone}`}
                className="hover:text-emerald-300 transition-colors"
              >
                {personalDetails.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              <a
                href={personalDetails.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-300 transition-colors underline underline-offset-4"
              >
                linkedin.com/in/swapnil-sisodia
              </a>
            </div>
          </div>
        </div>

        {/* Right Card: Interactive Profile & Key Metrics */}
        <div className="lg:col-span-4">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  SS
                </div>
                <div>
                  <h2 className="font-bold text-white text-base">
                    {personalDetails.name}
                  </h2>
                  <p className="text-xs text-slate-400">
                    React Native Specialist
                  </p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono">
                {personalDetails.metrics.experienceYears} Yrs Exp
              </span>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-2xl font-black text-white">
                  {personalDetails.metrics.listeners}
                </div>
                <div className="text-xs text-slate-400">
                  Active Listeners (Suhavi)
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-2xl font-black text-sky-400">
                  {personalDetails.metrics.experienceYears}
                </div>
                <div className="text-xs text-slate-400">Years Hands-on Dev</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-2xl font-black text-indigo-400">
                  {personalDetails.metrics.shippedApps}
                </div>
                <div className="text-xs text-slate-400">
                  Shipped Applications
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-2xl font-black text-emerald-400">
                  {personalDetails.metrics.appStores}
                </div>
                <div className="text-xs text-slate-400">
                  Live App Stores (iOS & Android)
                </div>
              </div>
            </div>

            {/* Quick Skills Pills */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Core Specializations
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "React Native",
                  "TypeScript",
                  "Redux-Saga",
                  "In-App Purchases",
                  "Firebase FCM",
                  "Google Play Store",
                  "Apple App Store",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-200 border border-white/10"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action Link */}
            <a
              href="#contact"
              className="w-full py-2.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-semibold flex items-center justify-center gap-2 border border-sky-500/30 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" /> Open For Full-Time
              Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
