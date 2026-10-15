<script setup lang="ts">
import { Check } from "lucide-vue-next";
import { advantages, sections } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.whyme;
</script>

<template>
  <section id="why-me" class="section-padding relative">
    <div class="container">
      <SectionHeading index="08" :eyebrow="t(s.eyebrow)" :title="t(s.title)" />

      <div class="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(a, i) in advantages" :key="i" v-reveal="(i % 3) * 50" class="flex gap-4">
          <div class="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
            <Check class="h-4 w-4" :stroke-width="2.5" />
          </div>
          <div>
            <h3 class="font-semibold tracking-tight">{{ t(a.title) }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{{ t(a.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
