import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// Import Bootstrap and BootstrapVue CSS files (order is important)

createApp(App).use(router).mount("#app");
