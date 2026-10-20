import { familyHosts, weddingEvents } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';
import { showToast } from '../utils/weddings-helpers.js';

export function renderHostsModule(onRefresh) {
  const html = renderModuleHeader('hosts') + `
    <div class="bento-card p-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h4 class="font-serif text-2xl font-bold text-cream">Individual Family Host Profiles (${familyHosts.length} Active)</h4>
        <p class="text-xs text-muted">Each host profile is listed individually (never combined) and hosts all wedding ceremonies.</p>
      </div>
      <button id="btn-add-host" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Individual Host Profile</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      ${familyHosts.map(h => `
        <div class="bento-card p-6 space-y-4 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-lg text-xs font-bold bg-gold/20 text-gold">${h.side} •${h.relation}</span>
              <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emeraldSS/15 text-emeraldSS">All Ceremonies</span>
            </div>
            <input type="text" data-hostid="${h.id}" data-field="name" value="${h.name}" class="host-input ss-input font-serif text-2xl font-bold text-cream" />
            <input type="text" data-hostid="${h.id}" data-field="salutation" value="${h.salutation}" class="host-input ss-input text-xs italic text-gold" />
          </div>
          <div class="pt-3 border-t border-borderWarm space-y-1.5 text-sm">
            <div class="flex justify-between"><span class="text-muted">Ceremonies Hosted:</span><strong class="text-emeraldSS">All Ceremonies (\${weddingEvents.length})</strong></div>
            <div class="flex justify-between"><span class="text-muted">Host Contact:</span><strong class="text-cream font-mono">\${h.phone}</strong></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  setTimeout(() => {
    document.getElementById('btn-add-host')?.addEventListener('click', () => {
      familyHosts.push({
        id: 'h-' + Date.now(),
        name: 'Shri Sudarshan Vinaykiya',
        side: 'Bride Side',
        relation: 'Family Host',
        phone: '+91 98400 55112',
        eventsHosted: 'All Ceremonies',
        salutation: 'With warm compliments from Shri Sudarshan Vinaykiya'
      });
      showToast('Added individual host profile (hosts all ceremonies)');
      onRefresh();
    });

    document.querySelectorAll('.host-input').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const h = familyHosts.find(x => x.id === e.target.dataset.hostid);
        if (h) {
          h[e.target.dataset.field] = e.target.value;
          showToast(`Updated host profile: ${h.name}`);
        }
      });
    });
  }, 0);

  return html;
}