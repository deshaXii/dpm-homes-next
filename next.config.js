/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["dpmuae.com", "dpmhomes.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
  },
};
