import { RouteRecordRaw } from "vue-router";
import { MVP } from "@/views/blogPosts";

export const blogPosts: RouteRecordRaw[] = [
  {
    path: "how-i-bankrupt-my-first-startup-by-not-understanding-the-definition-of-mvp-minimum-viable-product",
    name: "blog-mvp",
    component: MVP,
  },
];
