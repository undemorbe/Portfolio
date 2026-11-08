// Renders resume/ (built from src/data.ts) into public/resume/*.pdf with headless Chrome.
// Needs the dev server running: npm run dev -- --port 5179, then npm run resume.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const base = process.env.RESUME_URL || "http://localhost:5179/resume/";
const chrome =
  process.env.CHROME ||
  ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Chromium.app/Contents/MacOS/Chromium", "/usr/bin/google-chrome"].find(existsSync);
if (!chrome) throw new Error("Chrome not found, set CHROME=/path/to/chrome");

const out = resolve("public/resume");
mkdirSync(out, { recursive: true });

const files = { ru: "Boris-Stankov-Flutter-RU.pdf", en: "Boris-Stankov-Flutter-EN.pdf" };
for (const [lang, name] of Object.entries(files)) {
  execFileSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=8000",
    `--print-to-pdf=${resolve(out, name)}`,
    `${base}?lang=${lang}`,
  ], { stdio: "ignore" });
  console.log(`resume: public/resume/${name}`);
}
