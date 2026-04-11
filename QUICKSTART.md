# Quickstart

This is the visual path from template to live website.
Target outcome: your own content, on your own GitHub repo, on your own domain.

The screenshots are guided mockups, so your exact UI can look slightly different.
The template-mode content in this repo is a worked example for `alexandrudan.com`.

- Repo: [github.com/danlex/free-website](https://github.com/danlex/free-website)
- Use This Template: [github.com/danlex/free-website/generate](https://github.com/danlex/free-website/generate)
- Live site: [free-website.tvl.tech](https://free-website.tvl.tech/)

## 1. Use This Template on GitHub

Open the repo and click `Use this template`.
If template mode is not enabled, fork the repo instead.

![Screenshot 1](assets/screenshots/01-use-this-template.svg)

## 2. Clone the repository

Do not clone `https://free-website.tvl.tech/`.
Clone your own GitHub repo created from the template.

If you keep the same repo name, the command usually looks like:

```bash
git clone https://github.com/your-username/free-website.git
cd free-website
```

If you renamed the repo, replace `free-website` with your repo name.

![Screenshot 2](assets/screenshots/02-clone-repository.svg)

## 3. Open Codex in the repo

Open the cloned repository in Codex.
The main files you will edit are:

- `index.html`
- `styles.css`
- `script.js`

If you cloned this starter, replace the default `alexandrudan.com` values with your own.

![Screenshot 3](assets/screenshots/03-open-codex.svg)

## 4. Paste one of the prompt recipes

Recommended first prompt:

- [landing-page.md](prompts/landing-page.md)

Alternative prompts:

- [portfolio.md](prompts/portfolio.md)
- [personal-website.md](prompts/personal-website.md)
- [alexandrudan.md](prompts/alexandrudan.md)

Codex can also generate images directly if you need a hero image or supporting visuals.

Before moving on, ask Codex to also update:

- `<title>` and `meta description`
- `og:image` / `twitter:image`
- favicon assets and references
- any remaining demo domain references

![Screenshot 4](assets/screenshots/04-paste-prompt.svg)

## 5. Run local preview

```bash
sh scripts/preview.sh
```

Open [http://localhost:8000](http://localhost:8000) and review the page before you publish.

![Screenshot 5](assets/screenshots/05-run-preview.svg)

## 6. Commit and push changes

```bash
git add .
git commit -m "Customize website"
git push
```

Optional quick check before commit:

```bash
sh scripts/prepublish-check.sh --strict
git status
```

![Screenshot 6](assets/screenshots/06-push-changes.svg)

## 7. Enable GitHub Pages

In GitHub:

1. Open `Settings`
2. Open `Pages`
3. Choose `Deploy from a branch`
4. Select `main` and `/ (root)`

![Screenshot 7](assets/screenshots/07-enable-pages.svg)

## 8. Add a custom domain

1. Verify the domain in GitHub first if you own it
2. Open the repo root and check `CNAME`
3. If it still says `free-website.tvl.tech`, replace it with your own domain or delete it for now
4. In GitHub, open `Settings` > `Pages` and enter your custom domain
5. Update your DNS records

![Screenshot 8](assets/screenshots/08-add-custom-domain.svg)

## 9. Verify HTTPS is active

Wait for GitHub Pages to show HTTPS as enabled for the custom domain.

GitHub recommends verifying the domain before adding it to the repository:
[Verifying your custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

![Screenshot 9](assets/screenshots/09-verify-https.svg)

GitHub Pages hosting can stay free. The custom domain itself is usually a separate purchase from your domain provider.
