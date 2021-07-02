import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

library.add(faCheck, faClock);

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router).mount("#app");
