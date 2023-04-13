import { createApp } from "vue";
import App from "./App.vue";
/* import fontAwesomePlugin from "./fontawesome"; */
/* import router from "./router"; */

/* createApp(App).use(router).use(fontAwesomePlugin).mount("#app"); */

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
