import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isStaticExport = process.env.STATIC_EXPORT === "true" || isGitHubPages;

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: isGitHubPages ? "/swapnil-portfolio" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
