export async function initHero(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  slot.innerHTML = `
    <section class="hp-hero" id="top">
      <div class="hp-wrap hp-hero-grid">
        <div>
          <span class="hp-eyebrow">
            <span class="w-2 h-2 rounded-full bg-waGreen animate-ping"></span>
            For families hosting and planners running a wedding
          </span>
          <h1>Invite every guest to the right events. <em>Manage RSVPs, room allotments and travel in one place.</em></h1>
          <p class="hp-lead">
            Shaadi Saathi dispatches each guest's personalised web invitation on WhatsApp showing only their assigned events. Edit guest lists, hotel room allotments, flight/train PNR arrivals, wedding budgets, vendors, and family task checklists directly in live tables.
          </p>
          <div class="hp-ctas">
            <button onclick="switchRootMode('creator')" class="hp-btn hp-gold">Open Planner OS (All Weddings) →</button>
            <a class="hp-btn hp-ghost" href="#all-services-deepdives">Explore Features ↓</a>
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
            <span class="hp-days" id="hpDays">Live Demo</span>
          </div>
          <div class="hp-app-stats">
            <div><b>412</b><span>guests attending</span></div>
            <div><b>78%</b><span>RSVP confirmed</span></div>
            <div><b>46</b><span>awaiting response</span></div>
          </div>
          <ul class="hp-list" id="hpList">
            <li>
              <span class="hp-av">A</span>
              <div><strong>Anita Sharma</strong><small>Bride side &middot; 3 Pax (Rm 101 &amp; 102) &middot; Variant C (All Events)</small></div>
              <button class="hp-pill hp-Attending" data-status="0">Attending</button>
            </li>
            <li>
              <span class="hp-av">R</span>
              <div><strong>Rohit Mehra</strong><small>Groom side &middot; 2 Pax (Train PNR Linked) &middot; Variant B (2 Events)</small></div>
              <button class="hp-pill hp-Pending" data-status="1">Pending</button>
            </li>
            <li>
              <span class="hp-av">K</span>
              <div><strong>Kavita Iyer</strong><small>Bride side &middot; 1 Pax (Local • No Stay Needed) &middot; Variant A</small></div>
              <button class="hp-pill hp-Declined" data-status="2">Declined</button>
            </li>
            <li>
              <span class="hp-av">V</span>
              <div><strong>Vikram Singh</strong><small>Groom side &middot; 4 Pax (Rm 103 &amp; 301) &middot; Variant C (All Events)</small></div>
              <button class="hp-pill hp-Attending" data-status="0">Attending</button>
            </li>
          </ul>
          <div class="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-borderWarm">
            <button class="hp-btn hp-ghost text-xs min-h-[42px] px-4" id="hpRemind">💬 Send Reminder to 46 Pending</button>
            <span id="hpMsg" class="text-xs font-bold text-gold">Tap any status pill above to change it!</span>
          </div>
        </div>
      </div>
    </section>
  `;

  const NAMES = ['Attending', 'Pending', 'Declined'];
  slot.querySelectorAll('#hpList .hp-pill').forEach(p => {
    p.addEventListener('click', () => {
      const i = (+p.dataset.status + 1) % 3;
      p.dataset.status = i;
      p.textContent = NAMES[i];
      p.className = 'hp-pill hp-' + NAMES[i];
      const who = p.closest('li').querySelector('strong').textContent;
      const msgEl = document.getElementById('hpMsg');
      if (msgEl) msgEl.textContent = `${who} updated to ${NAMES[i]}.`;
    });
  });

  const rem = document.getElementById('hpRemind');
  if (rem) {
    rem.addEventListener('click', () => {
      const msgEl = document.getElementById('hpMsg');
      if (msgEl) msgEl.textContent = '✓ Reminder queued for 46 pending families.';
    });
  }
}