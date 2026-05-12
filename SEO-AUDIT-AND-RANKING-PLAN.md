# SEO Audit & Ranking Plan — "Alexandru DAN"

**Audited site:** `https://alexandrudan.com/` (static site on GitHub Pages, 3 HTML pages: `index.html`, `speaking-workshops.html`, `labs.html`).

**Date:** 2026-05-12.

## Objective (to be enshrined in the agentic contract)

The website, the supporting subdomains, and every future agent edit MUST work toward a single measurable objective:

> **`alexandrudan.com` ranks #1 on Google for the following target queries.**

### Target query set (v1 — to be confirmed and extended by the user)

**Bare name (highest difficulty, highest value):**
1. `Alexandru DAN`
2. `Alexandru Dan`
3. `Alex Dan`

**Role + name:**
4. `Alexandru DAN AI Speaker`
5. `Alexandru DAN AI`
6. `Alexandru DAN keynote speaker`
7. `Alexandru DAN AI workshop`
8. `Alexandru DAN AI Architect`
9. `Alexandru DAN Applied AI`

**Geography + name:**
10. `Alexandru DAN Luxembourg`
11. `Alexandru DAN Romania`
12. `Alexandru DAN Bucharest`

**Affiliation + name:**
13. `Alexandru DAN TVL Tech`
14. `Alexandru DAN CEO`
15. `Alexandru DAN ASE`
16. `Alexandru DAN AI Professor`
17. `Alexandru DAN WITSA`

**Topic + name:**
18. `Alexandru DAN EU AI Act`
19. `Alexandru DAN agentic AI`
20. `Alexandru DAN LLMs in production`
21. `Alexandru DAN conversational AI testing`
22. `Alexandru DAN Data Spaces`

**Owned brand:**
23. `TVL Academy Alexandru DAN`
24. `AutoResearch Alexandru DAN`
25. `Particles Alexandru DAN`

This list will be canonicalized into a single file the agentic contract reads (`.claude/contracts/seo-target-queries.md`) so the contract-judge can audit any change against the full target set.

The contract will require:
- Every page edit MUST preserve or strengthen ranking signals for queries in this set.
- The agent MUST refuse changes that demonstrably weaken signals for any target query without explicit user override.
- The agent MUST proactively suggest additions to alexandrudan.com that strengthen poorly-ranking targets.

---

## 1. Current SERP reality

### 1.1 Bare-name query `"Alexandru Dan"`
The current top-10 is dominated by **other people** with the same name:

| Result | Entity | Risk |
|---|---|---|
| `en.wikipedia.org/wiki/Alexandru_Dan` | Romanian footballer (Alexandru Angelo Dan) | **Critical** — Wikipedia owns the Knowledge Graph slot |
| `wikidata.org/wiki/Q16236072` | Same footballer | **Critical** — Wikidata feeds the Knowledge Panel |
| `transfermarkt.us/alexandru-dan/...` | Same footballer | High DA competitor |
| `imdb.com/name/nm0018929` | Dan Alexandru, cinematographer | Different person |
| `imdb.com/name/nm0018930` | Dan Alexandru, actor | Different person |
| `itftennis.com / atptour.com` | Dan Alexandru Tomescu, tennis player | Different person |
| `kinstellar.com` + `actlegal.com` | Alexandru Dan, lawyer at Kinstellar | Different person, same name, professional context |
| `facebook.com/alexandrudaan` | Same name, different profile | n/a |
| `en.wikipedia.org/wiki/Alexandru_Dan` (footballer) | — | — |

**`alexandrudan.com` does not appear on page 1 of the bare-name query.** This is the single most important fact in the entire audit.

