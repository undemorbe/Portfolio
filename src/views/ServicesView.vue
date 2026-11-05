<script setup lang="ts">
import { onMounted } from "vue";
import { ArrowLeft, Send, Mail } from "lucide-vue-next";
import { serviceOfferings, servicesPage, site, ui, lineById } from "@/data";
import { t, tl } from "@/i18n";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import LineRoundel from "@/components/metro/LineRoundel.vue";

onMounted(() => {
  document.title = "Услуги - Борис Станьков";
});
</script>

<template>
  <Navbar />
  <main id="main" class="pt-28 sm:pt-32">
    <section class="container">
      <RouterLink to="/" class="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
        <ArrowLeft class="h-4 w-4" />{{ t(servicesPage.back) }}
      </RouterLink>
      <SectionHeading :title="t(servicesPage.title)" :description="t(servicesPage.intro)" line="m2" />
    </section>

    <section class="section pt-16 sm:pt-20">
      <div class="container">
        <ol class="relative">
          <li
            v-for="(o, i) in serviceOfferings"
            :key="i"
            v-reveal
            class="grid gap-6 border-t border-border py-10 md:grid-cols-[4rem_1fr_1fr] md:gap-10"
            :style="{ '--line': `var(--${o.line})` }"
          >
            <LineRoundel :line="o.line" size="lg" />
            <div>
              <p class="text-sm font-semibold line-text">{{ t(lineById[o.line].name) }}</p>
              <h2 class="mt-1 font-display text-3xl font-bold tracking-[-0.02em]">{{ t(o.title) }}</h2>
              <p class="mt-3 max-w-[52ch] text-pretty leading-relaxed text-muted-foreground">{{ t(o.description) }}</p>
            </div>
            <div>
              <p class="text-sm font-semibold">{{ t(servicesPage.included) }}</p>
              <ul class="mt-3 space-y-2.5">
                <li v-for="b in tl(o.bullets)" :key="b" class="flex gap-3 leading-relaxed">
                  <span class="mt-2 h-2 w-4 flex-shrink-0 rounded-full line-bg" aria-hidden="true" />{{ b }}
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="section pt-0">
      <div class="container">
        <div v-reveal class="relative overflow-hidden rounded-[2rem] bg-foreground p-8 text-background sm:p-14">
          <h2 class="max-w-2xl text-balance font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{{ t(servicesPage.ctaTitle) }}</h2>
          <p class="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/70">{{ t(servicesPage.ctaText) }}</p>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a :href="site.telegramUrl" target="_blank" rel="noopener noreferrer" class="btn h-14 bg-m1 px-7 text-base text-white hover:-translate-y-0.5">
              <Send class="h-5 w-5" />{{ t(ui.messageTg) }}
            </a>
            <a :href="`mailto:${site.email}`" class="btn h-14 border-2 border-background/40 px-6 hover:border-background">
              <Mail class="h-4 w-4" />{{ site.email }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
