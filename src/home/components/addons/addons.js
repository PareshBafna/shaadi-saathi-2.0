import { rootUrl } from '../../../../global/core/router.js';

let standaloneAddons = [
  { id: 'ad1', title: 'WhatsApp Guest Broadcast & RSVP Pack', forPlan: 'Standalone or Any Plan', desc: 'Send official green-tick WhatsApp invites, collect RSVPs & dispatch itinerary updates (Includes 1,000 Credits).', price: 2999, selected: false },
  { id: 'ad2', title: '3D Interactive Wax-Seal Web Invite', forPlan: 'Standalone or Silver Plan', desc: 'Custom-coded 3D monogram wax seal web invitation with Shehnai audio, falling petals & Google Maps routing.', price: 3999, selected: false },
  { id: 'ad3', title: 'Extra WhatsApp Message Credits (1,000 Pack)', forPlan: 'Standalone or Any Plan (₹1 / msg)', desc: 'Top up 1,000 additional verified WhatsApp messages anytime for reminders, room keys & driver alerts.', price: 1000, selected: false },
  { id: 'ad4', title: 'Custom WhatsApp Message Template Pack', forPlan: 'Standalone or Silver / Gold', desc: 'Get Meta-approved custom wording, family crests & personalised button labels on WhatsApp.', price: 2499, selected: false },
  { id: 'ad5', title: 'Shagun, Budget & Vendor Tracker Pack', forPlan: 'Standalone Module', desc: 'Private guest-linked Shagun & Chandla ledger, wedding cashflow planner & vendor payment tracker.', price: 1999, selected: false },
  { id: 'ad6', title: 'Dedicated Data Setup & CSV Concierge', forPlan: 'Standalone or Any Plan', desc: 'Our team cleans your raw Excel sheets, sets up room blocks & configures guest event variants.', price: 1999, selected: false }
];

function formatINR(n) {
  return '₹' + Number(n || 0).toLocaleString('en-IN');
}

export async function initAddons(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  const res = await fetch(rootUrl('src/home/components/addons/addons.html'));
  slot.innerHTML = await res.text();

  renderAddonsGrid();
  window.toggleAddon = toggleAddon;
}

export function renderAddonsGrid() {
  const box = document.getElementById('addonsGrid');
  const totEl = document.getElementById('addonTotalDisplay');
  if (!box || !totEl) return;

  const total = standaloneAddons.filter(a => a.selected).reduce((s, a) => s + a.price, 0);
  totEl.textContent = formatINR(total);

  box.innerHTML = standaloneAddons.map(a => `
    <div onclick="toggleAddon('${a.id}')" class="addon-card ${a.selected ? 'selected' : ''}">
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
        <span class="text-xs font-bold ${a.selected ? 'text-emeraldSS' : 'text-cream/80'}">${a.selected ? '✓ Selected' : '+ Select Service'}</span>
      </div>
    </div>
  `).join('');
}

export function toggleAddon(id) {
  const item = standaloneAddons.find(x => x.id === id);
  if (!item) return;
  item.selected = !item.selected;
  renderAddonsGrid();
  if (typeof window.showToast === 'function') {
    window.showToast(item.selected ? `Added ${item.title} (+${formatINR(item.price)})` : `Removed ${item.title}`);
  }
}