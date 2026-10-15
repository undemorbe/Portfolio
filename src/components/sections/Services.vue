<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { services, sections, ui } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.services;
</script>

<template>
  <section id="services" class="section-padding relative bg-muted/20">
    <div class="container">
      <SectionHeading
        index="07"
        :eyebrow="t(s.eyebrow)"
        :title="t(s.title)"
        :description="s.description ? t(s.description) : undefined"
      />

      <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(item, i) in services" :key="i" v-reveal="(i % 3) * 50" class="group card-surface h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/12 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <component :is="item.icon" class="h-5 w-5" />
          </div>
          <h3 class="mt-5 font-semibold tracking-tight">{{ t(item.title) }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ t(item.description) }}</p>
        </div>
      </div>

      <div v-reveal="60" class="mt-10 flex justify-center">
        <RouterLink
          to="/services"
          class="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          {{ t(ui.allServices) }}
          <ArrowRight class="h-4 w-4" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
