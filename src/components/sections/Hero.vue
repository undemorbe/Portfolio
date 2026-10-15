<script setup lang="ts">
import { computed } from "vue";
import { ArrowUpRight, Github, Send, Linkedin, MapPin } from "lucide-vue-next";
import { site, stats, ui } from "@/data";
import { lang, t } from "@/i18n";
import { asset } from "@/lib/asset";
import { scrollToHash } from "@/lib/scroll";
import Counter from "@/components/Counter.vue";

const displayName = computed(() => (lang.value === "ru" ? site.nameRu : site.name));
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-36 sm:pt-40 lg:pt-44">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute inset-0 grid-bg opacity-40" />
      <div class="absolute left-[12%] top-[-12%] h-[440px] w-[640px] rounded-full bg-accent/12 blur-[130px]" />
    </div>

    <div class="container">
      <div class="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div v-reveal>
            <span class="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span class="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {{ t(ui.openToWork) }}
            </span>
          </div>

          <h1 v-reveal="80" class="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {{ displayName }}
          </h1>

          <div v-reveal="140" class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span class="text-2xl font-medium text-accent sm:text-3xl">Flutter Developer</span>
            <span class="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin class="h-4 w-4" /> {{ t(site.location) }}
            </span>
          </div>

          <p v-reveal="200" class="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {{ t(site.tagline) }}
          </p>

          <div v-reveal="260" class="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              @click.prevent="scrollToHash('#contact')"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground shadow-[0_10px_40px_-14px_hsl(var(--accent)/0.7)] transition-transform hover:-translate-y-0.5"
            >
              {{ t(ui.getInTouch) }}
              <ArrowUpRight class="h-4 w-4" />
            </a>
            <a
              href="#projects"
              @click.prevent="scrollToHash('#projects')"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {{ t(ui.viewProjects) }}
            </a>
            <div class="flex items-center gap-2">
              <a :href="site.githubUrl" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/40 text-foreground transition-colors hover:bg-muted">
                <Github class="h-5 w-5" />
              </a>
              <a :href="site.telegramUrl" target="_blank" rel="noopener noreferrer" aria-label="Telegram" class="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/40 text-foreground transition-colors hover:bg-muted">
                <Send class="h-5 w-5" />
              </a>
              <a :href="site.linkedinUrl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/40 text-foreground transition-colors hover:bg-muted">
                <Linkedin class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Portrait -->
        <div v-reveal="160" class="relative mx-auto lg:mx-0">
          <div class="relative aspect-square w-64 sm:w-80 lg:w-full lg:max-w-sm">
            <div class="absolute -inset-3 rounded-[2rem] bg-accent/15 blur-2xl" />
            <div class="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-card">
              <img
                :src="asset(site.avatar)"
                :alt="`${site.nameRu} — Flutter Developer`"
                class="h-full w-full object-cover"
                loading="eager"
              />
              <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div class="glass absolute -bottom-5 -left-5 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl">
              <span class="font-mono text-accent">&lt;/&gt;</span>
              <div class="text-sm">
                <div class="font-semibold leading-tight">Flutter · Dart</div>
                <div class="text-xs text-muted-foreground">iOS &amp; Android</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats strip -->
      <div v-reveal="200" class="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-24 lg:grid-cols-4">
        <div v-for="(s, i) in stats" :key="i" class="bg-background p-6 text-center sm:p-7">
          <div class="text-3xl font-semibold tracking-tight sm:text-4xl">
            <Counter :value="s.value" :suffix="s.suffix" />
          </div>
          <div class="mt-2 text-sm text-muted-foreground">{{ t(s.label) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
