<script setup lang="ts">
import { Github } from "lucide-vue-next";
import { projects, site, sections, ui } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";
import ProjectCard from "./ProjectCard.vue";

const s = sections.projects;
</script>

<template>
  <section id="projects" class="section-padding relative">
    <div class="container">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="02"
          :eyebrow="t(s.eyebrow)"
          :title="t(s.title)"
          :description="s.description ? t(s.description) : undefined"
        />
        <a
          v-reveal="120"
          :href="site.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          <Github class="h-4 w-4" />
          {{ t(ui.viewOnGithub) }}
        </a>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-2">
        <ProjectCard v-for="(p, i) in projects" :key="p.slug" :project="p" :index="i" />
      </div>
    </div>
  </section>
</template>
