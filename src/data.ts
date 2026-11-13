import type { Component } from "vue";
import {
  Boxes,
  Layers,
  Smartphone,
  Gauge,
  ShieldCheck,
  Rocket,
  Code2,
  PenTool,
  Search,
  RefreshCw,
  Server,
  Send,
  Globe,
  Monitor,
} from "lucide-vue-next";
import type { L, LList } from "@/i18n";

/* ────────────────────────────────────────────────────────────
   Site
   ──────────────────────────────────────────────────────────── */

export const site = {
  name: "Boris Stankov",
  nameRu: "Борис Станьков",
  role: { ru: "Flutter-разработчик", en: "Flutter developer" } as L,
  tagline: {
    ru: "Приложения на Flutter под iOS и Android - от архитектуры до релиза. Умею и вокруг: сайты с 3D, нативный Swift, свой сервер и CI/CD. Поэтому довожу продукт до прода, а не до «у меня работает».",
    en: "Flutter apps for iOS and Android - from architecture to release. I also cover what's around them: 3D websites, native Swift, my own server and CI/CD. So I take a product to production, not to \"works on my machine\".",
  } as L,
  shortBio: {
    ru: "Flutter-разработчик из Санкт-Петербурга, студент ИТМО. Мобайл, веб, натив и деплой.",
    en: "Flutter developer from Saint Petersburg, ITMO student. Mobile, web, native and deploy.",
  } as L,
  location: {
    ru: "Санкт-Петербург",
    en: "Saint Petersburg",
  } as L,
  email: "stankovb08@gmail.com",
  phone: "+7 980 136-89-30",
  phoneHref: "tel:+79801368930",
  telegram: "undemorbe",
  telegramUrl: "https://t.me/undemorbe",
  github: "undemorbe",
  githubUrl: "https://github.com/undemorbe",
  linkedinUrl: "https://www.linkedin.com/in/stankov-boris",
  hhUrl: "https://hh.kz/resume/89456e4eff10c661920039ed1f6b344e713554",
  /** PDFs rendered from resume/ by `npm run resume`; served from public/. */
  resumePdf: { ru: "/resume/Boris-Stankov-Flutter-RU.pdf", en: "/resume/Boris-Stankov-Flutter-EN.pdf" } as L,
  url: "https://undemorbe.github.io/Portfolio",
  avatar: "/images/boris.jpg",
} as const;

/** Proof in the first viewport: only numbers backed by the experience below. */
export const heroStats: { value: string; label: L }[] = [
  { value: "7", label: { ru: "команд и заказчиков с 2023 года", en: "teams and clients since 2023" } },
  { value: "−50%", label: { ru: "время запуска приложения в Xouston", en: "app launch time at Xouston" } },
  { value: "590", label: { ru: "тестов в Q-Story и Neiro Peiro", en: "tests in Q-Story and Neiro Peiro" } },
];

/* ────────────────────────────────────────────────────────────
   Lines - the five disciplines, drawn as metro lines
   ──────────────────────────────────────────────────────────── */

export type LineId = "m1" | "m2" | "m3" | "m4" | "m5";

export type Line = {
  id: LineId;
  code: string;
  name: L;
  description: L;
  skills: string[];
};

export const lines: Line[] = [
  {
    id: "m1",
    code: "1",
    name: { ru: "Мобайл", en: "Mobile" },
    description: {
      ru: "Основная линия. Flutter под iOS и Android: архитектура, состояние, производительность.",
      en: "The main line. Flutter for iOS and Android: architecture, state, performance.",
    },
    skills: ["Flutter", "Dart", "Clean Architecture", "BLoC / Cubit", "MobX", "MVVM", "GetIt", "GoRouter", "AutoRoute", "Navigator 2.0", "Drift", "Hive", "secure_storage", "flutter_map", "Rive / Lottie", "Local notifications", "Isolates", "DevTools", "intl / l10n", "sembast", "Flutter Web / Wasm", "Geolocation"],
  },
  {
    id: "m2",
    code: "2",
    name: { ru: "Веб", en: "Web" },
    description: {
      ru: "Сайты и веб-приложения: Vue, 3D на Three.js, анимация на canvas и SVG.",
      en: "Websites and web apps: Vue, 3D with Three.js, canvas and SVG motion.",
    },
    skills: ["Vue 3", "TypeScript", "Vite", "Pinia", "Three.js", "WebGL", "Canvas", "SVG-анимация", "Tailwind", "Vitest", "Telegram Mini Apps"],
  },
  {
    id: "m3",
    code: "3",
    name: { ru: "Натив", en: "Native" },
    description: {
      ru: "Swift и Kotlin, когда плагинов не хватает. Своё macOS-приложение на SwiftUI.",
      en: "Swift and Kotlin when plugins aren't enough. My own macOS app in SwiftUI.",
    },
    skills: ["Swift", "SwiftUI", "AppKit", "AVFoundation", "ExtensionKit", "Kotlin", "Platform channels"],
  },
  {
    id: "m4",
    code: "4",
    name: { ru: "Деплой", en: "Deploy" },
    description: {
      ru: "Довожу до прода: свой VPS за nginx, CI/CD, релизы в сторы и на GitHub.",
      en: "I take it to production: my own VPS behind nginx, CI/CD, store and GitHub releases.",
    },
    skills: ["Git", "GitHub Actions", "Docker", "nginx", "VPS", "TLS", "GitHub Pages", "Fastlane", "App Store / Google Play", "DMG-релизы", "Cloudflare", "systemd / supervisor", "ufw / fail2ban"],
  },
  {
    id: "m5",
    code: "5",
    name: { ru: "Бэкенд", en: "Backend" },
    description: {
      ru: "Данные и realtime: Firebase, Supabase, REST, WebSockets, логи и мониторинг.",
      en: "Data and realtime: Firebase, Supabase, REST, WebSockets, logs and monitoring.",
    },
    skills: ["Firebase Auth", "Firestore", "FCM", "Crashlytics", "Supabase", "Python", "Node.js", "SQL / MySQL", "SQLite", "REST", "SSE", "Dio + Retrofit", "WebSockets", "json_serializable", "freezed", "Talker"],
  },
];

export const lineById = Object.fromEntries(lines.map((l) => [l.id, l])) as Record<LineId, Line>;

/* ────────────────────────────────────────────────────────────
   Projects - stations
   ──────────────────────────────────────────────────────────── */

export type Project = {
  slug: string;
  name: string;
  tagline: L;
  year: string;
  status: L;
  lines: LineId[];
  problem: L;
  solution: L;
  highlights: LList;
  architecture?: L;
  results?: LList;
  learned?: L;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  note?: L;
  /** One measured result shown on the card face. */
  metric?: { value: string; label: L };
};

