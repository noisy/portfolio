import { defineConfig } from "cypress";
import setupNodeEvents from "./cypress/plugins";

export const config: Parameters<typeof defineConfig>[0] = {
  e2e: {
    setupNodeEvents,
    baseUrl: "http://localhost:5050",
    specPattern: "cypress/e2e/**/*.cy.ts",
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: "src/components/**/*.cy.ts",
  },
};

export default defineConfig(config);
