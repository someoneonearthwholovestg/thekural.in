---
layout: post
title: "Writing Your First Post — A Guide for Admins"
date: 2024-05-20
tags: [guide, jekyll, admin]
excerpt: "Everything you need to know to publish, customise fonts, add images, and manage your blog without touching a line of HTML."
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
image_alt: "Describe your image"     # optional
excerpt: "One sentence that appears on cards and search results."
---
```

Then write your content in **Markdown** below the `---` line.

## Adding images

**Option 1 — Cover image** (appears as a hero above your article):

Add to the front matter:
```yaml
image: /assets/images/my-photo.jpg
```

**Option 2 — Inline image** (inside the article body):

```markdown
![Alt text for the image](/assets/images/my-photo.jpg)
```

Simply drag your image into the `assets/images/` folder in your repository, then reference it with the path above.

## Changing fonts

Open `_config.yml` and find the `fonts:` section:

```yaml
fonts:
  post_heading:    "Cormorant Garamond"   # Change to any Google Font
  post_subheading: "Spectral"
  body:            "Spectral"
  ui:              "DM Sans"
```

Replace the font name with **any name from [fonts.google.com](https://fonts.google.com)**. The blog will automatically load and apply it — no CSS editing required.

## Changing font sizes

In `_config.yml`, find `font_sizes:`:

```yaml
font_sizes:
  post_heading: "3.4rem"    # Make bigger or smaller
  card_heading: "1.45rem"
  body:         "1.1rem"
```

## Changing colours

The `colors:` section in `_config.yml` controls the entire palette:

```yaml
colors:
  primary: "#C4965A"    # The camel/golden accent colour
  bg:      "#FAF6EE"    # Page background
  text:    "#2C1508"    # Main text colour
```

## Formatting cheatsheet

| Element | Markdown |
|---------|----------|
| **Bold** | `**text**` |
| *Italic* | `*text*` |
| `Code` | `` `code` `` |
| [Link](url) | `[text](url)` |
| Heading | `## Heading` |
| Quote | `> Your quote` |

That's all you need. Write, save, push to GitHub — your blog updates automatically. 🎉
