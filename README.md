# vgnam.github.io

Personal site of **Vũ Gia Nam**: a static HTML/CSS/JS page for GitHub Pages. It has no build step and no dependencies.

## Edit content

All content (bio, stats, research, projects, skills, journey, contact) lives in **`profile.js`**. Edit it and reload the page.

## Run locally

```bash
python -m http.server 5500
```

Then open http://localhost:5500

## Deploy to GitHub Pages

1. Create a **public** repository named **`vgnam.github.io`** on GitHub (leave "Add a README" unchecked).
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Personal website"
   git branch -M main
   git remote add origin https://github.com/vgnam/vgnam.github.io.git
   git push -u origin main
   ```

3. Go to **Settings → Pages**. Under *Source* choose **Deploy from a branch**, then **main** / **(root)**, and click **Save**.
4. After 1–2 minutes the site is live at **https://vgnam.github.io**.

To update later: `git add . && git commit -m "Update" && git push`.
