# Developer portfolio

The Next.js application is in [`portfolio/`](portfolio/README.md).

## Git and deployment

Use this repository’s existing `origin` (`https://github.com/Ralimations/portfolio_site.git`). The `portfolio/` directory is tracked as ordinary application files.

The former nested repository metadata is preserved locally in `.git-backups/portfolio-repository/` and excluded from commits. The main repository’s history and remote remain intact.

After reviewing the changes, run from this directory:

```powershell
git add .gitignore README.md portfolio
git commit -m "Fix repository structure and configure Vercel deployment"
git push origin main
```

In Vercel, select **Next.js** and set **Root Directory** to **portfolio**. Leave the output directory at the framework default. See the application README for details.
