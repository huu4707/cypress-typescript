import { defineConfig } from "cypress";
import path from "path";


export default defineConfig({
  projectId: 'xuv5jf',
  e2e: {
    setupNodeEvents(on, config) {
      const mode = config.env.mode || "development";

      const pathOfConfigurationFile = `cypress/config/cypress.${mode}.json`;
      const settings = require(path.join(__dirname, pathOfConfigurationFile));

      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        };
      }
      // filter browser only family is chromium
      // if (config.browsers) {
      //   config.browsers = config.browsers.filter(
      //     (b) => b.family === "chromium" && b.name !== "electron"
      //   );
      // }

      config.video = true;

      return config;
    },
  },
  env: {
    CYPRESS_RECORD_KEY: "76b3a14f-7295-4c3b-8560-b0d18871f203"
  }
});