### 1.2 Disambiguated queries (`"Alexandru Dan" AI` / `... TVL Tech` / `... CEO`)
On context-laden queries, our entity already ranks well:
- `linkedin.com/in/alexandrudan/` — strongest entity hub
- `icmarktech.com/.../alexandru-dan-as-keynote-speaker/` — high-quality earned coverage
- `tvltech.lu/` — Luxembourg TVL site
- `wall-street.ro/.../alexandru-dan-expert-ai...` — earned Romanian press
- `autoresearch.alexandrudan.com/` — owned subdomain
- `youtube.com/.../alexandru-dan-ceo-tvl-tech` — YouTube interview
- `datadiggers-mr.com/blog/...alexandru-dan...` — earned guest interview
- `tvl.tech/about` — own site
- `tvl.technology/team/alex-dan` — third TVL domain (problem, see §3.5)

So Google clearly understands the AI/CEO entity exists — it just hasn't promoted our site to outrank the disambiguated competitors for the bare name.

---

## 2. What the site already does well

| Asset | Status |
|---|---|
| Schema.org `Person` JSON-LD with `@id`, `jobTitle`, `worksFor`, `knowsAbout`, `memberOf`, `sameAs` | ✅ |
| Schema.org `Organization` (TVL Tech), `WebSite`, `WebPage`, `FAQPage` | ✅ |
| `sameAs` array linking to LinkedIn-via-other, TVL Tech, Academy, Suno, AutoResearch, Particles, Ocean Enterprise, Treasure Hunt, Republica, ZF, ICMarkTech, Wall-Street.ro | ✅ |
| Canonical URL, OG, Twitter Card, `og:image` 1200×630 dedicated card | ✅ |
| `sitemap.xml` with image extensions; `robots.txt`; HTTPS; `manifest`; favicons full set | ✅ |
| `lang="en"`; mobile viewport; semantic landmarks; skip link | ✅ |
| `hreflang` `en` + `x-default` | ✅ |
| `index,follow,max-image-preview:large` | ✅ |
| Page load: portrait preloaded, fonts preconnected, lazy-loaded media | ✅ |

The foundation is strong. The problem is **not on-page SEO hygiene — it is entity authority and topical depth.**

---

## 3. Gaps blocking the #1 position

### 3.1 No Wikidata entity for our Alexandru DAN (highest-leverage gap)
Google's Knowledge Graph for the string "Alexandru Dan" is currently anchored on `Q16236072` (footballer). Creating a Wikidata item for our Alexandru DAN — with statements like `instance of: human`, `occupation: artificial intelligence researcher / chief executive officer / academic`, `employer: TVL Tech`, `country of citizenship: Romania`, `educated at: ASE Bucharest`, `member of: WITSA / ATIC / BEROCC`, plus an `official website` statement pointing to `https://alexandrudan.com/` — is the **single most important off-site action**. Wikidata items feed Knowledge Panels and act as entity disambiguators.

### 3.2 No Wikipedia article — and one currently exists for the footballer
Wikipedia carries the heaviest possible entity weight in Google SERPs. A Wikipedia article for the AI-CEO Alexandru DAN would need to clear WP:N (general notability) and WP:BIO. Evidence already exists in:
- Wall Street, ZF (two pieces), Adevărul, Mediafax, Republica (multiple), ICMarkTech keynote announcement, Ministère de l'Économie Luxembourg, Luxembourg-Romania institutional publication.
- Independent, secondary, reliable sources covering him in his AI/CEO/academic capacity.

This is borderline-notable; eligibility is uncertain but **plausible** with the existing press footprint. Drafting via Articles for Creation rather than direct publishing is the safer path.

### 3.3 LinkedIn profile is doing the heavy lifting — and it's not on alexandrudan.com
`linkedin.com/in/alexandrudan/` ranks #2 on the AI-context query, but our own site does not. LinkedIn is the de-facto canonical entity page. The own-site should not be ceding that role.

Critically, **the LinkedIn URL is missing from the `sameAs` array** on `alexandrudan.com`. This is a free SEO win: declare the LinkedIn URL as `sameAs` and Google's entity reconciliation gets stronger.

