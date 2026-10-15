import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { reveal } from "./directives/reveal";
import { initTheme } from "./lib/theme";
import { initLang } from "./i18n";

initTheme();
initLang();

const app = createApp(App);
app.directive("reveal", reveal);
app.use(router);
app.mount("#app");
