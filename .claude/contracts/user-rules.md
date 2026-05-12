# Schedule C — User Rules

**Version:** 1.0
**Last updated:** 2026-05-12
**Subordinate to:** `master.md` (Master Agreement). This Schedule defines project-specific rules; the Master governs parties, term, acceptance, enforcement, breach, and amendment.
**Precedence:** This Schedule MAY extend (never relax) Schedules A (`coding.md`) and B (`ethics.md`). The Master prevails on meta-clauses.

Project-specific normative rules captured during conversations and enforced by `contract-judge` alongside `coding.md` and `ethics.md`.

This file was initially seeded by the SEO Audit & Ranking Plan at `SEO-AUDIT-AND-RANKING-PLAN.md` (2026-05-12) on explicit Principal authorization. Subsequent rules MUST be added through the `contract-keeper` workflow (see `CLAUDE.md`) and MUST NOT be edited directly without explicit user approval (Master §11.3).

## Format

Each rule has a stable ID for citation by the judge and uses RFC 2119 normative keywords (MUST, MUST NOT, SHOULD, SHOULD NOT, MAY).

```
### USR-NNN — Short title
**Rule:** MUST | MUST NOT | SHOULD | SHOULD NOT | MAY <statement>.
**Why:** <reason supplied by the user>.
**How to apply:** <when and where this rule kicks in>.
**Added:** YYYY-MM-DD
```

## Rules

### USR-001 — SEO ranking objective

**Rule:** The Agent MUST treat the queries listed in `.claude/contracts/seo-target-queries.md` as a binding ranking objective. Every proposed change to `index.html`, `speaking-workshops.html`, `labs.html`, `sitemap.xml`, `robots.txt`, `site.webmanifest`, any `og-image*` asset, or any new HTML page on `alexandrudan.com` MUST be evaluated against the target query set, and MUST NOT be executed if it demonstrably weakens ranking signals (entity reconciliation, on-page entity terms, Schema.org JSON-LD richness, internal linking, freshness, canonicalization, hreflang, image SEO, page speed, mobile usability) for any target query without explicit Principal approval.
**Why:** The site is in a hostile SERP — the bare name `Alexandru Dan` is owned by a Romanian footballer (Wikipedia + Wikidata Q16236072), and `alexandrudan.com` is not on page 1 of the bare-name query. Every regression compounds.
**How to apply:** Before any HTML/SEO-affecting edit, the Agent MUST cite USR-001 in its reasoning and explain the expected impact (positive, neutral, or negative) on at least one Tier 1 query and one query from any other tier. After the edit, the Auditor MUST verify the impact statement against the actual diff.
**Added:** 2026-05-12

### USR-002 — Schema.org JSON-LD preservation

**Rule:** The Agent MUST NOT remove, weaken, or shrink any `<script type="application/ld+json">` block on any page. The Agent MAY add new properties or new blocks. The Agent MAY correct factually wrong fields (with explicit citation in the diff). The Agent MUST NOT delete or rename the `@id` anchors (`#person`, `#organization`, `#website`, `#webpage`, `#faq`).
**Why:** The JSON-LD blocks are the entity-reconciliation backbone. Stripping them collapses Knowledge Graph signals and is invisible in visual review.
**How to apply:** On any edit to a `.html` file, the Agent MUST diff the JSON-LD blocks before and after, and MUST NOT proceed if any required property is removed without an explicit replacement.
**Added:** 2026-05-12

### USR-003 — sameAs integrity

**Rule:** The Agent MUST NOT remove any URL from the `sameAs` array of `Person`, `Organization`, or `WebSite` JSON-LD objects without explicit Principal approval. The Agent SHOULD proactively add new authoritative `sameAs` URLs (LinkedIn, Wikidata, ORCID, GitHub, Crunchbase, Sessionize, official institutional pages) when discovered, and SHOULD propose them in conversation before adding.
**Why:** `sameAs` is Google's primary entity-disambiguation signal. Each authoritative URL in `sameAs` makes it harder for the SERP to confuse this Alexandru DAN with the footballer, the lawyer, etc.
**How to apply:** Before any edit to a JSON-LD block, the Agent MUST compare `sameAs` arrays before/after. Removals require approval. Additions require a one-line justification (which authoritative profile, why authoritative).
**Added:** 2026-05-12

