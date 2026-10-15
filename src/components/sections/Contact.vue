<script setup lang="ts">
import { computed } from "vue";
import { Send, Github, Mail, Phone, Linkedin, FileText, FileUser, ArrowUpRight } from "lucide-vue-next";
import { site, sections, ui } from "@/data";
import { t } from "@/i18n";

const s = sections.contact;

const channels = computed(() => [
  { label: "Telegram", value: `@${site.telegram}`, href: site.telegramUrl, icon: Send, external: true },
  { label: "Phone", value: site.phone, href: site.phoneHref, icon: Phone, external: false },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: "LinkedIn", value: "stankov-boris", href: site.linkedinUrl, icon: Linkedin, external: true },
  { label: "GitHub", value: `@${site.github}`, href: site.githubUrl, icon: Github, external: true },
  { label: t(ui.resumeHh), value: t(ui.viewOnline), href: site.hhUrl, icon: FileUser, external: true },
  { label: t(ui.resumePdf), value: t(ui.downloadPdf), href: site.resumeUrl, icon: FileText, external: true },
]);
</script>

<template>
  <section id="contact" class="section-padding relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute left-1/2 top-1/2 h-[380px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]" />
    </div>

    <div class="container">
      <div v-reveal class="glass relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-14">
        <span class="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {{ t(ui.openToWork) }}
        </span>

        <h2 class="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{{ t(s.title) }}</h2>
        <p class="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{{ s.description ? t(s.description) : "" }}</p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a :href="site.telegramUrl" target="_blank" rel="noopener noreferrer" class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground shadow-[0_10px_40px_-14px_hsl(var(--accent)/0.7)] transition-transform hover:-translate-y-0.5">
            <Send class="h-4 w-4" />
            {{ t(ui.messageTg) }}
          </a>
          <a :href="`mailto:${site.email}`" class="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 text-sm font-medium transition-colors hover:bg-muted">
            <Mail class="h-4 w-4" />
            {{ site.email }}
          </a>
        </div>

        <p class="mt-4 text-sm text-muted-foreground">{{ t(ui.contactNote) }}</p>

        <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="c in channels"
            :key="c.label"
            :href="c.href"
            :target="c.external ? '_blank' : undefined"
            :rel="c.external ? 'noopener noreferrer' : undefined"
            class="group flex items-center gap-3 rounded-2xl border border-border bg-card/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-accent/30"
          >
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <component :is="c.icon" class="h-5 w-5" />
            </div>
            <div class="min-w-0 flex-1">
              <div class="text-xs text-muted-foreground">{{ c.label }}</div>
              <div class="truncate text-sm font-medium">{{ c.value }}</div>
            </div>
            <ArrowUpRight class="h-4 w-4 flex-shrink-0 text-muted-foreground/50 transition-colors group-hover:text-accent" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
