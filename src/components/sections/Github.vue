<script setup lang="ts">
import { Github, ArrowUpRight } from "lucide-vue-next";
import { githubMeta, site, sections, ui } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.github;
</script>

<template>
  <section id="github" class="section relative bg-surface-2/50">
    <div class="container grid gap-12 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <SectionHeading :title="t(s.title)" :description="s.description ? t(s.description) : undefined" line="m4" />
        <div v-reveal class="mt-8">
          <p class="text-sm text-muted-foreground">
            <span class="font-semibold text-foreground">{{ t(ui.topLangsLabel) }}:</span>&nbsp;<span class="font-mono">{{ githubMeta.topLanguages.join(" · ") }}</span>
          </p>
          <p class="mt-1 text-sm text-muted-foreground">{{ t(ui.updated) }}: {{ t(githubMeta.updated) }}</p>
          <a :href="site.githubUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-8">
            <Github class="h-4 w-4" />github.com/{{ site.github }}
          </a>
        </div>
      </div>

      <!-- Depot: each repo is a stop on the orange line -->
      <ol class="relative self-end lg:col-span-7">
        <span class="absolute bottom-6 left-[9px] top-6 w-[6px] rounded-full bg-m4" aria-hidden="true" />
        <li v-for="(repo, i) in githubMeta.featuredRepos" :key="repo.name" v-reveal="i * 50">
          <a
            :href="`${site.githubUrl}/${repo.name}`"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl py-3.5 pl-12 pr-3 transition-colors duration-300 hover:bg-surface"
            :style="{ '--line': `var(--${repo.line})` }"
          >
            <span class="absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-[4px] border-foreground bg-surface transition-[background-color,transform] duration-300 group-hover:scale-110 group-hover:line-bg" aria-hidden="true" />
            <span>
              <span class="block font-mono text-[0.95rem] font-semibold">{{ repo.name }}</span>
              <span class="block text-sm text-muted-foreground">{{ t(repo.desc) }}</span>
            </span>
            <span class="flex items-center gap-2 text-xs text-muted-foreground">
              <span class="h-2 w-4 rounded-full line-bg" aria-hidden="true" />
              {{ repo.lang }}
              <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </li>
      </ol>
    </div>
  </section>
</template>
