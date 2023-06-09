/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.punkapi.com",
        pathname: "/v2/**.{jpg,jpeg,png,webp}"
      }
    ]
  }
};

module.exports = nextConfig;
