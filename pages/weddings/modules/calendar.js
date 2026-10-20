import { weddingEvents, selectedCalendarDate, setSelectedCalendarDate } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';

export function renderCalendarModule(onRefresh) {
  const decDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const startOffset = 1;
  const dayEvents = weddingEvents.filter(ev => ev.date === selectedCalendarDate);

  const html = renderModuleHeader('calendar') + `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div class="lg:col-span-7 bento-card p-6 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-xs font-mono uppercase text-gold">Multi-Days Timeline</span>
            <h4 class="font-serif text-2xl font-bold text-cream">December 2026</h4>
          </div>
          <span class="flex items-center gap-1.5 text-xs"><span class="w-3 h-3 rounded-full bg-gold inline-block"></span> Wedding Function Day</span>
        </div>

        <div class="grid grid-cols-7 gap-2 text-center text-xs font-bold text-muted pb-2 border-b border-borderWarm">
          <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
        </div>

        <div class="grid grid-cols-7 gap-2">
          ${Array.from({ length: startOffset }).map(() => `<div class="h-16 rounded-xl bg-obsidian/30"></div>`).join('')}
          ${decDays.map(d => {
            const fullDate = `${d} Dec 2026`;
            const evsOnDay = weddingEvents.filter(e => e.date === fullDate);
            const hasEvents = evsOnDay.length > 0;
            const isSelected = selectedCalendarDate === fullDate;

            return `
              <button data-date="${fullDate}" class="btn-select-date h-20 rounded-2xl p-2 flex flex-col justify-between items-center border transition ${
                isSelected
                  ? 'bg-gold text-obsidian border-gold shadow-lg scale-[1.03]'
                  : hasEvents
                  ? 'bg-gold/15 border-gold/60 text-cream hover:bg-gold/25'
                  : 'bg-obsidian/80 border-borderWarm/50 text-muted hover:border-gold/40'
              }">
                <span class="text-sm font-bold">${d}</span>
                ${hasEvents ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isSelected ? 'bg-obsidian text-gold' : 'bg-gold text-obsidian'}">${evsOnDay.length} ${evsOnDay.length > 1 ? 'Events' : 'Event'}</span>` : `<span class="text-[10px] opacity-30">—</span>`}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <div class="lg:col-span-5 bento-card p-6 space-y-4">
        <div class="flex items-center justify-between border-b border-borderWarm pb-3">
          <div>
            <span class="text-xs font-mono text-gold uppercase">Selected Date Schedule</span>
            <h4 class="font-serif text-2xl font-bold text-cream">${selectedCalendarDate}</h4>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">${dayEvents.length} Functions</span>
        </div>

        ${dayEvents.length === 0 ? `
          <div class="bg-obsidian p-6 rounded-2xl border border-borderWarm text-center space-y-2">
            <p class="text-sm text-cream font-bold">No wedding ceremonies scheduled on ${selectedCalendarDate}</p>
            <p class="text-xs text-muted">Click highlighted dates (12, 13, or 14 Dec) on the calendar to inspect scheduled functions.</p>
          </div>
        ` : `
          <div class="space-y-3">
            ${dayEvents.map(ev => `
              <div class="bg-obsidian p-4 rounded-2xl border border-gold/40 space-y-2">
                <div class="flex justify-between items-center">
                  <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-gold text-obsidian">${ev.time}</span>
                  <span class="text-xs font-mono text-emeraldSS font-bold">${ev.expectedPax} Expected Pax</span>
                </div>
                <h5 class="font-serif text-xl font-bold text-cream">${ev.name}</h5>
                <div class="text-xs text-muted space-y-1">
                  <div>📍 Venue: <strong class="text-cream">${ev.venue}</strong></div>
                  <div>👗 Dress Code: <strong class="text-gold">${ev.dress}</strong></div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;

  setTimeout(() => {
    document.querySelectorAll('.btn-select-date').forEach(btn => {
      btn.addEventListener('click', () => {
        setSelectedCalendarDate(btn.dataset.date);
        onRefresh();
      });
    });
  }, 0);

  return html;
}