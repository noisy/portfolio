import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faBuilding,
  faCheck,
  faExternalLinkAlt,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

library.add(faBuilding, faCheck, faClock, faExternalLinkAlt, faWrench);

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router).mount("#app");
