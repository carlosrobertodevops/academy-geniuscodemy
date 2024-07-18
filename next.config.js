// web/next.config.js
module.exports = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

// next.config.js
module.exports = {
  images: {
    domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
        pathname: '',
      },
    ],
  },
};
