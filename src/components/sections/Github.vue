<script setup lang="ts">
import { Github, Star, ArrowUpRight } from "lucide-vue-next";
import { githubMeta, site, sections, ui } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";
import Counter from "@/components/Counter.vue";

const s = sections.github;
</script>

<template>
  <section id="github" class="section-padding relative bg-muted/20">
    <div class="container">
      <SectionHeading
        index="09"
        :eyebrow="t(s.eyebrow)"
        :title="t(s.title)"
        :description="s.description ? t(s.description) : undefined"
      />

      <div class="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div v-reveal class="card-surface flex h-full flex-col justify-between gap-8 p-8">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
              <Github class="h-6 w-6" />
            </div>
            <div>
              <div class="font-semibold">@{{ site.github }}</div>
              <a :href="site.githubUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-sm text-accent hover:brightness-110">
                github.com/{{ site.github }}
                <ArrowUpRight class="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div>
              <div class="text-4xl font-semibold tracking-tight"><Counter :value="githubMeta.publicRepos" /></div>
              <div class="mt-1 text-sm text-muted-foreground">{{ t(ui.publicReposLabel) }}</div>
            </div>
            <div>
              <div class="text-4xl font-semibold tracking-tight">Dart</div>
              <div class="mt-1 text-sm text-muted-foreground">{{ t(ui.mainLang) }}</div>
            </div>
          </div>

          <div>
            <div class="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground/70">{{ t(ui.topLangsLabel) }}</div>
            <div class="flex flex-wrap gap-2">
              <span v-for="l in githubMeta.topLanguages" :key="l" class="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground">{{ l }}</span>
            </div>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <a
            v-for="(repo, i) in githubMeta.featuredRepos"
            :key="repo.name"
            v-reveal="(i % 2) * 60"
            :href="`${site.githubUrl}/${repo.name}`"
            target="_blank"
            rel="noopener noreferrer"
            class="group card-surface flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
          >
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-2 font-mono text-sm font-medium">
                <Github class="h-4 w-4 text-muted-foreground" />
                {{ repo.name }}
              </div>
              <span class="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Star class="h-3.5 w-3.5" />
                {{ repo.stars }}
              </span>
            </div>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{{ t(repo.desc) }}</p>
            <div class="mt-4 flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-accent" />
              <span class="text-xs text-muted-foreground">{{ repo.lang }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
