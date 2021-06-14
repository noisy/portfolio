import { RouteRecordRaw } from "vue-router";
import OperaMobile from "@/views/projects/OperaMobile.vue";
import SpisTresci from "@/views/projects/SpisTresci.vue";

export const projects: RouteRecordRaw[] = [
  {
    path: "opera-mobile",
    name: "project-opera-mobile",
    component: OperaMobile,
  },
  {
    path: "spis-tresci",
    name: "project-spistresci-pl",
    component: SpisTresci,
  },
];
