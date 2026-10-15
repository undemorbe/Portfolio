# Boris Stankov — Portfolio

**Live:** [https://undemorbe.github.io/Portfolio/](https://undemorbe.github.io/MyPortfolio/)

## Стек

- **Vite 5** + **Vue 3** (`<script setup>`, Composition API)
- **TypeScript**
- **Vue Router** (две страницы: `/` и `/services`)
- **Tailwind CSS** — дизайн-система на CSS-переменных (dark/light)
- **Lenis** — плавный скролл (с уважением к `prefers-reduced-motion`)
- **lucide-vue-next** — иконки
- Анимации появления — своя директива `v-reveal` на IntersectionObserver (без тяжёлых зависимостей)

## Особенности

- Переключатель языка RU/EN (сохраняется в localStorage)
- Тёмная/светлая тема без вспышки (FOUC) — тема применяется до рендера
- Полностью адаптивно, без горизонтального скролла
- Доступность: focus-ring, `prefers-reduced-motion`, aria-labels
- SEO: мета-теги, Open Graph, Twitter Cards, JSON-LD (Schema.org Person), `robots.txt`, `sitemap.xml`, `manifest.webmanifest`
- Статический OG-образ и favicon
- Деплой на GitHub Pages через GitHub Actions; SPA-fallback через `404.html`

## Структура

```
index.html            # entry, no-FOUC + SEO мета + JSON-LD
vite.config.ts        # base: /Portfolio/ в production
src/
  main.ts             # bootstrap: тема, язык, роутер, lenis
  router.ts           # Vue Router (/, /services)
  i18n.ts             # реактивный язык + t()/tl()
  data.ts             # единый источник контента (RU/EN)
  style.css           # Tailwind + токены темы + reveal
  directives/reveal.ts
  lib/                # theme, scroll (lenis), asset
  components/         # Navbar, Footer, SectionHeading, Counter, Badge
    sections/         # Hero, About, Projects, Experience, Skills, …
  views/              # Home.vue, ServicesView.vue
public/               # icon.png, og.png, robots, sitemap, manifest, images
scripts/postbuild.mjs # 404.html fallback + .nojekyll
```

## Запуск

```bash
npm install
npm run dev        # разработка → http://localhost:5173
npm run build      # production → dist/
npm run preview    # предпросмотр собранного
npm run typecheck  # vue-tsc --noEmit
```

## Контент

Весь контент правится в `src/data.ts` (двуязычный). Данные — из реального
GitHub (`github.com/undemorbe`) и резюме.
