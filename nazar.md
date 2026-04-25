---
layout: default
title: Nazar
description: A curated gallery of moments, frames, and quiet observations.
permalink: /nazar
---

<style>
  .nazar-hero {
    padding: 3.5rem 0 2rem;
    text-align: center;
  }
  .nazar-hero-eyebrow {
    font-family: var(--font-ui);
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: var(--c-primary);
    margin-bottom: .75rem;
  }
  .nazar-hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 700;
    letter-spacing: -.03em;
    line-height: 1.1;
    margin-bottom: .9rem;
    color: var(--c-text);
  }
  .nazar-hero-sub {
    font-size: .95rem;
    color: var(--c-text-muted);
    max-width: 420px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* ── MASONRY GALLERY ── */
  .nazar-gallery {
    columns: 3;
    column-gap: 12px;
    margin: 2.5rem 0 4rem;
  }
  @media (max-width: 900px) { .nazar-gallery { columns: 2; } }
  @media (max-width: 500px) { .nazar-gallery { columns: 1; } }

  .nazar-item {
    break-inside: avoid;
    margin-bottom: 12px;
    position: relative;
    border-radius: var(--radius);
    overflow: hidden;
    cursor: zoom-in;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
  }
  .nazar-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform .5s ease;
    margin: 0;
  }
  .nazar-item:hover img { transform: scale(1.03); }
  .nazar-caption {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background: linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 100%);
    padding: 1.5rem .9rem .7rem;
    font-family: var(--font-ui);
    font-size: .78rem;
    color: #fff;
    opacity: 0;
    transition: opacity .3s ease;
    line-height: 1.4;
  }
  .nazar-item:hover .nazar-caption { opacity: 1; }

  /* ── LIGHTBOX ── */
  .nazar-lightbox {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,.92);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none;
    transition: opacity .25s ease;
    padding: 1.5rem;
  }
  .nazar-lightbox.open { opacity: 1; pointer-events: all; }
  .nazar-lightbox-inner {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;
  }
  .nazar-lightbox-inner img {
    max-width: 90vw;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--radius);
    display: block;
    margin: 0;
  }
  .nazar-lightbox-caption {
    font-family: var(--font-ui);
    font-size: .85rem;
    color: rgba(255,255,255,.7);
    text-align: center;
  }
  .nazar-lightbox-close {
    position: fixed; top: 1.25rem; right: 1.5rem;
    background: rgba(255,255,255,.1);
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 8px;
    color: #fff; cursor: pointer;
    width: 38px; height: 38px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem;
    transition: background .2s;
  }
  .nazar-lightbox-close:hover { background: rgba(255,255,255,.2); }
  .nazar-lightbox-nav {
    position: fixed;
    top: 50%; transform: translateY(-50%);
    background: rgba(255,255,255,.1);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 8px;
    color: #fff; cursor: pointer;
    width: 42px; height: 42px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    transition: background .2s;
  }
  .nazar-lightbox-nav:hover { background: rgba(255,255,255,.2); }
  .nazar-lightbox-prev { left: 1rem; }
  .nazar-lightbox-next { right: 1rem; }

  .nazar-empty {
    text-align: center;
    padding: 5rem 0;
    color: var(--c-text-muted);
    font-family: var(--font-ui);
  }
  .nazar-empty-icon { font-size: 3rem; margin-bottom: 1rem; opacity: .3; }
</style>

<div class="container">
  <div class="nazar-hero">
    <div class="nazar-hero-eyebrow">Visual Journal</div>
    <h1 class="nazar-hero-title">Nazar</h1>
    <p class="nazar-hero-sub">A curated collection of frames, moments, and quiet observations.</p>
  </div>

  <!-- GALLERY -->
  <div class="nazar-gallery" id="nazar-gallery">
    <!-- Populated from _data/nazar.yml -->
    {% if site.data.nazar and site.data.nazar.size > 0 %}
      {% for item in site.data.nazar %}
        <div class="nazar-item" onclick="openLightbox({{ forloop.index0 }})">
          <img
            src="{{ item.url }}"
            alt="{{ item.caption | default: 'Nazar' }}"
            loading="lazy"
          />
          {% if item.caption %}
            <div class="nazar-caption">{{ item.caption }}</div>
          {% endif %}
        </div>
      {% endfor %}
    {% else %}
      <div class="nazar-empty" style="grid-column:1/-1;">
        <div class="nazar-empty-icon">📷</div>
        <p>No images yet. Add some in <code>_data/nazar.yml</code></p>
      </div>
    {% endif %}
  </div>
</div>

<!-- LIGHTBOX -->
<div class="nazar-lightbox" id="nazar-lightbox" onclick="closeLightboxOutside(event)">
  <button class="nazar-lightbox-close" onclick="closeLightbox()">✕</button>
  <button class="nazar-lightbox-nav nazar-lightbox-prev" onclick="lightboxNav(-1)">‹</button>
  <button class="nazar-lightbox-nav nazar-lightbox-next" onclick="lightboxNav(1)">›</button>
  <div class="nazar-lightbox-inner">
    <img id="lightbox-img" src="" alt="" />
    <div class="nazar-lightbox-caption" id="lightbox-caption"></div>
  </div>
</div>

<script>
const NAZAR_ITEMS = [
  {% if site.data.nazar %}
  {% for item in site.data.nazar %}
  { url: {{ item.url | jsonify }}, caption: {{ item.caption | default: "" | jsonify }} }{% unless forloop.last %},{% endunless %}
  {% endfor %}
  {% endif %}
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  document.getElementById('nazar-lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('nazar-lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function closeLightboxOutside(e) {
  if (e.target === document.getElementById('nazar-lightbox')) closeLightbox();
}

function lightboxNav(dir) {
  currentIndex = (currentIndex + dir + NAZAR_ITEMS.length) % NAZAR_ITEMS.length;
  updateLightbox();
}

function updateLightbox() {
  const item = NAZAR_ITEMS[currentIndex];
  document.getElementById('lightbox-img').src     = item.url;
  document.getElementById('lightbox-img').alt     = item.caption;
  document.getElementById('lightbox-caption').textContent = item.caption;
}

document.addEventListener('keydown', e => {
  const lb = document.getElementById('nazar-lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  lightboxNav(-1);
  if (e.key === 'ArrowRight') lightboxNav(1);
});
</script>
