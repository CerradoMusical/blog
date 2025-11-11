/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ]
  },
  // Apenas aplicar basePath e assetPrefix em produção
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/cerrado-musical',
    assetPrefix: '/cerrado-musical',
  }),
}

module.exports = nextConfig