<script setup lang="ts">
import { computed } from "vue";
import { Github, Send, Mail, Linkedin, FileUser } from "lucide-vue-next";
import { site, navLinks, ui } from "@/data";
import { lang, t } from "@/i18n";

const year = new Date().getFullYear();
const displayName = computed(() => (lang.value === "ru" ? site.nameRu : site.name));
</script>

<template>
  <footer class="border-t border-border">
    <div class="container py-14">
      <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div class="max-w-sm">
          <RouterLink to="/" class="flex items-center gap-2.5 font-semibold">
            <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">BS</span>
            {{ site.name }}
          </RouterLink>
          <p class="mt-4 text-sm leading-relaxed text-muted-foreground">
            {{ t(site.shortBio) }} {{ t(ui.openToNewWork) }}
          </p>
        </div>

        <div class="flex gap-16">
          <nav class="flex flex-col gap-3">
            <span class="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">{{ t(ui.navigation) }}</span>
            <template v-for="l in navLinks" :key="l.href">
              <RouterLink
                v-if="l.page"
                :to="l.href"
                class="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >{{ t(l.label) }}</RouterLink>
              <RouterLink
                v-else
                :to="{ path: '/', hash: l.href }"
                class="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >{{ t(l.label) }}</RouterLink>
            </template>
          </nav>
          <div class="flex flex-col gap-3">
            <span class="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">{{ t(ui.contactWord) }}</span>
            <a :href="site.telegramUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Send class="h-4 w-4" /> Telegram
            </a>
            <a :href="site.linkedinUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin class="h-4 w-4" /> LinkedIn
            </a>
            <a :href="site.githubUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Github class="h-4 w-4" /> GitHub
            </a>
            <a :href="site.hhUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <FileUser class="h-4 w-4" /> {{ t(ui.resumeHh) }}
            </a>
            <a :href="`mailto:${site.email}`" class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Mail class="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground/70 sm:flex-row sm:items-center">
        <p>© {{ year }} {{ displayName }}. {{ t(ui.rightsReserved) }}</p>
        <p>Vite · Vue 3 · TypeScript · Tailwind</p>
      </div>
    </div>
  </footer>
</template>
