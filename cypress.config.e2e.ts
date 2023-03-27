import { defineConfig } from "cypress";
import { config } from "./cypress.config";

export default defineConfig({
  projectId: "e5pnmx",
  e2e: config.e2e,
});
