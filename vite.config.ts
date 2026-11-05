import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// GitHub Pages project site is served from /Portfolio/.
// Local dev stays at root; production build uses the subpath.
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Portfolio/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2020",
    sourcemap: false,
  },
}));
