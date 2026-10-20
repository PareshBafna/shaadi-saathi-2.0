import { activeWeddingId, AVAILABLE_WEDDING_DATES } from '../../data/weddings-store.js';
import { showToast } from '../../utils/weddings-helpers.js';

export function openWeddingWorkspace(weddingId) {
  const found = AVAILABLE_WEDDING_DATES.find(w => w.id === weddingId) || AVAILABLE_WEDDING_DATES[0];
  document.getElementById('creator-all-weddings')?.classList.add('hidden');
  document.getElementById('creator-single-workspace')?.classList.remove('hidden');

  const coupleEl = document.getElementById('wsBannerCouple');
  const roleBadge = document.getElementById('wsBannerRoleBadge');
  const datesEl = document.getElementById('wsBannerDates');

  if (coupleEl) coupleEl.innerText = found.couple;
  if (roleBadge) roleBadge.innerText = found.role;
  if (datesEl) datesEl.innerText = found.dateStr + ' • ' + found.city;

  // Dynamically load overview module
  if (window.openSubPage) window.openSubPage('overview', true);
}

export function backToAllWeddings() {
  document.getElementById('creator-single-workspace')?.classList.add('hidden');
  document.getElementById('creator-all-weddings')?.classList.remove('hidden');
}

export function toggleAppGridLauncher() {
  const launcher = document.getElementById('wsAppLauncherSection');
  if (launcher) launcher.classList.toggle('hidden');
}

export function renderWorkspaceAppLauncher() {
  const grid = document.getElementById('wsAppIconGrid');
  const alertsBox = document.getElementById('wsCriticalAlertsBox');
  if (!grid) return;

  const apps = [
    { id: 'overview', icon: '📊', name: 'Overview' },
    { id: 'whatsapp', icon: '💬', name: 'WhatsApp' },
    { id: 'hosts', icon: '👑', name: 'Hosts' },
    { id: 'events', icon: '📅', name: 'Events' },
    { id: 'guests', icon: '👥', name: 'Guests' },
    { id: 'web-invite', icon: '💌', name: 'Web Invite' },
    { id: 'rooms', icon: '🏨', name: 'Rooms' },
    { id: 'flights', icon: '✈️', name: 'Flights' },
    { id: 'trains', icon: '🚆', name: 'Trains' },
    { id: 'sangeet', icon: '🎵', name: 'Sangeet' },
    { id: 'guestbook', icon: '📖', name: 'Guestbook' },
    { id: 'gallery', icon: '🖼️', name: 'Gallery' },
    { id: 'shagun', icon: '🧧', name: 'Shagun' },
    { id: 'tasks', icon: '✅', name: 'Tasks' },
    { id: 'vendors', icon: '🤝', name: 'Vendors' },
    { id: 'budget', icon: '💰', name: 'Budget' },
    { id: 'team-access', icon: '🔐', name: 'Team' },
    { id: 'calendar', icon: '🗓️', name: 'Calendar' }
  ];

  grid.innerHTML = apps.map(a => `
    <div onclick="switchWorkspaceModule('${a.id}')" class="app-tile">
      <div class="app-tile-icon">${a.icon}</div>
      <strong class="text-xs text-cream truncate w-full">${a.name}</strong>
    </div>
  `).join('');

  if (alertsBox) {
    alertsBox.innerHTML = `
      <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm"><span class="text-xs text-muted block">RSVP Confirmed</span><strong class="text-base text-emeraldSS">85 Families</strong></div>
      <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm"><span class="text-xs text-muted block">Rooms Assigned</span><strong class="text-base text-gold">42 Rooms</strong></div>
      <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm"><span class="text-xs text-muted block">Flights Pending PNR</span><strong class="text-base text-amberSS">3 Families</strong></div>
      <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm"><span class="text-xs text-muted block">Tasks Open</span><strong class="text-base text-skySS">4 Tasks</strong></div>
    `;
  }
}

export function openImportGuestsModal() { showToast('Open import CSV modal'); }
export function closeImportGuestsModal() {}
export function openSampleExportPreviewModal() {}
export function closeSampleExportPreviewModal() {}
export function downloadSampleGuestCSV() {}
export function exportCurrentGuestsCSV() {}
export function openCreateWeddingModal() {
  document.getElementById('createWeddingModal')?.classList.remove('hidden');
  document.getElementById('createWeddingModal')?.classList.add('flex');
}
export function closeCreateWeddingModal() {
  document.getElementById('createWeddingModal')?.classList.remove('flex');
  document.getElementById('createWeddingModal')?.classList.add('hidden');
}
export function saveNewWedding() {
  showToast('New wedding workspace created!');
  closeCreateWeddingModal();
}