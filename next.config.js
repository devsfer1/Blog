/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}



module.exports = nextConfig
