import { Blog, BlogPost, Home, Project, Projects, Talks } from "@/views";
import type { RouteRecordRaw, RouterScrollBehavior } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { blogPosts } from "./blogPosts";
import { projects } from "./projects";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/project/",
    name: "project",
    component: Project,
    children: projects,
  },
  {
    path: "/talks",
    name: "talks",
    component: Talks,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/post/",
    name: "post",
    component: BlogPost,
    children: blogPosts,
  },
  {
    path: "/contact",
    name: "contact",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  return savedPosition || { top: 0, behavior: "auto" };
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
});

export default router;
