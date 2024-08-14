/** @type {import('next').NextConfig} */
const hostnames = ['']

const nextConfig = {
  httpAgentOptions: {
    keepAlive: true,
  },
  compress: true,
  output: 'standalone',
  images: {
    remotePatterns: hostnames.map(hostname => ({
      protocol: 'https',
      hostname,
    })),
  },
}

module.exports = nextConfig
