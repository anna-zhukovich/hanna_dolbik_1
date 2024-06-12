const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      screenshotOnRunFailure: true,
      video: true,
      "viewportHeight": 900,
      "viewportWidth": 1440
    
  },
});
