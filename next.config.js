/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["spspraha.cz", "www.spspraha.cz"],
  },
  swcMinify: true,
}

module.exports = nextConfig
