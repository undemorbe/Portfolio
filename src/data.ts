import type { Component } from "vue";
import {
  Boxes,
  Braces,
  Cloud,
  Database,
  GitBranch,
  Layers,
  Map,
  Bell,
  Smartphone,
  Terminal,
  Workflow,
  Languages,
  Gauge,
  ShieldCheck,
  Rocket,
  Code2,
  PenTool,
  Wrench,
  Search,
  RefreshCw,
  Server,
  Send,
  Globe,
} from "lucide-vue-next";
import type { L, LList } from "@/i18n";

export const site = {
  name: "Boris Stankov",
  nameRu: "Борис Станьков",
  role: "Flutter Developer",
  tagline: {
    ru: "Flutter-разработчик. Делаю мобильные приложения под iOS и Android, иногда ухожу в веб и деплой. За 2 года - пять команд и проектов от доставки до медтеха.",
    en: "Flutter developer. I build mobile apps for iOS and Android, and sometimes go into web and deployment. In 2 years - five teams and projects, from delivery to medtech.",
  } as L,
  shortBio: {
    ru: "Flutter-разработчик из Санкт-Петербурга, студент ИТМО. Мобильные приложения под iOS и Android.",
    en: "Flutter developer from Saint Petersburg, ITMO student. Mobile apps for iOS and Android.",
  } as L,
  location: {
    ru: "Санкт-Петербург, Россия",
    en: "Saint Petersburg, Russia",
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
  resumeUrl:
    "https://drive.google.com/file/d/1Ag2p9i02TyCG4S95Gn93LD3-IXcocto_/view",
  url: "https://undemorbe.github.io/Portfolio",
  avatar: "/images/boris.jpg",
} as const;

export const stats: { value: number; suffix: string; label: L }[] = [
  { value: 2, suffix: "+", label: { ru: "года коммерческого опыта", en: "years of commercial work" } },
  { value: 5, suffix: "", label: { ru: "команд и проектов", en: "teams & projects" } },
  { value: 50, suffix: "%", label: { ru: "ускорение запуска приложения", en: "faster app startup" } },
  { value: 40, suffix: "%", label: { ru: "рост стабильности приложения", en: "more app stability" } },
];

export type Project = {
  slug: string;
  name: string;
  tagline: L;
  year: string;
  status: L;
  featured: boolean;
  problem: L;
  solution: L;
  architecture: L;
  highlights: LList;
  results: LList;
  learned: L;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  note?: L;
};

export const projects: Project[] = [
  {
    slug: "pora",
    name: "PORA",
    tagline: {
      ru: "Семейный список покупок, который сам достаёт ингредиенты из рецепта, убирает дубли и подсказывает, когда пора докупить.",
      en: "A family shopping list that pulls ingredients from a recipe link, removes duplicates and hints when it's time to restock.",
    },
    year: "2026",
    status: { ru: "Пет-проект · в разработке", en: "Pet project · in progress" },
    featured: true,
    problem: {
      ru: "Семьи ведут покупки в заметках и чатах: дубли, забытые ингредиенты, «а молоко кто-то взял?». Обычный список не понимает, что вы готовите.",
      en: "Families keep shopping in notes and chats: duplicates, forgotten items, \"did anyone grab the milk?\". A plain list has no idea what you're cooking.",
    },
    solution: {
      ru: "Общий realtime-список с привязкой позиций к участникам. Вставляешь ссылку на рецепт - ингредиенты разбираются и добавляются с дедупликацией. Плюс подсказки «пора докупить» по истории.",
      en: "A shared realtime list where items belong to members. Paste a recipe link and ingredients get parsed and added with de-duplication, plus \"time to restock\" hints based on history.",
    },
    architecture: {
      ru: "Clean Architecture + разбиение по фичам (data / domain / presentation внутри каждой фичи). Общая инфраструктура, тема и роутинг вынесены отдельно. Кодогенерация моделей, роутов и сторов.",
      en: "Clean Architecture with feature-based split (data / domain / presentation inside each feature). Shared infra, theming and routing live separately. Code-gen for models, routes and stores.",
    },
    highlights: {
      ru: [
        "Двухфазный запуск: критическая синхронная инициализация + асинхронный bootstrap под splash - быстрый первый кадр без блокировки UI",
        "Отдельный сервис превращает ссылку на рецепт в структурированный список ингредиентов",
        "Realtime-синхронизация списка между участниками поверх WebSockets",
        "CI/CD на GitHub Actions: проверка PR и автосборка Android-релиза после мержа",
      ],
      en: [
        "Two-phase startup: critical sync init + async bootstrap under a splash gate - fast first frame without blocking the UI",
        "A separate service turns a recipe link into a structured ingredient list",
        "Realtime list sync between members over WebSockets",
        "CI/CD on GitHub Actions: PR checks and an automatic Android release build after merge",
      ],
    },
    results: {
      ru: [
        "Цельная архитектура: DI-контейнер, интерсепторы авторизации и ретраев, secure storage для токенов",
        "Единый паттерн слоёв - новую фичу можно добавить, не трогая остальные",
      ],
      en: [
        "A coherent architecture: DI container, auth/retry interceptors, secure storage for tokens",
        "One layering pattern - a new feature can be added without touching the rest",
      ],
    },
    learned: {
      ru: "Как встроить парсинг в доменный слой с чистыми контрактами, а не прикручивать «фичу сверху».",
      en: "How to build parsing into the domain layer with clean contracts, instead of bolting on a feature from the outside.",
    },
    stack: ["Flutter", "MobX", "GetIt", "AutoRoute", "Dio + Retrofit", "Hive", "Firebase / FCM", "WebSockets"],
    githubUrl: "https://github.com/undemorbe/PORA",
  },
  {
    slug: "tg-mini-app",
    name: "Telegram Mini App",
    tagline: {
      ru: "Недавний проект: Telegram Mini App с собственным деплоем на облачный сервер за nginx.",
      en: "A recent project: a Telegram Mini App with my own deployment to a cloud server behind nginx.",
    },
    year: "2026",
    status: { ru: "Недавний проект", en: "Recent project" },
    featured: true,
    problem: {
      ru: "Хотелось не только написать клиент, но и самому отвечать за инфраструктуру: собрать, задеплоить и держать приложение в проде без «отдам девопсу».",
      en: "I wanted to own more than the client code - to build, deploy and keep the app running in production myself, instead of handing it off to a devops.",
    },
    solution: {
      ru: "Собрал Telegram Mini App и развернул его на облачном VPS: nginx как reverse-proxy с TLS, раздача статики, автоматический деплой. Разобрался с доменом, сертификатами и процессом выката.",
      en: "Built a Telegram Mini App and deployed it to a cloud VPS: nginx as a reverse proxy with TLS, static serving and an automated deploy. Figured out the domain, certificates and the release flow.",
    },
    architecture: {
      ru: "Веб-клиент Mini App + серверная раздача через nginx на облачном VPS. Деплой и перевыкат автоматизированы.",
      en: "A Mini App web client plus nginx serving on a cloud VPS. Deploy and re-release are automated.",
    },
    highlights: {
      ru: [
        "Деплой на облачный VPS - настройка сервера с нуля",
        "nginx как reverse-proxy: TLS-сертификаты, раздача статики, маршрутизация",
        "Автоматизированный выкат новой версии",
        "Интеграция клиента с Telegram Mini App API",
      ],
      en: [
        "Deployment to a cloud VPS - server set up from scratch",
        "nginx as a reverse proxy: TLS certificates, static serving, routing",
        "Automated release of a new version",
        "Client integration with the Telegram Mini App API",
      ],
    },
    results: {
      ru: [
        "Приложение, которое я сам собрал и держу в проде на своём сервере",
        "Практический опыт с nginx, доменами, сертификатами и облаком",
      ],
      en: [
        "An app I built myself and keep running in production on my own server",
        "Hands-on experience with nginx, domains, certificates and the cloud",
      ],
    },
    learned: {
      ru: "Что значит отвечать за приложение целиком - от кода до работающего прод-деплоя.",
      en: "What it means to own an app end to end - from the code to a working production deployment.",
    },
    note: {
      ru: "Готов дополнить описание деталями проекта - назначение, стек, ссылка.",
      en: "Happy to expand this with project details - purpose, stack, link.",
    },
    stack: ["Telegram Mini App", "nginx", "Docker", "VPS / Cloud", "CI/CD"],
  },
  {
    slug: "q-story",
    name: "Q-Story",
    tagline: {
      ru: "Приложение об истории и науке города: сканируешь QR рядом с памятным местом и получаешь историю, карта строит пешие маршруты.",
      en: "An app about a city's history and science: scan a QR near a landmark to get its story, and the map builds walking routes.",
    },
    year: "2025",
    status: { ru: "Коммерческий проект · ЦСиГН", en: "Commercial project · CSiGN" },
    featured: true,
    problem: {
      ru: "Памятные места «немые»: рядом нет контекста, а туристические маршруты статичны и не привязаны к реальной геолокации.",
      en: "Landmarks are \"silent\": no context nearby, and tourist routes are static and not tied to real geolocation.",
    },
    solution: {
      ru: "Клиент, где пользователь сканирует QR на объекте и получает историю, а интерактивная карта строит пешие маршруты между научными точками города. Можно получить информацию и просто находясь рядом с меткой.",
      en: "A client where you scan a QR on an object and get its story, while an interactive map builds walking routes between the city's science spots. You can also get info just by being near a tag.",
    },
    architecture: {
      ru: "Спроектировал архитектуру клиента с нуля: Clean Architecture + Feature-based, изолированный доменный слой, презентация на MVVM, интеграция с REST-бэкендом.",
      en: "Designed the client architecture from scratch: Clean Architecture + feature-based, an isolated domain layer, MVVM presentation and REST backend integration.",
    },
    highlights: {
      ru: [
        "Оптимизация холодного старта и загрузки контента - время запуска сокращено на 30%",
        "Интерактивная карта с точками наследия и построением пеших маршрутов",
        "Сканирование QR и получение информации по близости к метке",
        "Связал мобильную часть с backend API",
      ],
      en: [
        "Cold-start and content-loading optimization - startup time cut by 30%",
        "Interactive map with heritage points and walking-route building",
        "QR scanning and getting info by proximity to a tag",
        "Wired the mobile side to the backend API",
      ],
    },
    results: {
      ru: [
        "−30% ко времени запуска после разделения зависимостей и подгрузки в моменте",
        "Архитектура, в которую команда добавляла фичи без переписывания ядра",
      ],
      en: [
        "−30% startup time after splitting dependencies and loading on demand",
        "An architecture the team extended without rewriting the core",
      ],
    },
    learned: {
      ru: "Как проектировать архитектуру под живой продукт в команде, чтобы решения по слоям выдерживали поток новых требований.",
      en: "How to design architecture for a live team product so the layering survives a stream of new requirements.",
    },
    stack: ["Flutter", "Clean Architecture", "MVVM", "flutter_map", "REST API", "QR"],
    githubUrl: "https://github.com/undemorbe/Q-Story",
  },
  {
    slug: "xouston",
    name: "Xouston",
    tagline: {
      ru: "Приложение для тренировки когнитивных функций у пожилых: игры, здоровье и привычки. Перенёс игры из WebView в нативный Flutter.",
      en: "An app for cognitive training for elderly users: games, health and habits. I moved the games from WebView into native Flutter.",
    },
    year: "2025-2026",
    status: { ru: "Коммерческий проект", en: "Commercial project" },
    featured: false,
    problem: {
      ru: "Часть игр жила в WebView - медленно, негибко и плохо на слабых устройствах. Плюс накопился legacy на устаревшем стеке.",
      en: "Some games lived in a WebView - slow, rigid and poor on weak devices. On top of that, legacy had piled up on an outdated stack.",
    },
    solution: {
      ru: "Перенёс игры из WebView в нативный Flutter, реализовал механики здоровья (водный баланс, рекомендации рецептов), интегрировал ИИ и аналитику, мигрировал legacy на современный стек.",
      en: "Moved the games from WebView to native Flutter, built health mechanics (water balance, recipe suggestions), integrated AI and analytics, and migrated legacy to a modern stack.",
    },
    architecture: {
      ru: "Рефакторинг legacy-базы, система отложенного запуска, кеширование данных, поддержка качества через регулярные код-ревью. Agile и прямой контакт с заказчиком.",
      en: "Legacy refactoring, a deferred-startup system, data caching and quality upkeep through regular code reviews. Agile with direct client contact.",
    },
    highlights: {
      ru: [
        "Перенос игр из WebView в нативный Flutter - плавность и контроль над UX",
        "Отложенный запуск ускорил старт приложения на 50%",
        "Кеширование данных дало до +30% к производительности",
        "Код-ревью коллег и поддержание качества кодовой базы",
      ],
      en: [
        "Moved games from WebView to native Flutter - smoothness and UX control",
        "Deferred startup sped the app launch up by 50%",
        "Data caching gave up to +30% performance",
        "Peer code reviews and keeping the codebase healthy",
      ],
    },
    results: {
      ru: [
        "+50% к скорости запуска и до +30% к производительности",
        "Legacy переведён на современный стек без остановки продукта",
      ],
      en: [
        "+50% startup speed and up to +30% performance",
        "Legacy moved to a modern stack without stopping the product",
      ],
    },
    learned: {
      ru: "Как вытаскивать продукт из технического долга по частям - мигрируя legacy и одновременно поставляя новые фичи.",
      en: "How to pull a product out of tech debt piece by piece - migrating legacy while still shipping new features.",
    },
    stack: ["Flutter", "Native", "AI integration", "Caching", "Code Review", "Agile"],
  },
  {
    slug: "hornet",
    name: "Hornet",
    tagline: {
      ru: "Галерея изображений с агрегацией из нескольких API, поиском по тегам и кастомными переходами. Самый оценённый мой open-source.",
      en: "An image gallery aggregating several APIs, with tag search and custom transitions. My most-starred open-source project.",
    },
    year: "2025",
    status: { ru: "Open source · 3★ на GitHub", en: "Open source · 3★ on GitHub" },
    featured: false,
    problem: {
      ru: "Контент разбросан по источникам с несовместимыми API, а листание больших лент картинок на мобиле легко превращается в лагающий UI.",
      en: "Content is scattered across sources with incompatible APIs, and scrolling big image feeds on mobile easily turns into a janky UI.",
    },
    solution: {
      ru: "Единый клиент поверх нескольких API с фильтрацией, поиском по тегам с подсказками, историей просмотров и полноэкранным режимом.",
      en: "A single client over several APIs with filtering, tag search with suggestions, view history and a fullscreen mode.",
    },
    architecture: {
      ru: "BLoC/Cubit как основной паттерн состояния - отдельные кубиты под анимации, показ изображений и категории. Роутинг на GoRouter с кастомными переходами, DI на GetIt.",
      en: "BLoC/Cubit as the main state pattern - separate cubits for animations, image display and categories. GoRouter routing with custom transitions, GetIt for DI.",
    },
    highlights: {
      ru: [
        "Кастомная анимированная app bar и поисковый overlay с подсказками",
        "Кэширование изображений + ленивая загрузка + контроль перестроений виджетов",
        "Кастомные переходы между экранами через GoRouter",
        "Локальное хранение истории на Hive",
      ],
      en: [
        "Custom animated app bar and a search overlay with suggestions",
        "Image caching + lazy loading + control over widget rebuilds",
        "Custom screen transitions via GoRouter",
        "Local history storage on Hive",
      ],
    },
    results: {
      ru: [
        "Плавная лента за счёт кэширования и контроля rebuild'ов",
        "3 звезды на GitHub - самый оценённый публичный проект",
      ],
      en: [
        "A smooth feed thanks to caching and rebuild control",
        "3 stars on GitHub - my most-appreciated public project",
      ],
    },
    learned: {
      ru: "Где граница между «реактивно и удобно» (много мелких кубитов) и «предсказуемо» - и как держать rebuild'ы под контролем на тяжёлых экранах.",
      en: "Where the line is between \"reactive and handy\" (many small cubits) and \"predictable\" - and how to keep rebuilds under control on heavy screens.",
    },
    stack: ["Flutter", "BLoC / Cubit", "GoRouter", "Dio", "Hive", "GetIt"],
    githubUrl: "https://github.com/undemorbe/hornet",
  },
  {
    slug: "arys-barbershop",
    name: "ARYS - Barbershop",
    tagline: {
      ru: "Онлайн-запись в барбершоп с тремя ролями в одном приложении: клиент, барбер, администратор.",
      en: "Online barbershop booking with three roles in one app: client, barber, admin.",
    },
    year: "2024",
    status: { ru: "Коммерческий проект", en: "Commercial project" },
    featured: false,
    problem: {
      ru: "Барбершопу нужно одно приложение для трёх разных сценариев: клиент бронирует, барбер ведёт расписание, админ всё контролирует - с разными правами.",
      en: "A barbershop needs one app for three different scenarios: the client books, the barber manages a schedule, the admin controls everything - with different permissions.",
    },
    solution: {
      ru: "Один Flutter-клиент с ролевой моделью: бронирование к конкретному барберу с выбором услуг и расписанием в реальном времени, управление доступностью и админ-панель.",
      en: "One Flutter client with a role model: booking a specific barber with service selection and a realtime schedule, availability management and an admin panel.",
    },
    architecture: {
      ru: "Разделение ролей и прав на бэкенде (Firebase) и в клиенте. Спроектировал и оптимизировал базу данных более чем на 20%. Приложения барбера и клиента объединил, админку вынес отдельно.",
      en: "Role and permission separation on the backend (Firebase) and in the client. Designed and optimized the database by over 20%. Merged the barber and client apps, split the admin panel out.",
    },
    highlights: {
      ru: [
        "Три ролевых потока в одном приложении с разделением прав на клиенте и сервере",
        "Realtime-календарь записей поверх Firestore",
        "Бэкенд на Firebase: Auth + Firestore, база оптимизирована на >20%",
        "Отдельная админ-панель, объединённое приложение барбера и клиента",
      ],
      en: [
        "Three role flows in one app with permission separation on client and server",
        "Realtime booking calendar on top of Firestore",
        "Firebase backend: Auth + Firestore, database optimized by >20%",
        "A separate admin panel, with the barber and client apps merged",
      ],
    },
    results: {
      ru: [
        "Работающая система бронирования с ролевым доступом от клиента до админа",
        "Сделал самостоятельно как отдельный коммерческий проект",
      ],
      en: [
        "A working booking system with role access from client to admin",
        "Built on my own as a standalone commercial project",
      ],
    },
    learned: {
      ru: "Как моделировать права так, чтобы одна кодовая база безопасно обслуживала роли с разными привилегиями - и на клиенте, и на сервере.",
      en: "How to model permissions so one codebase safely serves roles with different privileges - on both client and server.",
    },
    stack: ["Flutter", "Firebase Auth", "Firestore", "BLoC", "GoRouter"],
    githubUrl: "https://github.com/undemorbe/barber_booker",
  },
];

export type ExperienceItem = {
  company: string;
  role: L;
  location: L;
  period: L;
  duration: L;
  summary: L;
  points: LList;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "dirigible.community",
    role: { ru: "Веб-разработчик", en: "Web Developer" },
    location: { ru: "Удалённо · веб", en: "Remote · web" },
    period: { ru: "2026", en: "2026" },
    duration: { ru: "", en: "" },
    summary: {
      ru: "Разработка и перенос сайта dirigible.community.",
      en: "Development and migration of the dirigible.community website.",
    },
    points: {
      ru: [
        "Разработал сайт dirigible.community",
        "Перенёс сайт на новый стек и хостинг (миграция)",
        "Настроил деплой и выкладку обновлений",
      ],
      en: [
        "Built the dirigible.community website",
        "Migrated the site to a new stack and hosting",
        "Set up deployment and shipping of updates",
      ],
    },
    tags: ["Web", "Migration", "Deploy"],
  },
  {
    company: "Freelance",
    role: { ru: "Flutter-разработчик", en: "Flutter Developer" },
    location: { ru: "Санкт-Петербург · медтех", en: "Saint Petersburg · medtech" },
    period: { ru: "Декабрь 2025 - Май 2026", en: "Dec 2025 - May 2026" },
    duration: { ru: "6 месяцев", en: "6 months" },
    summary: {
      ru: "Приложение для тренировки когнитивных функций у пожилых пользователей (Xouston).",
      en: "An app for cognitive training for elderly users (Xouston).",
    },
    points: {
      ru: [
        "Перенёс игровые механики из WebView в нативный Flutter",
        "Сделал контроль водного баланса и рекомендации рецептов, интегрировал ИИ и аналитику",
        "Система отложенного запуска ускорила старт приложения на 50%",
        "Кеширование данных дало прирост производительности до 30%",
        "Рефакторинг legacy-кода, код-ревью, Agile и согласование решений с заказчиком",
      ],
      en: [
        "Moved game mechanics from WebView into native Flutter",
        "Built water-balance tracking and recipe suggestions, integrated AI and analytics",
        "A deferred-startup system sped the app launch up by 50%",
        "Data caching gave up to 30% performance gain",
        "Legacy refactoring, code reviews, Agile and aligning decisions with the client",
      ],
    },
    tags: ["Native", "AI", "Legacy → Modern", "Caching", "Code Review", "Agile"],
  },
  {
    company: "ЦСиГН",
    role: { ru: "Flutter-разработчик", en: "Flutter Developer" },
    location: { ru: "Санкт-Петербург · культура", en: "Saint Petersburg · culture" },
    period: { ru: "Июнь 2025 - Сентябрь 2025", en: "Jun 2025 - Sep 2025" },
    duration: { ru: "4 месяца", en: "4 months" },
    summary: {
      ru: "История и пешие маршруты через QR и карту (Q-Story). Спроектировал архитектуру клиента.",
      en: "History and walking routes via QR and a map (Q-Story). Designed the client architecture.",
    },
    points: {
      ru: [
        "Полностью спроектировал архитектуру клиента (Clean Architecture, Feature-based)",
        "Реализовал сканирование QR и получение информации по близости к метке",
        "Сделал карты, геолокацию и пешие маршруты, связал модули с backend API",
        "Оптимизировал холодный старт - сократил время запуска примерно на 30%",
        "Участвовал в проектировании структуры новых модулей",
      ],
      en: [
        "Fully designed the client architecture (Clean Architecture, feature-based)",
        "Built QR scanning and getting info by proximity to a tag",
        "Built maps, geolocation and walking routes, wired modules to the backend API",
        "Optimized cold start - cut startup time by about 30%",
        "Took part in designing the structure of new modules",
      ],
    },
    tags: ["Clean Architecture", "Maps", "Performance", "REST"],
  },
  {
    company: "Arys",
    role: { ru: "Flutter-разработчик", en: "Flutter Developer" },
    location: { ru: "Петропавловск · бьюти", en: "Petropavlovsk · beauty" },
    period: { ru: "Май 2024 - Октябрь 2024", en: "May 2024 - Oct 2024" },
    duration: { ru: "6 месяцев", en: "6 months" },
    summary: {
      ru: "Самостоятельно сделал приложение онлайн-записи в барбершоп с тремя ролями.",
      en: "Built a barbershop online-booking app with three roles on my own.",
    },
    points: {
      ru: [
        "Реализовал три роли: клиент, барбер и администратор, с разграничением прав",
        "Сделал онлайн-бронирование с выбором услуг и расписанием в реальном времени",
        "Бэкенд на Firebase (Auth, Firestore), спроектировал и оптимизировал базу на >20%",
        "Создал отдельную админ-панель, приложения барбера и клиента объединил",
      ],
      en: [
        "Built three roles - client, barber and admin - with permission separation",
        "Built online booking with service selection and a realtime schedule",
        "Firebase backend (Auth, Firestore), designed and optimized the database by >20%",
        "Created a separate admin panel, merged the barber and client apps",
      ],
    },
    tags: ["Firebase", "Realtime", "Roles", "BLoC"],
  },
  {
    company: "Freelance",
    role: { ru: "Junior Flutter-разработчик", en: "Junior Flutter Developer" },
    location: { ru: "Астана · доставка", en: "Astana · delivery" },
    period: { ru: "Октябрь 2023 - Март 2024", en: "Oct 2023 - Mar 2024" },
    duration: { ru: "6 месяцев", en: "6 months" },
    summary: {
      ru: "Новые модули мобильного приложения доставки, работа с существующей кодовой базой.",
      en: "New modules for a delivery app, working within an existing codebase.",
    },
    points: {
      ru: [
        "Сделал поиск с debounce и учётом concurrency",
        "Сверстал 10 экранов по макетам из Figma",
        "Исправил ключевые ошибки и повысил стабильность приложения на 40%",
        "Интегрировал новые изменения в существующую кодовую базу",
      ],
      en: [
        "Built search with debounce and concurrency handling",
        "Implemented 10 screens from Figma mockups",
        "Fixed key bugs and improved app stability by 40%",
        "Integrated new changes into the existing codebase",
      ],
    },
    tags: ["Search", "Figma", "Stability", "Flutter"],
  },
  {
    company: "SKian",
    role: { ru: "Intern Flutter-разработчик", en: "Intern Flutter Developer" },
    location: { ru: "Петропавловск · логистика", en: "Petropavlovsk · logistics" },
    period: { ru: "Июнь 2023 - Август 2023", en: "Jun 2023 - Aug 2023" },
    duration: { ru: "3 месяца", en: "3 months" },
    summary: {
      ru: "Стажировка: первые боевые задачи на Flutter в приложении доставки.",
      en: "Internship: my first real Flutter tasks in a delivery app.",
    },
    points: {
      ru: [
        "Настроил Deep Links для перехода сразу к нужным разделам",
        "Реализовал систему показа рекламных баннеров",
        "Сверстал часть интерфейса по макетам Figma, работал с async-сценариями",
        "Исправлял ошибки",
      ],
      en: [
        "Set up Deep Links to jump straight to the right sections",
        "Built an ad-banner display system",
        "Implemented part of the UI from Figma mockups, worked with async flows",
        "Fixed bugs",
      ],
    },
    tags: ["Deep Links", "Figma", "Async"],
  },
];

