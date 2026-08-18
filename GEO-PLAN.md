# GEO Plan — Repository Copy

**Adopted:** 2026-08-17, on explicit Principal approval.
**Source:** `AlexandruDan_GEO_Plan_v1.md` (Principal-supplied, 17 August 2026), reproduced verbatim below the reconciliation notes.
**Relationship to other documents:** strategic companion to `SEO-AUDIT-AND-RANKING-PLAN.md` (2026-05-12). The contractual query set lives in `.claude/contracts/seo-target-queries.md` (v1.1); this document is strategy, not contract.

## Reconciliation with the current site (2026-08-17)

The plan below was written without visibility into the repository. Read it with these corrections:

1. **Already done — do not redo:**
   - `llms.txt` exists and is richer than the skeleton in §15 (disambiguation from the footballer, affiliations, sameAs). Only its "Key pages" list needs updating as new pages ship.
   - `/notes/` exists with three field notes (conversational AI testing, data spaces and AI, production AI / ICMarkTech 2026) — the seed of Clusters B and D supporting content.
   - Wikidata entity Q141017681 is created and linked from the Person schema (§8–9 largely handled).
   - A Romanian version exists at `/ro/` with hreflang pairing.
   - Person / Organization / WebSite / ProfilePage / FAQPage JSON-LD, the sameAs graph, sitemap, robots, and canonicals are in place and contract-protected (USR-002–USR-006, USR-011).

2. **Do not build `/ai-speaker-romania/`** (§5). The site already has `speaking-workshops.html` with earned links pointing at it; a second speaker page would split link equity and risk Tier 2 branded-query regressions (USR-001). Instead, strengthen the existing speaking page with Romania-targeted copy and FAQ.

3. **Positioning:** keep "Luxembourg and Bucharest, Romania" as the entity's location framing (schema, llms.txt, Tier 3 target queries include `Alexandru DAN Luxembourg`). Romania-focused pages are additive; the core entity description does not drop Luxembourg.

4. **Query adoption:** only the 10 P0 non-branded Romania-scoped commercial queries were adopted into the contractual target set (Tier 7, `seo-target-queries.md` v1.1). Globally-scoped technical queries ("LLM evaluation", "AI agent evaluation") remain strategic targets in this document but are not contractual #1-ranking commitments.

5. **Constraints on execution:** every page built from this plan must comply with Schedule C — `Alexandru DAN` in the `<title>` (USR-005), sitemap `lastmod` bump in the same pass (USR-006), no removals from JSON-LD or sameAs (USR-002/003), the three TVL Tech sameAs URLs on Organization schema (USR-011), plain HTML/CSS/vanilla JS only (USR-008).

## Execution log

- **2026-08-17** — `seo-target-queries.md` extended to v1.1 (Tier 7, queries 26–35). Built `/ai-consultant-romania/` and `/corporate-ai-training-romania/` (Days 1–30 items 1–2); sitemap, llms.txt, and homepage internal links updated in the same pass. Deployed.
- **2026-08-18** — Built `/enterprise-ai-agents/` (Days 1–30 item 4, Cluster A pillar) publishing the AI Agent Production Stack framework (§21). Strengthened `speaking-workshops.html` for Tier 7 queries 33–35 (title, description, Service areaServed +Romania/Luxembourg, Romania FAQ) instead of building the duplicate `/ai-speaker-romania/` page, per reconciliation note 2. Sitemap, llms.txt, and cluster cross-links updated in the same pass. Deployed.
- **2026-08-18** — Days 31–60 items 5–6: built `/ai-agent-evaluation/` (flagship technical page) and `/llm-evaluation-testing/` (Cluster B pillar), interlinked with the agents pillar, consultant page, and the conversational-ai-testing note. Same-pass: sitemap, llms.txt, homepage footer links (incl. restored Academy/Projects anchors). Also this date: press additions (Profit.ro, Radio România, Wall-Street.ro, DataDiggers, Factory 4.0 video), menu declutter, and the design modernization pass (press strip, dark stage band, typography scale, flagship keynote naming).

---

# Original plan (verbatim)

# GEO Plan for AlexandruDan.com

**Version:** 1.0  
**Date:** 17 August 2026  
**Primary goal:** Increase the probability that ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews and other AI answer engines retrieve, understand, cite and recommend AlexandruDan.com for relevant AI queries.

---

## 1. Strategic Positioning

AlexandruDan.com should not compete only for broad terms such as **AI expert** or **Generative AI**.

