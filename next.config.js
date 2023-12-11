/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },

  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
  output: "export",
};

module.exports = nextConfig;

module.exports = {
  trailingSlash: true,
};