export type SkillGroup = { title: L; icon: Component; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { title: { ru: "Языки и фреймворки", en: "Languages & frameworks" }, icon: Braces, skills: ["Flutter", "Dart", "Kotlin", "Swift"] },
  { title: { ru: "State management", en: "State management" }, icon: Boxes, skills: ["BLoC", "Cubit", "MobX"] },
  { title: { ru: "Архитектура", en: "Architecture" }, icon: Layers, skills: ["Clean Architecture", "Feature-based", "MVVM", "GetIt"] },
  { title: { ru: "Сеть", en: "Networking" }, icon: Cloud, skills: ["Dio", "Retrofit", "WebSockets", "json_serializable", "freezed"] },
  { title: { ru: "Локальные данные", en: "Local storage" }, icon: Database, skills: ["Drift (SQLite)", "Hive", "secure_storage"] },
  { title: { ru: "Backend (BaaS)", en: "Backend (BaaS)" }, icon: Terminal, skills: ["Firebase Auth", "Firestore", "FCM", "Crashlytics", "Supabase"] },
  { title: { ru: "Роутинг", en: "Routing" }, icon: Workflow, skills: ["GoRouter", "AutoRoute", "Navigator 2.0"] },
  { title: { ru: "Карты", en: "Maps" }, icon: Map, skills: ["flutter_map", "OpenStreetMap"] },
  { title: { ru: "Уведомления", en: "Notifications" }, icon: Bell, skills: ["FCM", "flutter_local_notifications"] },
  { title: { ru: "DevOps и деплой", en: "DevOps & deploy" }, icon: Server, skills: ["Docker", "nginx", "VPS / Cloud", "CI/CD (GitHub Actions)", "Fastlane"] },
  { title: { ru: "Производительность", en: "Performance" }, icon: Gauge, skills: ["Isolates", "Flutter DevTools", "WebP / SVG", "jank profiling"] },
  { title: { ru: "Логи и мониторинг", en: "Logging & monitoring" }, icon: GitBranch, skills: ["Talker", "Firebase Crashlytics"] },
  { title: { ru: "Локализация", en: "Localization" }, icon: Languages, skills: ["intl", "l10n"] },
];

