/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    // config.output.filename = 'static/chunks/[name]-[chunkhash].js';
    return config;
  },
  generateBuildId: async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nextBuildId = require('next-build-id');
    // You can, for example, get the latest git commit hash here
    return nextBuildId({ dir: __dirname });
  },
  generateEtags: false,
};

module.exports = nextConfig;
