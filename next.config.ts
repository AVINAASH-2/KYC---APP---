import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // If your repository name is not the same as your username.github.io, uncomment the line below and replace REPO_NAME
  // basePath: "/KYC---APP---",
};

export default nextConfig;
