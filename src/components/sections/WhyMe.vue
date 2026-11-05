<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { advantages, sections, serviceOfferings, ui } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";
import LineRoundel from "@/components/metro/LineRoundel.vue";

const help = sections.services;
const why = sections.whyme;
</script>

<template>
  <section id="services" class="section relative">
    <div class="container grid gap-16 lg:grid-cols-2 lg:gap-20">
      <div>
        <SectionHeading :title="t(help.title)" :description="help.description ? t(help.description) : undefined" line="m2" />
        <ul class="mt-10 divide-y divide-border border-y border-border">
          <li v-for="(o, i) in serviceOfferings" :key="i" v-reveal="i * 40">
            <RouterLink to="/services" class="group flex items-center gap-4 py-4">
              <LineRoundel :line="o.line" size="md" />
              <span class="flex-1 font-display text-lg font-semibold">{{ t(o.title) }}</span>
              <ArrowRight class="h-4 w-4 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </RouterLink>
          </li>
        </ul>
        <RouterLink v-reveal to="/services" class="btn btn-ghost mt-8">
          {{ t(ui.allServices) }}<ArrowRight class="h-4 w-4" />
        </RouterLink>
      </div>

      <div>
        <SectionHeading :title="t(why.title)" line="m5" />
        <!-- What the team gets: stops along the purple line -->
        <ol class="relative mt-10">
          <span class="absolute bottom-3 left-[9px] top-3 w-[6px] rounded-full bg-m5" aria-hidden="true" />
          <li v-for="(a, i) in advantages" :key="i" v-reveal="i * 60" class="relative pb-7 pl-12 last:pb-0">
            <span class="absolute left-0 top-0.5 h-6 w-6 rounded-full border-[4px] border-foreground bg-surface" aria-hidden="true" />
            <h3 class="font-display text-lg font-bold leading-snug">{{ t(a.title) }}</h3>
            <p class="mt-1 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">{{ t(a.description) }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
