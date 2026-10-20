import { guests } from '../data/weddings-store.js';

export function renderFlightsModule(viewport, headerBanner) {
    const flightGuests = guests.filter(g => g.status !== 'Declined' && (!g.travel || g.travel.mode === 'Flight'));
    const assignedFlights = flightGuests.filter(g => g.travel && g.travel.number && g.travel.pnr && g.travel.pnr !== 'Pending');
    const unassignedFlights = flightGuests.filter(g => !g.travel || !g.travel.number || !g.travel.pnr || g.travel.pnr === 'Pending');

    const routeGroups = {};
    const flightNoGroups = {};
    const dateGroups = {};

    flightGuests.forEach(g => {
      const tr = g.travel || {};
      const routeKey = `${tr.fromCity || 'TBD'} → ${tr.toCity || 'Udaipur (UDR)'}`;
      const numKey = tr.number || 'Flight Pending';
      const dtKey = `${tr.date || '12 Dec 2026'} (${tr.arrivalTime || 'Time TBD'})`;

      if (!routeGroups[routeKey]) routeGroups[routeKey] = [];
      routeGroups[routeKey].push(g);

      if (!flightNoGroups[numKey]) flightNoGroups[numKey] = [];
      flightNoGroups[numKey].push(g);

      if (!dateGroups[dtKey]) dateGroups[dtKey] = [];
      dateGroups[dtKey].push(g);
    });

    viewport.innerHTML = headerBanner + `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-skySS font-bold">1. Route-Wise (From → To)</span>
          ${Object.entries(routeGroups).map(([route, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-cream block">✈️ ${route}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-skySS/20 text-skySS text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>

        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-gold font-bold">2. Flight-Wise Grouping</span>
          ${Object.entries(flightNoGroups).map(([fnum, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-gold block">🛫 ${fnum}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-gold/20 text-gold text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>

        <div class="bento-card p-5 space-y-3">
          <span class="text-xs font-mono uppercase text-emeraldSS font-bold">3. Date &amp; Time Wise</span>
          ${Object.entries(dateGroups).map(([dt, list]) => `
            <div class="bg-obsidian p-3.5 rounded-xl border border-borderWarm flex justify-between items-center">
              <div><strong class="text-sm text-emeraldSS block">📅 ${dt}</strong><span class="text-xs text-muted">${list.map(x => x.name).join(', ')}</span></div>
              <span class="px-2.5 py-1 rounded bg-emeraldSS/20 text-emeraldSS text-xs font-bold">${list.reduce((s, x) => s + Number(x.pax || 1), 0)} Pax</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bento-card p-5 space-y-3 border-amberSS/40">
        <div class="flex justify-between items-center">
          <h4 class="font-serif text-xl font-bold text-cream">⏳ Guests With Pending Flight PNR (${unassignedFlights.length})</h4>
          <span class="text-xs text-amberSS font-bold">Follow up for ticket copy</span>
        </div>
        ${unassignedFlights.length === 0 ? `<p class="text-xs text-emeraldSS font-bold">✓ All air passengers have confirmed flight PNRs!</p>` : `
          <div class="flex flex-wrap gap-3">
            ${unassignedFlights.map(u => `<div class="bg-obsidian px-4 py-2 rounded-xl border border-amberSS/40 text-xs"><strong class="text-cream">${u.name} (${u.pax} Pax)</strong> • ${u.travel?.fromCity || 'Origin TBD'} → ${u.travel?.toCity || 'Udaipur'}</div>`).join('')}
          </div>
        `}
      </div>

      <div class="bento-card p-6 space-y-4">
        <h4 class="font-serif text-2xl font-bold text-cream">4. Guest Flight Manifest (Edit From, To, Flight No., Date &amp; PNR)</h4>
        <div class="ss-table-wrap">
          <table class="ss-table">
            <thead>
              <tr>
                <th>Guest Family</th>
                <th>Pax</th>
                <th>From City</th>
                <th>To City</th>
                <th>Flight No. &amp; Airline</th>
                <th>Date</th>
                <th>Landing Time</th>
                <th>PNR</th>
              </tr>
            </thead>
            <tbody>
              ${flightGuests.map(g => {
                const tr = g.travel || { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '', pnr: '', date: '12 Dec 2026', station: 'UDR Airport T1', arrivalTime: '' };
                return `
                  <tr>
                    <td class="font-bold text-cream">${g.name}</td>
                    <td class="font-mono text-skySS">${g.pax}</td>
                    <td><input type="text" value="${tr.fromCity || ''}" onchange="updateTravelFieldInline('${g.id}', 'fromCity', this.value, 'Flight')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.toCity || 'Udaipur (UDR)'}" onchange="updateTravelFieldInline('${g.id}', 'toCity', this.value, 'Flight')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.number || ''}" onchange="updateTravelFieldInline('${g.id}', 'number', this.value, 'Flight')" class="ss-input text-xs font-bold text-skySS" /></td>
                    <td><input type="text" value="${tr.date || '12 Dec 2026'}" onchange="updateTravelFieldInline('${g.id}', 'date', this.value, 'Flight')" class="ss-input text-xs" /></td>
                    <td><input type="text" value="${tr.arrivalTime || ''}" onchange="updateTravelFieldInline('${g.id}', 'arrivalTime', this.value, 'Flight')" class="ss-input text-xs text-emeraldSS font-bold" /></td>
                    <td><input type="text" value="${tr.pnr || ''}" onchange="updateTravelFieldInline('${g.id}', 'pnr', this.value, 'Flight')" class="ss-input text-xs font-mono text-gold" /></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
}
