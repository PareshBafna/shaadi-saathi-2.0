import {
  weddingsPortfolio,
  ROLES,
  activeWeddingId,
  setActiveWeddingId,
  currentModuleId
} from '../../data/weddings-store.js';
import { computeLiveTelemetry, formatINR, showToast } from '../../utils/weddings-helpers.js';
import { renderCreatorWeddings } from '../directory/directory.js';
import { navigateTo } from '../../../../global/core/router.js';

export const WORKSPACE_APPS = [
  { id: 'overview', icon: '📊', label: 'Telemetry' },
  { id: 'whatsapp', icon: '💬', label: 'WhatsApp' },
  { id: 'hosts', icon: '👑', label: 'Family Hosts' },
  { id: 'events', icon: '📅', label: 'Events' },
  { id: 'guests', icon: '👥', label: 'Guest List' },
  { id: 'web-invite', icon: '💌', label: 'Web Invite' },
  { id: 'rooms', icon: '🏨', label: 'Rooms' },
  { id: 'flights', icon: '✈️', label: 'Flights' },
  { id: 'trains', icon: '🚆', label: 'Trains' },
  { id: 'sangeet', icon: '🎵', label: 'Sangeet' },
  { id: 'guestbook', icon: '📖', label: 'Guestbook' },
  { id: 'gallery', icon: '🖼️', label: 'Gallery' },
  { id: 'shagun', icon: '🧧', label: 'Shagun' },
  { id: 'tasks', icon: '✅', label: 'Tasks' },
  { id: 'vendors', icon: '🤝', label: 'Vendors' },
  { id: 'budget', icon: '₹', label: 'Budget' },
  { id: 'calendar', icon: '🗓️', label: 'Calendar' },
  { id: 'team-access', icon: '🔐', label: 'Role Access' }
];

export function buildWorkspaceShellHTML() {
  return `
    <!-- Single Wedding Workspace View -->
    <div id="creator-single-workspace" class="hidden space-y-6">
      <div class="bento-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <button onclick="backToAllWeddings()" class="px-4 py-2 rounded-xl bg-card border border-borderWarm text-xs font-bold text-cream hover:bg-gold hover:text-obsidian transition">← All Weddings</button>
          <div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <h2 id="wsBannerCouple" class="font-serif text-3xl font-bold text-cream">Wedding Workspace</h2>
              <span id="wsBannerRoleBadge" class="px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase bg-gold text-obsidian">ROLE: CREATOR</span>
            </div>
            <span id="wsBannerDates" class="text-xs text-gold block mt-0.5">18–20 Nov 2026 • Udaipur</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="toggleAppGridLauncher()" class="px-4 py-2.5 rounded-xl bg-gold/20 border border-gold/40 text-gold text-xs font-bold hover:bg-gold hover:text-obsidian transition">📂 Toggle App Launcher</button>
        </div>
      </div>

      <!-- App Launcher Section -->
      <div id="wsAppLauncherSection" class="bento-card p-6 space-y-5">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <h3 class="font-serif text-xl font-bold text-cream">Shaadi Saathi OS App Launcher (18 Modules)</h3>
          <span class="text-xs text-muted">Click any module icon to switch feature workspace</span>
        </div>
        <div id="wsAppIconGrid" class="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-3"></div>
        <div id="wsCriticalAlertsBox" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-borderWarm"></div>
      </div>

      <!-- Active Module Viewport -->
      <div id="activeModuleViewport" class="space-y-6"></div>
    </div>

    <!-- Create New Wedding Modal -->
    <div id="createWeddingModal" class="fixed inset-0 bg-obsidian/80 backdrop-blur-sm hidden items-center justify-center z-50 p-4">
      <div class="bento-card p-6 max-w-md w-full space-y-4 bg-obsidian border border-gold/40">
        <h3 class="font-serif text-2xl font-bold text-cream">Create New Wedding Instance</h3>
        <div class="space-y-3">
          <div>
            <label class="text-xs text-muted block mb-1">Couple Names</label>
            <input type="text" id="cwCoupleInput" placeholder="e.g. Aarav & Ananya" class="ss-input w-full" />
          </div>
          <div>
            <label class="text-xs text-muted block mb-1">City / Venue</label>
            <input type="text" id="cwCityInput" placeholder="e.g. Udaipur, Rajasthan" class="ss-input w-full" />
          </div>
          <div>
            <label class="text-xs text-muted block mb-1">Dates</label>
            <input type="text" id="cwDatesInput" placeholder="e.g. 18–20 Nov 2026" class="ss-input w-full" />
          </div>
          <div>
            <label class="text-xs text-muted block mb-1">Your Assigned Role</label>
            <select id="cwRoleInput" class="ss-input w-full">
              <option value="Creator">Creator</option>
              <option value="Host">Host</option>
              <option value="User">User</option>
              <option value="Guest">Guest</option>
            </select>
          </div>
        </div>
        <div class="flex justify-end gap-3 pt-2">
          <button onclick="closeCreateWeddingModal()" class="px-4 py-2 rounded-xl bg-card border border-borderWarm text-xs font-bold text-cream">Cancel</button>
          <button onclick="saveNewWedding()" class="btn-gold px-5 py-2 rounded-xl text-xs font-bold">Create Workspace</button>
        </div>
      </div>
    </div>
  `;
}

