import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: dirname(__dirname),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/pr-team',
        destination: `${process.env.PR_TEAM_URL || 'http://localhost:3001'}/pr-team`,
      },
      {
        source: '/pr-team/:path*',
        destination: `${process.env.PR_TEAM_URL || 'http://localhost:3001'}/pr-team/:path*`,
      },
    ]
  },
}

export default nextConfig
