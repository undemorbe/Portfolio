<script setup lang="ts">
withDefaults(defineProps<{ variant?: "accent" | "muted" }>(), {
  variant: "muted",
});
</script>

<template>
  <span
    class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
    :class="
      variant === 'accent'
        ? 'bg-accent/15 text-accent'
        : 'bg-muted text-muted-foreground'
    "
  >
    <slot />
  </span>
</template>
