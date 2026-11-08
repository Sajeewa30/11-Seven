import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Photos in /public are pre-sized and compressed (under 70 KB each), so they are served as-is
  // instead of going through the on-demand image optimiser. Keeps the site fully static.
  images: { unoptimized: true },
};

export default nextConfig;
