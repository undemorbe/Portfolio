// Prefix a public asset path with the Vite base (e.g. "/Portfolio/").
const BASE = import.meta.env.BASE_URL;

export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return BASE.replace(/\/$/, "") + clean;
}
