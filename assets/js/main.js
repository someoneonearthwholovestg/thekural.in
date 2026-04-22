/* ═══════════════════════════════════════════════════════════
   TheKural — main.js
   • Theme toggle (dark / light, persisted in localStorage)
   • Search overlay (live filter over SEARCH_DATA)
   • Scroll fade-in animations
   • Lucide icon boot
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

  // ── 2. THEME TOGGLE ─────────────────────────────────────
  const html        = document.documentElement;
  const themeBtn    = document.getElementById('theme-toggle');
  const savedTheme  = localStorage.getItem('tk-theme') || 'light';

  html.setAttribute('data-theme', savedTheme);

  themeBtn && themeBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('tk-theme', next);
    // re-render icons after DOM change
    if (window.lucide) lucide.createIcons();
  });

  // ── 3. SEARCH OVERLAY ───────────────────────────────────
  const overlay    = document.getElementById('search-overlay');
  const searchBtn  = document.getElementById('search-toggle');
  const closeBtn   = document.getElementById('search-close');
  const input      = document.getElementById('search-input');
  const results    = document.getElementById('search-results');
  const hint       = document.getElementById('search-hint');

  function openSearch() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input && input.focus(), 50);
  }
  function closeSearch() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (input) input.value = '';
    if (results) results.innerHTML = hint ? hint.outerHTML : '';
  }

  searchBtn && searchBtn.addEventListener('click', openSearch);
  closeBtn  && closeBtn.addEventListener('click', closeSearch);

  // Close on backdrop click
  overlay && overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  // Keyboard: Ctrl/Cmd+K to open, Escape to close
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') closeSearch();
  });

  // Live search
  input && input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = hint ? hint.outerHTML : ''; return; }

    const hits = (window.SEARCH_DATA || []).filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.excerpt || '').toLowerCase().includes(q) ||
      (p.tags || []).some(t => t.toLowerCase().includes(q))
    );

    if (!hits.length) {
      results.innerHTML = `<div class="search-empty">No articles found for "<strong>${escHtml(q)}</strong>"</div>`;
      return;
    }

    results.innerHTML = hits.map(p => `
      <a href="${p.url}" class="search-result-item">
        <span class="search-result-title">${highlight(p.title, q)}</span>
        <span class="search-result-excerpt">${p.date}${p.excerpt ? ' — ' + highlight(p.excerpt, q) : ''}</span>
      </a>
    `).join('');
  });

  function highlight(text, q) {
    const escaped = escHtml(text);
    const re = new RegExp(`(${escRegex(q)})`, 'gi');
    return escaped.replace(re, '<mark style="background:color-mix(in srgb,var(--c-primary) 30%,transparent);border-radius:2px;padding:0 .1em;">$1</mark>');
  }
  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function escRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  // ── 4. SCROLL FADE-IN ────────────────────────────────────
  const faders = document.querySelectorAll('.fade-in');
  if (faders.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    faders.forEach((el, i) => {
      el.style.transitionDelay = (i % 6 * 0.06) + 's';
      io.observe(el);
    });
  } else {
    faders.forEach(el => el.classList.add('visible'));
  }

});
