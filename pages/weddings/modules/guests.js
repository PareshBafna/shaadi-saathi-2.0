import { guests, computeLiveTelemetry } from '../data/weddings-store.js';

export function renderGuestsModule(viewport, headerBanner) {
  const t = computeLiveTelemetry();
  const stayNeededCount = guests.filter(g => g.status === 'Attending' && g.needsRoom).length;
  const localNoStayCount = guests.filter(g => g.status === 'Attending' && !g.needsRoom).length;

  viewport.innerHTML = headerBanner + `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div class="bento-card p-4"><span class="text-xs text-muted block">Total Families</span><strong class="text-2xl text-cream">${guests.length}</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Attending Pax</span><strong class="text-2xl text-emeraldSS">${t.attendingPax} Pax</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">🏨 Needs Room Allocation</span><strong class="text-2xl text-gold">${stayNeededCount} Families</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">🏠 Local / Own Stay (No Room)</span><strong class="text-2xl text-skySS">${localNoStayCount} Families</strong></div>
    </div>

    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 class="font-serif text-2xl font-bold text-cream">Interactive Guest List Table</h4>
          <p class="text-sm text-muted">Click <strong>Bride / Groom</strong> buttons to switch side, click the <strong>RSVP Status button</strong> to cycle status, and toggle <strong>Needs Stay</strong> for outstation vs. local guests.</p>
        </div>
        <button onclick="addNewGuestRowInline()" class="btn-gold px-5 py-2.5 rounded-xl text-sm font-bold">+ Add New Guest Row</button>
      </div>

      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Primary Guest Name</th>
              <th>Side (Click Button)</th>
              <th>RSVP Status (Click to Cycle)</th>
              <th>Pax</th>
              <th>Room Needed?</th>
              <th>Invite Event Variant</th>
            </tr>
          </thead>
          <tbody>
            ${guests.map((g, idx) => {
              const statusStyle = g.status === 'Attending'
                ? 'bg-emeraldSS/20 text-emeraldSS border-emeraldSS/40'
                : g.status === 'Declined'
                ? 'bg-crimsonSS/20 text-crimsonSS border-crimsonSS/40'
                : 'bg-amberSS/20 text-amberSS border-amberSS/40';
              const statusIcon = g.status === 'Attending' ? '✓ Attending' : (g.status === 'Declined' ? '✕ Declined' : '⏳ Pending (Click)');

              return `
                <tr>
                  <td class="font-mono text-xs text-muted">${idx + 1}</td>
                  <td>
                    <input type="text" value="${g.name}" onchange="updateGuestField('${g.id}', 'name', this.value)" class="ss-input font-bold" />
                  </td>
                  <td>
                    <div class="inline-flex rounded-xl bg-obsidian p-1 border border-borderWarm gap-1">
                      <button onclick="updateGuestField('${g.id}', 'side', 'Bride')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${g.side === 'Bride' ? 'bg-gold text-obsidian shadow' : 'text-muted hover:text-cream'}">👰 Bride</button>
                      <button onclick="updateGuestField('${g.id}', 'side', 'Groom')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${g.side === 'Groom' ? 'bg-gold text-obsidian shadow' : 'text-muted hover:text-cream'}">🤵 Groom</button>
                    </div>
                  </td>
                  <td>
                    <button onclick="cycleGuestRsvpStatus('${g.id}')" class="px-4 py-2 rounded-xl border text-xs font-bold transition hover:scale-105 ${statusStyle}">
                      ${statusIcon}
                    </button>
                  </td>
                  <td style="width:95px">
                    <input type="number" min="0" max="15" value="${g.pax}" onchange="updateGuestField('${g.id}', 'pax', this.value)" class="ss-input font-mono text-center" />
                  </td>
                  <td>
                    <button onclick="toggleGuestNeedsRoom('${g.id}')" class="px-3.5 py-1.5 rounded-xl border text-xs font-bold transition ${g.needsRoom ? 'bg-gold/20 border-gold text-gold' : 'bg-obsidian border-borderWarm text-muted'}">
                      ${g.needsRoom ? '🏨 Needs Room' : '🏠 No Room Needed'}
                    </button>
                  </td>
                  <td>
                    <select onchange="updateGuestField('${g.id}', 'inviteTier', this.value)" class="ss-input font-bold text-gold">
                      <option value="all-events" ${g.inviteTier === 'all-events' ? 'selected' : ''}>Variant C: All Events</option>
                      <option value="2-events" ${g.inviteTier === '2-events' ? 'selected' : ''}>Variant B: 2 Events (Sangeet+Shaadi)</option>
                      <option value="1-event" ${g.inviteTier === '1-event' ? 'selected' : ''}>Variant A: 1 Event (Reception)</option>
                    </select>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}