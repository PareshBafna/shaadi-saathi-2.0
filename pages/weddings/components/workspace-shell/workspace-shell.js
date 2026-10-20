import {
  ALL_SERVICES_ORDERED, currentModuleId, messageCreditsRemaining, messageCreditsTotal,
  weddingsPortfolio, activeWeddingId, guests, familyTasks
} from '../../data/weddings-store.js';

export function renderWorkspaceShell(onBackToDirectory, onSelectModule) {
  const container = document.getElementById('creator-single-workspace');
  if (!container) return;

  const w = weddingsPortfolio.find(x => x.id === activeWeddingId) || weddingsPortfolio[0];
  const pendingRsvpCount = guests.filter(g => g.status === 'N/A').length;
  const unassignedRoomsCount = guests.filter(g => g.status === 'Attending' && g.needsRoom && (g.members || []).some(m => !m.roomId)).length;
  const openTasksCount = familyTasks.filter(t => !t.done).length;

  container.innerHTML = `
    <!-- Top Workspace Header Bar -->
    <div class="bento-card p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div class="flex flex-wrap items-center gap-3.5">
        <button id="btn-back-to-directory" class="px-4 py-2.5 rounded-xl bg-card border border-borderWarm hover:border-gold text-sm font-bold text-gold">← All Weddings by Role</button>
        <div>
          <div class="flex items-center gap-2">
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-cream leading-tight">${w.couple} Wedding</h2>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-gold/20 text-gold">${w.userRole}</span>
          </div>
          <span class="text-sm text-muted">${w.dates} • ${w.city}</span>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2.5">
        <button id="btnToggleLauncher" class="btn-gold px-4 py-2.5 rounded-xl text-sm font-bold shadow">
          📱 Show / Hide App Launcher
        </button>
        <button id="btn-open-import-modal" class="px-4 py-2.5 rounded-xl bg-card border border-gold/40 text-gold text-sm font-bold">📥 Import CSV</button>
        <button id="btn-open-sample-export" class="px-4 py-2.5 rounded-xl bg-card border border-borderWarm text-cream text-sm font-bold">👁️ Sample Export</button>
        <button id="btn-export-live-csv" class="px-4 py-2.5 rounded-xl bg-emeraldSS/20 border border-emeraldSS/40 text-emeraldSS text-sm font-bold">⬇ Export Live CSV</button>
      </div>
    </div>

    <!-- APP LAUNCHER GRID + CRITICAL ALERTS -->
    <div id="wsAppLauncherSection" class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
      <div class="xl:col-span-8 bento-card p-5 sm:p-6 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span class="text-xs font-mono uppercase tracking-wider text-gold">Wedding OS App Launcher</span>
            <h3 class="font-serif text-2xl font-bold text-cream">All Wedding Services — Tap any tool to open below</h3>
          </div>
          <span class="text-xs font-mono text-gold">Default: Telemetry</span>
        </div>
        <div id="wsAppIconGrid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          ${ALL_SERVICES_ORDERED.map(m => `
            <button data-moduleid="\${m.id}" class="app-tile module-tile-btn \${m.id === currentModuleId ? 'active-tile' : ''}">
              <div class="app-tile-icon">\${m.icon}</div>
              <div>
                <strong class="block text-xs font-bold text-cream leading-snug">\${m.shortName}</strong>
                <span class="text-[10px] text-gold font-medium block mt-0.5">\${m.badge}</span>
              </div>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="xl:col-span-4 bento-card p-5 sm:p-6 space-y-4 border-gold/40">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono uppercase tracking-wider text-gold font-bold">⚡ Critical Alerts &amp; Credits</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold/20 text-gold">Royal Gold (₹14,999)</span>
        </div>
        <div class="space-y-3">
          <div class="bg-obsidian border border-gold/40 rounded-2xl p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-gold">⚠️ ${messageCreditsRemaining.toLocaleString()} credits remaining</span>
              <span class="text-xs text-muted">of ${messageCreditsTotal.toLocaleString()}</span>
            </div>
            <div class="w-full h-2 bg-surface rounded-full overflow-hidden">
              <div class="bg-gold h-full" style="width:${Math.round((messageCreditsRemaining / messageCreditsTotal) * 100)}%"></div>
            </div>
            <p class="text-xs text-muted">1 credit = 1 WhatsApp message. Extra credits @ ₹1/message.</p>
          </div>

          <div data-moduleid="rsvp" class="alert-quick-nav bg-obsidian border border-borderWarm hover:border-gold rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition">
            <div class="flex items-center gap-3">
              <span class="text-lg">👥</span>
              <div>
                <strong class="text-sm text-cream block">${pendingRsvpCount} family awaiting RSVP</strong>
                <span class="text-xs text-muted">Click status button in Guest Table</span>
              </div>
            </div>
            <span class="text-xs font-bold text-gold">Open →</span>
          </div>

          <div data-moduleid="rooms" class="alert-quick-nav bg-obsidian border border-borderWarm hover:border-gold rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition">
            <div class="flex items-center gap-3">
              <span class="text-lg">🏨</span>
              <div>
                <strong class="text-sm text-cream block">${unassignedRoomsCount} family needing stay unallotted</strong>
                <span class="text-xs text-muted">Allot in Stay Accomodation</span>
              </div>
            </div>
            <span class="text-xs font-bold text-gold">Open →</span>
          </div>

          <div data-moduleid="tasks" class="alert-quick-nav bg-obsidian border border-borderWarm hover:border-gold rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition">
            <div class="flex items-center gap-3">
              <span class="text-lg">✅</span>
              <div>
                <strong class="text-sm text-cream block">${openTasksCount} family checklist tasks open</strong>
                <span class="text-xs text-muted">Tick off in Tasks Checklist</span>
              </div>
            </div>
            <span class="text-xs font-bold text-gold">Open →</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ACTIVE SERVICE VIEWPORT -->
    <div id="activeModuleViewport" class="w-full space-y-6"></div>
  `;

  // Bind Actions
  document.getElementById('btn-back-to-directory').addEventListener('click', onBackToDirectory);

  document.getElementById('btnToggleLauncher').addEventListener('click', () => {
    document.getElementById('wsAppLauncherSection').classList.toggle('hidden');
  });

  container.querySelectorAll('.module-tile-btn, .alert-quick-nav').forEach(btn => {
    btn.addEventListener('click', () => {
      onSelectModule(btn.dataset.moduleid);
    });
  });

  document.getElementById('btn-open-import-modal').addEventListener('click', () => window.WeddingsApp.openImportGuestsModal());
  document.getElementById('btn-open-sample-export').addEventListener('click', () => window.WeddingsApp.openSampleExportPreviewModal());
  document.getElementById('btn-export-live-csv').addEventListener('click', () => window.WeddingsApp.exportCurrentGuestsCSV());
}