import { RouteRecordRaw } from "vue-router";
import OperaMobile from "@/views/projects/OperaMobile.vue";
import Seerene from "@/views/projects/Seerene.vue";
import SpisTresci from "@/views/projects/SpisTresci.vue";

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
];
