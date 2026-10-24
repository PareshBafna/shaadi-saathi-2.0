import { vendors } from '../data/weddings-store.js';
import { formatINR } from '../utils/weddings-helpers.js';

export function renderVendorsModule(viewport, headerBanner) {
  var totalCost = vendors.reduce(function(s, v) { return s + v.cost; }, 0);
  var totalPaid = vendors.reduce(function(s, v) { return s + v.paid; }, 0);
  var totalDue = totalCost - totalPaid;

  var tableRows = vendors.map(function(v) {
    var due = v.cost - v.paid;
    var statusBadge = due <= 0 
      ? '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emeraldSS/20 text-emeraldSS">✓ Paid Full</span>' 
      : '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amberSS/20 text-amberSS">⏳ Due ' + formatINR(due) + '</span>';

    return '<tr>' +
      '<td><input type="text" value="' + v.name + '" onchange="updateVendorFieldInline(\'' + v.id + '\', \'name\', this.value)" class="ss-input text-xs font-bold text-cream" /></td>' +
      '<td><span class="px-2.5 py-1 rounded bg-obsidian text-xs text-gold border border-borderWarm">' + v.category + '</span></td>' +
      '<td><input type="text" value="' + v.contact + '" onchange="updateVendorFieldInline(\'' + v.id + '\', \'contact\', this.value)" class="ss-input text-xs font-mono" /></td>' +
      '<td><input type="number" value="' + v.cost + '" onchange="updateVendorFieldInline(\'' + v.id + '\', \'cost\', this.value)" class="ss-input text-xs font-mono text-gold" /></td>' +
      '<td><input type="number" value="' + v.paid + '" onchange="updateVendorFieldInline(\'' + v.id + '\', \'paid\', this.value)" class="ss-input text-xs font-mono text-emeraldSS" /></td>' +
      '<td>' + statusBadge + '</td>' +
    '</tr>';
  }).join('');

  viewport.innerHTML = headerBanner + `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Vendor Contracts</span><strong class="text-2xl text-gold">${formatINR(totalCost)}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Paid Out</span><strong class="text-2xl text-emeraldSS">${formatINR(totalPaid)}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Balance Due</span><strong class="text-2xl text-amberSS">${formatINR(totalDue)}</strong></div>
    </div>

    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Supplier Management</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Wedding Vendors &amp; Payout Ledger</h4>
          <p class="text-sm text-muted">Manage caterers, decorators, photographers, makeup artists, and payment milestones.</p>
        </div>
        <button onclick="addNewVendorInline()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Vendor Contract</button>
      </div>

      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th>Vendor / Company Name</th>
              <th>Category</th>
              <th>Contact Person / Phone</th>
              <th>Agreed Cost</th>
              <th>Amount Paid</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}