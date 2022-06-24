/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/google',
        destination: 'https://google.com/about',
        permanent: false
      }
    ];
  }
}

module.exports = nextConfig
