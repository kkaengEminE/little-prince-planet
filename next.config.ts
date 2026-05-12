import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/little-prince-planet",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
