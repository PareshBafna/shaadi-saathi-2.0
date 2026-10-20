import { guests } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';
import { showToast, computeLiveTelemetry } from '../utils/weddings-helpers.js';

export function renderGuestsModule(onRefresh) {
  const t = computeLiveTelemetry();
  const stayNeededCount = guests.filter(g => g.status === 'Attending' && g.needsRoom).length;
  const localNoStayCount = guests.filter(g => g.status === 'Attending' && !g.needsRoom).length;

  const html = renderModuleHeader('rsvp') + `
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
        <button id="btn-add-guest-row" class="btn-gold px-5 py-2.5 rounded-xl text-sm font-bold">+ Add New Guest Row</button>
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
                  <td class="font-mono text-xs text-muted">\${idx + 1}</td>
                  <td><input type="text" data-guestid="${g.id}" data-field="name" value="${g.name}" class="guest-inp ss-input font-bold" /></td>
                  <td>
                    <div class="inline-flex rounded-xl bg-obsidian p-1 border border-borderWarm gap-1">
                      <button data-guestid="\${g.id}" data-side="Bride" class="btn-side px-3 py-1.5 rounded-lg text-xs font-bold transition \${g.side === 'Bride' ? 'bg-gold text-obsidian shadow' : 'text-muted hover:text-cream'}">👰 Bride</button>
                      <button data-guestid="\${g.id}" data-side="Groom" class="btn-side px-3 py-1.5 rounded-lg text-xs font-bold transition \${g.side === 'Groom' ? 'bg-gold text-obsidian shadow' : 'text-muted hover:text-cream'}">🤵 Groom</button>
                    </div>
                  </td>
                  <td>
                    <button data-guestid="\${g.id}" class="btn-cycle-rsvp px-4 py-2 rounded-xl border text-xs font-bold transition hover:scale-105 \${statusStyle}">
                      \${statusIcon}
                    </button>
                  </td>
                  <td style="width:95px">
                    <input type="number" min="0" max="15" data-guestid="${g.id}" data-field="pax" value="${g.pax}" class="guest-inp ss-input font-mono text-center" />
                  </td>
                  <td>
                    <button data-guestid="\${g.id}" class="btn-toggle-room px-3.5 py-1.5 rounded-xl border text-xs font-bold transition \${g.needsRoom ? 'bg-gold/20 border-gold text-gold' : 'bg-obsidian border-borderWarm text-muted'}">
                      \${g.needsRoom ? '🏨 Needs Room' : '🏠 No Room Needed'}
                    </button>
                  </td>
                  <td>
                    <select data-guestid="\${g.id}" data-field="inviteTier" class="guest-select ss-input font-bold text-gold">
                      <option value="all-events" \${g.inviteTier === 'all-events' ? 'selected' : ''}>Variant C: All Events</option>
                      <option value="2-events" \${g.inviteTier === '2-events' ? 'selected' : ''}>Variant B: 2 Events (Sangeet+Shaadi)</option>
                      <option value="1-event" \${g.inviteTier === '1-event' ? 'selected' : ''}>Variant A: 1 Event (Reception)</option>
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

  setTimeout(() => {
    document.getElementById('btn-add-guest-row')?.addEventListener('click', () => {
      guests.unshift({
        id: 'g-' + Date.now(),
        name: 'New Guest Family',
        side: 'Bride',
        group: 'Family',
        status: 'Attending',
        pax: 2,
        needsRoom: true,
        inviteTier: 'all-events',
        invitedEvents: ['Haldi', 'Mehendi', 'Sangeet', 'Shaadi'],
        shagun: 0, giftNote: '', courierStatus: 'Pending Dispatch', waInviteSent: false, waStatus: 'Queued', waSentAt: '—',
        members: [{ name: 'Member 1', stayLocation: 'Taj Lake Palace', roomId: '' }, { name: 'Member 2', stayLocation: 'Taj Lake Palace', roomId: '' }],
        travel: { mode: 'Flight', fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '', pnr: '', date: '12 Dec 2026', station: '', arrivalTime: '' }
      });
      showToast('Added new row to Guest Table');
      onRefresh();
    });

    document.querySelectorAll('.guest-inp').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const g = guests.find(x => x.id === e.target.dataset.guestid);
        if (g) {
          const field = e.target.dataset.field;
          g[field] = field === 'pax' ? Math.max(0, parseInt(e.target.value, 10) || 0) : e.target.value;
          showToast(`Updated ${g.name}`);
        }
      });
    });

    document.querySelectorAll('.guest-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const g = guests.find(x => x.id === e.target.dataset.guestid);
        if (g) {
          g.inviteTier = e.target.value;
          g.invitedEvents = e.target.value === '1-event' ? ['Shaadi'] : (e.target.value === '2-events' ? ['Sangeet', 'Shaadi'] : ['Haldi', 'Mehendi', 'Sangeet', 'Shaadi']);
          showToast(`Updated event variant for ${g.name}`);
        }
      });
    });

    document.querySelectorAll('.btn-side').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = guests.find(x => x.id === btn.dataset.guestid);
        if (g) {
          g.side = btn.dataset.side;
          showToast(`Switched ${g.name} to ${g.side} side`);
          onRefresh();
        }
      });
    });

    document.querySelectorAll('.btn-cycle-rsvp').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = guests.find(x => x.id === btn.dataset.guestid);
        if (!g) return;
        const order = ['Attending', 'N/A', 'Declined'];
        g.status = order[(order.indexOf(g.status) + 1) % order.length];
        if (g.status === 'Declined') g.pax = 0;
        else if (g.pax === 0) g.pax = Math.max(1, (g.members || []).length);
        showToast(`${g.name} RSVP changed to ${g.status}`);
        onRefresh();
      });
    });

    document.querySelectorAll('.btn-toggle-room').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = guests.find(x => x.id === btn.dataset.guestid);
        if (g) {
          g.needsRoom = !g.needsRoom;
          showToast(`${g.name}: ${g.needsRoom ? 'Needs Room' : 'Local (No Room Needed)'}`);
          onRefresh();
        }
      });
    });
  }, 0);

  return html;
}