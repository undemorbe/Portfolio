import { ref } from "vue";

export type Lang = "ru" | "en";
export type L = { ru: string; en: string };
export type LList = { ru: string[]; en: string[] };

const STORAGE_KEY = "portfolio-lang";

// Shared, reactive language state (module singleton).
export const lang = ref<Lang>("ru");

export function initLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "en") lang.value = saved;
  } catch {
    /* ignore */
  }
  document.documentElement.setAttribute("lang", lang.value);
}

export function setLang(next: Lang) {
  lang.value = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  document.documentElement.setAttribute("lang", next);
}

export function toggleLang() {
  setLang(lang.value === "ru" ? "en" : "ru");
}

/** Resolve a localized string (reads the reactive lang, so renders stay reactive). */
export function t(value: L | string): string {
  return typeof value === "string" ? value : value[lang.value];
}

/** Resolve a localized list. */
export function tl(value: LList | string[]): string[] {
  return Array.isArray(value) ? value : value[lang.value];
}
