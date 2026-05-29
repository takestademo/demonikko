import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/demonikko",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
