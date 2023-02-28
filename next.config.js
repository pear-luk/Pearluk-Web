const { redirect } = require('next/dist/server/api-utils');

/** @type {import('next').NextConfig} */

const domain = process.env.NEXT_PUBLIC_DOMAIN || 'localhost';
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['loremflickr.com', 'pearluk-dev.s3.ap-northeast-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // destination: 'http://localhost:8000/api/:path*',
        destination: domain ? `http://api.${domain}/api/:path*` : 'http://localhost:8000/api/:path*',
      },
      {
        source: '/:path*',
        destination: '/prod/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