### USR-004 — Canonical and indexability invariants

**Rule:** The Agent MUST NOT add `noindex`, `nofollow`, `none`, `noarchive`, or `nosnippet` directives anywhere on `alexandrudan.com` pages or in `robots.txt`. The Agent MUST NOT change the `<link rel="canonical">` URL on any page without explicit Principal approval. The Agent MUST NOT change the `og:url` value without simultaneously updating the canonical to match.
**Why:** A single accidental `noindex` can drop the page from Google for weeks. Canonical drift causes the wrong URL to be indexed and dilutes link equity.
**How to apply:** On any edit touching `<head>`, the Agent MUST search the diff for `noindex|nofollow|noarchive|nosnippet|canonical|og:url` and confirm none are weakened.
**Added:** 2026-05-12

### USR-005 — Title and description name-prominence

**Rule:** The `<title>` and `<meta name="description">` of `index.html` MUST contain the exact string `Alexandru DAN` (or `Alexandru Dan`). The `<title>` SHOULD lead with the name, not with a topic or role. Inner pages MUST contain `Alexandru DAN` in the `<title>`.
**Why:** Title and description are the strongest on-page name-prominence signals for ranking on the bare-name query.
**How to apply:** On any title/description edit, the Agent MUST verify the name is present and lead-positioned on `index.html`.
**Added:** 2026-05-12

### USR-006 — Sitemap freshness

**Rule:** Whenever the Agent edits any HTML page, the Agent MUST update `sitemap.xml`'s `<lastmod>` for that page to today's date (ISO `YYYY-MM-DD`), and SHOULD update the homepage `dateModified` in the `WebPage` JSON-LD if the change is non-trivial.
**Why:** Freshness is a ranking signal Google rewards. A static site with stale `lastmod` loses ground silently.
**How to apply:** Treat the sitemap update as part of the same atomic edit. The Auditor MUST flag any HTML edit not accompanied by a sitemap `lastmod` bump.
**Added:** 2026-05-12

### USR-007 — Image alt-text entity-strengthening

**Rule:** The Agent MUST NOT replace an entity-strengthening image `alt` attribute (e.g., `"Alexandru DAN, Applied AI Systems Architect and CEO at TVL Tech"`) with a generic equivalent (e.g., `"Portrait"`, `"Image"`). The Agent SHOULD prefer alt text that includes the entity name and a disambiguating role descriptor when the image depicts the principal entity.
**Why:** Alt text is a small but reinforcing entity signal, especially for image-pack SERP slots and accessibility-driven indexing.
**How to apply:** On any change to `<img alt>` attributes, the Agent MUST verify the entity-strengthening phrasing is preserved or improved on portrait images.
**Added:** 2026-05-12

### USR-008 — Static-site stack lock

**Rule:** The Agent MUST NOT introduce frameworks, bundlers, transpilers, package managers, build tooling, or any non-vanilla JavaScript dependency (no React, Vue, Tailwind build, npm, pnpm, yarn, vite, webpack, etc.) without explicit Principal approval. The site is committed to plain HTML, plain CSS, and vanilla JavaScript on GitHub Pages.
**Why:** GitHub Pages compatibility, build-step elimination, and SEO transparency (server-rendered HTML reaches Googlebot reliably). This rule extends Schedule A `COD-N-02` with a project-specific stricter constraint.
**How to apply:** On any new file or edit that proposes `import`/`require`, build config, `package.json`, etc., the Agent MUST refuse and ask for approval.
**Added:** 2026-05-12

### USR-009 — Proactive SEO surfacing

