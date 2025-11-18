/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/blog',
  assetPrefix: '/blog/',

  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

module.exports = nextConfig