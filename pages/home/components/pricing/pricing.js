import { HOME_ADDONS } from '../../api/home-api.js';

function formatINR(n) {
  return '₹' + Number(n || 0).toLocaleString('en-IN');
}

export async function initPricing(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  const res = await fetch('./pages/home/components/pricing/pricing.html');
  slot.innerHTML = await res.text();

  renderAddonsGrid();
  window.toggleAddon = toggleAddon;
}

export function renderAddonsGrid() {
  const box = document.getElementById('addonsGrid');
  const totEl = document.getElementById('addonTotalDisplay');
  if (!box || !totEl) return;

  const total = HOME_ADDONS.filter(a => a.selected).reduce((s, a) => s + a.price, 0);
  totEl.textContent = formatINR(total);

  box.innerHTML = HOME_ADDONS.map(a => `
    <div onclick="toggleAddon('${a.id}')" class="p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between gap-4 ${a.selected ? 'bg-gold/15 border-gold shadow-lg' : 'bg-obsidian/90 border-borderWarm hover:border-gold/50'}">
      <div class="space-y-2">
        <div class="flex items-center justify-between gap-2">
          <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-card border border-borderWarm text-gold">${a.forPlan}</span>
          <span class="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${a.selected ? 'bg-gold text-obsidian border-gold' : 'border-muted text-transparent'}">✓</span>
        </div>
        <h4 class="font-serif text-xl font-bold text-cream">${a.title}</h4>
        <p class="text-xs text-muted">${a.desc}</p>
      </div>
      <div class="flex items-center justify-between pt-3 border-t border-borderWarm/60">
        <strong class="font-serif text-2xl font-bold text-gold">+ ${formatINR(a.price)}</strong>
        <span class="text-xs font-bold ${a.selected ? 'text-emeraldSS' : 'text-cream/80'}">${a.selected ? '✓ Added to Plan' : '+ Add Service'}</span>
      </div>
    </div>
  `).join('');
}

export function toggleAddon(id) {
  const item = HOME_ADDONS.find(x => x.id === id);
  if (!item) return;
  item.selected = !item.selected;
  renderAddonsGrid();
  if (typeof window.showToast === 'function') {
    window.showToast(item.selected ? `Added ${item.title} (+${formatINR(item.price)})` : `Removed ${item.title}`);
  }
}