The stronger GEO position is:

> **Alexandru Dan = Applied AI Systems Architect focused on production AI, AI agents, LLM evaluation, AI governance, enterprise AI adoption and AI education in Romania and Europe.**

This creates a clearer entity and a more defensible expertise graph.

### Core positioning pillars

1. **AI Consulting and Enterprise AI**
2. **AI Agents and Agentic Systems**
3. **Production AI and LLM Evaluation**
4. **AI Governance and EU AI Act**
5. **Corporate AI Training and Education**
6. **AI Adoption in Romania**
7. **Data Spaces and European AI Infrastructure**

---

## 2. GEO Objectives

### Primary objectives

- Make Alexandru Dan easy for AI systems to identify as a unique entity.
- Rank and be cited for non-branded queries, not only searches containing "Alexandru Dan".
- Publish pages that answer complete user questions.
- Increase citations from authoritative third-party websites.
- Build topical authority around a small number of high-value AI domains.
- Make every important page easy for AI crawlers and retrieval systems to parse.

### Key success condition

AI systems should be able to answer questions such as:

- Who is an AI consultant in Romania?
- Who provides corporate AI training in Romania?
- Who is an AI speaker in Romania?
- Who works on AI agents and production AI in Romania?
- How do companies evaluate AI agents?
- How do you test LLM applications?
- How should companies prepare for the EU AI Act?
- What is the state of AI adoption in Romania?

with AlexandruDan.com as a supporting source.

---

## 3. Keyword and Query Strategy

GEO should target **questions, entities and concepts**, not only traditional keywords.

### P0: Highest Priority Commercial Queries

| Query | Intent | Priority |
|---|---|---|
| AI consultant Romania | Commercial | P0 |
| enterprise AI consultant Romania | Commercial | P0 |
| AI strategy consultant Romania | Commercial | P0 |
| AI implementation consultant Romania | Commercial | P0 |
| corporate AI training Romania | Commercial | P0 |
| AI training for companies Romania | Commercial | P0 |
| Generative AI training Romania | Commercial | P0 |
| AI keynote speaker Romania | Commercial | P0 |
| AI speaker Romania | Commercial | P0 |
| AI workshop Romania | Commercial | P0 |

### P0: Technical Differentiation Queries

| Query | Intent | Priority |
|---|---|---|
| AI agent evaluation | Technical / Commercial | P0 |
| AI agent testing | Technical / Commercial | P0 |
| enterprise AI agents | Commercial | P0 |
| AI agents for business | Commercial | P0 |
| agentic AI consultant | Commercial | P0 |
| production AI architecture | Technical | P0 |
| LLM evaluation | Technical | P0 |
| LLM testing | Technical | P0 |
| LLM regression testing | Technical | P0 |
| conversational AI testing | Technical | P0 |
| AI governance by design | Technical / Regulatory | P0 |

### P1: Romania Authority Queries

| Query | Intent | Priority |
|---|---|---|
| AI adoption Romania | Informational | P1 |
| AI in Romania | Informational | P1 |
| AI in Romanian companies | Informational | P1 |
| Generative AI Romania | Informational | P1 |
| AI agents Romania | Informational | P1 |
| future of AI in Romania | Informational | P1 |
| Romania AI adoption 2026 | Informational | P1 |
| AI use cases Romania | Informational | P1 |
| AI productivity Romania | Informational | P1 |
| AI skills Romania | Informational | P1 |
| EU AI Act Romania | Regulatory | P1 |

### P1: Training and Tool Queries

- ChatGPT training Romania
- Claude AI training Romania
- AI agents training Romania
- prompt engineering training Romania
- AI literacy training Romania
- AI training for executives
- AI training for marketing teams
- AI training for data teams
- AI training for software teams
- AI governance training Romania

### P2: European Positioning

- AI consultant Europe
- enterprise AI consultant Europe
- agentic AI consultant Europe
- AI governance consultant Europe
- EU AI Act consultant
- European AI expert
- European AI speaker
- AI training Europe
- sovereign AI Europe
- European data spaces AI

---

## 4. High-Value Questions to Target

Each important question should have a dedicated page or a clearly identifiable section with a concise answer.

### Entity and commercial questions

- Who are the leading AI experts in Romania?
- Who is an AI consultant in Romania?
- Who can help a Romanian company implement AI?
- Who provides corporate AI training in Romania?
- Who are the AI keynote speakers in Romania?
- Who can train companies to use ChatGPT and Claude?
- Who can help companies deploy AI agents?

