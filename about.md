---
layout: default
title: About
description: About this blog and its author
---

<div class="container-narrow">

  <div class="about-hero">
    <div class="about-avatar-wrap">
      {% if site.author.avatar %}
        <img src="{{ site.baseurl }}{{ site.author.avatar }}" alt="{{ site.author.name }}" />
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

  <div class="post-body" style="margin-bottom:2.5rem;">

<p>The Kural is an independent platform that engages with the movement of ideas beyond formal academic settings. It emerges from the recognition that while knowledge is continuously produced across institutions, much of it remains inaccessible, contained, or unheard within dominant frameworks of discourse.</p>

<p>It is particularly attentive to voices and forms of thought that are often lost in larger contexts—whether due to disciplinary boundaries, linguistic limitations, or structural exclusions. The Kural seeks to create conditions where such work can be revisited, rearticulated, and made available to a wider public without compromising its analytical depth.</p>

<p>Working across structured and experimental forms, the platform encourages engagements that are both rigorous and accessible. It is invested in rethinking how research circulates—foregrounding clarity, reflection, and critical precision over convention alone.</p>

<p>The Kural is non-sectarian in its orientation. It does not adhere to any single ideological position or institutional framework, but remains open to diverse locations of thought, particularly those that are marginalised or underrepresented in mainstream conversations.</p>

<p>At its core, The Kural is an effort to extend the life of ideas—
to enable what exists, but often remains unheard, to enter public articulation.</p>
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
    <a href="/thekural.in/explore" class="btn btn-primary">
      <i data-lucide="book-open" style="width:15px;height:15px;"></i>
      Read my articles
    </a>
  </div>

</div>
