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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent-lhr8-1.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent-lhr8-2.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "instagram.flhr8-1.fna.fbcdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "instagram.flhr8-2.fna.fbcdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
