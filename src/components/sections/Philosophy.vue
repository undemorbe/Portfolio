<script setup lang="ts">
import { philosophy, sections } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.philosophy;
</script>

<template>
  <section id="philosophy" class="section-padding relative bg-muted/20">
    <div class="container">
      <SectionHeading
        index="05"
        :eyebrow="t(s.eyebrow)"
        :title="t(s.title)"
        :description="s.description ? t(s.description) : undefined"
      />

      <div class="mt-14 grid gap-4 sm:grid-cols-2">
        <div v-for="(p, i) in philosophy" :key="i" v-reveal="(i % 2) * 60" class="card-surface h-full p-7">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
            <component :is="p.icon" class="h-6 w-6" />
          </div>
          <h3 class="mt-5 text-lg font-semibold tracking-tight text-balance">{{ t(p.title) }}</h3>
          <p class="mt-3 text-pretty leading-relaxed text-muted-foreground">{{ t(p.body) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
