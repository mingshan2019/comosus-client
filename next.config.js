/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  i18n: {
    defaultLocale: 'cn',
    locales: ['cn', 'en'],
    localeDetection: false,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
