/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "127.0.0.1"],
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
