const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    specPattern: 'cypress/e2e/**/*cy.js',
    screenshotOnRunFailure: true,
    experimentalStudio: true,

    pageLoadTimeout: 60000,
    defaultCommandTimeout: 15000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
