const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
//const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins")

// import allureWriter from "@shelex/cypress-allure-plugin/writer";
//import { allureCypress } from "allure-cypress/reporter";
// const { allureCypress } = require("allure-cypress/reporter");
const { allureCypress } = require("allure-cypress/reporter");


//import { allureCypress }  from "allure-cypress/reporter";

module.exports = defineConfig({
  // supportFile: false,

  reporter: 'mocha-allure-reporter',

  reporterOptions: {
    reportDir: 'hw-24/cypress',
    overwrite: true,
    html: false,
    json: true,
    "mocha-allure-reporter": {
      "options": {
        "reportDir": "./hw-24/cypress",
       }
    }
  },

  e2e: {
    specPattern: "./cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,

    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./hw-24/cypress/report/allure-results",
      });
      return config;
    },

    // setupNodeEvents(on, config) {
    //     allureWriter(on, config);
    //     return config;
    // },

    // setupNodeEvents(on, config) {
    //   allureCypress(on, {
    //     resultsDir: "./allure-results",
    //     links: [
    //       { type: "issue", urlTemplate: "https://issues.example.com/%s" },
    //       { type: "tms", urlTemplate: "https://tms.example.com/%s" },
    //     ],
    //   });
    // },

    // setupNodeEvents(on, config) {
    //   configureAllureAdapterPlugins(on, config);
    //   //return require('./cypress/plugins/index.js')(on, config);
    //   return config;
    // },

    // setupNodeEvents(on, config) {
    //   // on('file:preprocessor', webpackPreprocessor);
    //   allureWriter(on, config);
    //   return config;
    // },


    // setupNodeEvents(on, config) {
    //   // allureWriter(on, config);
    //   allureCypress(on, {
    //      resultsDir: "hw-24/cypress/report/allure-results"
    //  });
    //   // return config;
    // },
    screenshotOnRunFailure: false,
    video: false,
    "viewportHeight": 900,
    "viewportWidth": 1440
  },
  env: {
    allureReuseAfterSpec: true,
    allureResultsPath: "./hw-24/cypress/report/allure-results",
    allure: true,
  }
});
