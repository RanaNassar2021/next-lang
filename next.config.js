/** @type {import('next').NextConfig} */

// const withNextIntl = require('next-intl/plugin')(
//   // This is the default (also the `src` folder is supported out of the box)
//   './i18n.ts'
// );

const {i18n} = require('./next-i18next.config')


const nextConfig = {
  i18n,
  reactStrictMode:false,
  swcMinify: true,
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


module.exports = nextConfig ;

