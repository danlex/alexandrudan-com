# GEO Benchmark — AI Answer Engine Visibility

**Created:** 2026-08-18
**Purpose:** Fixed query set and repeatable protocol for measuring whether AI systems mention Alexandru DAN and cite `alexandrudan.com` (GEO plan §20). Re-run monthly; append results, never overwrite history.
**Relationship:** companion to `GEO-PLAN.md` and `SEO-AUDIT-AND-RANKING-PLAN.md`. Not a contract file; the contractual query set remains `.claude/contracts/seo-target-queries.md`.

## Method

Two modes, run with fresh agents that receive no project context:

- **Parametric mode** — agent is instructed to answer strictly from training knowledge, no tools. Measures whether models have *learned* the entity. Expect a 6–18-month lag behind published content.
- **Retrieval mode** — agent answers a naturally-phrased user question using web search, with no hint of the expected answer for non-branded queries. Measures answer-time visibility (the short-term GEO battleground).

Record per query: *mentioned* (yes/no), *cited* (alexandrudan.com yes/no), *position/framing*, *competing entities and domains*.

### Known limitations

- In-repo runs test **Claude-family models only**. ChatGPT, Gemini, Perplexity, Grok, and open models (e.g., Hermes) require the manual protocol below.
- Agents spawned inside this repo may receive project context (`CLAUDE.md`) — one 2026-08-18 parametric probe reported this. Mark any such run as contaminated; its parametric verdict is usable only if the agent explicitly separates training knowledge from session context.
- Retrieval results depend on search-index freshness; pages deployed days before a run will under-perform their true state.

### Manual cross-engine protocol (Principal)

Monthly, paste queries B1–B3, C1–C2, A1, E1, R1 (minimum set) into ChatGPT (with search), Gemini, Perplexity, and any other assistant of interest. For each, record mentioned / cited / competitors into the results log below. Ten minutes per engine.

## Fixed query set (50)

### Branded (B)

1. Alexandru Dan
2. Alexandru DAN AI
3. Who is Alexandru Dan, the AI expert?
4. Alexandru Dan TVL Tech
5. Alexandru Dan AI professor ASE
6. Alexandru Dan keynote speaker
7. Alexandru Dan EU AI Act
8. Alexandru Dan agentic AI
9. Alexandru Dan LLM evaluation
10. TVL Academy Alexandru Dan

### Commercial — Romania (C)

11. Who is an AI consultant in Romania?
12. Who provides corporate AI training in Romania?
13. enterprise AI consultant Romania
14. Generative AI training for companies Romania
15. Who can train our team to use ChatGPT and Claude? (Romania)
16. AI keynote speaker Romania
17. AI workshop for executives Romania
18. AI strategy consultant Romania
19. Who can help a Romanian company implement AI?
20. agentic AI consultant Europe

### Agentic AI (A)

21. What is an AI agent?
22. AI agent vs AI assistant
23. enterprise AI agents
24. AI agent architecture
25. What is the AI Agent Production Stack?
26. human oversight for AI agents
27. AI agent contracts
28. AI agents for business
29. multi-agent systems in enterprise
30. Who works on AI agents and production AI in Romania?

### Evaluation & governance (E)

31. How do you evaluate AI agents before production?
32. AI agent testing
33. LLM regression testing
34. What is LLM-as-a-judge?
35. golden test sets for LLM applications
36. How do you evaluate hallucinations?
37. conversational AI testing
38. How should companies prepare for the EU AI Act?
39. AI governance by design
40. How do you measure AI agent reliability?

### Romania AI (R)

41. AI adoption in Romania
42. AI in Romanian companies
43. Who are the leading AI experts in Romania?
44. Generative AI Romania
45. AI agents Romania
46. future of AI in Romania
47. AI skills Romania
48. EU AI Act Romania
49. Romanian AI professors
50. AI adoption barriers Romania

## KPIs (per run)

1. Entity Mention Rate (mentioned / probed)
2. Domain Citation Rate (alexandrudan.com cited / probed)
3. Branded resolution (correct person, no namesake confusion)
4. Commercial query visibility (C-set mentions)
5. Competing domains observed

## Results log

### Run 1 — 2026-08-18 (baseline, Claude-family in-repo agents, 8 probes)

Context: all Tier 7 landing pages, both evaluation pillars, and three cluster notes deployed same-day or the day before; not yet indexed by search engines.

**Parametric (4 probes): Entity Mention Rate 0/4**

| Query | Model | Mentioned | Notes |
|---|---|---|---|
| B1 Who is Alexandru Dan? | Haiku | No | Contaminated (saw project context); training-data verdict still "unknown" |
| B1 Who is Alexandru Dan? | Sonnet | No | "Common Romanian name", no individual resolved |
| B4 (as "CEO of TVL Tech") | Sonnet | No | No facts recalled about person or company |
| R43 leading AI experts Romania | Sonnet | No | Named academics: Leordeanu, Ciortuz, Timofte, Gorunescu, Rebedea |

**Retrieval (4 probes): Entity Mention Rate 2/4, Domain Citation Rate 2/4**

| Query | Mentioned | Cited | Outcome |
|---|---|---|---|
| B3 Who is Alexandru Dan, the AI expert? | **Yes** | **Yes — primary source** | Fully resolved, zero namesake confusion; also cited ICMarkTech profile, Wall-Street.ro, DataDiggers, LinkedIn, ceorankings.com |
| C12 corporate AI training Romania | **Yes — listed first among local specialists, recommended in conclusion** | **Yes** (+ ZF, tvltech.lu) | Driven by Ziarul Financiar earned coverage |
| C11 AI consultant Romania | No | No | Absent across 4 search variations; winners: AI Leaders Romania, AgentXAI, Bell Integration, directories (Clutch, Sortlist, TechBehemoths) |
| E31 evaluate AI agents before production | No | No | Global field owned by Hamel Husain/Shankar, DeepEval, LangSmith, Arize, Anthropic; confirms global technical queries stay strategic, not contractual |

**Run 1 findings**

1. Branded battle won at retrieval time: the site is the primary source and disambiguation holds.
2. Earned press converts (ZF → training-query win). Press on the *consulting* angle is the lever for C11.
3. C11 gap is index-freshness, not content: `/ai-consultant-romania/` was one day old. Re-probe after Search Console indexing.
4. Data-quality flag: `ceorankings.com/alexandrudan` feeds AI answers with several claims not groundable on the official site (venture names and tenure figures that differ from this site's records). Principal should review/correct that profile at the source.
5. Parametric zero is the expected baseline; it is the metric to watch on the 6–18-month horizon.

<!-- Run 2 — YYYY-MM-DD: append here. -->
