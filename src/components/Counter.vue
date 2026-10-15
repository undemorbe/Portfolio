<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = withDefaults(
  defineProps<{ value: number; suffix?: string; duration?: number }>(),
  { suffix: "", duration: 1200 }
);

const display = ref(0);
const el = ref<HTMLElement | null>(null);

function animate() {
  const start = performance.now();
  const to = props.value;
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / props.duration);
    const eased = 1 - Math.pow(1 - p, 3);
    display.value = Math.round(to * eased);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || typeof IntersectionObserver === "undefined") {
    display.value = props.value;
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          animate();
          io.disconnect();
          break;
        }
      }
    },
    { threshold: 0.4 }
  );
  if (el.value) io.observe(el.value);
});
</script>

<template>
  <span ref="el">{{ display }}{{ suffix }}</span>
</template>
