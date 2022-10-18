import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "1iy5vg",
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:4200",
    specPattern: ["**/*.feature"],
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [NodeModulesPolyfillPlugin(), createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
