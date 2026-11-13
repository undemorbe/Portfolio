import "@fontsource-variable/geologica/index.css";
import "@fontsource-variable/golos-text/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "./resume.css";
import photo from "./photo.jpg";
import { experience, heroStats, lines, lineById, projects, site, ui } from "@/data";
import type { LineId } from "@/data";

/**
 * CV in the site's metro language, built from the same data as the portfolio,
 * so the PDF never drifts from it. Rendered to public/resume/*.pdf by scripts/resume.mjs.
 */

type Lang = "ru" | "en";
const lang: Lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "ru";
document.documentElement.lang = lang;

const tr = (v: { ru: string; en: string }) => v[lang];
const trl = (v: { ru: string[]; en: string[] }) => v[lang];
/** Data strings that read better translated in the CV. */
const MAP: Record<Lang, Record<string, string>> = {
  ru: { Startup: "Стартап", Freelance: "Фриланс" },
  en: { "ЦСиГН": "CSiGN", "SVG-анимация": "SVG animation", "DMG-релизы": "DMG releases" },
};
const loc = (s: string) => MAP[lang][s] ?? s;
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const T = {
  ru: {
    pass: "Проездной",
    open: "Открыт к работе",
    place: "Санкт-Петербург · готов к переезду в Москву · разрешение на работу в России и Казахстане",
    summary: "Коротко",
    summaryText:
      "Flutter-разработчик, 2+ года коммерческого опыта: медтех, культура, AI-сервис, запись и доставка. Работу над фичей начинаю с архитектуры и границ модулей, потом сетевой слой, кэш, карты и realtime. Сам выпускаю сборки в сторы и довожу продукт до прода: сайты на Vue и Three.js, нативный Swift, бэкенд на Python и Node, VPS за nginx.",
    route: "Маршрут",
    skills: "Линии",
    projects: "Станции вне маршрута",
    education: "Учёба",
    languages: "Языки",
    format: "Формат",
    next: "Следующая станция",
    nextText: "ваш проект",
    more: "Все проекты с разбором и кодом",
    updated: "Обновлено: ноябрь 2026",
  },
  en: {
    pass: "Transit pass",
    open: "Open to work",
    place: "Saint Petersburg · open to relocating to Moscow · work permit for Russia and Kazakhstan",
    summary: "Summary",
    summaryText:
      "Flutter developer with 2+ years of commercial experience: medtech, culture, an AI service, booking and delivery. I start a feature from architecture and module boundaries, then the network layer, caching, maps and realtime. I ship store builds myself and take products all the way to production: Vue and Three.js websites, native Swift, a Python and Node backend, a VPS behind nginx.",
    route: "The route",
    skills: "Lines",
    projects: "Stations off the route",
    education: "Education",
    languages: "Languages",
    format: "Work format",
    next: "Next station",
    nextText: "your project",
    more: "Every project with a breakdown and code",
    updated: "Updated: November 2026",
  },
}[lang];

const name = lang === "ru" ? site.nameRu : site.name;
const portfolio = site.url.replace(/^https?:\/\//, "");
const contacts: { k: string; v: string; h: string; line: LineId }[] = [
  { k: "Telegram", v: `@${site.telegram}`, h: site.telegramUrl, line: "m2" },
  { k: "Email", v: site.email, h: `mailto:${site.email}`, line: "m1" },
  { k: lang === "ru" ? "Телефон" : "Phone", v: site.phone, h: site.phoneHref, line: "m3" },
  { k: "GitHub", v: `github.com/${site.github}`, h: site.githubUrl, line: "m4" },
  { k: "LinkedIn", v: "in/stankov-boris", h: site.linkedinUrl, line: "m2" },
  { k: lang === "ru" ? "Портфолио" : "Portfolio", v: portfolio, h: site.url, line: "m5" },
];

/** Projects not already told through a job on the route. */
const offRoute = ["korst", "pora", "wallpap", "ruai", "frontend-roadmap", "flower-cup", "budini-coffee", "hornet"]
  .map((s) => projects.find((p) => p.slug === s))
  .filter((p): p is (typeof projects)[number] => !!p);

const roundel = (id: LineId) => `<span class="roundel" style="--c: var(--${id})">${lineById[id].code}</span>`;
const heading = (title: string, id: LineId) =>
  `<h2 style="--c: var(--${id})"><span class="mark" aria-hidden="true"><i></i><b></b></span>${esc(title)}</h2>`;
const link = (href: string, text: string) => `<a href="${href}">${esc(text)}</a>`;
const short = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "").replace("github.com/", "gh/");

