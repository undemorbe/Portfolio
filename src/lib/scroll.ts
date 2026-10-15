// Native browser scrolling (no smooth-scroll library).
// Only used for in-page anchor jumps and route changes, with an offset
// for the fixed navbar.

const NAV_OFFSET = 80;

function prefersReduced() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function scrollToHash(hash: string) {
  const el = document.querySelector(hash) as HTMLElement | null;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: prefersReduced() ? "auto" : "smooth" });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReduced() ? "auto" : "smooth" });
}
