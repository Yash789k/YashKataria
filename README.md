# YashKataria

Personal website and portfolio for Yash Kataria: <https://yashkataria.com>.

## Cloudflare Pages

Hosted on Cloudflare Pages as `yashkataria`, connected to this GitHub repository:

- Production branch: `main`
- Framework preset: `None`
- Build command: `node scripts/build-site.mjs`
- Build output directory: `dist`
- Root directory: leave blank

Pushes to `main` automatically rebuild and deploy the site. Both
`yashkataria.com` and `www.yashkataria.com` are connected through the project's
**Custom domains** settings with Cloudflare-managed DNS and HTTPS.

The build publishes only `index.html`, `404.html`, `assets/`, and the three
public downloads: `Yash_CV.pdf`, `Yash_CL.pdf`, and `Yash_Portfolio.pdf`.
Draft documents, local scripts, and repository metadata are excluded. Update
the allowlist in `scripts/build-site.mjs` when adding another public root file.

## Local preview

With Node.js 18 or newer and Python 3 installed:

```sh
node scripts/build-site.mjs
python3 -m http.server 8766 --directory dist
```

Open <http://localhost:8766>. `dist/` is generated and is not committed.
