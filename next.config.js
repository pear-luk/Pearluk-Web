/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['loremflickr.com'], formats: ['image/avif', 'image/webp'], loader: 'imgix' },
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
