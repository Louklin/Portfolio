# Felice Louise Vicencio — Portfolio

A one-page portfolio site. Plain HTML, CSS, and a small JavaScript file, so there's nothing to install or build.

Design adapted from [vinaysomawat.github.io](https://github.com/vinaysomawat/vinaysomawat.github.io) (MIT License, see `LICENSE`), simplified to a single static page.

## Files

```
index.html     all the page content (edit text here)
css/style.css  colors, fonts, layout (theme colors are at the top)
js/main.js     mobile menu, fade-in on scroll
assets/        put resume.pdf and images here
```

## Before publishing

Search `index.html` for `TODO` and fill in:

1. Your email address
2. Your LinkedIn URL
3. Project links (GitHub repos or demos), if you have them
4. The years you wrote for Data Link
5. Your CV: save it as `assets/resume.pdf`, then uncomment the Resume button in the hero

## Publish on GitHub Pages

**As your main site (`https://louklin.github.io`)**

1. Create a public repository named exactly `Louklin.github.io`.
2. From this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/Louklin/Louklin.github.io.git
   git push -u origin main
   ```

3. After a minute or two, open `https://louklin.github.io`.

**As a project site (`https://louklin.github.io/portfolio`)**

1. Create a public repository named `portfolio` and push the same way (use that repo's URL).
2. On GitHub, open **Settings → Pages**, set **Source** to "Deploy from a branch", choose `main` and `/ (root)`, then save.

## Preview locally

Double-click `index.html`, or run `python -m http.server 8000` in this folder and open `http://localhost:8000`.
