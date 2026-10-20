import { guests } from '../data/weddings-store.js';

export function renderTrainsModule(viewport, headerBanner) {
    const trainGuests = guests.filter(g => g.status !== 'Declined' && g.travel && g.travel.mode === 'Train');
    const routeGroups = {};
    const trainNoGroups = {};
    const dateGroups = {};

    trainGuests.forEach(g => {
      const tr = g.travel || {};
      const routeKey = `${tr.fromCity || 'Origin TBD'} → ${tr.toCity || 'Udaipur City (UDZ)'}`;
      const numKey = tr.number || 'Train Pending';
      const dtKey = `${tr.date || '12 Dec 2026'} (${tr.arrivalTime || 'Time TBD'})`;

      if (!routeGroups[routeKey]) routeGroups[routeKey] = [];
      routeGroups[routeKey].push(g);
      if (!trainNoGroups[numKey]) trainNoGroups[numKey] = [];
      trainNoGroups[numKey].push(g);
      if (!dateGroups[dtKey]) dateGroups[dtKey] = [];
      dateGroups[dtKey].push(g);
    });

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-gold font-bold">1. Route-Wise (From → To)</span>
          ${Object.entries(routeGroups).map(([route, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-cream block">🚆 ${route}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-gold/20 text-gold text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>

        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-emeraldSS font-bold">2. Train-Wise Grouping</span>
          ${Object.entries(trainNoGroups).map(([tnum, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-gold block">🛤️ ${tnum}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-emeraldSS/20 text-emeraldSS text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>

        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-skySS font-bold">3. Date &amp; Platform Time Wise</span>
          ${Object.entries(dateGroups).map(([dt, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-skySS block">📅 ${dt}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-skySS/20 text-skySS text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
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
              ${trainGuests.map(g => {
                const tr = g.travel || { mode: 'Train', fromCity: 'Delhi', toCity: 'Udaipur', number: '', pnr: '', date: '12 Dec 2026', arrivalTime: '' };
                return `
                  <tr>
                    <td class="font-bold text-cream">${g.name}</td>
                    <td class="font-mono text-gold">${g.pax}</td>
                    <td><input type="text" value="${tr.fromCity || ''}" onchange="updateTravelFieldInline('${g.id}', 'fromCity', this.value, 'Train')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.toCity || 'Udaipur City (UDZ)'}" onchange="updateTravelFieldInline('${g.id}', 'toCity', this.value, 'Train')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.number || ''}" onchange="updateTravelFieldInline('${g.id}', 'number', this.value, 'Train')" class="ss-input text-xs font-bold text-gold" /></td>
                    <td><input type="text" value="${tr.date || '12 Dec 2026'}" onchange="updateTravelFieldInline('${g.id}', 'date', this.value, 'Train')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.arrivalTime || ''}" onchange="updateTravelFieldInline('${g.id}', 'arrivalTime', this.value, 'Train')" class="ss-input text-xs text-emeraldSS font-bold" /></td>
                    <td><input type="text" value="${tr.pnr || ''}" onchange="updateTravelFieldInline('${g.id}', 'pnr', this.value, 'Train')" class="ss-input text-xs font-mono text-gold" /></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
}
