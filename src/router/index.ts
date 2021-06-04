import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home, Project, Projects } from "@/views";
import OperaMobile from "@/views/projects/OperaMobile.vue";

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
    children: [
      {
        path: "opera-mobile",
        name: "project-opera-mobile",
        component: OperaMobile,
      },
    ],
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