const allProjects: Project[] = [
  {
    slug: "wallpap",
    name: "Wallpap",
    tagline: {
      ru: "Видео- и фото-обои для macOS 26 Tahoe и 27 средствами самой системы: без фоновых процессов и расхода батареи.",
      en: "Video and photo wallpapers for macOS 26 Tahoe and 27 using the system itself: no background processes, no battery drain.",
    },
    year: "2026",
    status: { ru: "Open source · macOS", en: "Open source · macOS" },
    lines: ["m3", "m4"],
    problem: {
      ru: "«Живые обои» обычно держат свой плеер в фоне: лишний процесс, автозапуск и батарея, которая тает.",
      en: "\"Live wallpapers\" usually keep their own player running: an extra process, autostart and a melting battery.",
    },
    solution: {
      ru: "Wallpap перекодирует видео в HEVC через AVFoundation и отдаёт его системному WallpaperAgent через слот встроенного Aerial. macOS проигрывает обои сама - приложение можно закрыть, фон переживёт перезагрузку.",
      en: "Wallpap re-encodes the video to HEVC with AVFoundation and hands it to the system WallpaperAgent through a built-in Aerial slot. macOS plays it itself - you can quit the app and the wallpaper survives a reboot.",
    },
    highlights: {
      ru: [
        "Библиотека с превью: перетаскивание файлов, переименование, «Показать в Finder»",
        "Каталог онлайн-обоев из 10 источников: Wallhaven, NASA, Apple Aerials, Unsplash и другие",
        "Пауза, когда стол не виден или ноутбук на батарее, скорость 0.25-2×",
        "CI на раннерах macos-26: сборка, проверка подписи, DMG и релиз по тегу",
      ],
      en: [
        "A library with previews: drag and drop, rename, Show in Finder",
        "An online catalog from 10 sources: Wallhaven, NASA, Apple Aerials, Unsplash and more",
        "Pauses when the desktop is hidden or on battery, speed 0.25-2×",
        "CI on macos-26 runners: build, signature check, DMG and a release per tag",
      ],
    },
    metric: { value: "0", label: { ru: "фоновых процессов: обои играет сама macOS", en: "background processes: macOS plays the wallpaper itself" } },
    stack: ["Swift", "SwiftUI", "AppKit", "AVFoundation", "ExtensionKit", "GitHub Actions"],
    githubUrl: "https://github.com/undemorbe/wallpap",
  },
  {
    slug: "budini-coffee",
    name: "Budini Coffee",
    tagline: {
      ru: "Концепт сайта кофейни «Будини»: 3D scroll-video на Three.js и меню с конструктором напитка, где стакан наполняется на глазах.",
      en: "A concept site for Budini coffee shop: a Three.js scroll-video and a menu with a drink builder where the cup fills up before your eyes.",
    },
    year: "2026",
    status: { ru: "Концепт · онлайн", en: "Concept · live" },
    lines: ["m2", "m4"],
    problem: {
      ru: "Кофейне нужен сайт, который запоминается с первого экрана, но при этом остаётся удобным: меню, адреса, предзаказ.",
      en: "A coffee shop needs a site that sticks from the first screen yet stays practical: menu, addresses, pre-order.",
    },
    solution: {
      ru: "Детерминированная Three.js-сцена отрендерена в 450 кадров и проигрывается скроллом из WebP-последовательности с прогрессивной загрузкой. В меню - «Барная стойка»: canvas-стакан, где молоко льётся струёй, сиропы ложатся слоями, а готовый напиток улетает на поднос.",
      en: "A deterministic Three.js scene is rendered into 450 frames and scrubbed by scroll from a progressively loaded WebP sequence. The menu has a \"bar counter\": a canvas cup where milk pours, syrups settle in layers and the finished drink flies to the tray.",
    },
    highlights: {
      ru: [
        "3D scroll-video: камера по сплайну CatmullRom, 450 кадров → WebP",
        "Конструктор напитка с живым canvas-стаканом и пружинной анимацией",
        "10 страниц: меню, адреса со статусом «открыто сейчас», бонусная карта, события, сертификаты",
        "Деплой на GitHub Pages через Actions с SPA-фолбэком",
      ],
      en: [
        "3D scroll-video: a CatmullRom spline camera, 450 frames → WebP",
        "A drink builder with a live canvas cup and spring animation",
        "10 pages: menu, addresses with \"open now\", bonus card, events, gift cards",
        "Deploy to GitHub Pages via Actions with an SPA fallback",
      ],
    },
    metric: { value: "450", label: { ru: "кадров 3D-сцены, которые листаются скроллом", en: "3D frames scrubbed by scroll" } },
    stack: ["Vue 3", "Vite", "Three.js", "Canvas", "Vue Router", "GitHub Actions"],
    githubUrl: "https://github.com/undemorbe/budini-coffee",
    liveUrl: "https://undemorbe.github.io/budini-coffee/",
  },
  {
    slug: "ruai",
    name: "ruAI",
    tagline: {
      ru: "Фронтенд AI-чата на русском без VPN: 7 вариантов лендинга, чат со стримингом ответа, тарифы и оформление оплаты.",
      en: "The frontend of a Russian-language AI chat without a VPN: 7 landing variants, a streaming chat, plans and checkout.",
    },
    year: "2026",
    status: { ru: "В разработке · демо онлайн", en: "In progress · live demo" },
    lines: ["m2", "m4"],
    problem: {
      ru: "AI-сервису нужен лендинг, который не похож на десятки одинаковых, и сразу рабочий клиент: чат, тарифы, оплата. Бэкенда ещё нет, а фронт должен быть к нему готов.",
      en: "An AI service needs a landing page unlike dozens of identical ones, plus a working client right away: chat, plans, payment. There's no backend yet, and the frontend has to be ready for it.",
    },
    solution: {
      ru: "7 вариантов первого экрана: от 3D-сферы на WebGL-шейдере до 14 000 частиц, которые собираются в слова, и 3D-клавиатуры, переводящей английскую раскладку в русскую. Чат со стримингом ответа, тарифы и оформление оплаты картой, СБП и SberPay.",
      en: "7 first-screen variants: from a 3D sphere on a WebGL shader to 14,000 particles forming words and a 3D keyboard that converts the English layout to Russian. A streaming chat, plans and checkout by card, SBP and SberPay.",
    },
    architecture: {
      ru: "Сервисы описаны контрактами AuthService / ChatService / BillingService: сейчас работают моки в браузере, REST-реализация включается переменной окружения - интерфейс при этом не меняется. Состояние на Pinia, three.js грузится отдельным чанком только для 3D-вариантов.",
      en: "Services are defined as AuthService / ChatService / BillingService contracts: browser mocks run today, and the REST implementation switches on with an env variable - the UI doesn't change. State on Pinia; three.js loads as a separate chunk only for the 3D variants.",
    },
    highlights: {
      ru: [
        "7 лендингов: ?v=1…7 или переключатель внизу, выбор запоминается",
        "3D на three.js: шейдерная сфера, 14 000 частиц, клавиатура-переводчик",
        "Чат со стримингом ответа, оформление оплаты и поллинг статуса платежа",
        "TypeScript, Pinia, Vue Router, Vitest, ESLint, CI и деплой на GitHub Pages",
      ],
      en: [
        "7 landings: ?v=1…7 or a switcher at the bottom, the choice is remembered",
        "3D on three.js: a shader sphere, 14,000 particles, a layout-converting keyboard",
        "A streaming chat, checkout and payment status polling",
        "TypeScript, Pinia, Vue Router, Vitest, ESLint, CI and GitHub Pages deploy",
      ],
    },
    metric: { value: "7", label: { ru: "вариантов лендинга - от шейдера до 14 000 частиц", en: "landing variants - from a shader to 14,000 particles" } },
    stack: ["Vue 3", "TypeScript", "Vite", "Pinia", "Three.js", "Vitest", "GitHub Actions"],
    githubUrl: "https://github.com/undemorbe/ruAI",
    liveUrl: "https://undemorbe.github.io/ruAI/",
  },
  {
    slug: "frontend-roadmap",
    name: "Frontend Metro",
    tagline: {
      ru: "Учебник фронтенда в виде схемы метро: HTML, CSS, JavaScript, инструменты и Vue. 51 урок с живыми примерами и 165 задач с автопроверкой прямо в браузере.",
      en: "A frontend textbook drawn as a metro map: HTML, CSS, JavaScript, tooling and Vue. 51 lessons with live examples and 165 tasks checked right in the browser.",
    },
    year: "2026",
    status: { ru: "Учебный сайт · в проде", en: "Learning site · live" },
    lines: ["m2", "m4"],
    problem: {
      ru: "Новичку во фронтенде трудно понять, что учить и в каком порядке, а теория без практики не держится.",
      en: "Frontend beginners struggle to know what to learn and in what order, and theory without practice doesn't stick.",
    },
    solution: {
      ru: "Каждая станция - урок с живыми примерами и задачами, которые проверяются прямо на странице: код запускается в изолированном iframe. Уроки пишутся в Markdown со своими блоками для задач, превью и подсказок, а линии и пересадки показывают, что из чего вытекает.",
      en: "Each station is a lesson with live examples and tasks checked right on the page: code runs in an isolated iframe. Lessons are written in Markdown with custom blocks for tasks, previews and tips, and the lines and transfers show what leads to what.",
    },
    highlights: {
      ru: [
        "5 линий: HTML, CSS, JavaScript, инструменты (npm, DevTools, Git, Vite) и Vue",
        "Песочница в iframe с режимами web, js, vue, sfc и config",
        "Свой формат уроков на Markdown: задачи, живые превью, врезки",
        "Самопроверка в CI: стартовый код каждой задачи должен падать, эталон - проходить",
      ],
      en: [
        "5 lines: HTML, CSS, JavaScript, tooling (npm, DevTools, Git, Vite) and Vue",
        "An iframe sandbox with web, js, vue, sfc and config modes",
        "A custom Markdown lesson format: tasks, live previews, callouts",
        "Self-test in CI: each task's starter code must fail and the reference must pass",
      ],
    },
    metric: { value: "165", label: { ru: "задач с автопроверкой в браузере", en: "tasks auto-checked in the browser" } },
    stack: ["Vue 3", "Vite", "JavaScript", "Markdown", "iframe sandbox", "GitHub Actions"],
    githubUrl: "https://github.com/undemorbe/frontend-roadmap",
    liveUrl: "https://undemorbe.github.io/frontend-roadmap/",
  },
  {
    slug: "flower-cup",
    name: "Flower Cup",
    tagline: {
      ru: "Сайт эко-стартапа: букеты в биоразлагаемых стаканчиках с семенами. 3D-стаканчик можно покрутить и «посадить» - из него вырастет росток.",
      en: "An eco-startup site: bouquets in biodegradable cups with seeds inside. Spin the 3D cup and \"plant\" it to watch a sprout grow.",
    },
    year: "2026",
    status: { ru: "Сайт · в проде", en: "Website · live" },
    lines: ["m2", "m4"],
    problem: {
      ru: "Продукт непривычный - стаканчик вместо вазы и семечко на дне. Его надо объяснить за пару секунд.",
      en: "The product is unusual - a cup instead of a vase and a seed at the bottom. It has to make sense in seconds.",
    },
    solution: {
      ru: "Процедурная three.js-сцена без внешних моделей: стаканчик с букетом вращается, а кнопка «Посадить» показывает, как он уходит в землю и прорастает. Иллюстрации букетов и семян нарисованы кодом в SVG, заказ собирается в готовое сообщение в Telegram.",
      en: "A procedural three.js scene with no external models: the cup rotates, and \"Plant it\" shows it sinking into soil and sprouting. Bouquet and seed illustrations are drawn in SVG code, and the order becomes a ready Telegram message.",
    },
    highlights: {
      ru: [
        "Процедурное 3D, отдельный чанк - главная грузится быстро",
        "Иллюстрации букетов и пакетиков семян в SVG, без картинок",
        "Страницы букетов и семян, выбор семечка в стаканчик",
        "Заказ сохраняется в браузере и уходит в Telegram одним сообщением",
      ],
      en: [
        "Procedural 3D in a separate chunk - the home page stays fast",
        "Bouquet and seed-pack illustrations in SVG, no images",
        "Bouquet and seed pages, choosing the seed for the cup",
        "The order is saved in the browser and sent to Telegram in one message",
      ],
    },
    stack: ["Vue 3", "Vite", "Three.js", "SVG", "Fontsource", "GitHub Pages"],
    githubUrl: "https://github.com/undemorbe/flower-cup",
    liveUrl: "https://undemorbe.github.io/flower-cup/",
  },
  {
    slug: "pora",
    name: "PORA",
    tagline: {
      ru: "Семейный список покупок: сам достаёт ингредиенты из рецепта, убирает дубли и подсказывает, когда пора докупить.",
      en: "A family shopping list that pulls ingredients from a recipe link, removes duplicates and hints when it's time to restock.",
    },
    year: "2026",
    status: { ru: "Пет-проект · в разработке", en: "Pet project · in progress" },
    lines: ["m1", "m5", "m4"],
    problem: {
      ru: "Семьи ведут покупки в заметках и чатах: дубли, забытые ингредиенты, «а молоко кто-то взял?». Обычный список не понимает, что вы готовите.",
      en: "Families keep shopping in notes and chats: duplicates, forgotten items, \"did anyone grab the milk?\". A plain list has no idea what you're cooking.",
    },
    solution: {
      ru: "Общий realtime-список с привязкой позиций к участникам. Вставляешь ссылку на рецепт - ингредиенты разбираются и добавляются без дублей. Плюс подсказки «пора докупить» по истории.",
      en: "A shared realtime list where items belong to members. Paste a recipe link and ingredients get parsed and added without duplicates, plus \"time to restock\" hints based on history.",
    },
    architecture: {
      ru: "Clean Architecture с разбиением по фичам (data / domain / presentation внутри каждой). Общая инфраструктура, тема и роутинг вынесены отдельно, модели, роуты и сторы - на кодогенерации.",
      en: "Clean Architecture with a feature-based split (data / domain / presentation inside each). Shared infra, theming and routing live separately; models, routes and stores are code-generated.",
    },
    highlights: {
      ru: [
        "Двухфазный запуск: синхронная критическая инициализация + асинхронный bootstrap под splash",
        "Отдельный сервис превращает ссылку на рецепт в список ингредиентов",
        "Realtime-синхронизация между участниками поверх WebSockets",
        "CI/CD на GitHub Actions: проверка PR и автосборка Android-релиза",
      ],
      en: [
        "Two-phase startup: critical sync init + async bootstrap under a splash gate",
        "A separate service turns a recipe link into an ingredient list",
        "Realtime sync between members over WebSockets",
        "CI/CD on GitHub Actions: PR checks and an automatic Android release build",
      ],
    },
    learned: {
      ru: "Как встроить парсинг в доменный слой с чистыми контрактами, а не прикручивать фичу сверху.",
      en: "How to build parsing into the domain layer with clean contracts instead of bolting a feature on top.",
    },
    stack: ["Flutter", "MobX", "GetIt", "AutoRoute", "Dio + Retrofit", "Hive", "FCM", "WebSockets"],
    githubUrl: "https://github.com/undemorbe/PORA",
  },
  {
    slug: "dirigible",
    name: "dirigible.community",
    tagline: {
      ru: "Сайт АНО «Дирижабль» - центра социальных практик. Перенёс с конструктора на собственный генератор с дизайн-системой «Вязаное полотно».",
      en: "The site of Dirigible, a social-practice NGO. Moved it off a site builder onto my own generator with a \"knitted fabric\" design system.",
    },
    year: "2026",
    status: { ru: "Сайт НКО · в проде", en: "NGO website · live" },
    lines: ["m2", "m4"],
    problem: {
      ru: "Сайт жил в конструкторе Craftum: медленный, неудобный в правке, без контроля над вёрсткой.",
      en: "The site lived in the Craftum builder: slow, awkward to edit, no control over the markup.",
    },
    solution: {
      ru: "Статический генератор на Python без зависимостей: контент и шаблоны в одном месте, валидатор битых ссылок, якорей, alt и заголовков. Вязаные SVG-текстуры поверх фирменных цветов, автодеплой на GitHub Pages.",
      en: "A zero-dependency static generator in Python: content and templates in one place, a validator for broken links, anchors, alt text and headings. Knitted SVG textures over the brand colours, auto-deploy to GitHub Pages.",
    },
    highlights: {
      ru: [
        "Миграция с Craftum: вытащил старый текст скриптом и сверил",
        "Генерация страниц, редиректов, sitemap и robots одной командой",
        "Валидатор сборки: ссылки, якоря, дубли id, alt, заголовки",
        "Платёжная форма в shadow DOM, чтобы стили не ломались",
      ],
      en: [
        "Migration off Craftum: extracted the old copy with a script and checked it",
        "Pages, redirects, sitemap and robots built with one command",
        "A build validator: links, anchors, duplicate ids, alt, headings",
        "The donation form in shadow DOM so styles don't collide",
      ],
    },
    stack: ["Python", "HTML / CSS", "SVG", "JavaScript", "GitHub Actions"],
    githubUrl: "https://github.com/undemorbe/dirigible_community",
    liveUrl: "https://dirigible.community",
  },
  {
    slug: "tg-mini-app",
    name: "Neiro Peiro",
    tagline: {
      ru: "Telegram Mini App для AI-бота: 17 нейросетей для фото, видео и музыки, чат с LLM, тренды и оплата. Поверх работающего бота - без единой правки в его коде.",
      en: "A Telegram Mini App for an AI bot: 17 neural networks for photo, video and music, an LLM chat, trends and payments. Built on top of a live bot - without touching its code.",
    },
    year: "2026",
    status: { ru: "Коммерческий · в проде", en: "Commercial · live" },
    lines: ["m1", "m2", "m4"],
    problem: {
      ru: "У заказчика работающий AI-бот со своей базой, ценами и оплатой. Генерировать в чате неудобно: нет галереи, трендов и истории. Нужно приложение, которое не ломает бота и не дублирует его логику.",
      en: "The client has a working AI bot with its own database, pricing and payments. Generating in a chat is clumsy: no gallery, trends or history. They needed an app that neither breaks the bot nor duplicates its logic.",
    },
    solution: {
      ru: "Flutter Web-клиент внутри Telegram и мост на Python, который подключает модули бота напрямую: те же цены, баланс, MySQL и платёжные драйверы. Node-сервер отдаёт ленту трендов, аналитику, рассылки и веб-админку. Всё развёрнуто на VPS заказчика за nginx и Cloudflare.",
      en: "A Flutter Web client inside Telegram and a Python bridge that loads the bot's modules directly: the same prices, balance, MySQL and payment drivers. A Node server runs the trends feed, analytics, broadcasts and a web admin. All deployed on the client's VPS behind nginx and Cloudflare.",
    },
    architecture: {
      ru: "Три сервиса за nginx: Flutter Web на WebAssembly, мост на Python поверх кода бота (генерации, LLM-чат с потоковыми ответами, оплата) и Node без зависимостей (лента, аналитика, рассылки, админка на SQLite). Бот остаётся источником правды - мост импортирует его модули, а не копирует логику.",
      en: "Three services behind nginx: Flutter Web on WebAssembly, a Python bridge over the bot's code (generation, a streaming LLM chat, payments) and a zero-dependency Node server (feed, analytics, broadcasts, admin on SQLite). The bot stays the source of truth - the bridge imports its modules instead of copying its logic.",
    },
    highlights: {
      ru: [
        "17 нейросетей из бота: Nano Banana, Veo, Kling, Sora, Suno, Midjourney и другие - цены и списание по правилам бота",
        "LLM-чат с потоковыми ответами, голосом и файлами; результаты генераций в своём архиве - ссылки не протухают",
        "Оплата Telegram Stars и FreeKassa, промокоды, реферальная программа с выводом средств",
        "Веб-админка: роли, аналитика с воронкой оплаты и удержанием D1/D7/D30, рассылки, тренды",
        "Клоны бота: брендированные зеркала-витрины мини-аппа с зашифрованными токенами",
        "Бот поддержки и лендинг с 3D-сценой на Three.js",
      ],
      en: [
        "17 neural networks from the bot: Nano Banana, Veo, Kling, Sora, Suno, Midjourney and more - priced and charged by the bot's rules",
        "An LLM chat with streaming answers, voice and files; generation results in our own archive - links never expire",
        "Telegram Stars and FreeKassa payments, promo codes, a referral program with withdrawals",
        "A web admin: roles, analytics with a payment funnel and D1/D7/D30 retention, broadcasts, trends",
        "Bot clones: branded mirror storefronts for the mini app with encrypted tokens",
        "A support bot and a landing page with a Three.js 3D scene",
      ],
    },
    results: {
      ru: [
        "Холодный старт на 4G легче на 45% (5,3 → 2,9 МБ) и без единого внешнего запроса",
        "Около 250 тестов на мосту, сервере и клиенте",
      ],
      en: [
        "Cold start on 4G 45% lighter (5.3 → 2.9 MB) with zero external requests",
        "About 250 tests across the bridge, the server and the client",
      ],
    },
    metric: { value: "−45%", label: { ru: "вес холодного старта на 4G", en: "cold-start payload on 4G" } },
    stack: ["Flutter Web", "WebAssembly", "Python", "Node.js", "MySQL", "SQLite", "nginx", "Cloudflare"],
    liveUrl: "https://neiropeiro.com",
  },
  {
    slug: "xouston",
    name: "Xouston",
    tagline: {
      ru: "Тренировка когнитивных функций для пожилых: игры, здоровье, привычки. Перенёс игры из WebView в нативный Flutter.",
      en: "Cognitive training for elderly users: games, health, habits. Moved the games from WebView into native Flutter.",
    },
    year: "2025-2026",
    status: { ru: "Коммерческий · медтех", en: "Commercial · medtech" },
    lines: ["m1"],
    problem: {
      ru: "Часть игр жила в WebView - медленно и плохо на слабых устройствах. Плюс накопился legacy на устаревшем стеке.",
      en: "Some games lived in a WebView - slow and poor on weak devices. On top of that, legacy had piled up on an outdated stack.",
    },
    solution: {
      ru: "Перенёс игры в нативный Flutter, сделал водный баланс и рекомендации рецептов, интегрировал ИИ и аналитику, перевёл legacy на современный стек.",
      en: "Moved the games to native Flutter, built water-balance tracking and recipe suggestions, integrated AI and analytics, moved legacy to a modern stack.",
    },
    highlights: {
      ru: [
        "Игры из WebView в нативный Flutter - плавность и контроль над UX",
        "Отложенный запуск: старт приложения быстрее на 50%",
        "Кеширование данных: до +30% к производительности",
        "Код-ревью и поддержание качества кодовой базы",
      ],
      en: [
        "Games from WebView to native Flutter - smoothness and UX control",
        "Deferred startup: app launch 50% faster",
        "Data caching: up to +30% performance",
        "Code reviews and keeping the codebase healthy",
      ],
    },
    results: {
      ru: ["Legacy переведён на современный стек без остановки продукта"],
      en: ["Legacy moved to a modern stack without stopping the product"],
    },
    metric: { value: "−50%", label: { ru: "время запуска после отложенной инициализации", en: "launch time after deferred initialisation" } },
    stack: ["Flutter", "Native", "AI", "Caching", "Code Review", "Agile"],
  },
  {
    slug: "q-story",
    name: "Q-Story",
    tagline: {
      ru: "Путеводитель по историческим местам вокруг: открытые базы историков и краеведов на одной карте, поиск места пешком и статистика прогулок. Без своего сервера.",
      en: "A guide to the historical places around you: open data from historians and local enthusiasts on one map, finding places on foot and walk stats. No server of its own.",
    },
    year: "2026",
    status: { ru: "ЦСиГН · v1.0 без бэкенда", en: "CSiGN · v1.0, no backend" },
    lines: ["m1", "m5"],
    problem: {
      ru: "Сведения о памятных местах уже собраны, но разбросаны по PastVu, Википедии, OSM и другим базам. А свой сервер с контентом - это расходы, поддержка и точка отказа.",
      en: "Facts about historic places already exist, but they're scattered across PastVu, Wikipedia, OSM and other databases. And a server of your own means costs, upkeep and a single point of failure.",
    },
    solution: {
      ru: "Начинали как гид по местам российских учёных со своим сервером и QR-табличками. В версии 1.0 я перевёл приложение на 6 открытых источников: места сводятся на одну карту, выбираешь цель - приложение ведёт к ней, считает шаги и путь и засчитывает находку по геозоне. Вся личная статистика хранится только на телефоне.",
      en: "It started as a guide to places tied to Russian scientists, with its own server and QR plaques. In v1.0 I moved the app to 6 open sources: places land on one map, you pick a target, the app guides you, counts steps and distance, and logs the find by geofence. All personal stats stay on the phone.",
    },
    architecture: {
      ru: "Clean Architecture по фичам (11 модулей), MobX, GetIt, GoRouter. Репозиторий мест опрашивает источники параллельно, кэширует на 12 часов и сливает дубли между базами; новый источник - один класс с двумя методами. Домен на чистом Dart, ошибки через Result / Failure, локальное хранилище на sembast.",
      en: "Feature-based Clean Architecture (11 modules), MobX, GetIt, GoRouter. The places repository queries sources in parallel, caches for 12 hours and merges duplicates across databases; a new source is one class with two methods. Pure-Dart domain, errors via Result / Failure, local storage on sembast.",
    },
    highlights: {
      ru: [
        "Отказ от бэкенда: PastVu, Википедия, Wikidata, OpenStreetMap, OpenHistoricalMap и Wiki Loves Monuments вместо своего сервера",
        "Карта с кластерами и фильтрами, трекинг маршрута, в том числе в фоне",
        "Поиск места: компас, оценка шагов и времени по реальной скорости, засчитывание по геозоне",
        "Локальная статистика: шагомер, серии, разведанная площадь, 16 достижений, экспорт в JSON",
        "QR своего формата и распознавание ссылок Википедии, Wikidata, OSM и PastVu",
        "Около 340 тестов, CI и подписанный релиз 1.0 на GitHub Actions",
      ],
      en: [
        "No backend: PastVu, Wikipedia, Wikidata, OpenStreetMap, OpenHistoricalMap and Wiki Loves Monuments instead of a server",
        "A clustered, filterable map and route tracking, including in the background",
        "Finding a place: compass, step and time estimates from real walking speed, geofence check-in",
        "On-device stats: pedometer, streaks, explored area, 16 achievements, JSON export",
        "Its own QR format plus recognition of Wikipedia, Wikidata, OSM and PastVu links",
        "About 340 tests, CI and a signed 1.0 release on GitHub Actions",
      ],
    },
    results: {
      ru: ["Ни сервера, ни аккаунтов, ни аналитики: приложению нечему падать, а данные пользователя не покидают устройство"],
      en: ["No server, no accounts, no analytics: nothing to go down, and user data never leaves the device"],
    },
    metric: { value: "6", label: { ru: "открытых баз данных вместо своего сервера", en: "open databases instead of a server" } },
    stack: ["Flutter", "MobX", "GetIt", "GoRouter", "flutter_map", "sembast", "Dio", "GitHub Actions"],
    githubUrl: "https://github.com/undemorbe/Q-Story",
  },
  {
    slug: "hornet",
    name: "Hornet",
    tagline: {
      ru: "Галерея изображений поверх нескольких API: поиск по тегам, кастомные переходы, плавная лента.",
      en: "An image gallery over several APIs: tag search, custom transitions, a smooth feed.",
    },
    year: "2025",
    status: { ru: "Open source", en: "Open source" },
    lines: ["m1"],
    problem: {
      ru: "Контент разбросан по источникам с несовместимыми API, а большие ленты картинок на мобиле легко начинают лагать.",
      en: "Content is scattered across incompatible APIs, and big image feeds on mobile easily start to lag.",
    },
    solution: {
      ru: "Единый клиент с фильтрами, поиском по тегам с подсказками, историей и полноэкранным режимом. Кубиты под анимации, картинки и категории, GoRouter с кастомными переходами.",
      en: "One client with filters, tag search with suggestions, history and fullscreen. Cubits for animation, images and categories, GoRouter with custom transitions.",
    },
    highlights: {
      ru: [
        "Анимированная app bar и поисковый overlay с подсказками",
        "Кэш изображений, ленивая загрузка, контроль rebuild'ов",
        "Кастомные переходы через GoRouter",
        "История на Hive",
      ],
      en: [
        "An animated app bar and a search overlay with suggestions",
        "Image cache, lazy loading, rebuild control",
        "Custom transitions via GoRouter",
        "History on Hive",
      ],
    },
    stack: ["Flutter", "BLoC / Cubit", "GoRouter", "Dio", "Hive", "GetIt"],
    githubUrl: "https://github.com/undemorbe/hornet",
  },
  {
    slug: "arys",
    name: "ARYS Barbershop",
    tagline: {
      ru: "Онлайн-запись в барбершоп с тремя ролями в одном приложении: клиент, барбер, администратор.",
      en: "Barbershop booking with three roles in one app: client, barber, admin.",
    },
    year: "2024",
    status: { ru: "Коммерческий", en: "Commercial" },
    lines: ["m1", "m5"],
    problem: {
      ru: "Одно приложение на три сценария с разными правами: клиент бронирует, барбер ведёт расписание, админ всё контролирует.",
      en: "One app for three scenarios with different permissions: the client books, the barber runs a schedule, the admin controls it all.",
    },
    solution: {
      ru: "Flutter-клиент с ролевой моделью, бронирование с выбором услуг и realtime-расписанием, отдельная админ-панель.",
      en: "A Flutter client with a role model, booking with service selection and a realtime schedule, a separate admin panel.",
    },
    highlights: {
      ru: [
        "Три ролевых потока с разделением прав на клиенте и сервере",
        "Realtime-календарь записей на Firestore",
        "База спроектирована и оптимизирована больше чем на 20%",
        "Приложения барбера и клиента объединены, админка вынесена",
      ],
      en: [
        "Three role flows with permissions on both client and server",
        "A realtime booking calendar on Firestore",
        "The database designed and optimised by over 20%",
        "Barber and client apps merged, admin split out",
      ],
    },
    metric: { value: "20%+", label: { ru: "оптимизация базы данных", en: "database optimisation" } },
    stack: ["Flutter", "Firebase Auth", "Firestore", "BLoC", "GoRouter"],
    githubUrl: "https://github.com/undemorbe/barber_booker",
  },
  {
    slug: "korst",
    name: "KORST",
    tagline: {
      ru: "Маркетплейс услуг без посредников: карточки, отклики, встроенный realtime-мессенджер и рейтинги. Весь Flutter-клиент написал я.",
      en: "A service marketplace with no middleman: listings, responses, a built-in realtime messenger and ratings. I wrote the whole Flutter client.",
    },
    year: "2026",
    status: { ru: "Стартап в паре · Flutter-клиент", en: "Two-person startup · Flutter client" },
    lines: ["m1", "m5"],
    problem: {
      ru: "Агрегаторы услуг берут 15-30% комиссии, а переписка уходит в сторонние мессенджеры - контекст сделки теряется.",
      en: "Service aggregators take a 15-30% fee, and chats move to outside messengers - the deal loses its context.",
    },
    solution: {
      ru: "Мобильный клиент, где отклик сразу открывает чат по карточке: WebSocket-мессенджер с историей и фото, вход по телефону и OTP, отзывы и статусы сделки. Бэкенд делал напарник, клиент целиком - я.",
      en: "A mobile client where a response opens a chat tied to the listing: a WebSocket messenger with history and photos, phone + OTP sign-in, reviews and deal statuses. My partner built the backend, I built the whole client.",
    },
    architecture: {
      ru: "Clean Architecture по фичам, MobX-сторы на кодогенерации, GetIt и GoRouter. Единый HTTP-слой на Dio с автообновлением токена, Hive для офлайна и счётчиков непрочитанного.",
      en: "Feature-based Clean Architecture, code-generated MobX stores, GetIt and GoRouter. One Dio HTTP layer with token refresh, Hive for offline state and unread counters.",
    },
    highlights: {
      ru: [
        "WebSocket-мессенджер: история с пагинацией, фото, правка и удаление, автореконнект",
        "Вход по номеру телефона и OTP, автообновление access-токена",
        "Deep links на карточки, push-уведомления и фоновые задачи",
        "5 языков интерфейса, тёмная и светлая тема, unit- и golden-тесты",
      ],
      en: [
        "A WebSocket messenger: paginated history, photos, edit and delete, auto-reconnect",
        "Phone + OTP sign-in, automatic access-token refresh",
        "Deep links to listings, push notifications and background tasks",
        "5 UI languages, dark and light themes, unit and golden tests",
      ],
    },
    stack: ["Flutter", "MobX", "GetIt", "GoRouter", "Dio", "WebSockets", "Hive", "workmanager"],
    githubUrl: "https://github.com/undemorbe/KORST-project",
  },
];

