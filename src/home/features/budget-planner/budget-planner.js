import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/budget-planner/budget-planner.css');
  mountEl.innerHTML = `
    <div class="hp-split pt-14 border-t border-borderWarm">
      <div>
        <span class="hp-kicker">BUDGET PLANNER</span>
        <h2>Real-time wedding cashflow: planned vs. advance paid vs. due</h2>
        <p class="mt-3">Prevent last-minute financial surprises during checkout. Track total contracted outlay against advances settled and pending balances across every wedding head.</p>
        <div class="mt-6"><button onclick="openWorkspaceDirect('budget')" class="hp-link">₹ Open Budget Planner →</button></div>
      </div>
      <div class="bento-card p-6 space-y-4">
        <div class="grid grid-cols-3 gap-3 text-center">
          <div class="bg-obsidian p-3.5 rounded-xl"><span class="text-[11px] text-muted block">Total Budget</span><strong class="text-sm sm:text-base font-mono text-cream">₹46,50,000</strong></div>
          <div class="bg-obsidian p-3.5 rounded-xl"><span class="text-[11px] text-muted block">Advance Paid</span><strong class="text-sm sm:text-base font-mono text-emeraldSS">₹29,00,000</strong></div>
          <div class="bg-obsidian p-3.5 rounded-xl"><span class="text-[11px] text-muted block">Balance Due</span><strong class="text-sm sm:text-base font-mono text-amberSS">₹17,50,000</strong></div>
        </div>
        <div class="space-y-1.5 text-xs">
          <div class="flex justify-between"><span>Catering &amp; Banquet (39% of Budget)</span><span class="text-gold">₹18,00,000</span></div>
          <div class="flex justify-between"><span>Royal Mandap &amp; Decor (35% of Budget)</span><span class="text-gold">₹16,50,000</span></div>
          <div class="flex justify-between"><span>Photography, DJ &amp; Anchoring (26% of Budget)</span><span class="text-gold">₹12,00,000</span></div>
        </div>
      </div>
    </div>
  `;

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('budget');
}