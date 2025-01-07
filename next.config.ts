import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/sample-next-app' : '', // Replace <repository-name> with your actual repo name
  assetPrefix: isProd ? '/sample-next-app' : '', // Replace <repository-name> with your actual repo name
  reactStrictMode: true
  /* config options here */
};

export default nextConfig;
