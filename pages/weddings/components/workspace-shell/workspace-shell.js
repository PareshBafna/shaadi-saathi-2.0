import { ALL_SERVICES_ORDERED, currentModuleId, setActiveWeddingId, setCurrentModuleId, messageCreditsRemaining, messageCreditsTotal, guests, familyTasks, weddingsPortfolio } from '../../data/weddings-store.js';
import { renderCreatorWeddings } from '../directory/directory.js';
import { showToast, computeLiveTelemetry } from '../../utils/weddings-helpers.js';
import { navigateTo } from '../../../../global/router.js';

export function renderWorkspaceAppLauncher() {
  const grid = document.getElementById('wsAppIconGrid');
  const alertsBox = document.getElementById('wsCriticalAlertsBox');
  if (!grid || !alertsBox) return;

  grid.innerHTML = ALL_SERVICES_ORDERED.map(m => {
    const active = m.id === currentModuleId;
    return `
      <button onclick="openSubPage('${m.id}')" class="app-tile ${active ? 'active-tile' : ''}">
        <div class="app-tile-icon">${m.icon}</div>
        <div>
          <strong class="block text-xs font-bold text-cream leading-snug">${m.shortName}</strong>
          <span class="text-[10px] text-gold font-medium block mt-0.5">${m.badge}</span>
        </div>
      </button>
    `;
  }).join('');

  const pendingRsvpCount = guests.filter(g => g.status === 'N/A').length;
  const unassignedRoomsCount = guests.filter(g => g.status === 'Attending' && g.needsRoom && (g.members || []).some(m => !m.roomId)).length;
  const openTasksCount = familyTasks.filter(t => !t.done).length;

  alertsBox.innerHTML = `
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

    <div onclick="openSubPage('rsvp')" class="bg-obsidian border border-borderWarm hover:border-gold rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition">
      <div class="flex items-center gap-3">
        <span class="text-lg">👥</span>
        <div>
          <strong class="text-sm text-cream block">${pendingRsvpCount} family awaiting RSVP</strong>
          <span class="text-xs text-muted">Click status button in Guest Table</span>
        </div>
      </div>
      <span class="text-xs font-bold text-gold">Open →</span>
    </div>

    <div onclick="openSubPage('rooms')" class="bg-obsidian border border-borderWarm hover:border-gold rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition">
      <div class="flex items-center gap-3">
        <span class="text-lg">🏨</span>
        <div>
          <strong class="text-sm text-cream block">${unassignedRoomsCount} family needing stay unallotted</strong>
          <span class="text-xs text-muted">Allot in Stay Accomodation</span>
        </div>
      </div>
      <span class="text-xs font-bold text-gold">Open →</span>
    </div>

    <div onclick="openSubPage('tasks')" class="bg-obsidian border border-borderWarm hover:border-gold rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition">
      <div class="flex items-center gap-3">
        <span class="text-lg">✅</span>
        <div>
          <strong class="text-sm text-cream block">${openTasksCount} family checklist tasks open</strong>
          <span class="text-xs text-muted">Tick off in Tasks Checklist</span>
        </div>
      </div>
      <span class="text-xs font-bold text-gold">Open →</span>
    </div>
  `;
}

export function toggleAppGridLauncher() {
  const sec = document.getElementById('wsAppLauncherSection');
  if (sec) sec.classList.toggle('hidden');
}

export function backToAllWeddings(skipPush = false) {
  document.getElementById('creator-all-weddings')?.classList.remove('hidden');
  document.getElementById('creator-single-workspace')?.classList.add('hidden');
  if (!skipPush) navigateTo('creator');
  renderCreatorWeddings();
}

export function openWeddingWorkspace(id, targetModule = 'overview', skipPush = false) {
  setActiveWeddingId(id);
  setCurrentModuleId(targetModule);

  const w = weddingsPortfolio.find(x => x.id === id) || weddingsPortfolio[0];
  const coupleEl = document.getElementById('wsBannerCouple');
  const datesEl = document.getElementById('wsBannerDates');
  const badgeEl = document.getElementById('wsBannerRoleBadge');

  if (coupleEl) coupleEl.textContent = w.couple + ' Wedding';
  if (datesEl) datesEl.textContent = `${w.dates} • ${w.city}`;
  if (badgeEl) badgeEl.textContent = w.userRole || 'CREATOR SUPER ADMIN';

  document.getElementById('creator-all-weddings')?.classList.add('hidden');
  document.getElementById('creator-single-workspace')?.classList.remove('hidden');

  if (typeof window.openSubPage === 'function') {
    window.openSubPage(targetModule, true);
  }

  if (!skipPush) navigateTo('creator', { wedding: id, module: targetModule });
}

export function getSampleCSVContent() {
  return 'Primary_Guest,Side,Group,Status,Pax,Members,Invite_Variant_Tier\n"Anita Sharma",Bride,Family,Attending,3,"Anita|Rajesh|Rohan",all-events\n"Rohit Mehra",Groom,Friends,Attending,2,"Rohit|Karan",2-events';
}

export function openSampleExportPreviewModal() {
  const pre = document.getElementById('sampleExportPre');
  if (pre) pre.textContent = getSampleCSVContent();
  const m = document.getElementById('sampleExportModal');
  if (m) { m.classList.remove('hidden'); m.classList.add('flex'); }
}

export function closeSampleExportPreviewModal() {
  document.getElementById('sampleExportModal')?.classList.add('hidden');
}

export function downloadSampleGuestCSV() {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([getSampleCSVContent()], { type: 'text/csv' }));
  a.download = 'Shaadi-Saathi-Sample.csv';
  a.click();
}

export function exportCurrentGuestsCSV() {
  downloadSampleGuestCSV();
  showToast('Exported Live CSV');
}

export function openImportGuestsModal() {
  const m = document.getElementById('importGuestsModal');
  if (m) { m.classList.remove('hidden'); m.classList.add('flex'); }
}

export function closeImportGuestsModal() {
  document.getElementById('importGuestsModal')?.classList.add('hidden');
}

export function openCreateWeddingModal() {
  const m = document.getElementById('createWeddingModal');
  if (m) { m.classList.remove('hidden'); m.classList.add('flex'); }
}

export function closeCreateWeddingModal() {
  document.getElementById('createWeddingModal')?.classList.add('hidden');
}

export function saveNewWedding() {
  const coupleInput = document.getElementById('cwCoupleInput');
  const cityInput = document.getElementById('cwCityInput');
  const couple = coupleInput?.value.trim();
  if (!couple) return;
  weddingsPortfolio.unshift({
    id: 'w-' + Date.now(),
    couple,
    city: cityInput?.value.trim() || 'Jaipur',
    dates: '18–20 Nov 2026',
    userRole: 'CREATOR SUPER ADMIN',
    roleBadgeColor: 'bg-gold text-obsidian',
    rolePermissionsDesc: 'Full Creator & Planner OS Control',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
    isLive: false,
    telemetry: computeLiveTelemetry()
  });
  if (coupleInput) coupleInput.value = '';
  if (cityInput) cityInput.value = '';
  closeCreateWeddingModal();
  renderCreatorWeddings();
}