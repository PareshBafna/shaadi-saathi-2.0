export async function initComparison(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;
  slot.innerHTML = `
    <section class="hp-band" id="problem">
      <div class="hp-wrap">
        <div class="hp-head">
          <span class="hp-kicker">Why Families Switch</span>
          <h2>Where traditional wedding planning breaks — and how we fix it</h2>
        </div>
        <div class="hp-grid3">
          <article class="hp-card flex flex-col justify-between space-y-5">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-crimsonSS/15 text-crimsonSS border border-crimsonSS/30">✕ Without Shaadi Saathi</span>
                <span class="text-xs font-mono text-muted">Invites</span>
              </div>
              <h3>Everyone sees every event</h3>
              <p class="text-sm">One common invite PDF is forwarded to all guests. Colleagues see the intimate family Haldi, while cousins miss the Sangeet timing.</p>
            </div>
            <div class="bg-emeraldSS/10 border border-emeraldSS/30 rounded-2xl p-4 space-y-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-emeraldSS block">✓ Fixed With Invite Variants</span>
              <p class="text-sm text-cream">Assign each family to <strong>Variant A (1 Event)</strong>, <strong>Variant B (2 Events)</strong>, or <strong>Variant C (All Events)</strong>.</p>
            </div>
          </article>

          <article class="hp-card flex flex-col justify-between space-y-5">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-crimsonSS/15 text-crimsonSS border border-crimsonSS/30">✕ Without Shaadi Saathi</span>
                <span class="text-xs font-mono text-muted">Hotel Stay</span>
              </div>
              <h3>Room allotment confusion</h3>
              <p class="text-sm">Local guests get mixed up with outstation guests needing rooms, and multi-member families get double-booked across hotels.</p>
            </div>
            <div class="bg-emeraldSS/10 border border-emeraldSS/30 rounded-2xl p-4 space-y-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-emeraldSS block">✓ Fixed With Room Allotments</span>
              <p class="text-sm text-cream">Mark who <strong>Needs Stay</strong> vs. <strong>Local</strong>, and allot hotel &amp; room per attending member.</p>
            </div>
          </article>

          <article class="hp-card flex flex-col justify-between space-y-5">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-crimsonSS/15 text-crimsonSS border border-crimsonSS/30">✕ Without Shaadi Saathi</span>
                <span class="text-xs font-mono text-muted">Arrivals</span>
              </div>
              <h3>Scattered flight &amp; train timings</h3>
              <p class="text-sm">Guest flight and train tickets sit buried across multiple WhatsApp chats, so nobody knows who arrives when or on which route.</p>
            </div>
            <div class="bg-emeraldSS/10 border border-emeraldSS/30 rounded-2xl p-4 space-y-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-emeraldSS block">✓ Fixed With Route &amp; Carrier Desks</span>
              <p class="text-sm text-cream">Manage <strong>Flight Arrangements</strong> and <strong>Train Arrangements</strong> in dedicated live PNR tables.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}