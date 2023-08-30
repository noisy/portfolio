import { defineConfig } from "cypress";
import { config } from "./cypress.config";

export default defineConfig({
  projectId: "fvtyou",
  component: config.component,
});
