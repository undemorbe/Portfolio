import { nextTick } from "vue";
import type { Router } from "vue-router";

/**
 * Yandex Metrica for an SPA.
 * Off unless the build has VITE_YM_ID (counter number) and runs in production,
 * so dev sessions and forks never pollute the stats.
 */
type YM = ((id: number, method: string, ...args: unknown[]) => void) & { a?: unknown[]; l?: number };
declare global {
  interface Window {
    ym?: YM;
  }
}

const ID = Number(import.meta.env.VITE_YM_ID) || 0;
const ON = import.meta.env.PROD && ID > 0;

/** Send a goal. Create goals with the same identifiers in the Metrica counter settings. */
export function goal(name: Goal, params?: Record<string, unknown>) {
  if (ON) window.ym?.(ID, "reachGoal", name, params);
}

export type Goal =
  | "telegram"
  | "email"
  | "email_copy"
  | "github"
  | "linkedin"
  | "hh"
  | "project_live"
  | "project_breakdown"
  | "station"
  | "line_filter"
  | "theme"
  | "lang";

/** Outbound contact links are tracked once, here, by where they point. */
function linkGoal(href: string): Goal | null {
  if (href.includes("t.me/")) return "telegram";
  if (href.startsWith("mailto:")) return "email";
  if (href.includes("github.com")) return "github";
  if (href.includes("linkedin.com")) return "linkedin";
  if (href.includes("hh.kz") || href.includes("hh.ru")) return "hh";
  return null;
}

export function initAnalytics(router: Router) {
  if (!ON) return;

  // Official loader, queued until tag.js arrives
  window.ym =
    window.ym ||
    (function () {
      // eslint-disable-next-line prefer-rest-params
      (window.ym!.a = window.ym!.a || []).push(arguments);
    } as unknown as YM);
  window.ym.l = Date.now();
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://mc.yandex.ru/metrika/tag.js?id=${ID}`;
  document.head.appendChild(s);

  window.ym(ID, "init", {
    defer: true, // page views are sent by the router below
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: import.meta.env.VITE_YM_WEBVISOR === "true",
  });

  let referer = document.referrer;
  router.afterEach((to) => {
    // wait for the view to set document.title
    nextTick(() => {
      const url = new URL(router.resolve(to.fullPath).href, location.origin).href;
      window.ym?.(ID, "hit", url, { title: document.title, referer });
      referer = url;
    });
  });

  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const g = (a.dataset.goal as Goal | undefined) ?? linkGoal(a.getAttribute("href") ?? "");
      if (g) goal(g, { where: a.closest("section, header, footer")?.id || a.closest("header, footer")?.tagName.toLowerCase() });
    },
    { capture: true, passive: true }
  );
}
