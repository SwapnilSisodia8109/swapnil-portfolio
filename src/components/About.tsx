import React from "react";
import { Smartphone, Layers, Award } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Smartphone,
      title: "Cross-Platform Architecture",
      color: "bg-sky-500/10 text-sky-400 hover:border-sky-500/30",
      description:
        "Deep hands-on experience designing modular Android and iOS codebases with reusable components, custom React Hooks, and platform-specific optimizations for seamless native performance.",
    },
    {
      icon: Layers,
      title: "Predictable State & APIs",
      color: "bg-indigo-500/10 text-indigo-400 hover:border-indigo-500/30",
      description:
        "Mastery in Redux, Redux Toolkit, Redux-Saga, and Context API to manage asynchronous data streams, financial fund transfers, audio queues, and secure RESTful backend integrations.",
    },
    {
      icon: Award,
      title: "Production Store Releases",
      color: "bg-emerald-500/10 text-emerald-400 hover:border-emerald-500/30",
      description:
        "Proven track record owning production builds, certificate signing, test tracks, and full app lifecycles across Google Play Console and Apple App Store Connect.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-[#0a0f1d]/70 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xs font-bold text-sky-400 tracking-widest uppercase">
            Professional Overview
          </h2>
          <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
            Engineering reliable mobile solutions from concept to app store
            deployment.
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sky-500/30 transition-all space-y-3"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${pillar.color}`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
