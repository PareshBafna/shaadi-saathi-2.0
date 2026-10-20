import { guests, roomInventory } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';
import { getStayLocationsList, getRoomOccupants, showToast } from '../utils/weddings-helpers.js';

export function renderRoomsModule(onRefresh) {
  const locations = getStayLocationsList();
  const eligibleGuests = guests.filter(g => g.status !== 'Declined' && g.needsRoom);
  const skippedLocalGuests = guests.filter(g => g.status !== 'Declined' && !g.needsRoom);

  const unassignedMembers = [];
  eligibleGuests.forEach(g => {
    if (!g.members || g.members.length === 0) {
      g.members = [{ name: g.name, stayLocation: locations[0] || 'Taj Lake Palace', roomId: '' }];
    }
    g.members.forEach((m, mIdx) => {
      const item = { guestId: g.id, primaryName: g.name, side: g.side, pax: g.pax, memberIdx: mIdx, memberName: m.name, stayLocation: m.stayLocation || '', roomId: m.roomId || '' };
      if (!m.roomId) unassignedMembers.push(item);
    });
  });

  const topSectionHtml = `
    <div class="bento-card p-6 space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold">Top View • Stay Places &amp; Room Cards</span>
          <h4 class="font-serif text-2xl font-bold text-cream">1. All Stay Locations &amp; Room-Wise Occupancy Cards</h4>
          <p class="text-sm text-muted">Grouped by Hotel Property and individual Room Number. Only guests marked "Needs Room" (${eligibleGuests.length} families) are allotted here; ${skippedLocalGuests.length} local family is excluded.</p>
        </div>
        <button id="btn-add-room-card" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add New Hotel Room Card</button>
      </div>

      <div class="space-y-6">
        ${locations.map(loc => {
          const locRooms = roomInventory.filter(r => r.location === loc);
          const totalBeds = locRooms.reduce((s, r) => s + r.maxPax, 0);
          const occupiedBeds = locRooms.reduce((s, r) => s + getRoomOccupants(r.id).length, 0);
          const occPercent = totalBeds > 0 ? Math.round((occupiedBeds / totalBeds) * 100) : 0;

          let roomsCardsHtml = '';
          locRooms.forEach(rm => {
            const occ = getRoomOccupants(rm.id);
            const isFull = occ.length >= rm.maxPax;
            let statusBadge = '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-card text-muted">Vacant (0/' + rm.maxPax + ')</span>';
            if (occ.length > 0) {
              if (isFull) {
                statusBadge = '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-emeraldSS/20 text-emeraldSS">Full (' + occ.length + '/' + rm.maxPax + ')</span>';
              } else {
                statusBadge = '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-amberSS/20 text-amberSS">Partial (' + occ.length + '/' + rm.maxPax + ')</span>';
              }
            }

            let occupantsListHtml = '<p class="text-xs text-muted italic">No guests allotted yet</p>';
            if (occ.length > 0) {
              occupantsListHtml = occ.map(o => 
                '<div class="flex items-center justify-between bg-obsidian px-2.5 py-1.5 rounded-lg text-xs">' +
                '<span class="text-cream font-semibold">👤 ' + o.memberName + '</span>' +
                '<button data-guestid="' + o.guestId + '" data-mindex="' + o.memberIndex + '" class="btn-unassign-room text-crimsonSS hover:underline text-[11px]">Unassign</button>' +
                '</div>'
              ).join('');
            }

            roomsCardsHtml += 
              '<div class="bg-card border ' + (occ.length > 0 ? 'border-gold/40' : 'border-borderWarm') + ' rounded-2xl p-4 space-y-3 flex flex-col justify-between">' +
                '<div class="space-y-2">' +
                  '<div class="flex justify-between items-center">' +
                    '<strong class="font-mono text-lg text-cream">Room ' + rm.roomNumber + '</strong>' +
                    statusBadge +
                  '</div>' +
                  '<span class="text-xs text-gold block">' + rm.type + '</span>' +
                  '<div class="space-y-1.5 pt-2 border-t border-borderWarm/60">' + occupantsListHtml + '</div>' +
                '</div>' +
              '</div>';
          });

          return `
            <div class="bg-obsidian/90 border border-borderWarm rounded-2xl p-5 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-borderWarm pb-3">
                <div>
                  <h5 class="font-serif text-2xl font-bold text-gold">🏨 \${loc}</h5>
                  <span class="text-xs text-muted">\${locRooms.length} Rooms Configured • ${occupiedBeds} of${totalBeds} Beds Occupied</span>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/15 text-gold">\${occPercent}% Occupied</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                \${roomsCardsHtml}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  let unassignedHtml = '';
  if (unassignedMembers.length === 0) {
    unassignedHtml = `
      <div class="bg-emeraldSS/10 border border-emeraldSS/30 rounded-xl p-4 text-sm text-emeraldSS font-bold">
        ✓ All attending outstation members needing stay have been allotted rooms!
      </div>
    `;
  } else {
    let cards = '';
    unassignedMembers.forEach(u => {
      const chosenLoc = u.stayLocation || locations[0];
      const roomsForLoc = roomInventory.filter(r => r.location === chosenLoc);

      let locOpts = '';
      locations.forEach(l => {
        locOpts += '<option value="' + l + '" ' + (chosenLoc === l ? 'selected' : '') + '>' + l + '</option>';
      });

      let roomOpts = '<option value="">-- Choose Room --</option>';
      roomsForLoc.forEach(rm => {
        roomOpts += '<option value="' + rm.id + '">Rm ' + rm.roomNumber + ' (' + rm.type + ') [' + getRoomOccupants(rm.id).length + '/' + rm.maxPax + ']</option>';
      });

      cards += 
        '<div class="bg-obsidian border border-amberSS/40 rounded-2xl p-4 space-y-3">' +
          '<div class="flex justify-between items-start">' +
            '<div>' +
              '<strong class="text-sm text-cream block">' + u.memberName + '</strong>' +
              '<span class="text-xs text-muted">Family: ' + u.primaryName + ' (' + u.side + ')</span>' +
            '</div>' +
            '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amberSS/20 text-amberSS">Unassigned</span>' +
          '</div>' +
          '<div class="space-y-2 text-xs">' +
            '<div>' +
              '<label class="text-muted block mb-1">1. Select Stay Place (Hotel):</label>' +
              '<select data-guestid="' + u.guestId + '" data-mindex="' + u.memberIdx + '" class="sel-unassigned-stay ss-input text-xs font-bold text-gold">' + locOpts + '</select>' +
            '</div>' +
            '<div>' +
              '<label class="text-muted block mb-1">2. Select Room:</label>' +
              '<select data-guestid="' + u.guestId + '" data-mindex="' + u.memberIdx + '" class="sel-unassigned-room ss-input text-xs font-bold text-emeraldSS">' + roomOpts + '</select>' +
            '</div>' +
          '</div>' +
        '</div>';
    });
    unassignedHtml = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">' + cards + '</div>';
  }

  const middleSectionHtml = `
    <div class="bento-card p-6 space-y-4 border-amberSS/50">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span class="text-xs font-mono uppercase text-amberSS font-bold">Unassigned Queue</span>
          <h4 class="font-serif text-2xl font-bold text-cream">2. Unassigned Outstation Members Needing Room (${unassignedMembers.length})</h4>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-amberSS/20 text-amberSS">${unassignedMembers.length} Pending Allotment</span>
      </div>
      ${unassignedHtml}
    </div>
  `;

  let guestControlsCards = '';
  eligibleGuests.forEach(g => {
    let membersHtml = '';
    (g.members || []).forEach((m, mIdx) => {
      const rmObj = roomInventory.find(r => r.id === m.roomId);
      const activeLoc = rmObj ? rmObj.location : (m.stayLocation || locations[0]);
      const availableRooms = roomInventory.filter(r => r.location === activeLoc);

      let locOpts = '';
      locations.forEach(l => {
        locOpts += '<option value="' + l + '" ' + (activeLoc === l ? 'selected' : '') + '>🏨 ' + l + '</option>';
      });

      let roomOpts = '<option value="">-- Unassigned --</option>';
      availableRooms.forEach(rm => {
        roomOpts += '<option value="' + rm.id + '" ' + (m.roomId === rm.id ? 'selected' : '') + '>Rm ' + rm.roomNumber + ' (' + rm.type + ')</option>';
      });

      membersHtml += 
        '<div class="bg-card p-3 rounded-xl border border-borderWarm/70 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">' +
          '<input type="text" data-guestid="' + g.id + '" data-mindex="' + mIdx + '" value="' + m.name + '" class="inp-member-name ss-input text-xs font-semibold" />' +
          '<select data-guestid="' + g.id + '" data-mindex="' + mIdx + '" class="sel-member-stay ss-input text-xs text-gold font-bold">' + locOpts + '</select>' +
          '<select data-guestid="' + g.id + '" data-mindex="' + mIdx + '" class="sel-member-room ss-input text-xs ' + (m.roomId ? 'text-emeraldSS font-bold' : 'text-amberSS') + '">' + roomOpts + '</select>' +
        '</div>';
    });

    guestControlsCards += 
      '<div class="bg-obsidian/90 border border-borderWarm rounded-2xl p-5 space-y-3">' +
        '<div class="flex justify-between items-center border-b border-borderWarm pb-2.5">' +
          '<div>' +
            '<strong class="font-serif text-xl text-cream">' + g.name + ' Family</strong>' +
            '<span class="text-xs text-muted block">' + g.side + ' Side • ' + g.pax + ' Attending Pax</span>' +
          '</div>' +
          '<button data-guestid="' + g.id + '" class="btn-add-member px-3 py-1 rounded-lg bg-card border border-gold/40 text-xs font-bold text-gold">+ Add Member</button>' +
        '</div>' +
        '<div class="space-y-2.5">' + membersHtml + '</div>' +
      '</div>';
  });

  const bottomSectionHtml = `
    <div class="bento-card p-6 space-y-4">
      <div>
        <span class="text-xs font-mono uppercase text-gold">Guest Member Allotment Directory</span>
        <h4 class="font-serif text-2xl font-bold text-cream">3. Guest-Wise Stay Place &amp; Room Allotment Controls</h4>
        <p class="text-sm text-muted">Stay Place and Room Number are split into separate dropdowns for every family member.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${guestControlsCards}</div>
    </div>
  `;

  const html = renderModuleHeader('rooms') + topSectionHtml + middleSectionHtml + bottomSectionHtml;

  setTimeout(() => {
    document.getElementById('btn-add-room-card')?.addEventListener('click', () => {
      const nextNum = 400 + roomInventory.length + 1;
      roomInventory.push({ id: 'R-' + nextNum, location: 'Taj Lake Palace', roomNumber: String(nextNum), type: 'Deluxe Room', maxPax: 2 });
      showToast(`Added Room ${nextNum} card to Taj Lake Palace`);
      onRefresh();
    });

    document.querySelectorAll('.btn-unassign-room').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = guests.find(x => x.id === btn.dataset.guestid);
        if (g && g.members[btn.dataset.mindex]) {
          g.members[btn.dataset.mindex].roomId = '';
          showToast(`Unassigned room for ${g.members[btn.dataset.mindex].name}`);
          onRefresh();
        }
      });
    });

    document.querySelectorAll('.sel-member-stay, .sel-unassigned-stay').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const g = guests.find(x => x.id === e.target.dataset.guestid);
        if (g && g.members[e.target.dataset.mindex]) {
          g.members[e.target.dataset.mindex].stayLocation = e.target.value;
          g.members[e.target.dataset.mindex].roomId = '';
          showToast(`Set stay location to ${e.target.value}`);
          onRefresh();
        }
      });
    });

    document.querySelectorAll('.sel-member-room, .sel-unassigned-room').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const g = guests.find(x => x.id === e.target.dataset.guestid);
        if (g && g.members[e.target.dataset.mindex]) {
          g.members[e.target.dataset.mindex].roomId = e.target.value;
          const rm = roomInventory.find(r => r.id === e.target.value);
          if (rm) g.members[e.target.dataset.mindex].stayLocation = rm.location;
          showToast(`Allotted room`);
          onRefresh();
        }
      });
    });

    document.querySelectorAll('.inp-member-name').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const g = guests.find(x => x.id === e.target.dataset.guestid);
        if (g && g.members[e.target.dataset.mindex]) {
          g.members[e.target.dataset.mindex].name = e.target.value.trim();
          showToast('Updated member name');
        }
      });
    });

    document.querySelectorAll('.btn-add-member').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = guests.find(x => x.id === btn.dataset.guestid);
        if (!g) return;
        g.members.push({ name: `${g.name.split(' ')[0]} Member ${g.members.length + 1}`, stayLocation: 'Taj Lake Palace', roomId: '' });
        g.pax = g.members.length;
        showToast(`Added member under ${g.name}`);
        onRefresh();
      });
    });
  }, 0);

  return html;
}