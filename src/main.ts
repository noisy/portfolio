import { createApp } from "vue";
import App from "./App.vue";
import fontAwesomePlugin from "./fontawesome";
import router from "./router";
createApp(App).use(router).use(fontAwesomePlugin).mount("#app");
