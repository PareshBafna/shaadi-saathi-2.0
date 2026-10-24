import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/stay-accommodation/stay-accommodation.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">STAY ACCOMODATION</span>
        <h2>Granular Room Allotments for multi-room families</h2>
        <p class="mt-3">When a family of 4 needs parents in a Lake View room and kids in a separate Garden room, our Room Allotments engine maps beds per individual member instead of lumping the whole family together.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('rooms')" class="hp-link">🏨 Open Room Allotments →</button></div>
      </div>
      <div class="bento-card p-6 space-y-4">
        <div class="bg-obsidian p-4 rounded-xl border border-gold/40 flex items-center justify-between">
          <div><strong class="text-cream block">Primary Invite: Anita Sharma Family</strong><span class="text-xs text-muted">3 Attending Members &bull; Split Across 2 Rooms</span></div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">Room Allotments</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="bg-card p-4 rounded-xl border border-borderWarm">
            <span class="text-xs font-mono text-emeraldSS font-bold">🏨 Room 101 &bull; Taj Lake View</span>
            <p class="text-sm text-cream font-semibold mt-1">1. Anita Sharma<br/>2. Rajesh Sharma</p>
          </div>
          <div class="bg-card p-4 rounded-xl border border-borderWarm">
            <span class="text-xs font-mono text-amberSS font-bold">🏨 Room 102 &bull; Taj Lake View</span>
            <p class="text-sm text-cream font-semibold mt-1">3. Rohan Sharma (Son)</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('rooms');
}