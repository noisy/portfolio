import ProjectThumbnail from "./projectThumbnail.js";
import Reksio from "./reksio.js";

const app = Vue.createApp({});
app.component("project-thumbnail", ProjectThumbnail);
app.mount("#app");

const app2 = Vue.createApp({});
app2.component("reksio", Reksio);
app2.mount("#app2");
