const css = `
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Ubuntu+Mono:wght@400&display=swap");

:root {
  --bg: #000000;
  --bg-raise: #0a0a0a;
  --text: #ffffff;
  --dim: #888888;
  --faint: #444444;
  --line: #1a1a1a;
  --mono: "Ubuntu Mono", ui-monospace, monospace;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; color-scheme: dark; }

body {
  font-family: "Ubuntu", "Segoe UI", sans-serif;
  font-weight: 300;
  color: var(--text);
  background: var(--bg);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::selection { background: #ffffff; color: #000000; }

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--faint); }

:focus-visible { outline: 1px solid var(--text); outline-offset: 3px; }

[id] { scroll-margin-top: 80px; }

.sky { position: fixed; inset: 0; z-index: 0; pointer-events: none; }

.page {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px 120px;
}

.bar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  margin: 0 -48px;
  padding: 0 48px;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}

.brand {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.02em;
}

.nav-right { display: flex; align-items: center; gap: 32px; }

.nav-meta {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--faint);
  letter-spacing: 0.12em;
}

.nav-link {
  color: var(--dim);
  text-decoration: none;
  font-size: 0.88rem;
  transition: color 0.2s;
}

.nav-link:hover { color: var(--text); }

.hero {
  min-height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 60px 0;
}

.hero-name {
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  line-height: 1.0;
  font-weight: 300;
  letter-spacing: -0.035em;
}

.hero-line {
  color: var(--dim);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.4;
  max-width: 30ch;
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.stat {
  padding: 32px 24px;
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat:last-child { border-right: none; }

.stat-value {
  font-family: var(--mono);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  color: var(--text);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--faint);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.section { padding-top: 100px; }

.section-head {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;
}

.section-head::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--line);
}

.section-title {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dim);
}

.project-grid {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}

.project-card {
  display: grid;
  grid-template-columns: 56px 1fr auto;
  column-gap: 24px;
  align-items: start;
  padding: 34px 24px;
  border-bottom: 1px solid var(--line);
  animation: rise 0.5s ease backwards;
  animation-delay: calc(var(--i, 0) * 100ms);
  transition: padding-left 0.3s ease, background 0.3s;
}

.project-card:hover { padding-left: 12px; background: var(--bg-raise); }

.card-no {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--faint);
  padding-top: 7px;
  transition: color 0.25s;
}

.project-card:hover .card-no { color: var(--text); }

.card-main { display: flex; flex-direction: column; gap: 10px; }

.card-title {
  color: var(--text);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  width: fit-content;
}

.card-blurb { color: var(--dim); font-size: 0.95rem; line-height: 1.6; max-width: 72ch; }

.card-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding-top: 6px;
  white-space: nowrap;
}

.card-stats {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--dim);
}

.card-lang {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--faint);
  letter-spacing: 0.08em;
}

.about-bio { color: var(--dim); font-size: 1rem; line-height: 1.75; max-width: 60ch; }

.loop {
  display: block;
  margin-top: 24px;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--faint);
}

.foot {
  margin-top: 140px;
  border-top: 1px solid var(--line);
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.foot-line { color: var(--dim); font-size: 0.88rem; }

.foot-link { color: var(--text); text-decoration: none; }
.foot-link:hover { text-decoration: underline; }

.foot-note { color: var(--faint); font-size: 0.72rem; font-family: var(--mono); }

.rise { animation: rise 0.5s ease backwards; animation-delay: calc(var(--i, 0) * 80ms); }

@keyframes rise { from { opacity: 0; transform: translateY(10px); } }

@media (max-width: 900px) {
  .page { padding: 0 24px 80px; }
  .bar { margin: 0 -24px; padding: 0 24px; }
  .nav-meta { display: none; }
  .hero { min-height: 50vh; }
  .stats-bar { grid-template-columns: repeat(2, 1fr); }
  .stat { padding: 24px 16px; }
  .stat:nth-child(2) { border-right: none; }
  .stat:nth-child(1), .stat:nth-child(2) { border-bottom: 1px solid var(--line); }
  .project-card { grid-template-columns: 32px 1fr; }
  .card-side {
    grid-column: 2;
    flex-direction: row;
    align-items: baseline;
    gap: 16px;
  }
}

@media (max-width: 600px) {
  .project-card { grid-template-columns: 1fr; }
  .card-no { display: none; }
  .card-side { grid-column: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .rise, .project-card { animation: none; }
  .project-card { transition: none; }
  html { scroll-behavior: auto; }
}
`;

export function apply_styles(): void {
  const sheet = document.createElement("style");
  sheet.textContent = css;
  document.head.appendChild(sheet);
}
