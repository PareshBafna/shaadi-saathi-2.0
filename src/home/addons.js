// "Optional Add-Ons" section: pick add-ons, see running total.
import { showToast } from '../components/toast.js';

const ADDONS = [
  { id: 'ad1', title: 'WhatsApp Guest Broadcast & RSVP Pack', forPlan: 'Standalone or Any Plan', desc: 'Send official green-tick WhatsApp invites, collect RSVPs & dispatch itinerary updates (Includes 1,000 Credits).', price: 2999 },
  { id: 'ad2', title: '3D Interactive Wax-Seal Web Invite', forPlan: 'Standalone or Silver Plan', desc: 'Custom-coded 3D monogram wax seal web invitation with Shehnai audio, falling petals & Google Maps routing.', price: 3999 },
  { id: 'ad3', title: 'Extra WhatsApp Message Credits (1,000 Pack)', forPlan: 'Standalone or Any Plan (₹1 / msg)', desc: 'Top up 1,000 additional verified WhatsApp messages anytime for reminders, room keys & driver alerts.', price: 1000 },
  { id: 'ad4', title: 'Custom WhatsApp Message Template Pack', forPlan: 'Standalone or Silver / Gold', desc: 'Get Meta-approved custom wording, family crests & personalised button labels on WhatsApp.', price: 2499 },
  { id: 'ad5', title: 'Shagun, Budget & Vendor Tracker Pack', forPlan: 'Standalone Module', desc: 'Private guest-linked Shagun & Chandla ledger, wedding cashflow planner & vendor payment tracker.', price: 1999 },
  { id: 'ad6', title: 'Dedicated Data Setup & CSV Concierge', forPlan: 'Standalone or Any Plan', desc: 'Our team cleans your raw Excel sheets, sets up room blocks & configures guest event variants.', price: 1999 }
];

const selected = new Set();
const inr = n => '₹' + Number(n || 0).toLocaleString('en-IN');

const cardHtml = a => {
  const on = selected.has(a.id);
  return `
  <div class="addon-card${on ? ' selected' : ''}" role="checkbox" aria-checked="${on}" tabindex="0" data-addon="${a.id}">
    <div class="space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-card border border-borderWarm text-gold">${a.forPlan}</span>
        <span aria-hidden="true" class="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${on ? 'bg-gold text-obsidian border-gold' : 'border-muted text-transparent'}">✓</span>
      </div>
      <h4 class="font-serif text-xl font-bold text-cream">${a.title}</h4>
      <p class="text-xs text-muted">${a.desc}</p>
    </div>
    <div class="flex items-center justify-between pt-3 border-t border-borderWarm/60">
      <strong class="font-serif text-2xl font-bold text-gold">+ ${inr(a.price)}</strong>
      <span class="text-xs font-bold ${on ? 'text-emeraldSS' : 'text-cream/80'}">${on ? '✓ Selected' : '+ Select Service'}</span>
    </div>
  </div>`;
};

export function renderAddons() {
  return `
<section class="addons-band" id="addons-section">
  <div class="hp-wrap">
    <div class="bento-card p-5 sm:p-8 space-y-6 border-gold/40">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span class="hp-kicker !mb-2">Optional Add-Ons</span>
          <h3 class="text-2xl sm:text-3xl font-serif font-bold text-cream">Need a specific service not in your plan? Add it separately.</h3>
          <p class="text-sm text-muted mt-1">Customize any wedding plan with standalone add-ons. Tap any add-on to test adding it to your estimate.</p>
        </div>
        <div class="bg-obsidian border border-gold/50 rounded-2xl px-5 py-3 text-right shrink-0">
          <span class="text-xs text-muted block">Selected Add-Ons Total</span>
          <strong id="addonTotalDisplay" class="font-serif text-2xl font-bold text-gold" aria-live="polite">${inr(0)}</strong>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="addonsGrid" role="group" aria-label="Optional add-ons">${ADDONS.map(cardHtml).join('')}</div>
    </div>
  </div>
</section>`;
}

export function bindAddons(root) {
  const grid = root.querySelector('#addonsGrid');
  const total = root.querySelector('#addonTotalDisplay');

  function toggle(id) {
    const addon = ADDONS.find(a => a.id === id);
    if (!addon) return;
    const on = !selected.has(id);
    on ? selected.add(id) : selected.delete(id);

    grid.innerHTML = ADDONS.map(cardHtml).join('');
    total.textContent = inr(ADDONS.filter(a => selected.has(a.id)).reduce((sum, a) => sum + a.price, 0));
    grid.querySelector(`[data-addon="${id}"]`).focus();
    showToast(on ? `Added ${addon.title} (+${inr(addon.price)})` : `Removed ${addon.title}`);
  }

  grid.addEventListener('click', e => {
    const card = e.target.closest('[data-addon]');
    if (card) toggle(card.dataset.addon);
  });
  grid.addEventListener('keydown', e => {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    const card = e.target.closest('[data-addon]');
    if (!card) return;
    e.preventDefault();
    toggle(card.dataset.addon);
  });
}
