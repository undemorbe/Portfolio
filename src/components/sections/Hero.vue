<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";
import { ArrowDown, FileText, Github, Linkedin, Send } from "lucide-vue-next";
import { heroStats, lines, site, ui } from "@/data";
import { lang, t } from "@/i18n";
import { scrollToHash } from "@/lib/scroll";
import { asset } from "@/lib/asset";
import { goToLine, goToStation } from "@/lib/stationFocus";
import MetroSchemeSvg from "@/components/metro/MetroSchemeSvg.vue";
import LineRoundel from "@/components/metro/LineRoundel.vue";
import LedBoard from "@/components/metro/LedBoard.vue";

const MetroScene = defineAsyncComponent(() => import("@/components/metro/MetroScene.vue"));

const displayName = computed(() => (lang.value === "ru" ? site.nameRu : site.name).split(" "));

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const webgl = (() => {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
})();
const use3d = webgl && !reduce;
const sceneReady = ref(false);
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-24 sm:pt-32">
    <div class="container">
      <!-- Phone order: name → map → pitch. Desktop: copy left, map right across both rows. -->
      <div class="grid items-center gap-x-6 gap-y-6 lg:grid-cols-12 lg:gap-y-0">
        <div class="relative z-10 lg:col-span-5 lg:row-start-1 lg:self-end">
          <h1 class="font-display text-[clamp(3rem,8.4vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
            <span v-for="(word, i) in displayName" :key="word" class="hero-in block" :style="{ '--d': `${i * 90}ms` }">{{ word }}</span>
          </h1>

          <p class="hero-in mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-5" style="--d: 200ms">
            <span class="font-display text-xl font-semibold sm:text-2xl">{{ t(site.role) }}</span>
            <span class="flex items-center gap-1" aria-hidden="true">
              <span v-for="l in lines" :key="l.id" class="h-2 w-5 rounded-full" :class="`bg-${l.id}`" />
            </span>
            <span class="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span class="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-m3" />
                <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-m3" />
              </span>
              {{ t(ui.openToWork) }}
            </span>
          </p>
        </div>

        <!-- Map -->
        <div class="relative lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
          <div class="relative -mx-5 aspect-[5/4] w-[calc(100%+2.5rem)] max-w-[860px] sm:mx-auto sm:aspect-[4/3] sm:w-full lg:-mr-10 lg:aspect-[16/10] xl:-mr-16">
            <div class="absolute inset-0 grid place-items-center transition-opacity duration-700" :class="use3d && sceneReady ? 'opacity-0' : 'opacity-100'">
              <MetroSchemeSvg :labels="true" @select="goToStation" />
            </div>
            <MetroScene v-if="use3d" class="scene-fade absolute inset-0 transition-opacity duration-700" :class="sceneReady ? 'opacity-100' : 'opacity-0'" @ready="sceneReady = true" @select="goToStation" />
          </div>

          <div class="-mt-2 flex flex-col items-center gap-3 lg:-mr-10 lg:-mt-12 xl:-mr-16">
            <p class="text-center text-sm text-muted-foreground">{{ t(ui.sceneHint) }}</p>
            <ul class="flex flex-wrap justify-center gap-2">
              <li v-for="l in lines" :key="l.id">
                <button
                  type="button"
                  class="inline-flex h-10 items-center rounded-full border border-border bg-surface pl-1.5 pr-3.5 text-sm transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-foreground"
                  @click="goToLine(l.id)"
                >
                  <LineRoundel :line="l.id" :with-name="true" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="relative z-10 pt-4 lg:col-span-5 lg:row-start-2 lg:self-start lg:pt-0">
          <p class="hero-in mt-0 max-w-[46ch] text-pretty text-lg leading-relaxed text-muted-foreground lg:mt-6" style="--d: 300ms">
            {{ t(site.tagline) }}
          </p>

          <dl class="hero-in mt-7 grid max-w-[34rem] grid-cols-3 gap-4 border-y border-border py-4" style="--d: 340ms">
            <div v-for="s in heroStats" :key="s.value">
              <dt class="sr-only">{{ t(s.label) }}</dt>
              <dd class="font-display text-2xl font-extrabold tabular leading-none tracking-[-0.02em] sm:text-3xl">{{ s.value }}</dd>
              <dd class="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-[0.8125rem]" aria-hidden="true">{{ t(s.label) }}</dd>
            </div>
          </dl>

          <div class="hero-in mt-7 flex flex-wrap items-center gap-3" style="--d: 380ms">
            <a :href="site.telegramUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <Send class="h-4 w-4" />
              {{ t(ui.messageTg) }}
            </a>
            <a href="#projects" class="btn btn-ghost" @click.prevent="scrollToHash('#projects')">
              {{ t(ui.viewProjects) }}
              <ArrowDown class="h-4 w-4" />
            </a>
          </div>

          <div class="hero-in mt-6 flex flex-wrap items-center gap-1 text-muted-foreground" style="--d: 460ms">
            <a :href="site.githubUrl" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-surface-2 hover:text-foreground"><Github class="h-5 w-5" /></a>
            <a :href="site.linkedinUrl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-surface-2 hover:text-foreground"><Linkedin class="h-5 w-5" /></a>
            <a :href="asset(t(site.resumePdf))" data-goal="resume" target="_blank" rel="noopener noreferrer" class="inline-flex h-11 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors hover:bg-surface-2 hover:text-foreground"><FileText class="h-4 w-4" />{{ t(ui.resume) }}</a>
            <a :href="`mailto:${site.email}`" class="ml-2 text-sm underline decoration-border hover:text-foreground hover:decoration-m1">{{ site.email }}</a>
          </div>
        </div>
      </div>

      <div class="hero-in mt-12 sm:mt-14" style="--d: 600ms">
        <LedBoard />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-in {
  animation: hero-rise 1s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--d, 0ms);
}
@keyframes hero-rise {
  from {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(6px);
  }
}
/* soften the canvas edge so the river and lines dissolve instead of being sliced */
.scene-fade {
  -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
}
@media (prefers-reduced-motion: reduce) {
  .hero-in {
    animation: none;
  }
}
</style>
