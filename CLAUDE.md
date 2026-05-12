# Project: alexandrudan.com

This is the **personal website of Alexandru DAN** — Applied AI Systems Architect, AI Professor, CEO at TVL Tech. Static site (HTML / CSS / vanilla JS) on GitHub Pages, custom domain `alexandrudan.com`.

The repository started as a generic template (see `AGENTS.md`) but is now a working personal site, not a template. When `AGENTS.md` and this file disagree, this file wins.

## Stack invariants (non-negotiable)

- HTML + CSS + vanilla JavaScript only.
- No frameworks, bundlers, package managers, transpilers, or build steps.
- GitHub Pages-compatible at all times. Anything that requires a build server is out of scope.

This is enforced at the contract level by Schedule C `USR-008`.

## Local preview

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Pages

- `index.html` — main entity hub (homepage)
- `speaking-workshops.html` — speaker page
- `labs.html` — experimental projects (Suno, AutoResearch, Particles, Treasure Hunt)

# Agentic Contract

This project is governed by an Agentic Contract structured as a **Master Agreement** with three **Schedules** plus a project-specific **target-queries** file:

- `.claude/contracts/master.md` — **Master Agreement** (parties, term, acceptance, enforcement, breach, amendment, severability).
- `.claude/contracts/coding.md` — **Schedule A — Coding Contract** (operational rules for code changes, dependencies, migrations, deployment, secrets).
- `.claude/contracts/ethics.md` — **Schedule B — Ethics Contract** (groundedness, sycophancy, scope creep, side effects, privacy, honest final communication).
- `.claude/contracts/user-rules.md` — **Schedule C — User Rules** (project-specific rules; SEO ranking objective, schema preservation, sameAs integrity, sitemap freshness, etc.).
- `.claude/contracts/seo-target-queries.md` — **canonical list of Google search queries** for which `alexandrudan.com` is contractually committed to rank #1. Read by `contract-judge` when evaluating SEO impact under USR-001.

The **Master** governs meta-clauses (who is bound, when, how breach is detected, how to amend). The **Schedules** define operational rules. On conflict, the Master prevails on meta-clauses and the stricter rule prevails on operational conflicts. Schedule C may extend (never relax) Schedules A or B.

By acting on any tool call in this session, Claude acknowledges this Master Agreement and the Schedules and accepts to be bound by them (Master §4.1, §18).

## Required reading

- Before **any HTML, schema, sitemap, robots, or content edit**, Claude MUST read Schedule C (`user-rules.md`) and `seo-target-queries.md`. Most regression risk on this site is SEO regression, not code regression.
- Before **risky work**, Claude MUST read and apply Schedule A.
- Before **final delivery**, Claude MUST apply Schedule B and Schedule C.
- Claude MUST cite rule IDs (`COD-N-02`, `ETH-G-01`, `USR-001`, `Master §7.1.4`) when classifying actions or claiming compliance (Master §4.4).

Each contract uses RFC 2119 normative keywords (MUST, MUST NOT, SHOULD, SHOULD NOT, MAY — only when ALL CAPS) and stable per-rule IDs (`COD-A/N/F-NN`, `ETH-G/R/S/B/P-NN`, `USR-NNN`). Master rules are cited by section number.

## Risky work

Risky work includes:

- deleting files
- installing, removing or upgrading dependencies (forbidden on this project — Schedule C `USR-008`)
- changing auth, billing, security, secrets or production config
- broad refactors
- deployment changes (`git push` to `main` triggers GitHub Pages republish)
- claiming tests passed (no test runner on this project)
- **any edit that touches Schema.org JSON-LD, `<head>` meta tags, `sitemap.xml`, `robots.txt`, canonical URLs, or `sameAs` arrays** (Schedule C `USR-002`–`USR-006`, `USR-011`)

For each action, Claude must decide before acting:

- ALLOW — safe to continue.
- ASK APPROVAL — user approval is required (Master §8).
- BLOCK — the action violates a contract.

If unsure, ask approval. Claude MUST NOT perform the action when the decision is ASK APPROVAL or BLOCK.

# Contract Judge (Auditor)

Use the `contract-judge` subagent (the **Auditor**, Master §1) before final delivery when:

- files were changed (especially `.html`, `sitemap.xml`, `robots.txt`, `site.webmanifest`)
- the change touches Schema.org JSON-LD, `<head>` meta tags, canonical URLs, or `sameAs` arrays
- risky work was requested
- approval may be required
- the final answer makes claims that need to be grounded, balanced, or honest about uncertainty

The Auditor is read-only and reviews work against the Master Agreement and all three Schedules, including the SEO-target-queries file referenced by USR-001.

If the Auditor returns PASS, continue.
If the Auditor returns ASK APPROVAL, stop and ask the user.
If the Auditor returns FAIL, stop, explain the violation, and recover (Master §10).

# Contract Keeper (Registrar)

Use the `contract-keeper` subagent (the **Registrar**, Master §1) to capture explicit user-supplied rules into Schedule C (`.claude/contracts/user-rules.md`).

The Registrar is invoked automatically by the Stop hook when the latest user message contains an explicit trigger:

- `/remember <text>`
- `remember:` / `remember this:` / `remember that:`
- `add to contract:` / `add rule:` / `contract rule:`

The Registrar is read-only. It returns a structured proposal with a stable `USR-NNN` ID, a normative statement (MUST / MUST NOT / SHOULD / SHOULD NOT / MAY), a rationale, and a verbatim source quote. The main session MUST wait for explicit user approval (`approve USR-NNN`) before appending the rule to `.claude/contracts/user-rules.md` (Master §11.3). Editing the file without that approval is a Breach.

The Auditor reads `user-rules.md` every turn and treats user rules with the same authority as `coding.md` and `ethics.md`.

# SEO ranking objective (binding)

Per Schedule C `USR-001`, this project has a single binding ranking objective:

> **`alexandrudan.com` MUST work toward ranking #1 on Google for every query in `.claude/contracts/seo-target-queries.md`.**

The full audit and tier-by-tier action plan is in `SEO-AUDIT-AND-RANKING-PLAN.md` at the project root. Future sessions should treat that document as the strategic background for any HTML/content edit.
