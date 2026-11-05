import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ServicesView from "@/views/ServicesView.vue";
import { scrollToHash, scrollToTop } from "@/lib/scroll";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/services", name: "services", component: ServicesView },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  // We drive scrolling ourselves (via Lenis) in afterEach.
  scrollBehavior() {
    return false;
  },
});

router.afterEach((to, from) => {
  if (to.hash) {
    // Give the destination view a tick to mount before scrolling.
    setTimeout(() => scrollToHash(to.hash), to.path !== from.path ? 120 : 20);
  } else if (to.path !== from.path) {
    setTimeout(() => scrollToTop(), 0);
  }
});

export default router;
