<script setup lang="ts">
import { computed } from "vue";
import { linePaths, resolveLine, smoothPath, stations, linesAt, river } from "@/lib/metroMap";

/** Flat 2D scheme: instant first paint, reduced-motion and no-WebGL fallback. */
const props = withDefaults(defineProps<{ labels?: boolean; animate?: boolean }>(), {
  labels: true,
  animate: true,
});
const emit = defineEmits<{ select: [slug: string] }>();

const S = 58;
const OX = 420;
const OY = 200;
const px = (x: number) => x * S + OX;
const py = (y: number) => y * S + OY;

const paths = computed(() =>
  linePaths.map((l, i) => ({ id: l.id, d: smoothPath(resolveLine(l), S, OX, OY), delay: i * 140 }))
);
const riverD = smoothPath(river, S, OX, OY);

const stops = computed(() =>
  stations.map((s) => {
    const ls = linesAt(s.slug);
    const offs = ls.map((l) => l.offset);
    const min = Math.min(...offs);
    const max = Math.max(...offs);
    return { ...s, transfer: ls.length > 1, y1: py(s.y + min), y2: py(s.y + max) };
  })
);
</script>

<template>
  <svg viewBox="0 0 840 440" class="h-full w-full" role="img" aria-label="Схема проектов: пять линий и десять станций">
    <path :d="riverD" fill="none" stroke="hsl(var(--surface-2))" stroke-width="64" stroke-linecap="round" />
    <path
      v-for="p in paths"
      :key="p.id"
      :d="p.d"
      fill="none"
      :stroke="`hsl(var(--${p.id}))`"
      stroke-width="9"
      stroke-linecap="round"
      pathLength="1000"
      :class="props.animate && 'draw-line is-drawn'"
      :style="{ '--len': 1000, transitionDelay: `${p.delay}ms` }"
    />
    <g v-for="s in stops" :key="s.slug" class="cursor-pointer" @click="emit('select', s.slug)">
      <rect
        v-if="s.transfer"
        :x="px(s.x) - 9"
        :y="s.y1 - 9"
        width="18"
        :height="s.y2 - s.y1 + 18"
        rx="9"
        fill="hsl(var(--surface))"
        stroke="hsl(var(--foreground))"
        stroke-width="3.5"
      />
      <circle v-else :cx="px(s.x)" :cy="py(s.y)" r="8" fill="hsl(var(--surface))" stroke="hsl(var(--foreground))" stroke-width="3.5" />
      <text
        v-if="labels"
        :x="px(s.x)"
        :y="s.y1 - 16"
        text-anchor="middle"
        class="fill-foreground font-display text-[13px] font-semibold"
      >{{ s.label }}</text>
    </g>
  </svg>
</template>
