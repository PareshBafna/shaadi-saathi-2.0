// Memories, Shagun & Family Tasks Suite. One object per service: suite card data + deep-dive copy + preview markup.
export const memories = {
  id: "suite3",
  tab: { icon: "🎁", label: "3. Memories, Shagun & Tasks (4)" },
  title: "Memories, Shagun & Family Tasks Suite",
  services: [
    {
      module: "guestbook", icon: "📖", name: "Guestbook", badge: "Family Blessings",
      desc: "Collect heartfelt blessings and digital wishes from attending & outstation elders",
      kicker: "GUESTBOOK",
      title: "Permanent digital archive of family blessings &amp; wishes",
      text: "Relatives who cannot travel and attending elders alike can post heartfelt aashirwad and marriage wishes onto a dedicated family Guestbook wall.",
      cta: "📖 Open Digital Guestbook →",
      visual: `
<div class="grid grid-cols-1 gap-3">
  <div class="bento-card guestbook-pill-card space-y-1">
    <p class="guestbook-quote">“Heartiest congratulations to Aarav and Ananya! Wishing you a lifetime of love and laughter.”</p>
    <div class="flex justify-between text-xs text-gold font-bold"><span>— Anita &amp; Rajesh Sharma (Bride Side Family)</span><span class="text-muted">2h ago</span></div>
  </div>
  <div class="bento-card guestbook-pill-card space-y-1">
    <p class="guestbook-quote">“See you all at Taj Lake Palace! Super excited for the Sangeeth celebrations.”</p>
    <div class="flex justify-between text-xs text-gold font-bold"><span>— Vikram &amp; Geeta Singh (Groom Side Family)</span><span class="text-muted">Yesterday</span></div>
  </div>
  <div class="bento-card guestbook-pill-card space-y-1">
    <p class="guestbook-quote">“Infinite blessings and aashirwad to both families on this joyous union.”</p>
    <div class="flex justify-between text-xs text-gold font-bold"><span>— Shri Jawarilal Bafna (Family Patriarch)</span><span class="text-muted">2 days ago</span></div>
  </div>
</div>
      `
    },
    {
      module: "gallery", icon: "📸", name: "Gallery", badge: "Photo Wall",
      desc: "Curate and share high-resolution event photography albums with guests",
      kicker: "GALLERY",
      title: "High-resolution wedding photo albums organized by ceremony",
      text: "Share official photographer highlights and candid moments with every guest right inside their Guest Pass—organized cleanly by Haldi, Mehendi, Sangeet, and Reception.",
      cta: "📸 Open Photo Gallery →",
      visual: `
<div class="grid grid-cols-3 gap-3">
  <div class="relative h-44 rounded-2xl overflow-hidden border border-borderWarm">
    <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover" alt="Royal Lawns Mehendi" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
      <span class="text-[10px] font-bold uppercase text-gold">Mehendi</span>
      <strong class="text-xs text-cream leading-tight">Royal Lawns Mehendi</strong>
    </div>
  </div>
  <div class="relative h-44 rounded-2xl overflow-hidden border border-borderWarm">
    <img src="https://images.unsplash.com/photo-1545232972-90456021c622?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover" alt="Starlight Sangeet Entry" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
      <span class="text-[10px] font-bold uppercase text-gold">Sangeet</span>
      <strong class="text-xs text-cream leading-tight">Starlight Sangeet Entry</strong>
    </div>
  </div>
  <div class="relative h-44 rounded-2xl overflow-hidden border border-borderWarm">
    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover" alt="Jagmandir Island Mandap" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
      <span class="text-[10px] font-bold uppercase text-gold">Shaadi</span>
      <strong class="text-xs text-cream leading-tight">Jagmandir Island Mandap</strong>
    </div>
  </div>
</div>
      `
    },
    {
      module: "shagun", icon: "🎁", name: "Shagun & Gifts", badge: "₹1,89,100 Logged",
      desc: "Record family Chandla envelopes, gifts & physical invitation delivery status",
      kicker: "SHAGUN &amp; GIFTS",
      title: "Private family Shagun, Chandla &amp; return gift ledger",
      text: "Maintain an accurate, confidential record of Shagun envelopes, silver coins, and gift hampers received from each family so parents can reciprocate accurately at future family weddings.",
      cta: "🎁 Open Shagun &amp; Gifts Ledger →",
      visual: `
<div class="bento-card p-6 space-y-3">
  <div class="flex justify-between items-center pb-3 border-b border-borderWarm">
    <span class="text-xs uppercase font-bold text-muted">Total Logged Shagun</span>
    <strong class="font-serif text-3xl text-gold">₹1,89,100</strong>
  </div>
  <div class="space-y-2 text-xs">
    <div class="flex justify-between bg-obsidian p-3 rounded-xl"><span>Vikram Singh Family (Groom Side)</span><strong class="text-gold font-mono">₹1,01,000 + Silver Coin</strong></div>
    <div class="flex justify-between bg-obsidian p-3 rounded-xl"><span>Anita Sharma Family (Bride Side)</span><strong class="text-gold font-mono">₹51,000 Envelope</strong></div>
    <div class="flex justify-between bg-obsidian p-3 rounded-xl"><span>Rohit Mehra (Friends)</span><strong class="text-gold font-mono">₹21,000 Envelope</strong></div>
  </div>
</div>
      `
    },
    {
      module: "tasks", icon: "✅", name: "Tasks Checklist", badge: "Checklist View",
      desc: "Tick off pre-wedding and event duties with assigned family owner & status",
      kicker: "TASKS CHECKLIST",
      title: "Delegate wedding duties across brothers, sisters &amp; cousins",
      text: "Stop chasing family members on phone calls. Assign pre-wedding errands—like collecting safas, welcome hampers, or USB dance tracks—with clear owners and due dates.",
      cta: "✅ Open Tasks Checklist →",
      visual: `
<div class="bento-card p-5 space-y-2.5">
  <div class="flex items-center justify-between bg-obsidian p-3.5 rounded-xl border border-emeraldSS/40">
    <div class="flex items-center gap-3">
      <span class="w-5 h-5 rounded flex items-center justify-center text-xs font-bold bg-emeraldSS text-obsidian">✓</span>
      <div>
        <strong class="text-xs block line-through text-muted">Confirm 85 Bandhani Safas delivery at Taj lobby</strong>
        <span class="text-[11px] text-gold">Owner: Karanji • Due: 11 Dec</span>
      </div>
    </div>
    <span class="text-[11px] font-bold text-emeraldSS">Completed</span>
  </div>
  <div class="flex items-center justify-between bg-obsidian p-3.5 rounded-xl border border-borderWarm">
    <div class="flex items-center gap-3">
      <span class="w-5 h-5 rounded flex items-center justify-center text-xs font-bold border border-muted text-transparent">✓</span>
      <div>
        <strong class="text-xs block text-cream">Coordinate ceremonial thali setup for main stage</strong>
        <span class="text-[11px] text-gold">Owner: Sonal • Due: 12 Dec</span>
      </div>
    </div>
    <span class="text-[11px] font-bold text-amberSS">In Progress</span>
  </div>
  <div class="flex items-center justify-between bg-obsidian p-3.5 rounded-xl border border-borderWarm">
    <div class="flex items-center gap-3">
      <span class="w-5 h-5 rounded flex items-center justify-center text-xs font-bold border border-muted text-transparent">✓</span>
      <div>
        <strong class="text-xs block text-cream">Handover Sangeet family dance USB tracks to DJ console</strong>
        <span class="text-[11px] text-gold">Owner: Lachi • Due: 12 Dec</span>
      </div>
    </div>
    <span class="text-[11px] font-bold text-amberSS">Pending</span>
  </div>
  <div class="flex items-center justify-between bg-obsidian p-3.5 rounded-xl border border-emeraldSS/40">
    <div class="flex items-center gap-3">
      <span class="w-5 h-5 rounded flex items-center justify-center text-xs font-bold bg-emeraldSS text-obsidian">✓</span>
      <div>
        <strong class="text-xs block line-through text-muted">Collect silver return coins from family jewellery shop</strong>
        <span class="text-[11px] text-gold">Owner: Paresh • Due: 10 Dec</span>
      </div>
    </div>
    <span class="text-[11px] font-bold text-emeraldSS">Completed</span>
  </div>
</div>
      `
    },
  ]
};
