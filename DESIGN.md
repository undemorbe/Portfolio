---
name: Boris Stankov — Portfolio
description: A product engineer's work drawn as the Saint Petersburg metro scheme, five lines for five disciplines.
colors:
  background: "hsl(0 0% 100%)"
  surface: "hsl(0 0% 100%)"
  surface-2: "hsl(220 16% 95%)"
  foreground: "hsl(222 30% 9%)"
  muted-foreground: "hsl(220 12% 36%)"
  border: "hsl(220 18% 86%)"
  m1: "hsl(345 93% 44%)"
  m2: "hsl(204 100% 39%)"
  m3: "hsl(147 100% 30%)"
  m4: "hsl(22 83% 53%)"
  m5: "hsl(283 56% 31%)"
  background-night: "hsl(224 38% 6%)"
  surface-night: "hsl(224 32% 10%)"
  surface-2-night: "hsl(224 28% 14%)"
  foreground-night: "hsl(216 30% 95%)"
  muted-foreground-night: "hsl(218 16% 68%)"
  border-night: "hsl(224 22% 20%)"
  m1-night: "hsl(349 90% 60%)"
  m2-night: "hsl(204 96% 60%)"
  m3-night: "hsl(147 70% 46%)"
  m4-night: "hsl(24 92% 60%)"
  m5-night: "hsl(280 60% 70%)"
  led-ground: "hsl(222 32% 8%)"
  led-amber: "hsl(38 100% 64%)"
  led-cap: "hsl(22 95% 62%)"
  token-brass: "#d9a441"
  token-brass-deep: "#8a6416"
typography:
  display:
    fontFamily: "Geologica Variable, Golos Text Variable, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geologica Variable, Golos Text Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geologica Variable, Golos Text Variable, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body-lead:
    fontFamily: "Golos Text Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\", \"cv11\""
  body:
    fontFamily: "Golos Text Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\", \"cv11\""
  button:
    fontFamily: "Golos Text Variable, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    fontFeature: "\"tnum\""
rounded:
  sm: "10px"
  md: "14px"
  sign: "1.25rem"
  pill: "9999px"
spacing:
  gutter: "1.25rem"
  gutter-sm: "1.5rem"
  gutter-lg: "2rem"
  section: "6rem"
  section-sm: "7rem"
  section-lg: "8rem"
  card: "1.5rem"
  card-sm: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  button-primary-hover:
    backgroundColor: "{colors.m1}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  button-ghost-hover:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    size: "40px"
  sign-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.sign}"
    padding: "{spacing.card}"
  stack-chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  line-roundel:
    backgroundColor: "{colors.m1}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    size: "28px"
  nav-stop:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  nav-stop-active:
    textColor: "{colors.foreground}"
  led-board:
    backgroundColor: "{colors.led-ground}"
    textColor: "{colors.led-amber}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 0"
---

# Design System: Boris Stankov — Portfolio

## Overview

**Creative North Star: "The Enamel Scheme"**

The whole site is a Saint Petersburg metro map and its station furniture. Five lines are five disciplines: red Mobile (m1), blue Web (m2), green Native (m3), orange Deploy (m4), purple Backend (m5). Projects are stations, sections are stops on a track, and the visitor rides from the scheme in the first viewport down to a turnstile that takes them to Telegram. Every recurring device is borrowed from that world: line roundels, station dots with ink rings, thick round-capped line strokes, enamel signs with rounded corners, a carriage LED board, a brass token.

There are two schemes, like a day map and a night map. Day is white enamel: a pure white ground, near-black ink and the five line colours as the only saturation. Night is tunnel blue-black, with the same lines lifted in lightness so they read on the dark. Density is calm and spacious: big display type, generous section rhythm, one surface family. Motion is how lines and trains move: strokes draw themselves in, trains ride paths, the theme change sweeps across like a train entering a platform.

The system was built to refuse the dark-neon developer portfolio. There is no glow on UI chrome, no gradient text and no neon accent; the warmth comes from enamel, ink and transit colour.

**Key Characteristics:**
- Five line colours as the only saturated hues, each tied to one discipline.
- White enamel day scheme and tunnel blue-black night scheme, both fully tokenised.
- One surface family (the enamel sign): white or night surface, hairline border, 1.25rem corners, soft tinted shadow.
- Geologica display, Golos Text body, JetBrains Mono only for numbers and codes.
- Line draw-in, trains and a clip sweep as the motion grammar; every motion has a reduced-motion fallback.

## Colors

Ink on enamel, plus five transit colours that each carry a meaning.

