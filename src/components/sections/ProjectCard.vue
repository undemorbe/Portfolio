<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Github,
  ArrowUpRight,
  ChevronDown,
  Target,
  Lightbulb,
  Layers,
  Cpu,
  TrendingUp,
  GraduationCap,
  Info,
} from "lucide-vue-next";
import type { Project } from "@/data";
import { ui } from "@/data";
import { t, tl } from "@/i18n";
import Badge from "@/components/Badge.vue";

const props = defineProps<{ project: Project; index: number }>();
const open = ref(false);

const detailBlocks = computed(() => [
  { icon: Target, label: t(ui.problem), body: t(props.project.problem) },
  { icon: Lightbulb, label: t(ui.solution), body: t(props.project.solution) },
  { icon: Layers, label: t(ui.architecture), body: t(props.project.architecture) },
]);
</script>

<template>
  <article
    v-reveal="(index % 2) * 80"
    class="group relative overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/40"
  >
    <div
      class="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      aria-hidden="true"
    />

    <div class="relative p-7 sm:p-8">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div class="flex items-center gap-3">
            <h3 class="text-2xl font-semibold tracking-tight">{{ project.name }}</h3>
            <Badge v-if="project.featured" variant="accent">Featured</Badge>
          </div>
          <div class="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>{{ project.year }}</span>
            <span class="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>{{ t(project.status) }}</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" :aria-label="`${project.name} — GitHub`" class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-muted">
            <Github class="h-4 w-4" />
          </a>
          <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" :aria-label="`${project.name} — site`" class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-muted">
            <ArrowUpRight class="h-4 w-4" />
          </a>
        </div>
      </div>

      <p class="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{{ t(project.tagline) }}</p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span v-for="s in project.stack" :key="s" class="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground">{{ s }}</span>
      </div>

      <button
        type="button"
        @click="open = !open"
        :aria-expanded="open"
        class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:brightness-110"
      >
        {{ open ? t(ui.collapse) : t(ui.expand) }}
        <ChevronDown class="h-4 w-4 transition-transform duration-300" :class="open && 'rotate-180'" />
      </button>

      <!-- Expandable breakdown (grid-rows height animation) -->
      <div class="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]" :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
        <div class="overflow-hidden">
          <div class="mt-6 space-y-6 border-t border-border pt-6">
            <div class="grid gap-5 sm:grid-cols-3">
              <div v-for="b in detailBlocks" :key="b.label">
                <div class="mb-2 flex items-center gap-2 text-sm font-medium">
                  <component :is="b.icon" class="h-4 w-4 text-accent" />
                  {{ b.label }}
                </div>
                <p class="text-sm leading-relaxed text-muted-foreground">{{ b.body }}</p>
              </div>
            </div>

            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <div class="mb-3 flex items-center gap-2 text-sm font-medium">
                  <Cpu class="h-4 w-4 text-accent" />
                  {{ t(ui.highlights) }}
                </div>
                <ul class="space-y-2.5">
                  <li v-for="h in tl(project.highlights)" :key="h" class="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                    {{ h }}
                  </li>
                </ul>
              </div>
              <div class="space-y-6">
                <div>
                  <div class="mb-3 flex items-center gap-2 text-sm font-medium">
                    <TrendingUp class="h-4 w-4 text-accent" />
                    {{ t(ui.results) }}
                  </div>
                  <ul class="space-y-2.5">
                    <li v-for="r in tl(project.results)" :key="r" class="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                      {{ r }}
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="mb-2 flex items-center gap-2 text-sm font-medium">
                    <GraduationCap class="h-4 w-4 text-accent" />
                    {{ t(ui.learned) }}
                  </div>
                  <p class="text-sm leading-relaxed text-muted-foreground">{{ t(project.learned) }}</p>
                </div>
              </div>
            </div>

            <div v-if="project.note" class="flex items-start gap-2.5 rounded-xl border border-dashed border-border bg-background/40 p-4 text-sm text-muted-foreground">
              <Info class="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span>{{ t(project.note) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