/** Commercial work with measured results first: that's what a hiring team scans for. */
const ORDER = ["tg-mini-app", "xouston", "q-story", "korst", "pora", "wallpap", "budini-coffee", "ruai", "frontend-roadmap", "flower-cup", "dirigible", "arys", "hornet"];
export const projects: Project[] = ORDER.map((slug) => allProjects.find((p) => p.slug === slug)!);

/* ────────────────────────────────────────────────────────────
   Experience
   ──────────────────────────────────────────────────────────── */

export type ExperienceItem = {
  company: string;
  role: L;
  location: L;
  period: L;
  duration: L;
  summary: L;
  points: LList;
  tags: string[];
  line: LineId;
  url?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Neiro Peiro",
    role: { ru: "Flutter / full-stack разработчик", en: "Flutter / Full-stack Developer" },
    location: { ru: "Санкт-Петербург · AI-сервис", en: "Saint Petersburg · AI service" },
    period: { ru: "Авг - Ноя 2026", en: "Aug - Nov 2026" },
    duration: { ru: "4 мес", en: "4 mo" },
    summary: {
      ru: "Telegram Mini App для AI-бота: клиент, бэкенд, админка и деплой - целиком мои.",
      en: "A Telegram Mini App for an AI bot: client, backend, admin and deploy - all mine.",
    },
    points: {
      ru: [
        "Flutter Web-клиент на WebAssembly: студия генераций, LLM-чат, лента трендов, оплата",
        "Мост на Python поверх кода бота: 17 нейросетей, цены и списание по его правилам, Telegram Stars и FreeKassa",
        "Node-сервер и веб-админка: роли, аналитика, рассылки, клоны бота",
        "Холодный старт на 4G легче на 45% (5,3 → 2,9 МБ) и без внешних запросов",
        "Деплой на VPS: nginx, Cloudflare, supervisor и systemd, защита сервера; около 250 тестов",
      ],
      en: [
        "A Flutter Web client on WebAssembly: generation studio, LLM chat, trends feed, payments",
        "A Python bridge over the bot's code: 17 neural networks, prices and charging by its rules, Telegram Stars and FreeKassa",
        "A Node server and web admin: roles, analytics, broadcasts, bot clones",
        "Cold start on 4G 45% lighter (5.3 → 2.9 MB) with no external requests",
        "Deploy on a VPS: nginx, Cloudflare, supervisor and systemd, server hardening; about 250 tests",
      ],
    },
    tags: ["Flutter Web", "Python", "Node.js", "Payments"],
    line: "m1",
    url: "https://neiropeiro.com",
  },
  {
    company: "Freelance",
    role: { ru: "Веб-разработчик (Vue / Vite / Three.js)", en: "Web Developer (Vue / Vite / Three.js)" },
    location: { ru: "Удалённо · сайты под ключ", en: "Remote · turnkey websites" },
    period: { ru: "Авг 2026 - сейчас", en: "Aug 2026 - now" },
    duration: { ru: "", en: "" },
    summary: {
      ru: "Сайты и веб-приложения под ключ: от дизайна и 3D-графики до домена и автодеплоя. Работаю с заказчиками напрямую.",
      en: "Turnkey websites and web apps: from design and 3D to the domain and auto-deploy. I work with clients directly.",
    },
    points: {
      ru: [
        "dirigible.community: перенёс сайт НКО с Craftum на свой генератор на Python, дизайн-система, валидатор сборки, редиректы",
        "annasilni.com (Tilda): аудит, адаптив 9 страниц на 8 ширинах без единой проблемы, английская версия из 8 страниц",
        "ruAI: 7 вариантов лендинга на WebGL и three.js, чат со стримингом, оплата картой, СБП и SberPay",
        "Flower Cup, Frontend Metro, концепт Будини: процедурное 3D, учебник со 165 задачами, 3D scroll-video",
        "Деплой на GitHub Pages и VPS за nginx, CI/CD на GitHub Actions",
      ],
      en: [
        "dirigible.community: moved an NGO site off Craftum onto my own Python generator, design system, build validator, redirects",
        "annasilni.com (Tilda): audit, 9 pages made responsive at 8 widths with zero issues, an 8-page English version",
        "ruAI: 7 landing variants with WebGL and three.js, a streaming chat, card, SBP and SberPay checkout",
        "Flower Cup, Frontend Metro, the Budini concept: procedural 3D, a textbook with 165 tasks, a 3D scroll-video",
        "Deploy to GitHub Pages and a VPS behind nginx, CI/CD on GitHub Actions",
      ],
    },
    tags: ["Vue 3", "Three.js", "Tilda", "Deploy"],
    line: "m2",
  },
  {
    company: "ЦСиГН",
    role: { ru: "Flutter-разработчик", en: "Flutter Developer" },
    location: { ru: "Санкт-Петербург · культура", en: "Saint Petersburg · culture" },
    period: { ru: "Янв - Май 2026", en: "Jan - May 2026" },
    duration: { ru: "5 мес", en: "5 mo" },
    summary: {
      ru: "Q-Story: путеводитель по историческим местам. Единственный мобильный разработчик - довёл до версии 1.0 и избавил от собственного сервера.",
      en: "Q-Story: a guide to historical places. The only mobile developer - took it to v1.0 and got rid of its own server.",
    },
    points: {
      ru: [
        "Спроектировал клиент с нуля: Clean Architecture по фичам, MobX, GetIt, GoRouter",
        "Перевёл приложение с собственного бэкенда на 6 открытых баз: параллельные запросы, кэш, слияние дублей",
        "Карта, фоновый трекинг маршрута, поиск места с компасом и засчитыванием по геозоне",
        "Холодный старт быстрее примерно на 30%: разделил зависимости и грузил их по мере надобности",
        "Около 340 тестов, CI и подписанный релиз 1.0 на GitHub Actions",
      ],
      en: [
        "Designed the client from scratch: feature-based Clean Architecture, MobX, GetIt, GoRouter",
        "Moved the app off its own backend onto 6 open databases: parallel requests, caching, duplicate merging",
        "A map, background route tracking, finding a place with a compass and geofence check-in",
        "Cold start about 30% faster by splitting dependencies and loading them on demand",
        "About 340 tests, CI and a signed 1.0 release on GitHub Actions",
      ],
    },
    tags: ["Clean Architecture", "Open data", "Maps", "Performance"],
    line: "m1",
  },
  {
    company: "Xouston",
    role: { ru: "Flutter-разработчик", en: "Flutter Developer" },
    location: { ru: "Медтех · соцзащита", en: "Medtech · social care" },
    period: { ru: "Дек 2025 - Май 2026", en: "Dec 2025 - May 2026" },
    duration: { ru: "6 мес", en: "6 mo" },
    summary: {
      ru: "Приложение для тренировки когнитивных функций у пожилых.",
      en: "An app for cognitive training for elderly users.",
    },
    points: {
      ru: [
        "Перенёс игровые механики из WebView в нативный Flutter",
        "Водный баланс, рекомендации рецептов, ИИ и аналитика",
        "Отложенный запуск: старт быстрее на 50%; кеширование: до +30% к производительности",
        "Рефакторинг legacy без остановки продукта, код-ревью, двухнедельные спринты",
        "Интерфейс под аудиторию 60+: крупные элементы, простая навигация, понятная обратная связь",
      ],
      en: [
        "Moved game mechanics from WebView into native Flutter",
        "Water balance, recipe suggestions, AI and analytics",
        "Deferred startup: 50% faster launch; caching: up to +30% performance",
        "Legacy refactoring without stopping the product, code reviews, two-week sprints",
        "UI for a 60+ audience: large elements, simple navigation, clear feedback",
      ],
    },
    tags: ["Flutter", "AI", "Legacy → Modern", "Caching"],
    line: "m1",
  },
  {
    company: "Arys",
    role: { ru: "Flutter-разработчик", en: "Flutter Developer" },
    location: { ru: "Петропавловск · бьюти", en: "Petropavlovsk · beauty" },
    period: { ru: "Май - Окт 2024", en: "May - Oct 2024" },
    duration: { ru: "6 мес", en: "6 mo" },
    summary: {
      ru: "Самостоятельно сделал онлайн-запись в барбершоп с тремя ролями.",
      en: "Built a barbershop booking app with three roles on my own.",
    },
    points: {
      ru: [
        "Три роли с разграничением прав на клиенте и в правилах Firestore",
        "Бронирование с realtime-расписанием: двойная запись на один слот исключена",
        "Firebase: Auth, Firestore, FCM-уведомления; чтений базы меньше на 20%+",
        "Объединил приложения клиента и барбера, админку вынес; CI/CD и QR для скачивания приложения",
      ],
      en: [
        "Three roles with permissions on the client and in Firestore rules",
        "Booking with a realtime schedule: no double booking of a slot",
        "Firebase: Auth, Firestore, FCM notifications; 20%+ fewer database reads",
        "Merged the client and barber apps, split out the admin; CI/CD and a QR app download",
      ],
    },
    tags: ["Firebase", "Realtime", "Roles", "CI/CD"],
    line: "m5",
  },
  {
    company: "FOODY",
    role: { ru: "Junior Flutter-разработчик", en: "Junior Flutter Developer" },
    location: { ru: "Астана · доставка еды", en: "Astana · food delivery" },
    period: { ru: "Окт 2023 - Мар 2024", en: "Oct 2023 - Mar 2024" },
    duration: { ru: "6 мес", en: "6 mo" },
    summary: {
      ru: "Новые модули приложения доставки внутри существующей кодовой базы.",
      en: "New modules for a delivery app inside an existing codebase.",
    },
    points: {
      ru: [
        "Поиск с debounce и отбрасыванием устаревших ответов",
        "10 экранов по Figma на переиспользуемых компонентах, адаптив под разные устройства",
        "Исправил критические баги - доля сессий без падений выросла на 40%",
      ],
      en: [
        "Search with debounce that drops stale responses",
        "10 screens from Figma on reusable components, adaptive to any device",
        "Fixed critical bugs - crash-free sessions up 40%",
      ],
    },
    tags: ["Search", "Figma", "Stability"],
    line: "m1",
  },
  {
    company: "Startup",
    role: { ru: "Стажёр Flutter", en: "Flutter Intern" },
    location: { ru: "Петропавловск · логистика", en: "Petropavlovsk · logistics" },
    period: { ru: "Июн - Сен 2023", en: "Jun - Sep 2023" },
    duration: { ru: "4 мес", en: "4 mo" },
    summary: {
      ru: "Первые боевые задачи на Flutter: начало линии.",
      en: "My first real Flutter tasks: where the line begins.",
    },
    points: {
      ru: [
        "Deep Links сразу в нужные разделы",
        "Система рекламных баннеров",
        "Вёрстка всех экранов по Figma",
      ],
      en: [
        "Deep Links straight into the right sections",
        "An ad-banner system",
        "All screens built from Figma",
      ],
    },
    tags: ["Deep Links", "Figma", "Async"],
    line: "m1",
  },
];

