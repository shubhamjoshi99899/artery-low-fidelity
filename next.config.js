const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});
const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAIN],
  },
});
module.exports = nextConfig;
