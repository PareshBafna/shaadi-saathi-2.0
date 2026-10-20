import { guests } from '../data/weddings-store.js';

export function renderFlightsModule(viewport, headerBanner) {
  const flightGuests = guests.filter(function(g) {
    return g.status !== 'Declined' && (!g.travel || g.travel.mode === 'Flight');
  });

  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-4">
      <h4 class="font-serif text-2xl font-bold text-cream">Guest Flight Manifest</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr><th>Guest Family</th><th>From</th><th>To</th><th>Flight No</th><th>PNR</th></tr>
          </thead>
          <tbody>
            ${flightGuests.map(function(g) {
              var tr = g.travel || {};
              return '<tr>' +
                '<td class="font-bold text-cream">' + g.name + '</td>' +
                '<td class="text-xs text-muted">' + (tr.fromCity || 'TBD') + '</td>' +
                '<td class="text-xs text-muted">' + (tr.toCity || 'Udaipur') + '</td>' +
                '<td class="text-xs text-skySS font-bold">' + (tr.number || 'Pending') + '</td>' +
                '<td class="text-xs text-gold font-mono">' + (tr.pnr || 'Pending') + '</td>' +
              '</tr>';
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}