/* ────────────────────────────────────────────────────────────
   Approach & process
   ──────────────────────────────────────────────────────────── */

export type Philosophy = { title: L; body: L; icon: Component };

export const philosophy: Philosophy[] = [
  {
    title: { ru: "Сначала схема, потом рельсы", en: "Map first, then track" },
    icon: Layers,
    body: {
      ru: "Заранее решаю, где живут бизнес-логика, данные и интерфейс. Clean Architecture и разбиение по фичам не дают проекту превратиться в кашу.",
      en: "I decide up front where the business logic, data and UI live. Clean Architecture and a feature split keep the project from turning into a mess.",
    },
  },
  {
    title: { ru: "Код, который читается через полгода", en: "Code you can read in six months" },
    icon: ShieldCheck,
    body: {
      ru: "Иммутабельные модели, типизированные события, код-ревью. Скучный понятный код обычно лучше «умного» однострочника.",
      en: "Immutable models, typed events, code review. Boring readable code usually beats a clever one-liner.",
    },
  },
  {
    title: { ru: "Новая станция не ломает линию", en: "A new station doesn't break the line" },
    icon: Boxes,
    body: {
      ru: "Когда код разбит по фичам, новый модуль не тянет правки в десять мест. Проще добавлять и проще потом найти.",
      en: "With code split by feature, a new module doesn't drag edits into ten places. Easier to add, easier to find later.",
    },
  },
  {
    title: { ru: "Инструмент под задачу", en: "The tool for the task" },
    icon: Gauge,
    body: {
      ru: "MobX - где нужна реактивность, BLoC - где важна предсказуемость, Three.js - где сайт должен запомниться. Не тащу одно и то же по привычке.",
      en: "MobX where I need reactivity, BLoC where predictability matters, Three.js where a site has to stick. I don't drag the same thing everywhere.",
    },
  },
];

