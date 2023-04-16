import { defineConfig } from "cypress";
import { cloudPlugin } from "cypress-cloud/plugin";
import { config } from "./cypress.config";

export default defineConfig({
  projectId: "ubrejg",
  e2e: config.e2e,
});
