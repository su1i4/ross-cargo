import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["rosscargo.kg"], // 🔥 ВАЖНО: сюда добавляется домен
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
