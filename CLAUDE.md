# Jay Ambe Engineering Works — website

Website for jayambeengworks.in, an industrial construction / EPC contractor in Nandesari, Vadodara, Gujarat. The domain is registered with GoDaddy, and the site will be hosted on GitHub Pages. See `plan.html` for the full content and design plan.

## Selling framework (owner's requirement, applies to every sales page)
Home, every Service page and every Industry page are laid out top to bottom as:

1. **MCB (Mass Control Bait)**, the hero: an attention-grabbing headline, then 3–5 hooking bullet lines that expand on it, then a CTA that scrolls into Phase 1.
2. **Phase 1, introduction, story and trust:** the "story" is **NOT the founder's story**. Bring the customer in with **the real question they have** (for example "Why do some new plants start on time while others run months late?"). Then name the problems they recognise (calm and factual, no dramatised made-up timelines; the owner found those unconvincing), show trust proof (since 1996, stats, client names), and finish with an **open loop** that creates curiosity ("it comes down to 3 decisions… ↓"), which Phase 2 answers. The founder's story belongs only on the About page.
   - **Proof beats promises.** Back every claim with real evidence. `src/components/DprSample.astro` re-creates a real daily progress report. Keep it anonymous: never name its client, project or author anywhere, including code comments and these notes, because the repository is public. Never alter its figures.
3. **Phase 2, transformative insight:** this must actually CHANGE how the reader sees the decision, not repeat what they know. The homepage has two parts: (a) "the 3 decisions", which answer the Phase 1 open loop and come with the real DPR as proof; (b) the core reframe **"You're comparing the wrong number."** The quote is paid once, but delay is paid every month in lost production. This is shown with the interactive cost-of-delay calculator (`src/components/DelayCalculator.astro`), where visitors enter their own numbers, so nothing is invented. The worries cards follow it.
4. **Phase 3, the choice:** a win-or-lose comparison (lowest bidder vs Jay Ambe) that leans on fear of loss and is backed by proof such as case studies and testimonials.
5. **Phase 4, offer and CTA:** a free site visit and scope assessment, a quote within 48 hours, a downloadable company profile, a short form, and Call and WhatsApp buttons.

**Homepage MCB slider:** the homepage hero rotates several MCBs every 6 s (`src/components/HeroSlider.astro`), pausing on hover or touch. Add or edit MCBs in `src/data/mcbs.ts`. Slide 1 is always the main new-projects message. Current slides: new plant, precast compound walls, shutdown, fire fighting, brownfield expansion (5, which is the recommended maximum).

Supporting pages (About, Projects, Safety, Careers) end with the Phase 4 CTA band.

**Positioning (owner, 13 Oct 2026):** the site exists to win **NEW projects and new customers**: new plants, expansions and new units (greenfield and brownfield). Shutdown and maintenance work is only one service among many, so never make it the headline or the main story.

**Honesty rule:** never invent statistics, client names, certifications or urgency. Use only facts the owner has confirmed, and mark anything unconfirmed as `TODO-confirm`.

