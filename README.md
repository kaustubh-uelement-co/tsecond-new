# Tsecond — website

Next.js 15 (App Router). Light, subtle, glass. Structure follows the live
tsecond.ai site: its section order, taxonomy and copy.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Node 18.18+. No environment variables. No runtime dependencies beyond Next
and React — no animation library, no icon package.

## Routes — 34, all prerendered

| Path | Count | Page |
| --- | --- | --- |
| `/` | 1 | Hero · pipeline · ecosystem · products · solutions · industries · news |
| `/products` | 1 | Catalogue by category + specification index |
| `/products/[slug]` | 12 | One per system |
| `/solutions` | 1 | The four mission environments |
| `/solutions/[slug]` | 4 | Failure mode → mechanism → outcome → systems |
| `/industries` | 1 | Six sectors |
| `/industries/[slug]` | 6 | Constraint → mechanism → outcome → cases → systems |
| `/company` | 1 | Premise and engineering positions |
| `/company/procurement` | 1 | Contract routes and documentation |
| `/company/careers` | 1 | Open roles |
| `/news` | 1 | Programme notices |
| `/contact` | 1 | Briefing request |
| `*` | 1 | `not-found.js` |

Products, solutions and industries cross-link in every direction: a system
page lists the solutions and sectors that field it, derived by filtering —
nothing is maintained twice.

## The glass system

Three utilities in `app/globals.css`:

| Class | Fill | Use |
| --- | --- | --- |
| `.glass` | `rgba(255,255,255,.58)` | Content panels, cards |
| `.glass-sheer` | `rgba(255,255,255,.40)` | Large surfaces, tables, rails |
| `.glass-dense` | `rgba(255,255,255,.78)` | Floating chrome — header, mega menu |

Each blurs its backdrop at 16–26px with a saturation boost, and carries a
masked gradient border (`.glass::before`) that is bright at the top-left,
disappears mid-edge and returns bottom-right — the way light actually catches
a bevelled edge. `.lift` adds the hover response.

**Glass needs something to refract.** `.field` in the layout is a fixed set of
three very soft colour washes plus a 2.8%-opacity engineering grid. Remove it
and every panel reads as flat grey — that layer is load-bearing, not decoration.

## Palette

| Role | Value |
| --- | --- |
| Paper | `#FBFCFE` |
| Ink (headlines) | `#161B29` |
| Body | `#5A6478` |
| Muted / faint | `#8A93A6` · `#AEB6C4` |
| Accent | `#3E5BBF` — the only colour |
| Hairline | `rgba(22,27,41,.08)` |

One accent, used only where something is live: the active pipeline stage,
travelling packets, a hovered card edge, eyebrow labels. Everything else is
ink on paper. There is no dark section.

## Motion

- **Pipeline** (`components/Pipeline.jsx`) — a 400vh pinned stage where scroll
  *scrubs* the five stages rather than triggering them. Below 1024px it unpins
  and renders complete.
- **Reveal** (`components/Reveal.jsx`) — adds `.js` to `<html>` before
  observing. The hiding rule is scoped to `.js .rv`, so a script failure leaves
  the page fully visible. There is also a 1.6s failsafe sweep.
- Masked line-by-line headline reveals, count-up stats, infinite marquees,
  header that contracts on scroll, mega menu on hover.

All of it collapses under `prefers-reduced-motion`.

## Structure

```
app/
  layout.js        shell, fonts, metadata, the ambient field
  globals.css      @theme tokens + glass utilities
  page.js          home
  products/ solutions/ industries/   index + [slug]
  company/ company/procurement/ company/careers/
  news/ contact/ not-found.js
components/
  ui.jsx           Glass, D, Lab, Lede, Mono, Btn, Section, Head, PageHero, SpecList
  bits.jsx         HeroArt, Marquee, ProductGrid, SolutionGrid, IndustryGrid, UsedIn, CTA
  Header.jsx  Footer.jsx  Reveal.jsx  Pipeline.jsx  Counters.jsx  ContactForm.jsx
lib/
  data.js          SINGLE SOURCE OF TRUTH
```

### Adding a system, solution or sector

Append one object to `PRODUCTS`, `SOLUTIONS` or `INDUSTRIES` in `lib/data.js`.
The card, the nav mega menu, the footer column, the comparison row, every
cross-link and the whole `[slug]` page generate from it.

## Known gaps

- Product specs beyond the published figures (Micro-R, HX, BRONTO STOR, and the
  detail rows on several others) read "configured against programme
  requirement". Replace from the real datasheets before launch.
- `next/font/google` fetches at build time and needs network access to
  `fonts.googleapis.com`. If CI blocks it, switch to `next/font/local`.
- `metadataBase` is `https://tsecond.ai` — change if deploying elsewhere.
- The contact form is client-side only; `components/ContactForm.jsx` has a
  marked insertion point for your CRM endpoint.
- Careers roles and news items are placeholders in `lib/data.js`.
- No product photography. The hero and node drawings are SVG line art, so the
  site has no image dependencies at all — drop real renders in when available.
