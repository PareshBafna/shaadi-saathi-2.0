// "Per-Wedding Pricing" section.
const PLANS = [
  {
    name: 'Silver Celebration', price: '₹9,999', credits: '2,000', cta: 'Choose Silver (₹9,999)',
    features: [
      '<strong>2,000 Verified WhatsApp Messages</strong> included (Extra @ ₹1/message)',
      'Unlimited Events &amp; Tiered Invite Variants',
      'Editable Guest List &amp; RSVP Table + CSV Import/Export',
      'Multi-Days Timeline Calendar &amp; Multiple Host Profiles',
      'Budget Planner, Event Vendors &amp; Tasks Checklist',
      { muted: true, html: '<em>3D Web Invite available as ₹3,999 Add-On</em>' }
    ]
  },
  {
    name: 'Royal Gold Suite', price: '₹14,999', credits: '4,000', cta: 'Choose Royal Gold (₹14,999)', pick: true,
    features: [
      '<strong>4,000 Verified WhatsApp Messages</strong> included (Extra @ ₹1/message)',
      'Everything in Silver Celebration',
      '<strong>3D Interactive Wax-Seal Web Invitation Included</strong>',
      'Stay Accommodation &amp; Room Allotments View',
      'Dedicated Flight Arrangements &amp; Train Arrangements Views',
      'Sangeeth Lineup, Shagun &amp; Gifts, Guestbook &amp; Gallery'
    ]
  },
  {
    name: 'Imperial Destination', price: '₹19,999', credits: '6,000', cta: 'Choose Imperial (₹19,999)',
    features: [
      '<strong>6,000 Verified WhatsApp Messages</strong> included (Extra @ ₹1/message)',
      'Everything in Royal Gold Suite (incl. 3D Web Invite)',
      '<strong>Custom WhatsApp Message Templates</strong> (Tailored copy &amp; buttons)',
      'Multiple Host Profiles Salutation Routing &amp; Team Access',
      'Dedicated Priority Onboarding &amp; Data Concierge'
    ]
  }
];

const featureHtml = f => typeof f === 'string'
  ? `<li>${f}</li>`
  : `<li class="${f.muted ? 'text-muted' : ''}">${f.html}</li>`;

const planHtml = p => `
  <article class="hp-plan${p.pick ? ' hp-pick' : ''}">
    ${p.pick
      ? `<div class="flex justify-between items-center mb-1"><h3>${p.name}</h3><span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold text-obsidian">Most Popular</span></div>`
      : `<h3>${p.name}</h3>`}
    <div class="hp-price">${p.price}<span>per wedding &middot; Includes ${p.credits} WhatsApp Credits</span></div>
    <ul>${p.features.map(featureHtml).join('')}</ul>
    <button type="button" data-go="creator" class="hp-btn ${p.pick ? 'hp-gold' : 'hp-ghost'} w-full">${p.cta}</button>
  </article>`;

export function renderPricing() {
  return `
<section class="hp-band hp-alt !pb-10 hp-flush" id="pricing">
  <div class="hp-wrap space-y-14">
    <div class="hp-head">
      <span class="hp-kicker">Per-Wedding Pricing</span>
      <h2>One wedding. One clear price. Zero subscriptions.</h2>
      <p>Pay once per wedding celebration. Includes official verified WhatsApp message credits—extra messages beyond your plan are charged at <strong>₹1 per message</strong>.</p>
    </div>
    <div class="hp-grid3">${PLANS.map(planHtml).join('')}</div>
  </div>
</section>`;
}
