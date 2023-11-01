/** @type {import('next').NextConfig} */
const { i18n } = require('./src/app/next-i18next.config')

const nextConfig = {
    i18n,
    reactStrictMode: true,
    env: {
        apiUrl: 'http://localhost:7011/api/',
      },

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com',
            port: '',
            pathname: '/pictura-49972.appspot.com/**',
          },
        ],
      }
}

module.exports = nextConfig

