---
layout: default
title: Submit Your Work
description: Share your stories, essays, and perspectives with TheKural community.
permalink: /submission
---

<style>
  .sub-hero {
    padding: 4rem 0 3rem;
    text-align: center;
    position: relative;
  }
  .sub-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% 0%, color-mix(in srgb, var(--c-primary) 10%, transparent), transparent);
    pointer-events: none;
  }
  .sub-eyebrow {
    font-family: var(--font-ui);
    font-size: .72rem; font-weight: 600;
    letter-spacing: .2em; text-transform: uppercase;
    color: var(--c-primary); margin-bottom: .85rem;
  }
  .sub-title {
    font-family: var(--font-heading);
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 700; letter-spacing: -.03em;
    line-height: 1.1; margin-bottom: 1rem;
    color: var(--c-text);
  }
  .sub-lead {
    font-size: 1rem; color: var(--c-text-muted);
    max-width: 520px; margin: 0 auto;
    line-height: 1.75;
  }

  /* ── GRID LAYOUT ── */
  .sub-grid {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 2.5rem;
    align-items: start;
    padding-bottom: 5rem;
  }
  @media (max-width: 860px) {
    .sub-grid { grid-template-columns: 1fr; }
  }

  /* ── SECTION CARDS ── */
  .sub-card {
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    padding: 1.75rem 2rem;
    margin-bottom: 1.4rem;
  }
  .sub-card-title {
    font-family: var(--font-heading);
    font-size: 1.15rem; font-weight: 700;
    color: var(--c-text); margin-bottom: 1rem;
    display: flex; align-items: center; gap: .6rem;
  }
  .sub-card-title .icon {
    width: 32px; height: 32px;
    background: color-mix(in srgb, var(--c-primary) 15%, var(--c-surface));
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; flex-shrink: 0;
  }
  .sub-card p {
    font-size: .92rem;
    color: var(--c-text-muted);
    line-height: 1.75;
    margin-bottom: .75rem;
  }
  .sub-card p:last-child { margin-bottom: 0; }

  /* ── GUIDELINES LIST ── */
  .sub-guidelines {
    list-style: none;
    padding: 0; margin: 0;
    display: flex; flex-direction: column; gap: .6rem;
  }
  .sub-guidelines li {
    display: flex; gap: .75rem; align-items: flex-start;
    font-size: .9rem; color: var(--c-text-muted);
    line-height: 1.6;
  }
  .sub-guidelines li .bullet {
    width: 20px; height: 20px;
    background: color-mix(in srgb, var(--c-primary) 18%, var(--c-surface));
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: .6rem; color: var(--c-primary);
    flex-shrink: 0; margin-top: .15rem;
    font-weight: 700;
  }

  /* ── CATEGORIES ── */
  .sub-categories {
    display: flex; flex-wrap: wrap; gap: .5rem;
    margin-top: .5rem;
  }
  .sub-category {
    font-family: var(--font-ui);
    font-size: .75rem; font-weight: 500;
    background: color-mix(in srgb, var(--c-primary) 12%, var(--c-bg));
    color: var(--c-primary-dark);
    padding: .3rem .8rem;
    border-radius: 20px;
    border: 1px solid color-mix(in srgb, var(--c-primary) 25%, transparent);
  }

  /* ── TAC ── */
  .tac-list {
    counter-reset: tac;
    list-style: none;
    padding: 0; margin: 0;
    display: flex; flex-direction: column; gap: 1rem;
  }
  .tac-list li {
    counter-increment: tac;
    display: flex; gap: .85rem; align-items: flex-start;
    font-size: .88rem; color: var(--c-text-muted);
    line-height: 1.7;
  }
  .tac-list li::before {
    content: counter(tac);
    min-width: 24px; height: 24px;
    background: var(--c-primary);
    color: #000;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-ui);
    font-size: .68rem; font-weight: 700;
    flex-shrink: 0; margin-top: .2rem;
  }
  .tac-list li strong { color: var(--c-text); font-weight: 600; }

  /* ── CONTACT SIDEBAR ── */
  .sub-sidebar { position: sticky; top: 84px; }

  .contact-card {
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    margin-bottom: 1.2rem;
  }
  .contact-card-head {
    background: color-mix(in srgb, var(--c-primary) 10%, var(--c-surface));
    border-bottom: 1px solid var(--c-border);
    padding: 1rem 1.25rem;
    font-family: var(--font-heading);
    font-size: 1rem; font-weight: 700;
    color: var(--c-text);
    display: flex; align-items: center; gap: .5rem;
  }
  .contact-method {
    display: flex; align-items: center; gap: .9rem;
    padding: .9rem 1.25rem;
    border-bottom: 1px solid var(--c-border);
    transition: background var(--transition);
    text-decoration: none;
  }
  .contact-method:last-child { border-bottom: none; }
  .contact-method:hover { background: var(--c-surface-hover); }
  .contact-method-icon {
    width: 36px; height: 36px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; flex-shrink: 0;
  }
  .contact-method-info { flex: 1; min-width: 0; }
  .contact-method-label {
    font-family: var(--font-ui);
    font-size: .67rem; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--c-text-muted); margin-bottom: .1rem;
  }
  .contact-method-value {
    font-family: var(--font-ui);
    font-size: .85rem; font-weight: 500;
    color: var(--c-text);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .contact-arrow {
    color: var(--c-text-muted); font-size: .8rem; flex-shrink: 0;
  }

  /* ── TIMELINE ── */
  .sub-timeline {
    display: flex; flex-direction: column; gap: 0;
  }
  .sub-step {
    display: flex; gap: 1rem; align-items: flex-start;
    position: relative;
  }
  .sub-step:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 15px; top: 32px;
    width: 2px; height: calc(100% + 0px);
    background: var(--c-border);
  }
  .sub-step-num {
    width: 32px; height: 32px;
    border-radius: 50%;
    background: var(--c-surface);
    border: 2px solid var(--c-primary);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-ui); font-size: .75rem; font-weight: 700;
    color: var(--c-primary); flex-shrink: 0; z-index: 1;
  }
  .sub-step-body { padding: .3rem 0 1.5rem; }
  .sub-step-title {
    font-family: var(--font-heading);
    font-size: .95rem; font-weight: 700;
    color: var(--c-text); margin-bottom: .2rem;
  }
  .sub-step-desc {
    font-family: var(--font-ui);
    font-size: .82rem; color: var(--c-text-muted);
    line-height: 1.6;
  }

  /* ── NOTE BOX ── */
  .sub-note {
    background: color-mix(in srgb, var(--c-primary) 8%, var(--c-surface));
    border: 1px solid color-mix(in srgb, var(--c-primary) 25%, transparent);
    border-radius: var(--radius);
    padding: 1rem 1.25rem;
    font-family: var(--font-ui);
    font-size: .84rem;
    color: var(--c-text-muted);
    line-height: 1.65;
    margin-top: .75rem;
  }
  .sub-note strong { color: var(--c-primary); }
