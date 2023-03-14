import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "fvtyou",
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: "src/components/**/*.cy.ts",
  },
});
