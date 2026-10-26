import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Featured images of WordPress posts (see lib/wp.ts).
    remotePatterns: [new URL("https://cms.kursusquranalfalah.id/wp-content/uploads/**")],
  },
};

export default nextConfig;
