/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "vi", "ja", "ko", "zh", "fr", "ru", "de", "th", "es"],
    defaultLocale: "vi",
  },
};

module.exports = nextConfig;
