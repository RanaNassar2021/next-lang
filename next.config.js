/** @type {import('next').NextConfig} */
const nextConfig = {
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

