import { guests } from '../data/weddings-store.js';

export function renderTrainsModule(viewport, headerBanner) {
  const trainGuests = guests.filter(function(g) {
    return g.status !== 'Declined' && g.travel && g.travel.mode === 'Train';
  });

  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-4">
      <h4 class="font-serif text-2xl font-bold text-cream">Guest Train Manifest</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr><th>Guest Family</th><th>From Station</th><th>Train No</th><th>IRCTC PNR</th></tr>
          </thead>
          <tbody>
            ${trainGuests.map(function(g) {
              var tr = g.travel || {};
              return '<tr>' +
                '<td class="font-bold text-cream">' + g.name + '</td>' +
                '<td class="text-xs text-muted">' + (tr.fromCity || 'TBD') + '</td>' +
                '<td class="text-xs text-gold font-bold">' + (tr.number || 'Pending') + '</td>' +
                '<td class="text-xs text-skySS font-mono">' + (tr.pnr || 'Pending') + '</td>' +
              '</tr>';
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}