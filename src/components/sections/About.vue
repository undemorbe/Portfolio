<script setup lang="ts">
import { GraduationCap, Languages, Terminal } from "lucide-vue-next";
import { sections, ui } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.about;
const facts = [
  { icon: GraduationCap, label: ui.factEducation, value: ui.factEducationValue },
  { icon: Languages, label: ui.factLanguages, value: ui.factLanguagesValue },
  { icon: Terminal, label: ui.factEnv, value: ui.factEnvValue },
];
</script>

<template>
  <section id="about" class="section-padding relative">
    <div class="container">
      <SectionHeading index="01" :eyebrow="t(s.eyebrow)" :title="t(s.title)" />

      <div class="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div class="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p v-reveal>{{ t(ui.aboutP1) }}</p>
          <p v-reveal="60">
            {{ t(ui.aboutP2Pre) }}<span class="text-foreground">{{ t(ui.aboutP2Strong) }}</span>{{ t(ui.aboutP2Post) }}
          </p>
          <p v-reveal="120">{{ t(ui.aboutP3) }}</p>
          <p v-reveal="180">{{ t(ui.aboutP4) }}</p>
        </div>

        <div class="space-y-4">
          <div v-for="(f, i) in facts" :key="i" v-reveal="i * 60" class="card-surface flex gap-4 p-5">
            <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <component :is="f.icon" class="h-5 w-5" />
            </div>
            <div>
              <div class="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">{{ t(f.label) }}</div>
              <div class="mt-1 text-sm leading-relaxed text-foreground">{{ t(f.value) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
