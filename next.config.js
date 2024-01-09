/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = withNextIntl({
  images: {
    domains: [
      "uploads-ssl.webflow.com",
      "images.unsplash.com",
      "images.prismic.io",
    ],
  },
});

module.exports = nextConfig;
