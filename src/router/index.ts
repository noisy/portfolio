import {
  RouteRecordRaw,
  RouterScrollBehavior,
  createRouter,
  createWebHistory,
} from "vue-router";
import { projects } from "./projects";
import { Home, Project, Projects, Talks } from "@/views";

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
    path: "/contact",
    name: "contact",
    component: Home,
  },
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

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  return { left: 0, top: 0 };
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

export default router;
