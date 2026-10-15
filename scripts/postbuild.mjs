import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
const index = resolve(dist, "index.html");

// SPA fallback for GitHub Pages: unknown deep links (e.g. /services on refresh)
// serve 404.html, which is the app — the Vue router then resolves the route.
if (existsSync(index)) {
  copyFileSync(index, resolve(dist, "404.html"));
  console.log("postbuild: dist/index.html -> dist/404.html");
}

// Ensure Jekyll is disabled so _-prefixed asset folders are served.
writeFileSync(resolve(dist, ".nojekyll"), "");
console.log("postbuild: wrote dist/.nojekyll");
