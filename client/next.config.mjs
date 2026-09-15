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
  async redirects() {
    return [
      {
        source: '/pr-team',
        destination: 'https://pr.6thcivilians.com',
        permanent: false,
      },
      {
        source: '/pr-team/:path*',
        destination: 'https://pr.6thcivilians.com/:path*',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/frames2/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
