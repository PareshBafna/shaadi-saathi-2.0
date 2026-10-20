import { guests, familyTasks, weddingsPortfolio, ss } from '../../data/weddings-store.js';
import { ALL_SERVICES_ORDERED } from '../../data/services.js';

export function renderWorkspaceAppLauncher() {
  const grid = document.getElementById('wsAppIconGrid');
  const alertsBox = document.getElementById('wsCriticalAlertsBox');
  if (!grid || !alertsBox) return;

  grid.innerHTML = ALL_SERVICES_ORDERED.map(m => {
    const active = m.id === ss.currentModuleId;
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
        <span class="text-xs font-bold text-gold">⚠️ ${ss.messageCreditsRemaining.toLocaleString()} credits remaining</span>
        <span class="text-xs text-muted">of ${ss.messageCreditsTotal.toLocaleString()}</span>
      </div>
      <div class="w-full h-2 bg-surface rounded-full overflow-hidden">
        <div class="bg-gold h-full" style="width:${Math.round((ss.messageCreditsRemaining / ss.messageCreditsTotal) * 100)}%"></div>
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
export function backToAllWeddings() {
  document.getElementById('creator-all-weddings').classList.remove('hidden');
  document.getElementById('creator-single-workspace').classList.add('hidden');
  window.renderCreatorWeddings();
}

export function openWeddingWorkspace(id, targetModule) {
  const w = weddingsPortfolio.find(x => x.id === id) || weddingsPortfolio[0];
  ss.activeWeddingId = w.id;
  document.getElementById('wsBannerCouple').textContent = w.couple + ' Wedding';
  document.getElementById('wsBannerDates').textContent = `${w.dates} • ${w.city}`;
  const badge = document.getElementById('wsBannerRoleBadge');
  if (badge) badge.textContent = w.userRole || 'CREATOR SUPER ADMIN';
  document.getElementById('creator-all-weddings').classList.add('hidden');
  document.getElementById('creator-single-workspace').classList.remove('hidden');
  window.openSubPage(targetModule || 'overview', true);
}
