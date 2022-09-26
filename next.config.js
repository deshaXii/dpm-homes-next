/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["admin.dpmhomes.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    defaultFormats: "ar",
  },
});
