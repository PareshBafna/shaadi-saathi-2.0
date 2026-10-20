import { weddingsPortfolio, activeRoleFilter, setActiveRoleFilter } from '../../data/weddings-store.js';
import { computeLiveTelemetry, buildTelemetryCardHTML } from '../../utils/weddings-helpers.js';

export function filterPortfolioByRole(role) {
  setActiveRoleFilter(role);
  document.querySelectorAll('#roleFilterButtons button').forEach(b => {
    if (b.dataset.rolebtn === role) {
      b.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-gold text-obsidian';
    } else {
      b.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-card border border-borderWarm text-cream';
    }
  });
  renderCreatorWeddings();
}

export function renderCreatorWeddings() {
  const strip = document.getElementById('globalRollupStrip');
  const grid = document.getElementById('creatorWeddingsGrid');
  if (!strip || !grid) return;

  const tLive = computeLiveTelemetry();
  strip.innerHTML = `
    <div class="bento-card p-4"><span class="text-xs text-muted block">Your Weddings</span><strong class="text-xl font-extrabold text-cream">${weddingsPortfolio.length}</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Active Guests</span><strong class="text-xl font-extrabold text-emeraldSS">${tLive.guestsTotal} Families</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Events</span><strong class="text-xl font-extrabold text-gold">Unlimited (${tLive.eventsCount})</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Room Allotments</span><strong class="text-xl font-extrabold text-cream">${tLive.roomsTotal} Rooms</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Flight / Train</span><strong class="text-base font-extrabold text-skySS">✈️ ${tLive.flightPax} • 🚆 ${tLive.trainPax}</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Total Budget</span><strong class="text-base font-extrabold text-gold">${formatINR(tLive.budgetTotal)}</strong></div>
  `;

  const filtered = activeRoleFilter === 'ALL'
    ? weddingsPortfolio
    : weddingsPortfolio.filter(w => w.userRole === activeRoleFilter);

  grid.innerHTML = filtered.map(w => {
    const t = w.isLive ? tLive : w.telemetry;
    const actionBtn = w.userRole === 'INVITED GUEST PASS'
      ? `<button onclick="typeof switchRootMode === 'function' ? switchRootMode('guest') : openWeddingWorkspace('${w.id}')" class="w-full py-3 rounded-xl bg-emeraldSS/20 border border-emeraldSS/40 text-emeraldSS text-sm font-bold">Open Private Guest Pass for ${w.couple} →</button>`
      : `<button onclick="openWeddingWorkspace('${w.id}')" class="w-full btn-gold py-3 rounded-xl text-sm font-bold">Open ${w.couple} Workspace as ${w.userRole} →</button>`;

    return `
      <div class="bento-card overflow-hidden flex flex-col justify-between">
        <div>
          <div class="relative h-40">
            <img src="${w.img}" class="w-full h-full object-cover opacity-45" alt="${w.couple}" />
            <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent p-5 flex flex-col justify-between">
              <div class="flex justify-between items-center">
                <span class="px-3 py-1 rounded-full text-xs font-mono font-bold ${w.roleBadgeColor}">YOUR ROLE: ${w.userRole}</span>
                <span class="px-2.5 py-1 rounded-lg bg-obsidian/80 text-xs text-cream">${w.dates}</span>
              </div>
              <div>
                <h3 class="font-serif text-3xl font-bold text-cream">${w.couple}</h3>
                <span class="text-xs text-gold block">${w.city} • ${w.rolePermissionsDesc}</span>
              </div>
            </div>
          </div>
          <div class="p-5">${buildTelemetryCardHTML(t)}</div>
        </div>
        <div class="px-5 pb-5">${actionBtn}</div>
      </div>
    `;
  }).join('');
}