<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { Menu, X, Moon, Sun } from "lucide-vue-next";
import { navLinks, site, ui } from "@/data";
import { lang, t, toggleLang } from "@/i18n";
import { theme, toggleTheme } from "@/lib/theme";
import { scrollToHash, scrollToTop } from "@/lib/scroll";

const route = useRoute();
const onHome = computed(() => route.path === "/");
const scrolled = ref(false);
const open = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 24;
}
onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));

function goAnchor(hash: string) {
  open.value = false;
  scrollToHash(hash);
}
function goTop() {
  scrollToTop();
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="container">
      <nav
        class="mt-4 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5"
        :class="scrolled ? 'glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]' : 'border border-transparent'"
      >
        <!-- Logo -->
        <a
          v-if="onHome"
          href="#top"
          @click.prevent="goTop"
          class="flex items-center gap-2.5 pl-1 font-semibold tracking-tight"
        >
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">BS</span>
          <span class="hidden sm:inline">{{ site.name }}</span>
        </a>
        <RouterLink
          v-else
          to="/"
          class="flex items-center gap-2.5 pl-1 font-semibold tracking-tight"
        >
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">BS</span>
          <span class="hidden sm:inline">{{ site.name }}</span>
        </RouterLink>

        <!-- Desktop nav -->
        <div class="hidden items-center gap-1 md:flex">
          <template v-for="link in navLinks" :key="link.href">
            <RouterLink
              v-if="link.page"
              :to="link.href"
              class="rounded-full px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >{{ t(link.label) }}</RouterLink>
            <a
              v-else-if="onHome"
              :href="link.href"
              @click.prevent="goAnchor(link.href)"
              class="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >{{ t(link.label) }}</a>
            <RouterLink
              v-else
              :to="{ path: '/', hash: link.href }"
              class="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >{{ t(link.label) }}</RouterLink>
          </template>
        </div>

        <div class="flex items-center gap-2">
          <!-- Language toggle -->
          <button
            type="button"
            @click="toggleLang"
            :aria-label="lang === 'ru' ? 'Switch to English' : 'Переключить на русский'"
            class="flex h-10 items-center rounded-full border border-border bg-card/50 px-3 font-mono text-xs font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <span :class="lang === 'ru' ? 'text-foreground' : ''">RU</span>
            <span class="mx-1 text-border">/</span>
            <span :class="lang === 'en' ? 'text-foreground' : ''">EN</span>
          </button>

          <!-- Theme toggle -->
          <button
            type="button"
            @click="toggleTheme"
            :aria-label="theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-colors hover:bg-muted"
          >
            <Sun v-if="theme === 'dark'" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </button>

          <!-- Contact CTA -->
          <a
            v-if="onHome"
            href="#contact"
            @click.prevent="goAnchor('#contact')"
            class="hidden h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >{{ t(ui.message) }}</a>
          <RouterLink
            v-else
            :to="{ path: '/', hash: '#contact' }"
            class="hidden h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >{{ t(ui.message) }}</RouterLink>

          <!-- Mobile menu button -->
          <button
            type="button"
            :aria-label="lang === 'ru' ? 'Меню' : 'Menu'"
            :aria-expanded="open"
            @click="open = !open"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 md:hidden"
          >
            <X v-if="open" class="h-5 w-5" />
            <Menu v-else class="h-5 w-5" />
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" class="container md:hidden">
        <div class="glass mt-2 flex flex-col gap-1 rounded-2xl p-3">
          <template v-for="link in navLinks" :key="link.href">
            <RouterLink
              v-if="link.page"
              :to="link.href"
              @click="open = false"
              class="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >{{ t(link.label) }}</RouterLink>
            <a
              v-else-if="onHome"
              :href="link.href"
              @click.prevent="goAnchor(link.href)"
              class="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >{{ t(link.label) }}</a>
            <RouterLink
              v-else
              :to="{ path: '/', hash: link.href }"
              @click="open = false"
              class="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >{{ t(link.label) }}</RouterLink>
          </template>
          <RouterLink
            :to="{ path: '/', hash: '#contact' }"
            @click="open = false"
            class="mt-1 rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-accent-foreground"
          >{{ t(ui.message) }}</RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>
