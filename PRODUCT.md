# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed 2026-11-05):

- **Hiring side** — recruiters, tech leads and founders looking for a developer. They skim on desktop between other candidates, want proof of real shipped work, the stack, and how to reach him in under a minute.
- **Clients** — small businesses, startups and NGOs who need a mobile app, a Telegram Mini App or a website built and deployed. They want to see finished, live things and understand what he can take on.

## Product Purpose

Personal portfolio of Boris Stankov (Борис Станьков), a product engineer from Saint Petersburg (ITMO student). It shows shipped work across mobile (Flutter), web (Vue, Three.js, static generators) and native macOS (Swift), and turns a visit into a message on Telegram or email. Success = a visitor contacts him for a job or a project.

## Positioning

One person who carries a product end to end: Flutter apps for iOS/Android, websites with 3D and custom motion, a native macOS app, and the deploy behind all of it (VPS, nginx, CI/CD, GitHub Pages). Each claim is backed by a live link or a public repo.

## Operating Context

- Bilingual RU/EN, language toggle persisted in localStorage.
- Hosted on GitHub Pages under `/Portfolio/`, SPA with `/` and `/services` routes, 404 fallback.
- Contact channels: Telegram (preferred), email, phone, LinkedIn, GitHub, hh.kz resume, PDF resume.

## Capabilities and Constraints

- Stack is fixed: Vite 5, Vue 3 (`<script setup>`), TypeScript, Tailwind 3, lucide icons. New dependencies allowed when they earn their weight (e.g. three.js loaded as a separate chunk).
- All content lives in `src/data.ts` as `{ ru, en }` pairs; every new string needs both languages.
- Dark and light themes, no flash on load (theme applied in `index.html` before paint).
- Must respect `prefers-reduced-motion`.

## Brand Commitments

- Name and photo (`public/images/boris.jpg`).
- Current role headline: **Product engineer** (mobile, web, deploy) — replaces "Flutter Developer" (confirmed 2026-11-05). Flutter stays the main craft.
- Status: **open to work** — jobs and projects.
- Voice: first person, plain, specific, a little self-ironic; no hype words.

## Evidence on Hand

- Commercial: Xouston (Dec 2025–May 2026, medtech), Q-Story / ЦСиГН (Jun–Sep 2025), ARYS barbershop (May–Oct 2024), delivery app (Oct 2023–Mar 2024), SKian internship (Jun–Aug 2023), dirigible.community website (2026, live at https://dirigible.community).
- Recent own projects (2026): PORA (Flutter), Telegram Mini App on own VPS, Budini Coffee landing (Vue + Three.js scroll-video, https://undemorbe.github.io/budini-coffee/), Flower Cup eco-startup site (Vue + procedural three.js, https://undemorbe.github.io/flower-cup/), Wallpap (Swift, macOS 26/27 video wallpapers, DMG releases, CI), Hornet (open source).
- Metrics stated in resume: −50% startup (Xouston), −30% startup (Q-Story), +40% stability (delivery app), DB optimised >20% (ARYS).
- GitHub: 40 public repos as of 2026-11-05.
- No testimonials, no client logos, no pricing — never invent them.

## Product Principles

1. Prove with links: every project card points to something live or public.
2. Show range without diluting the core: Flutter first, web and native as proof of breadth.
3. Contact is one tap away from anywhere on the page.
4. Personality is welcome; it must never slow the page or hide content.

## Accessibility & Inclusion

Keyboard focus visible, aria labels on icon buttons, reduced-motion fallback for every animation including the 3D hero.
