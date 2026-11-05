import { ref, nextTick } from "vue";
import type { LineId } from "@/data";
import { scrollToHash } from "@/lib/scroll";
import { goal } from "@/lib/analytics";

/** Shared between the hero map and the projects list. */
export const activeLine = ref<LineId | "all">("all");
export const focusedStation = ref<string | null>(null);

export async function goToStation(slug: string) {
  goal("station", { slug });
  activeLine.value = "all";
  focusedStation.value = slug;
  await nextTick();
  scrollToHash(`#station-${slug}`);
}

export async function goToLine(line: LineId) {
  goal("line_filter", { line, from: "map" });
  activeLine.value = line;
  await nextTick();
  scrollToHash("#projects");
}
