<script setup lang="ts">
import { computed } from "vue";
import { GraduationCap, Languages, Laptop } from "lucide-vue-next";
import { lines, sections, site, ui } from "@/data";
import { lang, t } from "@/i18n";
import { asset } from "@/lib/asset";
import { goToLine } from "@/lib/stationFocus";
import SectionHeading from "@/components/SectionHeading.vue";
import LineRoundel from "@/components/metro/LineRoundel.vue";

const s = sections.about;
const facts = [
  { icon: GraduationCap, label: ui.factEducation, value: ui.factEducationValue },
  { icon: Languages, label: ui.factLanguages, value: ui.factLanguagesValue },
  { icon: Laptop, label: ui.factEnv, value: ui.factEnvValue },
];
const displayName = computed(() => (lang.value === "ru" ? site.nameRu : site.name));
</script>

<template>
  <section id="about" class="section relative">
    <div class="container">
      <SectionHeading :title="t(s.title)" :description="s.description ? t(s.description) : undefined" line="m1" />

      <div class="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <!-- Travel pass with the photo -->
        <div v-reveal class="lg:col-span-4">
          <figure class="pass group relative mx-auto max-w-sm overflow-hidden rounded-[1.6rem] bg-m2 p-3 text-white shadow-[0_24px_50px_-28px_hsl(var(--shadow-color)/0.8)]">
            <div class="flex items-center justify-between px-2 pb-3 pt-1 font-display text-xs font-bold uppercase tracking-[0.18em]">
              <span>{{ lang === 'ru' ? 'Проездной' : 'Transit pass' }}</span>
              <span class="grid h-7 w-7 place-items-center rounded-full bg-white font-display text-sm text-m2">М</span>
            </div>
            <div class="relative overflow-hidden rounded-[1.1rem] bg-white/10">
              <img
                :src="asset(site.avatar)"
                :alt="displayName"
                class="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <figcaption class="px-2 pb-1 pt-4">
              <div class="font-display text-2xl font-bold leading-tight">{{ displayName }}</div>
              <div class="mt-1 flex items-center justify-between font-mono text-xs text-white/80">
                <span>Product engineer</span>
                <span class="tabular">2023 → ∞</span>
              </div>
            </figcaption>
            <span class="shine pointer-events-none absolute inset-0" aria-hidden="true" />
          </figure>
        </div>

        <div class="lg:col-span-8">
          <div class="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground lg:max-w-[62ch]">
            <p v-reveal>{{ t(ui.aboutP1) }}</p>
            <p v-reveal="60" class="text-foreground">{{ t(ui.aboutP2) }}</p>
            <p v-reveal="120">{{ t(ui.aboutP3) }}</p>
          </div>

          <!-- Line legend: what I do -->
          <ul class="mt-10 divide-y divide-border border-y border-border">
            <li v-for="(l, i) in lines" :key="l.id" v-reveal="i * 50">
              <button
                type="button"
                class="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-4 text-left transition-colors sm:gap-6"
                :style="{ '--line': `var(--${l.id})` }"
                @click="goToLine(l.id)"
              >
                <LineRoundel :line="l.id" size="lg" />
                <span>
                  <span class="block font-display text-lg font-bold">{{ t(l.name) }}</span>
                  <span class="mt-0.5 block text-sm leading-relaxed text-muted-foreground">{{ t(l.description) }}</span>
                </span>
                <span class="h-1.5 w-10 origin-left scale-x-50 rounded-full line-bg opacity-60 transition-transform duration-500 group-hover:scale-x-100 group-hover:opacity-100 sm:w-16" aria-hidden="true" />
              </button>
            </li>
          </ul>

          <dl class="mt-10 grid gap-6 sm:grid-cols-3">
            <div v-for="(f, i) in facts" :key="i" v-reveal="i * 60">
              <dt class="flex items-center gap-2 text-sm font-semibold">
                <component :is="f.icon" class="h-4 w-4 text-m1" />{{ t(f.label) }}
              </dt>
              <dd class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{{ t(f.value) }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pass {
  transform: rotate(-2.5deg);
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pass:hover {
  transform: rotate(0deg) translateY(-6px);
}
.shine {
  background: linear-gradient(115deg, transparent 35%, rgb(255 255 255 / 0.22) 50%, transparent 65%);
  transform: translateX(-120%);
  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.pass:hover .shine {
  transform: translateX(120%);
}
</style>
