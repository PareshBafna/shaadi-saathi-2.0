// "Create New Wedding" dialog.
import { weddingsPortfolio, ROLES } from '../shared/store.js';
import { showToast } from '../../../components/toast.js';
import { renderDirectory } from './directory.js';

export function buildCreateModalHTML() {
  return `
    <div id="createWeddingModal" role="dialog" aria-modal="true" aria-labelledby="cwTitle" class="fixed inset-0 bg-obsidian/80 backdrop-blur-sm hidden items-center justify-center z-50 p-4">
      <div class="bento-card p-6 max-w-md w-full space-y-4 bg-obsidian border border-gold/40">
        <h3 id="cwTitle" class="font-serif text-2xl font-bold text-cream">Create New Wedding Instance</h3>
        <div class="space-y-3">
          <div><label for="cwCoupleInput" class="text-xs text-muted block mb-1">Couple Names</label>
            <input type="text" id="cwCoupleInput" placeholder="e.g. Aarav &amp; Ananya" class="ss-input w-full" /></div>
          <div><label for="cwCityInput" class="text-xs text-muted block mb-1">City / Venue</label>
            <input type="text" id="cwCityInput" placeholder="e.g. Udaipur, Rajasthan" class="ss-input w-full" /></div>
          <div><label for="cwDatesInput" class="text-xs text-muted block mb-1">Dates</label>
            <input type="text" id="cwDatesInput" placeholder="e.g. 18–20 Nov 2026" class="ss-input w-full" /></div>
          <div><label for="cwRoleInput" class="text-xs text-muted block mb-1">Your Assigned Role</label>
            <select id="cwRoleInput" class="ss-input w-full">
              <option value="Creator">Creator</option><option value="Host">Host</option>
              <option value="User">User</option><option value="Guest">Guest</option>
            </select></div>
        </div>
        <div class="flex justify-end gap-3 pt-2">
          <button type="button" data-action="closeCreateModal" class="px-4 py-2 rounded-xl bg-card border border-borderWarm text-xs font-bold text-cream">Cancel</button>
          <button type="button" data-action="saveNewWedding" class="btn-gold px-5 py-2 rounded-xl text-xs font-bold">Create Workspace</button>
        </div>
      </div>
    </div>`;
}

export function openCreateModal() {
  const modal = document.getElementById('createWeddingModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.getElementById('cwCoupleInput').focus();
}

export function closeCreateModal() {
  const modal = document.getElementById('createWeddingModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

export function saveNewWedding() {
  const value = id => document.getElementById(id)?.value?.trim();
  const couple = value('cwCoupleInput');
  const city = value('cwCityInput');
  if (!couple || !city) return showToast('Please enter Couple Names and City');

  const role = Object.values(ROLES).find(r => r.id === (value('cwRoleInput') || 'Creator')) || ROLES.CREATOR;

  weddingsPortfolio.unshift({
    id: 'w' + (weddingsPortfolio.length + 1),
    start: null,
    couple, city,
    dates: value('cwDatesInput') || 'TBD 2026',
    userRole: role.id,
    roleBadgeColor: role.badgeClass,
    rolePermissionsDesc: role.desc,
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    isLive: true,
    telemetry: null
  });

  closeCreateModal();
  renderDirectory();
  showToast(`Created ${couple} (${role.id})`);
}
