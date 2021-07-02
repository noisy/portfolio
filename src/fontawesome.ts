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
  faCircle,
  faComment,
  faDesktop,
  faExternalLinkAlt,
  faHeadphones,
  faQuoteRight,
  faVideo,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from "@fortawesome/vue-fontawesome";
import { App as VueApp } from "vue";

const fas = [
  faBuilding,
  faCheck,
  faCircle,
  faComment,
  faDesktop,
  faExternalLinkAlt,
  faHeadphones,
  faQuoteRight,
  faVideo,
  faWrench,
];
const fab = [
  faCodepen,
  faGithub,
  faGithubAlt,
  faLinkedin,
  faStackOverflow,
  faTwitter,
];
const far = [faClock];

library.add(...fas, ...far, ...fab);

class VueFontAwesome {
  install(app: VueApp<Element>): void {
    app.component("FontAwesomeIcon", FontAwesomeIcon);
    app.component("FontAwesomeLayers", FontAwesomeLayers);
  }
}

const fontAwesomePlugin = new VueFontAwesome();
export default fontAwesomePlugin;
