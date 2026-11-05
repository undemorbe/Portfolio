<script setup lang="ts">
import { goal } from "@/lib/analytics";
import { computed, ref } from "vue";
import { Send, Mail, Phone, Linkedin, Github, FileText, FileUser, ArrowUpRight, Copy, Check } from "lucide-vue-next";
import { site, sections, ui } from "@/data";
import { t } from "@/i18n";
import SectionHeading from "@/components/SectionHeading.vue";

const s = sections.contact;
const copied = ref(false);
const dropped = ref(false);

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(site.email);
    goal("email_copy");
    copied.value = true;
    setTimeout(() => (copied.value = false), 1800);
  } catch {
    window.location.href = `mailto:${site.email}`;
  }
}
function dropToken() {
  dropped.value = false;
  requestAnimationFrame(() => (dropped.value = true));
  setTimeout(() => (dropped.value = false), 2200);
}

const channels = computed(() => [
  { label: "Telegram", value: `@${site.telegram}`, href: site.telegramUrl, icon: Send, line: "m2" },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail, line: "m1" },
  { label: t(ui.phone), value: site.phone, href: site.phoneHref, icon: Phone, line: "m3" },
  { label: "LinkedIn", value: "stankov-boris", href: site.linkedinUrl, icon: Linkedin, line: "m2" },
  { label: "GitHub", value: `@${site.github}`, href: site.githubUrl, icon: Github, line: "m4" },
  { label: t(ui.resumeHh), value: "hh.kz", href: site.hhUrl, icon: FileUser, line: "m5" },
  { label: t(ui.resumePdf), value: "Google Drive", href: site.resumeUrl, icon: FileText, line: "m5" },
]);
</script>

<template>
  <section id="contact" class="section relative scroll-mt-16 overflow-hidden">
    <div class="container">
      <div class="grid items-center gap-12 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <SectionHeading :title="t(s.title)" :description="s.description ? t(s.description) : undefined" line="m1" />
          <div v-reveal class="mt-8 flex flex-wrap items-center gap-3">
            <a :href="site.telegramUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary h-14 px-7 text-base">
              <Send class="h-5 w-5" />{{ t(ui.messageTg) }}
            </a>
            <button type="button" class="btn btn-ghost h-14 px-6" @click="copyEmail">
              <component :is="copied ? Check : Copy" class="h-4 w-4" />
              <span aria-live="polite">{{ copied ? t(ui.copied) : t(ui.copyEmail) }}</span>
            </button>
          </div>
          <p v-reveal class="mt-4 text-sm text-muted-foreground">{{ t(ui.contactNote) }}</p>
        </div>

        <!-- Token & turnstile -->
        <div v-reveal="120" class="lg:col-span-5">
          <a
            :href="site.telegramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="turnstile group mx-auto block w-full max-w-[340px]"
            :class="dropped && 'is-dropped'"
            :aria-label="`${t(ui.dropToken)} - ${t(ui.messageTg)}`"
            @click="dropToken"
          >
            <svg viewBox="0 0 320 300" class="w-full overflow-visible">
              <!-- body -->
              <rect x="40" y="120" width="240" height="150" rx="22" fill="hsl(var(--surface))" stroke="hsl(var(--foreground))" stroke-width="5" />
              <rect x="40" y="120" width="240" height="38" rx="19" fill="hsl(var(--m1))" />
              <text x="160" y="146" text-anchor="middle" class="fill-white font-display text-[17px] font-bold">{{ t(ui.dropToken) }}</text>
              <!-- slot -->
              <rect x="135" y="174" width="50" height="10" rx="5" fill="hsl(var(--foreground))" />
              <!-- light -->
              <circle cx="240" cy="190" r="10" class="lamp" />
              <!-- arms -->
              <g class="arms" style="transform-origin: 160px 232px">
                <rect x="96" y="226" width="128" height="12" rx="6" fill="hsl(var(--foreground))" />
                <rect x="154" y="200" width="12" height="64" rx="6" fill="hsl(var(--foreground))" opacity="0.35" />
              </g>
              <circle cx="160" cy="232" r="13" fill="hsl(var(--surface))" stroke="hsl(var(--foreground))" stroke-width="5" />
              <!-- token -->
              <g class="token">
                <circle cx="160" cy="58" r="44" fill="#d9a441" stroke="#8a6416" stroke-width="5" />
                <circle cx="160" cy="58" r="33" fill="none" stroke="#8a6416" stroke-width="2" stroke-dasharray="3 5" />
                <text x="160" y="74" text-anchor="middle" fill="#6b4c0c" class="font-display text-[44px] font-extrabold">М</text>
              </g>
            </svg>
            <span class="mt-2 block text-center text-sm text-muted-foreground transition-colors group-hover:text-foreground">{{ t(ui.tokenHint) }}</span>
          </a>
        </div>
      </div>

      <!-- Departure board of channels -->
      <ul class="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(c, i) in channels" :key="c.label" v-reveal="(i % 4) * 40" class="border-b border-border sm:odd:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0">
          <a
            :href="c.href"
            :target="c.href.startsWith('http') ? '_blank' : undefined"
            :rel="c.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="group flex items-center gap-3 px-1 py-5 sm:px-5"
            :style="{ '--line': `var(--${c.line})` }"
          >
            <span class="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full line-bg text-white transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:scale-110">
              <component :is="c.icon" class="h-4 w-4" />
            </span>
            <span class="min-w-0 flex-1">
              <span class="block text-xs text-muted-foreground">{{ c.label }}</span>
              <span class="block truncate font-semibold">{{ c.value }}</span>
            </span>
            <ArrowUpRight class="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.token {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.turnstile:hover .token {
  transform: translateY(-6px) rotate(-8deg);
}
.is-dropped .token {
  animation: token-drop 0.9s cubic-bezier(0.55, 0, 0.45, 1) forwards;
}
@keyframes token-drop {
  0% {
    transform: translateY(0) rotateY(0deg);
  }
  45% {
    transform: translateY(70px) rotateY(80deg) scaleX(0.4);
  }
  100% {
    transform: translateY(122px) rotateY(90deg) scale(0.1);
    opacity: 0;
  }
}
.arms {
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s;
}
.is-dropped .arms {
  transform: rotate(90deg);
}
.lamp {
  fill: hsl(var(--m1));
  transition: fill 0.3s ease 0.5s;
}
.is-dropped .lamp {
  fill: hsl(var(--m3));
}
@media (prefers-reduced-motion: reduce) {
  .is-dropped .token {
    animation: none;
  }
}
</style>
