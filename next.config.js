/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: 'https',
        hostname: 'storage.ko-fi.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.svc.asmodee.net'
      }
    ],
  }
}

module.exports = nextConfig
