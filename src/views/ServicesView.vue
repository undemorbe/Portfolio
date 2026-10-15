<script setup lang="ts">
import { onMounted } from "vue";
import { ArrowLeft, Send, Mail, Check } from "lucide-vue-next";
import { serviceOfferings, servicesPage, site, ui } from "@/data";
import { t, tl } from "@/i18n";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SectionHeading from "@/components/SectionHeading.vue";

onMounted(() => {
  document.title = "Услуги — Services — Boris Stankov";
});
</script>

<template>
  <Navbar />
  <main class="pt-32 sm:pt-36">
    <!-- Header -->
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div class="absolute left-[10%] top-[-20%] h-[380px] w-[560px] rounded-full bg-accent/10 blur-[130px]" />
      </div>
      <div class="container">
        <RouterLink to="/" class="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft class="h-4 w-4" />
          {{ t(servicesPage.back) }}
        </RouterLink>
        <SectionHeading :eyebrow="t(servicesPage.eyebrow)" :title="t(servicesPage.title)" :description="t(servicesPage.intro)" />
      </div>
    </section>

    <!-- Offerings -->
    <section class="section-padding pt-16 sm:pt-20">
      <div class="container">
        <div class="grid gap-5 md:grid-cols-2">
          <div v-for="(o, i) in serviceOfferings" :key="i" v-reveal="(i % 2) * 60" class="card-surface flex h-full flex-col p-7 transition-colors hover:border-accent/30 sm:p-8">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
              <component :is="o.icon" class="h-6 w-6" />
            </div>
            <h3 class="mt-5 text-xl font-semibold tracking-tight">{{ t(o.title) }}</h3>
            <p class="mt-2 text-pretty leading-relaxed text-muted-foreground">{{ t(o.description) }}</p>

            <div class="mt-6 border-t border-border pt-5">
              <div class="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground/70">{{ t(servicesPage.included) }}</div>
              <ul class="space-y-2.5">
                <li v-for="b in tl(o.bullets)" :key="b" class="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" :stroke-width="2.5" />
                  {{ b }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding pt-0">
      <div class="container">
        <div v-reveal class="glass relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-14">
          <h2 class="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{{ t(servicesPage.ctaTitle) }}</h2>
          <p class="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{{ t(servicesPage.ctaText) }}</p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a :href="site.telegramUrl" target="_blank" rel="noopener noreferrer" class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground shadow-[0_10px_40px_-14px_hsl(var(--accent)/0.7)] transition-transform hover:-translate-y-0.5">
              <Send class="h-4 w-4" />
              {{ t(ui.messageTg) }}
            </a>
            <a :href="`mailto:${site.email}`" class="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 text-sm font-medium transition-colors hover:bg-muted">
              <Mail class="h-4 w-4" />
              {{ site.email }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
