import React from "react";

export interface ShippedApp {
  name: string;
  playStore?: string;
  appStore?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  company: string;
  period: string;
  category: "mobile" | "fintech" | "ai" | string;
  role: string;
  highlight: string;
  logo?: string | null;
  playStoreUrl?: string;
  appStoreUrl?: string;
  summary: string;
  bulletPoints: string[];
  tags: string[];
  featured: boolean;
  color: string;
  accent: string;
  border: string;
  iconName: "Radio" | "Wrench" | "Heart" | "ShieldCheck" | "Bot";
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  apps?: ShippedApp[];
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  iconName: "Smartphone" | "Code2" | "Layers" | "Cloud" | "Briefcase" | "Database";
  color: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  location: string;
  period: string;
}

export interface PersonalDetails {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  linkedinUrl: string;
  location: string;
  relocationNote: string;
  metrics: {
    listeners: string;
    experienceYears: string;
    shippedApps: string;
    appStores: string;
  };
}
