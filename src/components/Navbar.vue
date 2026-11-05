<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { Menu, X, Send } from "lucide-vue-next";
import { navLinks, site, ui } from "@/data";
import { lang, t, toggleLang } from "@/i18n";
import { scrollToHash, scrollToTop } from "@/lib/scroll";
import ThemeToggle from "@/components/ThemeToggle.vue";

const route = useRoute();
const onHome = computed(() => route.path === "/");
const scrolled = ref(false);
const progress = ref(0);
const open = ref(false);
const active = ref<string>("");

const anchors = navLinks.filter((l) => !l.page).map((l) => l.href);

function onScroll() {
  const y = window.scrollY;
  scrolled.value = y > 24;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = max > 0 ? Math.min(1, y / max) : 0;
  if (onHome.value && y < window.innerHeight * 0.5) active.value = "";
}

let spy: IntersectionObserver | null = null;
function watchSections() {
  spy?.disconnect();
  if (!onHome.value) {
    active.value = route.path;
    return;
  }
  spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = `#${e.target.id}`;
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  for (const h of anchors) {
    const el = document.querySelector(h);
    if (el) spy.observe(el);
  }
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  setTimeout(watchSections, 300);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  spy?.disconnect();
});
watch(() => route.path, () => setTimeout(watchSections, 300));

watch(open, (v) => {
  document.documentElement.style.overflow = v ? "hidden" : "";
});
function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") open.value = false;
}
onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));

function goAnchor(hash: string) {
  open.value = false;
  scrollToHash(hash);
}
const isActive = (href: string) => active.value === href;

/* The track fills up to the current stop in that section's line colour, like a train that has passed */
const lineFor: Record<string, string> = { "#about": "m1", "#projects": "m2", "#experience": "m4", "#approach": "m3", "/services": "m5", "#contact": "m1" };
const trackList = ref<HTMLElement | null>(null);
const fill = ref({ w: 0, line: "m1" });
function measureFill() {
  const list = trackList.value;
  const i = navLinks.findIndex((l) => l.href === active.value);
  if (!list || i < 0) {
    fill.value = { w: 0, line: fill.value.line };
    return;
  }
  const dot = list.querySelectorAll<HTMLElement>(".dot")[i];
  if (!dot) return;
  const box = list.getBoundingClientRect();
  const d = dot.getBoundingClientRect();
  fill.value = { w: Math.max(0, d.left + d.width / 2 - box.left - 12), line: lineFor[active.value] ?? "m1" };
}
watch([active, lang], () => nextTick(measureFill));
onMounted(() => window.addEventListener("resize", measureFill));
onUnmounted(() => window.removeEventListener("resize", measureFill));
</script>

