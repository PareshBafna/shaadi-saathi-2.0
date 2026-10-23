import { guests, roomInventory } from '../../shared/store.js';
import { getStayLocationsList } from '../../shared/helpers.js';
import { ask } from '../../shared/ui.js';
import { showToast } from '../../../../components/toast.js';

const member = (guestId, idx) => guests.find(g => g.id === guestId)?.members?.[Number(idx)];

export const actions = {
  // Asks for the hotel name. Same name as an existing hotel adds a room there.
  addRoomBlockQuick() {
    const last = getStayLocationsList().at(-1) || 'Main Hotel';
    const location = ask('Hotel name for the new room?', last);
    if (!location) return false;

    const next = Math.max(400, ...roomInventory.map(r => Number(r.roomNumber) || 0)) + 1;
    roomInventory.push({ id: `R-${next}`, location, roomNumber: String(next), type: 'Deluxe Room', maxPax: 2 });
    showToast(`Added Room ${next} to ${location}`);
  },

  updateMemberRoomInline(guestId, idx, roomId) {
    const m = member(guestId, idx);
    if (!m) return false;
    m.roomId = roomId;
    const room = roomInventory.find(r => r.id === roomId);
    if (room) m.stayLocation = room.location;
    showToast(`Allotted ${m.name} to ${room ? `Room ${room.roomNumber} (${room.location})` : 'Unassigned'}`);
  },

  updateMemberStayLocation(guestId, idx, location) {
    const m = member(guestId, idx);
    if (!m) return false;
    m.stayLocation = location;
    const current = roomInventory.find(r => r.id === m.roomId);
    if (current && current.location !== location) m.roomId = '';
    showToast(`Selected ${location}. Now choose room number`);
  },

  addMemberToFamilyInline(guestId) {
    const g = guests.find(x => x.id === guestId);
    if (!g) return false;
    g.members = g.members || [];
    g.members.push({ name: `${g.name.split(' ')[0]} Member ${g.members.length + 1}`, stayLocation: getStayLocationsList()[0] || '', roomId: '' });
    g.pax = g.members.length;
    showToast(`Added member under ${g.name}`);
  },

  updateMemberNameInline(guestId, idx, name) {
    const m = member(guestId, idx);
    if (!m) return false;
    m.name = name.trim();
    showToast('Updated family member name');
  }
};