export type Philosophy = { title: L; body: L; icon: Component };

export const philosophy: Philosophy[] = [
  {
    title: { ru: "Сначала подумать, потом писать", en: "Think first, code second" },
    icon: Layers,
    body: {
      ru: "Стараюсь заранее прикинуть, где будет бизнес-логика, где данные, где UI. Clean Architecture и разбиение по фичам помогают не превратить проект в кашу.",
      en: "I try to work out up front where the business logic, data and UI will live. Clean Architecture and a feature-based split keep the project from turning into a mess.",
    },
  },
  {
    title: { ru: "Хороший код - тот, что читается через полгода", en: "Good code is code you can read in six months" },
    icon: ShieldCheck,
    body: {
      ru: "Качество для меня - это когда через полгода открываешь файл и сразу понимаешь, что там. Иммутабельные модели, типизированные события, код-ревью. Скучный понятный код обычно лучше «умного» однострочника.",
      en: "Quality to me is opening a file in six months and instantly getting it. Immutable models, typed events, code review. Boring readable code usually beats a clever one-liner.",
    },
  },
  {
    title: { ru: "Новую фичу - без боли для старых", en: "A new feature shouldn't hurt the old ones" },
    icon: Boxes,
    body: {
      ru: "Когда код разбит по фичам, новый модуль не тянет за собой правки в десяти других местах. Так проще и добавлять, и потом разбираться, что где лежит.",
      en: "When code is split by feature, a new module doesn't drag edits into ten other places. It's easier to add things and to find them later.",
    },
  },
  {
    title: { ru: "Инструмент под задачу, а не наоборот", en: "Pick the tool for the task, not the habit" },
    icon: Gauge,
    body: {
      ru: "Выбираю стек под задачу: MobX - где нужна реактивность и скорость, BLoC - где важна предсказуемость в крупных фичах. Не тащу везде одно и то же по привычке.",
      en: "I pick the stack for the task: MobX where I need reactivity and speed, BLoC where large features need predictability. I don't drag the same thing everywhere out of habit.",
    },
  },
];

