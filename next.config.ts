// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚠️ Cross-origin dev warning fix
  allowedDevOrigins: [
    "http://192.168.1.15:3000",
    "http://localhost:3000",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
