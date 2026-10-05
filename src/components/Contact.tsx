"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons/StoreIcons";
import { personalDetails } from "@/data/portfolioData";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Let&apos;s Build Something Extraordinary Together
        </h2>
        <p className="text-slate-400 text-sm">
          Feel free to reach out directly via email, phone, or LinkedIn. I am
          actively available for React Native & Mobile engineering
          opportunities.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-8">
        {/* 4 Clean Contact Cards in a 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-500/40 transition-all space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">
                    Direct Email
                  </div>
                  <div className="text-white font-medium text-sm sm:text-base">
                    {personalDetails.email}
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(personalDetails.email, "email-contact")
                }
                className="p-2 rounded-lg bg-white/5 hover:bg-sky-500/10 text-slate-300 hover:text-sky-400 border border-white/10 transition-all"
                title="Copy Email"
              >
                {copiedType === "email-contact" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <a
              href={`mailto:${personalDetails.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:underline"
            >
              Send an email directly <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">
                    Phone / WhatsApp
                  </div>
                  <div className="text-white font-medium text-sm sm:text-base">
                    {personalDetails.phoneFormatted}
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(personalDetails.phone, "phone-contact")
                }
                className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/10 transition-all"
                title="Copy Phone"
              >
                {copiedType === "phone-contact" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <a
              href={`tel:${personalDetails.phone}`}
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline"
            >
              Call directly <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/40 transition-all space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">
                    Professional LinkedIn
                  </div>
                  <div className="text-white font-medium text-sm sm:text-base">
                    {personalDetails.name}
                  </div>
                </div>
              </div>

              <a
                href={personalDetails.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500/10 text-slate-300 hover:text-indigo-400 border border-white/10 transition-all"
                title="Open LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <a
              href={personalDetails.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:underline"
            >
              linkedin.com/in/swapnil-sisodia{" "}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 transition-all flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-semibold">
                Current Location
              </div>
              <div className="text-white text-sm font-medium">
                {personalDetails.location}
              </div>
              <div className="text-xs text-sky-400">
                {personalDetails.relocationNote}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/20 text-center space-y-4">
          <div className="space-y-1">
            <h3 className="text-white font-bold text-lg sm:text-xl">
              Ready to collaborate or discuss an engineering opportunity?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Available for full-time React Native & Application Development
              roles across India or remotely.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`mailto:${personalDetails.email}`}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-sky-500/20 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Send Email Directly
            </a>
            <a
              href={`tel:${personalDetails.phone}`}
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" /> Call {personalDetails.phoneFormatted}
            </a>
            <a
              href={personalDetails.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-indigo-500/20 border border-white/10 text-slate-200 hover:text-indigo-300 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" /> LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
