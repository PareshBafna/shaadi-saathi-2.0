import { showToast } from '../utils/weddings-helpers.js';

export function renderWebInviteModule(viewport, headerBanner) {
    viewport.innerHTML = headerBanner + `
      <div class="bento-card p-8 text-center max-w-3xl mx-auto space-y-5">
        <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">Included in ₹14,999 &amp; ₹19,999 Plans (Available as ₹3,999 Add-On for ₹9,999)</span>
        <h3 class="font-serif text-4xl font-bold text-cream">Interactive 3D Wax-Seal Web Invitation</h3>
        <p class="text-base text-muted">Features animated golden monogram wax seal, falling rose petals, background Shehnai audio, Google Maps venue routing, and automatic event-tier filtering per guest.</p>
        <div onclick="showToast('✨ Royal Wax Seal Opened! Playing Shehnai Chime...')" class="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-gold to-amber-800 border-4 border-cream/40 flex flex-col items-center justify-center cursor-pointer shadow-2xl hover:scale-105 transition">
          <span class="font-serif font-extrabold text-3xl text-obsidian">A&amp;A</span>
          <span class="text-xs font-bold text-obsidian uppercase">Tap Seal</span>
        </div>
      </div>
    `;
}
