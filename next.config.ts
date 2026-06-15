import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "julianamoraesvet.com.br",
          },
        ],
        destination: "https://appecuaria.com.br/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.julianamoraesvet.com.br",
          },
        ],
        destination: "https://appecuaria.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
