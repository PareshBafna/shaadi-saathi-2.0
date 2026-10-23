// Vendors, Budget, Team & Timeline Suite. One object per service: suite card data + deep-dive copy + preview markup.
export const finance = {
  id: "suite4",
  tab: { icon: "₹", label: "4. Vendors, Budget & Timeline (4)" },
  title: "Vendors, Budget, Team & Timeline Suite",
  services: [
    {
      module: "vendors", icon: "🎤", name: "Event Vendors", badge: "5 Agencies",
      desc: "Manage Decoration, Catering, DJ, Anchoring & Photography agency contracts",
      kicker: "EVENT VENDORS",
      title: "Vendor contracts, agency contacts &amp; payment milestones",
      text: "Keep every decorator, caterer, DJ, anchor, and cinematographer’s contract value, advance paid, and point-of-contact phone number accessible in one directory.",
      cta: "🎤 Open Event Vendors →",
      visual: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
  <div class="bento-card p-4 space-y-2">
    <span class="text-[11px] font-bold text-gold uppercase">Decoration</span>
    <strong class="block text-sm text-cream">Ferns &amp; Petals Royal Mandap</strong>
    <div class="w-full h-1.5 bg-obsidian rounded-full overflow-hidden" role="img" aria-label="Paid 61 percent"><div class="bg-emeraldSS h-full" style="width:61%"></div></div>
    <div class="flex justify-between text-[11px] text-muted"><span>Paid: ₹10,00,000</span><span class="text-emeraldSS font-bold">61%</span></div>
  </div>
  <div class="bento-card p-4 space-y-2">
    <span class="text-[11px] font-bold text-gold uppercase">Decoration</span>
    <strong class="block text-sm text-cream">Udaipur Floral &amp; Phoolon Ki Holi Artisans</strong>
    <div class="w-full h-1.5 bg-obsidian rounded-full overflow-hidden" role="img" aria-label="Paid 71 percent"><div class="bg-emeraldSS h-full" style="width:71%"></div></div>
    <div class="flex justify-between text-[11px] text-muted"><span>Paid: ₹2,50,000</span><span class="text-emeraldSS font-bold">71%</span></div>
  </div>
  <div class="bento-card p-4 space-y-2">
    <span class="text-[11px] font-bold text-gold uppercase">Catering</span>
    <strong class="block text-sm text-cream">Foodlink Royal Banquet</strong>
    <div class="w-full h-1.5 bg-obsidian rounded-full overflow-hidden" role="img" aria-label="Paid 67 percent"><div class="bg-emeraldSS h-full" style="width:67%"></div></div>
    <div class="flex justify-between text-[11px] text-muted"><span>Paid: ₹12,00,000</span><span class="text-emeraldSS font-bold">67%</span></div>
  </div>
  <div class="bento-card p-4 space-y-2">
    <span class="text-[11px] font-bold text-gold uppercase">DJ &amp; Sound</span>
    <strong class="block text-sm text-cream">DJ Chetas &amp; Line Array Pro</strong>
    <div class="w-full h-1.5 bg-obsidian rounded-full overflow-hidden" role="img" aria-label="Paid 56 percent"><div class="bg-emeraldSS h-full" style="width:56%"></div></div>
    <div class="flex justify-between text-[11px] text-muted"><span>Paid: ₹2,50,000</span><span class="text-emeraldSS font-bold">56%</span></div>
  </div>
</div>
      `
    },
    {
      module: "budget", icon: "₹", name: "Budget Planner", badge: "62% Paid",
      desc: "Track planned vs. advance paid & remaining balance across wedding categories",
      kicker: "BUDGET PLANNER",
      title: "Real-time wedding cashflow: planned vs. advance paid vs. due",
      text: "Prevent last-minute financial surprises during checkout. Track total contracted outlay against advances settled and pending balances across every wedding head.",
      cta: "₹ Open Budget Planner →",
      visual: `
<div class="bento-card p-6 space-y-4">
  <div class="grid grid-cols-3 gap-3 text-center">
    <div class="bg-obsidian p-3.5 rounded-xl"><span class="text-[11px] text-muted block">Total Budget</span><strong class="text-sm sm:text-base font-mono text-cream">₹46,50,000</strong></div>
    <div class="bg-obsidian p-3.5 rounded-xl"><span class="text-[11px] text-muted block">Advance Paid</span><strong class="text-sm sm:text-base font-mono text-emeraldSS">₹29,00,000</strong></div>
    <div class="bg-obsidian p-3.5 rounded-xl"><span class="text-[11px] text-muted block">Balance Due</span><strong class="text-sm sm:text-base font-mono text-amberSS">₹17,50,000</strong></div>
  </div>
  <div class="space-y-1.5 text-xs">
    <div class="flex justify-between"><span>Catering &amp; Banquet (39% of Budget)</span><span class="text-gold">₹18,00,000</span></div>
    <div class="flex justify-between"><span>Royal Mandap &amp; Decor (35% of Budget)</span><span class="text-gold">₹16,50,000</span></div>
    <div class="flex justify-between"><span>Photography, DJ &amp; Anchoring (26% of Budget)</span><span class="text-gold">₹12,00,000</span></div>
  </div>
</div>
      `
    },
    {
      module: "team-access", icon: "🔐", name: "Team Access", badge: "Role Permissions",
      desc: "Control access across Creator, Family Host, Logistics Lead & Hospitality Desk",
      kicker: "TEAM ACCESS",
      title: "Granular role permissions for planners, hosts &amp; desk staff",
      text: "Give your airport pickup coordinator access to Flight &amp; Train manifests without exposing your private family Shagun ledger or Wedding Budget.",
      cta: "🔐 Manage Team Access →",
      visual: `
<div class="bento-card p-5 space-y-2.5">
  <div class="flex items-center justify-between bg-obsidian p-3 rounded-xl border border-borderWarm">
    <div><strong class="text-xs text-cream block">Paresh Bafna</strong><span class="text-[11px] text-muted">All Services + Multi-Wedding Telemetry</span></div>
    <span class="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-gold/15 text-gold">CREATOR SUPER ADMIN</span>
  </div>
  <div class="flex items-center justify-between bg-obsidian p-3 rounded-xl border border-borderWarm">
    <div><strong class="text-xs text-cream block">Darshana K.</strong><span class="text-[11px] text-muted">Guest, Stay Accommodation, Shagun &amp; Gallery</span></div>
    <span class="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-gold/15 text-gold">FAMILY HOST ADMIN</span>
  </div>
  <div class="flex items-center justify-between bg-obsidian p-3 rounded-xl border border-borderWarm">
    <div><strong class="text-xs text-cream block">Karanji</strong><span class="text-[11px] text-muted">Flight Arrangements, Train Arrangements &amp; Tasks</span></div>
    <span class="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-gold/15 text-gold">LOGISTICS LEAD</span>
  </div>
  <div class="flex items-center justify-between bg-obsidian p-3 rounded-xl border border-borderWarm">
    <div><strong class="text-xs text-cream block">Sonal</strong><span class="text-[11px] text-muted">Events, Sangeeth Lineup &amp; Tasks Checklist</span></div>
    <span class="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-gold/15 text-gold">EVENT COORDINATOR</span>
  </div>
</div>
      `
    },
    {
      module: "calendar", icon: "🗓️", name: "Calendar", badge: "Multi-Days Timeline",
      desc: "Day-by-day master schedule across all wedding events and venues",
      kicker: "CALENDAR",
      title: "Multi-Days Timeline across every function and venue",
      text: "Keep family hosts, photographers, and hospitality staff synchronized with a chronological Multi-Days Timeline spanning your entire celebration.",
      cta: "🗓️ Open Multi-Days Timeline →",
      visual: `
<div class="bento-card p-6 space-y-4">
  <div class="relative pl-6 border-l-2 border-gold/50 space-y-4">
    <div>
      <span class="text-xs font-bold text-gold">DAY 1 • 12 DEC 2026</span>
      <strong class="block text-sm text-cream">12:30 PM Haldi Carnival → 04:30 PM Rajwada Mehendi</strong>
    </div>
    <div>
      <span class="text-xs font-bold text-gold">DAY 2 • 13 DEC 2026</span>
      <strong class="block text-sm text-cream">08:00 PM Starlight Sangeet Gala at Crystal Ballroom</strong>
    </div>
    <div>
      <span class="text-xs font-bold text-gold">DAY 3 • 14 DEC 2026</span>
      <strong class="block text-sm text-cream">06:45 PM Royal Wedding &amp; Reception at Jagmandir Island</strong>
    </div>
  </div>
</div>
      `
    },
  ]
};
