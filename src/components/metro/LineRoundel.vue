<script setup lang="ts">
import { computed } from "vue";
import type { LineId } from "@/data";
import { lineById } from "@/data";
import { t } from "@/i18n";

/** Metro line badge: a coloured disc with the line number. */
const props = withDefaults(defineProps<{ line: LineId; size?: "sm" | "md" | "lg"; withName?: boolean }>(), {
  size: "md",
  withName: false,
});
const l = computed(() => lineById[props.line]);
const dim = computed(() => ({ sm: "h-5 w-5 text-[0.65rem]", md: "h-7 w-7 text-xs", lg: "h-10 w-10 text-base" })[props.size]);
</script>

<template>
  <span class="inline-flex items-center gap-2" :style="{ '--line': `var(--${line})` }">
    <span
      class="line-bg inline-flex flex-shrink-0 items-center justify-center rounded-full font-display font-bold text-white tabular"
      :class="dim"
      :title="t(l.name)"
      aria-hidden="true"
    >{{ l.code }}</span>
    <span v-if="withName" class="font-display font-semibold">{{ t(l.name) }}</span>
    <span v-else class="sr-only">{{ t(l.name) }}</span>
  </span>
</template>
