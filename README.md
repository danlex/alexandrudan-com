# Free Website Starter

Build a free website with Codex and GitHub Pages.

- Use This Template: [github.com/danlex/free-website/generate](https://github.com/danlex/free-website/generate)
- Live preview: [free-website.tvl.tech](https://free-website.tvl.tech/)
- Visual guide: [QUICKSTART.md](QUICKSTART.md)

The default template content is now a full worked example for `alexandrudan.com`.
In your own copy, replace name, domain, email, and offer details before publishing.

## One clear path

1. Use This Template on GitHub
2. Clone your new repo
3. Edit with Codex
4. Preview locally
5. Push changes
6. Enable GitHub Pages
7. Add your domain
8. Verify HTTPS

If template mode is not enabled on GitHub, fork as fallback.

## Why this route vs builders

As of April 11, 2026 (official docs/pricing pages):

- Carrd: custom domain publishing requires Pro Standard or higher
- Framer: free plan exists, but custom domain starts on paid site plans
- Webflow: Starter publishes on `webflow.io`; custom domain requires paid Site plan
- GitHub Pages: supports branch publishing, custom domains, and HTTPS

This starter is for people who want full source control, no framework lock-in, and a free hosting path with GitHub Pages.

## Worked example cycle

This repository now includes a completed template-mode pass for `alexandrudan.com`:

1. Replace placeholder sections with real audience and offer
2. Align metadata, branding assets, and contact paths
3. Run `sh scripts/prepublish-check.sh --strict`
4. Push and configure Pages with a custom domain

Treat it as a reference implementation, then adapt it for your own domain.

## Clone the right thing

Do not clone `https://free-website.tvl.tech/`.
That is the live preview URL, not a Git repository.

Clone your own GitHub repo created from the template:

```bash
git clone https://github.com/your-username/free-website.git
cd free-website
```

If you renamed the repository, replace `free-website` with your repo name.

## Edit with Codex

Main files:

- `index.html`
- `styles.css`
- `script.js`

Prompt recipes:

- [prompts/landing-page.md](prompts/landing-page.md)
- [prompts/personal-website.md](prompts/personal-website.md)
- [prompts/portfolio.md](prompts/portfolio.md)
- [prompts/alexandrudan.md](prompts/alexandrudan.md)

Start with `landing-page.md` for the lowest-friction rewrite.
Codex can also generate images for hero and section visuals.

## Preview locally

```bash
sh scripts/preview.sh
```

Open [http://localhost:8000](http://localhost:8000).

## Pre-publish checklist (2 minutes)

Before you push, confirm:

1. `index.html` title and meta description match your real website
2. `og:image`, `twitter:image`, and favicon files reflect your brand
3. Demo domain references are replaced (metadata and `CNAME`)
4. Primary CTA and contact links point to real destinations
5. Mobile view is readable (headline, buttons, nav, spacing)

Then run:

```bash
sh scripts/prepublish-check.sh --strict
```

If warnings are shown, fix them first.

## Publish on GitHub Pages

1. Commit and push your changes
2. In GitHub: `Settings` > `Pages`
3. Select `Deploy from a branch`
4. Select `main` and `/ (root)`
5. Verify your domain in GitHub
6. Update or remove `CNAME` if it still says `free-website.tvl.tech`
7. Add your custom domain
8. Wait for HTTPS to be enabled

GitHub Pages hosting can stay free.
Your domain is usually a separate purchase.
GitHub recommends verifying the custom domain before adding it:
[Verifying your custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

Reference links used in this repo:

- [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Carrd custom domain docs](https://carrd.co/docs/sites/using-a-custom-domain)
- [Framer pricing](https://www.framer.com/pricing)
- [Webflow pricing](https://webflow.com/pricing)

## Important CNAME note

This template includes a real `CNAME` so the public demo stays live.

In your copy:

- replace `CNAME` with your domain
- or delete `CNAME` until domain setup is ready

If you keep the demo value, your Pages setup will point to the wrong domain.

## What is included

- Static root starter (HTML/CSS/JS only)
- One-command local preview script
- One-command pre-publish validation script
- `.nojekyll` for branch-based Pages serving
- 3 copy-ready Codex prompts
- Screenshot-driven quickstart
- `CNAME.example` reference file
- Repo guidance in [`AGENTS.md`](AGENTS.md) and [`.agents/skills`](.agents/skills)
