import "@fontsource-variable/geologica/index.css";
import "@fontsource-variable/golos-text/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "./resume.css";
import photo from "./photo.jpg";
import { experience, heroStats, lines, projects, site, ui } from "@/data";
import type { LineId } from "@/data";

/**
 * Printable resume built from the same data as the site, so the PDF never
 * drifts from the portfolio. Rendered to public/resume/*.pdf by scripts/resume.mjs.
 */

type Lang = "ru" | "en";
const lang: Lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "ru";
document.documentElement.lang = lang;

const tr = (v: { ru: string; en: string }) => v[lang];
const trl = (v: { ru: string[]; en: string[] }) => v[lang];
/** Data strings that only exist in Russian. */
const EN: Record<string, string> = { "ЦСиГН": "CSiGN", "SVG-анимация": "SVG animation", "DMG-релизы": "DMG releases" };
const en = (s: string) => (lang === "en" ? EN[s] ?? s : s);
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const T = {
  ru: {
    role: "Flutter-разработчик · product engineer",
    place: "Санкт-Петербург · удалённо, гибрид или офис · разрешение на работу в России и Казахстане",
    summaryTitle: "Коротко",
    summary:
      "Flutter-разработчик с 2023 года: прошёл путь от стажёра до архитектуры клиента с нуля. Делаю приложения под iOS и Android от проектирования до релиза, а вокруг них - сайты с 3D, нативный Swift и деплой на свой сервер. Результат меряю в профайлере, а не на словах.",
    experience: "Опыт работы",
    projects: "Проекты",
    skills: "Навыки",
    education: "Образование",
    languages: "Языки",
    format: "Формат работы",
    contacts: "Контакты",
    portfolio: "Портфолио",
    more: "Все проекты с разбором и кодом - в портфолио",
    updated: "Обновлено: ноябрь 2026",
  },
  en: {
    role: "Flutter developer · product engineer",
    place: "Saint Petersburg · remote, hybrid or on-site · work permit for Russia and Kazakhstan",
    summaryTitle: "Summary",
    summary:
      "Flutter developer since 2023: from an intern to designing client architecture from scratch. I build iOS and Android apps from design to release, plus what surrounds them - 3D websites, native Swift and deployment to my own server. I measure results in the profiler, not in promises.",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
    format: "Work format",
    contacts: "Contact",
    portfolio: "Portfolio",
    more: "Every project with a breakdown and code - in the portfolio",
    updated: "Updated: November 2026",
  },
}[lang];

const portfolio = site.url.replace(/^https?:\/\//, "");
const contacts: [string, string, string][] = [
  ["Telegram", `@${site.telegram}`, site.telegramUrl],
  ["Email", site.email, `mailto:${site.email}`],
  [lang === "ru" ? "Телефон" : "Phone", site.phone, site.phoneHref],
  ["GitHub", `github.com/${site.github}`, site.githubUrl],
  ["LinkedIn", "in/stankov-boris", site.linkedinUrl],
  [T.portfolio, portfolio, site.url],
];

const pick = ["korst", "pora", "wallpap", "budini-coffee", "flower-cup", "hornet"];
const picked = pick.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);

const pips = (ids: LineId[]) => `<span class="pips">${ids.map((l) => `<i style="--c: var(--${l})"></i>`).join("")}</span>`;
const link = (href: string, text: string) => `<a href="${href}">${esc(text)}</a>`;
const short = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

document.getElementById("cv")!.innerHTML = `
<header class="head">
  <img class="photo" src="${photo}" alt="" />
  <div class="who">
    <h1>${esc(lang === "ru" ? site.nameRu : site.name)}</h1>
    <p class="role">${esc(T.role)}</p>
    <p class="place">${esc(T.place)}</p>
  </div>
  <ul class="contacts" aria-label="${T.contacts}">
    ${contacts.map(([k, v, h]) => `<li><span>${esc(k)}</span>${link(h, v)}</li>`).join("")}
  </ul>
</header>
<div class="rail" aria-hidden="true">${lines.map((l) => `<i style="--c: var(--${l.id})"></i>`).join("")}</div>

<div class="cols">
  <div class="main">
    <section>
      <h2>${T.summaryTitle}</h2>
      <p class="summary">${esc(T.summary)}</p>
      <dl class="stats">
        ${heroStats.map((s) => `<div><dt>${esc(s.value)}</dt><dd>${esc(tr(s.label))}</dd></div>`).join("")}
      </dl>
    </section>

    <section>
      <h2>${T.experience}</h2>
      ${experience
        .map(
          (e) => `
      <article class="job">
        <div class="job-head">
          <h3>${pips([e.line])}${e.url ? link(e.url, en(e.company)) : esc(en(e.company))}</h3>
          <span class="when">${esc(tr(e.period))}${tr(e.duration) ? ` · ${esc(tr(e.duration))}` : ""}</span>
        </div>
        <p class="meta"><b>${esc(tr(e.role))}</b> · ${esc(tr(e.location))}</p>
        <p class="lead">${esc(tr(e.summary))}</p>
        <ul>${trl(e.points).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </article>`
        )
        .join("")}
    </section>

    <section>
      <h2>${T.projects}</h2>
      ${picked
        .map(
          (p) => `
      <article class="proj">
        <div class="job-head">
          <h3>${pips(p.lines)}${esc(p.name)} <small>${esc(tr(p.status))} · ${esc(p.year)}</small></h3>
          <span class="when">${p.liveUrl ? link(p.liveUrl, short(p.liveUrl)) : p.githubUrl ? link(p.githubUrl, short(p.githubUrl).replace("github.com/", "gh/")) : ""}</span>
        </div>
        <p>${esc(tr(p.tagline))}</p>
        <p class="stack">${p.stack.map(esc).join(" · ")}</p>
      </article>`
        )
        .join("")}
      <p class="more">${esc(T.more)}: ${link(site.url, portfolio)}</p>
    </section>
  </div>

  <aside class="side">
    <section>
      <h2>${T.skills}</h2>
      ${lines
        .map(
          (l) => `
      <div class="skill">
        <h3>${pips([l.id])}${esc(tr(l.name))}</h3>
        <p>${l.skills.map((x) => esc(en(x))).join(", ")}</p>
      </div>`
        )
        .join("")}
    </section>
    <section>
      <h2>${T.education}</h2>
      <p>${esc(tr(ui.factEducationValue))}</p>
    </section>
    <section>
      <h2>${T.languages}</h2>
      <p>${esc(tr(ui.factLanguagesValue)).replace(" · ", "<br />")}</p>
    </section>
    <section>
      <h2>${T.format}</h2>
      <p>${esc(tr(ui.factFormatValue)).split(" · ").join("<br />")}</p>
    </section>
    <p class="updated">${T.updated}</p>
  </aside>
</div>
`;

document.title = `${lang === "ru" ? site.nameRu : site.name} - ${T.role}`;