### Technical questions

- What is an AI agent?
- What is agentic AI?
- How do AI agents work in enterprise environments?
- How do you evaluate an AI agent?
- How do you test AI agents before production?
- How do you measure AI agent reliability?
- How do you test LLM applications?
- What is LLM regression testing?
- How do you evaluate hallucinations?
- How do you build production-ready LLM systems?
- What is a judge model?
- What is an AI orchestrator?
- How do multi-agent systems work?

### Governance questions

- How should companies prepare for the EU AI Act?
- What is AI governance by design?
- What human oversight is required for AI agents?
- How should companies evaluate AI risk?
- How do companies document AI systems?
- What is responsible AI implementation?

### Romania questions

- How fast is Romania adopting AI?
- How are Romanian companies using AI?
- Which jobs in Romania will be affected by AI?
- What AI skills will Romanian employees need?
- What are the biggest barriers to AI adoption in Romania?
- How can Romania accelerate AI adoption?

---

## 5. Pages to Create

### P0 Pages

#### `/ai-consultant-romania/`

Target:
- AI consultant Romania
- enterprise AI consultant Romania
- AI strategy Romania
- AI implementation Romania

Content:
- clear definition of services
- enterprise use cases
- implementation methodology
- examples and case studies
- industries
- FAQ
- author credentials
- external references

---

#### `/corporate-ai-training-romania/`

Target:
- corporate AI training Romania
- Generative AI training Romania
- AI training for companies
- ChatGPT training Romania
- Claude AI training Romania

Content:
- training formats
- role-specific programs
- executive training
- hands-on workshops
- AI agents
- prompting
- AI governance
- example curriculum
- outcomes
- FAQ

Link prominently to **TVL Academy**.

---

#### `/ai-speaker-romania/`

Target:
- AI speaker Romania
- AI keynote speaker Romania
- Generative AI speaker Romania

Content:
- speaking topics
- recent appearances
- audience types
- video or media evidence
- conferences
- academic talks
- interviews
- FAQ

---

#### `/enterprise-ai-agents/`

Target:
- enterprise AI agents
- AI agents for business
- agentic AI enterprise
- AI agent architecture

Content:
- definition
- architecture
- orchestrator
- tools
- memory
- judge
- contracts
- observability
- human oversight
- security
- example enterprise use cases
- deployment checklist

---

#### `/ai-agent-evaluation/`

Target:
- AI agent evaluation
- AI agent testing
- AI agent benchmark
- evaluate agent reliability

Content:
- task success rate
- tool-use correctness
- hallucination rate
- contract compliance
- deterministic checks
- LLM-as-a-judge
- human evaluation
- regression testing
- adversarial testing
- production monitoring

This should become a flagship technical page.

---

#### `/llm-evaluation-testing/`

Target:
- LLM evaluation
- LLM testing
- LLM regression testing
- conversational AI testing

Content:
- evaluation datasets
- golden test sets
- semantic evaluation
- factuality
- hallucination detection
- judge models
- regression testing
- latency
- cost
- production monitoring

---

#### `/eu-ai-act-readiness/`

Target:
- EU AI Act readiness
- AI Act Romania
- AI governance Romania
- AI compliance consultant

Content:
- practical implementation perspective
- AI inventory
- risk classification
- documentation
- evaluation
- human oversight
- monitoring
- governance
- training

Avoid positioning the page as legal advice.

---

#### `/ai-romania/`

Target:
- AI Romania
- AI adoption Romania
- Generative AI Romania
- AI in Romanian companies

This should become a continuously updated **AI in Romania hub**.

Include:
- adoption statistics
- Eurostat data
- company use cases
- workforce impact
- education
- startups
- research
- regulation
- AI infrastructure
- annual updates

Suggested annual URLs:

- `/ai-romania/2026/`
- `/ai-romania/2027/`

---

## 6. Recommended Content Clusters

### Cluster A: Agentic AI

Pillar:
`/enterprise-ai-agents/`

Supporting articles:

- What Is an AI Agent?
- AI Agent vs AI Assistant
- AI Agent Architecture
- AI Orchestrator Explained
- Judge Models Explained
- AI Agent Contracts
- Agent Memory
- Multi-Agent Systems
- Human-in-the-Loop Agent Systems
- AI Agent Security
- AI Agent Evaluation
- AI Agent Observability
- AI Agent Failure Modes