### 3.4 Person schema is under-specified
Current `Person` JSON-LD lacks fields that materially help disambiguation:
- `nationality` (Romanian)
- `birthDate` (or at least `birthPlace`)
- `alumniOf` (ASE Bucharest, etc.)
- `gender`
- `givenName` / `familyName` (currently only `name`)
- `homeLocation` / `workLocation` (Luxembourg / Bucharest)
- `identifier` (link to Wikidata QID once created)
- `award` (if applicable)
- `hasOccupation` with structured `Occupation` (`occupationLocation`, `skills`)

These fields don't make the page prettier but they make Google more confident the entity is *not* the footballer.

### 3.5 TVL Tech entity is split across three domains
- `tvl.tech` (linked in JSON-LD as `@id`)
- `tvltech.lu` (Luxembourg)
- `tvl.technology` (has `/team/alex-dan`)

Three domains for one company dilute the entity, split backlinks, and confuse Google. One must be canonical and the others must `link rel="canonical"` (or 301) to it. The `Organization` JSON-LD on `alexandrudan.com` should list all three under `sameAs` even if their owner-side fix takes time.

### 3.6 Thin content footprint
The site is essentially 3 pages. There is no `/articles/`, `/notes/`, `/talks/`, or `/press/` page where Google can find depth, freshness, and topical co-occurrence. Single-page sites rarely outrank multi-page entity hubs (Wikipedia, LinkedIn, IMDb).

### 3.7 No Romanian-language version
The majority of in-name press (Republica, ZF, Adevărul, Mediafax, Wall-Street.ro) is **in Romanian**, yet alexandrudan.com is English-only (`hreflang="en"`). A Romanian companion page (`/ro/` or `alexandrudan.ro` if owned) at minimum, or a `lang="ro"` mirror, would let Google rank our site for Romanian-language brand searches where the press evidence is strongest.

### 3.8 No `VideoObject` / `ProfilePage` schema
- ZF Live YouTube interview, Factory 4.0 YouTube interview, and any speaker reels are not declared as `VideoObject` schema on our pages.
- `ProfilePage` schema (added by Google in 2023 specifically for entity profile pages) is not used. This is the modern, purpose-built schema for "person hub" pages.

### 3.9 Freshness signals weak
`sitemap.xml` `lastmod` is `2026-04-13`. The homepage `dateModified` is `2026-04-13`. The site is mostly static. Google's freshness signals reward sites that change visibly; pure static sites can lose ground over months. A `news`/`field-notes` content stream, even short, addresses this.

### 3.10 Backlinks are coverage-style, not endorsement-style
Earned press links to alexandrudan.com from Republica, ZF, etc. — those are stronger as *author bylines linking back to alexandrudan.com*. The Republica author page (`republica.ro/autor/alexandrudan_2`) almost certainly does not currently link back to `alexandrudan.com` in the author bio (verify and fix).

### 3.11 Internal linking and anchor text
Hero CTA is `mailto:` and chip lists are unlinked. Linking section headers (e.g., "TVL Tech", "AutoResearch", "TVL Academy") to canonical entities both internally and externally with exact-match anchor text strengthens entity associations.

### 3.12 No `BreadcrumbList`, `Speakable`, or `EducationalOccupationalCredential`
- `BreadcrumbList` JSON-LD on inner pages helps Google's SERP rendering.
- `Speakable` helps voice-search surfaces.
- `EducationalOccupationalCredential` (e.g., AI Professor at ASE) is a strong E-E-A-T signal in Google's modern ranking.

### 3.13 No Google Search Console / Bing Webmaster verification visible
Cannot confirm from static HTML alone, but no `<meta name="google-site-verification">` is present on the homepage. If Search Console is not active, indexing/crawl issues and entity signals are invisible to the owner.

---

## 4. The ranking plan (ordered by leverage × cost)

This is the prioritized plan that will be encoded as Schedule C rules. Each item is also flagged with whether it is an **on-site code change** (Claude can do this) vs **off-site / manual** (the user must do it externally).

