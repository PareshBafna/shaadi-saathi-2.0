// "All Weddings" portfolio screen.
import { esc } from '../shared/ui.js';
import { weddingsPortfolio } from '../shared/store.js';
import { EMPTY_TELEMETRY } from '../shared/helpers.js';
import { buildTelemetryCardHTML } from '../shared/telemetry-card.js';

export function buildDirectoryHTML() {
  return `
    <div id="creator-all-weddings" class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bento-card p-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-gold">Multi-Role Wedding OS</span>
          <h1 class="font-serif text-3xl font-bold text-cream mt-1">Shaadi Saathi Multi-Wedding Portfolio</h1>
          <p class="text-sm text-muted">Manage all active client weddings, roles, and live workflows below.</p>
        </div>
        <button type="button" data-action="openCreateModal" class="btn-gold px-5 py-3 rounded-xl text-xs font-bold shrink-0">+ Create New Wedding</button>
      </div>
      <div id="creatorWeddingsGrid" class="grid grid-cols-1 lg:grid-cols-2 gap-6"></div>
    </div>`;
}

// Live first, then upcoming (soonest first), then past (latest first).
function sortWeddings(list) {
  const now = Date.now();
  const time = w => (w.start ? new Date(w.start).getTime() : 0);
  return [...list].sort((a, b) => {
    if (a.isLive !== b.isLive) return a.isLive ? -1 : 1;
    const aPast = time(a) < now, bPast = time(b) < now;
    if (aPast !== bPast) return aPast ? 1 : -1;
    return aPast ? time(b) - time(a) : time(a) - time(b);
  });
}

const actionButton = w => w.userRole === 'Guest'
  ? `<button type="button" data-go="guest" class="w-full py-3 rounded-xl bg-amberSS/20 border border-amberSS/40 text-amberSS text-sm font-bold hover:bg-amberSS hover:text-obsidian transition">View Wedding Details (Guest Pass) →</button>`
  : `<button type="button" data-action="openWedding" data-args="${w.id}" class="w-full btn-gold py-3 rounded-xl text-sm font-bold">View Wedding Details (${w.userRole}) →</button>`;

const cardHtml = w => `
  <div class="bento-card overflow-hidden flex flex-col justify-between">
    <div>
      <div class="p-5 bg-surface border-b border-borderWarm flex items-center justify-between gap-4">
        <div>
          <h3 class="font-serif text-3xl font-bold text-cream">${esc(w.couple)}</h3>
          <span class="text-xs text-gold block mt-0.5">${esc(w.city)}</span>
        </div>
        <span class="px-3 py-1 rounded-lg bg-gold text-obsidian text-xs font-extrabold tracking-wide shadow-sm shrink-0">📅 ${esc(w.dates)}</span>
      </div>
      <div class="p-5">${buildTelemetryCardHTML(w.telemetry || EMPTY_TELEMETRY)}</div>
    </div>
    <div class="px-5 pb-5">${actionButton(w)}</div>
  </div>`;

export function renderDirectory() {
  const grid = document.getElementById('creatorWeddingsGrid');
  if (grid) grid.innerHTML = sortWeddings(weddingsPortfolio).map(cardHtml).join('');
}
