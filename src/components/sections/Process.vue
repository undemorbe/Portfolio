<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
import { process, sections } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.process;
const pad = (n: number) => String(n + 1).padStart(2, "0");
</script>

<template>
  <section id="process" class="section-padding relative">
    <div class="container">
      <SectionHeading
        index="06"
        :eyebrow="t(s.eyebrow)"
        :title="t(s.title)"
        :description="s.description ? t(s.description) : undefined"
      />

      <div class="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="(step, i) in process" :key="i" v-reveal="(i % 4) * 50" class="relative h-full">
          <div class="card-surface h-full p-6 transition-colors hover:border-accent/30">
            <div class="flex items-center justify-between">
              <span class="font-mono text-sm text-muted-foreground/60">{{ pad(i) }}</span>
              <component :is="step.icon" class="h-5 w-5 text-accent" />
            </div>
            <h3 class="mt-4 text-base font-semibold tracking-tight">{{ t(step.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ t(step.description) }}</p>
          </div>
          <ChevronRight
            v-if="i < process.length - 1"
            class="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground/30 lg:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>
