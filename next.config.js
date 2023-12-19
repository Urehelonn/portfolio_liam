/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // You can change 'out' to the desired output directory,
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  eslint: {
    // Reference: https://nextjs.org/docs/app/building-your-application/configuring/eslint#linting-custom-directories-and-files
    // Include cypress in the default list of directories.
    dirs: ['pages', 'app', 'components', 'lib', 'src', 'cypress'],
  },
};

module.exports = nextConfig;
