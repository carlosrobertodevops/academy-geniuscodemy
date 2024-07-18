// web/next.config.js

import nextI18NextConfig from './next-i18next.config.mjs';

module.exports = {
  i18n: nextI18NextConfig.i18n,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  images: {
    domains: ['utfs.io', 'img.clerk.com'],
  },
};
