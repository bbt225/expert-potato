/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages (repository name)
  basePath: process.env.NODE_ENV === 'production' ? '/expert-potato' : '',

  // Asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/expert-potato/' : '',

  // Trailing slash for better compatibility
  trailingSlash: true,

  // Strict mode for better development
  reactStrictMode: true,
}

module.exports = nextConfig
