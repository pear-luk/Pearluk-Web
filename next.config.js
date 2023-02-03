/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
