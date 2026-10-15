import { ref } from "vue";

export type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

export const theme = ref<Theme>("dark");

function apply() {
  document.documentElement.classList.toggle("light", theme.value === "light");
}

export function initTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") theme.value = saved;
  } catch {
    /* ignore */
  }
  apply();
}

export function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  try {
    localStorage.setItem(STORAGE_KEY, theme.value);
  } catch {
    /* ignore */
  }
  apply();
}
