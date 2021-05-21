import ProjectThumbnail from "./components/projectThumbnail.js";
import Testimonial from "./components/testimonial.js";
import Navigation from "./components/navigation.js";
import Bio from "./components/bio.js";

import Home from "./pages/home.js";

import db from "./db.js";

const About = { template: "<div>About</div>" };
const Projects = { template: "<div>Projects</div>" };

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

const app = Vue.createApp({
  data() {
    return {
      db,
    };
  },
});
app.use(router);
app.component("project-thumbnail", ProjectThumbnail);
app.component("testimonial", Testimonial);
app.component("Navigation", Navigation);
app.component("Bio", Bio);
app.mount("#app");