</style>

<div class="container-narrow">
  <div class="sub-hero">
    <div class="sub-eyebrow">Open Submissions</div>
    <h1 class="sub-title">Share Your Voice</h1>
    <p class="sub-lead">TheKural is an open space for writers, thinkers, and storytellers. If you have something worth saying, we want to read it.</p>
  </div>
</div>

<div class="container">
  <div class="sub-grid">

    <!-- LEFT COLUMN -->
    <div class="sub-main">

      <!-- What we accept -->
      <div class="sub-card">
        <div class="sub-card-title">
          <div class="icon">✍️</div>
          What We Accept
        </div>
        <p>We welcome original writing across a wide range of forms. If your work makes someone think, feel, or see differently — it belongs here.</p>
        <div class="sub-categories">
          <span class="sub-category">Personal Essays</span>
          <span class="sub-category">Short Fiction</span>
          <span class="sub-category">Opinion & Commentary</span>
          <span class="sub-category">Book Reviews</span>
          <span class="sub-category">Travel Writing</span>
          <span class="sub-category">Cultural Criticism</span>
          <span class="sub-category">Photography Essays</span>
          <span class="sub-category">Poetry</span>
          <span class="sub-category">Interviews</span>
          <span class="sub-category">Memoir</span>
        </div>
      </div>

      <!-- Guidelines -->
      <div class="sub-card">
        <div class="sub-card-title">
          <div class="icon">📋</div>
          Submission Guidelines
        </div>
        <ul class="sub-guidelines">
          <li><span class="bullet">✦</span> Work must be original and not published elsewhere, including personal blogs and social media.</li>
          <li><span class="bullet">✦</span> Essays and articles should be between 500 and 3000 words. Longer pieces may be considered for a series.</li>
          <li><span class="bullet">✦</span> Poetry can be any length. Submit up to 3 poems at a time.</li>
          <li><span class="bullet">✦</span> Write in English. Submissions in Tamil with an English translation are also welcome.</li>
          <li><span class="bullet">✦</span> Include a short bio (2–3 sentences) and a profile photo if you have one.</li>
          <li><span class="bullet">✦</span> Send your work as a plain text, Markdown, or Google Docs link — no PDFs please.</li>
          <li><span class="bullet">✦</span> Include a suggested title and a one-sentence summary of your piece.</li>
          <li><span class="bullet">✦</span> We do not accept AI-generated content. All writing must be authentically yours.</li>
          <li><span class="bullet">✦</span> Simultaneous submissions are fine — just let us know immediately if accepted elsewhere.</li>
        </ul>
      </div>

      <!-- Process -->
      <div class="sub-card">
        <div class="sub-card-title">
          <div class="icon">🔄</div>
          Our Process
        </div>
        <div class="sub-timeline">
          <div class="sub-step">
            <div class="sub-step-num">1</div>
            <div class="sub-step-body">
              <div class="sub-step-title">Submit via email or WhatsApp</div>
              <div class="sub-step-desc">Send your piece with a brief note about yourself and what inspired the work.</div>
            </div>
          </div>
          <div class="sub-step">
            <div class="sub-step-num">2</div>
            <div class="sub-step-body">
              <div class="sub-step-title">We read everything</div>
              <div class="sub-step-desc">Every submission is read in full. We respond within 2–3 weeks. If you haven't heard back after 4 weeks feel free to follow up.</div>
            </div>
          </div>
          <div class="sub-step">
            <div class="sub-step-num">3</div>
            <div class="sub-step-body">
              <div class="sub-step-title">Editing together</div>
              <div class="sub-step-desc">If we love your work we'll share light editorial notes. We edit collaboratively, never without your approval.</div>
            </div>
          </div>
          <div class="sub-step">
            <div class="sub-step-num">4</div>
            <div class="sub-step-body">
              <div class="sub-step-title">Published & shared</div>
              <div class="sub-step-desc">Your piece goes live with your name, bio, and photo. We share it across all our channels.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Terms & Conditions -->
      <div class="sub-card">
        <div class="sub-card-title">
          <div class="icon">📜</div>
          Terms &amp; Conditions
        </div>
        <ol class="tac-list">
          <li><strong>Originality.</strong> By submitting you confirm the work is entirely your own, original, and has not been published elsewhere in any form.</li>
          <li><strong>Rights.</strong> You retain full copyright of your work. By publishing with us you grant TheKural a non-exclusive licence to publish, archive, and share the piece on our platform and social channels.</li>
          <li><strong>No payment.</strong> We are a passion project and currently do not offer payment for contributions. This may change in the future.</li>
          <li><strong>Editing.</strong> We reserve the right to make minor edits for clarity, grammar, and style. Any substantial changes will be discussed with you before publication.</li>
          <li><strong>Rejection.</strong> We may decline any submission for any reason. We will not always be able to provide detailed feedback.</li>
          <li><strong>Removal.</strong> Authors may request their piece be removed at any time. We will remove it within 7 days of request.</li>
          <li><strong>Content standards.</strong> We do not publish content that is hateful, discriminatory, defamatory, or that violates the privacy of any individual.</li>
          <li><strong>AI content.</strong> Submissions generated wholly or substantially by AI tools will be rejected. We value authentic human voice above all.</li>
          <li><strong>Disputes.</strong> Any disputes will be handled in good faith between the author and TheKural editorial team directly.</li>
        </ol>
        <div class="sub-note">
          <strong>Note:</strong> Submitting your work means you agree to these terms. If you have any questions about them please reach out before submitting.
        </div>
      </div>

    </div>

    <!-- RIGHT SIDEBAR -->
    <div class="sub-sidebar">

      <!-- Contact methods -->
      <div class="contact-card">
        <div class="contact-card-head">📬 Get in Touch</div>

        <a href="mailto:submissions@thekural.in" class="contact-method">
          <div class="contact-method-icon" style="background:#fef3e2;">📧</div>
          <div class="contact-method-info">
            <div class="contact-method-label">Email</div>
            <div class="contact-method-value">submissions@thekural.in</div>
          </div>
          <span class="contact-arrow">→</span>
        </a>

        <a href="https://wa.me/919999999999" target="_blank" rel="noopener" class="contact-method">
          <div class="contact-method-icon" style="background:#e8f8f0;">💬</div>
          <div class="contact-method-info">
            <div class="contact-method-label">WhatsApp</div>
            <div class="contact-method-value">+91 99999 99999</div>
          </div>
          <span class="contact-arrow">→</span>
        </a>

        <a href="https://instagram.com/thekural" target="_blank" rel="noopener" class="contact-method">
          <div class="contact-method-icon" style="background:#fce8f3;">📸</div>
          <div class="contact-method-info">
            <div class="contact-method-label">Instagram DM</div>
            <div class="contact-method-value">@thekural</div>
          </div>
          <span class="contact-arrow">→</span>
        </a>

      </div>

      <!-- Response time -->
      <div class="contact-card">
        <div class="contact-card-head">⏱ Response Times</div>
        <div style="padding:.75rem 1.25rem;display:flex;flex-direction:column;gap:.6rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;font-family:var(--font-ui);font-size:.82rem;">
            <span style="color:var(--c-text-muted);">Initial reply</span>
            <span style="color:var(--c-text);font-weight:600;">2–3 days</span>
          </div>
          <div style="height:1px;background:var(--c-border);"></div>
          <div style="display:flex;justify-content:space-between;align-items:center;font-family:var(--font-ui);font-size:.82rem;">
            <span style="color:var(--c-text-muted);">Full decision</span>
            <span style="color:var(--c-text);font-weight:600;">2–3 weeks</span>
          </div>
          <div style="height:1px;background:var(--c-border);"></div>
          <div style="display:flex;justify-content:space-between;align-items:center;font-family:var(--font-ui);font-size:.82rem;">
            <span style="color:var(--c-text-muted);">Publication</span>
            <span style="color:var(--c-text);font-weight:600;">1–2 weeks after</span>
          </div>
        </div>
      </div>

      <!-- Quick tips -->
      <div class="contact-card">
        <div class="contact-card-head">💡 Quick Tips</div>
        <div style="padding:.85rem 1.25rem;display:flex;flex-direction:column;gap:.6rem;">
          <div style="font-family:var(--font-ui);font-size:.82rem;color:var(--c-text-muted);line-height:1.6;padding-bottom:.6rem;border-bottom:1px solid var(--c-border);">
            A strong opening line matters more than a perfect ending.
          </div>
          <div style="font-family:var(--font-ui);font-size:.82rem;color:var(--c-text-muted);line-height:1.6;padding-bottom:.6rem;border-bottom:1px solid var(--c-border);">
            Write like you're talking to one specific person, not an audience.
          </div>
          <div style="font-family:var(--font-ui);font-size:.82rem;color:var(--c-text-muted);line-height:1.6;padding-bottom:.6rem;border-bottom:1px solid var(--c-border);">
            Read your piece out loud before submitting — you'll catch everything.
          </div>
          <div style="font-family:var(--font-ui);font-size:.82rem;color:var(--c-text-muted);line-height:1.6;">
            Don't wait until it's perfect. Submit when it's honest.
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
