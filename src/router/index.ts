import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home, Projects } from "@/views";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  // TO IMPLEMENT:
  {
    path: "/resume",
    name: "resume",
    component: Home,
  },
  {
    path: "/blog",
    name: "blog",
    component: Home,
  },
  {
    path: "/talks",
    name: "talks",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: Home,
  },
  {
    path: "/project/opera-mobile",
    name: "opera-mobile",
    component: Home,
  },
  { path: "/project/:slug", name: "project", component: Home },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
