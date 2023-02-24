/** @type {import('next').NextConfig} */
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
        destination: 'http://localhost:8000/api/:path*',
      },
    ];
  },
  // images: {
  //   remotePatterns: {
  //     protocol: 'http',
  //     hostname: 'localhost',
  //     port:""
  //   },
  // },
};

module.exports = nextConfig;
