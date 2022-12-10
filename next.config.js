/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);

module.exports = withImages(withTM(
  {
    images: {
      domains: ["ipfs.io", "gateway.ipfscdn.io", "ipfs.thirdweb.io"],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
    ...nextConfig,
  }
));