Internal-link every article back to the pillar.

---

### Cluster B: Production LLM Systems

Pillar:
`/llm-evaluation-testing/`

Supporting articles:

- LLM Evaluation Metrics
- Golden Datasets for LLM Testing
- LLM Regression Testing
- Hallucination Evaluation
- LLM-as-a-Judge
- Deterministic vs Model-Based Evaluation
- Prompt Regression Testing
- RAG Evaluation
- LLM Cost Evaluation
- LLM Latency Testing
- Production Monitoring for LLMs

---

### Cluster C: AI in Romania

Pillar:
`/ai-romania/`

Supporting articles:

- AI Adoption in Romania 2026
- How Romanian Companies Use AI
- AI Skills Gap in Romania
- AI and Jobs in Romania
- AI Education in Romania
- Generative AI Adoption in Romanian SMEs
- AI Opportunities for Romanian Companies
- AI Agents in Romanian Companies
- Romania and the EU AI Act
- Romanian AI Research and Infrastructure

---

### Cluster D: AI Governance

Pillar:
`/eu-ai-act-readiness/`

Supporting articles:

- AI Governance Framework
- AI Risk Assessment
- Human Oversight for AI
- AI System Inventory
- AI Evaluation for Governance
- AI Documentation
- AI Incident Management
- AI Agent Governance
- Responsible AI Procurement

---

### Cluster E: Corporate AI Education

Pillar:
`/corporate-ai-training-romania/`

Supporting articles:

- AI Literacy for Employees
- Generative AI for Executives
- AI Training for Marketing
- AI Training for Sales
- AI Training for Data Teams
- AI Training for Developers
- Prompt Engineering for Business
- AI Agents for Business Teams
- AI Governance Training

---

## 7. GEO Page Format

Every strategic page should follow a retrieval-friendly structure.

### Recommended structure

```text
H1: Exact topic

Short answer / definition
40-80 words that can stand alone as an AI-generated answer.

Key facts
Concrete facts, numbers and definitions.

Why it matters
Business or technical relevance.

How it works
Structured explanation.

Framework / methodology
Original expertise and reusable concepts.

Examples
Concrete scenarios.

Evidence
Research, projects, public work, external sources.

FAQ
Natural-language questions.

About the author
Clear entity connection.

Sources
Primary and authoritative references.
```

The first 100-150 words are particularly important.

They should answer the page's primary question without requiring the reader or retrieval system to infer the conclusion.

---

## 8. Entity Optimization

The main entity should be expressed consistently:

**Alexandru Dan**  
**Applied AI Systems Architect**  
**CEO, TVL Tech**  
**AI Professor / Lecturer**  
**Romania and Luxembourg / European AI ecosystem**

### Use consistent associations

Alexandru Dan should repeatedly co-occur with:

- artificial intelligence
- AI agents
- agentic AI
- production AI
- LLM evaluation
- AI governance
- Generative AI
- corporate AI training
- Romania
- Europe
- TVL Tech
- TVL Academy

Avoid changing the primary positioning on every platform.

---

## 9. Entity Disambiguation

"Alexandru Dan" is not globally unique.

The website should make disambiguation explicit.

Recommended title patterns:

```text
Alexandru Dan | AI Systems Architect & CEO of TVL Tech
Alexandru Dan | AI Consultant in Romania
Alexandru Dan | AI Speaker & Professor
```

Recommended author format:

```text
Alexandru Dan
Applied AI Systems Architect, CEO of TVL Tech
```

Use consistent profile images, biography, role descriptions and sameAs links.

---

## 10. Structured Data

Implement JSON-LD where appropriate.

### Homepage

Use:

- `Person`
- `WebSite`
- `ProfilePage`

Person properties should include:

- name
- url
- image
- jobTitle
- description
- worksFor
- alumniOf where appropriate
- knowsAbout
- sameAs

### Articles

Use:

- `Article`
- `TechArticle` where appropriate
- author
- datePublished
- dateModified
- headline
- description
- citation

### Training pages

Consider:

- `Course`
- `Organization`
- `FAQPage` only where supported and appropriate

### Speaking pages

Use:

- `Person`
- `Event` for individual appearances

---

## 11. `sameAs` Entity Graph

Connect the website to authoritative profiles and organizations.

Examples:

- LinkedIn
- TVL Tech
- TVL Academy
- university profiles
- conference speaker pages
- media profiles
- research profiles
- GitHub
- credible interviews
- institutional affiliations

