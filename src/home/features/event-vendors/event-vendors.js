import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/event-vendors/event-vendors.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">EVENT VENDORS</span>
        <h2>Vendor contracts, agency contacts &amp; payment milestones</h2>
        <p class="mt-3">Keep every decorator, caterer, DJ, anchor, and cinematographer’s contract value, advance paid, and point-of-contact phone number accessible in one directory.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('vendors')" class="hp-link">🎤 Open Event Vendors →</button></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div class="bento-card p-4 space-y-2">
          <span class="text-[11px] font-bold text-gold uppercase">Decoration</span>
          <strong class="block text-sm text-cream">Ferns &amp; Petals Royal Mandap</strong>
          <div class="w-full h-1.5 bg-obsidian rounded-full overflow-hidden"><div class="bg-emeraldSS h-full" style="width:61%"></div></div>
          <div class="flex justify-between text-[11px] text-muted"><span>Paid: ₹10,00,000</span><span class="text-emeraldSS font-bold">61%</span></div>
        </div>
        <div class="bento-card p-4 space-y-2">
          <span class="text-[11px] font-bold text-gold uppercase">Decoration</span>
          <strong class="block text-sm text-cream">Udaipur Floral &amp; Phoolon Ki Holi Artisans</strong>
          <div class="w-full h-1.5 bg-obsidian rounded-full overflow-hidden"><div class="bg-emeraldSS h-full" style="width:71%"></div></div>
          <div class="flex justify-between text-[11px] text-muted"><span>Paid: ₹2,50,000</span><span class="text-emeraldSS font-bold">71%</span></div>
        </div>
        <div class="bento-card p-4 space-y-2">
          <span class="text-[11px] font-bold text-gold uppercase">Catering</span>
          <strong class="block text-sm text-cream">Foodlink Royal Banquet</strong>
          <div class="w-full h-1.5 bg-obsidian rounded-full overflow-hidden"><div class="bg-emeraldSS h-full" style="width:67%"></div></div>
          <div class="flex justify-between text-[11px] text-muted"><span>Paid: ₹12,00,000</span><span class="text-emeraldSS font-bold">67%</span></div>
        </div>
        <div class="bento-card p-4 space-y-2">
          <span class="text-[11px] font-bold text-gold uppercase">DJ &amp; Sound</span>
          <strong class="block text-sm text-cream">DJ Chetas &amp; Line Array Pro</strong>
          <div class="w-full h-1.5 bg-obsidian rounded-full overflow-hidden"><div class="bg-emeraldSS h-full" style="width:56%"></div></div>
          <div class="flex justify-between text-[11px] text-muted"><span>Paid: ₹2,50,000</span><span class="text-emeraldSS font-bold">56%</span></div>
        </div>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('vendors');
}