export type ProcessStep = { title: L; description: L; icon: Component };

export const process: ProcessStep[] = [
  { title: { ru: "Идея", en: "Idea" }, description: { ru: "Что за продукт, кто пользователь, что критично.", en: "What the product is, who the user is, what's critical." }, icon: Search },
  { title: { ru: "Проектирование", en: "Design" }, description: { ru: "Экраны, сценарии, границы фич. Согласование с дизайном.", en: "Screens, flows, feature boundaries. Aligning with design." }, icon: PenTool },
  { title: { ru: "Архитектура", en: "Architecture" }, description: { ru: "Слои, зависимости, state-management, хранилище.", en: "Layers, dependencies, state management, storage." }, icon: Layers },
  { title: { ru: "Разработка", en: "Build" }, description: { ru: "Модули по фичам, кодогенерация, DI, анимация.", en: "Feature modules, code-gen, DI, motion." }, icon: Code2 },
  { title: { ru: "Проверка", en: "Testing" }, description: { ru: "FPS в DevTools, jank-кадры, лишние rebuild'ы.", en: "FPS in DevTools, jank frames, extra rebuilds." }, icon: Gauge },
  { title: { ru: "Релиз", en: "Release" }, description: { ru: "CI/CD, сторы, свой сервер за nginx, GitHub Releases.", en: "CI/CD, stores, own server behind nginx, GitHub Releases." }, icon: Rocket },
  { title: { ru: "Поддержка", en: "Support" }, description: { ru: "Crashlytics, логи, доработки по обратной связи.", en: "Crashlytics, logs, improvements from feedback." }, icon: RefreshCw },
];

