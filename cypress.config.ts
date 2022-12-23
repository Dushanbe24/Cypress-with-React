import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";
const resolve = require("resolve");
const fs = require("fs");

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
      // on("after:run", (results) => {
      // if(config) {
      //   fs.mkdirSync("cypress/report/.run", { recursive: true });
      //   fs.writeFile(
      //     "cypress/report/.run/results.json",
      //     JSON.stringify(config)
      //   );
      // },
    })
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

// on("file:preprocessor", cucumber(options)),
//   on("after:run", (results) => {
//     if (results) {
//       mkdirSync("cypress/report/.run", { recursive: true });
//       writeFile("cypress/report/.run/results.json", JSON.stringify(results));
//     }
//   });

export default defineConfig({
  pageLoadTimeout: 10000,
  defaultCommandTimeout: 12000,
  viewportWidth: 1360,
  viewportHeight: 790,
  e2e: {
    baseUrl: process.env.INTEGRATION_ENDPOINT
      ? `https://${process.env.INTEGRATION_ENDPOINT}`
      : "http://localhost:3000",
    specPattern: "cypress/e2e/*/*.{feature,features}",
    supportFile: "cypress/support/commands.js",
    defaultCommandTimeout: 12000,
    pageLoadTimeout: 10000,
    chromeWebSecurity: true,
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    trashAssetsBeforeRuns: true,
    watchForFileChanges: true,
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,
    projectId: "szcww9",
    setupNodeEvents,
  },
});
