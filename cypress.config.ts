import { defineConfig } from 'cypress';

/** @type {import('next').NextConfig} */
// const dotenvOutput = require('dotenv').config()
// console.log(dotenvOutput.parsed)
const qaseAPIToken = process.env.NEXT_PUBLIC_QASE_TOKEN;
export default defineConfig({
  reporter: 'cypress-qase-reporters',
  reporterOptions: {
    apiToken: qaseAPIToken,
    projectCode: 'LP',
    logging: true,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      backendUrl: 'http://localhost:8080/api/',
    },
    testIsolation: true,
    experimentalRunAllSpecs: true,
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
