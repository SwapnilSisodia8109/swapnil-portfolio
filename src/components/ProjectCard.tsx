import React from "react";
import Image from "next/image";
import { ExternalLink, Radio, Wrench, Heart, ShieldCheck, Bot } from "lucide-react";
import { PlayStoreIcon, AppStoreIcon } from "@/components/icons/StoreIcons";
import { ProjectItem } from "@/types/portfolio";

const iconMap = {
  Radio,
  Wrench,
  Heart,
  ShieldCheck,
  Bot,
};

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const IconComp = iconMap[project.iconName] || Radio;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const logoSrc = project.logo ? `${basePath}${project.logo}` : null;

  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-slate-900/50 border ${project.border} backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group`}
    >
      <div className="space-y-5">
        {/* Header: Logo, Company & Tag */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {logoSrc ? (
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/40 flex-shrink-0 bg-slate-800">
                <Image
                  src={logoSrc}
                  alt={`${project.title} logo`}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            ) : (
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center ${project.accent} border border-white/10 flex-shrink-0`}
              >
                <IconComp className="w-7 h-7" />
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400">
                {project.company} • {project.period}
              </p>
            </div>
          </div>

          <span
            className={`text-xs px-3 py-1 rounded-full font-mono font-medium bg-white/5 ${project.accent} border border-white/10 whitespace-nowrap hidden sm:inline-block`}
          >
            {project.highlight}
          </span>
        </div>

        {/* Role & Summary */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Role: <span className="text-slate-200">{project.role}</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Bullet Highlights */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Key Engineering Highlights:
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {project.bulletPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-sky-400 mt-0.5">•</span>
                <span className="leading-normal">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Live Store Deployment Buttons */}
        {(project.playStoreUrl || project.appStoreUrl) && (
          <div className="pt-3 flex flex-wrap items-center gap-2.5">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-sky-500/20 text-slate-200 hover:text-sky-300 border border-white/10 hover:border-sky-500/40 text-xs font-semibold transition-all shadow-sm"
              >
                <PlayStoreIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Play</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}

            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-indigo-500/20 text-slate-200 hover:text-indigo-300 border border-white/10 hover:border-indigo-500/40 text-xs font-semibold transition-all shadow-sm"
              >
                <AppStoreIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>Apple App Store</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Tech Tags */}
      <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
