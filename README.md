# Boris Stankov — Portfolio

**Live:** [https://undemorbe.github.io/Portfolio/](https://undemorbe.github.io/Portfolio/)

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
- Яндекс.Метрика: SPA-хиты на каждый переход роутера, цели на контакты, проекты, фильтры метро и переключение темы
- Деплой на GitHub Pages через GitHub Actions; SPA-fallback через `404.html`

## Структура

```
index.html            # entry, no-FOUC + SEO мета + JSON-LD
vite.config.ts        # base: /Portfolio/ в production
src/
  main.ts             # bootstrap: тема, язык, роутер, аналитика
  router.ts           # Vue Router (/, /services)
  i18n.ts             # реактивный язык + t()/tl()
  data.ts             # единый источник контента (RU/EN)
  style.css           # Tailwind + токены темы + reveal
  directives/reveal.ts
  lib/                # theme, scroll (lenis), asset, analytics (Метрика)
  components/         # Navbar, Footer, SectionHeading, ThemeToggle, metro/*
    sections/         # Hero, About, Projects, Experience, Approach, WhyMe, …
  views/              # Home.vue, ServicesView.vue
public/               # icon.png, og.png, robots, sitemap, manifest, images
scripts/postbuild.mjs # 404.html fallback + .nojekyll
.github/workflows/    # деплой на GitHub Pages
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

## Аналитика (Яндекс.Метрика)

Код инициализации — `src/lib/analytics.ts`. Метрика
включается только в production-сборке и только если задан `VITE_YM_ID`, так что
`npm run dev` в статистику не попадает.

- Локально ID берётся из `.env.production` (в репозиторий не коммитится).
- В CI он приходит из переменной репозитория `VITE_YM_ID`
  (Settings → Secrets and variables → Actions → Variables).
- Форк без этой переменной собирается без аналитики.

Цели (`reachGoal`) нужно один раз создать в интерфейсе Метрики с теми же
идентификаторами: `telegram`, `email`, `email_copy`, `github`, `linkedin`,
`hh`, `project_live`, `project_breakdown`, `station`, `line_filter`, `theme`,
`lang`. Запись сессий (Вебвизор) включается через `VITE_YM_WEBVISOR=true`.

## Деплой

Push в `main` запускает `.github/workflows/deploy.yml`: typecheck → build →
публикация `dist/` на GitHub Pages. Страница проекта живёт по адресу
`/Portfolio/`, поэтому имя репозитория — `Portfolio`, а `base` в
`vite.config.ts` — `/Portfolio/` для production.
