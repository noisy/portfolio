import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCodepen,
  faGithub,
  faGithubAlt,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faBuilding,
  faCheck,
  faComment,
  faExternalLinkAlt,
  faHeadphones,
  faVideo,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

library.add(
  faBuilding,
  faCheck,
  faClock,
  faExternalLinkAlt,
  faWrench,

  faComment,
  faHeadphones,
  faVideo,
  //brands
  faGithub,
  faTwitter,
  faLinkedin,
  faGithubAlt,
  faStackOverflow,
  faCodepen
);

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router).mount("#app");
