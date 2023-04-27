/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com'
      },
      {
        protocol: 'https',
        hostname: 'shop.asmodee.com'
      },
      {
        protocol: 'https',
        hostname: 'b2b.asmodee.es'
      },
    ],
  }
}

module.exports = nextConfig
