import React from "react";
import { personalDetails } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#06090f] py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-xs">
            SS
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-200">{personalDetails.name}</span>.
            React Native Developer Portfolio.
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a
            href={`mailto:${personalDetails.email}`}
            className="hover:text-sky-400 transition-colors"
          >
            Email
          </a>
          <a
            href={`tel:${personalDetails.phone}`}
            className="hover:text-emerald-400 transition-colors"
          >
            Phone
          </a>
          <a
            href={personalDetails.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <a href="#hero" className="hover:text-white transition-colors">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
