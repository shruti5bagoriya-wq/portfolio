# Design notes — how the portfolio look was built

A record of the visual system so future edits stay consistent (and so we can
redo the vibe if we ever rebuild). Done June 2026.

## The brief

Take a competent-but-templated dark portfolio and make it feel *designed* —
editorial and distinctive, not "AI slop." The site is for a LinkedIn
ghostwriter, so the design should quietly signal **writer**.

## The four moves that did the work

1. **Atmosphere instead of a flat background.**
   The dead `#0d0c16` fill became a layered, animated **aurora** (warm coral +
   soft amber + a hint of violet, blurred radial gradients) plus a faint **film
   grain** overlay. Both live in a fixed `.bg-atmosphere` layer behind all
   content (`globals.css`). This is what gives the page depth.

2. **Editorial typography (the "writer" signal).**
   - `Anton` — heavy condensed display face, for punchy uppercase headlines.
   - `Fraunces` — a characterful serif (italic), used for the voice lines,
     testimonial quotes, and the "Meet your growth partner" intro. This is the
     move that makes it read like a writer's site, not a SaaS template.
   - `Geist` — clean sans for body/UI.
   Fonts are loaded in `app/layout.tsx` via `next/font/google` and exposed as
   `--font-display`, `--font-serif`, `--font-sans`.

3. **Warm coral accent.**
   Shifted the cold rose to a warm coral (`--accent: #ff6a5a`, with
   `--accent-2: #ffb37a` for gradients). Buttons (`.btn`) get a soft glow.
   Accent is a Tailwind theme color, so `text-accent` / `bg-accent` /
   `border-accent` all work.

4. **Motion, used sparingly for high-impact moments.**
   - Scroll-reveal: `.reveal` elements fade up as they enter the viewport
     (IntersectionObserver, inline `<Script>` in `page.tsx`). Staggered with
     inline `animationDelay`.
   - Hover: `.card` lifts slightly; `.btn` lifts + brightens.
   - The logo marquee got soft **edge-fade masks** (`.marquee-mask`) instead of
     hard cut-offs.

## Principles to keep (the "no AI slop" rules)

- Commit to one cohesive aesthetic. Dominant dark + one warm accent beats a
  timid even palette.
- Distinctive fonts only — no Inter/Roboto/Arial/system defaults.
- Backgrounds should have atmosphere (gradients/grain), not solid fills.
- One well-orchestrated load/scroll reveal beats scattered micro-animations.
- Every animation must respect `prefers-reduced-motion` (all of ours do — see
  the media query at the bottom of `globals.css`).

## Gotchas we hit (so we don't re-hit them)

- **Hydration warning:** an inline head script adds a `js` class to `<html>`
  before React hydrates (so the page is fully visible if JS never runs). That
  changes the server-rendered `<html>` className → React flags a mismatch. Fix:
  `suppressHydrationWarning` on `<html>` in `layout.tsx`. Expected, not a bug.
- Reveal animations are gated behind the `.js` class so content never stays
  hidden if scripts fail to run.

## Where things live

- `app/globals.css` — all the visual system (atmosphere, accent, fonts wiring,
  `.btn` / `.card` / `.reveal` / marquee, reduced-motion).
- `app/layout.tsx` — font loading + the no-flash `js` class script.
- `app/page.tsx` — page structure + the scroll-reveal observer script. Content
  data (stats, logos, case studies, testimonials) lives in the constants at the
  top, clearly marked for easy editing.

## Open item

- Hero stat **"6M+ organic impressions"** is derived from the two case studies
  (2.5M + 3.7M). Confirm or drop. Edit in the `STATS` array in `page.tsx`.
