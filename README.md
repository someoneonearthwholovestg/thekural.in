# TheKural

A thoughtful space for ideas, stories, and perspectives.
Built with Jekyll, hosted on GitHub Pages.

---

## Folder Structure

```
thekural/
│
├── _config.yml              ← Site-wide settings (fonts, colours, title)
├── _layouts/
│   ├── default.html         ← Main layout (header + footer + search)
│   ├── post.html            ← Single post layout
│   └── editor.html          ← Editor-only layout (no header/footer)
│
├── _includes/
│   ├── head-vars.html       ← <head> meta tags + CSS variables
│   ├── base-styles.html     ← All shared CSS components
│   ├── header.html          ← Site header + nav
│   ├── footer.html          ← Site footer
│   ├── search-overlay.html  ← Search UI
│   └── nazar-home.html      ← Nazar preview strip on homepage
│
├── _posts/                  ← All blog posts (YYYY-MM-DD-title.md)
│
├── assets/
│   ├── js/main.js           ← Theme toggle, search, nav, fade-in
│   └── images/              ← Static images (avatars, logo, etc.)
│
├── src/
│   ├── config/
│   │   ├── nav.yml          ← Navigation bar items
│   │   ├── authors.yml      ← Author profiles
│   │   └── nazar.yml        ← Nazar gallery images
│   │
│   ├── 1-home/
│   │   └── index.html       ← Homepage content (permalink: /)
│   │
│   ├── 2-reading-room/
│   │   ├── index.html       ← Reading Room landing (permalink: /reading-room)
│   │   ├── 1-nazar/
│   │   │   ├── default.html     ← Nazar gallery (permalink: /nazar)
│   │   │   └── editor/
│   │   │       └── index.html   ← Nazar editor (permalink: /nazar/editor)
│   │   ├── 2-book-reviews/
│   │   │   ├── default.html     ← Book Reviews (permalink: /book-reviews)
│   │   │   └── editor/
│   │   │       └── index.html   ← Editor (permalink: /book-reviews/editor)
│   │   ├── 3-keywords/
│   │   │   ├── default.html     ← Keywords (permalink: /keywords)
│   │   │   └── editor/
│   │   │       └── index.html   ← Editor (permalink: /keywords/editor)
│   │   └── 4-criticulture/
│   │       ├── default.html     ← Criticulture (permalink: /criticulture)
│   │       └── editor/
│   │           └── index.html   ← Editor (permalink: /criticulture/editor)
│   │
│   ├── 3-submission/
│   │   └── index.html       ← Submission page (permalink: /submission)
│   │
│   ├── 4-about/
│   │   └── index.html       ← About page (permalink: /about)
│   │
│   └── tool/
│       ├── post-editor-core.html  ← Full post editor (shared by all sections)
│       ├── explore.html           ← All articles / tag filter (permalink: /explore)
│       └── search.json            ← Search index (permalink: /search.json)
│
├── index.html               ← Root homepage
├── 404.html                 ← 404 page
├── Gemfile
└── robots.txt
```

---

## Navigation Logic

- Folders prefixed with a **number** (e.g. `1-home`, `2-reading-room`) are shown in the nav bar.
- The number sets the **order** but is stripped from the displayed label.
- Folders **without** a number (e.g. `tool`, `images`, `config`) are **not** shown in the nav.
- Edit `src/config/nav.yml` to change nav labels or add dropdown items.

---

## Writing a New Post

1. Create a file in `_posts/` named `YYYY-MM-DD-your-slug.md`.
2. Add front matter:

```yaml
---
layout: post
title: "Your Title"
date: 2026-05-01
author: rithu          # key from src/config/authors.yml
tags: [tag1, tag2]
excerpt: "One sentence shown on cards."
image: https://...     # optional cover image URL
---
```

3. Write content in Markdown below the `---`.

**Or** use the editor at `/editor` to write, preview, and generate the file automatically.

---

## Section Editors

Each reading-room section has its own editor that pre-fills the section tag:

| URL                      | Pre-fills tag    |
|--------------------------|------------------|
| `/editor`                | (none)           |
| `/nazar/editor`          | Nazar gallery    |
| `/book-reviews/editor`   | `book-review`    |
| `/keywords/editor`       | `keywords`       |
| `/criticulture/editor`   | `criticulture`   |

All editors require your Cloudinary API Key + Secret to upload images.

---

## Changing Fonts or Colours

Open `_config.yml` and edit the `fonts:` or `colors:` sections.
Changes apply site-wide — no CSS editing required.

---

## Adding an Author

Open `src/config/authors.yml`:

```yaml
yourkey:
  name:   "Your Name"
  bio:    "A short bio."
  avatar: "/assets/images/authors/yourphoto.jpg"
```

Use `author: yourkey` in your post's front matter.

---

## Updating the Nazar Gallery

Option A (manual): Edit `src/config/nazar.yml` directly — add image URLs and captions.

Option B (editor): Visit `/nazar/editor`, upload or paste images, drag to reorder, click **Copy YAML**, and paste into `src/config/nazar.yml`.

---

## Deployment

Push to the `main` branch on GitHub. GitHub Pages builds and deploys automatically.
Ensure your `_config.yml` has the correct `url` and `baseurl` values.
