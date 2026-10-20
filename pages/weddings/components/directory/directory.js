import { AVAILABLE_WEDDING_DATES, activeRoleFilter, setActiveRoleFilter, computeLiveTelemetry } from '../../data/weddings-store.js';
import { formatINR } from '../../utils/weddings-helpers.js';
import { openWeddingWorkspace } from '../workspace-shell/workspace-shell.js';

export function filterPortfolioByRole(role) {
  setActiveRoleFilter(role);
  document.querySelectorAll('[data-rolebtn]').forEach(btn => {
    if (btn.getAttribute('data-rolebtn') === role) {
      btn.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-gold text-obsidian';
    } else {
      btn.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-card border border-borderWarm text-cream';
    }
  });
  renderCreatorWeddings();
}

export function renderCreatorWeddings() {
  const grid = document.getElementById('creatorWeddingsGrid');
  const rollup = document.getElementById('globalRollupStrip');
  if (!grid || !rollup) return;

  const filtered = activeRoleFilter === 'ALL' 
    ? AVAILABLE_WEDDING_DATES 
    : AVAILABLE_WEDDING_DATES.filter(w => w.role === activeRoleFilter);

  const t = computeLiveTelemetry();

  rollup.innerHTML = `
    <div class="bento-card p-4"><span class="text-xs text-muted block">Active Instances</span><strong class="text-2xl text-gold">${AVAILABLE_WEDDING_DATES.length} Weddings</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Total Guests Tracked</span><strong class="text-2xl text-cream">120 Families</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Attending Pax</span><strong class="text-2xl text-emeraldSS">${t.attendingPax} Pax</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Total Outflow</span><strong class="text-2xl text-gold">${formatINR(t.totalCost)}</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">Paid Out</span><strong class="text-2xl text-emeraldSS">${formatINR(t.totalPaid)}</strong></div>
    <div class="bento-card p-4"><span class="text-xs text-muted block">System Status</span><strong class="text-2xl text-skySS">● Live OS</strong></div>
  `;

  grid.innerHTML = filtered.map(w => `
    <div class="bento-card p-6 space-y-4 hover:border-gold/60 transition cursor-pointer" onclick="openWeddingWorkspace('${w.id}')">
      <div class="flex justify-between items-start">
        <div>
          <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-gold/20 text-gold">${w.role}</span>
          <h3 class="font-serif text-2xl font-bold text-cream mt-2">${w.couple}</h3>
          <span class="text-xs text-muted">📍 ${w.city} • 📅 ${w.dateStr}</span>
        </div>
        <div class="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-2xl">💒</div>
      </div>
      <div class="pt-3 border-t border-borderWarm flex justify-between items-center text-xs">
        <span class="text-emeraldSS font-bold">● Active Workspace</span>
        <button class="btn-gold px-3.5 py-1.5 rounded-lg text-xs font-bold">Open OS →</button>
      </div>
    </div>
  `).join('');
}