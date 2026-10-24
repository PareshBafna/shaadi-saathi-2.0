import { familyHosts, weddingEvents } from '../../data/weddings-store.js';

export function renderHostsModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h4 class="font-serif text-2xl font-bold text-cream">Individual Family Host Profiles (${familyHosts.length} Active)</h4>
        <p class="text-xs text-muted">Each host profile is listed individually (never combined) and hosts all wedding ceremonies.</p>
      </div>
      <button onclick="addNewHostProfile()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Individual Host Profile</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      ${familyHosts.map(h => `
        <div class="bento-card p-6 space-y-4 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-lg text-xs font-bold bg-gold/20 text-gold">${h.side} •${h.relation}</span>
              <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emeraldSS/15 text-emeraldSS">All Ceremonies</span>
            </div>
            <input type="text" value="${h.name}" onchange="updateHostField('${h.id}', 'name', this.value)" class="ss-input font-serif text-2xl font-bold text-cream" />
            <input type="text" value="${h.salutation}" onchange="updateHostField('${h.id}', 'salutation', this.value)" class="ss-input text-xs italic text-gold" />
          </div>
          <div class="pt-3 border-t border-borderWarm space-y-1.5 text-sm">
            <div class="flex justify-between"><span class="text-muted">Ceremonies Hosted:</span><strong class="text-emeraldSS">All Ceremonies (${weddingEvents.length})</strong></div>
            <div class="flex justify-between"><span class="text-muted">Host Contact:</span><strong class="text-cream font-mono">${h.phone}</strong></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}