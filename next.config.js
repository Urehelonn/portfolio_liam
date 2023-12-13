/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // You can change 'out' to the desired output directory,
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig;
