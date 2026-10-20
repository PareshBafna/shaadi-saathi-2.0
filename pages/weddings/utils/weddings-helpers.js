import { roomInventory, guests, computeLiveTelemetry } from '../data/weddings-store.js';

export function formatINR(amount) {
  return '₹' + Number(amount || 0).toLocaleString('en-IN');
}

export function getStayLocationsList() {
  const set = new Set();
  roomInventory.forEach(r => set.add(r.location));
  return Array.from(set);
}

export function getRoomOccupants(roomId) {
  const occupants = [];
  guests.forEach(g => {
    if (g.members) {
      g.members.forEach((m, idx) => {
        if (m.roomId === roomId) {
          occupants.push({ guestId: g.id, primaryName: g.name, memberIndex: idx, memberName: m.name });
        }
      });
    }
  });
  return occupants;
}

export function showToast(msg) {
  let box = document.getElementById('ssToastBox');
  if (!box) {
    box = document.createElement('div');
    box.id = 'ssToastBox';
    box.className = 'fixed bottom-6 right-6 z-50 bg-card border border-gold text-cream px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm transition-all duration-300';
    document.body.appendChild(box);
  }
  box.innerText = msg;
  box.style.opacity = '1';
  setTimeout(() => { box.style.opacity = '0'; }, 3000);
}