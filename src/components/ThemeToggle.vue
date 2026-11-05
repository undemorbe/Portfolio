<script setup lang="ts">
import { theme, toggleTheme } from "@/lib/theme";
import { ui } from "@/data";
import { t } from "@/i18n";

/** Sun ↔ moon: the moon's shadow slides over the disc, the rays retract. */
</script>

<template>
  <button
    type="button"
    class="group grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-foreground"
    :aria-label="theme === 'dark' ? t(ui.dayScheme) : t(ui.nightScheme)"
    :title="theme === 'dark' ? t(ui.dayScheme) : t(ui.nightScheme)"
    @click="toggleTheme"
  >
    <svg viewBox="0 0 24 24" class="h-5 w-5 overflow-visible" :class="theme === 'dark' && 'is-night'" aria-hidden="true">
      <mask id="moon-mask">
        <rect x="-4" y="-4" width="32" height="32" fill="white" />
        <circle class="moon-shadow" cx="30" cy="2" r="8" fill="black" />
      </mask>
      <circle class="disc" cx="12" cy="12" r="5" fill="currentColor" mask="url(#moon-mask)" />
      <g class="rays" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="12" y1="1.5" x2="12" y2="3.5" />
        <line x1="12" y1="20.5" x2="12" y2="22.5" />
        <line x1="1.5" y1="12" x2="3.5" y2="12" />
        <line x1="20.5" y1="12" x2="22.5" y2="12" />
        <line x1="4.6" y1="4.6" x2="6" y2="6" />
        <line x1="18" y1="18" x2="19.4" y2="19.4" />
        <line x1="4.6" y1="19.4" x2="6" y2="18" />
        <line x1="18" y1="6" x2="19.4" y2="4.6" />
      </g>
    </svg>
  </button>
</template>

<style scoped>
.disc,
.moon-shadow,
.rays {
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
  transform-origin: 12px 12px;
}
.is-night .disc {
  transform: scale(1.7);
}
.is-night .moon-shadow {
  transform: translate(-13px, 5px);
}
.is-night .rays {
  transform: rotate(-90deg) scale(0.4);
  opacity: 0;
}
.group:hover .rays {
  transform: rotate(45deg);
}
.group:hover .is-night .rays,
.is-night.group:hover .rays {
  transform: rotate(-90deg) scale(0.4);
}
</style>
