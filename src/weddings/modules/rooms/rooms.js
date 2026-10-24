import { guests, roomInventory } from '../../data/weddings-store.js';
import { getStayLocationsList, getRoomOccupants } from '../../utils/weddings-helpers.js';

export function renderRoomsModule(viewport, headerBanner) {
  const locations = getStayLocationsList();
  const eligibleGuests = guests.filter(g => g.status !== 'Declined' && g.needsRoom);
  const skippedLocalGuests = guests.filter(g => g.status !== 'Declined' && !g.needsRoom);

  const unassignedMembers = [];
  eligibleGuests.forEach(g => {
    if (!g.members || g.members.length === 0) g.members = [{ name: g.name, stayLocation: locations[0], roomId: '' }];
    g.members.forEach((m, mIdx) => {
      const item = { guestId: g.id, primaryName: g.name, side: g.side, pax: g.pax, memberIdx: mIdx, memberName: m.name, stayLocation: m.stayLocation || '', roomId: m.roomId || '' };
      if (!m.roomId) unassignedMembers.push(item);
    });
  });

  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold">Top View • Stay Places &amp; Room Cards</span>
          <h4 class="font-serif text-2xl font-bold text-cream">1. All Stay Locations &amp; Room-Wise Occupancy Cards</h4>
          <p class="text-sm text-muted">Grouped by Hotel Property and individual Room Number. Only guests marked "Needs Room" (${eligibleGuests.length} families) are allotted here; ${skippedLocalGuests.length} local family is excluded.</p>
        </div>
        <button onclick="addRoomBlockQuick()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Add New Hotel Room Card</button>
      </div>

      <div class="space-y-6">
        ${locations.map(loc => {
          const locRooms = roomInventory.filter(r => r.location === loc);
          const totalBeds = locRooms.reduce((s, r) => s + r.maxPax, 0);
          const occupiedBeds = locRooms.reduce((s, r) => s + getRoomOccupants(r.id).length, 0);

          return `
            <div class="bg-obsidian/90 border border-borderWarm rounded-2xl p-5 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-borderWarm pb-3">
                <div>
                  <h5 class="font-serif text-2xl font-bold text-gold">🏨 ${loc}</h5>
                  <span class="text-xs text-muted">${locRooms.length} Rooms Configured • ${occupiedBeds} of${totalBeds} Beds Occupied</span>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/15 text-gold">${Math.round((occupiedBeds / totalBeds) * 100)}% Occupied</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${locRooms.map(rm => {
                  const occ = getRoomOccupants(rm.id);
                  const isFull = occ.length >= rm.maxPax;
                  const statusBadge = occ.length === 0
                    ? '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-card text-muted">Vacant (0/' + rm.maxPax + ')</span>'
                    : isFull
                    ? '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-emeraldSS/20 text-emeraldSS">Full (' + occ.length + '/' + rm.maxPax + ')</span>'
                    : '<span class="px-2.5 py-0.5 rounded text-xs font-bold bg-amberSS/20 text-amberSS">Partial (' + occ.length + '/' + rm.maxPax + ')</span>';

                  return `
                    <div class="bg-card border ${occ.length > 0 ? 'border-gold/40' : 'border-borderWarm'} rounded-2xl p-4 space-y-3 flex flex-col justify-between">
                      <div class="space-y-2">
                        <div class="flex justify-between items-center">
                          <strong class="font-mono text-lg text-cream">Room ${rm.roomNumber}</strong>
                          ${statusBadge}
                        </div>
                        <span class="text-xs text-gold block">${rm.type}</span>
                        <div class="space-y-1.5 pt-2 border-t border-borderWarm/60">
                          ${occ.length === 0 ? `<p class="text-xs text-muted italic">No guests allotted yet</p>` : occ.map(o => `
                            <div class="flex items-center justify-between bg-obsidian px-2.5 py-1.5 rounded-lg text-xs">
                              <span class="text-cream font-semibold">👤 ${o.memberName}</span>
                              <button onclick="updateMemberRoomInline('${o.guestId}',${o.memberIndex}, '')" class="text-crimsonSS hover:underline text-[11px]">Unassign</button>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="bento-card p-6 space-y-4 border-amberSS/50">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span class="text-xs font-mono uppercase text-amberSS font-bold">Unassigned Queue</span>
          <h4 class="font-serif text-2xl font-bold text-cream">2. Unassigned Outstation Members Needing Room (${unassignedMembers.length})</h4>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-amberSS/20 text-amberSS">${unassignedMembers.length} Pending Allotment</span>
      </div>

      ${unassignedMembers.length === 0 ? `
        <div class="bg-emeraldSS/10 border border-emeraldSS/30 rounded-xl p-4 text-sm text-emeraldSS font-bold">
          ✓ All attending outstation members needing stay have been allotted rooms!
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${unassignedMembers.map(u => {
            const chosenLoc = u.stayLocation || locations[0];
            const roomsForLoc = roomInventory.filter(r => r.location === chosenLoc);
            return `
              <div class="bg-obsidian border border-amberSS/40 rounded-2xl p-4 space-y-3">
                <div class="flex justify-between items-start">
                  <div>
                    <strong class="text-sm text-cream block">${u.memberName}</strong>
                    <span class="text-xs text-muted">Family: ${u.primaryName} (${u.side})</span>
                  </div>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amberSS/20 text-amberSS">Unassigned</span>
                </div>
                <div class="space-y-2 text-xs">
                  <div>
                    <label class="text-muted block mb-1">1. Select Stay Place (Hotel):</label>
                    <select onchange="updateMemberStayLocation('${u.guestId}', ${u.memberIdx}, this.value)" class="ss-input text-xs font-bold text-gold">
                      ${locations.map(l => `<option value="${l}" ${chosenLoc === l ? 'selected' : ''}>${l}</option>`).join('')}
                    </select>
                  </div>
                  <div>
                    <label class="text-muted block mb-1">2. Select Room in ${chosenLoc}:</label>
                    <select onchange="updateMemberRoomInline('${u.guestId}', ${u.memberIdx}, this.value)" class="ss-input text-xs font-bold text-emeraldSS">
                      <option value="">-- Choose Room --</option>
                      ${roomsForLoc.map(rm => `<option value="${rm.id}">Rm ${rm.roomNumber} (${rm.type}) [${getRoomOccupants(rm.id).length}/${rm.maxPax}]</option>`).join('')}
                    </select>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>

    <div class="bento-card p-6 space-y-4">
      <div>
        <span class="text-xs font-mono uppercase text-gold">Guest Member Allotment Directory</span>
        <h4 class="font-serif text-2xl font-bold text-cream">3. Guest-Wise Stay Place &amp; Room Allotment Controls</h4>
        <p class="text-sm text-muted">Stay Place and Room Number are split into separate dropdowns for every family member.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${eligibleGuests.map(g => `
          <div class="bg-obsidian/90 border border-borderWarm rounded-2xl p-5 space-y-3">
            <div class="flex justify-between items-center border-b border-borderWarm pb-2.5">
              <div>
                <strong class="font-serif text-xl text-cream">${g.name} Family</strong>
                <span class="text-xs text-muted block">${g.side} Side • ${g.pax} Attending Pax</span>
              </div>
              <button onclick="addMemberToFamilyInline('${g.id}')" class="px-3 py-1 rounded-lg bg-card border border-gold/40 text-xs font-bold text-gold">+ Add Member</button>
            </div>
            <div class="space-y-2.5">
              ${(g.members || []).map((m, mIdx) => {
                const rmObj = roomInventory.find(r => r.id === m.roomId);
                const activeLoc = rmObj ? rmObj.location : (m.stayLocation || locations[0]);
                const availableRooms = roomInventory.filter(r => r.location === activeLoc);

                return `
                  <div class="bg-card p-3 rounded-xl border border-borderWarm/70 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                    <input type="text" value="${m.name}" onchange="updateMemberNameInline('${g.id}', ${mIdx}, this.value)" class="ss-input text-xs font-semibold" />
                    <select onchange="updateMemberStayLocation('${g.id}', ${mIdx}, this.value)" class="ss-input text-xs text-gold font-bold">
                      ${locations.map(l => `<option value="${l}" ${activeLoc === l ? 'selected' : ''}>🏨 ${l}</option>`).join('')}
                    </select>
                    <select onchange="updateMemberRoomInline('${g.id}', ${mIdx}, this.value)" class="ss-input text-xs ${m.roomId ? 'text-emeraldSS font-bold' : 'text-amberSS'}">
                      <option value="">-- Unassigned --</option>
                      ${availableRooms.map(rm => `<option value="${rm.id}" ${m.roomId === rm.id ? 'selected' : ''}>Rm ${rm.roomNumber} (${rm.type})</option>`).join('')}
                    </select>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}