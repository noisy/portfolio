import { RouteRecordRaw } from "vue-router";
import { OperaMobile, Pitchup, Seerene, SpisTresci } from "@/views/projects";

export const projects: RouteRecordRaw[] = [
  {
    path: "opera-mobile",
    name: "project-opera-mobile",
    component: OperaMobile,
  },
  {
    path: "spistresci",
    name: "project-spistresci-pl",
    component: SpisTresci,
  },
  {
    path: "seerene",
    name: "project-seerene",
    component: Seerene,
  },
  { path: "pithchup-pwa", name: "project-pitchup-pwa", component: Pitchup },
];
