import { guests, roomInventory } from '../data/weddings-store.js';
import { getStayLocationsList, getRoomOccupants } from '../utils/weddings-helpers.js';

export function renderRoomsModule(viewport, headerBanner) {
  const locations = getStayLocationsList();
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-6">
      <h4 class="font-serif text-2xl font-bold text-cream">Hotel Stay Accommodation &amp; Rooms</h4>
      <div class="space-y-6">
        ${locations.map(loc => `
          <div class="bg-obsidian/90 border border-borderWarm rounded-2xl p-5 space-y-4">
            <h5 class="font-serif text-2xl font-bold text-gold">🏨 ${loc}</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${roomInventory.filter(r => r.location === loc).map(rm => `
                <div class="bg-card border border-borderWarm rounded-2xl p-4 space-y-3">
                  <strong class="font-mono text-lg text-cream">Room ${rm.roomNumber}</strong>
                  <span class="text-xs text-gold block">${rm.type}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}