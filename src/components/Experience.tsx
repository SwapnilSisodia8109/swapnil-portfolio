import React from "react";
import { PlayStoreIcon, AppStoreIcon } from "@/components/icons/StoreIcons";
import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-[#0a0f1d]/70 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
            Career History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm">
            3+ years of progressive software development experience building
            mobile and web products.
          </p>
        </div>

        <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500 before:to-transparent">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-12 sm:pl-16 group transition-all"
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-2.5 sm:left-5.5 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sky-500/30 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-sky-400">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                      {exp.location}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 italic">
                  {exp.description}
                </p>

                {/* Built & Released Apps with Live Links */}
                {exp.apps && exp.apps.length > 0 && (
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Shipped Apps:
                    </span>
                    {exp.apps.map((app, aIdx) => (
                      <div
                        key={aIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs"
                      >
                        <span className="font-semibold text-white">
                          {app.name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {app.playStore && (
                            <a
                              href={app.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-400 hover:text-emerald-300 transition-colors"
                              title="Google Play Link"
                            >
                              <PlayStoreIcon className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {app.appStore && (
                            <a
                              href={app.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sky-400 hover:text-sky-300 transition-colors"
                              title="App Store Link"
                            >
                              <AppStoreIcon className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-2 pt-2">
                  {exp.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <span className="text-sky-400 mt-1">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
