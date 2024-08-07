// @ts-check

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // biome-ignore lint/suspicious/useAwait: This needs to be an async function
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/victormicco/todoroki",
        permanent: false,
      },
      {
        source: "/docs",
        destination: "/docs/introduction",
        permanent: false,
      },
      {
        source: "/docs/templates",
        destination: "/docs/templates/nextjs",
        permanent: false,
      },
    ];
  },
};

export default config;
