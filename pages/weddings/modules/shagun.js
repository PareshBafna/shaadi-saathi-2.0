import { formatINR } from '../utils/weddings-helpers.js';

export function renderShagunModule(viewport, headerBanner) {
  const shagunEntries = [
    { giver: 'Gupta Family (Delhi)', amount: 51000, item: 'Gold Coin & Cash', notes: 'Reception' }
  ];
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <h4 class="font-serif text-2xl font-bold text-cream">Shagun &amp; Aashirwad Register</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead><tr><th>Giver</th><th>Amount</th><th>Item</th><th>Notes</th></tr></thead>
          <tbody>
            ${shagunEntries.map(s => `
              <tr>
                <td class="font-bold text-cream">${s.giver}</td>
                <td class="font-mono text-gold font-bold">${formatINR(s.amount)}</td>
                <td class="text-xs text-skySS">${s.item}</td>
                <td class="text-xs text-emeraldSS">${s.notes}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}