export function renderWorkspaceAppLauncher() {
  const grid = document.getElementById('wsAppIconGrid');
  const alerts = document.getElementById('wsCriticalAlertsBox');
  if (!grid) return;

  grid.innerHTML = WORKSPACE_APPS.map(app => {
    const isActive = currentModuleId === app.id;
    const cls = isActive
      ? 'p-3 rounded-xl bg-gold text-obsidian font-bold flex flex-col items-center justify-center gap-1.5 text-center shadow transition cursor-pointer'
      : 'p-3 rounded-xl bg-surface border border-borderWarm text-cream hover:border-gold/50 flex flex-col items-center justify-center gap-1.5 text-center transition cursor-pointer';
    return `
      <button onclick="openSubPage('${app.id}')" class="${cls}">
        <span class="text-2xl">${app.icon}</span>
        <span class="text-[11px] leading-tight">${app.label}</span>
      </button>
    `;
  }).join('');

  if (alerts) {
    const t = computeLiveTelemetry();
    alerts.innerHTML = `
      <div class="p-3 rounded-xl bg-surface border border-borderWarm"><span class="text-[11px] text-muted block">Awaiting RSVPs</span><strong class="text-sm text-amberSS">${t.awaitingCount} Families Pending</strong></div>
      <div class="p-3 rounded-xl bg-surface border border-borderWarm"><span class="text-[11px] text-muted block">Vacant Rooms</span><strong class="text-sm text-emeraldSS">${t.roomsVacant} Available</strong></div>
      <div class="p-3 rounded-xl bg-surface border border-borderWarm"><span class="text-[11px] text-muted block">Vendor Balance Due</span><strong class="text-sm text-gold">${formatINR(t.budgetDue)}</strong></div>
      <div class="p-3 rounded-xl bg-surface border border-borderWarm"><span class="text-[11px] text-muted block">Pending Tasks</span><strong class="text-sm text-skySS">${t.tasksPending + t.tasksInProg} Open Tasks</strong></div>
    `;
  }
}

export function toggleAppGridLauncher() {
  const el = document.getElementById('wsAppLauncherSection');
  if (el) el.classList.toggle('hidden');
}

export function openWeddingWorkspace(weddingId = 'w1', initialModule = 'overview', skipPush = false) {
  setActiveWeddingId(weddingId);
  const w = weddingsPortfolio.find(item => item.id === weddingId) || weddingsPortfolio[0];

  const allView = document.getElementById('creator-all-weddings');
  const singleView = document.getElementById('creator-single-workspace');
  if (allView) allView.classList.add('hidden');
  if (singleView) singleView.classList.remove('hidden');

  const coupleEl = document.getElementById('wsBannerCouple');
  const roleEl = document.getElementById('wsBannerRoleBadge');
  const datesEl = document.getElementById('wsBannerDates');

  if (coupleEl) coupleEl.textContent = w.couple;
  if (roleEl) {
    roleEl.textContent = `ROLE: ${w.userRole.toUpperCase()}`;
    roleEl.className = `px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase ${w.roleBadgeColor}`;
  }
  if (datesEl) datesEl.textContent = `${w.dates} • ${w.city}`;

  if (!skipPush) {
    navigateTo('creator', { wedding: w.id, module: initialModule });
  }

  if (typeof window.openSubPage === 'function') {
    window.openSubPage(initialModule, true);
  }
}

export function backToAllWeddings(skipPush = false) {
  const allView = document.getElementById('creator-all-weddings');
  const singleView = document.getElementById('creator-single-workspace');
  if (singleView) singleView.classList.add('hidden');
  if (allView) allView.classList.remove('hidden');

  if (!skipPush) {
    navigateTo('creator');
  }
  renderCreatorWeddings();
}

export function openCreateWeddingModal() {
  const modal = document.getElementById('createWeddingModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

export function closeCreateWeddingModal() {
  const modal = document.getElementById('createWeddingModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

export function saveNewWedding() {
  const couple = document.getElementById('cwCoupleInput')?.value?.trim();
  const city = document.getElementById('cwCityInput')?.value?.trim();
  const dates = document.getElementById('cwDatesInput')?.value?.trim() || 'TBD 2026';
  const roleKey = document.getElementById('cwRoleInput')?.value || 'Creator';

  if (!couple || !city) {
    showToast('Please enter Couple Names and City');
    return;
  }

  const roleConfig = Object.values(ROLES).find(r => r.id === roleKey) || ROLES.CREATOR;

  weddingsPortfolio.unshift({
    id: 'w' + (weddingsPortfolio.length + 1),
    couple,
    dates,
    city,
    userRole: roleConfig.id,
    roleBadgeColor: roleConfig.badgeClass,
    rolePermissionsDesc: roleConfig.desc,
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    isLive: true,
    telemetry: null
  });

  closeCreateWeddingModal();
  renderCreatorWeddings();
  showToast(`Created ${couple} (${roleConfig.id})`);
}

// Keep modal/CSV helpers exported so existing modules calling them never break
export function openImportGuestsModal() { showToast('Import CSV modal ready'); }
export function closeImportGuestsModal() {}
export function openSampleExportPreviewModal() {}
export function closeSampleExportPreviewModal() {}
export function downloadSampleGuestCSV() { showToast('Downloading Sample CSV...'); }
export function exportCurrentGuestsCSV() { showToast('Exporting Guests CSV...'); }