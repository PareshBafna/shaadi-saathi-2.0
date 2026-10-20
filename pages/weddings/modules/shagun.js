import { guests } from '../data/weddings-store.js';
import { formatINR } from '../utils/weddings-helpers.js';

export function renderShagunModule(viewport, headerBanner) {
    const totShagun = guests.reduce((s, g) => s + Number(g.shagun || 0), 0);
    const brideSideShagun = guests.filter(g => g.side === 'Bride').reduce((s, g) => s + Number(g.shagun || 0), 0);
    const groomSideShagun = guests.filter(g => g.side === 'Groom').reduce((s, g) => s + Number(g.shagun || 0), 0);

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bento-card p-5"><span class="text-xs text-muted block">Total Shagun Linked to Guests</span><strong class="text-3xl font-extrabold text-gold">${formatINR(totShagun)}</strong></div>
        <div class="bento-card p-5"><span class="text-xs text-muted block">👰 Bride Side Guests Shagun</span><strong class="text-2xl font-bold text-cream">${formatINR(brideSideShagun)}</strong></div>
        <div class="bento-card p-5"><span class="text-xs text-muted block">🤵 Groom Side Guests Shagun</span><strong class="text-2xl font-bold text-emeraldSS">${formatINR(groomSideShagun)}</strong></div>
      </div>

      <div class="bento-card p-5 space-y-3 border-gold/40">
        <span class="text-xs font-mono uppercase text-gold font-bold">Quick Link Shagun to Guest</span>
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          <select id="quickShagunGuestSelect" class="sm:col-span-4 ss-input font-bold text-cream">
            ${guests.map(g => `<option value="${g.id}">${g.name} (${g.side} • ${g.group})</option>`).join('')}
          </select>
          <input id="quickShagunAmount" type="number" step="500" placeholder="Shagun Amount (₹)" class="sm:col-span-3 ss-input font-mono text-gold" />
          <input id="quickShagunGiftNote" type="text" placeholder="Gift Description (e.g., Silver Coin, Envelope)" class="sm:col-span-3 ss-input" />
          <button onclick="saveQuickLinkedShagun()" class="sm:col-span-2 btn-gold py-2.5 rounded-xl text-xs font-bold">Link to Guest</button>
        </div>
      </div>

      <div class="bento-card p-6 space-y-4">
        <h4 class="font-serif text-2xl font-bold text-cream">Guest-Linked Shagun &amp; Gifts Ledger</h4>
        <div class="ss-table-wrap">
          <table class="ss-table">
            <thead>
              <tr>
                <th>Linked Guest Family</th>
                <th>Side &amp; Relationship Group</th>
                <th>Guest RSVP Status</th>
                <th>Gift / Envelope Description</th>
                <th>Return Favor / Invite Status</th>
                <th>Shagun Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              ${guests.map(g => `
                <tr>
                  <td class="font-bold text-cream">${g.name}</td>
                  <td><span class="px-2.5 py-1 rounded text-xs bg-obsidian border border-borderWarm text-gold">${g.side} • ${g.group}</span></td>
                  <td><span class="text-xs font-bold ${g.status === 'Attending' ? 'text-emeraldSS' : 'text-muted'}">${g.status} (${g.pax} Pax)</span></td>
                  <td><input type="text" value="${g.giftNote || ''}" placeholder="Envelope / Gift Item" onchange="updateGuestField('${g.id}', 'giftNote', this.value)" class="ss-input text-xs" /></td>
                  <td><input type="text" value="${g.courierStatus}" onchange="updateGuestField('${g.id}', 'courierStatus', this.value)" class="ss-input text-xs" /></td>
                  <td style="width:170px"><input type="number" step="500" value="${g.shagun}" onchange="updateGuestField('${g.id}', 'shagun', this.value)" class="ss-input font-mono font-bold text-gold" /></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
}
