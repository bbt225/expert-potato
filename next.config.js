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

  // Experimental features
  experimental: {
    optimizeCss: true,
  },

  // Environment variables available to the browser
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
}

module.exports = nextConfig