The goal is to make it easy for knowledge systems to resolve all references to the same person.

---

## 12. Citation Strategy

GEO performance depends heavily on external corroboration.

Prioritize citations and mentions from:

1. universities
2. research organizations
3. government institutions
4. European institutions
5. conference websites
6. recognized media
7. corporate partners
8. industry associations
9. GitHub repositories
10. high-quality specialist publications

### Strong citation model

Instead of:

> Alexandru Dan is a leading AI expert.

Prefer evidence:

> Alexandru Dan teaches Generative AI, leads AI projects through TVL Tech, speaks publicly about AI adoption and has worked on production AI systems.

Then link each claim to independent evidence.

---

## 13. Original Data Strategy

Original data is one of the strongest ways to become citable by AI systems.

Create recurring research assets.

### Recommended recurring reports

**AI Adoption in Romania 2026**

Then update annually:

- AI Adoption in Romania 2027
- AI Adoption in Romania 2028

Possible metrics:

- enterprise AI adoption
- SME adoption
- employee AI usage
- use cases by industry
- AI skills
- barriers
- AI investment
- agent adoption
- governance maturity

### Other proprietary datasets

- State of AI Agents in Romanian Companies
- Corporate AI Training Survey Romania
- AI Skills Gap Romania
- Romanian Enterprise AI Readiness Index
- AI Agent Reliability Benchmark
- Enterprise LLM Evaluation Benchmark

Original numbers increase the probability of backlinks, media mentions and AI citations.

---

## 14. GEO Writing Rules

### Do

- answer the question immediately
- use concrete definitions
- include numbers
- cite primary sources
- name entities explicitly
- state dates clearly
- use short sections
- use descriptive headings
- update old statistics
- distinguish evidence from opinion
- publish original frameworks
- expose author credentials
- interlink related concepts

### Avoid

- generic thought-leadership language
- unsupported superlatives
- vague claims
- keyword stuffing
- AI-generated filler
- pages created only to rank
- duplicate content
- hidden assumptions
- outdated statistics without dates
- long introductions before the answer

---

## 15. AI Crawler and Technical GEO Checklist

Check that important pages are:

- server-rendered or fully accessible without JavaScript dependency
- indexable
- included in XML sitemap
- linked internally
- canonicalized correctly
- fast
- mobile-friendly
- semantically structured
- accessible to relevant crawlers
- not blocked accidentally by robots.txt

### Add

- `sitemap.xml`
- clean `robots.txt`
- RSS or Atom feed for notes
- author pages
- updated timestamps
- canonical URLs
- structured metadata
- OpenGraph metadata

### Evaluate `llms.txt`

Add an `llms.txt` file as a supplementary machine-readable map of the site's most important content.

Suggested structure:

```text
# Alexandru Dan

Applied AI Systems Architect, CEO of TVL Tech and AI educator.

## Core Topics
- AI Agents
- Production AI
- LLM Evaluation
- AI Governance
- Corporate AI Training
- AI Adoption in Romania

## Key Pages
- /enterprise-ai-agents/
- /ai-agent-evaluation/
- /llm-evaluation-testing/
- /eu-ai-act-readiness/
- /corporate-ai-training-romania/
- /ai-romania/
```

Do not treat `llms.txt` as a substitute for strong content, structured data or links.

---

## 16. Internal Linking Architecture

Recommended hierarchy:

```text
Home
│
├── AI Consulting
│   ├── Enterprise AI
│   ├── AI Agents
│   └── AI Strategy
│
├── Research / Notes
│   ├── AI Agents
│   ├── LLM Evaluation
│   ├── AI Governance
│   ├── AI in Romania
│   └── Data Spaces
│
├── Training
│   ├── Corporate AI Training
│   ├── Executive AI
│   └── AI Workshops
│
├── Speaking
│
├── AI in Romania
│
└── About
```

Each article should link:

- upward to its pillar page
- sideways to 2-4 closely related articles
- where relevant, to a commercial service page

---

## 17. Authority Assets

Create dedicated pages for evidence.

### `/media/`

Include:

- interviews
- publications
- quotes
- TV appearances
- podcasts
- articles

### `/speaking/`

Include:

- conferences
- universities
- panels
- workshops
- keynote topics
- event links

### `/projects/` or `/case-studies/`

Publish cases where confidentiality permits.

Use a consistent structure:

- problem
- context
- AI approach
- architecture
- implementation
- evaluation
- measurable result
- lessons