**Rule:** When the Agent works on any task that touches HTML, schema, content copy, or site structure, the Agent SHOULD proactively flag at least one ranking-improvement opportunity from `SEO-AUDIT-AND-RANKING-PLAN.md` (Tier 1–Tier 5) that is relevant to the current edit, and SHOULD offer to ship it in the same pass if it does not increase scope unreasonably.
**Why:** The contract is committed to driving ranking forward, not just protecting it (Principal preference: defensive + proactive enforcement).
**How to apply:** At the planning phase of any HTML/SEO edit, the Agent MUST scan the audit document and surface relevant Tier items in conversation.
**Added:** 2026-05-12

### USR-010 — Off-site action delegation

**Rule:** The Agent MUST NOT attempt to create, edit, or claim Wikidata items, Wikipedia articles, Google Knowledge Panel claims, LinkedIn profile changes, Crunchbase records, ORCID records, GitHub profiles, YouTube channel settings, or any other off-site account/resource on the Principal's behalf. The Agent SHOULD prepare drafts (e.g., a Wikidata statement set, a Wikipedia AfC draft, a Crunchbase profile copy) for the Principal to execute manually.
**Why:** Off-site identity actions require authenticated accounts only the Principal controls; misattribution risk and policy-violation risk (e.g., Wikipedia COI) are high.
**How to apply:** For any Tier 1 off-site item from `SEO-AUDIT-AND-RANKING-PLAN.md`, the Agent's deliverable is a draft + checklist, never an attempt to execute.
**Added:** 2026-05-12

### USR-011 — TVL Tech entity consolidation discipline

**Rule:** The Agent MUST list `https://www.tvl.tech/`, `https://tvltech.lu/`, and `https://www.tvl.technology/` as `sameAs` entries on the `Organization` JSON-LD on every page where TVL Tech is referenced as the employer/founder. The Agent MUST keep `https://www.tvl.tech/#organization` as the canonical `@id` until the Principal explicitly designates a different canonical domain.
**Why:** TVL Tech is currently split across three domains; from our side, we consolidate the entity via `sameAs` even if the canonical fix on those domains takes time.
**How to apply:** On any edit to `Organization` JSON-LD, the Agent MUST verify all three `sameAs` URLs are present and the `@id` is unchanged.
**Added:** 2026-05-12

### USR-012 — Romanian-language reach (deferred enforcement)

**Rule:** The Agent SHOULD propose a Romanian-language version of the site (`/ro/index.html` or equivalent) when the next major content update happens. The Agent MUST NOT ship a Romanian version without explicit Principal approval covering URL structure, hreflang pairing, and content scope.
**Why:** The majority of in-name press is in Romanian (Republica, ZF, Adevărul, Mediafax, Wall-Street.ro), but the site is English-only. A `lang="ro"` companion strengthens the Tier 3 geography queries.
**How to apply:** On the next major content edit, surface this proposal in the same conversation.
**Added:** 2026-05-12

### USR-013 — Hooks and contract-file integrity

**Rule:** The Agent MUST NOT edit `.claude/contracts/master.md`, `.claude/contracts/coding.md`, `.claude/contracts/ethics.md`, `.claude/contracts/seo-target-queries.md`, `.claude/agents/contract-judge.md`, `.claude/agents/contract-keeper.md`, `.claude/settings.json`, or any file in `hooks/` without an explicit Principal request that names the file. Edits to `user-rules.md` follow the Registrar workflow per Master §11.3 only.
**Why:** Stale or weakened contract files silently disable enforcement. This is a meta-rule: the contract protects itself.
**How to apply:** On any proposed edit to the listed files, the Agent MUST stop and ask, citing USR-013.
**Added:** 2026-05-12

## Changelog

- **1.0** (2026-05-12) — Initial Schedule C with USR-001 through USR-013, seeded from the SEO Audit & Ranking Plan (`SEO-AUDIT-AND-RANKING-PLAN.md`). Encodes the binding #1-ranking objective for the 25 target queries listed in `seo-target-queries.md`, plus defensive (USR-002 to USR-008, USR-013) and proactive (USR-009, USR-012) SEO rules, off-site delegation discipline (USR-010), static-site stack lock (USR-008), and TVL Tech entity consolidation (USR-011).
