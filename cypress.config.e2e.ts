import { defineConfig } from "cypress";
import { config } from "./cypress.config";

export default defineConfig({
  projectId: "ubrejg",
  e2e: config.e2e,
});
