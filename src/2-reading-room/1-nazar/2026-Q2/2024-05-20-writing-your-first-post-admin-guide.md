---
layout: post
title: "Writing Your First Post — A Guide for Admins"
date: 2024-05-20
author: rithu
tags: [guide, admin]
excerpt: "Everything you need to know to publish, customise fonts, add images, and manage your blog without touching a line of HTML."
permalink: /nazar/post/q1/:title/
---

Welcome! This guide covers everything you need to publish articles, add images, change fonts, and customise your blog — all without touching the CSS or HTML files.

## Creating a new post

1. Go to the `_posts/` folder in your repository.
2. Create a new file named: `YYYY-MM-DD-your-post-title.md`
3. Copy this template to the top of your file:

```yaml
---
layout: post
title: "Your Wonderful Title Here"
date: 2024-06-01
tags: [topic, another-topic]
image: /assets/images/cover.jpg      # optional
excerpt: "One sentence that appears on cards and search results."
---
```

Then write your content in **Markdown** below the `---` line.

## Using the editor

The easiest way to write posts is to use the built-in editor at `/editor`. It gives you:

- A live preview as you type
- Cloudinary image uploads
- Automatic front-matter generation
- A "Copy" button that gives you the complete `.md` file to save into `_posts/`

Section-specific editors (e.g. `/book-reviews/editor`) automatically pre-fill the correct tag for that section.

## Folder structure at a glance

```
thekural/
├── _posts/          ← All blog posts go here
├── src/
│   ├── config/      ← Edit nav.yml, authors.yml, nazar.yml
│   ├── 1-home/      ← Homepage
│   ├── 2-reading-room/
│   │   ├── 1-nazar/editor/    ← Nazar gallery editor
│   │   ├── 2-book-reviews/
│   │   ├── 3-keywords/
│   │   └── 4-criticulture/
│   ├── 3-submission/
│   ├── 4-about/
│   └── tool/        ← search.json, explore, post-editor-core
└── assets/js/main.js
```

## Adding images

**Cover image** (shown on cards):
```yaml
image: https://res.cloudinary.com/your-cloud/image/upload/v123/photo.jpg
```

**Inline image** (inside the article body):
```markdown
![Alt text](https://your-image-url.jpg)
```

## Changing fonts or colours

Open `_config.yml` and edit the `fonts:` or `colors:` sections. Changes apply site-wide automatically.

## Adding a new author

Open `src/config/authors.yml` and add:

```yaml
yourkey:
  name:   "Your Name"
  bio:    "A short bio."
  avatar: "/assets/images/authors/yourphoto.jpg"
```

Then use `author: yourkey` in your post's front matter.

---

That's all you need. Write, save, commit to GitHub — your blog updates automatically.
