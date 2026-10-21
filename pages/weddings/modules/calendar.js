export function renderCalendarModule(viewport, headerBanner) {
  const calendarEvents = [
    { time: '10:00 AM', title: 'Ganesh Puja & Mandap Muhurat', venue: 'Main Lawns' },
    { time: '04:00 PM', title: 'Mehndi & High Tea', venue: 'Zenith Courtyard' },
    { time: '08:00 PM', title: 'Grand Sangeet Night', venue: 'Ballroom Hall A' }
  ];

  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Master Itinerary</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Wedding Timeline &amp; Event Calendar</h4>
        </div>
        <button onclick="showToast('Event added to calendar')" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add Calendar Slot</button>
      </div>

      <div class="space-y-3">
        ${calendarEvents.map(c => `
          <div class="bg-obsidian border border-borderWarm p-4 rounded-xl flex items-center justify-between">
            <div class="flex items-center gap-4">
              <span class="px-3 py-1.5 rounded-lg bg-gold/15 text-gold font-mono text-xs font-bold">${c.time}</span>
              <div>
                <strong class="text-base text-cream block">${c.title}</strong>
                <span class="text-xs text-muted">Venue: ${c.venue}</span>
              </div>
            </div>
            <span class="text-xs font-bold text-emeraldSS">Scheduled</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}