/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["admin.luxuryaqar.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    defaultFormats: 'ar'
  },
  distDir: 'build',

};