/* ────────────────────────────────────────────────────────────
   Services
   ──────────────────────────────────────────────────────────── */

export type ServiceOffering = { icon: Component; line: LineId; title: L; description: L; bullets: LList };

export const serviceOfferings: ServiceOffering[] = [
  {
    icon: Smartphone,
    line: "m1",
    title: { ru: "Мобильные приложения", en: "Mobile apps" },
    description: {
      ru: "Flutter-приложения для iOS и Android из одной кодовой базы - от прототипа до публикации в сторах.",
      en: "Flutter apps for iOS and Android from one codebase - from prototype to store release.",
    },
    bullets: {
      ru: ["iOS и Android из одной кодовой базы", "Clean Architecture и разбиение по фичам", "App Store и Google Play", "Нативные интеграции на Kotlin и Swift"],
      en: ["iOS and Android from one codebase", "Clean Architecture and a feature split", "App Store and Google Play", "Native integrations in Kotlin and Swift"],
    },
  },
  {
    icon: Globe,
    line: "m2",
    title: { ru: "Сайты с характером", en: "Websites with character" },
    description: {
      ru: "Лендинги и сайты, которые запоминаются: 3D на Three.js, анимация на canvas и SVG - и при этом быстрые и адаптивные.",
      en: "Landing pages and sites people remember: Three.js 3D, canvas and SVG motion - still fast and responsive.",
    },
    bullets: {
      ru: ["3D-сцены и scroll-анимация", "Перенос с конструкторов на свой стек", "Адаптив, SEO-база, быстрая загрузка", "Домен, хостинг и автодеплой"],
      en: ["3D scenes and scroll animation", "Moving off site builders to your own stack", "Responsive, SEO basics, fast loading", "Domain, hosting and auto-deploy"],
    },
  },
  {
    icon: Send,
    line: "m2",
    title: { ru: "Telegram Mini Apps", en: "Telegram Mini Apps" },
    description: {
      ru: "Мини-приложения внутри Telegram - от интерфейса до деплоя на собственный сервер.",
      en: "Mini apps inside Telegram - from the interface to deployment on your own server.",
    },
    bullets: {
      ru: ["Telegram Mini App API", "Облачный VPS за nginx", "TLS и свой домен", "Автоматический выкат"],
      en: ["Telegram Mini App API", "A cloud VPS behind nginx", "TLS and a custom domain", "Automated releases"],
    },
  },
  {
    icon: Monitor,
    line: "m3",
    title: { ru: "macOS и натив", en: "macOS & native" },
    description: {
      ru: "Нативные приложения и интеграции на Swift и Kotlin - там, где кроссплатформы не хватает.",
      en: "Native apps and integrations in Swift and Kotlin - where cross-platform isn't enough.",
    },
    bullets: {
      ru: ["SwiftUI и AppKit под macOS", "AVFoundation, системные API", "Platform channels для Flutter", "Подпись, DMG и релизы через CI"],
      en: ["SwiftUI and AppKit for macOS", "AVFoundation, system APIs", "Platform channels for Flutter", "Signing, DMG and CI releases"],
    },
  },
  {
    icon: Server,
    line: "m4",
    title: { ru: "Бэкенд и деплой", en: "Backend & deploy" },
    description: {
      ru: "Firebase или Supabase, realtime на WebSockets, свой сервер с nginx и Docker, CI/CD на GitHub Actions.",
      en: "Firebase or Supabase, realtime over WebSockets, your own server with nginx and Docker, CI/CD on GitHub Actions.",
    },
    bullets: {
      ru: ["Auth, база, realtime, push", "VPS, nginx, Docker", "GitHub Actions, Fastlane", "Логи и мониторинг"],
      en: ["Auth, DB, realtime, push", "VPS, nginx, Docker", "GitHub Actions, Fastlane", "Logs and monitoring"],
    },
  },
  {
    icon: Gauge,
    line: "m1",
    title: { ru: "Архитектура и скорость", en: "Architecture & speed" },
    description: {
      ru: "Приведу проект в порядок и ускорю: слои, состояние, legacy на современный стек, холодный старт.",
      en: "I'll tidy a project up and speed it up: layers, state, legacy to a modern stack, cold start.",
    },
    bullets: {
      ru: ["Clean Architecture и feature-based", "Legacy → современный стек без остановки", "Профилирование FPS и jank", "Код-ревью свежим взглядом"],
      en: ["Clean Architecture and feature-based", "Legacy → modern stack without downtime", "FPS and jank profiling", "Code review with fresh eyes"],
    },
  },
];

