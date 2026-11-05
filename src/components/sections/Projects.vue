<script setup lang="ts">
import { computed } from "vue";
import { Github } from "lucide-vue-next";
import { lines, projects, site, sections, ui } from "@/data";
import type { LineId } from "@/data";
import { t } from "@/i18n";
import { activeLine } from "@/lib/stationFocus";
import { goal } from "@/lib/analytics";
import SectionHeading from "@/components/SectionHeading.vue";
import LineRoundel from "@/components/metro/LineRoundel.vue";
import ProjectCard from "./ProjectCard.vue";

const s = sections.projects;

const counts = computed(() => {
  const c: Record<string, number> = { all: projects.length };
  for (const l of lines) c[l.id] = projects.filter((p) => p.lines.includes(l.id)).length;
  return c;
});
const visible = computed(() =>
  activeLine.value === "all" ? projects : projects.filter((p) => p.lines.includes(activeLine.value as LineId))
);
</script>

<template>
  <section id="projects" class="section relative scroll-mt-16 bg-surface-2/50">
    <div class="container">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading :title="t(s.title)" :description="s.description ? t(s.description) : undefined" line="m2" />
        <a
          v-reveal="120"
          :href="site.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn flex-shrink-0 self-start border border-border bg-surface px-5 text-sm hover:border-foreground lg:self-auto"
        >
          <Github class="h-4 w-4" />{{ t(ui.viewOnGithub) }}
        </a>
      </div>

      <!-- Line filter -->
      <div v-reveal class="mt-10 -mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0" role="toolbar" :aria-label="t(s.title)">
        <div class="flex w-max gap-2">
          <button
            type="button"
            class="chip"
            :class="activeLine === 'all' && 'is-on'"
            :aria-pressed="activeLine === 'all'"
            @click="activeLine = 'all'"
          >
            {{ t(ui.allLines) }}
            <span class="count">{{ counts.all }}</span>
          </button>
          <button
            v-for="l in lines"
            :key="l.id"
            type="button"
            class="chip pl-1.5"
            :class="activeLine === l.id && 'is-on'"
            :aria-pressed="activeLine === l.id"
            :style="{ '--line': `var(--${l.id})` }"
            @click="activeLine = l.id; goal('line_filter', { line: l.id, from: 'chips' })"
          >
            <LineRoundel :line="l.id" size="md" :with-name="true" />
            <span class="count">{{ counts[l.id] }}</span>
          </button>
        </div>
      </div>

      <TransitionGroup tag="div" name="station" class="relative mt-8 grid gap-5 md:grid-cols-2">
        <ProjectCard v-for="(p, i) in visible" :key="p.slug" :project="p" :wide="i === 0 && activeLine === 'all'" />
      </TransitionGroup>
      <p v-if="!visible.length" class="mt-8 text-muted-foreground">{{ t(ui.emptyFilter) }}</p>
    </div>
  </section>
</template>

<style scoped>
.chip {
  @apply inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-300;
}
.chip:hover {
  @apply border-foreground;
}
.chip:active {
  transform: scale(0.96);
}
.chip.is-on {
  @apply border-foreground bg-foreground text-background;
}
.count {
  @apply rounded-full bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted-foreground;
}
.chip.is-on .count {
  @apply bg-background/20 text-background;
}

.station-move,
.station-enter-active,
.station-leave-active {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}
.station-enter-from {
  opacity: 0;
  transform: translateY(24px) scale(0.96);
}
.station-leave-to {
  opacity: 0;
  transform: scale(0.94);
}
.station-leave-active {
  position: absolute;
  width: calc(50% - 0.625rem);
}
@media (max-width: 767px) {
  .station-leave-active {
    width: 100%;
  }
}
</style>
