import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // For Netlify deployment
    loader: "custom",
    loaderFile: "./image-loader.js", 
    domains: [
      "revve.netlify.app/", 
      "localhost" 
    ],
    minimumCacheTTL: 60, // Cache images for 60 seconds
    formats: ["image/webp"], // Modern format support
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Other Next.js config options...
};

export default nextConfig;