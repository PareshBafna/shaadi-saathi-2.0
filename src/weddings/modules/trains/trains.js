import { guests } from '../../data/weddings-store.js';

export function renderTrainsModule(viewport, headerBanner) {
  var trainGuests = guests.filter(function(g) {
    return g.status !== 'Declined' && g.travel && g.travel.mode === 'Train';
  });
  
  var routeGroups = {};
  var trainNoGroups = {};
  var dateGroups = {};

  trainGuests.forEach(function(g) {
    var tr = g.travel || {};
    var fromC = tr.fromCity ? tr.fromCity : 'Origin TBD';
    var toC = tr.toCity ? tr.toCity : 'Udaipur City (UDZ)';
    var routeKey = fromC + ' → ' + toC;
    var numKey = tr.number ? tr.number : 'Train Pending';
    var dt = tr.date ? tr.date : '12 Dec 2026';
    var tm = tr.arrivalTime ? tr.arrivalTime : 'Time TBD';
    var dtKey = dt + ' (' + tm + ')';

    if (!routeGroups[routeKey]) routeGroups[routeKey] = [];
    routeGroups[routeKey].push(g);

    if (!trainNoGroups[numKey]) trainNoGroups[numKey] = [];
    trainNoGroups[numKey].push(g);

    if (!dateGroups[dtKey]) dateGroups[dtKey] = [];
    dateGroups[dtKey].push(g);
  });

  var routeHtml = Object.entries(routeGroups).map(function(entry) {
    var route = entry[0];
    var list = entry[1];
    var totalPax = list.reduce(function(s, x) { return s + Number(x.pax || 1); }, 0);
    var names = list.map(function(x) { return x.name; }).join(', ');
    return '<div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center"><div><strong class="text-sm text-cream block">🚆 ' + route + '</strong><span class="text-xs text-muted">' + names + '</span></div><span class="px-2.5 py-1 rounded bg-gold/20 text-gold text-xs font-bold">' + totalPax + ' Pax</span></div>';
  }).join('');

  var trainHtml = Object.entries(trainNoGroups).map(function(entry) {
    var tnum = entry[0];
    var list = entry[1];
    var totalPax = list.reduce(function(s, x) { return s + Number(x.pax || 1); }, 0);
    var names = list.map(function(x) { return x.name; }).join(', ');
    return '<div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center"><div><strong class="text-sm text-gold block">🛤️ ' + tnum + '</strong><span class="text-xs text-muted">' + names + '</span></div><span class="px-2.5 py-1 rounded bg-emeraldSS/20 text-emeraldSS text-xs font-bold">' + totalPax + ' Pax</span></div>';
  }).join('');

  var dateHtml = Object.entries(dateGroups).map(function(entry) {
    var dt = entry[0];
    var list = entry[1];
    var totalPax = list.reduce(function(s, x) { return s + Number(x.pax || 1); }, 0);
    var names = list.map(function(x) { return x.name; }).join(', ');
    return '<div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center"><div><strong class="text-sm text-skySS block">📅 ' + dt + '</strong><span class="text-xs text-muted">' + names + '</span></div><span class="px-2.5 py-1 rounded bg-skySS/20 text-skySS text-xs font-bold">' + totalPax + ' Pax</span></div>';
  }).join('');

  var tableRows = trainGuests.map(function(g) {
    var tr = g.travel || { mode: 'Train', fromCity: 'Delhi', toCity: 'Udaipur', number: '', pnr: '', date: '12 Dec 2026', arrivalTime: '' };
    var fCity = tr.fromCity ? tr.fromCity : '';
    var tCity = tr.toCity ? tr.toCity : 'Udaipur City (UDZ)';
    var num = tr.number ? tr.number : '';
    var dtVal = tr.date ? tr.date : '12 Dec 2026';
    var arrTime = tr.arrivalTime ? tr.arrivalTime : '';
    var pnrVal = tr.pnr ? tr.pnr : '';

    return '<tr>' +
      '<td class="font-bold text-cream">' + g.name + '</td>' +
      '<td class="font-mono text-gold">' + g.pax + '</td>' +
      '<td><input type="text" value="' + fCity + '" onchange="updateTravelFieldInline(\'' + g.id + '\', \'fromCity\', this.value, \'Train\')" class="ss-input text-xs" /></td>' +
      '<td><input type="text" value="' + tCity + '" onchange="updateTravelFieldInline(\'' + g.id + '\', \'toCity\', this.value, \'Train\')" class="ss-input text-xs" /></td>' +
      '<td><input type="text" value="' + num + '" onchange="updateTravelFieldInline(\'' + g.id + '\', \'number\', this.value, \'Train\')" class="ss-input text-xs font-bold text-gold" /></td>' +
      '<td><input type="text" value="' + dtVal + '" onchange="updateTravelFieldInline(\'' + g.id + '\', \'date\', this.value, \'Train\')" class="ss-input text-xs" /></td>' +
      '<td><input type="text" value="' + arrTime + '" onchange="updateTravelFieldInline(\'' + g.id + '\', \'arrivalTime\', this.value, \'Train\')" class="ss-input text-xs text-emeraldSS font-bold" /></td>' +
      '<td><input type="text" value="' + pnrVal + '" onchange="updateTravelFieldInline(\'' + g.id + '\', \'pnr\', this.value, \'Train\')" class="ss-input text-xs font-mono text-gold" /></td>' +
    '</tr>';
  }).join('');

  viewport.innerHTML = headerBanner + `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div class="bento-card p-5 space-y-3">
        <span class="text-xs font-mono uppercase text-gold font-bold">1. Route-Wise (From → To)</span>
        ${routeHtml}
      </div>

      <div class="bento-card p-5 space-y-3">
        <span class="text-xs font-mono uppercase text-emeraldSS font-bold">2. Train-Wise Grouping</span>
        ${trainHtml}
      </div>

      <div class="bento-card p-5 space-y-3">
        <span class="text-xs font-mono uppercase text-skySS font-bold">3. Date &amp; Platform Time Wise</span>
        ${dateHtml}
      </div>
    </div>

    <div class="bento-card p-6 space-y-4">
      <h4 class="font-serif text-2xl font-bold text-cream">4. Guest Train Manifest (Edit From, To, Train No., Date &amp; PNR)</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th>Guest Family</th>
              <th>Pax</th>
              <th>From Station</th>
              <th>To Station</th>
              <th>Train No. &amp; Name</th>
              <th>Date</th>
              <th>Arrival Time</th>
              <th>IRCTC PNR</th>
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