document.getElementById("cv")!.innerHTML = `
<header class="hero">
  <div class="who">
    <div class="brand"><span class="bs">БС</span><span>${esc(portfolio)}</span></div>
    <h1>${name.split(" ").map((w) => `<span>${esc(w)}</span>`).join("")}</h1>
    <p class="role">
      <b>${esc(tr(site.role))}</b>
      <span class="pills" aria-hidden="true">${lines.map((l) => `<i style="--c: var(--${l.id})"></i>`).join("")}</span>
      <span class="open"><i></i>${T.open}</span>
    </p>
    <p class="place">${esc(T.place)}</p>
  </div>
  <figure class="pass">
    <div class="pass-top"><span>${T.pass}</span><span class="m">М</span></div>
    <img src="${photo}" alt="" />
    <figcaption><b>${esc(name)}</b><span>2023 → ∞</span></figcaption>
  </figure>
</header>

<dl class="stats">
  ${heroStats.map((s) => `<div><dt>${esc(s.value)}</dt><dd>${esc(tr(s.label))}</dd></div>`).join("")}
</dl>

<ul class="board">
  ${contacts.map((c) => `<li style="--c: var(--${c.line})"><span>${esc(c.k)}</span>${link(c.h, c.v)}</li>`).join("")}
</ul>

<section class="summary">
  ${heading(T.summary, "m1")}
  <p>${esc(T.summaryText)}</p>
</section>

<div class="cols">
  <section class="route">
    ${heading(T.route, "m4")}
    <ol>
      ${experience
        .map(
          (e) => `
      <li class="stop" style="--c: var(--${e.line})">
        <div class="when">${esc(tr(e.period))}${tr(e.duration) ? `<small>${esc(tr(e.duration))}</small>` : ""}</div>
        <div class="body">
          <h3>${e.url ? link(e.url, loc(e.company)) : esc(loc(e.company))} ${roundel(e.line)}</h3>
          <p class="meta"><b>${esc(tr(e.role))}</b> · ${esc(tr(e.location))}</p>
          <p class="lead">${esc(tr(e.summary))}</p>
          <ul>${trl(e.points).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
      </li>`
        )
        .join("")}
    </ol>
  </section>

  <aside class="side">
    <section>
      ${heading(T.skills, "m3")}
      ${lines
        .map(
          (l) => `
      <div class="line" style="--c: var(--${l.id})">
        <h3>${roundel(l.id)}${esc(tr(l.name))}</h3>
        <p>${l.skills.map((x) => esc(loc(x))).join(" · ")}</p>
      </div>`
        )
        .join("")}
    </section>
    <section>
      ${heading(T.education, "m5")}
      ${tr(ui.factEducationValue)
        .split(" · ")
        .map((x) => `<p class="fact">${esc(x)}</p>`)
        .join("")}
    </section>
    <section>
      ${heading(T.languages, "m2")}
      ${tr(ui.factLanguagesValue)
        .split(" · ")
        .map((x) => `<p class="fact">${esc(x)}</p>`)
        .join("")}
    </section>
    <section>
      ${heading(T.format, "m4")}
      ${tr(ui.factFormatValue)
        .split(" · ")
        .map((x) => `<p class="fact">${esc(x)}</p>`)
        .join("")}
    </section>
  </aside>
</div>

<section class="stations">
  ${heading(T.projects, "m2")}
  <div class="grid">
    ${offRoute
      .map(
        (p) => `
    <article class="card">
      <div class="stripe" aria-hidden="true">${p.lines.map((l) => `<i style="--c: var(--${l})"></i>`).join("")}</div>
      <div class="card-in">
        <div class="card-top"><span class="roundels">${p.lines.map(roundel).join("")}</span><span class="yr">${esc(p.year)}</span></div>
        <h3>${esc(p.name)}</h3>
        <p class="status">${esc(tr(p.status))}</p>
        <p class="tag">${esc(tr(p.tagline))}</p>
        ${p.metric ? `<p class="metric" style="--c: var(--${p.lines[0]})"><b>${esc(p.metric.value)}</b><span>${esc(tr(p.metric.label))}</span></p>` : ""}
        <p class="stack">${p.stack.map(esc).join(" · ")}</p>
        <p class="links">${[p.liveUrl, p.githubUrl].filter(Boolean).map((u) => link(u!, short(u!))).join("")}</p>
      </div>
    </article>`
      )
      .join("")}
  </div>
</section>

<footer class="led">
  <span class="dot" aria-hidden="true"></span>
  <span class="lbl">${T.next}</span>
  <span class="msg">${esc(T.nextText)} · ${link(site.telegramUrl, `t.me/${site.telegram}`)} · ${link(`mailto:${site.email}`, site.email)}</span>
</footer>
<p class="foot"><span>${esc(T.more)}: ${link(site.url, portfolio)}</span><span>${T.updated}</span></p>
`;

document.title = `${name} - CV`;
