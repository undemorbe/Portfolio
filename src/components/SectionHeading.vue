<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    description?: string;
    index?: string;
    align?: "left" | "center";
  }>(),
  { align: "left" }
);
</script>

<template>
  <div class="max-w-3xl" :class="align === 'center' && 'mx-auto text-center'">
    <div
      v-if="eyebrow"
      v-reveal
      class="mb-5 flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent"
      :class="align === 'center' && 'justify-center'"
    >
      <span v-if="index" class="text-muted-foreground/50">{{ index }}</span>
      <span class="h-px w-6 translate-y-[-3px] bg-accent/50" aria-hidden="true" />
      <span>{{ eyebrow }}</span>
    </div>
    <h2
      v-reveal="60"
      class="text-balance font-semibold tracking-tight text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05]"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      v-reveal="120"
      class="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
