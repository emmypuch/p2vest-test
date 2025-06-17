import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // Optional: Add if using internationalized routing
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default nextConfig;