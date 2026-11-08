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
  { value: "6", label: { ru: "команд и заказчиков с 2023 года", en: "teams and clients since 2023" } },
  { value: "−50%", label: { ru: "время запуска приложения в Xouston", en: "app launch time at Xouston" } },
  { value: "4", label: { ru: "проекта в проде прямо сейчас", en: "projects live right now" } },
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
    skills: ["Flutter", "Dart", "Clean Architecture", "BLoC / Cubit", "MobX", "MVVM", "GetIt", "GoRouter", "AutoRoute", "Navigator 2.0", "Drift", "Hive", "secure_storage", "flutter_map", "Rive / Lottie", "Local notifications", "Isolates", "DevTools", "intl / l10n"],
  },
  {
    id: "m2",
    code: "2",
    name: { ru: "Веб", en: "Web" },
    description: {
      ru: "Сайты и веб-приложения: Vue, 3D на Three.js, анимация на canvas и SVG.",
      en: "Websites and web apps: Vue, 3D with Three.js, canvas and SVG motion.",
    },
    skills: ["Vue 3", "TypeScript", "Vite", "Three.js", "Canvas", "SVG-анимация", "Tailwind", "Telegram Mini Apps"],
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
    skills: ["Git", "GitHub Actions", "Docker", "nginx", "VPS", "TLS", "GitHub Pages", "Fastlane", "App Store / Google Play", "DMG-релизы"],
  },
  {
    id: "m5",
    code: "5",
    name: { ru: "Бэкенд", en: "Backend" },
    description: {
      ru: "Данные и realtime: Firebase, Supabase, REST, WebSockets, логи и мониторинг.",
      en: "Data and realtime: Firebase, Supabase, REST, WebSockets, logs and monitoring.",
    },
    skills: ["Firebase Auth", "Firestore", "FCM", "Crashlytics", "Supabase", "REST", "Dio + Retrofit", "WebSockets", "json_serializable", "freezed", "Talker"],
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
      ru: "Сайт кофейни «Будини»: 3D scroll-video на Three.js и меню с конструктором напитка, где стакан наполняется на глазах.",
      en: "A site for Budini coffee shop: a Three.js scroll-video and a menu with a drink builder where the cup fills up before your eyes.",
    },
    year: "2026",
    status: { ru: "Сайт · в проде", en: "Website · live" },
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
    name: "Telegram Mini App",
    tagline: {
      ru: "Mini App внутри Telegram с собственным деплоем на облачный сервер за nginx.",
      en: "A Mini App inside Telegram with my own deployment to a cloud server behind nginx.",
    },
    year: "2026",
    status: { ru: "Свой сервер · в проде", en: "Own server · live" },
    lines: ["m2", "m4"],
    problem: {
      ru: "Хотелось отвечать не только за клиент, но и за инфраструктуру: собрать, задеплоить и держать в проде без «отдам девопсу».",
      en: "I wanted to own more than the client: build, deploy and keep it running in production without handing it to a devops.",
    },
    solution: {
      ru: "Собрал Mini App и развернул на облачном VPS: nginx как reverse-proxy с TLS, раздача статики, автоматический выкат. Разобрался с доменом и сертификатами.",
      en: "Built the Mini App and deployed it to a cloud VPS: nginx as a reverse proxy with TLS, static serving, automated releases. Sorted out the domain and certificates.",
    },
    highlights: {
      ru: [
        "Сервер с нуля на облачном VPS",
        "nginx: TLS-сертификаты, статика, маршрутизация",
        "Автоматический выкат новой версии",
        "Интеграция с Telegram Mini App API",
      ],
      en: [
        "A server from scratch on a cloud VPS",
        "nginx: TLS certificates, static files, routing",
        "Automated release of new versions",
        "Integration with the Telegram Mini App API",
      ],
    },
    stack: ["Telegram Mini App", "nginx", "Docker", "VPS", "CI/CD"],
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
      ru: "История и наука города: сканируешь QR у памятного места - получаешь историю, карта строит пешие маршруты.",
      en: "A city's history and science: scan a QR at a landmark to get its story, and the map builds walking routes.",
    },
    year: "2025",
    status: { ru: "Коммерческий · ЦСиГН", en: "Commercial · CSiGN" },
    lines: ["m1", "m5"],
    problem: {
      ru: "Памятные места «немые»: рядом нет контекста, а маршруты статичны и не привязаны к геолокации.",
      en: "Landmarks are \"silent\": no context nearby, and routes are static and not tied to geolocation.",
    },
    solution: {
      ru: "Клиент со сканированием QR, интерактивной картой и пешими маршрутами между научными точками. Информацию можно получить и просто находясь рядом с меткой.",
      en: "A client with QR scanning, an interactive map and walking routes between science spots. You also get info just by being near a tag.",
    },
    architecture: {
      ru: "Спроектировал архитектуру клиента с нуля: Clean Architecture + feature-based, изолированный домен, MVVM, REST-бэкенд.",
      en: "Designed the client architecture from scratch: Clean Architecture + feature-based, an isolated domain, MVVM, a REST backend.",
    },
    highlights: {
      ru: [
        "Холодный старт быстрее на 30% за счёт разделения зависимостей",
        "Карта с точками наследия и построением пеших маршрутов",
        "QR и информация по близости к метке",
        "Архитектура, в которую команда добавляла фичи без переписывания ядра",
      ],
      en: [
        "Cold start 30% faster by splitting dependencies",
        "A map with heritage points and walking routes",
        "QR and info by proximity to a tag",
        "An architecture the team extended without rewriting the core",
      ],
    },
    metric: { value: "−30%", label: { ru: "холодный старт за счёт разделения зависимостей", en: "cold start by splitting dependencies" } },
    stack: ["Flutter", "Clean Architecture", "MVVM", "flutter_map", "REST", "QR"],
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
const ORDER = ["xouston", "q-story", "korst", "pora", "wallpap", "budini-coffee", "flower-cup", "dirigible", "arys", "hornet", "tg-mini-app"];
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
    company: "dirigible.community",
    role: { ru: "Веб-разработчик", en: "Web Developer" },
    location: { ru: "Удалённо · НКО", en: "Remote · NGO" },
    period: { ru: "2026", en: "2026" },
    duration: { ru: "", en: "" },
    summary: {
      ru: "Новый сайт АНО «Дирижабль» и переезд с конструктора на свой стек.",
      en: "A new site for the Dirigible NGO and a move off a site builder to my own stack.",
    },
    points: {
      ru: [
        "Написал статический генератор на Python и дизайн-систему «Вязаное полотно»",
        "Перенёс контент с Craftum и настроил редиректы",
        "Настроил автодеплой и валидацию сборки",
      ],
      en: [
        "Wrote a Python static generator and the \"knitted fabric\" design system",
        "Moved the content off Craftum and set up redirects",
        "Set up auto-deploy and build validation",
      ],
    },
    tags: ["Python", "SVG", "Migration", "Deploy"],
    line: "m2",
    url: "https://dirigible.community",
  },
  {
    company: "Xouston",
    role: { ru: "Flutter-разработчик", en: "Flutter Developer" },
    location: { ru: "Фриланс · медтех", en: "Freelance · medtech" },
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
        "Рефакторинг legacy, код-ревью, Agile и прямой контакт с заказчиком",
      ],
      en: [
        "Moved game mechanics from WebView into native Flutter",
        "Water balance, recipe suggestions, AI and analytics",
        "Deferred startup: 50% faster launch; caching: up to +30% performance",
        "Legacy refactoring, code reviews, Agile and direct client contact",
      ],
    },
    tags: ["Flutter", "AI", "Legacy → Modern", "Caching"],
    line: "m1",
  },
  {
    company: "ЦСиГН",
    role: { ru: "Flutter-разработчик", en: "Flutter Developer" },
    location: { ru: "Санкт-Петербург · культура", en: "Saint Petersburg · culture" },
    period: { ru: "Сен - Дек 2025", en: "Sep - Dec 2025" },
    duration: { ru: "4 мес", en: "4 mo" },
    summary: {
      ru: "Q-Story: история и пешие маршруты через QR и карту. Архитектура клиента - моя.",
      en: "Q-Story: history and walking routes via QR and a map. The client architecture is mine.",
    },
    points: {
      ru: [
        "Спроектировал архитектуру клиента: Clean Architecture, feature-based",
        "QR, геолокация, карты и пешие маршруты, связка с backend API",
        "Контент без сканирования: достаточно оказаться рядом с меткой",
        "Холодный старт быстрее примерно на 30%: разделил зависимости и грузил их по мере надобности",
      ],
      en: [
        "Designed the client architecture: Clean Architecture, feature-based",
        "QR, geolocation, maps and walking routes, wired to the backend API",
        "Content without scanning: just being near the marker is enough",
        "Cold start about 30% faster by splitting dependencies and loading them on demand",
      ],
    },
    tags: ["Clean Architecture", "Maps", "Performance", "REST"],
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
        "Клиент, барбер и администратор с разграничением прав",
        "Бронирование с выбором услуг и realtime-расписанием",
        "Firebase (Auth, Firestore), база оптимизирована больше чем на 20%",
        "Приложения клиента и барбера объединил, админ-панель вынес отдельно",
      ],
      en: [
        "Client, barber and admin with permission separation",
        "Booking with service selection and a realtime schedule",
        "Firebase (Auth, Firestore), database optimised by over 20%",
        "Merged the client and barber apps, moved the admin panel out on its own",
      ],
    },
    tags: ["Firebase", "Realtime", "Roles", "BLoC"],
    line: "m5",
  },
  {
    company: "Freelance",
    role: { ru: "Junior Flutter-разработчик", en: "Junior Flutter Developer" },
    location: { ru: "Астана · доставка", en: "Astana · delivery" },
    period: { ru: "Окт 2023 - Мар 2024", en: "Oct 2023 - Mar 2024" },
    duration: { ru: "6 мес", en: "6 mo" },
    summary: {
      ru: "Новые модули приложения доставки внутри существующей кодовой базы.",
      en: "New modules for a delivery app inside an existing codebase.",
    },
    points: {
      ru: [
        "Поиск с debounce и учётом concurrency",
        "10 экранов по макетам Figma",
        "Исправил ключевые ошибки - стабильность выросла на 40%",
      ],
      en: [
        "Search with debounce and concurrency handling",
        "10 screens from Figma mockups",
        "Fixed key bugs - stability up 40%",
      ],
    },
    tags: ["Search", "Figma", "Stability"],
    line: "m1",
  },
  {
    company: "SKian",
    role: { ru: "Стажёр Flutter", en: "Flutter Intern" },
    location: { ru: "Петропавловск · логистика", en: "Petropavlovsk · logistics" },
    period: { ru: "Июн - Авг 2023", en: "Jun - Aug 2023" },
    duration: { ru: "3 мес", en: "3 mo" },
    summary: {
      ru: "Первые боевые задачи на Flutter: начало линии.",
      en: "My first real Flutter tasks: where the line begins.",
    },
    points: {
      ru: [
        "Deep Links сразу в нужные разделы",
        "Система рекламных баннеров",
        "Вёрстка по Figma и async-сценарии",
      ],
      en: [
        "Deep Links straight into the right sections",
        "An ad-banner system",
        "UI from Figma and async flows",
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
  { title: { ru: "Быстро вхожу в чужой код", en: "I get into other people's code fast" }, description: { ru: "Шесть команд и заказчиков с 2023 года. Незнакомый стек не пугает - Swift-приложение под macOS тому пример.", en: "Six teams and clients since 2023. An unfamiliar stack doesn't scare me - a Swift macOS app is proof." } },
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
  { ru: "PORA - список покупок для семьи", en: "PORA - the family shopping list" },
  { ru: "dirigible.community - центр социальных практик", en: "dirigible.community - a social practice centre" },
  { ru: "Xouston - игры для памяти", en: "Xouston - games for memory" },
  { ru: "Q-Story - история города по QR", en: "Q-Story - city history by QR" },
  { ru: "KORST - маркетплейс с живым чатом", en: "KORST - a marketplace with live chat" },
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
    ru: "В 2026-м линии разошлись: сайты с 3D-сценами для кофейни и эко-стартапа, нативное macOS-приложение на Swift, свои серверы за nginx. Мне нравится, когда результат можно потрогать - и измерить в профайлере.",
    en: "In 2026 the lines branched out: 3D websites for a coffee shop and an eco-startup, a native macOS app in Swift, my own servers behind nginx. I like results you can touch - and measure in a profiler.",
  } as L,
  factEducation: { ru: "Учёба", en: "Education" } as L,
  factEducationValue: { ru: "ИТМО, прикладная информатика: мобильные и сетевые технологии (бакалавр, 2029)", en: "ITMO, Applied Informatics: mobile & network technologies (BSc, 2029)" } as L,
  factLanguages: { ru: "Языки", en: "Languages" } as L,
  factLanguagesValue: { ru: "Русский - родной · English - B2", en: "Russian - native · English - B2" } as L,
  factFormat: { ru: "Формат", en: "Work format" } as L,
  factFormatValue: {
    ru: "Полная, частичная или проектная занятость · удалённо, гибрид или офис в Петербурге · разрешение на работу в России и Казахстане",
    en: "Full-time, part-time or project work · remote, hybrid or on-site in Saint Petersburg · work permit for Russia and Kazakhstan",
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
