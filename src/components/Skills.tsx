import React from "react";
import {
  Smartphone,
  Code2,
  Layers,
  Cloud,
  Briefcase,
  Database,
} from "lucide-react";
import { skillsData } from "@/data/portfolioData";

const skillIcons = {
  Smartphone,
  Code2,
  Layers,
  Cloud,
  Briefcase,
  Database,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
          Technical Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Skills & Tooling Matrix
        </h2>
        <p className="text-slate-400 text-sm">
          Comprehensive overview of languages, frameworks, state architecture,
          testing, and cloud infrastructure.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => {
          const IconComp = skillIcons[category.iconName] || Smartphone;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-sky-500/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-white/5 ${category.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] text-slate-300 border border-white/5 hover:border-sky-500/30 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
