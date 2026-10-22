import { weddingsPortfolio, activeWeddingId, setActiveWeddingId } from '../../data/weddings-store.js';
import { buildTelemetryCardHTML } from '../../utils/weddings-helpers.js';

export function buildDirectoryViewHTML() {
  setActiveWeddingId('ALL');

  return `
    <div id="creator-all-weddings" class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bento-card p-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-gold">Multi-Role Wedding OS</span>
          <h1 class="font-serif text-3xl font-bold text-cream mt-1">Shaadi Saathi Multi-Wedding Portfolio</h1>
          <p class="text-sm text-muted">Manage all active client weddings, roles, and live workflows below.</p>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="openCreateWeddingModal()" class="btn-gold px-5 py-3 rounded-xl text-xs font-bold shrink-0">+ Create New Wedding</button>
        </div>
      </div>

      <div id="creatorWeddingsGrid" class="grid grid-cols-1 lg:grid-cols-2 gap-6"></div>
    </div>
  `;
}

export function selectWeddingTab(weddingId) {
  setActiveWeddingId(weddingId);
  renderCreatorWeddings();
}

export function filterPortfolioByRole(role) {
  selectWeddingTab('ALL');
}

export function renderCreatorWeddings() {
  const grid = document.getElementById('creatorWeddingsGrid');
  if (!grid) return;

  setActiveWeddingId('ALL');
  const filtered = [...weddingsPortfolio];
  const now = new Date('2026-10-22').getTime();

  const getTimestamp = (w) => {
    if (w.id === 'w1') return new Date('2026-11-18').getTime(); // Aarav & Ananya
    if (w.id === 'w2') return new Date('2026-02-19').getTime(); // Lachi & Karanji
    if (w.id === 'w3') return new Date('2026-11-05').getTime(); // Dushyant & Riya
    if (w.id === 'w4') return new Date('2026-02-12').getTime(); // Siddhi & Anand
    return 0;
  };

  filtered.sort((a, b) => {
    if (a.isLive && !b.isLive) return -1;
    if (!a.isLive && b.isLive) return 1;

    const timeA = getTimestamp(a);
    const timeB = getTimestamp(b);

    const aIsPast = timeA < now;
    const bIsPast = timeB < now;

    if (!aIsPast && bIsPast) return -1;
    if (aIsPast && !bIsPast) return 1;

    if (!aIsPast && !bIsPast) {
      return timeA - timeB;
    }

    return timeB - timeA;
  });

  grid.className = 'grid grid-cols-1 lg:grid-cols-2 gap-6';
  grid.innerHTML = filtered.map(w => {
    const t = w.telemetry || { guestsTotal: 0, attendingPax: 0, confirmedPct: 0, attendingCount: 0, declinedCount: 0, awaitingCount: 0, roomsTotal: 0, roomsFull: 0, roomsPartial: 0, roomsVacant: 0, eventsCount: 0, flightPax: 0, trainPax: 0, budgetTotal: 0, budgetPaid: 0, budgetDue: 0, budgetPaidPct: 0, tasksTotal: 0, tasksDone: 0, tasksInProg: 0, tasksPending: 0 };
    const isGuest = w.userRole === 'Guest';

    const actionBtn = isGuest
      ? `<button onclick="typeof switchRootMode === 'function' ? switchRootMode('guest') : openWeddingWorkspace('${w.id}')" class="w-full py-3 rounded-xl bg-amberSS/20 border border-amberSS/40 text-amberSS text-sm font-bold hover:bg-amberSS hover:text-obsidian transition">View Wedding Details (Guest Pass) →</button>`
      : `<button onclick="openWeddingWorkspace('${w.id}')" class="w-full btn-gold py-3 rounded-xl text-sm font-bold">View Wedding Details (${w.userRole}) →</button>`;

    return `
      <div class="bento-card overflow-hidden flex flex-col justify-between">
        <div>
          <div class="p-5 bg-surface border-b border-borderWarm flex items-center justify-between gap-4">
            <div>
              <h3 class="font-serif text-3xl font-bold text-cream">${w.couple}</h3>
              <span class="text-xs text-gold block mt-0.5">${w.city}</span>
            </div>
            <span class="px-3 py-1 rounded-lg bg-gold text-obsidian text-xs font-extrabold tracking-wide shadow-sm shrink-0">📅 ${w.dates}</span>
          </div>
          <div class="p-5">${buildTelemetryCardHTML(t)}</div>
        </div>
        <div class="px-5 pb-5">${actionBtn}</div>
      </div>
    `;
  }).join('');
}

Object.assign(window, {
  selectWeddingTab,
  filterPortfolioByRole
});