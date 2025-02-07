import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/invitacio', 
  // assetPrefix: 'https://daxin3.github.io/invitacio', // Seems to not to work.......
  reactStrictMode: true,
  images: { unoptimized: true }
  
};

export default nextConfig;
