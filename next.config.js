// web/next.config.js
module.exports = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  images: {
    domains: ['utfs.io', 'img.clerk.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'img.clerk.com',
    //     port: '',
    //     pathname: '',
    //   },
    // ],
  },
};
