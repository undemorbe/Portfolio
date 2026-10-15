<script setup lang="ts">
import { skillGroups, sections } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.skills;
</script>

<template>
  <section id="skills" class="section-padding relative">
    <div class="container">
      <SectionHeading
        index="04"
        :eyebrow="t(s.eyebrow)"
        :title="t(s.title)"
        :description="s.description ? t(s.description) : undefined"
      />

      <div class="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(group, i) in skillGroups"
          :key="i"
          v-reveal="(i % 3) * 50"
          class="group card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
        >
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/12 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <component :is="group.icon" class="h-5 w-5" />
            </div>
            <h3 class="font-semibold tracking-tight">{{ t(group.title) }}</h3>
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="skill in group.skills" :key="skill" class="rounded-lg border border-border bg-background/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
