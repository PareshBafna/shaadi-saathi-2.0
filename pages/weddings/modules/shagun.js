import { formatINR } from '../utils/weddings-helpers.js';

export function renderShagunModule(viewport, headerBanner) {
  var shagunEntries = [
    { id: 'sh-1', giver: 'Gupta Family (Delhi)', amount: 51000, item: 'Gold Coin & Cash Shagun', date: '12 Dec 2026', notes: 'Received at Reception' },
    { id: 'sh-2', giver: 'Rathi Family (Jaipur)', amount: 21000, item: 'Silver Bowl Set', date: '13 Dec 2026', notes: 'Sangeet Entry' },
    { id: 'sh-3', giver: 'Mehra Family (Mumbai)', amount: 11000, item: 'Cash Envelope', date: '14 Dec 2026', notes: 'Wedding Ceremony' }
  ];

  var totalShagun = shagunEntries.reduce(function(s, x) { return s + x.amount; }, 0);

  var tableRows = shagunEntries.map(function(s) {
    return '<tr>' +
      '<td class="font-bold text-cream">' + s.giver + '</td>' +
      '<td class="font-mono text-gold font-bold">' + formatINR(s.amount) + '</td>' +
      '<td><span class="px-2.5 py-1 rounded bg-obsidian text-xs text-skySS border border-borderWarm">' + s.item + '</span></td>' +
      '<td class="text-xs text-muted">' + s.date + '</td>' +
      '<td class="text-xs text-emeraldSS">' + s.notes + '</td>' +
    '</tr>';
  }).join('');

  viewport.innerHTML = headerBanner + `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Shagun Collected</span><strong class="text-2xl text-gold">${formatINR(totalShagun)}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Entries</span><strong class="text-2xl text-emeraldSS">${shagunEntries.length} Families</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Ledger Status</span><strong class="text-2xl text-skySS">Verified &amp; Locked</strong></div>
    </div>

    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Gifts &amp; Envelopes Ledger</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Shagun &amp; Aashirwad Register</h4>
          <p class="text-sm text-muted">Track traditional monetary envelopes, gift items, and return gift obligations.</p>
        </div>
        <button onclick="addNewShagunEntryInline()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Shagun Entry</button>
      </div>

      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th>Giver Family</th>
              <th>Amount</th>
              <th>Item / Gift</th>
              <th>Date</th>
              <th>Ceremony / Notes</th>
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