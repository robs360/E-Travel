// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'], // ✅ whitelist domain (correct domain)
  },
};

module.exports = nextConfig;
