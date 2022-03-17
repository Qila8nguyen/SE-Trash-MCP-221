/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_PORT: process.env.APP_PORT,
  },
}

module.exports = nextConfig