export type ProcessStep = { title: L; description: L; icon: Component };

export const process: ProcessStep[] = [
  { title: { ru: "Идея", en: "Idea" }, description: { ru: "Разбираю задачу и цель: что за продукт, кто пользователь, что критично.", en: "I dig into the task and the goal: what the product is, who the user is, what's critical." }, icon: Search },
  { title: { ru: "Проектирование", en: "Design" }, description: { ru: "Экраны, сценарии, границы фич. Согласование с дизайном и заказчиком.", en: "Screens, flows, feature boundaries. Aligning with design and the client." }, icon: PenTool },
  { title: { ru: "Архитектура", en: "Architecture" }, description: { ru: "Слои, зависимости, выбор state-management и хранилища. Здесь закладывается масштаб.", en: "Layers, dependencies, state-management and storage choices. This is where scale is set." }, icon: Layers },
  { title: { ru: "Разработка", en: "Development" }, description: { ru: "Feature-based модули, кодогенерация, DI. Чистый и тестируемый код.", en: "Feature-based modules, code-gen, DI. Clean, testable code." }, icon: Code2 },
  { title: { ru: "Тестирование", en: "Testing" }, description: { ru: "Профилирование FPS в DevTools, поиск jank-кадров, устранение лишних rebuild'ов.", en: "FPS profiling in DevTools, hunting jank frames, removing unnecessary rebuilds." }, icon: Gauge },
  { title: { ru: "Релиз", en: "Release" }, description: { ru: "Сборка iOS/Android, CI/CD, деплой (в т.ч. свой сервер за nginx), публикация в сторы.", en: "iOS/Android builds, CI/CD, deployment (incl. my own server behind nginx), store publishing." }, icon: Rocket },
  { title: { ru: "Поддержка", en: "Support" }, description: { ru: "Crashlytics, логи через Talker, итеративные улучшения по обратной связи.", en: "Crashlytics, logs via Talker, iterative improvements from feedback." }, icon: RefreshCw },
];

