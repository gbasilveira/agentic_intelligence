// next.config.mjs
var nextConfig = {
  distDir: "dist",
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*"
      }
    ];
  }
};
var next_config_default = nextConfig;
export {
  next_config_default as default
};