## Design
- Logo: `public/logo.png` (full, transparent) and `public/emblem.png` (gear emblem only, used in the header, footer and favicon). The logo needs a light background, so the header is white and the footer logo sits on a white chip.
- **Colours (owner chose option 1, 13 Oct 2026): TRUST NAVY + LOGO ORANGE on white.** Red was rejected because it felt untrustworthy, so never use red. Never use grey either. Text is black (#111111), with orange accents. Tokens are in `src/styles/global.css`: navy #0B3A66 (dark sections, footer, outlines, and the homepage hero), accent #EB9723 (logo orange: buttons with navy text, and accent borders), orange #C46200 (orange text on white), orange-light #F5A623 (orange text on navy), tint #F1F6FC (alternate sections), and white text on navy. The "Jay Ambe" wordmark uses #EB9723. Yellow `.todo` markers are temporary.
- Fonts: Barlow Condensed for headings and Inter for body text.
- Mobile first, with a sticky Call and WhatsApp bar on mobile.
- Real site photos rather than stock images.

## Confirmed facts (owner, 13 Oct 2026)
- Founded in **1996**, so 30 years as of 2026. Write "Since 1996" or compute the years from the date; don't hard-code 25+ or 29+.
- Founder: **Vipulbhai Padhiyar**
- The free site visit and free quote offer is **confirmed**.
- **The company owns a precast compound wall plant** (owner, 13 Oct 2026). It is listed as the "Precast Compound Walls" service.
- **A daily progress report is sent to the client** during every job (confirmed). It's a strong trust point, so use it on Home, service pages and the "worries" section.
- The old site's stats (500+ projects, 98% on time, 400+ staff) are **NOT correct**, so never use them. **Zero safety incidents is confirmed by the owner (13 Oct 2026).** The homepage stats are: 30 years · 0 safety incidents · daily progress report · 200 workers on a single site (from the real DPR).
- **Clients:** the full job history from the owner (13 Oct 2026) is in `clientHistory` in `src/data/site.ts` and shown on `/clients/`. Never add clients or years that aren't in it. Short lines use "Sicgil India and Gulbrandsen Chemicals". IOCL, Reliance, IPCL and HPCL appear only in the history and timeline, never as headline names (the owner removed them from the hero). The key trust story: Sicgil has been a client since 1996 and still is. Sicgil is NOT the first client, so never call it that. Show names as plain text only, no logos.

## Still to confirm
- Optional later: total number of projects and total workforce size
- Final list of services
- Phone +91 73835 03062 and address A/27 Nilkhant Society, Nandesari, Vadodara: **confirmed by owner (14 Oct 2026)**
- GST number

## SEO pages
- **Service pages** `/services/<slug>/`: content lives in `src/data/servicePages.ts` (one entry per service, with slugs matching `serviceGroups` in `site.ts`). Template: `src/pages/services/[slug].astro`.
- **Industry pages** `/industries/<slug>/` and **location pages** `/locations/<slug>/`: content lives in `src/data/seoPages.ts`. Location pages must name only clients really in that area, so they never become thin, copied pages.
- Every page passes `schema` to `Base` for Service, FAQPage and BreadcrumbList structured data. The sitemap is generated automatically (`@astrojs/sitemap`), and `public/robots.txt` points to it.
- Keep titles to 60 characters or fewer and descriptions to 160 or fewer, with exactly one `<h1>` per page. Check this after adding pages.
- To add a new service, add it to `serviceGroups` in `site.ts`, add a matching entry to `servicePages.ts`, AND add an entry to `src/data/serviceSeo.ts` with the primary keyword, 2 "about" paragraphs and the relevant location slugs. Every service page should have 700+ words and link to its locations and guides.
- **Guide pages** `/guides/<slug>/`: content lives in `src/data/guides.ts`, with Article and FAQ structured data. They target "cost", "vs" and "how to" searches. **Never add ₹ rates until the owner gives real figures.** Explain what decides the price instead.
- The owner confirmed they build **factories, warehouses, industrial sheds and PEB structures** (keyword report request, 13 Oct 2026).
- Locations: Vadodara, Nandesari, Makarpura, Manjusar, Savli, Halol, Waghodia, Padra and Dahej. Areas with no client show "Our work nearby" with real neighbouring clients only.
- Keyword targets are in the report from 13 Oct 2026. Homepage primary keyword: "industrial construction company in Vadodara".
- **Service page depth (owner wants long, FAQ-rich pages):** each service page has an SEO intro, scope, a 5-step process, "why choose us", a "how to choose a contractor" checklist, areas, and **13–14 FAQs** (its own FAQs + `src/data/serviceFaqs.ts` + shared FAQs in the template), all included in FAQPage structured data. Target **1,500+ words**. Don't add near-duplicate questions. Location pages have 6 FAQs, industry pages 7 and guides 5.

## Hosting & deployment
- Repo: https://github.com/Jayambecivilonline/jayambe-website (public; GitHub Pages on the free plan needs a public repo, so never commit private client details).
- Every push to `main` builds and deploys via `.github/workflows/deploy.yml` (takes 1–2 minutes). `public/CNAME` = jayambeengworks.in.
- DNS lives at GoDaddy: A @ → 185.199.108.153 / .109.153 / .110.153 / .111.153, CNAME www → jayambecivilonline.github.io. The domain has no MX (email) records yet.
- The enquiry form sends through Web3Forms (key in `src/components/SiteVisitForm.astro`, public by design) to the owner's inbox, and shows an inline thank-you message.
- `plan.html` is internal and git-ignored.

## Experience test page
- `/experience/` (`src/pages/experience.astro`) is a TEST page: a scroll-driven scene where a plant builds itself from dawn to night (GSAP ScrollTrigger + Lenis, layered SVG, dust canvas). It is `noindex` and excluded from the sitemap. It is not linked from the menu until the owner approves it.
- `src/components/BreakerCursor.astro` is the jackhammer cursor (desktop mouse only). Clicking or holding shakes it, throws debris and leaves a crack. On touch screens, taps vibrate where supported. It respects `prefers-reduced-motion`.
- `src/scripts/fx.ts` is the shared particle engine (sparks, debris, dust).

## Competitor-matching content (14 Oct 2026)
- Owner asked to match the content types that rank (DCEC, Patel Infraspace, Rudrani, ARB, AK Construction). Match **topics and page types** only, never copy their text.
- Added: 8 more guide articles (14 total), `/safety-quality/`, `/faq/` (hub of all FAQs, de-duplicated) and `/careers/` (general, with no invented openings).
- **Do NOT create mass city pages** like ARB's "EPC contractor in <20 cities>". Google treats them as doorway pages, and the owner doesn't work in most of those cities. Add a location only where the owner really works.
- Still needs real owner content: **project case studies** (client or anonymised, location, scope, year, photos), **testimonials** (name, designation, company), a gallery, team and certificates (ISO only if really certified).

## Header mega menu & hero backdrop (14 Oct 2026)
- **Services mega menu** (in `src/layouts/Base.astro`): on desktop it slides down on hover or keyboard focus, with 4 columns from `serviceGroups` plus a navy strip of industries and a CTA. On phones it's a tap-to-expand list (`.sub-toggle`), and the open menu scrolls inside and stops above the Call/WhatsApp bar. New services appear in it automatically.
- **`src/components/HeroBackdrop.astro`**: live construction animation behind the homepage MCB slider (drifting grid, light sweep, two swinging cranes lifting beams, plant wireframe drawing on a loop, welding flashes, dust). Pure SVG + CSS, kept faint for readability, lighter on phones, and off with reduced motion.
- **`src/components/PourScene.astro`** (homepage hero, right column, plays continuously while slides change, 28 s loop): an RMC transit mixer reverses in with its drum turning, pours into the pump, concrete pulses up the pump line, slabs fill floor by floor, columns rise, then lights on, an "ON TIME ✓" flag, and the truck leaves. One GSAP timeline that pauses off-screen and shows the finished building for reduced motion. `window.__pour` is a DEV-only test hook (stripped from production). The per-slide illustrations in `mcbs.ts` are no longer shown in the hero but are kept for later use (e.g. real photos).
