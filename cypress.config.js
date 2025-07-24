const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    screenshotOnRunFailure: false,
    video: true,
    setupNodeEvents(on, config) {
    },
  },
});
