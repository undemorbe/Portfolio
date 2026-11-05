import { createApp } from "vue";
import "@fontsource-variable/geologica/index.css";
import "@fontsource-variable/golos-text/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { reveal } from "./directives/reveal";
import { initTheme } from "./lib/theme";
import { initLang } from "./i18n";
import { initAnalytics } from "./lib/analytics";

initTheme();
initLang();

const app = createApp(App);
app.directive("reveal", reveal);
app.use(router);
initAnalytics(router);
app.mount("#app");
