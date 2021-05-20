import ProjectThumbnail from "./components/projectThumbnail.js";
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
