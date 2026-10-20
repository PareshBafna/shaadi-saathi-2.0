import { guests, computeLiveTelemetry } from '../data/weddings-store.js';

export function renderGuestsModule(viewport, headerBanner) {
  const t = computeLiveTelemetry();
  viewport.innerHTML = headerBanner + `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div class="bento-card p-4"><span class="text-xs text-muted block">Total Families</span><strong class="text-2xl text-cream">${guests.length}</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Attending Pax</span><strong class="text-2xl text-emeraldSS">${t.attendingPax} Pax</strong></div>
    </div>
    <div class="bento-card p-6 space-y-5">
      <h4 class="font-serif text-2xl font-bold text-cream">Guest List Management</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr><th>Guest Family</th><th>Side</th><th>Status</th><th>Pax</th><th>Invite Tier</th></tr>
          </thead>
          <tbody>
            ${guests.map(g => `
              <tr>
                <td class="font-bold text-cream">${g.name}</td>
                <td><span class="px-2 py-0.5 rounded text-xs bg-gold/15 text-gold">${g.side}</span></td>
                <td><span class="px-2 py-0.5 rounded text-xs bg-emeraldSS/20 text-emeraldSS">${g.status}</span></td>
                <td class="font-mono text-skySS">${g.pax}</td>
                <td class="text-xs text-gold">${g.inviteTier}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}