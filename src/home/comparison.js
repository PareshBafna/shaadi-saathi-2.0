// "Why Families Switch" section.
const PROBLEMS = [
  {
    tag: 'Invites',
    title: 'Everyone sees every event',
    text: 'One common invite PDF is forwarded to all guests. Colleagues see the intimate family Haldi, while cousins miss the Sangeet timing.',
    fix: 'Fixed With Invite Variants',
    fixText: 'Assign each family to <strong>Variant A (1 Event)</strong>, <strong>Variant B (2 Events)</strong>, or <strong>Variant C (All Events)</strong>.'
  },
  {
    tag: 'Hotel Stay',
    title: 'Room allotment confusion',
    text: 'Local guests get mixed up with outstation guests needing rooms, and multi-member families get double-booked across hotels.',
    fix: 'Fixed With Room Allotments',
    fixText: 'Mark who <strong>Needs Stay</strong> vs. <strong>Local</strong>, and allot hotel &amp; room per attending member.'
  },
  {
    tag: 'Arrivals',
    title: 'Scattered flight &amp; train timings',
    text: 'Guest flight and train tickets sit buried across multiple WhatsApp chats, so nobody knows who arrives when or on which route.',
    fix: 'Fixed With Route &amp; Carrier Desks',
    fixText: 'Manage <strong>Flight Arrangements</strong> and <strong>Train Arrangements</strong> in dedicated live PNR tables.'
  }
];

const cardHtml = p => `
  <article class="hp-card flex flex-col justify-between space-y-5">
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-crimsonSS/15 text-crimsonSS border border-crimsonSS/30">✕ Without Shaadi Saathi</span>
        <span class="text-xs font-mono text-muted">${p.tag}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="text-sm">${p.text}</p>
    </div>
    <div class="bg-emeraldSS/10 border border-emeraldSS/30 rounded-2xl p-4 space-y-1.5">
      <span class="text-xs font-bold uppercase tracking-wider text-emeraldSS block">✓ ${p.fix}</span>
      <p class="text-sm text-cream">${p.fixText}</p>
    </div>
  </article>`;

export function renderComparison() {
  return `
<section class="hp-band" id="problem">
  <div class="hp-wrap">
    <div class="hp-head">
      <span class="hp-kicker">Why Families Switch</span>
      <h2>Where traditional wedding planning breaks — and how we fix it</h2>
    </div>
    <div class="hp-grid3">${PROBLEMS.map(cardHtml).join('')}</div>
  </div>
</section>`;
}
