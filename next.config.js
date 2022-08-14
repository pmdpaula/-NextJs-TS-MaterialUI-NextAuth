/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
const redirects = require('./config/redirects');
const imageDomains = require('./config/imageDomains');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },
  images: {
    domains: imageDomains,
  },
  env: {
    // NODE_ENV: 'development',
  },
};
