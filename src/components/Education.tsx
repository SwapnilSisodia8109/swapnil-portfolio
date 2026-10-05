import React from "react";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import { educationData, certificationsData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-[#0a0f1d]/70 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                  Academic Background
                </span>
                <h2 className="text-2xl font-extrabold text-white">
                  Education
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{edu.location}</span>
                    <span className="font-mono text-sky-400">{edu.period}</span>
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">
                  Professional Credentials
                </span>
                <h2 className="text-2xl font-extrabold text-white">
                  Certifications
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{cert.location}</span>
                    <span className="font-mono text-indigo-400">{cert.period}</span>
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile App Competency Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent border border-sky-500/20 space-y-2">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                Continuous Engineering Growth
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                16 years of formal academic foundation coupled with over 3
                years of hands-on mobile industry experience building and
                releasing mission-critical applications to global users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
