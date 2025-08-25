import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.eu-west-2.amazonaws.com",
        port: "",
        pathname: "/cda-api-v1/**",
      },
    ],
  },
};

export default nextConfig;
