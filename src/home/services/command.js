// Command, Invitations & Guest List Suite. One object per service: suite card data + deep-dive copy + preview markup.
export const command = {
  id: "suite1",
  tab: { icon: "📊", label: "1. Command, Invites & Guests (6)" },
  title: "Command, Invitations & Guest List Suite",
  services: [
    {
      module: "overview", icon: "📊", name: "Telemetry", badge: "Live Rollup",
      desc: "Complete live rollup of headcounts, room allotments, arrival PNRs, budget & tasks",
      kicker: "TELEMETRY",
      title: "Bird’s-eye command pulse across every department",
      text: "Stop cross-checking five different spreadsheets. Telemetry aggregates confirmed headcounts, room allotments, airport/station arrivals, and vendor payouts into a single live pulse board.",
      extra: `
  <ul class="mt-4 space-y-2 text-sm text-cream">
    <li>✦ Instant headcount split between Bride &amp; Groom sides</li>
    <li>✦ Real-time hotel room allotment saturation meter</li>
    <li>✦ Automated alert flags for pending RSVPs and unallotted rooms</li>
  </ul>
      `,
      cta: "📊 Launch Telemetry Board →",
      visual: `
<div class="bento-card p-6 space-y-4">
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
    <div class="bg-obsidian p-3.5 rounded-2xl border border-borderWarm"><span class="text-xs text-muted block">Confirmed</span><strong class="text-2xl font-serif text-emeraldSS">78%</strong></div>
    <div class="bg-obsidian p-3.5 rounded-2xl border border-borderWarm"><span class="text-xs text-muted block">Rooms Filled</span><strong class="text-2xl font-serif text-gold">5 / 6</strong></div>
    <div class="bg-obsidian p-3.5 rounded-2xl border border-borderWarm"><span class="text-xs text-muted block">Flight + Train</span><strong class="text-2xl font-serif text-skySS">12 Pax</strong></div>
    <div class="bg-obsidian p-3.5 rounded-2xl border border-borderWarm"><span class="text-xs text-muted block">Budget Settled</span><strong class="text-2xl font-serif text-cream">62%</strong></div>
  </div>
  <div class="bg-obsidian p-4 rounded-2xl border border-borderWarm space-y-2">
    <div class="flex justify-between text-xs font-bold"><span>RSVP Progress Bar</span><span class="text-emeraldSS">412 Attending • 46 Pending</span></div>
    <div class="w-full h-3 bg-surface rounded-full overflow-hidden flex" role="img" aria-label="RSVP split: 78 percent attending, 14 percent pending, 8 percent declined">
      <div class="bg-emeraldSS h-full" style="width:78%"></div>
      <div class="bg-amberSS h-full" style="width:14%"></div>
      <div class="bg-crimsonSS h-full" style="width:8%"></div>
    </div>
  </div>
</div>
      `
    },
    {
      module: "whatsapp", icon: "💬", name: "WhatsApp Deck", badge: "2,840 Credits",
      desc: "Send event-filtered invites & reminders using your plan credits (₹1/extra msg)",
      kicker: "WHATSAPP DECK",
      title: "Official verified WhatsApp dispatches with smart variables",
      text: "Deliver personal invitations, room keys, and driver details straight to guests' WhatsApp from a green-tick verified sender—without saving hundreds of phone numbers first.",
      extra: `
  <div class="mt-5 flex flex-wrap gap-2">
    <span class="px-3 py-1.5 rounded-xl bg-waGreen/15 border border-waGreen/30 text-xs font-bold text-waGreen">✓ Official Meta Template</span>
    <span class="px-3 py-1.5 rounded-xl bg-card border border-borderWarm text-xs text-cream">₹1 / Extra Credit</span>
  </div>
      `,
      cta: "💬 Open WhatsApp Deck →",
      visual: `
<div class="bg-[#0B141A] border-2 border-[#233138] rounded-3xl p-5 max-w-md mx-auto w-full shadow-2xl space-y-3">
  <div class="flex items-center gap-3 pb-3 border-b border-[#233138]">
    <div class="w-9 h-9 rounded-full bg-waGreen flex items-center justify-center text-obsidian font-bold">SS</div>
    <div>
      <strong class="text-sm text-cream block">Shaadi Saathi Concierge ✓</strong>
      <span class="text-[11px] text-waGreen">Official Verified Business Account</span>
    </div>
  </div>
  <div class="bg-[#1F2C34] rounded-2xl rounded-tl-none p-4 text-xs text-cream space-y-2 leading-relaxed">
    <p class="text-gold font-bold">॥ श्री गणेशाय नमः ॥</p>
    <p>Pranam <strong>Smt. &amp; Shri Anita Sharma Ji</strong> 🙏</p>
    <p>With blessings of <em>Smt. Sunita &amp; Shri Rajesh Sharma</em>, you are cordially invited to Aarav &amp; Ananya’s wedding celebrations in Udaipur.</p>
    <div class="bg-black/30 p-2.5 rounded-xl text-[11px] text-muted">
      📅 Invited: Haldi, Mehendi, Sangeet &amp; Reception<br/>
      🏨 Allotted Stay: Taj Lake Palace (Rm 101 &amp; 102)
    </div>
  </div>
  <div class="grid grid-cols-2 gap-2 text-center text-xs font-bold text-[#00A884]">
    <div class="bg-[#1F2C34] py-2.5 rounded-xl">💌 Open 3D Web Invite</div>
    <div class="bg-[#1F2C34] py-2.5 rounded-xl">✓ Confirm RSVP</div>
  </div>
</div>
      `
    },
    {
      module: "hosts", icon: "🙏", name: "Family Hosts", badge: "Multiple Host Profiles",
      desc: "Configure Bride side, Groom side & Patriarch salutations for invitations",
      kicker: "FAMILY HOSTS",
      title: "Multiple Host Profiles for Bride side, Groom side &amp; Elders",
      text: "In Indian weddings, the Bride’s maternal uncle and the Groom’s grandfather send invitations under their own names. Configure Multiple Host Profiles so every guest sees the right family elder’s salutation.",
      cta: "🙏 Configure Multiple Host Profiles →",
      visual: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="bento-card p-5 border-l-4 border-l-gold space-y-2">
    <span class="text-[11px] font-bold uppercase text-gold block">Bride Side Host Profile</span>
    <h4 class="font-serif text-xl font-bold text-cream">Smt. Sunita &amp; Shri Rajesh Sharma</h4>
    <p class="text-xs italic text-muted">“With blessings of Smt. Sunita &amp; Shri Rajesh Sharma, we invite you to celebrate Ananya’s wedding...”</p>
  </div>
  <div class="bento-card p-5 border-l-4 border-l-emeraldSS space-y-2">
    <span class="text-[11px] font-bold uppercase text-emeraldSS block">Groom Side Host Profile</span>
    <h4 class="font-serif text-xl font-bold text-cream">Smt. Kavita &amp; Shri Paresh Bafna</h4>
    <p class="text-xs italic text-muted">“With compliments from Smt. Kavita &amp; Shri Paresh Bafna, join us for Aarav’s wedding celebrations...”</p>
  </div>
</div>
      `
    },
    {
      module: "events", icon: "🎪", name: "Events", badge: "Unlimited Events",
      desc: "Haldi, Mehendi, Sangeet & Reception with venues, dress codes & expected pax",
      kicker: "EVENTS",
      title: "Unlimited Events with dress codes, venues &amp; headcounts",
      text: "Whether you are hosting an intimate 2-event celebration or a 7-event destination extravaganza, create Unlimited Events with wardrobe palettes, venue map pins, and live catering headcounts.",
      cta: "🎪 Manage Unlimited Events →",
      visual: `
<div class="grid grid-cols-2 gap-3.5">
  <div class="bg-gradient-to-br from-amber-500/20 to-obsidian border border-amber-400/40 rounded-2xl p-4 space-y-1.5">
    <span class="text-xs font-bold text-amber-300">12 Dec • 12:30 PM</span>
    <strong class="block font-serif text-xl text-cream">Haldi Carnival</strong>
    <span class="text-xs text-muted block">👗 Sunshine Yellow</span>
    <span class="text-xs font-mono text-gold">180 Expected Pax</span>
  </div>
  <div class="bg-gradient-to-br from-emerald-500/20 to-obsidian border border-emerald-400/40 rounded-2xl p-4 space-y-1.5">
    <span class="text-xs font-bold text-emerald-300">12 Dec • 04:30 PM</span>
    <strong class="block font-serif text-xl text-cream">Rajwada Mehendi</strong>
    <span class="text-xs text-muted block">👗 Emerald Mirrorwork</span>
    <span class="text-xs font-mono text-gold">220 Expected Pax</span>
  </div>
  <div class="bg-gradient-to-br from-purple-500/20 to-obsidian border border-purple-400/40 rounded-2xl p-4 space-y-1.5">
    <span class="text-xs font-bold text-purple-300">13 Dec • 08:00 PM</span>
    <strong class="block font-serif text-xl text-cream">Starlight Sangeet</strong>
    <span class="text-xs text-muted block">👗 Indo-Western Glam</span>
    <span class="text-xs font-mono text-gold">310 Expected Pax</span>
  </div>
  <div class="bg-gradient-to-br from-rose-500/20 to-obsidian border border-rose-400/40 rounded-2xl p-4 space-y-1.5">
    <span class="text-xs font-bold text-rose-300">14 Dec • 06:45 PM</span>
    <strong class="block font-serif text-xl text-cream">Royal Reception</strong>
    <span class="text-xs text-muted block">👗 Royal Bandhgala</span>
    <span class="text-xs font-mono text-gold">412 Expected Pax</span>
  </div>
</div>
      `
    },
    {
      module: "rsvp", icon: "👥", name: "Guest", badge: "Editable Table",
      desc: "Inline editable table for RSVP status, Pax count & Variant A/B/C assignment",
      kicker: "GUEST",
      title: "Privacy-first invite tiers: control who sees which event",
      text: "Not every guest is invited to every function. Assign families to Variant A, B, or C in the live guest table—their digital pass automatically hides uninvited events so nobody feels awkward.",
      cta: "👥 Open Editable Guest Table →",
      visual: `
<div class="bento-card p-5 overflow-x-auto">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-borderWarm text-gold uppercase">
        <th class="py-2.5">Invite Tier</th>
        <th class="py-2.5 text-center">Haldi</th>
        <th class="py-2.5 text-center">Mehendi</th>
        <th class="py-2.5 text-center">Sangeet</th>
        <th class="py-2.5 text-center">Reception</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-borderWarm/50 text-cream">
      <tr>
        <td class="py-3 font-bold">Variant A (Colleagues)</td>
        <td class="text-center text-muted">—</td>
        <td class="text-center text-muted">—</td>
        <td class="text-center text-muted">—</td>
        <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
      </tr>
      <tr>
        <td class="py-3 font-bold">Variant B (Friends)</td>
        <td class="text-center text-muted">—</td>
        <td class="text-center text-muted">—</td>
        <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
        <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
      </tr>
      <tr>
        <td class="py-3 font-bold text-gold">Variant C (Close Family)</td>
        <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
        <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
        <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
        <td class="text-center text-emeraldSS font-bold">✓ Shown</td>
      </tr>
    </tbody>
  </table>
</div>
      `
    },
    {
      module: "webinvites", icon: "💌", name: "Web Invite", badge: "Royal Web Pass",
      desc: "Interactive 3D monogram wax seal, Shehnai audio, rose petals & Google Maps",
      kicker: "WEB INVITE",
      title: "Bespoke 3D Wax-Seal Web Invitation with Shehnai chime",
      text: "Replace static 15MB PDFs that fail to load. Guests tap a gleaming 3D monogram wax seal to unveil falling rose petals, classical Shehnai audio, and 1-tap Google Maps directions.",
      cta: "💌 Preview 3D Web Invite →",
      visual: `
<div class="bento-card web-invite-card space-y-4">
  <span class="text-xs uppercase tracking-widest text-gold font-bold block">Tap Seal To Unveil Invitation</span>
  <button type="button" data-toast="✨ Wax Seal Unbroken! Playing Royal Shehnai..." class="wax-seal-circle" aria-label="Open the invitation seal">
    <span class="wax-seal-initials">A&amp;A</span>
    <span class="wax-seal-sub">Unveil</span>
  </button>
  <p class="font-serif italic text-xl text-cream">Aarav weds Ananya • Taj Lake Palace, Udaipur</p>
</div>
      `
    },
  ]
};
