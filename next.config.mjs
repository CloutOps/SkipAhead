import "./env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    serverMinification: true,
    swcMinify: true,
  },
};

export default config;
