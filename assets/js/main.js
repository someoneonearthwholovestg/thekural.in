/* ═══════════════════════════════════════════════════════════
   TheKural — main.js
   • Theme toggle
   • Full-text search (loads from /search.json)
   • Scroll fade-in
   • Lucide icons
═══════════════════════════════════════════════════════════ */

function initLucide() {
  if (window.lucide) {
    lucide.createIcons();
  } else {
    setTimeout(initLucide, 50);
  }
}
initLucide();

document.addEventListener('DOMContentLoaded', () => {
  initLucide();

  // ── 1. THEME TOGGLE ─────────────────────────────────────
  const html       = document.documentElement;
  const themeBtn   = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('tk-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  themeBtn && themeBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('tk-theme', next);
    if (window.lucide) lucide.createIcons();
  });

  // ── 2. FULL-TEXT SEARCH ──────────────────────────────────
  const overlay   = document.getElementById('search-overlay');
  const searchBtn = document.getElementById('search-toggle');
  const closeBtn  = document.getElementById('search-close');
  const input     = document.getElementById('search-input');
  const results   = document.getElementById('search-results');
  const hint      = document.getElementById('search-hint');

  // Load search index from search.json once
  let searchIndex = null;
  let searchLoading = false;

  function loadSearchIndex() {
    if (searchIndex || searchLoading) return;
    searchLoading = true;

    // Get base path from existing script tag
    const base = document.querySelector('script[src*="main.js"]')
      .getAttribute('src')
      .replace('/assets/js/main.js', '');

    fetch(base + '/search.json')
      .then(r => r.json())
      .then(data => {
        searchIndex = data;
        searchLoading = false;
      })
      .catch(() => {
        searchLoading = false;
        console.warn('TheKural: could not load search.json');
      });
  }

  function openSearch() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    loadSearchIndex(); // start loading as soon as search opens
    setTimeout(() => input && input.focus(), 50);
  }

  function closeSearch() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (input) input.value = '';
    if (results) results.innerHTML = hint ? hint.outerHTML : '';
    // re-init lucide for the hint icon
    if (window.lucide) lucide.createIcons();
  }

  searchBtn && searchBtn.addEventListener('click', openSearch);
  closeBtn  && closeBtn.addEventListener('click', closeSearch);

  overlay && overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') closeSearch();
  });

  // Live full-text search
  input && input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();

    if (!q) {
      results.innerHTML = hint ? hint.outerHTML : '';
      if (window.lucide) lucide.createIcons();
      return;
    }

    if (!searchIndex) {
      results.innerHTML = `<div class="search-empty">Loading search index…</div>`;
      // Try loading if not already
      loadSearchIndex();
      return;
    }

    // Search title (weight 3), tags (weight 2), excerpt + content (weight 1)
    const hits = searchIndex
      .map(post => {
        const title   = (post.title   || '').toLowerCase();
        const content = (post.content || '').toLowerCase();
        const excerpt = (post.excerpt || '').toLowerCase();
        const tags    = (post.tags    || []).join(' ').toLowerCase();

        let score = 0;
        if (title.includes(q))   score += 3;
        if (tags.includes(q))    score += 2;
        if (excerpt.includes(q)) score += 1;
        if (content.includes(q)) score += 1;

        return { ...post, score };
      })
      .filter(p => p.score > 0)
      .sort((a, b) => b.score - a.score);

    if (!hits.length) {
      results.innerHTML = `<div class="search-empty">No articles found for "<strong>${escHtml(q)}</strong>"</div>`;
      return;
    }

    results.innerHTML = hits.map(p => {
      // Find the matching snippet from full content
      const snippet = getSnippet(p.content || p.excerpt || '', q);
      return `
        <a href="${p.url}" class="search-result-item">
          <span class="search-result-title">${highlight(p.title, q)}</span>
          <span class="search-result-excerpt">${p.date}${snippet ? ' — ' + highlight(snippet, q) : ''}</span>
        </a>
      `;
    }).join('');
  });

  // Extract a relevant snippet around the matched word
  function getSnippet(text, q) {
    const lower = text.toLowerCase();
    const idx   = lower.indexOf(q);
    if (idx === -1) return text.slice(0, 120);
    const start = Math.max(0, idx - 60);
    const end   = Math.min(text.length, idx + q.length + 80);
    let snippet = text.slice(start, end).trim();
    if (start > 0)          snippet = '…' + snippet;
    if (end < text.length)  snippet = snippet + '…';
    return snippet;
  }

  function highlight(text, q) {
    const escaped = escHtml(text);
    const re = new RegExp(`(${escRegex(q)})`, 'gi');
    return escaped.replace(re, '<mark style="background:color-mix(in srgb,var(--c-primary) 30%,transparent);border-radius:2px;padding:0 .1em;">$1</mark>');
  }
  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function escRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // ── 3. SCROLL FADE-IN ────────────────────────────────────
  const faders = document.querySelectorAll('.fade-in');
  if (faders.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    faders.forEach((el, i) => {
      el.style.transitionDelay = (i % 6 * 0.06) + 's';
      io.observe(el);
    });
  } else {
    faders.forEach(el => el.classList.add('visible'));
  }

});

// ── DROPDOWN MENUS ──────────────────────────────────────────
document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  toggle.addEventListener('click', e => {
    e.stopPropagation();
    // Close all others first
    document.querySelectorAll('.nav-dropdown.open').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    dropdown.classList.toggle('open');
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
});

// ── MOBILE MENU ─────────────────────────────────────────────
const mobileToggle  = document.getElementById('mobile-menu-toggle');
const mobileNav     = document.getElementById('mobile-nav');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon     = document.getElementById('close-icon');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburgerIcon.style.display = isOpen ? 'none'  : 'block';
    closeIcon.style.display     = isOpen ? 'block' : 'none';
    // Prevent body scroll without causing layout shift
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburgerIcon.style.display  = 'block';
    closeIcon.style.display      = 'none';
    document.body.style.overflow = '';
  });
});

const headerInput = document.getElementById('header-search-input');
if (headerInput) {
  headerInput.addEventListener('input', () => {
    const overlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    if (!overlay.classList.contains('open')) {
      overlay.classList.add('open');
    }
    searchInput.value = headerInput.value;
    searchInput.dispatchEvent(new Event('input'));
    headerInput.value = '';
  });
}