export type Service = { title: L; description: L; icon: Component };

export const services: Service[] = [
  { title: { ru: "Flutter-приложения", en: "Flutter apps" }, description: { ru: "Кроссплатформенные приложения для iOS и Android из одной кодовой базы - от идеи до релиза.", en: "Cross-platform apps for iOS and Android from one codebase - from idea to release." }, icon: Smartphone },
  { title: { ru: "MVP и прототипы", en: "MVP & prototypes" }, description: { ru: "Помогу собрать первую рабочую версию продукта, чтобы было что показать и проверить.", en: "I'll help put together the first working version so there's something to show and test." }, icon: Rocket },
  { title: { ru: "Архитектура и рефакторинг", en: "Architecture & refactoring" }, description: { ru: "Clean Architecture, разбиение по фичам, перевод legacy-кода на современный стек.", en: "Clean Architecture, feature-based splits, moving legacy code to a modern stack." }, icon: Layers },
  { title: { ru: "Деплой и инфраструктура", en: "Deployment & infra" }, description: { ru: "Деплой на облачный сервер, nginx, Docker, CI/CD, выкладка в App Store и Google Play.", en: "Deploy to a cloud server, nginx, Docker, CI/CD, publishing to the App Store and Google Play." }, icon: Server },
  { title: { ru: "Оптимизация", en: "Optimization" }, description: { ru: "Профилирование FPS, устранение jank-кадров, ускорение холодного старта и ассетов.", en: "FPS profiling, removing jank frames, speeding up cold start and assets." }, icon: Gauge },
  { title: { ru: "Firebase / Supabase", en: "Firebase / Supabase" }, description: { ru: "Auth, Firestore, realtime-данные, push-уведомления, Crashlytics - бэкенд-обвяз.", en: "Auth, Firestore, realtime data, push, Crashlytics - the backend wiring." }, icon: Cloud },
  { title: { ru: "Карты и геолокация", en: "Maps & geolocation" }, description: { ru: "flutter_map / OpenStreetMap, геолокация, маршруты, точки интереса на карте.", en: "flutter_map / OpenStreetMap, geolocation, routes, points of interest on the map." }, icon: Map },
  { title: { ru: "Realtime и WebSockets", en: "Realtime & WebSockets" }, description: { ru: "Мессенджеры, живые обновления и синхронизация между участниками поверх WebSockets.", en: "Messengers, live updates and sync between members over WebSockets." }, icon: Send },
  { title: { ru: "Нативные интеграции", en: "Native integrations" }, description: { ru: "Kotlin (Android) и Swift (iOS), когда возможностей плагинов недостаточно.", en: "Kotlin (Android) and Swift (iOS) when plugins aren't enough." }, icon: Wrench },
];

