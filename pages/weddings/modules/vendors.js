import { vendors } from '../data/weddings-store.js';
import { formatINR } from '../utils/weddings-helpers.js';

export function renderVendorsModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <h4 class="font-serif text-2xl font-bold text-cream">Wedding Vendors &amp; Payout Ledger</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead><tr><th>Vendor Name</th><th>Category</th><th>Cost</th><th>Paid</th></tr></thead>
          <tbody>
            ${vendors.map(v => `
              <tr>
                <td class="font-bold text-cream">${v.name}</td>
                <td class="text-xs text-gold">${v.category}</td>
                <td class="font-mono text-gold">${formatINR(v.cost)}</td>
                <td class="font-mono text-emeraldSS">${formatINR(v.paid)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}