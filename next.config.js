/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_PORT: process.env.APP_PORT,
  },
}

module.exports = {
  nextConfig,
  env: {
    MONGO_URI: "mongodb://tinmhh:6zAM!qYxTe@172.26.26.176:54605/tinmhh-2287250a"
  }
}
