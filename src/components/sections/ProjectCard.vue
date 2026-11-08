<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { Github, ArrowUpRight, Plus } from "lucide-vue-next";
import type { Project } from "@/data";
import { ui } from "@/data";
import { t, tl } from "@/i18n";
import { focusedStation } from "@/lib/stationFocus";
import { goal } from "@/lib/analytics";
import LineRoundel from "@/components/metro/LineRoundel.vue";

const props = defineProps<{ project: Project; wide?: boolean }>();
const open = ref(false);
const flash = ref(false);

const blocks = computed(() =>
  [
    { label: t(ui.problem), body: t(props.project.problem) },
    { label: t(ui.solution), body: t(props.project.solution) },
    props.project.architecture ? { label: t(ui.architecture), body: t(props.project.architecture) } : null,
  ].filter(Boolean) as { label: string; body: string }[]
);

function toggle() {
  open.value = !open.value;
  if (open.value) goal("project_breakdown", { slug: props.project.slug });
}

function focusMe() {
  open.value = true;
  flash.value = false;
  requestAnimationFrame(() => (flash.value = true));
  setTimeout(() => (flash.value = false), 1600);
}
watch(focusedStation, (slug) => {
  if (slug === props.project.slug) {
    focusMe();
    setTimeout(() => (focusedStation.value = null), 50);
  }
});
onMounted(() => {
  if (focusedStation.value === props.project.slug) focusMe();
});
</script>

<template>
  <article
    :id="`station-${project.slug}`"
    class="sign group relative flex scroll-mt-28 flex-col overflow-hidden transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-foreground/40"
    :class="[wide && 'md:col-span-2', flash && 'is-flash']"
  >
    <!-- Line stripes: one per line serving this station -->
    <div class="flex h-2" aria-hidden="true">
      <span v-for="l in project.lines" :key="l" class="flex-1" :class="`bg-${l}`" />
    </div>

    <div class="flex flex-1 flex-col p-6 sm:p-7" :class="wide && 'md:grid md:grid-cols-[1.1fr_1fr] md:gap-10'">
      <div class="flex flex-col">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center -space-x-1.5">
            <LineRoundel v-for="l in project.lines" :key="l" :line="l" size="sm" class="rounded-full ring-2 ring-surface" />
          </div>
          <span class="font-mono text-xs text-muted-foreground tabular">{{ project.year }}</span>
        </div>

        <h3 class="mt-4 font-display text-[1.75rem] font-bold leading-tight tracking-[-0.02em]" :class="wide && 'md:text-4xl'">
          {{ project.name }}
        </h3>
        <p class="mt-1 text-sm font-medium text-muted-foreground">{{ t(project.status) }}</p>

        <p class="mt-4 max-w-[60ch] text-pretty leading-relaxed">{{ t(project.tagline) }}</p>

        <p v-if="project.metric" class="mt-5 flex items-baseline gap-3 border-l-[3px] pl-3" :style="{ borderColor: `hsl(var(--${project.lines[0]}))` }">
          <span class="font-display text-3xl font-extrabold tabular leading-none tracking-[-0.03em]">{{ project.metric.value }}</span>
          <span class="text-sm leading-snug text-muted-foreground">{{ t(project.metric.label) }}</span>
        </p>

        <ul class="mt-5 flex flex-wrap gap-1.5" :aria-label="t(ui.stack)">
          <li v-for="s in project.stack" :key="s" class="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted-foreground">{{ s }}</li>
        </ul>

        <div class="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <a v-if="project.liveUrl" :href="project.liveUrl" data-goal="project_live" target="_blank" rel="noopener noreferrer" class="btn btn-primary h-10 px-4 text-sm">
            {{ t(ui.live) }}<ArrowUpRight class="h-4 w-4" />
          </a>
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="btn h-10 border border-border px-4 text-sm hover:border-foreground">
            <Github class="h-4 w-4" />{{ t(ui.code) }}
          </a>
          <button
            type="button"
            class="btn ml-auto h-10 px-3 text-sm text-muted-foreground hover:text-foreground"
            :aria-expanded="open"
            :aria-controls="`breakdown-${project.slug}`"
            @click="toggle"
          >
            {{ open ? t(ui.collapse) : t(ui.expand) }}
            <span class="grid h-6 w-6 place-items-center rounded-full border border-current transition-transform duration-500" :class="open && 'rotate-[135deg]'">
              <Plus class="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>

      <!-- Breakdown -->
      <div
        :id="`breakdown-${project.slug}`"
        class="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        :class="[open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0', wide && 'md:grid-rows-[1fr] md:opacity-100']"
      >
        <div class="overflow-hidden">
          <div class="mt-6 space-y-5 border-t border-dashed border-border pt-6" :class="wide && 'md:mt-0 md:border-l md:border-t-0 md:pl-10 md:pt-0'">
            <div v-for="b in blocks" :key="b.label">
              <h4 class="font-display text-sm font-bold">{{ b.label }}</h4>
              <p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{{ b.body }}</p>
            </div>
            <div>
              <h4 class="font-display text-sm font-bold">{{ t(ui.highlights) }}</h4>
              <ul class="mt-2 space-y-2">
                <li v-for="h in tl(project.highlights)" :key="h" class="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <svg viewBox="0 0 12 12" class="mt-1 h-3 w-3 flex-shrink-0" aria-hidden="true"><circle cx="6" cy="6" r="4" fill="hsl(var(--surface))" stroke="hsl(var(--foreground))" stroke-width="2" /></svg>
                  {{ h }}
                </li>
              </ul>
            </div>
            <div v-if="project.results">
              <h4 class="font-display text-sm font-bold">{{ t(ui.results) }}</h4>
              <ul class="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li v-for="r in tl(project.results)" :key="r">{{ r }}</li>
              </ul>
            </div>
            <div v-if="project.learned">
              <h4 class="font-display text-sm font-bold">{{ t(ui.learned) }}</h4>
              <p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{{ t(project.learned) }}</p>
            </div>
            <p v-if="project.note" class="rounded-xl border border-dashed border-border p-3 text-sm text-muted-foreground">{{ t(project.note) }}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.is-flash {
  animation: station-flash 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes station-flash {
  0% {
    box-shadow: 0 0 0 0 hsl(var(--m1) / 0.7);
    border-color: hsl(var(--m1));
  }
  100% {
    box-shadow: 0 0 0 18px hsl(var(--m1) / 0);
  }
}
</style>
