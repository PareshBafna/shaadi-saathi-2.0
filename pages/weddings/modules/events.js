import { weddingEvents, guests } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';
import { showToast } from '../utils/weddings-helpers.js';

export function renderEventsModule(onRefresh) {
  const html = renderModuleHeader('events') + `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div class="bento-card p-5"><span class="text-xs text-muted block">Event Capacity</span><strong class="text-2xl text-gold">Unlimited Events</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Variant C (All Events)</span><strong class="text-2xl text-emeraldSS">${guests.filter(g => g.inviteTier === 'all-events').length} Families</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Variant B (2 Events)</span><strong class="text-2xl text-gold">${guests.filter(g => g.inviteTier === '2-events').length} Families</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Variant A (1 Event)</span><strong class="text-2xl text-skySS">${guests.filter(g => g.inviteTier === '1-event').length} Families</strong></div>
    </div>
    <div class="bento-card p-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h4 class="font-serif text-xl font-bold text-cream">Configured Wedding Events (${weddingEvents.length} Active • Unlimited Allowed)</h4>
        <p class="text-xs text-muted">Add as many pre-wedding, main wedding, or post-wedding events as needed.</p>
      </div>
      <button id="btn-add-event" class="btn-gold px-4 py-2 rounded-xl text-xs font-bold">+ Add Event</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      ${weddingEvents.map(ev => `
        <div class="bento-card p-6 space-y-2.5">
          <div class="flex justify-between items-center"><span class="px-3 py-1 rounded-lg text-xs font-bold bg-gold/20 text-gold">\${ev.code}</span><span class="text-sm font-bold text-cream">${ev.date} •${ev.time}</span></div>
          <h4 class="font-serif text-2xl font-bold text-cream">\${ev.name}</h4>
          <div class="text-sm text-muted">Venue: <strong class="text-cream">\${ev.venue}</strong> | Dress Code: <strong class="text-gold">\${ev.dress}</strong></div>
          <div class="text-xs font-bold text-emeraldSS pt-1">Expected Attendance: \${ev.expectedPax} Guests</div>
        </div>
      `).join('')}
    </div>
  `;

  setTimeout(() => {
    document.getElementById('btn-add-event')?.addEventListener('click', () => {
      weddingEvents.push({
        id: 'ev-' + Date.now(),
        code: 'Afterparty',
        name: 'Poolside Sundowner & Afterparty',
        date: '15 Dec 2026',
        time: '01:00 PM',
        venue: 'Lakeview Infinity Pool',
        dress: 'Resort Chic',
        expectedPax: 150
      });
      showToast('Added new event (Unlimited Events supported)');
      onRefresh();
    });
  }, 0);

  return html;
}