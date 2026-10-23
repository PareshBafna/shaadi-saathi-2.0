// Hospitality, Travel & Sangeeth Suite. One object per service: suite card data + deep-dive copy + preview markup.
export const hospitality = {
  id: "suite2",
  tab: { icon: "🏨", label: "2. Stay, Travel & Sangeeth (4)" },
  title: "Hospitality, Travel & Sangeeth Suite",
  services: [
    {
      module: "rooms", icon: "🏨", name: "Stay Accommodation", badge: "Room Allotments",
      desc: "Manage Room Allotments across individual members of each attending family",
      kicker: "STAY ACCOMMODATION",
      title: "Granular Room Allotments for multi-room families",
      text: "When a family of 4 needs parents in a Lake View room and kids in a separate Garden room, our Room Allotments engine maps beds per individual member instead of lumping the whole family together.",
      cta: "🏨 Open Room Allotments →",
      visual: `
<div class="bento-card p-6 space-y-4">
  <div class="bg-obsidian p-4 rounded-xl border border-gold/40 flex items-center justify-between">
    <div><strong class="text-cream block">Primary Invite: Anita Sharma Family</strong><span class="text-xs text-muted">3 Attending Members • Split Across 2 Rooms</span></div>
    <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">Room Allotments</span>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div class="bg-card p-4 rounded-xl border border-borderWarm">
      <span class="text-xs font-mono text-emeraldSS font-bold">🏨 Room 101 • Taj Lake View</span>
      <p class="text-sm text-cream font-semibold mt-1">1. Anita Sharma<br/>2. Rajesh Sharma</p>
    </div>
    <div class="bg-card p-4 rounded-xl border border-borderWarm">
      <span class="text-xs font-mono text-amberSS font-bold">🏨 Room 102 • Taj Lake View</span>
      <p class="text-sm text-cream font-semibold mt-1">3. Rohan Sharma (Son)</p>
    </div>
  </div>
</div>
      `
    },
    {
      module: "flights", icon: "✈️", name: "Flight Arrangements", badge: "Airport Manifest",
      desc: "Track airport arrivals, airline flight numbers, PNR codes & terminal pickups",
      kicker: "FLIGHT ARRANGEMENTS",
      title: "Dedicated airport manifest for terminal pickups",
      text: "Keep your airport hospitality team focused exclusively on air travellers. Track flight numbers, airline PNRs, terminal gates, and landing times to coordinate Innova &amp; coach convoys.",
      cta: "✈️ Open Flight Arrangements →",
      visual: `
<div class="bg-[#09131C] border border-skySS/40 rounded-2xl p-5 font-mono text-xs space-y-3">
  <div class="flex justify-between items-center text-skySS border-b border-skySS/20 pb-2">
    <span class="font-bold">✈️ MAHARANA PRATAP AIRPORT (UDR) ARRIVALS</span>
    <span>LIVE TELEMETRY</span>
  </div>
  <div class="flex justify-between items-center bg-black/40 p-3 rounded-xl">
    <div><strong class="text-cream block">6E-2142 IndiGo (PNR: VY8K2M)</strong><span class="text-muted">Anita Sharma Family • 3 Pax • Terminal 1</span></div>
    <span class="text-emeraldSS font-bold">12 Dec • 10:30 AM</span>
  </div>
  <div class="flex justify-between items-center bg-black/40 p-3 rounded-xl">
    <div><strong class="text-cream block">AI-471 Air India (PNR: MN442P)</strong><span class="text-muted">Kavita Iyer • 1 Pax • Terminal 1</span></div>
    <span class="text-emeraldSS font-bold">14 Dec • 01:15 PM</span>
  </div>
</div>
      `
    },
    {
      module: "trains", icon: "🚆", name: "Train Arrangements", badge: "Station Manifest",
      desc: "Track railway station arrivals, train numbers, coach/platform & PNR codes",
      kicker: "TRAIN ARRANGEMENTS",
      title: "Dedicated railway manifest for station platform pickups",
      text: "Separate from air arrivals, Train Arrangements tracks 10-digit IRCTC PNRs, train numbers, platform numbers, and early-morning station arrival timings for seamless luggage &amp; porter assistance.",
      cta: "🚆 Open Train Arrangements →",
      visual: `
<div class="bg-[#191209] border border-amberSS/40 rounded-2xl p-5 font-mono text-xs space-y-3">
  <div class="flex justify-between items-center text-amberSS border-b border-amberSS/20 pb-2">
    <span class="font-bold">🚆 UDAIPUR CITY STATION (UDZ) ARRIVALS</span>
    <span>PLATFORM DESK</span>
  </div>
  <div class="flex justify-between items-center bg-black/40 p-3 rounded-xl">
    <div><strong class="text-cream block">12951 Tejas Rajdhani (PNR: 2458910)</strong><span class="text-muted">Rohit Mehra &amp; Karan • 2 Pax • Platform 1</span></div>
    <span class="text-gold font-bold">12 Dec • 09:15 AM</span>
  </div>
  <div class="flex justify-between items-center bg-black/40 p-3 rounded-xl">
    <div><strong class="text-cream block">20972 Superfast Exp (PNR: 8834120)</strong><span class="text-muted">Vikram Singh Family • 4 Pax • Platform 2</span></div>
    <span class="text-gold font-bold">12 Dec • 07:45 AM</span>
  </div>
</div>
      `
    },
    {
      module: "sangeet", icon: "🎵", name: "Sangeeth Lineup", badge: "Stage Cues",
      desc: "Sequence family dance performances, audio tracks, durations & stage props",
      kicker: "SANGEETH LINEUP",
      title: "Cue-by-cue stage choreographer &amp; DJ console sheet",
      text: "Eliminate awkward silences on Sangeet night. Align the stage anchor, lighting engineer, and DJ console with exact performance sequence, audio track names, durations, and stage props.",
      cta: "🎵 Open Sangeeth Lineup →",
      visual: `
<div class="bento-card p-5 space-y-2.5">
  <div class="flex items-center gap-3.5 bg-obsidian p-3 rounded-xl border border-borderWarm">
    <span class="w-9 h-9 rounded-lg bg-gold text-obsidian font-mono font-bold flex items-center justify-center shrink-0">#01</span>
    <div class="flex-1 min-w-0">
      <strong class="text-sm text-cream block truncate">Bride Sisters (Sonal &amp; Lachi)</strong>
      <span class="text-xs text-gold">🎵 Kesariya + Chaudhary Mashup (4:15 mins) • Props: LED Dandiya &amp; Dupattas</span>
    </div>
  </div>
  <div class="flex items-center gap-3.5 bg-obsidian p-3 rounded-xl border border-borderWarm">
    <span class="w-9 h-9 rounded-lg bg-gold text-obsidian font-mono font-bold flex items-center justify-center shrink-0">#02</span>
    <div class="flex-1 min-w-0">
      <strong class="text-sm text-cream block truncate">Groom Friends (Rohit &amp; Karan)</strong>
      <span class="text-xs text-gold">🎵 Kala Chashma + Gallan Goodiyaan (3:50 mins) • Props: Aviator Shades &amp; Dhol</span>
    </div>
  </div>
  <div class="flex items-center gap-3.5 bg-obsidian p-3 rounded-xl border border-borderWarm">
    <span class="w-9 h-9 rounded-lg bg-gold text-obsidian font-mono font-bold flex items-center justify-center shrink-0">#03</span>
    <div class="flex-1 min-w-0">
      <strong class="text-sm text-cream block truncate">Parents Special (Sharma &amp; Bafna Parivar)</strong>
      <span class="text-xs text-gold">🎵 Wah Wah Ramji (3:20 mins) • Props: Rose Petal Cannons</span>
    </div>
  </div>
  <div class="flex items-center gap-3.5 bg-obsidian p-3 rounded-xl border border-borderWarm">
    <span class="w-9 h-9 rounded-lg bg-gold text-obsidian font-mono font-bold flex items-center justify-center shrink-0">#04</span>
    <div class="flex-1 min-w-0">
      <strong class="text-sm text-cream block truncate">Couple Grand Finale (Aarav &amp; Ananya)</strong>
      <span class="text-xs text-gold">🎵 Raatan Lambiyan + Tum Se Hi (4:45 mins) • Props: Cold Pyro &amp; Low Fog</span>
    </div>
  </div>
</div>
      `
    },
  ]
};
