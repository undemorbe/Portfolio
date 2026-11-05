<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { ArrowUpRight } from "lucide-vue-next";
import { experience, sections } from "@/data";
import { t, tl } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";
import LineRoundel from "@/components/metro/LineRoundel.vue";

const s = sections.experience;
const track = ref<HTMLElement | null>(null);
const items = ref<HTMLElement[]>([]);
const progress = ref(0);
const current = ref(0);

let raf = 0;
function measure() {
  raf = 0;
  const el = track.value;
  if (!el) return;
  const r = el.getBoundingClientRect();
  const mid = window.innerHeight * 0.5;
  progress.value = Math.min(1, Math.max(0, (mid - r.top) / r.height));
  let idx = 0;
  items.value.forEach((node, i) => {
    if (node.getBoundingClientRect().top < mid) idx = i;
  });
  current.value = idx;
}
function onScroll() {
  if (!raf) raf = requestAnimationFrame(measure);
}
onMounted(() => {
  measure();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
  cancelAnimationFrame(raf);
});

const trainLine = computed(() => experience[current.value]?.line ?? "m1");
</script>

<template>
  <section id="experience" class="section relative scroll-mt-16">
    <div class="container">
      <SectionHeading :title="t(s.title)" :description="s.description ? t(s.description) : undefined" line="m4" />

      <ol ref="track" class="relative mt-16">
        <!-- The track: grey rail, coloured where the train has passed -->
        <span class="absolute bottom-3 left-[11px] top-3 w-[6px] rounded-full bg-border md:left-[calc(11rem+11px)]" aria-hidden="true" />
        <span
          class="absolute left-[11px] top-3 w-[6px] origin-top rounded-full bg-foreground md:left-[calc(11rem+11px)]"
          :style="{ height: `calc((100% - 1.5rem) * ${progress})` }"
          aria-hidden="true"
        />
        <!-- The train -->
        <span
          class="train absolute left-[3px] z-10 md:left-[calc(11rem+3px)]"
          :style="{ top: `calc(0.75rem + (100% - 1.5rem) * ${progress})`, '--line': `var(--${trainLine})` }"
          aria-hidden="true"
        >
          <svg viewBox="0 0 22 44" class="h-11 w-[22px] -translate-y-1/2 drop-shadow-md">
            <rect x="1" y="1" width="20" height="42" rx="10" fill="hsl(var(--line))" stroke="hsl(var(--foreground))" stroke-width="2" />
            <rect x="5" y="9" width="12" height="7" rx="3" fill="hsl(var(--surface))" />
            <rect x="5" y="20" width="12" height="5" rx="2" fill="hsl(var(--surface))" opacity="0.7" />
            <rect x="5" y="28" width="12" height="5" rx="2" fill="hsl(var(--surface))" opacity="0.7" />
            <circle cx="11" cy="39" r="2" fill="#ffd66b" />
          </svg>
        </span>

        <li
          v-for="(job, i) in experience"
          :key="i"
          ref="items"
          class="relative grid gap-3 pb-12 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-0"
          :style="{ '--line': `var(--${job.line})` }"
        >
          <div class="hidden pr-8 pt-1 text-right md:block">
            <div class="font-mono text-sm font-semibold tabular">{{ t(job.period) }}</div>
            <div v-if="t(job.duration)" class="mt-1 font-mono text-xs text-muted-foreground">{{ t(job.duration) }}</div>
          </div>

          <div class="relative pl-12 md:pl-12">
            <span
              class="absolute left-0 top-1 h-7 w-7 rounded-full border-[4px] border-foreground transition-[background-color,transform] duration-500 md:-left-0"
              :class="i <= current ? 'scale-110 line-bg' : 'bg-surface'"
              aria-hidden="true"
            />
            <div v-reveal class="max-w-[68ch]">
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 class="font-display text-2xl font-bold tracking-[-0.02em]">
                  <a v-if="job.url" :href="job.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 hover:underline">
                    {{ job.company }}<ArrowUpRight class="h-4 w-4" />
                  </a>
                  <template v-else>{{ job.company }}</template>
                </h3>
                <LineRoundel :line="job.line" size="sm" />
              </div>
              <p class="mt-1 text-sm">
                <span class="font-semibold">{{ t(job.role) }}</span>
                <span class="text-muted-foreground"> · {{ t(job.location) }}</span>
              </p>
              <p class="mt-1 font-mono text-xs text-muted-foreground md:hidden">
                {{ t(job.period) }}<template v-if="t(job.duration)"> · {{ t(job.duration) }}</template>
              </p>
              <p class="mt-3 leading-relaxed">{{ t(job.summary) }}</p>
              <ul class="mt-3 space-y-1.5">
                <li v-for="p in tl(job.points)" :key="p" class="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span class="mt-2 h-1.5 w-3 flex-shrink-0 rounded-full line-bg" aria-hidden="true" />
                  {{ p }}
                </li>
              </ul>
              <ul class="mt-4 flex flex-wrap gap-1.5">
                <li v-for="tag in job.tags" :key="tag" class="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{{ tag }}</li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.train svg rect:first-child {
  transition: fill 0.5s ease;
}
</style>
