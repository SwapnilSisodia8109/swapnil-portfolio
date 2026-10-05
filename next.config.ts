import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/swapnil-portfolio" : "";

const nextConfig: NextConfig = {
  output: process.env.STATIC_EXPORT === "true" || isGitHubPages ? "export" : undefined,
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