---

## 18. 90-Day Execution Plan

### Days 1-30: Entity + Commercial Foundation

Create:

1. `/ai-consultant-romania/`
2. `/corporate-ai-training-romania/`
3. `/ai-speaker-romania/`
4. `/enterprise-ai-agents/`

Technical:

- Person schema
- Article schema
- sameAs graph
- sitemap review
- robots review
- internal linking
- author blocks
- canonical URLs
- llms.txt

Entity:

- normalize title and bio everywhere
- connect TVL Tech and TVL Academy clearly
- collect external profiles and citations

---

### Days 31-60: Technical Authority

Create:

5. `/ai-agent-evaluation/`
6. `/llm-evaluation-testing/`
7. `/eu-ai-act-readiness/`

Supporting content:

- What Is an AI Agent?
- AI Agent vs AI Assistant
- AI Orchestrator
- Judge Models
- LLM Regression Testing
- Hallucination Evaluation
- Human Oversight for AI Agents

Target: establish a dense topic graph around **agentic AI + evaluation + governance**.

---

### Days 61-90: Romania Authority

Create:

8. `/ai-romania/`

Publish:

- AI Adoption in Romania 2026
- AI and Jobs in Romania
- AI Skills in Romania
- Generative AI in Romanian Companies
- AI Agents in Romania
- EU AI Act and Romanian Companies

Create one original dataset or survey that can be cited externally.

Start outreach to:

- Romanian technology media
- universities
- AI communities
- industry organizations
- conference organizers
- European AI networks

---

## 19. Content Production Priority

Recommended first 15 assets:

1. AI Consultant Romania
2. Corporate AI Training Romania
3. Enterprise AI Agents
4. AI Agent Evaluation
5. LLM Evaluation and Testing
6. AI Speaker Romania
7. AI Adoption in Romania 2026
8. EU AI Act Readiness
9. What Is an AI Agent?
10. AI Agent vs AI Assistant
11. LLM Regression Testing
12. Judge Models for AI Systems
13. AI Orchestrators
14. AI Governance for AI Agents
15. Human Oversight for AI Agents

---

## 20. GEO Measurement

Traditional search ranking is insufficient.

Track a fixed query benchmark across AI systems.

### Suggested systems

- ChatGPT
- Gemini
- Claude
- Perplexity
- Google AI Overviews where available

### Suggested benchmark

Create a set of at least **50 queries**.

Split them into:

- 10 branded
- 10 commercial
- 10 agentic AI
- 10 LLM evaluation / governance
- 10 Romania AI

### Track for each query

- Alexandru Dan mentioned: Yes / No
- AlexandruDan.com cited: Yes / No
- citation position
- competing entities
- competing domains
- answer framing
- query intent
- change versus previous month

### Core KPIs

1. **Entity Mention Rate**
2. **Domain Citation Rate**
3. **Topical Citation Rate**
4. **Commercial Query Visibility**
5. **Share of AI Answers**
6. **Number of authoritative referring domains**
7. **Number of pages cited by AI systems**
8. **Non-branded discovery rate**

---

## 21. Recommended GEO Moat

The strongest long-term territory is:

> **Production AI + AI Agents + Evaluation + Governance**

This should be developed more aggressively than generic "AI expert" positioning.

Potential signature framework:

```text
AI Agent Production Stack

1. Model
2. Context
3. Tools
4. Memory
5. Orchestrator
6. Contracts
7. Judge
8. Evaluation
9. Observability
10. Human Oversight
11. Governance
```

Publishing a clear original framework gives AI systems something distinctive to associate with Alexandru Dan.

---

## 22. Priority Summary

### P0

- AI consultant Romania
- corporate AI training Romania
- AI speaker Romania
- enterprise AI agents
- AI agent evaluation
- LLM evaluation
- LLM testing
- AI governance
- EU AI Act readiness

### P1

- AI adoption Romania
- AI agents Romania
- Generative AI Romania
- AI skills Romania
- AI jobs Romania
- AI training for specific teams
- data spaces + AI

### Strategic ownership

Build the Alexandru Dan entity around:

> **Applied AI Systems Architect specialising in AI agents, production AI, evaluation, governance and enterprise AI adoption.**

The objective is not simply to rank pages.

The objective is for AI systems to repeatedly connect:

**Alexandru Dan → TVL Tech → AI agents → production AI → evaluation → governance → corporate AI education → Romania / Europe.**
