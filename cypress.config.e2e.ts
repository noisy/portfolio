import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "ubrejg",

  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.ts").default(on, config);
    },
    baseUrl: "http://localhost:5050",
    specPattern: "cypress/e2e/**/*.cy.ts",
  },
});