export type ServiceOffering = { icon: Component; title: L; description: L; bullets: LList };

export const serviceOfferings: ServiceOffering[] = [
  {
    icon: Smartphone,
    title: { ru: "Мобильные приложения", en: "Mobile apps" },
    description: {
      ru: "Кроссплатформенные приложения на Flutter для iOS и Android из одной кодовой базы - от первого прототипа до публикации в сторах.",
      en: "Cross-platform Flutter apps for iOS and Android from one codebase - from first prototype to store publishing.",
    },
    bullets: {
      ru: ["iOS и Android из одной кодовой базы", "Clean Architecture и разбиение по фичам", "Публикация в App Store и Google Play", "Нативные интеграции на Kotlin / Swift"],
      en: ["iOS and Android from one codebase", "Clean Architecture and feature-based structure", "Publishing to the App Store and Google Play", "Native integrations in Kotlin / Swift"],
    },
  },
  {
    icon: Send,
    title: { ru: "Telegram Mini Apps", en: "Telegram Mini Apps" },
    description: {
      ru: "Мини-приложения внутри Telegram - от интерфейса до деплоя на собственный сервер.",
      en: "Mini apps inside Telegram - from the interface to deployment on your own server.",
    },
    bullets: {
      ru: ["Интеграция с Telegram Mini App API", "Деплой на облачный VPS за nginx", "TLS-сертификаты и свой домен", "Автоматический выкат обновлений"],
      en: ["Integration with the Telegram Mini App API", "Deployment to a cloud VPS behind nginx", "TLS certificates and a custom domain", "Automated release of updates"],
    },
  },
  {
    icon: Globe,
    title: { ru: "Сайты и веб-приложения", en: "Websites & web apps" },
    description: {
      ru: "Лендинги, корпоративные сайты и веб-приложения. Отдельно - перенос и миграция существующих сайтов на новый стек и хостинг.",
      en: "Landing pages, corporate sites and web apps. Separately - moving and migrating existing sites to a new stack and hosting.",
    },
    bullets: {
      ru: ["Адаптивная вёрстка под все экраны", "Перенос и миграция существующих сайтов", "Настройка домена, хостинга и деплоя", "SEO-базис, метаданные и быстрая загрузка"],
      en: ["Responsive layout for every screen", "Moving and migrating existing sites", "Domain, hosting and deployment setup", "SEO basics, metadata and fast loading"],
    },
  },
  {
    icon: Server,
    title: { ru: "Backend, облако и деплой", en: "Backend, cloud & deploy" },
    description: {
      ru: "Серверная обвязка и инфраструктура: Firebase/Supabase, realtime, деплой на свой сервер с nginx, Docker и CI/CD.",
      en: "Backend wiring and infrastructure: Firebase/Supabase, realtime, deployment to your own server with nginx, Docker and CI/CD.",
    },
    bullets: {
      ru: ["Firebase / Supabase: Auth, база, realtime, push", "Деплой на облачный VPS, nginx, Docker", "CI/CD на GitHub Actions, Fastlane", "WebSockets для живых обновлений"],
      en: ["Firebase / Supabase: Auth, DB, realtime, push", "Deployment to a cloud VPS, nginx, Docker", "CI/CD on GitHub Actions, Fastlane", "WebSockets for live updates"],
    },
  },
  {
    icon: Layers,
    title: { ru: "Архитектура и рефакторинг", en: "Architecture & refactoring" },
    description: {
      ru: "Приведу проект в порядок: слои, состояние, перевод legacy-кода на современный стек без остановки продукта.",
      en: "I'll bring a project into shape: layers, state, moving legacy code to a modern stack without stopping the product.",
    },
    bullets: {
      ru: ["Clean Architecture и feature-based структура", "Перевод legacy-кода на современный стек", "Наведение порядка в state-management", "Code review свежим взглядом"],
      en: ["Clean Architecture and feature-based structure", "Moving legacy code to a modern stack", "Tidying up state-management", "A fresh pair of eyes in code review"],
    },
  },
  {
    icon: Gauge,
    title: { ru: "Оптимизация и поддержка", en: "Optimization & support" },
    description: {
      ru: "Ускорю приложение и буду поддерживать его после релиза: профилирование, устранение лагов, итеративные улучшения.",
      en: "I'll speed an app up and keep supporting it after release: profiling, removing lag, iterative improvements.",
    },
    bullets: {
      ru: ["Профилирование FPS и устранение jank-кадров", "Ускорение холодного старта и ассетов", "Crashlytics, логи, мониторинг", "Поддержка и доработки по обратной связи"],
      en: ["FPS profiling and removing jank frames", "Faster cold start and assets", "Crashlytics, logs, monitoring", "Support and improvements from feedback"],
    },
  },
];

