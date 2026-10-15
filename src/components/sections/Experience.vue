<script setup lang="ts">
import { experience, sections } from "@/data";
import { t, tl } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.experience;
</script>

<template>
  <section id="experience" class="section-padding relative bg-muted/20">
    <div class="container">
      <SectionHeading
        index="03"
        :eyebrow="t(s.eyebrow)"
        :title="t(s.title)"
        :description="s.description ? t(s.description) : undefined"
      />

      <div class="relative mt-16">
        <div class="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-[calc(180px+7px)]" aria-hidden="true" />

        <div class="space-y-10">
          <div v-for="(job, i) in experience" :key="i" v-reveal="(i % 3) * 60" class="relative grid gap-4 md:grid-cols-[180px_1fr]">
            <div class="hidden pt-0.5 text-right md:block">
              <div class="text-sm font-medium text-foreground">{{ t(job.period) }}</div>
              <div v-if="t(job.duration)" class="mt-1 text-xs text-muted-foreground">{{ t(job.duration) }}</div>
            </div>

            <div class="relative pl-8 md:pl-10">
              <span class="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background" aria-hidden="true">
                <span class="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <div class="card-surface p-6 transition-colors hover:border-accent/30">
                <div class="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 class="text-lg font-semibold tracking-tight">
                    {{ job.company }}
                    <span class="ml-2 text-sm font-normal text-muted-foreground">{{ t(job.location) }}</span>
                  </h3>
                  <span class="text-sm font-medium text-accent">{{ t(job.role) }}</span>
                </div>
                <div class="mt-1 text-xs text-muted-foreground md:hidden">
                  {{ t(job.period) }}<template v-if="t(job.duration)"> · {{ t(job.duration) }}</template>
                </div>

                <p class="mt-3 text-sm leading-relaxed text-muted-foreground">{{ t(job.summary) }}</p>

                <ul class="mt-4 space-y-2">
                  <li v-for="p in tl(job.points)" :key="p" class="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                    {{ p }}
                  </li>
                </ul>

                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="tag in job.tags" :key="tag" class="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
