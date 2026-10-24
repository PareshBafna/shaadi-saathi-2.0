export const MODULE_METADATA = {
  overview: { icon: '📊', name: 'Overview & Telemetry', badge: 'Telemetry', desc: 'Live wedding telemetry and metrics' },
  whatsapp: { icon: '💬', name: 'WhatsApp Blaster', badge: 'Messaging', desc: 'Meta-verified invite dispatch & delivery status' },
  hosts: { icon: '👑', name: 'Family Hosts', badge: 'Hosts', desc: 'Individual family host profiles & details' },
  events: { icon: '📅', name: 'Events Schedule', badge: 'Events', desc: 'Ceremonies, venues, timings & dress codes' },
  rsvp: { icon: '👥', name: 'Guest List', badge: 'Guests', desc: 'Family members, RSVP status, pax & tiers' },
  guests: { icon: '👥', name: 'Guest List', badge: 'Guests', desc: 'Family members, RSVP status, pax & tiers' },
  webinvites: { icon: '💌', name: 'Web Invite Pass', badge: 'Invitation', desc: 'Interactive 3D wax-seal royal web invitation' },
  'web-invite': { icon: '💌', name: 'Web Invite Pass', badge: 'Invitation', desc: 'Interactive 3D wax-seal royal web invitation' },
  rooms: { icon: '🏨', name: 'Stay Accommodation', badge: 'Rooms', desc: 'Hotel inventory, room cards & outstation stay' },
  flights: { icon: '✈️', name: 'Flight Manifest', badge: 'Travel', desc: 'Air arrivals, route groups & PNR tracker' },
  trains: { icon: '🚆', name: 'Train Manifest', badge: 'Travel', desc: 'Train arrivals, platforms & IRCTC PNR' },
  sangeet: { icon: '🎵', name: 'Sangeet Lineup', badge: 'Performances', desc: 'Stage performance cues, songs & props' },
  guestbook: { icon: '📖', name: 'Guestbook Wishes', badge: 'Blessings', desc: 'Digital blessings & aashirwad board' },
  gallery: { icon: '🖼️', name: 'Photo Gallery', badge: 'Media', desc: 'Cloud albums & event photography' },
  shagun: { icon: '🧧', name: 'Shagun Ledger', badge: 'Finance', desc: 'Traditional envelopes & gift registry' },
  tasks: { icon: '✅', name: 'Tasks Checklist', badge: 'Operations', desc: 'Family responsibility task assignments' },
  vendors: { icon: '🤝', name: 'Vendors & Payouts', badge: 'Contracts', desc: 'Supplier contracts & payment milestones' },
  budget: { icon: '₹', name: 'Budget Planner', badge: 'Cashflow Ledger', desc: 'Supplier contracts, advance paid & remaining balance due' },
  calendar: { icon: '🗓️', name: 'Wedding Calendar', badge: 'Schedule', desc: 'Master ceremony timeline and key milestones' },
  'team-access': { icon: '🔐', name: 'Role & Team Access', badge: 'Permissions', desc: 'Manage Creator, Host, User, and Guest permissions' }
};

export function buildModuleHeaderHTML(moduleId) {
  const modInfo = MODULE_METADATA[moduleId] || {
    icon: '📊',
    name: moduleId.toUpperCase(),
    badge: 'Module',
    desc: 'Feature module view'
  };

  return `
    <div class="bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-surface via-card to-surface">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-3xl shrink-0">${modInfo.icon}</div>
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-gold">Feature Workspace</span>
          <h3 class="font-serif text-3xl font-bold text-cream mt-0.5">${modInfo.name}</h3>
          <p class="text-sm text-muted">${modInfo.desc}</p>
        </div>
      </div>
      <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emeraldSS/15 text-emeraldSS border border-emeraldSS/30 shrink-0">● ${modInfo.badge}</span>
    </div>
  `;
}