export const servicesPage = {
  title: { ru: "Что могу сделать для вашего продукта", en: "What I can build for your product" } as L,
  intro: {
    ru: "Приложения, сайты, Mini Apps, натив и деплой. Можно взять одну линию или проехать весь маршрут - от идеи до прода.",
    en: "Apps, websites, Mini Apps, native and deploy. Take one line or ride the whole route - from idea to production.",
  } as L,
  included: { ru: "Что входит", en: "What's included" } as L,
  back: { ru: "На главную", en: "Back home" } as L,
  ctaTitle: { ru: "Есть задача или идея?", en: "Got a task or an idea?" } as L,
  ctaText: {
    ru: "Расскажите, что нужно, - отвечу, что из этого реально сделать и как. Быстрее всего в Telegram.",
    en: "Tell me what you need - I'll say what's realistic and how. Telegram is fastest.",
  } as L,
};

/* ────────────────────────────────────────────────────────────
   Why me
   ──────────────────────────────────────────────────────────── */

export type Advantage = { title: L; description: L };

export const advantages: Advantage[] = [
  { title: { ru: "Отвечаю за продукт целиком", en: "I own the whole product" }, description: { ru: "Код, сборка, деплой, релиз. Понимаю, что происходит после «git push».", en: "Code, build, deploy, release. I know what happens after \"git push\"." } },
  { title: { ru: "Быстро вхожу в чужой код", en: "I get into other people's code fast" }, description: { ru: "Семь команд и заказчиков с 2023 года. Незнакомый стек не пугает - Swift-приложение под macOS тому пример.", en: "Seven teams and clients since 2023. An unfamiliar stack doesn't scare me - a Swift macOS app is proof." } },
  { title: { ru: "Довожу до конца", en: "I finish what I start" }, description: { ru: "Не останавливаюсь на «вроде работает». Фича готова, когда она в проде.", en: "I don't stop at \"seems to work\". A feature is done when it's in production." } },
  { title: { ru: "Измеряю результат", en: "I measure results" }, description: { ru: "−50% к старту видно в профайлере, а не на словах.", en: "−50% startup shows up in the profiler, not just on paper." } },
  { title: { ru: "Делаю интерфейсы живыми", en: "I make interfaces feel alive" }, description: { ru: "Анимация, 3D, кастомные переходы - и без потери FPS.", en: "Motion, 3D, custom transitions - without dropping frames." } },
  { title: { ru: "Говорю по-английски", en: "I work in English too" }, description: { ru: "B2: документация, обсуждение задач, Agile.", en: "B2: docs, task discussions, Agile." } },
];

/* ────────────────────────────────────────────────────────────
   GitHub
   ──────────────────────────────────────────────────────────── */

export const githubMeta = {
  publicRepos: 40,
  updated: { ru: "ноябрь 2026", en: "November 2026" } as L,
  topLanguages: ["Dart", "Vue", "Swift", "TypeScript", "Python", "C++"],
  featuredRepos: [
    { name: "wallpap", desc: { ru: "Видео-обои для macOS 26 и 27", en: "Video wallpapers for macOS 26 & 27" }, lang: "Swift", line: "m3" },
    { name: "PORA", desc: { ru: "Семейный список покупок с разбором рецептов", en: "Family shopping list with recipe parsing" }, lang: "Dart", line: "m1" },
    { name: "budini-coffee", desc: { ru: "Сайт кофейни с 3D scroll-video", en: "Coffee shop site with 3D scroll-video" }, lang: "Vue", line: "m2" },
    { name: "flower-cup", desc: { ru: "Сайт эко-стартапа с процедурным 3D", en: "Eco-startup site with procedural 3D" }, lang: "Vue", line: "m2" },
    { name: "hornet", desc: { ru: "Галерея на BLoC и GoRouter", en: "Gallery on BLoC and GoRouter" }, lang: "Dart", line: "m1" },
    { name: "dirigible_community", desc: { ru: "Сайт НКО на своём генераторе", en: "NGO site on my own generator" }, lang: "Python", line: "m4" },
  ] as { name: string; desc: L; lang: string; line: LineId }[],
};

/* ────────────────────────────────────────────────────────────
   Navigation & section copy
   ──────────────────────────────────────────────────────────── */

export const navLinks: { href: string; label: L; page?: boolean }[] = [
  { href: "#about", label: { ru: "Обо мне", en: "About" } },
  { href: "#projects", label: { ru: "Проекты", en: "Projects" } },
  { href: "#experience", label: { ru: "Опыт", en: "Experience" } },
  { href: "#approach", label: { ru: "Подход", en: "Approach" } },
  { href: "/services", label: { ru: "Услуги", en: "Services" }, page: true },
  { href: "#contact", label: { ru: "Контакты", en: "Contact" } },
];

