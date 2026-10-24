import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/shagun-gifts/shagun-gifts.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">SHAGUN &amp; GIFTS</span>
        <h2>Private family Shagun, Chandla &amp; return gift ledger</h2>
        <p class="mt-3">Maintain an accurate, confidential record of Shagun envelopes, silver coins, and gift hampers received from each family so parents can reciprocate accurately at future family weddings.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('shagun')" class="hp-link">🎁 Open Shagun &amp; Gifts Ledger →</button></div>
      </div>
      <div class="bento-card p-6 space-y-3">
        <div class="flex justify-between items-center pb-3 border-b border-borderWarm">
          <span class="text-xs uppercase font-bold text-muted">Total Logged Shagun</span>
          <strong class="font-serif text-3xl text-gold">₹1,89,100</strong>
        </div>
        <div class="space-y-2 text-xs">
          <div class="flex justify-between bg-obsidian p-3 rounded-xl"><span>Vikram Singh Family (Groom Side)</span><strong class="text-gold font-mono">₹1,01,000 + Silver Coin</strong></div>
          <div class="flex justify-between bg-obsidian p-3 rounded-xl"><span>Anita Sharma Family (Bride Side)</span><strong class="text-gold font-mono">₹51,000 Envelope</strong></div>
          <div class="flex justify-between bg-obsidian p-3 rounded-xl"><span>Rohit Mehra (Friends)</span><strong class="text-gold font-mono">₹21,000 Envelope</strong></div>
        </div>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('shagun');
}