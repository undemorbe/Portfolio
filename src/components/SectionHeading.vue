<script setup lang="ts">
import type { LineId } from "@/data";

/**
 * Section title set like a station sign: a line-coloured stop on a short
 * stretch of track, then the title. The track draws in when revealed.
 */
withDefaults(
  defineProps<{
    title: string;
    description?: string;
    line?: LineId;
    align?: "left" | "center";
  }>(),
  { line: "m1", align: "left" }
);
</script>

<template>
  <div v-reveal class="max-w-3xl" :class="align === 'center' && 'mx-auto text-center'" :style="{ '--line': `var(--${line})` }">
    <svg
      class="mb-5 h-4 w-20 overflow-visible"
      :class="align === 'center' && 'mx-auto'"
      viewBox="0 0 80 16"
      aria-hidden="true"
    >
      <path d="M2 8 H78" class="draw-line" style="--len: 80" stroke="hsl(var(--line))" stroke-width="5" stroke-linecap="round" fill="none" />
      <circle cx="40" cy="8" r="6" fill="hsl(var(--surface))" stroke="hsl(var(--foreground))" stroke-width="3" />
    </svg>
    <h2 class="text-balance font-display text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em]">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-5 max-w-[60ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
      :class="align === 'center' && 'mx-auto'"
    >
      {{ description }}
    </p>
  </div>
</template>