export const sections: Record<string, { title: L; description?: L }> = {
  about: {
    title: { ru: "Пять линий, один машинист", en: "Five lines, one driver" },
    description: {
      ru: "Начинал с Flutter, а потом линии стали расходиться: сайты с 3D, нативный Swift, свои серверы. Вот схема того, чем я занимаюсь.",
      en: "I started with Flutter, then the lines branched out: websites with 3D, native Swift, my own servers. Here's the map of what I do.",
    },
  },
  projects: {
    title: { ru: "Станции", en: "Stations" },
    description: {
      ru: "Проекты, через которые проходят линии. Отфильтруйте по линии или раскройте разбор: задача, решение, что сделал.",
      en: "Projects the lines run through. Filter by line or open a breakdown: the problem, the solution, what I did.",
    },
  },
  experience: {
    title: { ru: "Маршрут", en: "The route" },
    description: {
      ru: "Больше двух лет коммерческой разработки: от стажёра до самостоятельных проектов.",
      en: "Over two years of commercial work: from intern to running projects on my own.",
    },
  },
  approach: {
    title: { ru: "Как я веду задачу", en: "How I run a task" },
    description: {
      ru: "Не догма, но так ничего не теряется по дороге.",
      en: "Not dogma, but nothing gets lost along the way.",
    },
  },
  whyme: {
    title: { ru: "Что получит команда", en: "What a team gets" },
  },
  services: {
    title: { ru: "Чем могу помочь", en: "How I can help" },
    description: {
      ru: "Направления, в которых я уже работал и уверен.",
      en: "Areas I've already worked in and feel confident about.",
    },
  },
  github: {
    title: { ru: `${githubMeta.publicRepos} репозиториев в открытом доступе`, en: `${githubMeta.publicRepos} repositories out in the open` },
    description: { ru: "Депо: здесь стоят составы, которые можно разобрать по винтику.", en: "The depot: trains you can take apart bolt by bolt." },
  },
  contact: {
    title: { ru: "Следующая станция - ваш проект", en: "Next stop - your project" },
    description: {
      ru: "Открыт к работе: Flutter-разработчик в команду или проект под ключ. Быстрее всего ответ в Telegram.",
      en: "Open to work: a Flutter developer for your team or a turnkey project. Telegram gets the fastest reply.",
    },
  },
};

/** LED announcement board in the hero - real facts only. */
/** LED board in the carriage: the stops of the route, read out like real announcements. */
export const announcements: L[] = [
  { ru: "Wallpap - живые обои для macOS", en: "Wallpap - live wallpapers for macOS" },
  { ru: "Budini Coffee - кофейня в 3D", en: "Budini Coffee - a coffee shop in 3D" },
  { ru: "Flower Cup - посадите стаканчик", en: "Flower Cup - plant the cup" },
  { ru: "ruAI - нейросеть на русском", en: "ruAI - an AI that speaks Russian" },
  { ru: "Frontend Metro - учебник-схема", en: "Frontend Metro - a textbook on a map" },
  { ru: "PORA - список покупок для семьи", en: "PORA - the family shopping list" },
  { ru: "dirigible.community - центр социальных практик", en: "dirigible.community - a social practice centre" },
  { ru: "Xouston - игры для памяти", en: "Xouston - games for memory" },
  { ru: "Q-Story - история вокруг вас", en: "Q-Story - history all around you" },
  { ru: "KORST - маркетплейс с живым чатом", en: "KORST - a marketplace with live chat" },
  { ru: "Neiro Peiro - нейросети в Telegram", en: "Neiro Peiro - neural networks in Telegram" },
  { ru: "Конечная - ваш проект", en: "Terminus - your project" },
];

export const ui = {
  openToWork: { ru: "Открыт к работе", en: "Open to work" } as L,
  messageTg: { ru: "Написать в Telegram", en: "Message on Telegram" } as L,
  viewProjects: { ru: "Смотреть проекты", en: "See projects" } as L,
  message: { ru: "Написать", en: "Message" } as L,
  expand: { ru: "Разбор проекта", en: "Project breakdown" } as L,
  collapse: { ru: "Свернуть", en: "Collapse" } as L,
  problem: { ru: "Задача", en: "The problem" } as L,
  solution: { ru: "Решение", en: "The solution" } as L,
  architecture: { ru: "Архитектура", en: "Architecture" } as L,
  highlights: { ru: "Что сделал", en: "What I did" } as L,
  results: { ru: "Результат", en: "Results" } as L,
  learned: { ru: "Чему научился", en: "What I learned" } as L,
  stack: { ru: "Стек", en: "Stack" } as L,
  live: { ru: "Открыть сайт", en: "Open site" } as L,
  code: { ru: "Код", en: "Code" } as L,
  allLines: { ru: "Все линии", en: "All lines" } as L,
  stationsCount: { ru: "станций", en: "stations" } as L,
  emptyFilter: { ru: "На этой линии пока нет станций.", en: "No stations on this line yet." } as L,
  viewOnGithub: { ru: "Весь профиль на GitHub", en: "Full profile on GitHub" } as L,
  rightsReserved: { ru: "Сделано вручную в Петербурге.", en: "Handmade in Saint Petersburg." } as L,
  nextStation: { ru: "Следующая станция", en: "Next station" } as L,
  updated: { ru: "Обновлено", en: "Updated" } as L,
  dropToken: { ru: "Опустите жетон", en: "Drop the token" } as L,
  tokenHint: { ru: "нажмите на жетон - откроется Telegram", en: "tap the token - Telegram opens" } as L,
  aboutP1: {
    ru: "В мобильную разработку я пришёл, потому что приложение сразу чувствуется в руке: оно либо живое и отзывчивое, либо тормозит - тут не спрячешься. Flutter дал отвечать за опыт целиком, одной кодовой базой под iOS и Android.",
    en: "I came to mobile because an app is felt in your hand right away: it's either alive and responsive or it lags - nowhere to hide. Flutter let me own the whole experience with one codebase for iOS and Android.",
  } as L,
  aboutP2: {
    ru: "С 2023 года я прошёл путь от стажёра, который верстал экраны по Figma, до человека, который проектирует архитектуру клиента с нуля. Главное, что понял: большинство проблем рождается не в коде, а в решениях, принятых до него.",
    en: "Since 2023 I've gone from an intern building screens from Figma to someone who designs client architecture from scratch. The main lesson: most problems are born not in the code but in decisions made before it.",
  } as L,
  aboutP3: {
    ru: "В 2026-м линии разошлись: Telegram Mini App для AI-бота с бэкендом на Python и Node, сайты с 3D-сценами, нативное macOS-приложение на Swift, свои серверы за nginx. Мне нравится, когда результат можно потрогать - и измерить в профайлере.",
    en: "In 2026 the lines branched out: a Telegram Mini App for an AI bot with a Python and Node backend, 3D websites, a native macOS app in Swift, my own servers behind nginx. I like results you can touch - and measure in a profiler.",
  } as L,
  factEducation: { ru: "Учёба", en: "Education" } as L,
  factEducationValue: { ru: "ИТМО, прикладная информатика: мобильные и сетевые технологии (бакалавр, 2029) · Облачная академия Yandex: DevOps и облака", en: "ITMO, Applied Informatics: mobile & network technologies (BSc, 2029) · Yandex Cloud Academy: DevOps and cloud" } as L,
  factLanguages: { ru: "Языки", en: "Languages" } as L,
  factLanguagesValue: { ru: "Русский - родной · English - B2", en: "Russian - native · English - B2" } as L,
  factFormat: { ru: "Формат", en: "Work format" } as L,
  factFormatValue: {
    ru: "Полная, частичная или проектная занятость · удалённо, гибрид или офис в Петербурге · готов к переезду в Москву · самозанятый, могу работать по договору · разрешение на работу в России и Казахстане",
    en: "Full-time, part-time or project work · remote, hybrid or on-site in Saint Petersburg · open to relocating to Moscow · self-employed, can work under contract · work permit for Russia and Kazakhstan",
  } as L,
  factEnv: { ru: "Рабочее место", en: "Setup" } as L,
  factEnvValue: { ru: "macOS · Xcode, Android Studio, VS Code · сборка и подпись iOS, Android, macOS", en: "macOS · Xcode, Android Studio, VS Code · iOS, Android and macOS build & signing" } as L,
  contactNote: { ru: "Обычно отвечаю в течение дня.", en: "I usually reply within a day." } as L,
  navigation: { ru: "Навигация", en: "Navigation" } as L,
  contactWord: { ru: "Связь", en: "Contact" } as L,
  allServices: { ru: "Все услуги подробно", en: "All services in detail" } as L,
  resumeHh: { ru: "Резюме на hh.kz", en: "Resume on hh.kz" } as L,
  resumePdf: { ru: "Резюме PDF", en: "Resume PDF" } as L,
  resume: { ru: "Резюме", en: "Resume" } as L,
  resumeFile: { ru: "PDF, русский", en: "PDF, English" } as L,
  topLangsLabel: { ru: "Языки в репозиториях", en: "Languages in repos" } as L,
  copied: { ru: "Скопировано", en: "Copied" } as L,
  phone: { ru: "Телефон", en: "Phone" } as L,
  copyEmail: { ru: "Скопировать почту", en: "Copy email" } as L,
  backToTop: { ru: "Наверх", en: "Back to top" } as L,
  skipToContent: { ru: "К содержанию", en: "Skip to content" } as L,
  dayScheme: { ru: "Дневная схема", en: "Day scheme" } as L,
  nightScheme: { ru: "Ночная схема", en: "Night scheme" } as L,
  sceneHint: { ru: "Нажмите на станцию - перейдёте к проекту", en: "Click a station to jump to its project" } as L,
};
