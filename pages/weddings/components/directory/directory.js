import { weddingsPortfolio, activeRoleFilter, setActiveRoleFilter } from '../../data/weddings-store.js';
import { computeLiveTelemetry, buildTelemetryCardHTML, formatINR } from '../../utils/weddings-helpers.js';

export function renderDirectoryView(onOpenWorkspace) {
  const container = document.getElementById('creator-all-weddings');
  if (!container) return;

  const tLive = computeLiveTelemetry();

  const filtered = activeRoleFilter === 'ALL'
    ? weddingsPortfolio
    : weddingsPortfolio.filter(w => w.userRole === activeRoleFilter);

  container.innerHTML = `
    <div class="bento-card p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div>
        <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gold/20 text-gold">👑 Planner OS • Role-Based Wedding Directory</span>
        <h1 class="font-serif text-3xl sm:text-4xl font-bold text-cream mt-2">Your Weddings by Role</h1>
        <p class="text-sm text-muted mt-1">View every wedding you are part of, organized by your assigned role. Click any wedding to launch its workspace.</p>
      </div>
      <div class="flex flex-wrap items-center gap-2.5">
        <button id="btn-open-create-wedding" class="btn-gold px-5 py-3 rounded-xl text-sm font-bold shrink-0">+ Create New Wedding</button>
      </div>
    </div>

    <!-- Role Filter Tabs -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex flex-wrap gap-2" id="roleFilterButtons">
        ${['ALL', 'CREATOR SUPER ADMIN', 'FAMILY HOST ADMIN', 'LOGISTICS COORDINATOR', 'INVITED GUEST PASS'].map(r => `
          <button data-rolebtn="\${r}" class="role-filter-btn px-4 py-2 rounded-xl text-xs font-bold \${activeRoleFilter === r ? 'bg-gold text-obsidian' : 'bg-card border border-borderWarm text-cream'}">
            \${r === 'ALL' ? 'All Roles (4 Weddings)' : r}
          </button>
        `).join('')}
      </div>
    </div>

    <div id="globalRollupStrip" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      <div class="bento-card p-4"><span class="text-xs text-muted block">Your Weddings</span><strong class="text-xl font-extrabold text-cream">${weddingsPortfolio.length}</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Active Guests</span><strong class="text-xl font-extrabold text-emeraldSS">${tLive.guestsTotal} Families</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Events</span><strong class="text-xl font-extrabold text-gold">Unlimited (${tLive.eventsCount})</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Room Allotments</span><strong class="text-xl font-extrabold text-cream">${tLive.roomsTotal} Rooms</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Flight / Train</span><strong class="text-base font-extrabold text-skySS">✈️ ${tLive.flightPax} • 🚆 ${tLive.trainPax}</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Total Budget</span><strong class="text-base font-extrabold text-gold">${formatINR(tLive.budgetTotal)}</strong></div>
    </div>

    <div id="creatorWeddingsGrid" class="grid grid-cols-1 xl:grid-cols-2 gap-6">
      ${filtered.map(w => {
        const t = w.isLive ? tLive : w.telemetry;
        return `
          <div class="bento-card overflow-hidden flex flex-col justify-between">
            <div>
              <div class="relative h-40">
                <img src="\${w.img}" class="w-full h-full object-cover opacity-45" />
                <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent p-5 flex flex-col justify-between">
                  <div class="flex justify-between items-center">
                    <span class="px-3 py-1 rounded-full text-xs font-mono font-bold \${w.roleBadgeColor}">YOUR ROLE: \${w.userRole}</span>
                    <span class="px-2.5 py-1 rounded-lg bg-obsidian/80 text-xs text-cream">\${w.dates}</span>
                  </div>
                  <div>
                    <h3 class="font-serif text-3xl font-bold text-cream">\${w.couple}</h3>
                    <span class="text-xs text-gold block">${w.city} •${w.rolePermissionsDesc}</span>
                  </div>
                </div>
              </div>
              <div class="p-5">\${buildTelemetryCardHTML(t)}</div>
            </div>
            <div class="px-5 pb-5">
              <button data-weddingid="\${w.id}" class="btn-launch-wedding w-full btn-gold py-3 rounded-xl text-sm font-bold">
                Open ${w.couple} Workspace as${w.userRole} →
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Bind Role Filter Tabs
  container.querySelectorAll('.role-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setActiveRoleFilter(btn.dataset.rolebtn);
      renderDirectoryView(onOpenWorkspace);
    });
  });

  // Bind Open Workspace Buttons
  container.querySelectorAll('.btn-launch-wedding').forEach(btn => {
    btn.addEventListener('click', () => {
      onOpenWorkspace(btn.dataset.weddingid);
    });
  });

  // Bind Create Wedding Modal Trigger
  const createBtn = document.getElementById('btn-open-create-wedding');
  if (createBtn) {
    createBtn.addEventListener('click', () => {
      window.WeddingsApp.openCreateWeddingModal();
    });
  }
}