<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ArrowUp } from "lucide-vue-next";
import { site, navLinks, ui, lines } from "@/data";
import { lang, t } from "@/i18n";
import { scrollToTop } from "@/lib/scroll";

const route = useRoute();
const onHome = computed(() => route.path === "/");
const year = new Date().getFullYear();
const displayName = computed(() => (lang.value === "ru" ? site.nameRu : site.name));
const contacts = [
  { label: "Telegram", href: site.telegramUrl },
  { label: "GitHub", href: site.githubUrl },
  { label: "LinkedIn", href: site.linkedinUrl },
  { label: "hh.kz", href: site.hhUrl },
  { label: "Email", href: `mailto:${site.email}` },
];
</script>

<template>
  <footer class="relative border-t border-border">
    <div class="flex h-2" aria-hidden="true">
      <span v-for="l in lines" :key="l.id" class="flex-1" :class="`bg-${l.id}`" />
    </div>
    <div class="container py-14">
      <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p class="font-display text-3xl font-bold tracking-[-0.02em]">{{ displayName }}</p>
          <p class="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{{ t(site.shortBio) }}</p>
        </div>
        <nav :aria-label="t(ui.navigation)">
          <p class="text-sm font-semibold">{{ t(ui.navigation) }}</p>
          <ul class="mt-3 space-y-2">
            <li v-for="l in navLinks" :key="l.href">
              <RouterLink :to="l.page ? l.href : { path: '/', hash: l.href }" class="text-sm text-muted-foreground transition-colors hover:text-foreground">{{ t(l.label) }}</RouterLink>
            </li>
          </ul>
        </nav>
        <div>
          <p class="text-sm font-semibold">{{ t(ui.contactWord) }}</p>
          <ul class="mt-3 space-y-2">
            <li v-for="c in contacts" :key="c.label">
              <a :href="c.href" :target="c.href.startsWith('http') ? '_blank' : undefined" rel="noopener noreferrer" class="text-sm text-muted-foreground transition-colors hover:text-foreground">{{ c.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>© {{ year }} {{ displayName }}. {{ t(ui.rightsReserved) }}</p>
        <button v-if="onHome" type="button" class="group inline-flex items-center gap-2 font-medium hover:text-foreground" @click="scrollToTop()">
          {{ t(ui.backToTop) }}
          <span class="grid h-8 w-8 place-items-center rounded-full border border-border transition-transform duration-300 group-hover:-translate-y-1"><ArrowUp class="h-4 w-4" /></span>
        </button>
      </div>
    </div>
  </footer>
</template>
