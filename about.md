---
layout: default
title: About
description: About this blog and its author
---

<div class="container-narrow" style="padding-bottom:5rem;">

  <div class="about-hero">
    <div class="about-avatar-wrap">
      {% if site.author.avatar %}
        <img src="{{ site.author.avatar }}" alt="{{ site.author.name }}" />
      {% else %}
        <div style="width:100%;height:100%;background:color-mix(in srgb,var(--c-primary) 20%,var(--c-surface));display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-size:5rem;font-weight:700;color:var(--c-primary);">
          {{ site.author.name | slice: 0 | default: "A" }}
        </div>
      {% endif %}
    </div>
    <div>
      <h1 class="about-name">{{ site.author.name | default: "The Author" }}</h1>
      <p class="about-tagline" style="font-style:italic;">{{ site.tagline }}</p>
      <p style="color:var(--c-text-muted);line-height:1.7;margin-top:.5rem;">{{ site.author.bio }}</p>
    </div>
  </div>

  <div class="divider"></div>

  <div class="post-body" style="margin-bottom:2.5rem;">
    <p>This is your About page. Edit <code>about.md</code> in the root of your repository to introduce yourself, share what drives your writing, and tell readers what to expect.</p>
    <p>Write freely in Markdown just like your posts. Talk about your background, interests, or the questions that keep you up at night.</p>
  </div>

  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:2.5rem 0;">
    <div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--radius-lg);padding:1.5rem;text-align:center;">
      <div style="font-family:var(--font-heading);font-size:2.2rem;font-weight:700;color:var(--c-primary);">{{ site.posts.size }}</div>
      <div style="font-family:var(--font-ui);font-size:.8rem;color:var(--c-text-muted);text-transform:uppercase;letter-spacing:.08em;margin-top:.3rem;">Articles</div>
    </div>
    <div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--radius-lg);padding:1.5rem;text-align:center;">
      {% assign all_tags = site.posts | map: "tags" | join: "," | split: "," | uniq %}
      <div style="font-family:var(--font-heading);font-size:2.2rem;font-weight:700;color:var(--c-primary);">{{ all_tags | size }}</div>
      <div style="font-family:var(--font-ui);font-size:.8rem;color:var(--c-text-muted);text-transform:uppercase;letter-spacing:.08em;margin-top:.3rem;">Topics</div>
    </div>
    <div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--radius-lg);padding:1.5rem;text-align:center;">
      {% assign first_post = site.posts | last %}
      <div style="font-family:var(--font-heading);font-size:1.5rem;font-weight:700;color:var(--c-primary);">{{ first_post.date | date: "%Y" | default: "2024" }}</div>
      <div style="font-family:var(--font-ui);font-size:.8rem;color:var(--c-text-muted);text-transform:uppercase;letter-spacing:.08em;margin-top:.3rem;">Since</div>
    </div>
  </div>

  <div style="text-align:center;margin-top:2rem;">
    <a href="/explore" class="btn btn-primary">
      <i data-lucide="book-open" style="width:15px;height:15px;"></i>
      Read my articles
    </a>
  </div>

</div>