### Primary
- **Kirovsko-Vyborgskaya Red** (`m1`): Mobile. The house accent (`--accent` aliases it): primary button hover, the logo plate, the active nav dot, the scroll-progress rail, the mobile menu rail, the turnstile header, the station-flash ring.

### Secondary
- **Moskovsko-Petrogradskaya Blue** (`m2`): Web. Also the focus ring (`--ring` aliases it, 3px outline, 3px offset) and the text selection tint at 25%.
- **Nevsko-Vasileostrovskaya Green** (`m3`): Native. Also the "open to work" pulse and the turnstile's go lamp.

### Tertiary
- **Pravoberezhnaya Orange** (`m4`): Deploy.
- **Frunzensko-Primorskaya Purple** (`m5`): Backend.

Night values (`m1-night` … `m5-night`) keep each hue and raise lightness to 46–70% so lines stay legible on the tunnel ground.

### Neutral
- **Enamel White** (`background`, `surface`): the day ground and the day sign surface are the same white; signs separate by border and shadow, not tint.
- **Platform Grey** (`surface-2`): chips, icon-button hover fills, the 3D scheme's river.
- **Station Ink** (`foreground`): body text, headings, primary button ground, station-dot rings, the timeline rail once the train has passed. `--border-strong` aliases it.
- **Worn Ink** (`muted-foreground`): secondary text, captions, inactive nav stops (7.1:1 on day white, 8.3:1 on night ground).
- **Hairline** (`border`): every border by default (`* { border-color }`), rails not yet travelled.
- **Tunnel Blue-Black** (`background-night`), **Tunnel Wall** (`surface-night`), **Service Corridor** (`surface-2-night`), **Night Ink** (`foreground-night`), **Night Worn Ink** (`muted-foreground-night`), **Night Hairline** (`border-night`): the night counterparts, layered tonally rather than by shadow.

### Object materials
- **LED Dark Glass** (`led-ground`), **LED Amber** (`led-amber`), **LED Cap Orange** (`led-cap`): the carriage LED board only, identical in both schemes.
- **Token Brass** (`token-brass`) and **Brass Deep** (`token-brass-deep`): the metro token in the contact turnstile only.

### Named Rules
**The Five Lines Rule.** The only saturated colours in UI are m1–m5, and each one means its discipline. A line colour appears to name a discipline, a section's line or a stop; never as decoration, a gradient or a generic highlight.

**The Object Materials Rule.** Colours outside the scheme live only inside the world object they belong to: the LED board's dark glass and amber, the brass token. They never leave that object and never become UI accents.

**The Two Schemes Rule.** Every UI colour is a token with a day and a night value, switched by the `.dark` class. The LED board is the one element that ignores the scheme, because a lit panel is dark glass in daylight and at night alike.

## Typography

**Display Font:** Geologica Variable (with Golos Text Variable, system-ui)
**Body Font:** Golos Text Variable (with system-ui)
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace)

**Character:** Geologica's geometric, slightly signage-like grotesque sets names and headings like station plates; Golos Text is a calm, Cyrillic-first text face that keeps RU and EN equally even. All three are self-hosted variable fonts via Fontsource, and headings use optical sizing.

### Hierarchy
- **Display** (800, clamp(3rem, 8.4vw, 6rem), 0.9, -0.04em): the name in the hero, one word per line. Nowhere else.
- **Headline** (700, clamp(2rem, 4.6vw, 3.6rem), 1.02, -0.03em): section H2s, balanced wrapping, max width 48rem.
- **Title** (700, 1.75rem, 1.25, -0.02em): project station names; 1.5rem for experience companies; mobile menu stops at 1.875rem.
- **Body lead** (400, 1.125rem, 1.625): hero tagline (46ch) and about paragraphs (62ch), in Worn Ink.
- **Body** (400, 1rem, 1.625): card taglines and summaries, 60–68ch, `ss01` and `cv11` on.
- **Button** (600, 0.95rem): button and nav labels; nav stops at 0.875rem medium.
- **Label** (JetBrains Mono, 0.75–0.875rem, tabular numerals): years, periods, durations, the RU/EN switch, LED announcements.

### Named Rules
**The Mono Is For Numbers Rule.** JetBrains Mono sets times, years, periods, codes, the language switch and the LED board. It never sets prose, headings or buttons.

**The Station Sign Rule.** Nothing sits above a section H2 except its station mark: an 80×16 track segment in the section's line colour, round-capped, drawn in on reveal, with a station dot (surface fill, ink ring) at its centre. No eyebrow, kicker or uppercase label precedes a heading.

## Layout

