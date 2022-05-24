/** @type {import('next').NextConfig} */
const path = require('path')
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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