export const servicesPage = {
  eyebrow: { ru: "Услуги", en: "Services" } as L,
  title: { ru: "Что я могу сделать для вашего продукта", en: "What I can build for your product" } as L,
  intro: {
    ru: "Мобильные приложения, Telegram Mini Apps, сайты и веб-приложения, бэкенд и деплой. Ниже - направления, в которых я работаю; можно взять что-то одно или весь цикл целиком.",
    en: "Mobile apps, Telegram Mini Apps, websites and web apps, backend and deployment. Below are the areas I work in - take one of them or the whole cycle.",
  } as L,
  included: { ru: "Что входит", en: "What's included" } as L,
  back: { ru: "На главную", en: "Back home" } as L,
  ctaTitle: { ru: "Есть задача или идея?", en: "Got a task or an idea?" } as L,
  ctaText: {
    ru: "Расскажите, что нужно - отвечу, что из этого реально сделать и как. Пишите в Telegram или на почту.",
    en: "Tell me what you need - I'll say what's realistic and how. Message me on Telegram or by email.",
  } as L,
};

export type Advantage = { title: L; description: L };

export const advantages: Advantage[] = [
  { title: { ru: "Отвечаю за приложение целиком", en: "I own the whole app" }, description: { ru: "Не только код: собирал, деплоил на свой сервер за nginx и держал приложение в проде. Понимаю, что происходит после «git push».", en: "Not just code: I've built, deployed to my own nginx server and kept an app in production. I get what happens after \"git push\"." } },
  { title: { ru: "Быстро учусь новому", en: "I learn fast" }, description: { ru: "Выходил в живые команды и разбирался в чужом коде на ходу. Незнакомый стек или библиотека меня не пугают.", en: "I've joined live teams and figured out other people's code on the fly. An unfamiliar stack or library doesn't scare me." } },
  { title: { ru: "Не боюсь сложных задач", en: "I'm not afraid of hard tasks" }, description: { ru: "Realtime на WebSockets, перенос игр из WebView в нативку, парсинг рецептов, деплой - берусь и разбираюсь.", en: "Realtime over WebSockets, moving games from WebView to native, recipe parsing, deployment - I take it on and figure it out." } },
  { title: { ru: "Пишу так, чтобы потом не было стыдно", en: "I write code I won't be ashamed of" }, description: { ru: "Держу код читаемым, участвую в код-ревью и смотрю на производительность через DevTools.", en: "I keep code readable, take part in code reviews and watch performance through DevTools." } },
  { title: { ru: "Довожу до конца", en: "I finish what I start" }, description: { ru: "Не бросаю на «вроде работает». Стараюсь, чтобы фича действительно была готова, а не просто закоммичена.", en: "I don't stop at \"seems to work\". I try to make a feature actually done, not just committed." } },
  { title: { ru: "Нормально общаюсь и на английском", en: "I communicate, in English too" }, description: { ru: "Свободно читаю документацию, обсуждаю задачи с командой и заказчиком, работал по Agile.", en: "I read docs comfortably, discuss tasks with the team and the client, and have worked in Agile." } },
];

export const githubMeta = {
  publicRepos: 23,
  topLanguages: ["Dart", "Flutter", "C++", "Kotlin", "Swift"],
  featuredRepos: [
    { name: "PORA", desc: { ru: "Семейный список покупок с разбором рецептов", en: "Family shopping list with recipe parsing" }, stars: 1, lang: "Dart" },
    { name: "hornet", desc: { ru: "Галерея изображений на BLoC + GoRouter", en: "Image gallery on BLoC + GoRouter" }, stars: 3, lang: "Dart" },
    { name: "Q-Story", desc: { ru: "История и маршруты через QR и карту", en: "History and routes via QR and a map" }, stars: 1, lang: "Dart" },
    { name: "barber_booker", desc: { ru: "Запись в барбершоп с 3 ролями", en: "Barbershop booking with 3 roles" }, stars: 2, lang: "Dart" },
  ] as { name: string; desc: L; stars: number; lang: string }[],
};

export const navLinks: { href: string; label: L; page?: boolean }[] = [
  { href: "#about", label: { ru: "Обо мне", en: "About" } },
  { href: "#projects", label: { ru: "Проекты", en: "Projects" } },
  { href: "#experience", label: { ru: "Опыт", en: "Experience" } },
  { href: "#skills", label: { ru: "Навыки", en: "Skills" } },
  { href: "/services", label: { ru: "Услуги", en: "Services" }, page: true },
  { href: "#contact", label: { ru: "Контакты", en: "Contact" } },
];

export const sections: Record<string, { eyebrow: L; title: L; description?: L }> = {
  about: {
    eyebrow: { ru: "Обо мне", en: "About" },
    title: { ru: "Пишу код так, будто через полгода его будет читать кто-то другой", en: "I write code as if someone else will read it in six months" },
  },
  projects: {
    eyebrow: { ru: "Проекты", en: "Projects" },
    title: { ru: "Над чем я работал", en: "What I've worked on" },
    description: { ru: "Коммерческие и пет-проекты. У каждого можно развернуть разбор: задача, как решал, что вышло.", en: "Commercial and pet projects. Each one expands into a breakdown: the task, how I solved it, what came out." },
  },
  experience: {
    eyebrow: { ru: "Опыт", en: "Experience" },
    title: { ru: "Где я работал", en: "Where I've worked" },
    description: { ru: "2 года и 1 месяц коммерческой разработки: от стажёра до самостоятельных проектов.", en: "2 years and 1 month of commercial work: from intern to standalone projects." },
  },
  skills: {
    eyebrow: { ru: "Навыки", en: "Skills" },
    title: { ru: "С чем работаю", en: "What I work with" },
    description: { ru: "Технологии из реальных проектов, сгруппированные по темам.", en: "Technologies from real projects, grouped by topic." },
  },
  philosophy: {
    eyebrow: { ru: "Подход", en: "Approach" },
    title: { ru: "Что для меня важно в коде", en: "What matters to me in code" },
    description: { ru: "Несколько простых принципов, которых стараюсь держаться.", en: "A few simple principles I try to stick to." },
  },
  process: {
    eyebrow: { ru: "Процесс", en: "Process" },
    title: { ru: "Как я обычно веду задачу", en: "How I usually run a task" },
    description: { ru: "Примерно так выглядит путь от идеи до поддержки. Не догма, но помогает ничего не упустить.", en: "Roughly how I go from idea to support. Not dogma, but it keeps me from missing things." },
  },
  services: {
    eyebrow: { ru: "Чем могу помочь", en: "How I can help" },
    title: { ru: "Задачи, которые могу взять", en: "Tasks I can take on" },
    description: { ru: "То, с чем я уже работал и в чём чувствую себя уверенно.", en: "Things I've already worked with and feel confident about." },
  },
  whyme: {
    eyebrow: { ru: "Почему я", en: "Why me" },
    title: { ru: "Что я могу дать команде", en: "What I bring to a team" },
  },
  github: {
    eyebrow: { ru: "GitHub", en: "GitHub" },
    title: { ru: "Код в открытом доступе", en: "Code out in the open" },
    description: { ru: "Пет-проекты и эксперименты живут на GitHub - заходите посмотреть.", en: "Pet projects and experiments live on GitHub - feel free to look." },
  },
  contact: {
    eyebrow: { ru: "Контакты", en: "Contact" },
    title: { ru: "Давайте познакомимся", en: "Let's get in touch" },
    description: { ru: "Ищу работу Flutter-разработчиком - открыт к вакансиям, стажировкам и проектам. Напишите в Telegram или на почту.", en: "I'm looking for a Flutter developer role - open to jobs, internships and projects. Message me on Telegram or by email." },
  },
};

