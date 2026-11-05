<script setup lang="ts">
import { computed } from "vue";
import { announcements, ui } from "@/data";
import { t } from "@/i18n";

/** Carriage LED board: the route's stops, announced one after another. Always a dark board with lit amber type. */
const items = computed(() => announcements.map((a) => t(a)));
const prefix = computed(() => t(ui.nextStation));
</script>

<template>
  <div class="led relative overflow-hidden rounded-full py-3" role="marquee" :aria-label="items.map((i) => `${prefix}: ${i}`).join('. ')">
    <div class="led-cap pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center gap-2 pl-5 pr-4 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] sm:text-xs">
      <span class="h-2 w-2 animate-blink rounded-full bg-current" />
      <span class="hidden sm:inline">{{ prefix }}</span>
    </div>
    <div class="flex w-max animate-marquee gap-12 pl-12 font-mono text-sm motion-reduce:animate-none sm:pl-56 sm:text-[0.95rem]" aria-hidden="true">
      <template v-for="n in 2" :key="n">
        <span v-for="(item, i) in items" :key="`${n}-${i}`" class="flex items-center gap-12 whitespace-nowrap">
          <span><span class="sm:hidden">{{ prefix }}: </span>{{ item }}</span>
          <svg viewBox="0 0 12 12" class="led-dot h-3 w-3"><circle cx="6" cy="6" r="4" fill="none" stroke="currentColor" stroke-width="2.5" /></svg>
        </span>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* Fixed board colours: an LED panel is dark glass in daylight and at night alike */
.led {
  --led-ground: 222 32% 8%;
  background: hsl(var(--led-ground));
  color: hsl(38 100% 64%);
  text-shadow: 0 0 10px hsl(38 100% 60% / 0.45);
  box-shadow: inset 0 0 0 1px hsl(0 0% 100% / 0.06);
}
.led-cap {
  background: hsl(var(--led-ground));
  color: hsl(22 95% 62%);
}
.led-dot {
  color: hsl(349 90% 62%);
}
</style>
