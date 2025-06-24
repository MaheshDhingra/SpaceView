import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/**",
      },
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
        pathname: "/apod/**",
      },
      {
        protocol: "https",
        hostname: "mars.nasa.gov",
        pathname: "/msl-raw-images/**",
      },
      {
        protocol: "https",
        hostname: "thespacedevs-prod.nyc3.digitaloceanspaces.com",
        pathname: "/media/images/**",
      },
    ],
  },
};

export default nextConfig;