export const ui = {
  openToWork: { ru: "Открыт к работе и стажировкам", en: "Open to work & internships" } as L,
  getInTouch: { ru: "Связаться со мной", en: "Get in touch" } as L,
  viewProjects: { ru: "Смотреть проекты", en: "View projects" } as L,
  message: { ru: "Написать", en: "Message" } as L,
  resume: { ru: "Резюме", en: "Resume" } as L,
  expand: { ru: "Показать разбор", en: "Show breakdown" } as L,
  collapse: { ru: "Свернуть", en: "Collapse" } as L,
  problem: { ru: "Задача", en: "The problem" } as L,
  solution: { ru: "Решение", en: "The solution" } as L,
  architecture: { ru: "Архитектура", en: "Architecture" } as L,
  highlights: { ru: "Что сделал", en: "What I did" } as L,
  results: { ru: "Результат", en: "Results" } as L,
  learned: { ru: "Чему научился", en: "What I learned" } as L,
  stack: { ru: "Стек", en: "Stack" } as L,
  viewOnGithub: { ru: "Весь профиль на GitHub", en: "Full profile on GitHub" } as L,
  rightsReserved: { ru: "Все права защищены.", en: "All rights reserved." } as L,
  langName: { ru: "Русский", en: "English" } as L,
  aboutP1: {
    ru: "В мобильную разработку я попал не случайно: мне нравится, что приложение сразу чувствуется в руке. Оно либо отзывчивое и живое, либо тормозит - тут не спрячешься. Flutter позволил отвечать за весь опыт целиком: одна кодовая база под iOS и Android.",
    en: "I didn't end up in mobile by accident: I like that an app is felt in your hand right away. It's either responsive and alive or it lags - there's nowhere to hide. Flutter let me own the whole experience: one codebase for iOS and Android.",
  } as L,
  aboutP2Pre: {
    ru: "За два года я прошёл путь от стажёра, который верстал экраны по Figma, до человека, который проектирует архитектуру клиента с нуля. И довольно быстро понял: ",
    en: "In two years I went from an intern building screens from Figma to someone who designs client architecture from scratch. And I figured out pretty quickly: ",
  } as L,
  aboutP2Strong: {
    ru: "большинство проблем в проектах рождается не в коде, а в решениях, принятых до кода.",
    en: "most problems in projects come not from the code, but from decisions made before the code.",
  } as L,
  aboutP2Post: {
    ru: " Поэтому сначала разбираюсь, где живёт бизнес-логика, где данные, где интерфейс, и только потом сажусь писать.",
    en: " So first I work out where the business logic, the data and the UI live, and only then start writing.",
  } as L,
  aboutP3: {
    ru: "Больше всего мне интересны задачи с нетривиальной логикой: карты и маршруты, realtime на WebSockets, перенос игр из WebView в нативку, оптимизация запуска. А недавно залез в деплой - свой сервер, nginx, Telegram Mini App.",
    en: "I'm most drawn to tasks with non-trivial logic: maps and routes, realtime over WebSockets, moving games from WebView to native, startup optimization. And recently I got into deployment - my own server, nginx, a Telegram Mini App.",
  } as L,
  aboutP4: {
    ru: "Люблю, когда результат можно измерить - например, увидеть −50% к времени запуска не на словах, а в профайлере. Сейчас углубляюсь в производительность, тестирование и инфраструктуру.",
    en: "I like when a result is measurable - seeing −50% startup time in the profiler, not just on paper. Right now I'm going deeper into performance, testing and infrastructure.",
  } as L,
  factEducation: { ru: "Образование", en: "Education" } as L,
  factEducationValue: { ru: "ИТМО - Прикладная информатика, Мобильные и сетевые технологии (бакалавр, 2029)", en: "ITMO - Applied Informatics, Mobile & Network Technologies (BSc, 2029)" } as L,
  factLanguages: { ru: "Языки", en: "Languages" } as L,
  factLanguagesValue: { ru: "Русский - родной · English - B2 (Upper-Intermediate)", en: "Russian - native · English - B2 (Upper-Intermediate)" } as L,
  factEnv: { ru: "Рабочая среда", en: "Setup" } as L,
  factEnvValue: { ru: "macOS · сборка и подпись iOS/Android · нативные интеграции Kotlin / Swift", en: "macOS · iOS/Android build & signing · native Kotlin / Swift integrations" } as L,
  contactNote: { ru: "Предпочтительный способ связи - Telegram.", en: "Telegram is the preferred way to reach me." } as L,
  navigation: { ru: "Навигация", en: "Navigation" } as L,
  contactWord: { ru: "Связь", en: "Contact" } as L,
  openToNewWork: { ru: "Открыт к новой работе.", en: "Open to new work." } as L,
  messageTg: { ru: "Написать в Telegram", en: "Message on Telegram" } as L,
  allServices: { ru: "Все услуги подробно", en: "All services in detail" } as L,
  resumeHh: { ru: "Резюме - hh.kz", en: "Resume - hh.kz" } as L,
  viewOnline: { ru: "Смотреть онлайн", en: "View online" } as L,
  resumePdf: { ru: "Резюме - PDF", en: "Resume - PDF" } as L,
  downloadPdf: { ru: "Скачать PDF", en: "Download PDF" } as L,
  mainLang: { ru: "основной язык", en: "main language" } as L,
  publicReposLabel: { ru: "публичных репозиториев", en: "public repositories" } as L,
  topLangsLabel: { ru: "Основные языки", en: "Top languages" } as L,
};
