<script setup lang="ts">
import { philosophy, process, sections } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.approach;
const colors = ["m1", "m2", "m5", "m1", "m3", "m4", "m2"];
</script>

<template>
  <section id="approach" class="section relative scroll-mt-16 overflow-hidden bg-foreground text-background">
    <div class="container">
      <div class="[&_h2]:text-background [&_p]:text-background/70">
        <SectionHeading :title="t(s.title)" :description="s.description ? t(s.description) : undefined" line="m3" />
      </div>

      <!-- Process: seven stops on one line, a train shuttles along it -->
      <div v-reveal class="relative mt-16">
        <div class="absolute left-0 right-0 top-[18px] hidden h-[6px] rounded-full bg-background/15 lg:block" aria-hidden="true">
          <span class="shuttle absolute top-1/2 h-4 w-12 -translate-y-1/2 rounded-full bg-m4 shadow-[0_0_24px_hsl(var(--m4)/0.7)]" />
        </div>
        <ol class="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
          <li v-for="(step, i) in process" :key="i" class="relative flex gap-4 lg:block" :style="{ '--line': `var(--${colors[i]})` }">
            <span class="relative z-10 grid h-11 w-11 flex-shrink-0 place-items-center rounded-full border-[4px] border-background bg-foreground transition-transform duration-500 hover:scale-110">
              <component :is="step.icon" class="h-4 w-4 line-text" />
            </span>
            <div class="lg:mt-5">
              <h3 class="font-display text-lg font-bold">{{ t(step.title) }}</h3>
              <p class="mt-1 text-sm leading-relaxed text-background/65">{{ t(step.description) }}</p>
            </div>
          </li>
        </ol>
      </div>

      <!-- Principles -->
      <div class="mt-20 grid gap-x-12 gap-y-10 md:grid-cols-2">
        <div v-for="(p, i) in philosophy" :key="i" v-reveal="(i % 2) * 80" class="border-t border-background/15 pt-6">
          <h3 class="font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-balance">{{ t(p.title) }}</h3>
          <p class="mt-3 max-w-[56ch] text-pretty leading-relaxed text-background/70">{{ t(p.body) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shuttle {
  animation: shuttle 9s cubic-bezier(0.65, 0, 0.35, 1) infinite alternate;
}
@keyframes shuttle {
  from {
    left: 0%;
  }
  to {
    left: calc(100% - 3rem);
  }
}
@media (prefers-reduced-motion: reduce) {
  .shuttle {
    animation: none;
  }
}
</style>
