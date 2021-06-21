import { RouteRecordRaw } from "vue-router";
import {
  OperaMobile,
  Pitchup,
  PitchupPWA,
  Seerene,
  SpisTresci,
} from "@/views/projects";

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
  { path: "pithchup.com", name: "project-pitchup.com", component: Pitchup },
  { path: "pithchup-pwa", name: "project-pitchup-pwa", component: PitchupPWA },
];
