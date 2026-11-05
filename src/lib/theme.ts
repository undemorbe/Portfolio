import { goal } from "@/lib/analytics";
import { ref } from "vue";

export type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

function systemTheme(): Theme {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export const theme = ref<Theme>("light");

function apply() {
  const root = document.documentElement;
  root.classList.toggle("dark", theme.value === "dark");
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute("content", theme.value === "dark" ? "#0a0e17" : "#ffffff");
}

/** Saved choice wins; otherwise follow the OS (day scheme / night scheme). */
export function initTheme() {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  theme.value = saved === "dark" || saved === "light" ? saved : systemTheme();
  apply();

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (stored) return;
    theme.value = e.matches ? "dark" : "light";
    apply();
  });
}

export function toggleTheme() {
  const next: Theme = theme.value === "dark" ? "light" : "dark";
  goal("theme", { to: next });
  const commit = () => {
    theme.value = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    apply();
  };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // View transition: the night scheme sweeps in like a train entering the platform.
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (doc.startViewTransition && !reduce) {
    document.documentElement.dataset.themeSwitch = next;
    doc.startViewTransition(commit);
  } else {
    commit();
  }
}