A centred container capped at 1280px with side gutters of 1.25rem, 1.5rem from 640px and 2rem from 1024px. Sections breathe on a vertical rhythm of 6rem, 7rem from 640px and 8rem from 1024px. From 1024px the hero uses a 12-column grid: copy in 5 columns, the scheme in 7 across two rows bleeding past the gutter; below that it stacks name, scheme, then pitch. Project cards sit in a grid where a featured station spans two columns and splits into a 1.1fr / 1fr layout with its breakdown open. The experience timeline puts an 11rem mono date column left of the rail from 768px; on phones dates move under the role.

Navigation is a horizontal track from 1024px; below it, a full-screen menu lays the stops along a vertical 5px line. Contact stays one tap away at every width: a Telegram pill in the bar, or a 40px icon disc on phones. Body copy never runs past 68ch.

## Elevation & Depth

A hybrid. The day scheme lifts enamel signs off the white ground with a two-layer shadow tinted by `--shadow-color` (a dark blue-ink, not black); the night scheme relies on tonal layering (ground, Tunnel Wall, Service Corridor) and its shadow colour drops to near-black so shadows almost vanish. Depth otherwise comes from hairline borders. The 3D scheme in the hero is the only true volume.

### Shadow Vocabulary
- **Enamel plate** (`box-shadow: 0 1px 0 hsl(var(--shadow-color) / 0.04), 0 12px 32px -18px hsl(var(--shadow-color) / 0.25)`): every sign surface at rest.
- **Primary press** (`box-shadow: 0 10px 24px -12px hsl(var(--shadow-color) / 0.6)`): under the primary button only.
- **Docked bar** (`box-shadow: 0 8px 30px -20px hsl(var(--shadow-color) / 0.5)`): the nav once scrolled past 24px, with an 85% background and 12px backdrop blur.
- **LED bezel** (`box-shadow: inset 0 0 0 1px hsl(0 0% 100% / 0.06)`): the LED board's glass edge.
- **Station flash** (`box-shadow: 0 0 0 0 → 0 0 0 18px` of the line colour, fading): a card that a scheme station jumped to.

### Named Rules
**The Enamel Plate Rule.** There is one surface family, the sign: surface fill, 1px hairline border, 1.25rem corners, the enamel plate shadow. Hover lifts it 4px and darkens the border to 40% ink. Do not invent a second card style.

## Shapes

Everything is rounded the way metro furniture is rounded. Signs use 1.25rem corners (`--radius`), nested parts 14px and 10px. Every control is a pill: buttons, chips, the LED board, icon buttons, the language switch, nav stops. Stations are circles with an ink ring (surface fill, foreground stroke 2.5–4px). Line strokes are thick and round-capped: 5px for the heading mark and mobile menu rail, 6px for the timeline rail, 4px for the nav track. Project cards carry an 8px band of line stripes along the top, one equal stripe per line serving the station, clipped by the card's corners.

### Named Rules
**The Rounded Stroke Rule.** Lines end in round caps, stations are circles with ink rings, controls are pills. No square line ends, no square buttons.

## Components

### Buttons
Tactile, ink-solid and quick.
- **Shape:** full pill, 48px tall (40px in cards and the bar, 56px in Contact).
- **Primary:** Station Ink ground, ground-coloured text, 24px side padding, Primary press shadow.
- **Hover / Focus:** primary turns line red with white text and rises 2px; all buttons transition over 300ms on cubic-bezier(0.22, 1, 0.36, 1) and press to scale 0.97. Focus is the global 3px blue ring at 3px offset.
- **Ghost:** transparent with a 2px border at 80% ink; hover fills with ink.
- **Quiet:** a borderless or hairline-bordered pill in Worn Ink for secondary card actions (code link, expand toggle).

### Chips
- **Stack chip:** Platform Grey fill, Worn Ink 0.75rem medium text, pill, 4px × 10px.
- **Tag chip:** hairline border, no fill, same type (experience tags).

### Cards / Containers
- **Corner Style:** 1.25rem (sign).
- **Background:** surface.
- **Shadow Strategy:** Enamel plate (see Elevation & Depth).
- **Border:** 1px hairline; 40% ink on hover.
- **Internal Padding:** 1.5rem, 1.75rem from 640px.
- **Station card:** line-stripe band on top, overlapping small roundels with a mono year, title, status, tagline, stack chips, then actions; the breakdown expands with a grid-rows transition behind a dashed hairline divider and lists highlights with small ink-ringed station dots as bullets.

