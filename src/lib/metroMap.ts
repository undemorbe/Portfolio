import type { LineId } from "@/data";

/**
 * Shared geometry of the metro scheme. Units are map units: x to the right,
 * y downward (becomes z in 3D). The SVG fallback and the three.js scene both
 * render from this, so the 2D scheme and the 3D one are the same map.
 */

export type Station = { slug: string; label: string; x: number; y: number };

export const stations: Station[] = [
  { slug: "hornet", label: "Hornet", x: -5.6, y: -2.2 },
  { slug: "xouston", label: "Xouston", x: -3.6, y: -1.5 },
  { slug: "arys", label: "ARYS", x: -1.8, y: -0.4 },
  { slug: "q-story", label: "Q-Story", x: 0.0, y: 0.15 },
  { slug: "korst", label: "KORST", x: 1.6, y: 0.45 },
  { slug: "pora", label: "PORA", x: 3.0, y: 0.7 },
  { slug: "wallpap", label: "Wallpap", x: 4.6, y: -1.9 },
  { slug: "tg-mini-app", label: "Neiro Peiro", x: 4.2, y: 2.4 },
  { slug: "dirigible", label: "dirigible", x: 2.4, y: 2.9 },
  { slug: "frontend-roadmap", label: "Roadmap", x: 0.6, y: 2.92 },
  { slug: "budini-coffee", label: "Budini", x: -1.2, y: 2.88 },
  { slug: "ruai", label: "ruAI", x: -3.0, y: 2.75 },
  { slug: "flower-cup", label: "Flower Cup", x: -4.8, y: 2.45 },
];

export const stationBySlug = Object.fromEntries(stations.map((s) => [s.slug, s])) as Record<string, Station>;

type P = [number, number] | string;

/** Each line: ordered waypoints (station slugs or raw points) and a parallel offset for shared track. */
export const linePaths: { id: LineId; offset: number; points: P[] }[] = [
  { id: "m1", offset: -0.16, points: [[-6.8, -2.9], "hornet", "xouston", "arys", "q-story", "korst", "pora", "tg-mini-app", [5.6, 3.1]] },
  { id: "m5", offset: 0.16, points: [[-4.6, 0.9], [-2.8, 0.1], "arys", "q-story", "korst", "pora", [3.8, -0.3], [3.7, -2.6]] },
  { id: "m3", offset: 0, points: [[2.2, -3.2], [3.6, -2.6], "wallpap", [5.8, -0.6], [6.6, 0.4]] },
  { id: "m4", offset: 0.17, points: ["wallpap", [3.8, -0.6], "pora", "tg-mini-app", "dirigible", "frontend-roadmap", "budini-coffee", "ruai", "flower-cup", [-6.2, 1.9]] },
  { id: "m2", offset: -0.17, points: [[6.4, 3.4], "tg-mini-app", "dirigible", "frontend-roadmap", "budini-coffee", "ruai", "flower-cup", [-6.0, 3.3], [-6.9, 2.6]] },
];

/** Resolve a line's waypoints to coordinates, applying its parallel offset on the y axis. */
export function resolveLine(path: { offset: number; points: P[] }): [number, number][] {
  return path.points.map((p) => {
    const [x, y] = typeof p === "string" ? [stationBySlug[p].x, stationBySlug[p].y] : p;
    return [x, y + path.offset];
  });
}

/** Lines that serve a station (to draw transfer pills). */
export function linesAt(slug: string): { id: LineId; offset: number }[] {
  return linePaths.filter((l) => l.points.includes(slug)).map((l) => ({ id: l.id, offset: l.offset }));
}

/** Catmull-Rom spline through points → SVG path string (matches the 3D curve closely). */
export function smoothPath(pts: [number, number][], scale = 1, ox = 0, oy = 0): string {
  const P = pts.map(([x, y]) => [x * scale + ox, y * scale + oy]);
  if (P.length < 2) return "";
  let d = `M${P[0][0].toFixed(1)},${P[0][1].toFixed(1)}`;
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[i - 1] ?? P[i];
    const p1 = P[i];
    const p2 = P[i + 1];
    const p3 = P[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

/** The Neva, roughly: a wide band crossing the scheme. */
export const river: [number, number][] = [
  [-8, -0.2],
  [-4.5, 0.6],
  [-1.5, 1.3],
  [1.5, 1.6],
  [4.5, 1.2],
  [8, 1.9],
];
