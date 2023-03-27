import { defineConfig } from "cypress";
import { config } from "./cypress.config";

export default defineConfig({
  projectId: "nnmunx",
  component: config.component,
});
