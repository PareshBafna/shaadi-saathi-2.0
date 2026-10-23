// Hero + interactive RSVP preview.
const STATUSES = ['Attending', 'Pending', 'Declined'];

const GUESTS = [
  { initial: 'A', name: 'Anita Sharma',  note: 'Bride side &middot; 3 Pax (Rm 101 &amp; 102) &middot; Variant C (All Events)', status: 0 },
  { initial: 'R', name: 'Rohit Mehra',   note: 'Groom side &middot; 2 Pax (Train PNR Linked) &middot; Variant B (2 Events)', status: 1 },
  { initial: 'K', name: 'Kavita Iyer',   note: 'Bride side &middot; 1 Pax (Local • No Stay Needed) &middot; Variant A', status: 2 },
  { initial: 'V', name: 'Vikram Singh',  note: 'Groom side &middot; 4 Pax (Rm 103 &amp; 301) &middot; Variant C (All Events)', status: 0 }
];

const guestHtml = g => `
  <li>
    <span class="hp-av" aria-hidden="true">${g.initial}</span>
    <div><strong>${g.name}</strong><small>${g.note}</small></div>
    <button type="button" class="hp-pill hp-${STATUSES[g.status]}" data-status="${g.status}" aria-label="${g.name}: ${STATUSES[g.status]}. Tap to change.">${STATUSES[g.status]}</button>
  </li>`;

export function renderHero() {
  return `
<section class="hp-hero" id="top">
  <div class="hp-wrap hp-hero-grid">
    <div>
      <span class="hp-eyebrow">
        <span class="w-2 h-2 rounded-full bg-waGreen animate-ping" aria-hidden="true"></span>
        For families hosting and planners running a wedding
      </span>
      <h1>Invite every guest to the right events. <em>Manage RSVPs, room allotments and travel in one place.</em></h1>
      <p class="hp-lead">
        Shaadi Saathi dispatches each guest's personalised web invitation on WhatsApp showing only their assigned events. Edit guest lists, hotel room allotments, flight/train PNR arrivals, wedding budgets, vendors, and family task checklists directly in live tables.
      </p>
      <div class="hp-ctas">
        <button type="button" data-go="creator" class="hp-btn hp-gold">Open Planner OS (All Weddings) →</button>
        <a class="hp-btn hp-ghost" href="#all-explainers">Explore Features ↓</a>
      </div>
      <ul class="hp-proof">
        <li>Complete Wedding Suite</li>
        <li>Unlimited Events &amp; Variants</li>
        <li>Room Allotments &amp; Travel Desks</li>
        <li>Pay Per Wedding</li>
      </ul>
    </div>

    <div class="hp-app" aria-label="Interactive guest dashboard preview">
      <div class="hp-app-head">
        <div>
          <b>Aarav &amp; Ananya</b>
          <span>12–14 Dec 2026 &middot; Taj Lake Palace, Udaipur</span>
        </div>
        <span class="hp-days">Live Demo</span>
      </div>
      <div class="hp-app-stats">
        <div><b>412</b><span>guests attending</span></div>
        <div><b>78%</b><span>RSVP confirmed</span></div>
        <div><b>46</b><span>awaiting response</span></div>
      </div>
      <ul class="hp-list" id="hpList">${GUESTS.map(guestHtml).join('')}</ul>
      <div class="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-borderWarm">
        <button type="button" class="hp-btn hp-ghost text-xs min-h-[42px] px-4" id="hpRemind">💬 Send Reminder to 46 Pending</button>
        <span id="hpMsg" class="text-xs font-bold text-gold" aria-live="polite">Tap any status pill above to change it!</span>
      </div>
    </div>
  </div>
</section>`;
}

export function bindHero(root) {
  const msg = root.querySelector('#hpMsg');

  root.querySelector('#hpList').addEventListener('click', e => {
    const pill = e.target.closest('.hp-pill');
    if (!pill) return;
    const next = (Number(pill.dataset.status) + 1) % STATUSES.length;
    const who = pill.closest('li').querySelector('strong').textContent;
    pill.dataset.status = next;
    pill.textContent = STATUSES[next];
    pill.className = `hp-pill hp-${STATUSES[next]}`;
    pill.setAttribute('aria-label', `${who}: ${STATUSES[next]}. Tap to change.`);
    msg.textContent = `${who} updated to ${STATUSES[next]}.`;
  });

  root.querySelector('#hpRemind').addEventListener('click', () => {
    msg.textContent = '✓ Reminder queued for 46 pending families.';
  });
}
