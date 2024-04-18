/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hkhfdilwebjcbckqizyv.supabase.co",
        pathname: "/storage/v1/object/public/t3gallery/**",
      },
    ],
  },
};

export default config;
