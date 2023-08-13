/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }],
    domains: ["images.unsplash.com","plus.unsplash.com"],
  },
};

module.exports = nextConfig;
