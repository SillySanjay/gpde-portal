// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },

  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.15:3000",
  ],
};

export default nextConfig;
