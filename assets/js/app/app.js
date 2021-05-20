import ProjectThumbnail from "./components/projectThumbnail.js";
// import Reksio from "./components/reksio.js";
import Testimonial from "./components/testimonial.js";
import db from "./db.js";

const app = Vue.createApp({
  data() {
    return {
      db,
    };
  },
});
app.component("project-thumbnail", ProjectThumbnail);
app.component("testimonial", Testimonial);
app.mount("#app");

// const app2 = Vue.createApp({});
// app2.component("reksio", Reksio);
// app2.mount("#app2");