### Tier 1 — Entity ownership (single biggest leverage)

| # | Action | Type | Why |
|---|---|---|---|
| T1-01 | Create Wikidata item for Alexandru DAN (AI/CEO) with `instance of: human`, occupations, employer (TVL Tech), citizenship (Romania), residence (Luxembourg), educated at, `official website`, and all `described at URL` citations to press coverage | Off-site | Owns Knowledge Graph disambiguation; eligibility easier than Wikipedia |
| T1-02 | Add LinkedIn URL to `Person.sameAs` on all pages | On-site | Free; closes the strongest entity-hub omission |
| T1-03 | Once Wikidata QID exists, add `identifier` (PropertyValue, propertyID=wikidata, value=Q…) and `Person.@id` cross-reference in JSON-LD | On-site | Entity reconciliation signal |
| T1-04 | Submit a Google Knowledge Panel claim via search.google.com once Wikidata exists | Off-site | Lets the owner correct the panel that currently belongs to the footballer-by-default |
| T1-05 | Draft Wikipedia article via Articles for Creation (don't direct-publish) | Off-site | Highest authority backlink possible; failable but worth the attempt |

### Tier 2 — On-page entity strengthening

| # | Action | Type |
|---|---|---|
| T2-01 | Expand `Person` JSON-LD with `nationality`, `birthPlace`, `alumniOf`, `givenName`, `familyName`, `hasOccupation` (structured `Occupation`), `homeLocation`, `workLocation`, `award` (if applicable) | On-site |
| T2-02 | Replace `WebPage` schema on `index.html` with `ProfilePage` schema (Google's purpose-built type for person hub pages, introduced 2023) | On-site |
| T2-03 | Add `BreadcrumbList` JSON-LD on `speaking-workshops.html` and `labs.html` | On-site |
| T2-04 | Add `Speakable` schema on the homepage `<section id="about">` block | On-site |
| T2-05 | Add `EducationalOccupationalCredential` for the ASE Bucharest AI Professor role | On-site |
| T2-06 | Add `VideoObject` JSON-LD blocks for the ZF Live interview and any other featured YouTube videos | On-site |
| T2-07 | Tighten the portrait `alt` text from "Portrait of Alexandru DAN" to **"Alexandru DAN, Applied AI Systems Architect and CEO at TVL Tech"** (and similar across all hero imagery) — `alt` is a small but reinforcing entity signal | On-site |
| T2-08 | Add `Organization.sameAs` entries for `tvltech.lu` and `tvl.technology` to consolidate the TVL Tech entity from our side, even if the canonical fix happens later on those domains | On-site |
| T2-09 | Add `<meta name="google-site-verification">` if Search Console is active; if not, set it up | On-site + off-site |

### Tier 3 — Topical depth & freshness

| # | Action | Type |
|---|---|---|
| T3-01 | Add a `/notes/` or `/writing/` section on alexandrudan.com — short field notes after talks, recaps, takeaways — published with `Article` schema | On-site |
| T3-02 | Update `sitemap.xml` `lastmod` whenever any page changes — automate this | On-site |
| T3-03 | Add `dateModified` to JSON-LD on every page edit | On-site |
| T3-04 | Add a `press/` or `media/` page with the full list of press coverage, each with `NewsArticle` or `Article` schema reference | On-site |
| T3-05 | Add a `/talks/` page listing all keynotes with `Event` schema (past) and `Event` schema (upcoming) | On-site |

### Tier 4 — Internationalization & multilingual reach

| # | Action | Type |
|---|---|---|
| T4-01 | Add a Romanian-language version (`/ro/index.html` or subdomain) with proper `hreflang` `ro` / `en` pairing | On-site |
| T4-02 | Get Republica.ro, Wall-Street.ro, ZF, and any author bios updated to link back to `alexandrudan.com` (not LinkedIn) | Off-site |

### Tier 5 — Off-site authoritative profile coverage

| # | Action | Type |
|---|---|---|
| T5-01 | Claim/optimize the Google "About this result" entity card by linking author bios across owned properties | Off-site |
| T5-02 | Create or update Crunchbase profile with link back to alexandrudan.com | Off-site |
| T5-03 | Create ORCID profile (free, academic-credible); add `identifier` JSON-LD reference | Off-site → On-site |
| T5-04 | Optimize YouTube channel — handle aligned to brand, channel description linking to alexandrudan.com, video descriptions linking to alexandrudan.com | Off-site |
| T5-05 | Create a GitHub profile README at github.com/danlex (or similar) with a bio paragraph linking back to alexandrudan.com | Off-site |
| T5-06 | Create speaker profiles (Sessionize, Speakerinc) linking back | Off-site |
| T5-07 | Quarterly: write one guest post on a high-DA publication and ensure the byline links back to alexandrudan.com (not LinkedIn) | Off-site |

### Tier 6 — TVL Tech entity consolidation
Owner-side decision required: pick one canonical domain (likely `tvl.tech`) and 301 / canonical the other two. If that decision is deferred, the on-site mitigation in T2-08 is the partial fix.

---

## 5. What "winning" looks like, measurably

A 90-day target after Tier 1 + Tier 2 ship:

- **Bare-name SERP `"Alexandru Dan"`:** alexandrudan.com on page 1, ideally top 3.
- **Knowledge Panel:** when present, anchored to the AI-CEO entity (not the footballer) or, at worst, disambiguated with both entities visible.
- **`site:alexandrudan.com` in Search Console:** every page indexed; rich-result eligibility for `Person`, `ProfilePage`, `FAQPage`, `BreadcrumbList`, `VideoObject`.
- **Direct branded query `"alexandrudan.com"`:** result #1 (today: probably already true, verify).
- **Disambiguated AI-context queries:** alexandrudan.com in top 3 (today: not present, LinkedIn dominates).

---

## 6. The contract angle — what should be enforced going forward

The reason to bake this into an agentic contract (Schedule C) is that **every future edit to `index.html`, `speaking-workshops.html`, `labs.html`, sitemap, or robots.txt can quietly undo SEO**. Examples of regression patterns the contract should block:

- Removing or weakening Schema.org JSON-LD blocks.
- Removing the LinkedIn URL or any `sameAs` entry without explicit user approval.
- Changing the canonical URL.
- Changing `<title>` or `<meta description>` away from name-prominent phrasing.
- Removing `dateModified` updates from JSON-LD.
- Adding `noindex` or `nofollow` directives anywhere.
- Editing the portrait `alt` text to remove the entity-strengthening phrasing.
- Renaming files in a way that breaks canonical URLs.
- Letting `sitemap.xml` `lastmod` go stale after an HTML edit.

These will become **USR-NNN rules** in Schedule C of the agentic contract.

---

## 7. Recommended sequencing for the contract

Once you approve this plan, I will:

1. Install the full agentic-contract framework (`master.md`, `coding.md` Schedule A, `ethics.md` Schedule B, `user-rules.md` Schedule C, contract-judge & contract-keeper subagents, three hook scripts, `.claude/settings.json` hook registration, `CLAUDE.md` reference).
2. Pre-populate Schedule C (USR rules) with the SEO regression-prevention rules from §6.
3. Ship the **Tier 1 on-site action (T1-02)** and **all Tier 2 on-site actions (T2-01 through T2-08)** in the same pass, since they are pure code edits and they materially move the needle.
4. Leave Tier 1 off-site actions (Wikidata, Wikipedia, Knowledge Panel claim) and Tier 3–5 actions as a written checklist for you to execute, since they require external accounts and editorial work I cannot do for you.

**Approval needed:** does this plan match what you want? Any items to drop, expand, or reorder before I install the framework and ship the on-site changes?