<template>
  <a
    href="#main"
    class="fixed left-4 top-3 z-[60] -translate-y-20 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform focus:translate-y-0"
  >{{ t(ui.skipToContent) }}</a>

  <header class="fixed inset-x-0 top-0 z-50">
    <div
      class="transition-[background-color,box-shadow,border-color] duration-500"
      :class="scrolled ? 'border-b border-border bg-background/85 shadow-[0_8px_30px_-20px_hsl(var(--shadow-color)/0.5)] backdrop-blur-md' : 'border-b border-transparent'"
    >
      <nav class="container flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <!-- Logo: an enamel station plate -->
        <component
          :is="onHome ? 'a' : 'RouterLink'"
          v-bind="onHome ? { href: '#top' } : { to: '/' }"
          class="group flex items-center gap-3 font-display font-bold tracking-tight"
          @click="onHome && ($event.preventDefault(), scrollToTop())"
        >
          <span class="grid h-9 w-9 place-items-center rounded-full bg-m1 text-sm text-white transition-transform duration-500 group-hover:rotate-[360deg]">БС</span>
          <span class="hidden leading-none sm:block lg:hidden xl:block">
            {{ lang === 'ru' ? site.nameRu : site.name }}
            <span class="mt-0.5 block text-xs font-medium text-muted-foreground">Product engineer</span>
          </span>
        </component>

        <!-- Desktop: links as stations on a track -->
        <div class="relative hidden lg:block">
          <span class="absolute left-3 right-3 top-1/2 h-1 -translate-y-1/2 rounded-full bg-border" aria-hidden="true" />
          <span
            class="absolute left-3 top-1/2 h-1 -translate-y-1/2 rounded-full transition-[width,background-color] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
            :style="{ width: `${fill.w}px`, backgroundColor: `hsl(var(--${fill.line}))` }"
            aria-hidden="true"
          />
          <ul ref="trackList" class="relative flex items-center gap-2 xl:gap-3">
            <li v-for="link in navLinks" :key="link.href">
              <RouterLink
                v-if="link.page"
                :to="link.href"
                class="nav-stop"
                :class="isActive(link.href) && 'is-active'"
              >
                <span class="dot" aria-hidden="true" />{{ t(link.label) }}
              </RouterLink>
              <a
                v-else-if="onHome"
                :href="link.href"
                class="nav-stop"
                :class="isActive(link.href) && 'is-active'"
                :aria-current="isActive(link.href) ? 'location' : undefined"
                @click.prevent="goAnchor(link.href)"
              >
                <span class="dot" aria-hidden="true" />{{ t(link.label) }}
              </a>
              <RouterLink v-else :to="{ path: '/', hash: link.href }" class="nav-stop">
                <span class="dot" aria-hidden="true" />{{ t(link.label) }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="grid h-10 place-items-center rounded-full border border-border bg-surface px-3 font-mono text-xs font-semibold tracking-wider transition-colors hover:border-foreground"
            :aria-label="lang === 'ru' ? 'Switch to English' : 'Переключить на русский'"
            @click="toggleLang"
          >
            <span><span :class="lang === 'ru' ? 'text-foreground' : 'text-muted-foreground'">RU</span><span class="mx-1 text-border">/</span><span :class="lang === 'en' ? 'text-foreground' : 'text-muted-foreground'">EN</span></span>
          </button>
          <ThemeToggle />
          <a
            :href="site.telegramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary hidden h-10 px-5 text-sm sm:inline-flex lg:hidden xl:inline-flex"
          >
            <Send class="h-4 w-4" />{{ t(ui.message) }}
          </a>
          <!-- Phone: contact stays one tap away -->
          <a
            :href="site.telegramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition-colors hover:bg-m1 hover:text-white sm:hidden"
            :aria-label="t(ui.messageTg)"
          >
            <Send class="h-4 w-4" />
          </a>
          <button
            type="button"
            class="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface lg:hidden"
            :aria-label="lang === 'ru' ? 'Меню' : 'Menu'"
            :aria-expanded="open"
            aria-controls="mobile-menu"
            @click="open = !open"
          >
            <X v-if="open" class="h-5 w-5" />
            <Menu v-else class="h-5 w-5" />
          </button>
        </div>
      </nav>

      <!-- Scroll progress: a train riding the track under the bar -->
      <div class="relative h-[3px]" aria-hidden="true">
        <div class="absolute inset-y-0 left-0 bg-m1 transition-[width] duration-150 ease-out" :style="{ width: `${progress * 100}%` }" />
      </div>
    </div>

    <!-- Mobile menu: stations along a vertical line -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div v-if="open" id="mobile-menu" class="fixed inset-x-0 bottom-0 top-[67px] overflow-y-auto bg-background lg:hidden">
        <div class="container py-8">
          <ul class="relative ml-3 border-l-[5px] border-m1 pl-8">
            <li v-for="(link, i) in navLinks" :key="link.href" class="relative py-3" :style="{ animation: `menu-in .5s ${i * 50}ms cubic-bezier(.16,1,.3,1) both` }">
              <span class="absolute -left-[2.85rem] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-[3.5px] border-foreground bg-surface" aria-hidden="true" />
              <RouterLink v-if="link.page" :to="link.href" class="font-display text-3xl font-bold" @click="open = false">{{ t(link.label) }}</RouterLink>
              <a v-else-if="onHome" :href="link.href" class="font-display text-3xl font-bold" @click.prevent="goAnchor(link.href)">{{ t(link.label) }}</a>
              <RouterLink v-else :to="{ path: '/', hash: link.href }" class="font-display text-3xl font-bold" @click="open = false">{{ t(link.label) }}</RouterLink>
            </li>
          </ul>
          <a :href="site.telegramUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-10 w-full">
            <Send class="h-4 w-4" />{{ t(ui.messageTg) }}
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.nav-stop {
  @apply relative flex items-center gap-2 whitespace-nowrap rounded-full bg-background px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors xl:px-3;
}
.nav-stop:hover {
  @apply text-foreground;
}
.nav-stop .dot {
  @apply h-3 w-3 rounded-full border-[2.5px] border-muted-foreground bg-surface transition-all duration-300;
}
.nav-stop:hover .dot {
  @apply border-foreground;
}
.nav-stop.is-active,
.nav-stop.router-link-exact-active {
  @apply text-foreground;
}
.nav-stop.is-active .dot,
.nav-stop.router-link-exact-active .dot {
  @apply scale-125 border-foreground bg-m1;
}
@keyframes menu-in {
  from {
    opacity: 0;
    transform: translateX(-12px);
  }
}
</style>