### Navigation
- **Desktop track:** stops sit on a 4px grey track; each stop is a pill label with a 12px station dot (Worn Ink ring, surface fill). The track fills up to the active stop in that section's line colour over 700ms on cubic-bezier(0.65, 0, 0.35, 1); the active dot scales to 1.25 and fills red with an ink ring.
- **Logo:** a 36px red disc with white initials that turns one full revolution on hover.
- **Progress:** a 3px red rail under the bar tracks scroll.
- **Mobile:** stops in 1.875rem display type along a 5px red vertical line with 20px ink-ringed dots, entering one after another; a full-width Telegram button below.

### Line Roundel (signature)
The line badge: a solid disc in the line colour with the line code in white bold display numerals, at 20, 28 or 40px, optionally followed by the line name in semibold display. Overlapping roundels on a card ring themselves in the surface colour. Line filter pills in the hero wrap a roundel and name in a hairline pill that lifts 2px on hover.

### Station Mark (signature)
The section heading device described in The Station Sign Rule: an 80×16 SVG, line path drawn in by stroke-dashoffset, station dot on top.

### LED Board (signature)
The carriage announcement strip under the hero: a pill of dark glass with amber JetBrains Mono, a soft amber text halo and a 1px inner bezel. A fixed cap on the left holds a blinking dot and "Next station" in uppercase mono with 0.14em tracking in LED Cap Orange; the stops scroll as a 38s linear marquee separated by ringed dots. Same colours in both schemes; the marquee stops under reduced motion.

### Timeline Track (signature)
Experience as a line: a 6px grey rail with an ink fill that grows with scroll, 28px ink-ringed stops that fill with the job's line colour once passed, and a small train in the current job's line colour riding the rail.

### Token and Turnstile (signature)
The contact object: an ink-outlined turnstile with a red header plate and a brass "M" token above it. Hover lifts and tilts the token; a click drops it into the slot, turns the arms 90° and switches the lamp from red to green, then opens Telegram.

### Motion
- **Reveal:** 18px rise and fade over 0.8s on cubic-bezier(0.16, 1, 0.3, 1); content stays visible if script never runs. The hero staggers in on the same curve with a 6px blur.
- **Line draw-in:** stroke-dashoffset over 1.4s on cubic-bezier(0.65, 0, 0.35, 1).
- **Scheme sweep:** the theme change clips the new scheme in from the left over 0.7s on cubic-bezier(0.65, 0, 0.35, 1) through a view transition.
- **Trains:** the 3D scheme's trains, the scroll-tied timeline train and the shuttle in Approach.
- **Overshoot:** cubic-bezier(0.34, 1.56, 0.64, 1) on the token, the turnstile arms, the theme icon and the transit pass.

**The Line Draws Itself Rule.** Lines arrive by drawing along their own path (stroke-dashoffset), never by fading or sliding in as a block.

**The Overshoot Is For Toys Rule.** The overshoot curve belongs to small physical objects you play with: the token, the turnstile, the theme icon, the pass. Layout, cards, navigation and text never overshoot.

**The Still Scheme Rule.** Every motion has a reduced-motion state: lines are already drawn, reveals are already visible, the 3D scene is replaced by the static SVG scheme, the marquee and the token drop stop, and global animations collapse to near zero.

## Do's and Don'ts

### Do:
- **Do** tie every use of m1–m5 to its discipline, section line or stop (The Five Lines Rule).
- **Do** give every new colour a day and a night value on `:root` and `.dark`, as HSL triplets so Tailwind can apply alpha.
- **Do** build new containers as enamel signs (surface, 1px hairline, 1.25rem corners, enamel plate shadow).
- **Do** open every section with the station mark in that section's line colour and an H2 in Geologica 700.
- **Do** set numbers, dates and codes in JetBrains Mono with tabular numerals.
- **Do** draw lines in with stroke-dashoffset on cubic-bezier(0.65, 0, 0.35, 1) and ship a reduced-motion state with every animation.
- **Do** keep a Telegram action reachable from every viewport and every width.

### Don't:
- **Don't** put an eyebrow, kicker or uppercase label above a heading; uppercase tracked type belongs only inside world objects such as the LED cap and the transit pass.
- **Don't** add a sixth saturated colour, gradient text or neon glow on UI chrome; the LED halo stays inside the LED board.
- **Don't** use a line colour as a generic decoration or background wash.
- **Don't** let the LED board follow the theme.
- **Don't** set small white text on the night-scheme line colours; lifted lines fall to 2.2–3.7:1 against white.
- **Don't** use the overshoot curve on layout, cards, navigation or text.
- **Don't** use JetBrains Mono for prose, headings or buttons.
